import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://admin.1688cart.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
})