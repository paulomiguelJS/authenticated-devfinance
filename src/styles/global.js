import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --dark-blue: #363f5f;
    --primary-bg: #f0f2f5;
    --primary-link: #49aa26;
    --secundary-link: #3dd705;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html {
    font-size: 93.75%;
  }
  
  body {
    font-family: "Poppins", sans-serif;
  }
`;
