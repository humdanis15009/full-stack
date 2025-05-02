// src/utils/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: ['http://localhost:3000/api/users', "https://full-stack-07gm.onrender.com"],
    withCredentials: true,
});

export default axiosInstance;
