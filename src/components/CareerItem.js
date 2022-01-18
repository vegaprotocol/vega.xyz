import React, { useState, useRef } from "react";
import ButtonLink from "./ButtonLink";
import PlusMinus from "./Svg/PlusMinus";

const CareerItem = ({ career }) => {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentSpace = useRef(null);

  const toggleAccordion = () => {
    setActive(active === false ? true : false);
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
  };

  return (
    <li>
      <div className="py-3 border-b border-current">
        <button
          onClick={toggleAccordion}
          className="w-full flex justify-between items-center focus:outline-none cursor-pointer text-left gap-4"
        >
          <div className="copy-xs md:copy-s !mb-1">
            {career.frontmatter.title}
          </div>
          <div>
            <PlusMinus minus={active} />
          </div>
        </button>

        <div
          ref={contentSpace}
          style={{ maxHeight: `${height}` }}
          className="overflow-auto transition-max-height duration-700 ease-in-out"
        >
          <div className="md:grid md:grid-cols-2 md:gap-12 pb-8">
            <div>
              <div className="text-vega-mid-grey mb-4">
                {career.frontmatter.description}
              </div>
              <ButtonLink
                text="View full spec"
                link={`${career.fields.slug}`}
                className="hidden md:inline-block"
              />
            </div>

            <div>
              <div className="md:grid grid-cols-3 gap-6">
                <div className="text-[0.9375rem] mb-3 md:mb-0">
                  <div className="text-vega-mid-grey uppercase tracking-[0.01rem]">
                    Location:
                  </div>
                  {career.frontmatter.location}
                </div>
                <div className="text-[0.9375rem] mb-3 md:mb-0">
                  <div className="text-vega-mid-grey uppercase tracking-[0.01rem]">
                    Start Date:
                  </div>
                  {career.frontmatter.start_date}
                </div>

                <div className="text-[0.9375rem] mb-3 md:mb-0">
                  <div className="text-vega-mid-grey uppercase tracking-[0.01rem]">
                    Type:
                  </div>
                  {career.frontmatter.contract_type}
                </div>
              </div>

              <ButtonLink
                text="View full spec"
                link={`${career.fields.slug}`}
                className="md:hidden mt-3"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default CareerItem;
