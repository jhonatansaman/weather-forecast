import { ForecastDetails } from "types/weather";

export interface IWeatherResumeCard {
  data: ForecastDetails;
  selectedDay: ForecastDetails | null;
  onSelectItem: (day: ForecastDetails) => void;
}
