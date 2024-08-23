import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Keypad from "./components/keypad/Keypad";
import { GlobalStyle, ThemeOne } from "./Themes";
import { TestComp } from "./components/TestComp";

function App() {
  const [theme, setTheme] = useState(ThemeOne);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Keypad theme={theme} setTheme={setTheme} />*/}
      <TestComp />
    </ThemeProvider>
  );
}

export default App;
