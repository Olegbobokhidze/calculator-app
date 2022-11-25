import { createGlobalStyle, withTheme } from "styled-components";

export const ThemeOne: ThemeProps = {
  background: "hsl(222, 26%, 31%)",
  keypadBackground: "hsl(223, 31%, 20%)",
  keyBackground: "hsl(30, 25%, 89%)",
  textColor: "hsl(221, 14%, 31%)",
  headerColor: "white",
  circleToggle: "hsl(6, 63%, 50%)",
  resetDelete: "hsl(225, 21%, 49%)",
};
export const ThemeTwo: ThemeProps = {
  background: "hsl(0, 0%, 90%)",
  keypadBackground: "hsl(0, 5%, 81%)",
  keyBackground: "hsl(45, 7%, 89%)",
  textColor: "hsl(60, 10%, 19%)",
  headerColor: "black",
  circleToggle: "hsl(25, 98%, 40%)",
  resetDelete: "hsl(185, 42%, 37%)",
};
export const ThemeThree: ThemeProps = {
  background: "hsl(268, 75%, 9%)",
  keypadBackground: "hsl(268, 71%, 12%)",
  keyBackground: "hsl(281, 89%, 26%)",
  textColor: "hsl(52, 100%, 62%)",
  headerColor: "hsl(52, 100%, 62%)",
  circleToggle: "hsl(176, 100%, 44%)",
  resetDelete: "hsl(285, 91%, 52%)",
};
interface ThemeProps {
  background: string;
  keypadBackground: string;
  keyBackground: string;
  textColor: string;
  headerColor: string;
  circleToggle: string;
  resetDelete: string;
}
type GlobalThemeProps = {
  theme: ThemeProps;
};
export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0px;
    padding:0;
}
body{
    font-family: 'Outfit', sans-serif;
    height: 100vh;
    width:100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'League Spartan', sans-serif;
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    position:relative;
}
`;

export default withTheme(GlobalStyle);
