import React, { useEffect, useRef, useState, useCallback } from "react";
import TextLink from "../TextLink";
import Markdown from "markdown-to-jsx";
import { useTranslation } from "gatsby-plugin-react-i18next";

const AccordionSection = ({
  text,
  component,
  links,
  image,
  open = false,
  transNamespace,
}) => {
  const { t } = useTranslation(transNamespace);
  const accordionItem = useRef(null);
  const [itemHeight, setItemHeight] = useState("0px");

  const setAccordionState = useCallback(() => {
    if (open) {
      setItemHeight(accordionItem.current.scrollHeight + "px");
    } else {
      setItemHeight("0px");
    }
  }, [setItemHeight, open]);

  useEffect(() => {
    setAccordionState();
    let timeoutId = null;
    const resizeListener = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(setAccordionState, 150);
    };
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [open, setAccordionState]);

  return (
    <div
      ref={accordionItem}
      className="overflow-hidden transition-all duration-700"
      style={{ maxHeight: `${itemHeight}` }}
    >
      <div className="grid grid-cols-12">
        <div className="md:col-span-3"></div>
        <div className="col-span-12 md:col-span-9 flex flex-col md:flex-row md:gap-x-12 pb-5">
          <div className="flex-shrink order-2 md:order-1">
            {text && (
              <div className="copy-xs mb-6 prose dark:prose-invert max-w-none prose-p:mt-0">
                <Markdown>{t(text)}</Markdown>
              </div>
            )}

            {component && (
              <div className="copy-xs mb-6 prose dark:prose-invert max-w-none prose-p:mt-0">
                {component}
              </div>
            )}

            {links &&
              links.map((link, idx2) => (
                <TextLink
                  key={idx2}
                  to={link.url}
                  className="text-vega-mid-grey block md:inline-block md:mr-8 copy-xs"
                  underline={true}
                >
                  {t(link.title)}
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
