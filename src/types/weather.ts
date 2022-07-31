export type ForecastDetails = {
  dayText: string;
  monthText: string;
  dayNumber: number;
  temperature: number;
  icon: string;
  description: string;
};

export type DailyForecast = {
  dt: number;
  temp: {
    day: number;
  };
  weather: {
    main: string;
    icon: string;
  }[];
};

export type WeatherForecast = {
  current: {
    dt: number;
  };
  daily: DailyForecast[];
};
