import axios from 'axios'

 const axiosInstance = axios.create({
    baseURL: 'http://localhost:3002',
    headers: {
      'Authorization': `token ${GH_TOKEN}`
      }
  })
  export default axiosInstance;