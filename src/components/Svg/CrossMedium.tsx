import React from "react";

type Props = {
  className?: string;
};

const CrossMedium = ({ className }: Props) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g className="fill-current">
        <rect x="2" y="2" width="2" height="2" />
        <rect width="2" height="2" />
        <rect x="4" y="4" width="2" height="2" />
        <rect x="6" y="6" width="2" height="2" />
        <rect x="4" y="8" width="2" height="2" />
        <rect x="2" y="10" width="2" height="2" />
        <rect y="12" width="2" height="2" />
        <rect x="8" y="4" width="2" height="2" />
        <rect x="10" y="2" width="2" height="2" />
        <rect x="12" width="2" height="2" />
        <rect x="8" y="8" width="2" height="2" />
        <rect x="10" y="10" width="2" height="2" />
        <rect x="12" y="12" width="2" height="2" />
      </g>
    </svg>
  );
};

export default CrossMedium;
