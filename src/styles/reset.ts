import { createGlobalStyle } from "styled-components";

const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1;
    font-size: 16px;
  }
  body {}
  #root {
    min-height: 100vh;
  }
  #tooltip-root {
    position: fixed;
    left: 0;
    top: 0;
  }
  ul, li {
    list-style: none;
  }
  input {
    background: transparent;
    border: 0;
    outline: 0;
  }
  button {
    background: 0;
    padding: 0;
    border: 0;
    outline: 0;
    cursor: pointer;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
  a {
    display: inline-block;
    text-decoration: none;
  }
  b {
    font-size: inherit;
  }
  em {
    font-style: initial;
    font-size: inherit;
  }
`;

export default GlobalReset;
