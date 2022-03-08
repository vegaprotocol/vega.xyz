import React from "react";
import ButtonLink from "./ButtonLink";

const ConceptBlock = ({ title, text, links, diagram, children }) => {
  return (
    <div className="border-t border-vega-mid-grey pt-4 pb-12">
      <div className="md:grid md:grid-cols-12 md:gap-x-16">
        <div className="md:col-span-4">
          <div className="title-m mb-4">{title}</div>
        </div>
        <div className="md:col-span-7 mb-16 md:mb-6">
          <div className="copy-xs text-vega-mid-grey">{text}</div>
        </div>

        {diagram && <div className="md:col-span-12 mb-16">{diagram}</div>}

        <div className="md:col-span-4"></div>
        <div className="md:col-span-7">
          {links && <div className="title-s mb-6">Read more:</div>}
          {links.map((link, idx) => {
            return (
              <div key={idx}>
                <ButtonLink
                  className="mb-4"
                  link={link.link}
                  text={link.text}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConceptBlock;
