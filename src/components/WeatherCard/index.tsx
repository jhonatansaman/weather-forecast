import * as S from "./styles";
import SumWeather from "assets/icons/sun.png";
import Location from "assets/icons/location.png";
import Image from "next/image";
import { IWeatherCard } from "./types";

const WeatherCard = ({ selectedDay, city }: IWeatherCard) => {
  return (
    <S.Container>
      <S.CityBox>
        <Image src={Location} alt={"Location icon"} width={30} height={20} />
        <S.TextCity>{city}</S.TextCity>
      </S.CityBox>
      {selectedDay?.icon && (
        <Image
          src={selectedDay?.icon}
          alt="Weather Icon"
          width={150}
          height={150}
        />
      )}
      <S.TextDate>
        {selectedDay?.dayText}, {selectedDay?.dayNumber}{" "}
        {selectedDay?.monthText}
      </S.TextDate>
      <S.TextTemperature>{selectedDay?.temperature}°</S.TextTemperature>
      <S.Description>{selectedDay?.description}</S.Description>
    </S.Container>
  );
};

export default WeatherCard;
