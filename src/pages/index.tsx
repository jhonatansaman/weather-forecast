import SunMessageImage from "assets/icons/sun-message.png";
import WeatherPanel from "components/WeatherPanel";
import WeatherResumeCard from "components/WeatherResumeCard";
import { Localization } from "hooks/types";
import useCoordinates from "hooks/useCoordinates";
import type { GetStaticProps, NextPage } from "next";
import { useCallback, useEffect, useMemo, useState } from "react";
import weatherService from "services/weather";
import * as S from "styles/pages/weather/styles";
import {
  toConvertDate,
  toConvertHour,
  toReturnTimePeriod,
  toSeconds,
} from "utils";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import theme from "styles/theme";
import { DailyForecast, ForecastDetails, WeatherForecast } from "types/weather";

const Home: NextPage = () => {
  const [selectedDay, setSelectedDay] = useState<ForecastDetails | null>(null);
  const [weatherForecast, setWeatherForescast] =
    useState<WeatherForecast | null>(null);
  const [location, setLocation] = useState<Localization | null>(null);
  const [isLoadingForecast, setIsLoadingForecast] = useState(true);
  const { latitude, longitude } = useCoordinates();
  const weatherApi = weatherService();
  const currentDate = toConvertDate(toSeconds(weatherForecast?.current?.dt));
  const currentHour = toConvertHour(toSeconds(weatherForecast?.current?.dt));

  const forecastDetails: ForecastDetails[] | null = useMemo(
    () =>
      weatherForecast &&
      weatherForecast.daily.map((item: DailyForecast) => ({
        dayText: new Date(toSeconds(item.dt)).toLocaleString("en-us", {
          weekday: "long",
        }),
        monthText: new Date(toSeconds(item.dt)).toLocaleString("en-us", {
          month: "long",
        }),
        dayNumber: new Date(toSeconds(item.dt)).getDate(),
        temperature: Number(item.temp.day.toFixed(0)),
        icon: `https://openweathermap.org/img/wn/${item.weather?.[0].icon}@2x.png`,
        description: item.weather?.[0].main,
      })),
    [weatherForecast]
  );

  const getCity = useCallback(
    (latitude: number, longitude: number) =>
      weatherApi.getCityByLocation(latitude, longitude).then(setLocation),
    []
  );

  const getForecast = useCallback((latitude: number, longitude: number) => {
    setIsLoadingForecast(true);
    weatherApi
      .getForecast(latitude, longitude)
      .then(setWeatherForescast)
      .finally(() => setIsLoadingForecast(false));
  }, []);

  const toSelectCurrentDay = useCallback(
    () =>
      forecastDetails?.find(
        (item: ForecastDetails) =>
          item.dayNumber ===
          new Date(toSeconds(weatherForecast?.current?.dt)).getDate()
      ),
    [forecastDetails, weatherForecast]
  );

  const onSelectCity = (latitude: number, longitude: number) => {
    getCity(latitude, longitude);
    getForecast(latitude, longitude);
  };

  useEffect(() => {
    if (latitude && longitude) {
      getCity(latitude, longitude);
      getForecast(latitude, longitude);
    }
  }, [getCity, getForecast, latitude, longitude]);

  useEffect(() => {
    if (weatherForecast && forecastDetails) {
      setSelectedDay(toSelectCurrentDay() ?? null);
    }
  }, [weatherForecast, forecastDetails, toSelectCurrentDay]);

  return (
    <S.Container>
      <S.ContentLeft>
        {isLoadingForecast ? (
          <SkeletonTheme baseColor={theme.colors.primary.light}>
            <Skeleton count={1} />
          </SkeletonTheme>
        ) : (
          <>
            <S.TitleBox>
              <S.Title>
                {currentHour.fullHour} {toReturnTimePeriod(currentHour.hour)}
              </S.Title>
              <S.Subtitle>{currentDate.fullDate}</S.Subtitle>
              <S.MessageBox>
                <S.SunIcon
                  src={SunMessageImage}
                  alt="Weather Logo"
                  width={45}
                  height={45}
                />
                <S.MessageTitle>Weather Forecast</S.MessageTitle>
              </S.MessageBox>
            </S.TitleBox>
            <S.CardsWheaterBox>
              {forecastDetails?.map((item: ForecastDetails, key: number) => (
                <WeatherResumeCard
                  data={item}
                  key={key}
                  selectedDay={selectedDay}
                  onSelectItem={setSelectedDay}
                />
              ))}
            </S.CardsWheaterBox>
          </>
        )}
      </S.ContentLeft>
      <S.ContentRight>
        {isLoadingForecast ? (
          <SkeletonTheme baseColor={theme.colors.primary.light}>
            <Skeleton count={5} />
          </SkeletonTheme>
        ) : (
          <WeatherPanel
            selectedDay={selectedDay}
            location={location}
            onSelectCity={onSelectCity}
          />
        )}
      </S.ContentRight>
    </S.Container>
  );
};

export default Home;
