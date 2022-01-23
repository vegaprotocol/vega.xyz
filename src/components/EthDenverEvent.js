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
    <div className="relative border-b border-white pt-10 pb-6 mb-6">
      <div className="absolute top-0 left-0 inline-block bg-white title-xxxs text-black p-1">
        {type}
      </div>
      <div>
        <div className="title-m mb-5">
          {title}
          <br />
          <span className="text-vega-yellow">{title2}</span>
        </div>
        {people.map((person) => (
          <div>
            <img src={person} alt="" />
          </div>
        ))}
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
