import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GovernanceResponsive from "../../components/Svg/Governance/Hero/Responsive";
import PageSection from "../../components/PageSection";
import BoxTitle from "../../components/BoxTitle";
import ButtonLink from "../../components/ButtonLink";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import Accordion from "../../components/Accordion";
import Phase1 from "../../components/Svg/Governance/Process/Phase1";
import Phase2 from "../../components/Svg/Governance/Process/Phase2";
import Phase3 from "../../components/Svg/Governance/Process/Phase3";
import Phase4 from "../../components/Svg/Governance/Process/Phase4";
import Phase5 from "../../components/Svg/Governance/Process/Phase5";

const governanceProcess = [
  {
    phase: "Phase 1",
    title: "Sense check",
    text: "Share an outline of your proposed action on the forum. Get an idea of whether there is support for the proposal and refine your plans to be able to find out if there is sufficient interest in making a change.",
    links: [
      {
        title: "Start a topic on the forum",
        url: "https://community.vega.xyz/c/governance/25",
      },
    ],
    image: <Phase1 />,
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
    image: <Phase2 />,
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
    image: <Phase3 />,
  },
  {
    phase: "Phase 4",
    title: "Vote to exercise your influence",
    text: "Token holders consider and vote for or against active proposals using the governance tools. Tokens used for voting are not locked or transferred - they can also be used for staking. Note, each public key with a minimum of 1 $VEGA gets just one vote per proposal.",
    links: [
      {
        title: "Vote for propoals",
        url: "https://token.vega.xyz/governance",
      },
    ],
    image: <Phase4 />,
  },
  {
    phase: "Phase 5",
    title: "Apply changes",
    text: "If a proposal receives enough votes within the enactment period, the network parameters automatically change (except for a free form proposal)",
    image: <Phase5 />,
  },
];

const MarketMakingPage = () => {
  return (
    <Layout>
      <Seo
        title="Governance"
        description="Governance allows the Vega network to arrive at on-chain decisions, where tokenholders can create proposals that other tokenholders can vote to approve or reject."
      />

      <Container dataCy={"main"}>
        <div className="max-w-[52rem] mx-auto text-center pt-6 lg:pt-24">
          <h1>
            <BoxTitle text="Governance" />
          </h1>
          <GlitchTitle
            level="2"
            color="red"
            className="title-m md:title-l lg:title-xxl mb-4 md:mb-6 mt-4 text-center"
          >
            Market Making with Vega
          </GlitchTitle>
        </div>
        <div className="max-w-[44rem] mx-auto">
          <LeadingLine className="text-center">
            Bring the future of DeFi within reach - and create a market on any
            underlying. It's easy to attract liquidity with Vega's built-in
            incentive mechanism that matches traders and market makers.
          </LeadingLine>
        </div>
      </Container>

      <GovernanceResponsive />

      <Container>
        <PageSection>
          <div className="max-w-[40rem] mx-auto text-center">
            <LeadingLine className="!mb-6 text-vega-mid-grey">
              Creating a market is part of Vega governance. To get started, get
              and hold $VEGA tokens in your wallet.
            </LeadingLine>
            <ButtonLink link="https://www.google.com/" text="Find out more" />
          </div>
        </PageSection>

        <PageSection>
          <h2 className="title-m md:title-l mb-6 max-w-[30rem] md:max-w-none mx-auto">
            How to create a new market on Vega
          </h2>

          <Accordion data={governanceProcess} />
        </PageSection>
      </Container>
    </Layout>
  );
};

export default MarketMakingPage;
