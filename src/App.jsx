import { ThemeProvider } from "styled-components";

import { defaultTheme } from "./styles/themes/default.js";

import { Title } from "./styles.js";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Title fontSize={40}>Test</Title>
    </ThemeProvider>
  );
}

export default App;
