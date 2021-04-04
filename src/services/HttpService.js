import axios from "axios"; 
import { PET_SERVICE_API_URL } from "./UrlMapperService";

const axiosRequestConfig = {
  baseURL: PET_SERVICE_API_URL,
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type, api_key, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, DELETE, PUT, PATCH, OPTIONS"
  },
  withCredentials: true
};

export const HttpService = axios.create(axiosRequestConfig);
