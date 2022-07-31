import SearchInput from "components/SearchInput";
import WeatherCard from "components/WeatherCard";
import { useEffect, useMemo, useState } from "react";
import debounce from "lodash.debounce";
import weatherService from "services/weather";
import { CitySuggestion, IWeatherPanel } from "./types";
import * as S from "./styles";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

const MIN_SEARCH_TEXT_LENGTH = 3;

const WeatherPanel = ({
  selectedDay,
  location,
  onSelectCity,
}: IWeatherPanel) => {
  const [searchCity, setSearchCity] = useState("");
  const [favoriteCities, setFavoriteCities] = useState<CitySuggestion[]>([]);
  const [citiesSuggestion, setCitiesSuggestions] = useState<CitySuggestion[]>(
    []
  );
  const [isLoadingSearch, setIsLoadingSearch] = useState(false);
  const weatherApi = weatherService();
  const [isListingCities, setIsListingCities] = useState(false);

  const saveCity = async () => {
    const response = await fetch("/api/cities", {
      method: "POST",
      body: JSON.stringify(location),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    alert("Saved successfully!");
    return await response.json();
  };

  const onSelectItem = (item: CitySuggestion) => {
    onSelectCity(item.lat, item.lon);
  };

  const debounceCall = useMemo(
    () =>
      debounce(async (incomingText: string) => {
        setIsLoadingSearch(true);
        weatherApi
          .findCityByName(incomingText)
          .then(setCitiesSuggestions)
          .finally(() => setIsLoadingSearch(false));
      }, 500),
    []
  );

  const onListCities = async () => {
    axios
      .get("/api/cities")
      .then((res) => setFavoriteCities(res.data))
      .finally(() => setIsListingCities(true));
  };

  const onHideListCities = () => setIsListingCities(false);

  useEffect(() => {
    if (searchCity.length >= MIN_SEARCH_TEXT_LENGTH) {
      debounceCall(searchCity);
    }

    return () => {
      debounceCall.cancel();
    };
  }, [debounceCall, searchCity]);

  return (
    <>
      {isListingCities ? (
        <S.ListCitiesButton onClick={onHideListCities}>
          Hide Cities
        </S.ListCitiesButton>
      ) : (
        <S.ListCitiesButton onClick={onListCities}>
          List Cities
        </S.ListCitiesButton>
      )}
      {isListingCities ? (
        favoriteCities?.map((item, index) => (
          <S.Ul key={index}>
            <S.LI onClick={() => onSelectItem(item)}>
              {item.name}, {item.state}
            </S.LI>
          </S.Ul>
        ))
      ) : (
        <>
          <SearchInput
            autoCompleteList={citiesSuggestion}
            isLoadingSearch={isLoadingSearch}
            onChange={setSearchCity}
            onSelect={onSelectItem}
          />
          <S.Button onClick={saveCity}>Save city</S.Button>
          <WeatherCard selectedDay={selectedDay} city={location?.name} />
        </>
      )}
    </>
  );
};

export default WeatherPanel;
