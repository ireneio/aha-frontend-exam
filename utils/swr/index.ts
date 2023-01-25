import axios, { Method } from 'axios';

const API_URL = 'https://avl-frontend-exam.herokuapp.com/api';

const axiosInstance = axios.create({
  baseURL: API_URL,
});

interface _FetcherConfig {
  method: Method;
  url: string;
  query?: Record<string, string | number | boolean>;
}

export type FetcherConfig = _FetcherConfig | string;

export const fetcher = (config: FetcherConfig) => {
  if (typeof config !== 'string') {
    const { method, url, query } = config;
    return axiosInstance
      .request({
        method,
        url,
        params: query,
      })
      .then((res) => res.data)
      .catch((err) => err);
  }
  return axiosInstance
    .request({
      method: 'get',
      url: config,
    })
    .then((res) => res.data)
    .catch((err) => err);
};
