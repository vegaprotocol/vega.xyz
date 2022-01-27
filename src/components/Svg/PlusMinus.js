import React from "react";

const PlusMinus = ({ minus }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 12L21 9L0 9L0 12L21 12Z" fill="currentColor" />
      {!minus ? <path d="M12 0H9V21H12V0Z" fill="currentColor" /> : null}
    </svg>
  );
};

export default PlusMinus;
