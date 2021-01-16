import { createGlobalStyle, css } from 'styled-components';

import 'normalize.css';

const GlobalStyle = createGlobalStyle`${css`
  :root {
    --colorBg: #20212a;
    --colorTxt: #fff;
    --colorTxt2: #e5e5e5;
    --colorTxtHover: #b3b3b3;
    --red: #ff4949;
    --black: #2e2e2e;
    --yellow: #fdba21;
    --white: #fff;
    --gray: #696969;
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-appearance: none;
  }

  html {
    font-size: 62.5%;
    background: var(--colorBg);
    scroll-behavior: smooth;
    color: var(--colorTxt);
    transition: all 0.2s linear;
    margin: 0 auto;
  }

  body {
    background: var(--colorBg);
    font-family: 'Open Sans', sans-serif;
    line-height: 1.5;
    font-size: 1.6rem;
    margin: 0 auto;
    max-width: 1200px;
    width: 95%;
    min-height: 100vh;
  }
  ul {
    list-style: none;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--yellow) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--yellow);
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .nav-active {
    color: var(--colorTxt);
    font-weight: 700;
    cursor: default;
  }
`}`;

export default GlobalStyle;
