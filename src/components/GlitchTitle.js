import React from "react";
import styled, { keyframes } from "styled-components";
import TitleGlitchRed from "../images/title-glitch-red.png";
import TitleGlitchPurple from "../images/title-glitch-purple.png";
// import TitleGlitchOrange from "../images/title-glitch-orange.png";

const blink = keyframes`
  to {
    visibility: hidden;
  }
`;

const Title = styled.div`
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
    animation: ${blink} 1.5s steps(2, start) infinite;
  }
`;

const GlitchTitle = (props) => {
  const level = parseInt(props.level);
  const size = props.size;

  const Tag = `h${level && [1, 2, 3, 4, 5, 6].includes(level) ? level : "1"}`;

  const commonStyles = "mb-4 mx-auto pr-6";
  let styles = "";

  if (size === "large") {
    styles = `${commonStyles} title-l md:title-xxl lg:title-xxxl`;
  } else if (size === "medium") {
    styles = `${commonStyles} title-m md:title-l lg:title-xxl`;
  } else {
    styles = `${commonStyles} title-m md:title-l`;
  }

  return (
    <Tag>
      <Title {...props}>
        <div className={styles}>{props.children}</div>
      </Title>
    </Tag>
  );
};

export default GlitchTitle;
