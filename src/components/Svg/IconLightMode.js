import React, { useState } from "react";

const IconLightMode = ({ state }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="presentation"
    >
      <svg
        width="45"
        height="45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isHovering ? (
          <circle cx="22.5" cy="22.5" r="22.5" fill="#F2F2F2" />
        ) : null}
        <path
          d="M22.5 27.79a5.29 5.29 0 1 0 0-10.58 5.29 5.29 0 0 0 0 10.58Z"
          fill="#000"
        />
        <path
          d="M15.01 22.5H10M35 22.5h-5.01M22.5 29.99V35M22.5 10v5.01M17.21 27.79l-3.55 3.55M31.34 13.66l-3.55 3.55M27.79 27.79l3.55 3.55M13.66 13.66l3.55 3.55"
          stroke="#000"
          strokeWidth="1.3"
          strokeMiterlimit="10"
        />
      </svg>
    </span>
  );
};

export default IconLightMode;
