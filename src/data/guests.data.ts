//============================================================================//
//=================|    Imports     |=========================================//
//============================================================================//

import genteChegando from "../assets/guests-images/gente-chegando.webp";

import linkedinIcon from "../assets/icons/linkedin-icon.webp";
import instagramIcon from "../assets/icons/instagram-icon.webp";
import xIcon from "../assets/icons/x-icon.png";
import coconut from "../assets/icons/coconut.webp";

import generatedSheetGuests from "./guests.sheet.json";

// 2022
import giovannaFranchiniPhoto from "../assets/guests-images/2022/giovanna-franchini.webp";
import leonardoChieppePhoto from "../assets/guests-images/2022/leonardo-chieppe.webp";
import arthurRDeSouzaPhoto from "../assets/guests-images/2022/arthur-r-de-souza.webp";
import leonardoTPereiraPhoto from "../assets/guests-images/2022/leonardo-t-pereira.webp";
import apoenaHerreroPhoto from "../assets/guests-images/2022/apoena-herrero.webp";
import ivanDGardePhoto from "../assets/guests-images/2022/ivan-d-garde.webp";
import stefaniaPecorePhoto from "../assets/guests-images/2022/stefania-percore.webp";
import daniSerranuPhoto from "../assets/guests-images/2022/dani-serranu.webp";
import lucianaGBoldoriniPhoto from "../assets/guests-images/2022/luciana-g-boldorini.webp";
import ivarPJuniorPhoto from "../assets/guests-images/2022/ivar-p-junior.webp";
import lisaYTaguchiPhoto from "../assets/guests-images/2022/lisa-y-taguchi.webp";
import rennanGonçalvezPhoto from "../assets/guests-images/2022/rennan-goncalvez.webp";
import guilhermeDaCasPhoto from "../assets/guests-images/2022/guilherme-da-cas.webp";
import joaoMBeraldoPhoto from "../assets/guests-images/2022/joão-m-beraldo.webp";

// 2023
import marioGazziroPhoto from "../assets/guests-images/2023/mario-gazziro.webp";
import abnerEduardoSilveiraSantosPhoto from "../assets/guests-images/2023/abner-eduardo-silveira-santos.webp";
import raquelGontijoPhoto from "../assets/guests-images/2023/raquel-gontijo.webp";
import tiagoMarinoSilvaPhoto from "../assets/guests-images/2023/tiago-marino-silva.webp";
import joaoVictorRodriguesPhoto from "../assets/guests-images/2023/joao-victor-rodrigues.webp";
import carolinaDeSaPhoto from "../assets/guests-images/2023/carolina-de-sa.webp";
import mateusResendePaludettiPhoto from "../assets/guests-images/2023/mateus-resende-paludetti.webp";
import leonardoTortoroPereiraPhoto from "../assets/guests-images/2023/leonardo-tortoro-pereira.webp";
import liviaScienzaPhoto from "../assets/guests-images/2023/livia-scienza.webp";
import danielXimenesPhoto from "../assets/guests-images/2023/daniel-ximenes.webp";

// 2024
import augustoMirandaGarciaPhoto from "../assets/guests-images/2024/augusto-miranda-garcia.jpg";
import melinaJuraskiPhoto from "../assets/guests-images/2024/melina-juraski.jpg";
import terriVelmanPhoto from "../assets/guests-images/2024/terri-velman.jpg";
import fernandoAraujoPhoto from "../assets/guests-images/2024/fernando-araujo.jpg";
import guilhermeGiacominiPhoto from "../assets/guests-images/2024/guilherme-giacomini.jpg";
import rafaelGaribPhoto from "../assets/guests-images/2024/rafael-garib.jpeg";

// 2025
import alessandroFranzenPhoto from "../assets/guests-images/2025/alessandro-franzen.jpg";
import thaisWeillerPhoto from "../assets/guests-images/2025/thais-weiller.jpeg";
import liminalRoadPhoto from "../assets/guests-images/2025/liminal-road.jpg";
import andreSanteePhoto from "../assets/guests-images/2025/andre-santee.jpeg";
import kamilaRiosPhoto from "../assets/guests-images/2025/kamila-rios.jpeg";
import playborLogo from "../assets/guests-images/2025/playbor.png";

