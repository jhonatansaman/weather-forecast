import styled, { css } from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    height: 100vh;
    background-color: ${theme.colors.primary.default};

    @media ${theme.breakpoints.device.tablet} {
      flex-direction: column;
    }
  `}
`;

export const ContentLeft = styled.section`
  ${({ theme }) => css`
    flex: 0.75;
    padding: 40px;
    background-color: ${theme.colors.primary.default};
  `}
`;

export const ContentRight = styled.section`
  flex: 0.25;
  background-color: ${({ theme }) => theme.colors.base.mininum};
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const TitleBox = styled.div``;

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary.default};
  font-weight: 500;
`;

export const Subtitle = styled.h4`
  font-size: 16px;
  font-weight: 400;
`;

export const MessageBox = styled.div`
  display: flex;
  margin-top: 15px;
  align-items: center;
  gap: 10px;
`;

export const MessageTitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.secondary.default};
  font-weight: 600;
`;

export const SunIcon = styled(Image)``;

export const CardsWheaterBox = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
