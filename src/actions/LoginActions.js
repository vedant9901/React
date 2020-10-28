/**
 * All Login function used for API calls are defined and used here
 * @author vedant9901
 * @since 0.0.1
 * @version 0.0.1
 */

import axios from 'axios';
// let CONFIG = require('../assets/config.json')


let users = [{ id: 1, email: 'demo@demo.com', password: 'Demo@123', firstName: 'Demo', lastName: 'User' }];

export function checkLogin(req,res){
    
    const params = req;
    const user = users.find(x => x.email === params.email && x.password === params.password);
    if (!user) return ({
        status: 400,
        });
        return ({
            status: 200,
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            token: 'jwt-token'
        });
}