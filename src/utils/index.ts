import { ConvertFullDate, ConvertHour } from "./types";

export const toSeconds = (date?: number): number => date * 1000;

export const toConvertDate = (date: number): ConvertFullDate => {
  const convertToDate = new Date(date);
  const dayText = convertToDate.toLocaleString("en-us", {
    weekday: "long",
  });
  const monthText = convertToDate.toLocaleString("en-us", {
    month: "long",
  });
  const dayNumber = convertToDate.getDate();
  const yearNumber = convertToDate.getFullYear();

  const fullDate = `${dayText}, ${dayNumber} ${monthText}, ${yearNumber}`;

  return { dayText, monthText, dayNumber, yearNumber, fullDate };
};

export const toConvertHour = (date: number): ConvertHour => {
  const convertToDate = new Date(date);
  const fullHour = convertToDate.getHours() + ":" + convertToDate.getMinutes();
  const hour = convertToDate.getHours();

  return { fullHour, hour };
};

export const toReturnTimePeriod = (hour: number): string =>
  hour >= 12 ? "PM" : "AM";
