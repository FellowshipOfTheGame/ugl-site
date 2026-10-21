import moment from 'moment-timezone';

export const UGL_COLOR_BLUE = '#282D63';
export const UGL_COLOR_YELLOW = '#F89421';
export const UGL_COLOR_RED = '#C3262E';
export const UGL_COLOR_GREEN = '#8BC63F';
export const UGLDate = moment
  .tz('2026-11-06T14:00:00', 'UTC')
  .tz('America/Sao_Paulo')
  .toISOString();
export const UGLDatePortuguese = "06 a 08 de Novembro"
// export const APP_ROOT = '/ugl';
export const APP_ROOT = '/';

export const EM_BREVE = false;
export const SHOW_DATE = true;