import axios from 'axios';
import { ROUTES } from '../../utils/consts.ts'

const $api = axios.create({
    withCredentials: true,
    baseURL: ROUTES.BASE_API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${ localStorage.getItem('authToken') }`
    return config;
})

export default $api;
