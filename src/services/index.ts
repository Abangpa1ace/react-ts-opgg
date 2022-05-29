
import axios, { AxiosError, AxiosResponse } from "axios";

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

const errorHandler = (err: AxiosError) => {
  console.log(err.message)
  throw err
}

const api = {
  get: async <R>(url: string, params?: object): Promise<R> => await instance.get(url, params).then(responseBody).catch(errorHandler),
}

export const getSummonerInfo = (name: string) => api.get<{ summoner: SummonerDto }>(`/summoner/${name}`).then(res => res.summoner)

export const getSummonerMosts = (name: string) => api.get<SummonerMostsDto>(`/summoner/${name}/mostInfo`)

export const getSummonerMatches = (name: string) => api.get<SummonerMatchesDto>(`/summoner/${name}/matches`)

export const getSummonerMatchDetail = (name: string, gameId: string) => api.get<SummonerMatchDetailDto>(`/summoner/${name}/matchDetail/${gameId}`)

export const getItemsInfo = () => axios.get('http://ddragon.leagueoflegends.com/cdn/10.15.1/data/ko_KR/item.json').then(res => res.data.data);