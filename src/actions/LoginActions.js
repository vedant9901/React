 import axios from 'axios';
// let CONFIG = require('../assets/config.json')
import {ADMIN_PANEL_URL_API} from '../Shared/constant';


export const doLogin = (req,res) =>{
   var headers
 
    //email=yash@oizom.com&password=oizom@yash2

    var formData = new FormData(); 
    formData.append('email',req.email)
    formData.append('password',req.password)

     let body = formData
    // make http post request to login API. return the observable to controller to handle post-request behaviour
    return axios.post(ADMIN_PANEL_URL_API.LOGIN, body, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
    })
}