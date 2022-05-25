import { createGlobalStyle } from "styled-components";

const GlobalReset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.3;
    font-size: 16px;
  }
  body {}
  #root {
    height: 100vh;
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
