import moment from 'moment-timezone';

export const UGLDate = moment.tz('2024-11-23T14:00:00', 'UTC').tz('America/Sao_Paulo').toISOString();
// export const APP_ROOT = '/ugl';
export const APP_ROOT = '/';

