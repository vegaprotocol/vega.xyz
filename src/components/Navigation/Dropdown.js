import React from "react";
import Container from "../Container";

const Dropdown = (props) => {
  return (
    <li className="group">
      <div className="transition-colors inline-block px-3 xl:px-6 py-3 hover:text-vega-mid-grey cursor-default group-hover:underline underline-offset-8">
        {props.title}
      </div>

      <div
        className={`hidden group-hover:block absolute left-0 right-0 px-4 w-full md:px-8 top-[4.65rem] pt-16 pb-12 dark:bg-black bg-white border-b border-[#525252]`}
      >
        <Container>{props.children}</Container>
      </div>
    </li>
  );
};

export default Dropdown;
