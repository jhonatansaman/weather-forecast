import { ForecastDetails } from "types/weather";

export interface IWeatherCard {
  selectedDay: ForecastDetails | null;
  city?: string;
}
