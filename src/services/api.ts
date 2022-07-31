import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_OPEN_WEATHER_API,
});

export default api;
