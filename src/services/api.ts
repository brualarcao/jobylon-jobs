import axios from 'axios';
import { apiInfo } from '../config/config';

const api = axios.create({
    baseURL: apiInfo.baseURL,
});

export default api;
