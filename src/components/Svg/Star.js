import React from "react";

const Star = ({ className }) => {
  return (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="21" height="21" className="dark:fill-black fill-white" />
      <path
        d="M8.99996 5.99976H6V8.99972H8.99996V5.99976Z"
        fill="currentColor"
      />
      <path
        d="M12.0009 2.99996V0H9.00098V2.99996V5.99993H12.0009V2.99996Z"
        fill="currentColor"
      />
      <path d="M5.99993 9H0V12H5.99993V9Z" fill="currentColor" />
      <path
        d="M8.99996 11.9998H6V14.9997H8.99996V11.9998Z"
        fill="currentColor"
      />
      <path d="M12.0009 15H9.00098V20.9999H12.0009V15Z" fill="currentColor" />
      <path d="M15 11.9998H12V14.9997H15V11.9998Z" fill="currentColor" />
      <path d="M20.9999 9H15V12H20.9999V9Z" fill="currentColor" />
      <path d="M15 5.99976H12V8.99972H15V5.99976Z" fill="currentColor" />
    </svg>
  );
};

export default Star;
