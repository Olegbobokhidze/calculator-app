import React, { useState } from "react";
import styled from "styled-components";
import { Copy } from "lucide-react";

const Button = styled.button`
  background-color: blue;
  &:hover {
    background-color: red;
  }
`;

export const TestComp = () => {
  const [copySuccess, setCopySuccess] = useState<boolean>(false);
  const link = "https://www.google.com";
  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2500);
    });
  };
  return (
    <div className="flex items-center space-x-2">
      <input
        defaultValue={link}
        className="h-10 w-full rounded-20 border border-text-secondary px-4 focus:outline-none"
        readOnly
      />

      <Button
        onClick={handleCopy}
        type="submit"
        className="size-10 flex-shrink-0 rounded-10 bg-black"
      >
        <Copy />
      </Button>
      <p>{copySuccess && "you copied very well."}</p>
    </div>
  );
};
