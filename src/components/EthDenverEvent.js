import React from "react";

const EthDenverEvent = ({
  title,
  title2,
  type,
  when,
  venue,
  people,
  children,
  discoMode,
}) => {
  return (
    <div
      className={`relative border-b border-white first:border-t pb-6 ${
        type ? "pt-10" : "pt-4"
      }`}
    >
      {type && (
        <div className="absolute top-0 left-0 inline-block bg-white title-xxxs text-black p-1">
          {type}
        </div>
      )}
      <div className="md:flex">
        <div className="title-m mb-3 md:mb-5">
          {title}
          <br />
          <span className="text-vega-yellow">{title2}</span>
        </div>
        <div className="md:pl-12 shrink-0 flex mb-6 md:mb-0">
          {people.map((person, idx) => (
            <div
              key={idx}
              className="relative mr-3 md:mr-0 md:-right-6 md:last:right-auto"
            >
              <img src={person} alt="" className="w-[60px]" />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 mb-5">
        <div>
          <div className="title-xxs text-vega-yellow">WHEN:</div>
          <div>{when}</div>
        </div>
        <div>
          <div className="title-xxs text-vega-yellow">Venue:</div>
          <div>{venue}</div>
        </div>
      </div>

      <div className="copy-xs">{children}</div>
    </div>
  );
};

export default EthDenverEvent;
