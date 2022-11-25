import React, { useState } from "react";
import styled from "styled-components";

const DeskDiv = styled.div`
  width: 330px;
  height: 100px;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.keypadBackground};
  border-radius: 8px;
`;
const Numbers = styled.h2`
  color: ${(props) => props.theme.headerColor};
  margin-right: 13px;
`;

const Desk = ({
  theme,
  number,
  newNumber,
  setNumber,
  operation,
  setNewNumber,
}: any) => {
  return (
    <DeskDiv theme={theme}>
      <Numbers>
        {number.length > 13 ? setNumber("1000000000000") : number}
        {operation === "+"
          ? "+" +
            (newNumber.length > 11 ? setNewNumber("10000000000") : newNumber)
          : null}
        {operation === "-"
          ? "-" +
            (newNumber.length > 11 ? setNewNumber("10000000000") : newNumber)
          : null}
        {operation === "/"
          ? "/" +
            (newNumber.length > 11 ? setNewNumber("10000000000") : newNumber)
          : null}
        {operation === "x"
          ? "x" +
            (newNumber.length > 11 ? setNewNumber("10000000000") : newNumber)
          : null}
      </Numbers>
    </DeskDiv>
  );
};

export default Desk;
