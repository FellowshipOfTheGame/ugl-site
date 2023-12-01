import moment from 'moment-timezone';

export const UGLDate = moment.tz('2023-11-24T14:00:00', 'UTC').tz('America/Sao_Paulo').toISOString();
export const APP_ROOT = '/ugl';