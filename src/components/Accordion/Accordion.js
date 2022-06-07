import React, { useState } from "react";
import Arrow from "../Svg/Arrow";
import AccordionSection from "./AccordionSection";

const Accordion = ({ data }) => {
  const [accordionSection, setAccordionSection] = useState(0);

  return (
    <div className="border-t border-current">
      {data.map((item, idx) => (
        <div className="py-5 border-b border-vega-mid-grey" key={idx}>
          <button
            className="grid grid-cols-12 gap-x-3 title-s w-full text-left"
            onClick={() => setAccordionSection(idx)}
          >
            <div className="col-span-1 md:col-span-3 text-vega-mid-grey">
              <div className="hidden md:block">{item.phase}</div>
              <div className="md:hidden">{idx + 1}</div>
            </div>
            <div className="col-span-11 md:col-span-9 flex justify-between items-center">
              <div>{item.title}</div>
              <Arrow
                className={`${idx === accordionSection ? "rotate-180" : ""}`}
              />
            </div>
          </button>
          <AccordionSection
            text={item.text}
            links={item.links}
            image={item.image}
            open={idx === accordionSection}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
