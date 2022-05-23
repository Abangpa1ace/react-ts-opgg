
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin": "http://localhost:3000",
    mode: "cors", 
  },
  baseURL: import.meta.env.VITE_OPGG_API_URI as string,
  timeout: 15000,
})

const responseBody = (res: AxiosResponse) => res.data;

const api = {
  get: async <R>(url: string, params?: object): Promise<R> => await instance.get(url, params).then(responseBody),
  post: async <P, R>(url: string, params: P): Promise<R> => await instance.post(url, params).then(responseBody),
}

export const getSummonerInfo = (name: string) => api.get<{ summoner: SummonerDto }>(`/summoner/${name}`)