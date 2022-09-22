import React from "react";
import LinkWrapper from "./LinkWrapper";
import LinkArrow from "../Svg/LinkArrow";

const ButtonLink = ({ variant = "primary", width, to, children }) => {
  const isExternal = to.startsWith("http");
  let buttonWrapperStyles;
  let buttonBaseStyles;

  if (variant === "secondary") {
    buttonWrapperStyles = `inline-block relative`;
    buttonBaseStyles = `text-base underline hover:no-underline underline-offset-8`;
  } else {
    buttonWrapperStyles = `inline-block relative ${
      width === "full" ? "w-full" : ""
    }`;
    buttonBaseStyles = `text-[0.9375rem] leading-1 tracking-[0.01rem] transition-[top] relative z-20 hover:-top-1.5 top-0 border-current inline-block px-10 py-2 border uppercase ${
      width === "full" ? "w-full text-center" : ""
    }`;
  }

  return (
    <div>
      <div className={buttonWrapperStyles}>
        <LinkWrapper to={to}>
          <div className={buttonBaseStyles}>
            {children}{" "}
            {isExternal && <LinkArrow className="ml-2 inline-block" />}
          </div>
          {variant !== "secondary" && (
            <div className="absolute inset-0 border border-current border-t-0"></div>
          )}
        </LinkWrapper>
      </div>
    </div>
  );
};

export default ButtonLink;
