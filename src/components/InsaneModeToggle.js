import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  &:checked ~ .dot {
    transform: translateX(100%);
    background-color: #000;
  }
`;

const InsaneModeToggle = ({ insaneMode, toggleInsaneMode }) => {
  return (
    <div class="flex items-center justify-center">
      <label
        for="insaneModeToggle"
        className="flex items-center cursor-pointer"
      >
        <div className="mr-3 text-[0.9375rem] tracking-[0.01rem] uppercase">
          Insane Mode
        </div>
        <div className="relative">
          <Input
            type="checkbox"
            id="insaneModeToggle"
            className="sr-only"
            onClick={toggleInsaneMode}
          />
          <div
            className={`block w-14 h-8 rounded-full ${
              insaneMode ? "bg-black" : "bg-white"
            }`}
          ></div>
          <div
            className={`dot absolute left-1 top-1  w-6 h-6 bg-white rounded-full transition`}
          ></div>
        </div>
      </label>
    </div>
  );
};

export default InsaneModeToggle;
