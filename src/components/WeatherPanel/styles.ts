import styled, { css } from "styled-components";

export const Button = styled.button`
  ${({ theme }) => css`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.contrast.success};
    color: ${theme.colors.base.mininum};
    margin-top: 20px;
    margin-bottom: 20px;
  `}
`;

export const ListCitiesButton = styled.button`
  ${({ theme }) => css`
    width: 100px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid ${theme.colors.primary.light};
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 5px;
    right: 50px;
    color: ${theme.colors.primary.light};
  `}
`;

export const Ul = styled.ul``;
export const LI = styled.ul`
  ${({ theme }) => css`
    padding: 10px;
    border-bottom: 1px solid ${theme.colors.contrast.light};

    :hover {
      background-color: ${theme.colors.primary.light};
      color: ${theme.colors.base.mininum};
      cursor: pointer;
    }
  `}
`;
