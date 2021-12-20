import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import TitleGlitchRed from "../images/title-glitch-red.png";
import TitleGlitchPurple from "../images/title-glitch-purple.png";
import TitleGlitchOrange from "../images/title-glitch-orange.png";

const Title = styled.h2`
  div::after {
    position: relative;
    margin-bottom: -0.1em;
    display: inline-block;
    content: "";
    height: 0.85em;
    width: 0.55ch;
    background-image: url(${(props) =>
      props.color === "red" ? TitleGlitchRed : TitleGlitchPurple});
    background-size: cover;
    background-position: 50% 50%;
  }
`;

const GlitchTitle = (props) => {
  return (
    <Title {...props}>
      <div className="title-m md:title-l lg:title-xxl mb-4 mx-auto text-center">
        {props.text}
      </div>
    </Title>
  );
};

export default GlitchTitle;
