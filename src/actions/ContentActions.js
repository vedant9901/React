
import axios from 'axios';
// let CONFIG = require('../assets/config.json')


export function getVideos(){
    let ids = ["69e88036-6224-4d33-a0c9-8a7ecafb2437","a3cd2400-d2bc-49e4-90b9-3c850e90b76c","ec52c48d-15b1-4233-99de-491e2f86bb9b"]
    let promises = [];
    let videoLinks = []
    for (let i = 0; i < ids.length; i++) {
        promises.push(
            axios.post('http://api.qa.begenuin.com/api/v3/users/video/meta_data/' + ids[i]).then(response => {
              // do something with response
              videoLinks.push({
                index : i,
                videoTitle : response.data.data.description,
                description: response.data.data.description,
                videoLink: response.data.data.videoUrl
              })
            })
          )
    }
    return videoLinks 
    
    // axios.post(`http://api.qa.begenuin.com/api/v3/users/video/meta_data/69e88036-6224-4d33-a0c9-8a7ecafb2437`)
    //   .then(res => {
    //     console.log(res);
    //   })
}