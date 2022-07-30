import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }
  
  html {
    font-size: 93.75%;
  }

  body {
    background: ${(props) => props.theme["green-300"]};
  }
  
`;
