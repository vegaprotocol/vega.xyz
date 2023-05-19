import * as React from "react";
import UILinkWrapper from "./UI/LinkWrapper";

const LinkCta = (props) => {
  return (
    <UILinkWrapper
      to={props.to}
      className={`copy-xs inline-block text-[1.3125rem] underline-offset-8 underline hover:no-underline ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        className="inline-block ml-3"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 6.47266L11.5641 6.47266"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeMiterlimit="10"
        />
        <path
          d="M6.30859 1.00024L11.9522 6.50012L6.30859 12"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeMiterlimit="10"
        />
      </svg>
    </UILinkWrapper>
  );
};

export default LinkCta;
