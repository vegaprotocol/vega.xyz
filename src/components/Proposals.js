import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Proposal from "./Proposal";
import Arrow from "./Svg/Arrow";

const proposalsQuery = gql`
  query Proposals($proposalState: ProposalState!) {
    proposals(inState: $proposalState) {
      id
      reference
      state
      datetime
      rejectionReason
      errorDetails
      terms {
        closingDatetime
        enactmentDatetime
        change {
          ... on NewMarket {
            instrument {
              name
            }
          }
          ... on UpdateMarket {
            marketId
          }
          ... on NewAsset {
            __typename
            symbol
            source {
              ... on BuiltinAsset {
                maxFaucetAmountMint
              }
              ... on ERC20 {
                contractAddress
              }
            }
          }
          ... on UpdateNetworkParameter {
            networkParameter {
              key
              value
            }
          }
        }
      }
    }
  }
`;

const Selector = ({ title, options, selected, callback }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const selectOption = (option) => {
    setDropdownOpen(false);
    callback(option);
  };

  return (
    <div className="relative">
      <div className="border border-current copy-xs !mb-0 min-w-[15rem]">
        <button
          className="flex justify-between items-center w-full px-4 py-3"
          onClick={toggleDropdown}
        >
          <div>{title}</div>
          <Arrow className={`w-4 h-4 ${dropdownOpen ? "rotate-180" : ""}`} />
        </button>
      </div>
      <div
        className={`absolute top-13 left-0 right-0 border-b border-current dark:bg-vega-box-grey bg-vega-light-grey z-10 ${
          dropdownOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => selectOption(option)}
            className={`border border-t-0 px-4 py-3 w-full border-current last:border-b-0 text-left ${
              option === selected
                ? "dark:bg-black bg-white"
                : "dark:hover:bg-black hover:bg-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const Proposals = () => {
  const [proposalState, setProposalState] = useState("Enacted");
  const { data, loading, error } = useQuery(proposalsQuery, {
    variables: { proposalState },
  });

  const updateProposalState = (state) => {
    setProposalState(state);
  };

  return (
    <div className="grey-box p-6 dark:text-white dark:bg-vega-box-grey bg-vega-light-grey">
      <div className="md:flex md:justify-between md:items-center">
        <h3 className="text-[2.125rem] leading-[0.85] lg:text-[3.375rem] mb-4 md:mb-8 uppercase">
          Latest
          <br /> Proposals
        </h3>
        <div className="mb-5 md:mb-0">
          <Selector
            title="Status"
            options={["Open", "Enacted"]}
            selected={proposalState}
            callback={updateProposalState}
          />
        </div>
      </div>

      {loading && <p className="copy-xxs md:copy-s">Loading...</p>}
      {error && (
        <p className="copy-xxs md:copy-s">Error fetching proposals...</p>
      )}

      {data && !data.proposals && (
        <p className="copy-xxs md:copy-s">No proposals found...</p>
      )}

      {data &&
        data.proposals &&
        data.proposals
          .slice(0, 3)
          .map((proposal, idx) => <Proposal key={idx} data={proposal} />)}
    </div>
  );
};

export default Proposals;
