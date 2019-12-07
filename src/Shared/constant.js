export const CONFIG_PATH =  require('../assets/config.json');
export const CONFIG = {APIS: 'DBURL', API_VERSION: 'DBURL_VERSION', WEB_SOCKET: 'WSURL', ORG_URL: 'ORG_URL', LOCAL: 'LOCAL'};
export const SHOW = ''


const getCookie = (cname) => {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
};

let ADMIN_PANEL_SERVER = getCookie(CONFIG.APIS);

/** URL strings used in API calls */
export const ADMIN_PANEL_URL_API = {
    /**
     * Login api
     */
    LOGIN: ADMIN_PANEL_SERVER + 'users/admin/login',
    UPDATE_PASSWORD: ADMIN_PANEL_SERVER + 'users/update/password'
}
/** Constants used in local storage */
export const LOCAL_STORAGE = {
    /** Keys that represent data index in localStorage */
    KEYS: {
        /** Authorization token */
        TOKEN: 'oz-access-token',
        /** userId of the authorized user */
        USER_ID: 'oz-user-id',
        /** Client Id */
        CLIENT_ID: 'oz-client-id',
        /** organization name of user */
        ORG_NAME: 'u-org-name',
        /** organization time difference value in seconds of org */
        ORG_TIME_DIFF: 'u-org-timeDiff',
        /** user details */
        OZ_USER: 'oz-user',
        /** user unit details */
        OZ_UNITS: 'oz-units',
        /** save aqi storage data */
        OZ_AQI: 'oz-aqi',
        OZ_AVG_VIEW: 'oz-avg-view'
    },
    /** database url */
    OZ_DATABASE: 'oz-db',
    /** database version url */
    OZ_DATABASE_VERSION: 'oz-db-version',
    /** socket url */
    OZ_SOCKET_URL: 'oz-socket-url',
    /** local deployment */
    OZ_LOCAL_DEPLOYMENT: 'oz-local',
    /** organization url */
    OZ_ORG_URL: 'oz-org-url',
    /** sharable link */
    OZ_SHARE_LINK: 'oz-share',
    /** fields constant */
    OZ_FIELDS: 'oz-fields',
    /** params constant */
    OZ_ALL_PARAMS: 'oz-all-params',
    /** payment due */
    OZ_PAYMENT_DUE: 'oz-expire-time',
    /** modules validate */
    OZ_MODULES: 'oz-module-validate',
    /** all aqi data */
    OZ_ALL_AQI: 'oz-all-aqi'
};