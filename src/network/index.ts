import axios, { AxiosInstance } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'https://bravo2022.herokuapp.com/',
});
