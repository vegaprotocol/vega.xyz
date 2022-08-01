import React from "react";
import DropdownArrow from "../Svg/DropdownArrow";

const MobileDropdown = (props) => {
  const handleShow = () => props.onShow && props.onShow(props.id);

  return (
    <li className={`group py-3`}>
      <div>
        <button
          onClick={handleShow}
          className="uppercase font-not-glitched text-[2.125rem]"
        >
          {props.title}

          <div
            className={`inline-block align-top ml-2 ${
              props.show ? "rotate-180" : null
            }`}
          >
            <DropdownArrow></DropdownArrow>
          </div>
        </button>
      </div>
      <div className={`mb-3 pt-3 ${props.show ? "block" : "hidden"}`}>
        {props.children}
      </div>
    </li>
  );
};

export default MobileDropdown;
