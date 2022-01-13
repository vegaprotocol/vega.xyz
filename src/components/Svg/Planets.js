import React from "react";
import Moshed from "../../video/moshed.mp4";
import styled from "styled-components";

const StarPath = styled.path`
  fill: #000;

  .dark & {
    fill: #fff;
  }
`;

const BackgroundPath = styled.path`
  fill: #fff;

  .dark & {
    fill: #000;
  }
`;

const Planets = () => {
  return (
    <div className="pb-[111.1553785%] relative w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute left-0 top-0 w-full h-full object-cover"
      >
        <source src={Moshed} type="video/mp4" />
      </video>
      <svg
        viewBox="0 0 502 558"
        className="absolute left-0 right-0 top-0 h-auto"
      >
        <BackgroundPath d="M368.4 0c34.5 0 62.5 28 62.5 62.5s-28 62.5-62.5 62.5-62.5-28-62.5-62.5S333.9 0 368.4 0H0v311.4c0-77.6 62.9-140.6 140.6-140.6s140.6 62.9 140.6 140.6S218.3 452 140.6 452 0 389 0 311.4V558h420c-27.1 0-49-21.9-49-49s21.9-49 49-49 49 21.9 49 49-21.9 49-49 49h82V0H368.4z" />
        <StarPath d="M73.8 465.8h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2H78v-4.2zm4.2-4.2H78v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2z" />
        <StarPath d="M90.6 449.1h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.1-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2z" />
        <StarPath d="M124.1 415.6h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.1-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2V403zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2H145v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm268.8-65.6H418v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.1-4.2h-4.2v4.2h4.2V308zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.1h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.1-4.2H464v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.1h-4.2v4.2h4.2v-4.2zm4.2-4.2H485v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2V241zm-348.7-28.3h-4.2v4.2h4.2v-4.2zm4.2-4.2v-4.2h-4.2v8.4h4.2v-4.2zm-8.4 8.4h-8.4v4.2h8.4v-4.2zm4.2 4.1h-4.2v4.2h4.2V221zm4.2 4.2h-4.2v8.4h4.2v-8.4zm4.2-4.2h-4.2v4.2h4.2V221zm8.4-4.1h-8.4v4.2h8.4v-4.2zm-8.4-4.2h-4.2v4.2h4.2v-4.2zm137.1 202.7h-4.2v4.2h4.2v-4.2zm4.2-4.2V407h-4.2v8.4h4.2v-4.2zm-8.4 8.4H286v4.2h8.4v-4.2zm4.2 4.2h-4.2v4.2h4.2v-4.2zm4.2 4.1h-4.2v8.4h4.2v-8.4z" />
        <StarPath d="M306.9 423.8h-4.2v4.2h4.2v-4.2zm8.4-4.2h-8.4v4.2h8.4v-4.2zm-8.4-4.2h-4.2v4.2h4.2v-4.2zM173.8 200.1h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.1-4.2H178v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.1h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2V175zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.1-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2V154zm4.2-4.1h-4.2v4.2h4.2v-4.2zm4.2-4.2H224v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.1-4.2H245v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm4.2-4.1h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2V108zm4.2-4.2h-4.2v4.2h4.2v-4.2z" />
        <StarPath d="M77 375.5h-4.2v4.2H77v-4.2zm4.1-4.1H77v4.2h4.2v-4.2zm0 8.3H77v4.2h4.2v-4.2z" />
        <StarPath d="M85.3 375.5h-4.2v4.2h4.2v-4.2z" />
        <StarPath d="M372.1 38.2h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2V34zm0 8.4h-4.2v4.2h4.2v-4.2z" />
        <StarPath d="M380.4 38.2h-4.2v4.2h4.2v-4.2z" />
        <StarPath d="M120.2 81.7H116v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm0 8.4h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2z" />
        <StarPath d="M403.2 335.4H399v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2zm0 8.4h-4.2v4.2h4.2v-4.2zm4.2-4.2h-4.2v4.2h4.2v-4.2z" />
      </svg>
    </div>
  );
};

export default Planets;
