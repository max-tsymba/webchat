import axios, { AxiosInstance } from 'axios';
import { API_MESSAGES_URL } from '../utils/consts';

const instance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: API_MESSAGES_URL,
});

export default instance;
