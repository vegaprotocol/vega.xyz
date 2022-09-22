import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`border border-current p-6 relative dark:bg-black bg-white ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
