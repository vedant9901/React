export const CONFIG_PATH =  require('../assets/config.json');
export const CONFIG = {APIS: 'DBURL', API_VERSION: 'DBURL_VERSION', WEB_SOCKET: 'WSURL', ORG_URL: 'ORG_URL', LOCAL: 'LOCAL'};



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
console.log(ADMIN_PANEL_SERVER,"asd",CONFIG.APIS)
/** URL strings used in API calls */
export const ADMIN_PANEL_URL_API = {
    /**
     * Login api
     */
    LOGIN: ADMIN_PANEL_SERVER + 'users/admin/login',
    UPDATE_PASSWORD: ADMIN_PANEL_SERVER + 'users/update/password'
}