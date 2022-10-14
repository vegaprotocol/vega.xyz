import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import Proposal from "./Proposal";
import ButtonLinkSimple from "../components/ButtonLinkSimple";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const allProposalsQuery = gql`
  query Proposals {
    proposals {
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

// const Selector = ({ title, options, selected, callback }) => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const selectOption = (option) => {
//     setDropdownOpen(false);
//     callback(option);
//   };

//   return (
//     <div className="relative">
//       <div className="border border-current copy-xs !mb-0 min-w-[15rem]">
//         <button
//           className="flex justify-between items-center w-full px-4 py-3"
//           onClick={toggleDropdown}
//         >
//           <div>{title}</div>
//           <Arrow className={`w-4 h-4 ${dropdownOpen ? "rotate-180" : ""}`} />
//         </button>
//       </div>
//       <div
//         className={`absolute top-13 left-0 right-0 border-b border-current dark:bg-vega-box-grey bg-vega-light-grey z-10 ${
//           dropdownOpen ? "block" : "hidden"
//         }`}
//       >
//         {options.map((option, idx) => (
//           <button
//             key={idx}
//             onClick={() => selectOption(option)}
//             className={`border border-t-0 px-4 py-3 w-full border-current last:border-b-0 text-left ${
//               option === selected
//                 ? "dark:bg-white dark:text-black bg-black text-white border-black dark:border-white"
//                 : "dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white hover:border-black dark:hover:border-white"
//             }`}
//           >
//             {option}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

const Proposals = () => {
  //const [proposalState, setProposalState] = useState("Enacted");
  const [proposalState] = useState("STATE_ENACTED");
  const { t } = useTranslation("component.proposals");

  const { data: anyProposals } = useQuery(allProposalsQuery);
  const { data, loading, error } = useQuery(proposalsQuery, {
    variables: { proposalState },
  });

  // const updateProposalState = (state) => {
  //   setProposalState(state);
  // };

  if (anyProposals && anyProposals.proposals) {
    return (
      <div className="grey-box p-6 dark:text-white dark:bg-vega-box-grey bg-vega-light-grey">
        <div className="md:flex md:justify-between md:items-center">
          <h3 className="text-[2.125rem] leading-[0.85] lg:text-[3.375rem] mb-4 md:mb-8 uppercase">
            <Trans t={t}>Latest Proposals</Trans>
          </h3>
          <div className="mb-5 md:mb-0">
            {/* <Selector
              title="Status"
              options={["Open", "Enacted"]}
              selected={proposalState}
              callback={updateProposalState}
            /> */}
          </div>
        </div>

        {loading && (
          <p className="copy-xxs md:copy-s">
            <Trans>Loading...</Trans>
          </p>
        )}
        {error && (
          <p className="copy-xxs md:copy-s">
            <Trans t={t}>Error fetching proposals...</Trans>
          </p>
        )}

        {data && !data.proposals && (
          <p className="copy-xxs md:copy-s">
            <Trans t={t}>No proposals found...</Trans>
          </p>
        )}

        <div className="mb-8">
          {anyProposals &&
            anyProposals.proposals &&
            anyProposals.proposals
              .slice(0, 3)
              .map((proposal, idx) => <Proposal key={idx} data={proposal} />)}
        </div>

        <ButtonLinkSimple
          text={t("Explore all proposals")}
          className="dark:bg-vega-box-grey"
          link={`${process.env.GATSBY_TOKEN_FRONTEND}governance`}
        />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Proposals;
