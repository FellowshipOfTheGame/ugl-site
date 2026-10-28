import { access, mkdir, writeFile } from 'node:fs/promises';
import { dirname, extname, join, posix, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { unzipSync } from 'fflate';

const SHEET_ID = '1TjoAHwIDCE14RHhAm_lk-0UGcJOIeFg_VP6kPE5XNFY';
const SHEET_GID = '0';
const SHEET_BASE_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}`;
const SHEET_URL =
  process.env.GUESTS_SHEET_URL ??
  `${SHEET_BASE_URL}/export?format=csv&gid=${SHEET_GID}`;
const XLSX_URL =
  process.env.GUESTS_SHEET_XLSX_URL ??
  `${SHEET_BASE_URL}/export?format=xlsx&gid=${SHEET_GID}`;
const OUTPUT_PATH = process.env.GUESTS_SHEET_OUTPUT
  ? resolve(process.env.GUESTS_SHEET_OUTPUT)
  : fileURLToPath(new URL('../src/data/guests.sheet.json', import.meta.url));
const OUTPUT_LABEL = relative(process.cwd(), OUTPUT_PATH);
const GUESTS_IMAGES_DIR = process.env.GUESTS_IMAGES_DIR
  ? resolve(process.env.GUESTS_IMAGES_DIR)
  : fileURLToPath(new URL('../src/assets/guests-images', import.meta.url));

const REQUIRED_HEADERS = ['name', 'title', 'years'];
const SOCIAL_COLUMNS = [
  ['linkedin', 'LinkedIn'],
  ['instagram', 'Instagram'],
  ['x', 'X'],
];

function warn(message) {
  console.warn(`[guests:sync] ${message}`);
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    if (inQuotes) {
      if (char === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += char;
      }
      continue;
    }

    if (char === '"') {
      inQuotes = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (char !== '\r') {
      field += char;
    }
  }

  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }

  return rows.filter(cells => cells.some(cell => cell.trim() !== ''));
}

function normalizeName(name) {
  return name
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function slugify(value) {
  return (
    value
      .trim()
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'guest'
  );
}

function parseYears(value) {
  const matches = value.match(/\b\d{4}\b/g) ?? [];
  return [...new Set(matches)]
    .filter(year => Number(year) >= 2000 && Number(year) <= 2100)
    .sort((a, b) => Number(a) - Number(b));
}

function normalizeUrl(value) {
  const trimmed = value.trim();
  if (!trimmed) return undefined;

  if (/^[a-z][a-z0-9+.-]*:/i.test(trimmed) && !/^https?:/i.test(trimmed)) {
    return undefined;
  }

  try {
    const url = new URL(
      /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
    );
    return url.protocol === 'http:' || url.protocol === 'https:'
      ? url.href
      : undefined;
  } catch {
    return undefined;
  }
}

function normalizeEmail(value) {
  const trimmed = value.trim();
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed) ? trimmed : undefined;
}

function normalizeImage(value, rowNumber) {
  const trimmed = value.trim();
  if (!trimmed) return undefined;

  if (/^https?:\/\//i.test(trimmed) || /^www\./i.test(trimmed)) {
    const url = normalizeUrl(trimmed);
    if (!url) {
      warn(`row ${rowNumber}: ignoring invalid image URL "${trimmed}"`);
    }
    return url;
  }

  return trimmed;
}

function prepareSheet(csv) {
  const rows = parseCsv(csv.replace(/^\uFEFF/, ''));
  if (rows.length === 0) {
    throw new Error('The Google Sheet is empty.');
  }

  const headers = rows[0].map(header => header.trim().toLowerCase());
  const columnIndex = new Map(headers.map((header, index) => [header, index]));

  for (const header of REQUIRED_HEADERS) {
    if (!columnIndex.has(header)) {
      throw new Error(
        `The Google Sheet is missing the required "${header}" column. Expected headers: ${REQUIRED_HEADERS.join(', ')}.`
      );
    }
  }

  return { rows, columnIndex };
}

function parseSheet(rows, columnIndex, imagesByRow = new Map()) {
  const getCell = (row, header) => {
    const index = columnIndex.get(header);
    return index === undefined ? '' : (row[index] ?? '').trim();
  };

  const guestsByName = new Map();

  for (let i = 1; i < rows.length; i++) {
    const row = rows[i];
    const rowNumber = i + 1;
    const name = getCell(row, 'name');

    if (!name) {
      warn(`row ${rowNumber}: skipping guest without a name`);
      continue;
    }

    const years = parseYears(getCell(row, 'years'));
    if (years.length === 0) {
      warn(`row ${rowNumber}: skipping "${name}" because it has no valid year`);
      continue;
    }

    const title = getCell(row, 'title');
    const image =
      normalizeImage(getCell(row, 'img'), rowNumber) ?? imagesByRow.get(i);
    if (!image) {
      warn(`row ${rowNumber}: "${name}" has no image, using the placeholder`);
    }

    const rawEmail = getCell(row, 'email');
    const email = normalizeEmail(rawEmail);
    if (rawEmail && !email) {
      warn(`row ${rowNumber}: ignoring invalid email "${rawEmail}"`);
    }

    const socials = [];

    for (const [column, social] of SOCIAL_COLUMNS) {
      if (!columnIndex.has(column)) continue;

      const rawLink = getCell(row, column);
      if (!rawLink) continue;

      const link = normalizeUrl(rawLink);
      if (!link) {
        warn(
          `row ${rowNumber}: ignoring invalid ${social} URL "${rawLink}" for "${name}"`
        );
        continue;
      }

      socials.push({ social, link });
    }

    const guest = { name, title, years };
    if (image) guest.img = image;
    if (email) guest.email = email;
    if (socials.length > 0) guest.socials = socials;

    const key = normalizeName(name);
    const group = guestsByName.get(key) ?? [];
    const existing = group.find(existingGuest =>
      existingGuest.years.some(year => guest.years.includes(year))
    );

    if (!existing) {
      group.push(guest);
      guestsByName.set(key, group);
      continue;
    }

    warn(`row ${rowNumber}: merging duplicate guest "${name}"`);
    existing.years = [...new Set([...existing.years, ...guest.years])].sort(
      (a, b) => Number(a) - Number(b)
    );
    if (guest.title) existing.title = guest.title;
    if (guest.img) existing.img = guest.img;
    if (guest.email) existing.email = guest.email;
    if (guest.socials) existing.socials = guest.socials;
  }

  return [...guestsByName.values()].flat();
}

function parseRelationships(xml) {
  const relationships = new Map();

  for (const match of xml.matchAll(/<Relationship\b[^>]*\/>/g)) {
    const tag = match[0];
    const id = tag.match(/\bId="([^"]+)"/)?.[1];
    const target = tag.match(/\bTarget="([^"]+)"/)?.[1];
    if (id && target) relationships.set(id, target);
  }

  return relationships;
}

function getDrawingAnchors(files) {
  const anchors = [];
  const decoder = new TextDecoder();

  for (const [path, data] of Object.entries(files)) {
    const drawingMatch = path.match(/^xl\/drawings\/(drawing\d+\.xml)$/);
    if (!drawingMatch) continue;

    const relationshipsData =
      files[`xl/drawings/_rels/${drawingMatch[1]}.rels`];
    if (!relationshipsData) continue;

    const relationships = parseRelationships(decoder.decode(relationshipsData));
    const drawingXml = decoder.decode(data);
    const anchorPattern =
      /<xdr:(oneCellAnchor|twoCellAnchor)>([\s\S]*?)<\/xdr:\1>/g;

    for (const match of drawingXml.matchAll(anchorPattern)) {
      const body = match[2];
      const from = body.match(/<xdr:from>([\s\S]*?)<\/xdr:from>/)?.[1] ?? '';
      const column = from.match(/<xdr:col>(\d+)<\/xdr:col>/)?.[1];
      const row = from.match(/<xdr:row>(\d+)<\/xdr:row>/)?.[1];
      const embed = body.match(/\br:embed="([^"]+)"/)?.[1];
      const target = embed ? relationships.get(embed) : undefined;

      if (!column || !row || !target) continue;

      anchors.push({
        column: Number(column),
        row: Number(row),
        mediaPath: posix.normalize(posix.join('xl/drawings', target)),
      });
    }
  }

  return anchors;
}

async function extractSheetImages({ rows, columnIndex }, xlsxData) {
  const imagesByRow = new Map();
  const imageColumn = columnIndex.get('img');
  const nameColumn = columnIndex.get('name');
  const yearsColumn = columnIndex.get('years');

  if (
    imageColumn === undefined ||
    nameColumn === undefined ||
    yearsColumn === undefined
  ) {
    return imagesByRow;
  }

  const files = unzipSync(xlsxData);
  const usedNames = new Set();

  for (const anchor of getDrawingAnchors(files)) {
    if (anchor.column !== imageColumn) continue;

    const row = rows[anchor.row];
    if (!row) continue;

    const name = (row[nameColumn] ?? '').trim();
    const years = parseYears(row[yearsColumn] ?? '');
    if (!name || years.length === 0) continue;

    const imageData = files[anchor.mediaPath];
    if (!imageData) {
      warn(`could not find image data for row ${anchor.row + 1}`);
      continue;
    }

    const extension = extname(anchor.mediaPath).toLowerCase() || '.jpg';
    const year = years[years.length - 1];
    const baseName = slugify(name);
    let fileName = `${baseName}${extension}`;
    let suffix = 2;

    while (usedNames.has(`${year}/${fileName}`)) {
      fileName = `${baseName}-${suffix}${extension}`;
      suffix++;
    }
    usedNames.add(`${year}/${fileName}`);

    const directory = join(GUESTS_IMAGES_DIR, year);
    const outputPath = join(directory, fileName);
    await mkdir(directory, { recursive: true });
    await writeFile(outputPath, imageData);

    imagesByRow.set(anchor.row, `${year}/${fileName}`);
    console.log(
      `[guests:sync] extracted image for "${name}" into ${relative(process.cwd(), outputPath)}`
    );
  }

  return imagesByRow;
}

async function fetchXlsx() {
  const response = await fetch(XLSX_URL, {
    redirect: 'follow',
    signal: AbortSignal.timeout(30_000),
  });

  if (!response.ok) {
    throw new Error(
      `Google Sheets XLSX export responded with ${response.status} ${response.statusText}.`
    );
  }

  return new Uint8Array(await response.arrayBuffer());
}

async function fetchSheet() {
  const response = await fetch(SHEET_URL, {
    redirect: 'follow',
    signal: AbortSignal.timeout(30_000),
  });

  if (!response.ok) {
    throw new Error(
      `Google Sheets responded with ${response.status} ${response.statusText}.`
    );
  }

  return response.text();
}

async function keepExistingData() {
  try {
    await access(OUTPUT_PATH);
    warn(`keeping the existing ${OUTPUT_LABEL}`);
  } catch {
    await mkdir(dirname(OUTPUT_PATH), { recursive: true });
    await writeFile(OUTPUT_PATH, '[]\n', 'utf8');
    warn(`wrote an empty fallback to ${OUTPUT_LABEL}`);
  }
}

async function main() {
  let csv;

  try {
    csv = await fetchSheet();
  } catch (error) {
    warn(`could not fetch the Google Sheet: ${error.message}`);
    await keepExistingData();
    return;
  }

  const sheet = prepareSheet(csv);
  let imagesByRow = new Map();

  if (XLSX_URL) {
    try {
      const xlsx = await fetchXlsx();
      imagesByRow = await extractSheetImages(sheet, xlsx);
    } catch (error) {
      warn(`could not extract in-cell images: ${error.message}`);
    }
  }

  const guests = parseSheet(sheet.rows, sheet.columnIndex, imagesByRow);
  await mkdir(dirname(OUTPUT_PATH), { recursive: true });
  await writeFile(OUTPUT_PATH, `${JSON.stringify(guests, null, 2)}\n`, 'utf8');
  console.log(
    `[guests:sync] synced ${guests.length} guest(s) into ${OUTPUT_LABEL}`
  );
}

main().catch(error => {
  console.error(`[guests:sync] ${error.message}`);
  process.exitCode = 1;
});
