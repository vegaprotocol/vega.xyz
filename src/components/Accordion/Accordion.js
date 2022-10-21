import React, { useState } from "react";
import Arrow from "../Svg/Arrow";
import AccordionSection from "./AccordionSection";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Accordion = ({ data, transNamespace }) => {
  const [accordionSection, setAccordionSection] = useState(0);

  const setAccordionSectionFn = (idx) => {
    idx === accordionSection
      ? setAccordionSection(null)
      : setAccordionSection(idx);
  };

  const { t } = useTranslation(transNamespace);

  return (
    <div className="border-t border-current">
      {data.map((item, idx) => (
        <div key={idx} className="border-b border-vega-mid-grey">
          <button
            className={`grid grid-cols-12 gap-x-3 title-s w-full text-left transition-all delay-75 duration-300 py-5   ${
              accordionSection !== idx ? "hover:py-6" : ""
            }`}
            onClick={() => setAccordionSectionFn(idx)}
          >
            <div className="col-span-1 md:col-span-3 text-vega-mid-grey">
              <div className="hidden md:block">{t(item.phase)}</div>
              <div className="md:hidden">{idx + 1}</div>
            </div>
            <div className="col-span-11 md:col-span-9 flex justify-between items-center">
              <div>{t(item.title)}</div>
              <Arrow
                className={`shrink-0 transition-transform ${
                  idx === accordionSection ? "rotate-180" : ""
                }`}
              />
            </div>
          </button>
          <AccordionSection
            text={item.text}
            component={item.component}
            links={item.links}
            image={item.image}
            open={idx === accordionSection}
            transNamespace={transNamespace}
          />
        </div>
      ))}
    </div>
  );
};

export default Accordion;
