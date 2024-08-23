import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Keypad from "./components/keypad/Keypad";
import { GlobalStyle, ThemeOne } from "./Themes";

function App() {
  const [theme, setTheme] = useState(ThemeOne);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Keypad theme={theme} setTheme={setTheme} />
    </ThemeProvider>
  );
}

export default App;
