import { CitySuggestion } from "components/WeatherPanel/types";

export interface ISearchInput {
  autoCompleteList: CitySuggestion[];
  isLoadingSearch: boolean;
  onChange: (event: string) => void;
  onSelect: (param: CitySuggestion) => void;
}

export interface IEventTarget {
  target: HTMLInputElement;
}
