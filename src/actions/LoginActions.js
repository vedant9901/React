/**
 * All Login function used for API calls are defined and used here
 * @author vedant9901
 * @since 0.0.1
 * @version 0.0.1
 */

import axios from 'axios';
// let CONFIG = require('../assets/config.json')
import {ADMIN_PANEL_URL_API,LOCAL_STORAGE} from '../Shared/constant';


export function doLogin(req,res){
    
        var headers;
        //email=yash@oizom.com&password=oizom@yash2
        // This is done as an react alternative of appending form data
        var formData = new FormData(); 
        formData.append('email',req.email)
        formData.append('password',req.password)
        let body = formData
        
        // make http post request to login API. return the observable to controller to handle post-request behaviour
        return axios.post(ADMIN_PANEL_URL_API.LOGIN, body, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(Response => {
                   // convert response to JSON format
                   let srRes = Response;
                   console.log(srRes)
                     // store user id and access token
                        localStorage.setItem('oz-user-id', srRes.data.userId);
                        // store access token
                        localStorage.setItem('oz-access-token', srRes.data.token.access_token);
                        // store client Id
                        localStorage.setItem('oz-client-id', srRes.client_id);
                        // load photo URL to localStorage
                        localStorage.setItem('sidenav-logo', ((srRes.data.company && srRes.data.company.logoUrl) ? srRes.data.company.logoUrl : '../assets/oizom-about.png'));
                        // localStorage.setItem('sidenav-logo', ((srRes.company && srRes.company.logoUrl) ? srRes.company.logoUrl : 'https://terminal.oizom.com/assets/oizom-about.png'));
                        // set company name from user information if available
                        localStorage.setItem('u-org-name', ((srRes.data.company && srRes.data.company.orgName) ? srRes.data.company.orgName : 'Oizom'));
                        // set company time difference from information if available
                        localStorage.setItem('u-org-timeDiff', ((srRes.data.company && srRes.data.company.orgTimeDiff) ? srRes.data.company.orgTimeDiff : 19800));
                        // set user units from api
                        localStorage.setItem(LOCAL_STORAGE.KEYS.OZ_UNITS, JSON.stringify(srRes.data.limits));
                        // set payment due session time out
                        localStorage.setItem(LOCAL_STORAGE.OZ_PAYMENT_DUE, srRes.data.token.expire_on);
                        // set share url
                        localStorage.setItem(LOCAL_STORAGE.OZ_SHARE_LINK, srRes.share_url);
                        if (srRes.settings && srRes.settings.cityAqi) {
                            localStorage.setItem(LOCAL_STORAGE.KEYS.OZ_AVG_VIEW, srRes.data.settings.cityAqi);
                        } else {
                            localStorage.setItem(LOCAL_STORAGE.KEYS.OZ_AVG_VIEW, 'false');
                        }
                        // store access token
                        if (srRes.data.token.token) {
                            localStorage.setItem(LOCAL_STORAGE.KEYS.TOKEN, srRes.data.token.token);
                        }
                        // store aqi-related information
                        if (srRes.data.aqiIndex) {
                            localStorage.setItem(LOCAL_STORAGE.KEYS.OZ_AQI, JSON.stringify(srRes.data.aqiIndex));
                        }
                        // set user units from api
                        if (srRes.additional_info) {
                            localStorage.setItem(LOCAL_STORAGE.KEYS.OZ_UNITS, JSON.stringify(srRes.additional_info));
                        }
                            return(Response)
            })
}
