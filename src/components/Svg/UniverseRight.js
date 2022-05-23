import React from "react";
import VideoBackground from "./VideoBackground";
import Rotate from "./Motion/Rotate";

import { motion, useAnimation } from "framer-motion";

const UniverseRight = ({ className }) => {
  return (
    <div
      className={`pb-[270.036393%] relative w-full ${
        className ? className : ""
      }`}
    >
      <VideoBackground />

      <svg
        viewBox="0 0 247.3 667.8"
        xmlSpace="preserve"
        className="absolute left-0 right-0 top-0 h-auto"
      >
        <path
          className="dark:fill-black fill-white"
          d="M0,0v669.8h247.3V0H0z M247.3,632.2c-5.4,0.4-10.9,0.6-16.5,0.6C107.4,632.8,7.3,532.7,7.3,409.3
	s100.1-223.5,223.5-223.5c5.6,0,11.1,0.2,16.5,0.6V632.2z"
        />
        <g className="dark:fill-white fill-black">
          <Rotate direction="backwards" duration="5">
            <path d="M191.9,263.2h-3.2v3.2h3.2V263.2z" />
            <path d="M195,260v-3.2h-3.2v3.2v3.2h3.2V260z" />
            <path d="M188.7,266.4h-6.4v3.2h6.4V266.4z" />
            <path d="M191.9,269.5h-3.2v3.2h3.2V269.5z" />
            <path d="M195,272.7h-3.2v6.4h3.2V272.7z" />
            <path d="M198.2,269.5H195v3.2h3.2V269.5z" />
            <path d="M204.6,266.4h-6.4v3.2h6.4V266.4z" />
            <path d="M198.2,263.2H195v3.2h3.2V263.2z" />
          </Rotate>

          <Rotate direction="forwards" duration="7">
            <path d="M69.9,7.2h-3.2v3.2h3.2V7.2z" />
            <path d="M73,4V0.8h-3.2V4v3.2H73V4z" />
            <path d="M66.7,10.4h-6.4v3.2h6.4V10.4z" />
            <path d="M69.9,13.6h-3.2v3.2h3.2V13.6z" />
            <path d="M73,16.7h-3.2v6.4H73V16.7z" />
            <path d="M76.2,13.6H73v3.2h3.2V13.6z" />
            <path d="M82.6,10.4h-6.4v3.2h6.4V10.4z" />
            <path d="M76.2,7.2H73v3.2h3.2V7.2z" />
          </Rotate>

          <path d="M106.9,652.7h-3.2v3.2h3.2V652.7z" />
          <path d="M110,649.5v-3.2h-3.2v3.2v3.2h3.2V649.5z" />
          <path d="M103.7,655.9h-6.4v3.2h6.4V655.9z" />
          <path d="M106.9,659.1h-3.2v3.2h3.2V659.1z" />
          <path d="M110,662.2h-3.2v6.4h3.2V662.2z" />
          <path d="M113.2,659.1H110v3.2h3.2V659.1z" />
          <path d="M119.6,655.9h-6.4v3.2h6.4V655.9z" />
          <path d="M113.2,652.7H110v3.2h3.2V652.7z" />
          <path d="M122.6,643.1h-3.2v3.2h3.2V643.1z" />
          <path d="M125.7,639.9h-3.2v3.2h3.2V639.9z" />
          <path d="M128.9,636.7h-3.2v3.2h3.2V636.7z" />
          <path d="M132.1,633.6h-3.2v3.2h3.2V633.6z" />
          <path d="M135.3,630.4h-3.2v3.2h3.2V630.4z" />
          <path d="M138.5,627.2h-3.2v3.2h3.2V627.2z" />
          <path d="M141.7,624h-3.2v3.2h3.2V624z" />
          <path d="M144.9,620.8h-3.2v3.2h3.2V620.8z" />
          <path d="M148.1,617.6h-3.2v3.2h3.2V617.6z" />
          <path d="M151.2,614.4h-3.2v3.2h3.2V614.4z" />
          <path d="M154.4,611.2h-3.2v3.2h3.2V611.2z" />
          <path d="M157.6,608.1h-3.2v3.2h3.2V608.1z" />
          <path d="M160.8,604.9h-3.2v3.2h3.2V604.9z" />
          <path d="M164,601.7h-3.2v3.2h3.2V601.7z" />
          <path d="M167.2,598.5H164v3.2h3.2V598.5z" />
          <path d="M170.4,595.3h-3.2v3.2h3.2V595.3z" />
          <path d="M173.6,592.1h-3.2v3.2h3.2V592.1z" />
          <path d="M176.7,588.9h-3.2v3.2h3.2V588.9z" />
          <path d="M179.9,585.7h-3.2v3.2h3.2V585.7z" />
          <path d="M183.1,582.5h-3.2v3.2h3.2V582.5z" />
          <path d="M186.3,579.4h-3.2v3.2h3.2V579.4z" />
          <path d="M189.5,576.2h-3.2v3.2h3.2V576.2z" />
          <path d="M192.7,573h-3.2v3.2h3.2V573z" />
          <path d="M195.9,569.8h-3.2v3.2h3.2V569.8z" />
          <path d="M199.5,566.1h-3.2v3.2h3.2V566.1z" />
          <path d="M202.7,562.9h-3.2v3.2h3.2V562.9z" />
          <path d="M205.9,559.7h-3.2v3.2h3.2V559.7z" />
          <path d="M209,556.6h-3.2v3.2h3.2V556.6z" />
          <path d="M212.2,553.4H209v3.2h3.2V553.4z" />
          <path d="M215.4,550.2h-3.2v3.2h3.2V550.2z" />
          <path d="M218.6,547h-3.2v3.2h3.2V547z" />
          <path d="M221.8,543.8h-3.2v3.2h3.2V543.8z" />
          <path d="M225,540.6h-3.2v3.2h3.2V540.6z" />
          <path d="M228.2,537.4H225v3.2h3.2V537.4z" />
          <path d="M231.4,534.2h-3.2v3.2h3.2V534.2z" />
          <path d="M234.5,531.1h-3.2v3.2h3.2V531.1z" />
          <path d="M237.7,527.9h-3.2v3.2h3.2V527.9z" />
          <path d="M240.9,524.7h-3.2v3.2h3.2V524.7z" />
          <path d="M244.1,521.5h-3.2v3.2h3.2V521.5z" />
          <path d="M247.3,518.3h-3.2v3.2h3.2V518.3z" />
          <Rotate direction="backwards" duration="5">
            <path d="M142.5,83h-3.2v3.2h3.2V83z" />
            <path d="M145.7,79.8h-3.2V83h3.2V79.8z" />
            <path d="M145.7,86.2h-3.2v3.2h3.2V86.2z" />
            <path d="M148.9,83h-3.2v3.2h3.2V83z" />
          </Rotate>
          <path d="M182.5,34.8h-3.2V38h3.2V34.8z" />
          <Rotate direction="forwards" duration="4">
            <path d="M45.5,594h-3.2v3.2h3.2V594z" />
            <path d="M48.7,590.8h-3.2v3.2h3.2V590.8z" />
            <path d="M48.7,597.2h-3.2v3.2h3.2V597.2z" />
            <path d="M51.9,594h-3.2v3.2h3.2V594z" />
          </Rotate>
        </g>
        <path
          fill="white"
          d="M189.4,488.4l8.4-50.9l-80.3-13.2l-8.4,50.9L189.4,488.4z"
        />
        <g fill="black">
          <path d="M142.9,479.9l24.5,35.6l2.2-1.5l-24.5-35.6" />
          <path d="M159,431.1l33.3-12.7l-1-2.5l-37.6,14.3" />
          <path d="M154,468.9l4-24.1l-2.7-0.4l-4,24.1L154,468.9z" />
          <path
            d="M171.5,463.5l0.4-2.7l0.4-2.7l0.4-2.7l-2.7-0.4l-2.7-0.4l-0.4,2.7l2.7,0.5l-0.5,2.7l-2.7-0.4l-0.5,2.7l2.7,0.4L171.5,463.5
		z"
          />
          <path d="M165.7,465.3l0.4-2.7l-2.7-0.4l-0.4,2.7L165.7,465.3z" />
          <path d="M162.5,467.5l0.4-2.7l-2.7-0.4l-0.4,2.7L162.5,467.5z" />
          <path d="M158.1,477.8l1.8-10.7l-2.7-0.4l-1.8,10.7L158.1,477.8z" />
          <path d="M160.3,480.9l0.4-2.7l-2.7-0.4l-0.4,2.7L160.3,480.9z" />
          <path d="M170.6,485.3l0.5-2.7l3.1-18.8l-2.7-0.4l-3.1,18.8l-8-1.3l-0.4,2.7l5.4,0.9l-0.4,2.7l2.7,0.4l2.7,0.4L170.6,485.3z" />
          <path d="M167.4,454.5l0.4-2.7l-2.7-0.4l-0.4,2.7L167.4,454.5z" />
          <path d="M165.2,451.4l0.4-2.7l-2.7-0.4l-0.4,2.7L165.2,451.4z" />
          <path d="M162.9,448.3l1.8-10.7l-2.7-0.4l-1.8,10.7L162.9,448.3z" />
          <path d="M167.4,438l0.4-2.7l-2.7-0.4l-0.4,2.7L167.4,438z" />
          <path d="M172.8,455.4l2.7,0.5l3.1-18.8l0.5-2.7l0.4-2.7l-2.7-0.4l-0.4,2.7l-8-1.3l-0.4,2.7l8.1,1.3L172.8,455.4z" />
          <path d="M116.6,453.9l-10.5-19.3l-24.2,13.1l-4.4-8.1l-2.4,1.3l5.7,10.5l24.2-13.1l9.2,17L116.6,453.9z" />
          <path d="M114.8,440.1l18.9-11.4l-14.3-23.6l7.9-4.8l-1.4-2.3l-10.3,6.2l14.3,23.5l-16.5,10L114.8,440.1z" />
        </g>
      </svg>
    </div>
  );
};

export default UniverseRight;