//============================================================================//
//=================|    Types   |=============================================//
//============================================================================//

export type SocialNetwork = "X" | "Instagram" | "LinkedIn";

export interface GuestType {
  name: string;
  title: string;
  years: string[];
  img: string;
  alt?: string; // NOTE: the text `Foto retrato de {NOME}` will be used if alt is undefined.
  email?: string;
  socials?: { social: SocialNetwork; link: string }[];
}

interface SheetGuestType {
  name: string;
  title: string;
  years: string[];
  img?: string;
  email?: string;
  socials?: { social: SocialNetwork; link: string }[];
}

//============================================================================//
//=================|    Some functions      |=================================//
//============================================================================//

export function getSocialNetLogos(socialNetName: SocialNetwork) {
  switch (socialNetName) {
    case "LinkedIn":
      return linkedinIcon;
    case "Instagram":
      return instagramIcon;
    case "X":
      return xIcon;
    default:
      return coconut;
  }
}

//============================================================================//
//=================|    Data    |=============================================//
//============================================================================//

const localGuests: GuestType[] = [
  {
    name: "Vem Aí!",
    title: "Em breve!",
    years: ["2025"],
    img: genteChegando,
    alt: "Imagem contendo o texto estilizado 'tem gente chegando'.",
  },
  // 2022
  {
    name: "Giovanna Franchini",
    title: "Pulsatrix",
    years: ["2022"],
    img: giovannaFranchiniPhoto,
  },
  {
    name: "Leonardo Chieppe",
    title: "Strawberry Fields Interactive",
    years: ["2022"],
    img: leonardoChieppePhoto,
  },
  {
    name: "Arthur R. de Souza",
    title: "Siemens Energy",
    years: ["2022"],
    img: arthurRDeSouzaPhoto,
  },
  {
    name: "Leonardo T. Pereira",
    title: "Prof. ICMC - USP",
    years: ["2022"],
    img: leonardoTPereiraPhoto,
  },
  {
    name: "Apoena Herrero",
    title: "Ubisoft Montreal",
    years: ["2022"],
    img: apoenaHerreroPhoto,
  },
  {
    name: "Ivan D. Garde",
    title: "Vela Games",
    years: ["2022"],
    img: ivanDGardePhoto,
  },
  {
    name: "Stefania Pecòre",
    title: "Behaviour Interactive",
    years: ["2022"],
    img: stefaniaPecorePhoto,
  },
  {
    name: "Dani Serranú",
    title: "A Shell In The Pit",
    years: ["2022"],
    img: daniSerranuPhoto,
  },
  {
    name: "Luciana G.Boldorini",
    title: "Rook",
    years: ["2022"],
    img: lucianaGBoldoriniPhoto,
    socials: [
      {
        social: "Instagram",
        link: "https://www.instagram.com/rooktraducao/",
      },
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/lucianagaleaniboldorini/",
      },
    ],
  },
  {
    name: "Ivar P. Junior",
    title: "Rook",
    years: ["2022"],
    img: ivarPJuniorPhoto,
    socials: [
      {
        social: "Instagram",
        link: "https://www.instagram.com/rooktraducao/",
      },
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/ivarjr/",
      },
    ],
  },
  {
    name: "Lisa Y. Taguchi",
    title: "Dumativa",
    years: ["2022"],
    img: lisaYTaguchiPhoto,
  },
  {
    name: "Rennan Gonçalvez",
    title: "Dumativa",
    years: ["2022"],
    img: rennanGonçalvezPhoto,
  },
  {
    name: "Guilherme Da Cas",
    title: "AQUIRIS",
    years: ["2022"],
    img: guilhermeDaCasPhoto,
  },
  {
    name: "João M. Beraldo ",
    title: "Ubisoft Singapura",
    years: ["2022"],
    img: joaoMBeraldoPhoto,
  },
  // 2023
  {
    name: "Mário Gazziro",
    title: "UFABC",
    years: ["2023", "2024", "2025"],
    img: marioGazziroPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/mario-gazziro-1a41712a3/",
      },
    ],
  },
  {
    name: "Abner Eduardo Silveira Santos",
    title: "Kokku Games",
    years: ["2023"],
    img: abnerEduardoSilveiraSantosPhoto,
  },
  {
    name: "Raquel Gontijo",
    title: "Rogue Snail",
    years: ["2023"],
    img: raquelGontijoPhoto,
  },
  {
    name: "Tiago Marino Silva",
    title: "Flux Games",
    years: ["2023"],
    img: tiagoMarinoSilvaPhoto,
  },
  {
    name: "João Victor de Oliveira Rodrigues",
    title: "Umbu Games",
    years: ["2023"],
    img: joaoVictorRodriguesPhoto,
  },
  {
    name: "Carolina de Sá",
    title: "Dumativa",
    years: ["2023"],
    img: carolinaDeSaPhoto,
  },
  {
    name: "Mateus Resende Paludetti",
    title: "Black Sauva",
    years: ["2023"],
    img: mateusResendePaludettiPhoto,
  },
  {
    name: "Leonardo Tortoro Pereira",
    title: "Prof. IGCE-UNESP",
    years: ["2023", "2024", "2025"],
    img: leonardoTortoroPereiraPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/leotpereira/",
      },
    ],
  },
  {
    name: "Lívia Scienza",
    title: "Doutoranda - UFSCAR",
    years: ["2023"],
    img: liviaScienzaPhoto,
  },
  {
    name: "Daniel Ximenes",
    title: "Dumativa",
    years: ["2023"],
    img: danielXimenesPhoto,
  },
  {
    name: "Augusto Miranda Garcia",
    title: "Afterverse",
    years: ["2024"],
    img: augustoMirandaGarciaPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/augusto-garcia-6880057a",
      },
    ],
  },
  {
    name: "Melina Juraski",
    title: "Sunblack Game Studio",
    years: ["2024"],
    img: melinaJuraskiPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/melinajuraski1408/en?trk=public_post_main-feed-card_reshare-text",
      },
    ],
  },
  {
    name: "Terri Velman",
    title: "Indie Dev",
    years: ["2024"],
    img: terriVelmanPhoto,
    socials: [
      {
        social: "X",
        link: "https://x.com/terrivellmann",
      },
    ],
  },
  {
    name: "Fernando Araujo",
    title: "INK-EYE Games",
    years: ["2024"],
    img: fernandoAraujoPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/fernando-gamedev",
      },
    ],
  },
  {
    name: "Guilherme Giacomini",
    title: "ARVORE Immersive Experiences",
    years: ["2024"],
    img: guilhermeGiacominiPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/gmgiacomini",
      },
    ],
  },
  {
    name: "Rafael Garib",
    title: "Wildlife",
    years: ["2024"],
    img: rafaelGaribPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/rafael-garib-jankauskas-30354856",
      },
    ],
  },
  // 2025
  {
    name: "Alessandro Franzen",
    title: "Muito Abaixo do Oceano RPG",
    years: ["2025"],
    img: alessandroFranzenPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://br.linkedin.com/in/alessandro-franzen45bb2ab",
      },
      {
        social: "Instagram",
        link: "https://www.instagram.com/muitoabaixodooceano/",
      },
      {
        social: "X",
        link: "https://www.x.com/gyngaeditora",
      },
    ],
  },
  {
    name: "Thais Weiller",
    title: "Game Designer",
    years: ["2025"],
    img: thaisWeillerPhoto,
    socials: [
      {
        social: "Instagram",
        link: "https://www.instagram.com/thaisweiller",
      },
      {
        social: "X",
        link: "https://www.x.com/thaisweiller",
      },
    ],
  },
  {
    name: "Liminal Road",
    title: "Game Studio",
    years: ["2025"],
    img: liminalRoadPhoto,
    socials: [
      {
        social: "Instagram",
        link: "https://www.instagram.com/liminalroadstudio",
      },
      {
        social: "X",
        link: "https://www.x.com/liminalroad",
      },
    ],
  },
  {
    name: "André Santee",
    title: "Magic Rampage",
    years: ["2025"],
    img: andreSanteePhoto,
    socials: [
      {
        social: "Instagram",
        link: "https://www.instagram.com/magicrampagegame/",
      },
      {
        social: "X",
        link: "https://x.com/magicrampage",
      },
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/andre-santee",
      },
    ],
  },
  {
    name: "Kamila Rios",
    title: "Prof. ICMC - USP",
    years: ["2025"],
    img: kamilaRiosPhoto,
    socials: [
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/in/kamila-rios-h-rodrigues-1538b433/",
      },
    ],
  },
  {
    name: "Playbor",
    title: "Consultoria Especializada na Indústria de Games",
    years: ["2025"],
    img: playborLogo,
    socials: [
      {
        social: "LinkedIn",
        link: "https://www.linkedin.com/company/playbor/",
      },
    ],
  },
];

