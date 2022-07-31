import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.primary.default};
  display: flex;
  align-items: center;
  padding: 0px 10px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 10px;
  color: ${({ theme }) => theme.colors.primary.translucent};
  font-style: italic;

  ::placeholder {
    color: ${({ theme }) => theme.colors.primary.translucent};
    font-style: italic;
  }
`;

export const AutoCompleteBox = styled.div<{ loading: boolean }>`
  ${({ loading, theme }) => css`
    width: 100%;
    border: 1px solid #f3f3f3;
    border-top: none;
    z-index: 2;
    top: 45px;
    background-color: ${theme.colors.base.mininum};
    position: absolute;

    ${loading
      ? `display: flex; justify-content: center; padding: 10px;`
      : "border-bottom: none;"}
  `}
`;

export const Item = styled.div`
  ${({ theme }) => css`
    padding: 10px;
    border-bottom: 1px solid #d4d4d4;

    :hover {
      background-color: ${theme.colors.primary.light};
      cursor: pointer;
      p {
        color: ${theme.colors.base.mininum};
      }
    }
  `}
`;

export const Loading = styled.div`
  ${({ theme }) => css`
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    width: 20px;
    height: 20px;
    border: 2px solid #f3f3f3; /* Light grey */
    border-top: 2px solid ${theme.colors.primary.light}; /* Black */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  `}
`;
