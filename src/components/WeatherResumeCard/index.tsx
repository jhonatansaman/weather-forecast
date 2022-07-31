import Image from "next/image";
import * as S from "./styles";
import { IWeatherResumeCard } from "./types";

const WeatherResumeCard = ({
  data,
  selectedDay,
  onSelectItem,
}: IWeatherResumeCard) => {
  const isSelectedCard = selectedDay?.dayNumber === data.dayNumber;

  return (
    <S.Container selected={isSelectedCard} onClick={() => onSelectItem(data)}>
      <Image src={data.icon} alt="Weather Icon" width={70} height={70} />
      <S.DescriptionBox>
        <S.Description>{data.dayText?.substring(0, 3)}</S.Description>
        <S.Description>{data.temperature}°</S.Description>
      </S.DescriptionBox>
    </S.Container>
  );
};

export default WeatherResumeCard;
