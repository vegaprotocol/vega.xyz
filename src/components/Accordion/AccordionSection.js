import React from "react";
import TextLink from "../TextLink";
import Markdown from "markdown-to-jsx";

const AccordionSection = ({ text, links, image, open }) => {
  return (
    <div className={`${open ? "" : "h-0"} overflow-hidden`}>
      <div className="grid grid-cols-12 pt-4">
        <div className="md:col-span-3"></div>
        <div className="col-span-12 md:col-span-9 flex flex-col md:flex-row md:gap-x-12">
          <div className="flex-shrink order-2 md:order-1">
            <div className="copy-xs mb-6 prose dark:prose-invert max-w-none prose-p:mt-0">
              <Markdown>{text}</Markdown>
            </div>

            {links &&
              links.map((link, idx2) => (
                <TextLink
                  key={idx2}
                  to={link.url}
                  className="text-vega-mid-grey block md:inline-block md:mr-8 copy-xs"
                  underline={true}
                >
                  {link.title}
                </TextLink>
              ))}
          </div>
          {image && (
            <div className="order-1 md:order-2 my-6 md:my-0 w-full md:mt-4 max-w-[15rem] md:shrink-0">
              {image}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionSection;
