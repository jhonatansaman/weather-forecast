import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 60%;
    border-radius: 30px;
    display: flex;
    padding: 30px;
    align-items: center;
    flex-direction: column;
    position: relative;

    background-image: ${({ theme }) => `linear-gradient(
    ${theme.colors.primary.dark},
    ${theme.colors.primary.light}
  )`};

    @media ${theme.breakpoints.device.mobileL} {
      ${TextCity}, ${Description} {
        font-size: 15px;
      }
      ${TextTemperature} {
        font-size: 50px;
      }
    }
  `}
`;

export const TextDate = styled.p`
  color: ${({ theme }) => theme.colors.base.mininum};
  font-size: 16px;
  font-weight: 500;
`;

export const TextTemperature = styled.p`
  color: ${({ theme }) => theme.colors.base.mininum};
  font-size: 70px;
  font-weight: 500;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.base.mininum};
  font-size: 20px;
  font-weight: 500;
`;

export const TextCity = styled.p`
  color: ${({ theme }) => theme.colors.base.mininum};
  font-size: 20px;
  font-weight: 500;
`;

export const CityBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    left: 20px;
    position: absolute;
    gap: 10px;

    @media ${theme.breakpoints.device.mobileL} {
      top: 10px;
    }
  `}
`;