//============================================================================//
//=================|    Google Sheets guests     |============================//
//============================================================================//

const localGuestImages = import.meta.glob<string>(
  "../assets/guests-images/**/*.{webp,png,jpg,jpeg,gif}",
  { eager: true, import: "default" }
);

const localGuestImagesByPath = new Map(
  Object.entries(localGuestImages).map(([path, src]) => [
    path.replace("../assets/guests-images/", ""),
    src,
  ])
);

const localGuestImagesByName = new Map<string, string>();
Object.entries(localGuestImages).forEach(([path, src]) => {
  const fileName = path.split("/").pop();
  if (fileName && !localGuestImagesByName.has(fileName)) {
    localGuestImagesByName.set(fileName, src);
  }
});

function resolveGuestImage(img?: string): string | undefined {
  if (!img) return undefined;
  if (/^https?:\/\//i.test(img)) return img;

  const path = img
    .replace(/^\/+/, "")
    .replace(/^src\/assets\/guests-images\//, "");
  return (
    localGuestImagesByPath.get(path) ??
    localGuestImagesByName.get(path.split("/").pop() ?? "")
  );
}

const sheetGuestsData = generatedSheetGuests as unknown as SheetGuestType[];

const sheetGuests: SheetGuestType[] = sheetGuestsData.map(guest => ({
  name: guest.name,
  title: guest.title ?? "",
  years: guest.years,
  img: resolveGuestImage(guest.img),
  email: guest.email,
  socials: guest.socials?.map(social => ({
    social: social.social as SocialNetwork,
    link: social.link,
  })),
}));

const guestKey = (name: string) =>
  name
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const mergedGuests: GuestType[] = [...localGuests];
const appendedSheetGuests: GuestType[] = [];

sheetGuests.forEach(guest => {
  const key = guestKey(guest.name);
  const localIndex = mergedGuests.findIndex(
    local =>
      guestKey(local.name) === key &&
      local.years.some(year => guest.years.includes(year))
  );
  const local = localIndex >= 0 ? mergedGuests[localIndex] : undefined;
  const image = guest.img ?? local?.img;

  const merged: GuestType = {
    name: guest.name,
    title: guest.title || local?.title || "",
    years: [...new Set([...(local?.years ?? []), ...guest.years])].sort(
      (a, b) => Number(a) - Number(b)
    ),
    img: image ?? genteChegando,
    alt:
      local?.alt ??
      (image
        ? undefined
        : "Imagem contendo o texto estilizado 'tem gente chegando'."),
    email: guest.email ?? local?.email,
    socials:
      guest.socials && guest.socials.length > 0
        ? guest.socials
        : local?.socials,
  };

  if (localIndex >= 0) {
    mergedGuests[localIndex] = merged;
  } else {
    appendedSheetGuests.push(merged);
  }
});

export const guests: GuestType[] = [...mergedGuests, ...appendedSheetGuests];

//============================================================================//
//=================|    Group guests by year     |============================//
//============================================================================//

export const years: string[] = [...new Set(guests.flatMap(g => g.years))].sort(
  (a, b) => Number(b) - Number(a)
);

export const guests_per_year: { year: string; guests: GuestType[] }[] =
  years.map(year => ({
    year,
    guests: guests.filter(guest => guest.years.includes(year)),
  }));
