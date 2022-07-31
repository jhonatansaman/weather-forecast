import styled, { css } from "styled-components";

export const Container = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    width: 150px;
    height: 200px;
    background-color: ${theme.colors.base.mininum};
    border-radius: 30px;
    display: flex;
    padding: 30px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    ${selected &&
    `background-image: linear-gradient(${theme.colors.primary.dark} , ${theme.colors.primary.light});`}

    @media ${theme.breakpoints.device.desktopM} {
      width: 110px;
      height: 150px;
    }
    @media ${theme.breakpoints.device.tablet} {
      width: 70px;
      height: 70px;
      border-radius: 10px;
    }
    @media ${theme.breakpoints.device.mobileM} {
      width: 50px;
      height: 50px;
      border-radius: 10px;

      ${Description} {
        font-size: 11px;
      }
    }
  `}
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 15px;
  font-weight: 500;
`;
