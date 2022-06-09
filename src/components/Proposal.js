import React from "react";
import SquareBullet from "./Svg/SquareBullet";

const getProposalType = (proposal) => {
  const { change } = proposal.terms;
  if (change.__typename === "NewAsset") {
    return `New Asset`;
  } else if (change.__typename === "NewMarket") {
    return `New Market`;
  } else if (change.__typename === "UpdateMarket") {
    return `Update Market`;
  } else if (change.__typename === "UpdateNetworkParameter") {
    return `Update Network`;
  } else if (change.__typename === "NewFreeform") {
    return `Freeform`;
  }

  return "Unknown Proposal";
};

const stateColours = {
  enacted: "text-vega-mint",
  open: "text-vega-mint",
  declined: "text-vega-pink",
  failed: "text-vega-pink",
  passed: "text-vega-mint",
  waitingfornodevote: "text-vega-yellow",
};

const getProposalName = (proposal) => {
  const { change } = proposal.terms;

  if (change.__typename === "NewAsset") {
    return `${change.symbol}`;
  } else if (change.__typename === "NewMarket") {
    return `${change.instrument.name}`;
  } else if (change.__typename === "UpdateMarket") {
    return `${change.marketId}`;
  } else if (change.__typename === "UpdateNetworkParameter") {
    return `${change.networkParameter.key}`;
  } else if (change.__typename === "NewFreeform") {
    return `${proposal.rationale.hash}`;
  }

  return "Unknown Proposal";
};

const Proposal = ({ data }) => {
  const stateColour =
    stateColours[data.state.toString().toLowerCase().replace(/\s/g, "")];

  return (
    <div
      className="relative pb-6 pt-7 border-t border-current"
      data-cy="incentive"
    >
      <div className="text-[0.8125rem] absolute left-0 top-0 px-2 dark:text-black text-white bg-black dark:bg-white uppercase">
        {getProposalType(data)}
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 mb-3 md:col-span-6">
          <div className="text-[1.375rem] leading-[1.3] mb-1 pr-6">
            {getProposalName(data)}
          </div>
          <span className={`text-[0.9375rem] ${stateColour}`}>
            <SquareBullet size="10" /> {data.state}
          </span>
        </div>
        <div className="col-span-6 md:col-span-3">
          <span className="text-[0.9375rem] tracking-[0.01rem] text-vega-mid-grey uppercase">
            Closed On:
          </span>
          <br />
          {data.terms.closingDatetime}
        </div>
        <div className="col-span-6 md:col-span-3">
          <span className="text-[0.9375rem] tracking-[0.01rem] text-vega-mid-grey uppercase">
            Enacted On:
          </span>
          <br />
          {data.terms.enactmentDatetime}
        </div>
        <div className="col-span-6 text-right md:col-span-3"></div>
      </div>
    </div>
  );
};

export default Proposal;
