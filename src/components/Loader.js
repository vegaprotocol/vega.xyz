import React from "react";
import styled from "styled-components";

const LoaderDiv = styled.div`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 40px;

  div {
    display: inline-block;
    position: absolute;
    left: 4px;
    width: 8px;
    background: #fff;
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    left: 4px;
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 16px;
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 28px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 4px;
      height: 32px;
    }
    50%,
    100% {
      top: 12px;
      height: 16px;
    }
  }
`;

const Loader = (props) => {
  return (
    <LoaderDiv {...props}>
      <div></div>
      <div></div>
      <div></div>
    </LoaderDiv>
  );
};

export default Loader;
