import axios from 'axios';

import { ROUTES } from '../../utils/consts.ts'
import { IAuthResponse } from "./httpResponseModels.ts";

const $api = axios.create({
    withCredentials: true,
    baseURL: ROUTES.BASE_API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${ localStorage.getItem('authToken') }`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401) {
        try {
            const response = await axios.get<IAuthResponse>(`${ROUTES.BASE_API_URL}/auth/refresh`, {
                withCredentials: true
            });
            localStorage.setItem('authToken' , response.data.accessToken);
            return $api.request(originalRequest);
        } catch (e) {
            console.log('User not authorized')
        }

    }
});

export default $api;
