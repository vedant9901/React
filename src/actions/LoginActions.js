import axios from 'axios';
let CONFIG = require('../assets/config.json')


export default getAqi = (req,res) =>{
  axios.get(CONFIG.DBURL + '/aqi/all',
        { headers: {'Content-Type': 'application/json'}}
      ).then(res => {
       return res;
      })
}