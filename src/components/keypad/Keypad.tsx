import styled from "styled-components";
import React, { useState } from "react";
import Header from "../header/Header";
import Desk from "../desk/Desk";

const KeypadDiv = styled.div`
  height: 430px;
  width: 330px;
  padding-bottom: 56px;
  background-color: ${(props) => props.theme.keypadBackground};
  border-radius: 8px;
  display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 5px;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 0px;
`;
const Key = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.theme.keyBackground};
  border-radius: 5px;
  font-size: 30px;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  &:hover{
  opacity: o.5;
  }
`;
const KeyDel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  width: 60px;
  height: 60px;
  font-size: 20px;
  background-color: ${(props) => props.theme.resetDelete};
  border-radius: 5px;
  color: white;
  cursor: pointer;
  &:hover{
  opacity: o.5;
  }
`;
const Equal = styled.div`
  width: 145px;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  font-size: 30px;
  align-items: center;
  position: absolute;
  font-weight: 700;
  cursor: pointer;
  top: 0px;
  left: 158px;
  background-color: ${(props) => props.theme.circleToggle};
  &:hover{
  opacity: o.5;
  }
`;
const Reset = styled.div`
  width: 145px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  font-weight: 700;
  font-size: 30px;
  border-radius: 5px;
  align-self: center;
  cursor: pointer;
  color: white;
  background-color: ${(props) => props.theme.resetDelete};
  &:hover{
  opacity: o.5;
  }
`;
const FooterHolder = styled.div`
  position: relative;
  align-items: center;
  justify-content: center;
`;
const Keypad = ({ theme, setTheme }: any) => {
  const [number, setNumber] = useState<any>("");
  const [newNumber, setNewNumber] = useState<string>("");
  const [operation, setOperation] = useState<string | boolean>();
  const [result, setResult] = useState<any>("");
  const [comma, setComma] = useState<any>(".");
  const deleteLast = () => {
    const deletedItem = number.slice(0, -1);
    const deletedItem2 = newNumber.slice(0, -1);
    if (newNumber.length > 0) {
      setNewNumber(deletedItem2);
    } else if (newNumber.length === 0) {
      setOperation(false);
      if (!operation) {
        setNumber(deletedItem);
      }
    }
  };
  const resultFunction = () => {
    if (operation === "+" && newNumber) {
      setNumber(`${Number(+number + +newNumber).toFixed(2)}`);
      setOperation(false);
      setNewNumber("");
    } else if (operation === "-" && newNumber) {
      setNumber(`${Number(+number - +newNumber).toFixed(2)}`);
      setOperation(false);
      setNewNumber("");
    } else if (operation === "/" && newNumber) {
      setNumber(`${Number(+number / +newNumber).toFixed(2)}`);
      setOperation(false);
      setNewNumber("");
    } else if (operation === "x" && newNumber) {
      setNumber(`${Number(+number * +newNumber).toFixed(2)}`);
      setOperation(false);
      setNewNumber("");
    }
  };
  const resetFunction = () => {
    setNumber("");
    setNewNumber("");
    setResult("");
    setOperation(false);
  };
  const commaFunction = () => {
    if (number.length > 0 && !operation) {
      const newString = number.includes(comma);
      if (newString) {
        setComma("");
      } else {
        setComma(".");
        setNumber(number + comma);
      }
    } else if (operation) {
      setComma(".");
      const newString2 = newNumber.includes(comma);
      if (newString2) {
        return;
      } else {
        setComma(".");
        setNewNumber(newNumber + comma);
      }
    }
  };
  const zeroFunction = () => {
    if (!operation && number.length > 0) {
      setNumber(number + "0");
    } else if (operation && newNumber.length > 0) {
      setNewNumber(newNumber + "0");
    }
  };
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Desk
        theme={theme}
        number={number}
        operation={operation}
        newNumber={newNumber}
        setNumber={setNumber}
        setNewNumber={setNewNumber}
        setResult={setResult}
        result={result}
      />
      <KeypadDiv theme={theme.keyPadBackground}>
        <Key
          onClick={() => {
            !operation
              ? setNumber(number + "7")
              : setNewNumber(newNumber + "7");
          }}
        >
          7
        </Key>
        <Key
          onClick={() => {
            !operation
              ? setNumber(number + "8")
              : setNewNumber(newNumber + "8");
          }}
        >
          8
        </Key>
        <Key
          onClick={() => {
            !operation
              ? setNumber(number + "9")
              : setNewNumber(newNumber + "9");
          }}
        >
          9
        </Key>
        <KeyDel onClick={deleteLast}>DEL</KeyDel>
        <Key
          onClick={() => {
            !operation
              ? setNumber(number + "4")
              : setNewNumber(newNumber + "4");
          }}
        >
          4
        </Key>
        <Key
          onClick={() => {
            !operation
              ? setNumber(number + "5")
              : setNewNumber(newNumber + "5");
          }}
        >
          5
        </Key>
        <Key
          onClick={() => {
            !operation
              ? setNumber(number + "6")
              : setNewNumber(newNumber + "6");
          }}
        >
          6
        </Key>
        <Key onClick={() => (number.length === 0 ? null : setOperation("+"))}>
          +
        </Key>
        <Key
          onClick={() => {
            !operation
              ? setNumber(number + "1")
              : setNewNumber(newNumber + "1");
          }}
        >
          1
        </Key>
        <Key
          onClick={() => {
            !operation
              ? setNumber(number + "2")
              : setNewNumber(newNumber + "2");
          }}
        >
          2
        </Key>
        <Key
          onClick={() => {
            !operation
              ? setNumber(number + "3")
              : setNewNumber(newNumber + "3");
          }}
        >
          3
        </Key>
        <Key onClick={() => (number.length === 0 ? null : setOperation("-"))}>
          -
        </Key>
        <Key onClick={() => commaFunction()}>.</Key>
        <Key onClick={() => zeroFunction()}>0</Key>
        <Key onClick={() => (number.length === 0 ? null : setOperation("/"))}>
          /
        </Key>
        <Key onClick={() => (number.length === 0 ? null : setOperation("x"))}>
          x
        </Key>
        <FooterHolder>
          <Reset onClick={() => resetFunction()}>Reset</Reset>
          <Equal onClick={() => resultFunction()}>=</Equal>
        </FooterHolder>
      </KeypadDiv>
    </>
  );
};

export default Keypad;
