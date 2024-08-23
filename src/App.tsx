import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Keypad from "./components/keypad/Keypad";
import { GlobalStyle, ThemeOne, ThemeThree, ThemeTwo } from "./Themes";
import { VideoPlayer } from "./components/VideoPlayer";

function App() {
  const [theme, setTheme] = useState(ThemeOne);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* <Keypad theme={theme} setTheme={setTheme} /> */}
      <VideoPlayer />
    </ThemeProvider>
  );
}

export default App;
