import api from "./api";

const weatherService = () => {
  const getCityByLocation = (lat: number, lon: number) =>
    api
      .get(`/geo/1.0/reverse`, {
        params: {
          lat,
          lon,
          apiKey: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
        },
      })
      .then((response) => response.data?.[0])
      .catch((error) => error);

  const getForecast = (lat: number, lon: number) =>
    api
      .get(`data/2.5/onecall?`, {
        params: {
          lat,
          lon,
          apiKey: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
          units: "metric",
        },
      })
      .then((response) => response.data)
      .catch((error) => error);

  const findCityByName = (cityName: string) =>
    api
      .get(`geo/1.0/direct?`, {
        params: {
          q: cityName,
          limit: 5,
          apiKey: process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY,
        },
      })
      .then((response) => response.data)
      .catch((error) => error);

  return { getCityByLocation, getForecast, findCityByName };
};

export default weatherService;
