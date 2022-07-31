import * as S from "./styles";
import SearchImage from "assets/icons/search.png";
import LocationImage from "assets/icons/location.png";
import Image from "next/image";
import { useState } from "react";
import { IEventTarget, ISearchInput } from "./types";
import { CitySuggestion } from "components/WeatherPanel/types";

const SearchInput = ({
  onChange,
  autoCompleteList,
  isLoadingSearch,
  onSelect,
}: ISearchInput) => {
  const [isFocusing, setIsFocusing] = useState(false);
  const onChangeText = (event: IEventTarget) => onChange(event.target.value);

  const onBlur = () => {
    setTimeout(() => {
      setIsFocusing(false);
    }, 200);
  };

  return (
    <S.Container>
      <S.InputContainer>
        <Image src={SearchImage} alt={"Search Icon"} width={25} height={25} />
        <S.Input
          placeholder="Search..."
          onFocus={() => setIsFocusing(true)}
          onChange={onChangeText}
          onBlur={onBlur}
        />
        <Image
          src={LocationImage}
          alt={"Location Icon"}
          width={25}
          height={25}
        />
      </S.InputContainer>
      <S.AutoCompleteBox loading={isLoadingSearch}>
        {isLoadingSearch ? (
          <div>
            <S.Loading />
          </div>
        ) : (
          isFocusing &&
          autoCompleteList?.map((item: CitySuggestion, key: number) => (
            <S.Item key={key} onClick={() => onSelect(item)}>
              <p>
                {item.name}, {item.state} - {item.country}
              </p>
            </S.Item>
          ))
        )}
      </S.AutoCompleteBox>
    </S.Container>
  );
};

export default SearchInput;
