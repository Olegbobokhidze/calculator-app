import React from "react";
import styled from "styled-components";
import { ThemeOne, ThemeTwo, ThemeThree } from "../../Themes";
const HeaderDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${(props) => props.theme.headerColor};
  margin-bottom: 15px;
`;

const Title = styled.h2`
  font-size: 35px;
  margin-right: 13px;
  font-weight: 700;
`;
const ThemeHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const ThemeTitle = styled.h3`
  font-size: 15px;
  font-weight: 700;
`;
const ThemeCirclesHolder = styled.div`
  width: 85px;
  height: 30px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.keypadBackground};
  margin-left: 15px;
  position: relative;
`;
const One = styled.h4`
  height: 57px;
  font-size: 15px;
  position: absolute;
  left: 77px;
  top: -18px;
  cursor: pointer;
`;

const OneCircle = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  background-color: ${(props) => props.theme.circleToggle};
  top: 7.5px;
  /* left: ${(props) => (props.theme === ThemeOne ? "12px" : "35px")}; */
  left: ${(props) =>
    function CirclePosition() {
      if (props.theme === ThemeOne) {
        return "12px";
      } else if (props.theme === ThemeTwo) {
        return "35px";
      } else if (props.theme === ThemeThree) {
        return "57px";
      }
    }};
`;
const Two = styled.h4`
  height: 57px;
  font-size: 15px;
  left: 98.5px;
  position: absolute;
  top: -18px;
  cursor: pointer;
`;
const Three = styled.h4`
  height: 57px;
  font-size: 15px;
  position: absolute;
  top: -18px;
  left: 122px;
  cursor: pointer;
`;
const Header = ({ theme, setTheme }: any) => {
  return (
    <HeaderDiv theme={theme}>
      <Title>Calc</Title>
      <ThemeHolder>
        <ThemeTitle>THEME</ThemeTitle>
        <ThemeCirclesHolder>
          <OneCircle></OneCircle>
        </ThemeCirclesHolder>
        <One onClick={() => setTheme(ThemeOne)}>1</One>
        <Two onClick={() => setTheme(ThemeTwo)}>2</Two>
        <Three onClick={() => setTheme(ThemeThree)}>3</Three>
      </ThemeHolder>
    </HeaderDiv>
  );
};

export default Header;
