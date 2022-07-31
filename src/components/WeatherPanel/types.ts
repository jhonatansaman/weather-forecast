import { Localization } from "hooks/types";
import { Dispatch, SetStateAction } from "react";
import { ForecastDetails } from "types/weather";

export interface IWeatherPanel {
  selectedDay: ForecastDetails | null;
  location: Localization | null;
  onSelectCity: (latitude: number, longitude: number) => void;
}

export type CitySuggestion = {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state: string;
};
