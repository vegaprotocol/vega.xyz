import React from "react";
import TextLink from "../TextLink";

const AccordionSection = ({ text, links, open }) => {
  return (
    <div className={`${open ? "" : "h-0"} overflow-hidden`}>
      <div className="grid grid-cols-12 pt-4">
        <div className="md:col-span-3"></div>
        <div className="col-span-12 md:col-span-9">
          <div className="copy-xs mb-6 prose dark:prose-invert">{text}</div>
          {links && (
            <div className="uppercase font-light copy-xxs !mb-2 mt-8">
              Read more:
            </div>
          )}

          {links &&
            links.map((link, idx2) => (
              <TextLink
                to={link.url}
                className="text-vega-mid-grey block md:inline-block md:mr-8 copy-xs"
                underline={true}
              >
                {link.title}
              </TextLink>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
