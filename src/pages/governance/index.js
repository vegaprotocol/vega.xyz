import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Arrow from "../../components/Svg/Arrow";
import GovernanceResponsive from "../../components/Svg/Governance/Responsive";
import PageSection from "../../components/PageSection";
import BoxTitle from "../../components/BoxTitle";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import ForumIcon from "../../images/governance-icon-forum.png";
import TokenInterfaceIcon from "../../images/governance-icon-token.png";
import MakeProposalIcon from "../../images/governance-icon-proposal.png";
import TextLink from "../../components/TextLink";

const governanceProcess = [
  {
    phase: "Phase 1",
    title: "Sense check",
    text: "Share an outline of your proposed action informally on Discord and in the forum. Get an idea of whether there is support for the proposal and refine your plans to be able to find out if there is sufficient interest in making a change.",
    links: [
      {
        title: "Chat on Discord",
        url: "https://discord.com/invite/3hQyGgZ",
      },
    ],
  },
  {
    phase: "Phase 2",
    title: "Formalise Proposal",
    text: "Share the detailed proposal on the forum, including rationale and specifics of the proposed addition/change, including the data (JSON or similar) that would be submitted on chain. Invite debate and discussion to amend the proposal until it reaches a final state, ready to submit.",
    links: [
      {
        title: "Read the docs to make a proposal",
        url: "https://docs.vega.xyz/docs/mainnet/concepts/vega-protocol/#governance",
      },
      {
        title: "Check out the forum",
        url: "https://community.vega.xyz/c/governance/25",
      },
    ],
  },
  {
    phase: "Phase 3",
    title: "Submit a proposal",
    text: "As a token holder, you can submit the proposal using the APIs to create a new market, change an existing market, change network parameters, add an external asset to Vega, authorise a transfer to or from the Network Treasury and make a freeform proposal (for changes that will not change network behaviour). For each, you will define specific inputs for a set list of parameters, which are validated by the nodes before entering into the voting period you set. Then it's time to rally the community on the forum to vote for your proposal.",
    links: [
      {
        title: "Read the docs to make a proposal",
        url: "https://docs.vega.xyz/docs/mainnet/concepts/vega-protocol/#governance",
      },
    ],
  },
  {
    phase: "Phase 4",
    title: "Vote to exercise your influence",
    text: "Token holders consider and vote for or against active proposals using the governance tools. Tokens used for voting are not locked or transferred - they can also be used for staking. Note, each public key with a minimum of 1 $VEGA gets just one vote per proposal.",
    links: [
      {
        title: "Vote for propoals",
        url: "https://token.vega.xyz/",
      },
    ],
  },
  {
    phase: "Phase 5",
    title: "Apply changes",
    text: "If a proposal receives enough votes within the enactment period, the network parameters automatically change (except for a free form proposal)",
  },
];

const GovernanceTool = ({ icon, title, link, text, type }) => {
  return (
    <div className="border border-current p-6 relative">
      <img src={icon} className="mb-6" width="96" height="96" alt={title} />
      <div className="uppercase title-s mb-4">{title}</div>
      <div className="md:copy-xs text-vega-mid-grey">{text}</div>
      <div className="border border-current uppercase copy-xxs inline-block px-3 font-light">
        {type}
      </div>
      <div className="border-t border-current absolute bottom-1.5 left-0 right-0 h-px" />
    </div>
  );
};

const GovernancePage = () => {
  return (
    <Layout>
      <Seo
        title="Governance"
        description="Governance allows the Vega network to arrive at on-chain decisions, where tokenholders can create proposals that other tokenholders can vote to approve or reject."
      />
      <Container dataCy={"main"}>
        <div className="max-w-[61rem] mx-auto text-center pt-6 lg:pt-24">
          <h1>
            <BoxTitle text="Governance" />
          </h1>
          <h2 className="text-center">
            <GlitchTitle
              color="red"
              className="title-m md:title-l lg:title-xl mb-4 md:mb-6 mt-4"
            >
              The Vega Protocol is owned and governed by Vega token holders
            </GlitchTitle>
          </h2>
        </div>
        <div className="max-w-[44rem] mx-auto">
          <LeadingLine className="text-center">
            Governance allows the Vega network to arrive at on-chain decisions,
            where tokenholders can create proposals that other tokenholders can
            vote to approve or reject.
          </LeadingLine>
        </div>
      </Container>

      <GovernanceResponsive />

      <Container>
        <PageSection>
          <h2 className="text-center title-s md:title-l mb-6 max-w-[30rem] lg:max-w-none mx-auto">
            Governance Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 lg:gap-12 my-20">
            <GovernanceTool
              icon={ForumIcon}
              title="Forum"
              link=""
              text="Discuss governance and governance proposals on Vega networks."
              type="Tool"
            />
            <GovernanceTool
              icon={TokenInterfaceIcon}
              title="Token interface"
              link=""
              text="Signal your support for a validator by staking tokens, create, submit and vote on governance actions and  proposals for network parameters, markets and assets."
              type="DAPP"
            />
            <GovernanceTool
              icon={MakeProposalIcon}
              title="Make a proposal"
              link=""
              text="Create and submit a proposal for a new market, change to network parameters, community and assets using Vega APIs."
              type="DOCS"
            />
          </div>
        </PageSection>

        <PageSection>
          <h2 className="title-s md:title-l mb-6 max-w-[30rem] lg:max-w-none mx-auto">
            Governance process
          </h2>

          <div className="border-t border-current">
            {governanceProcess.map((process, idx) => (
              <div className="py-5 border-b border-vega-mid-grey">
                <div className="grid grid-cols-12 title-s">
                  <div className="col-span-3 text-vega-mid-grey">
                    {process.phase}
                  </div>
                  <div className="col-span-9 flex justify-between items-center">
                    <div>{process.title}</div>
                    <Arrow />
                  </div>
                </div>
                <div className="h-0 overflow-hidden">
                  <div className="grid grid-cols-12 pt-4">
                    <div className="col-span-3"></div>
                    <div className="col-span-9">
                      <div className="copy-xs mb-6 text-vega-grey">
                        {process.text}
                      </div>
                      {process.links && (
                        <div className="uppercase font-light copy-xxs !mb-2 mt-8">
                          Read more:
                        </div>
                      )}

                      {process.links &&
                        process.links.map((link, idx2) => (
                          <TextLink
                            to={link.url}
                            className="text-vega-mid-grey mr-8 copy-xs"
                            underline={true}
                          >
                            {link.title}
                          </TextLink>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </PageSection>
      </Container>
    </Layout>
  );
};

export default GovernancePage;
