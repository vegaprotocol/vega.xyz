import React, { useState, useEffect } from "react";
import canAutoPlay from 'can-autoplay';

type Props = {
  className?: string;
  soundToggle: Function;
};

const SoundToggle = ({ className, soundToggle }: Props) => {
  const [sound, setSound] = useState(false);

  const toggleSound = () => {
    soundToggle(!sound);
    setSound(!sound);
  }

  useEffect(() => {
    canAutoPlay.audio().then((result) => {
      if (result.result) {
        setSound(true);
      }
    });
  }, []);

  return (
    <button className={className ? className : ""} onClick={toggleSound}>
      <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1038_33300)" filter="url(#soundToggleBlur)">
          <path d="M5.31 7.1001H0.5V17.6201H5.31V7.1001Z" stroke="white" strokeMiterlimit="10" />
          <path d="M5.30957 17.6201L15.6096 23.8401V0.890137L5.30957 7.10014V17.6201Z" stroke="white" strokeMiterlimit="10" />

          {sound ? (
            <>
              <path d="M19.75 7.1001C22.65 7.1001 25.01 9.4501 25.01 12.3601C25.01 15.2701 22.66 17.6201 19.75 17.6201" stroke="white" strokeMiterlimit="10" />
              <path d="M19.75 3.45996C24.67 3.45996 28.65 7.44996 28.65 12.36C28.65 17.27 24.66 21.26 19.75 21.26" stroke="white" strokeMiterlimit="10" />
            </>

          ) : ""}
        </g>
        <defs>
          <clipPath id="clip0_1038_33300">
            <rect width="29.15" height="24.72" fill="white" />
          </clipPath>
        </defs>
        <filter id="soundToggleBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
        </filter>
      </svg>
    </button>
  );
};

export default SoundToggle;
