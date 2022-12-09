import React from "react";

const VegaBond = (props) => {
  return (
    <svg
      {...props}
      width="23"
      height="41"
      viewBox="0 0 23 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0L0 31.5321H4.50459L4.50459 40.5413H9.00918V31.5321H13.5138V40.5413H18.0184L18.0184 31.5321H22.5229V0L0 0Z"
        className="dark:fill-white fill-black"
      />
      <path
        d="M20.2708 5.25562L2.25244 5.25562L2.25244 17.2679H20.2708V5.25562Z"
        className="dark:fill-black fill-white"
      />
      <g className="dark:fill-white fill-black">
        <path d="M12.7628 12.7629H9.75977V15.766H12.7628V12.7629Z" />
        <path d="M15.7662 9.76025H12.7632V12.7633H15.7662V9.76025Z" />
        <path d="M18.7692 6.75708H15.7661V9.76014H18.7692V6.75708Z" />
      </g>
      <path
        d="M20.2706 18.7693H17.2676V21.7723H20.2706V18.7693Z"
        fill="#FF077F"
        className="fill-vega-pink"
      />
    </svg>
  );
};

export default VegaBond;
