import axios from 'axios';
require('dotenv').config();
let axiosInstance = null

function getAxiosConfig() {
  const token = localStorage.getItem('token')
  axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    timeout: 5000,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  });
  return axiosInstance
}

export default getAxiosConfig;
