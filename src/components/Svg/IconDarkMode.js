import React, { useState } from "react";

const IconDarkMode = ({ state }) => {
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
          <circle cx="22.5" cy="22.5" r="22.5" fill="#252525" />
        ) : null}
        <path
          d="M28.75 11.69A12.39 12.39 0 0 0 22.5 10a12.5 12.5 0 1 0 0 25c2.196 0 4.353-.583 6.25-1.69A12.46 12.46 0 0 0 35 22.5a12.46 12.46 0 0 0-6.25-10.81Zm-6.25 22a11.21 11.21 0 0 1-11.2-11.2 11.21 11.21 0 0 1 11.2-11.2c1.246 0 2.484.209 3.66.62a13.861 13.861 0 0 0-5 10.58 13.861 13.861 0 0 0 5 10.58 11.078 11.078 0 0 1-3.66.63v-.01Z"
          fill="#fff"
        />
      </svg>
    </span>
  );
};

export default IconDarkMode;
