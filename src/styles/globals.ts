import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-size: 14px;
  }

  html, body, #__next {
    height: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  body{
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, select {
    font-family: 'Roboto', sans-serif;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  p {
    line-height: 1.4em;
  }

  .none {
    display: none !important;
  }


`;

export default GlobalStyles;
