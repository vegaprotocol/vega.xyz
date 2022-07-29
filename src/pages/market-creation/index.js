import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import MarketCreationResponsive from "../../components/Svg/MarketCreation/Hero/Responsive";
import PageSection from "../../components/PageSection";
import MarketCreationFooter from "../../components/Svg/MarketCreation/Footer";
import BoxTitle from "../../components/BoxTitle";
import ButtonLink from "../../components/ButtonLink";
import GlitchTitle from "../../components/GlitchTitle";
import BoxLinkSimple from "../../components/BoxLinkSimple";
import LeadingLine from "../../components/LeadingLine";
import Accordion from "../../components/Accordion/Accordion";
import Phase1 from "../../components/Svg/MarketCreation/Process/Phase1";
import Phase2 from "../../components/Svg/MarketCreation/Process/Phase2";
import Phase3 from "../../components/Svg/MarketCreation/Process/Phase3";
import Phase4 from "../../components/Svg/MarketCreation/Process/Phase4";
import Phase5 from "../../components/Svg/MarketCreation/Process/Phase5";
import Phase6 from "../../components/Svg/MarketCreation/Process/Phase6";

const marketCreationProcess = [
  {
    phase: "Phase 1",
    title: "Sense check your market idea",
    text: "<p>Anyone with the minimum number of $VEGA tokens can propose a futures market. Share an outline of the market you propose on the forum to see if there's support for it - and then refine your plan based on community feedback.</p>",
    links: [
      {
        title: "Start a topic on the forum",
        url: "https://community.vega.xyz/c/governance/25",
      },
      {
        title: "See what markets exist already",
        url: "https://console.fairground.wtf/markets",
      },
    ],
    image: <Phase1 />,
  },
  {
    phase: "Phase 2",
    title: "Formalise your proposal",
    text: "<p>Create a detailed proposal with specifics of the market and data (JSON or similar) that would be submitted on chain, including: market description, Oracle / data source the market will use for settlement, and risk model (to calculate margin requirements and ensure safe trading).</p><p>Then head to the forum to invite debate and discussion - and make updates until the proposal is ready to submit.</p>",
    links: [
      {
        title: "Read the docs to make a proposal (Testnet)",
        url: "https://docs.vega.xyz/docs/testnet/tutorials/proposals/new-market-proposal",
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
    title: "Submit for validation",
    text: "<p>As a token holder, you can submit the proposal using the APIs.</p><p>This is validated by the nodes before entering the voting period - at which point head to the forum and rally the community to vote.</p>",
    links: [
      {
        title: "Read the docs to make a proposal (Testnet)",
        url: "https://docs.vega.xyz/docs/testnet/tutorials/proposals/new-market-proposal",
      },
    ],
    image: <Phase3 />,
  },
  {
    phase: "Phase 4",
    title: "Get voting",
    text: "<p>If all your proposals inputs pass validation, community token holders consider and vote for or against active proposals using the governance tools.</p><p>Share your market ideas on the Vega forum to get the community motivated to vote for your proposal.</p>",
    links: [
      {
        title: "Vote for proposals (Testnet)",
        url: "https://token.fairground.wtf/governance/",
      },
    ],
    image: <Phase4 />,
  },
  {
    phase: "Phase 5",
    title: "Attract liquidity",
    text: "<p>Any Vega participant with sufficient collateral* can provide liquidity for a market by submitting a transaction to the network. Attract liquidity with Vega's built-in incentive mechanism that matches traders and market makers.</p><p><i>*the size of the nominated liquidity commitment amount and the margins required to support the orders generated from that commitment.</i></p>",
    links: [
      {
        title: "Read the docs about liquidity provision (Testnet)",
        url: "https://docs.vega.xyz/docs/testnet/tutorials/providing-liquidity",
      },
    ],
    image: <Phase5 />,
  },
  {
    phase: "Phase 6",
    title: "Launch Market",
    text: "<p>If a proposal passes the vote, the market is enacted automatically, as soon as it has received enough committed liquidity.</p>",
    image: <Phase6 />,
  },
];

const MarketCreationPage = () => {
  return (
    <Layout>
      <Seo
        title=" Market Creation with Vega"
        description="Bring the future of DeFi within reach - and create a market on any
            underlying. Attract liquidity with Vega's built-in
            incentive mechanism that matches traders and market makers."
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
            Create markets
          </GlitchTitle>
        </div>
        <div className="max-w-[44rem] mx-auto">
          <LeadingLine className="text-center">
             Create a market on any underlying, and attract liquidity with Vega's built-in incentive mechanism that matches traders and market makers.
          </LeadingLine>
        </div>
      </Container>
      <MarketCreationResponsive />
      <Container>
        <PageSection>
          <div className="max-w-[40rem] mx-auto text-center">
            <LeadingLine className="!mb-6 text-vega-mid-grey">
              Creating a market is part of Vega governance. To get started, get
              and hold $VEGA tokens in your wallet.
            </LeadingLine>
            <ButtonLink link="/governance/" text="Find out more" />
          </div>
        </PageSection>

        <PageSection>
          <h2 className="title-m md:title-l mb-6 max-w-[30rem] md:max-w-[40rem] mx-auto md:mx-0">
            How to create a new market on Vega
          </h2>
          <Accordion data={marketCreationProcess} />
        </PageSection>

        <PageSection>
          <div className="text-center">
            <h2 className="title-m md:title-l lg:title-xxl mb-10">
              Get started
            </h2>

            <BoxLinkSimple
              className="max-w-[20rem] text-left"
              link="https://console.fairground.wtf/"
              text="See what markets already exist (Testnet)"
            />
          </div>
        </PageSection>
      </Container>
      <MarketCreationFooter className="text-center translate-y-24" />
    </Layout>
  );
};

export default MarketCreationPage;
