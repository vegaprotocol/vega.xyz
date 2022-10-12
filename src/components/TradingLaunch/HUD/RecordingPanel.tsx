import React, { useEffect, useState } from "react";

type Props = {
  className?: string;
};

const RecordingPanel = ({ className }: Props) => {
  const [timeString, setTimeString] = useState("00:00:00");

  useEffect(() => {
    const dateTime = new Date("2000-01-01T00:00:00");
    let interval = setInterval(function () {
      dateTime.setSeconds(dateTime.getSeconds() + 1);
      setTimeString(dateTime.toISOString().slice(11, -5));
    }, 1000);
  }, []);

  return (
    <div
      className={`blur-[1px] px-6 leading-none text-[0.9375rem] ${
        timeString ? "visible" : "invisible"
      }`}
    >
      <div className="p-2.5 pr-12 inline-block relative">
        <div className="relative">
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-block align-middle relative -top-[2px] animate-blink"
          >
            <circle cx="5.5" cy="5.5" r="5.5" fill="#FF077F" />
          </svg>{" "}
          RECORDING
          <br />
          {timeString}
        </div>
        <svg
          width="162"
          height="51"
          viewBox="0 0 162 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 object-contain"
        >
          <path
            d="M160.92 49.88H0.5V0.5H146.23L160.92 15.19V49.88Z"
            stroke="white"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};

export default RecordingPanel;
