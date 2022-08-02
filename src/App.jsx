import { ThemeProvider } from "styled-components";
import { Router } from "./Router.jsx";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/Global.js";
import { defaultTheme } from " ./styles/themes/default.js           ";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
