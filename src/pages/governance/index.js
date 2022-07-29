import React from "react";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GovernanceResponsive from "../../components/Svg/Governance/Hero/Responsive";
import PageSection from "../../components/PageSection";
import BoxTitle from "../../components/BoxTitle";
import ToolBox from "../../components/ToolBox";
import ButtonLink from "../../components/ButtonLink";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import Accordion from "../../components/Accordion/Accordion";
import Arrow from "../../components/Svg/Arrow";
import VotingIllustration from "../../components/Svg/Governance/Voting";
import Phase1 from "../../components/Svg/Governance/Process/Phase1";
import Phase2 from "../../components/Svg/Governance/Process/Phase2";
import Phase3 from "../../components/Svg/Governance/Process/Phase3";
import Phase4 from "../../components/Svg/Governance/Process/Phase4";
import Phase5 from "../../components/Svg/Governance/Process/Phase5";
import Proposals from "../../components/Proposals";

const governanceProcess = [
  {
    phase: "Phase 1",
    title: "Sense check",
    text: "Start a topic and share an outline of your proposal on the forum with a 'sense-check' tag. Get an idea of whether there is support for your proposal from the likes and replies you receive, and refine your plans.",
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
    text: "Update your proposal topic based on the feedback received, and ensure you have included the rationale and specifics of the proposed addition/change, including the data (JSON or similar) that would be submitted on chain. Update the tag and invite debate and discussion to amend the proposal until it reaches a final state, ready to submit.",
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
    text: "As a token holder, you can submit the proposal using the command line to create a new market, change an existing market, change network parameters, add an external asset to Vega and make a freeform proposal (for changes that will not change network behaviour). For each, you will define specific inputs for a set list of parameters, which are validated by the nodes before entering into the voting period you set. Then it's time to rally the community on the forum to vote for your proposal.",
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
    title: "Enacting changes",
    text: "If a proposal receives enough votes within the enactment period, the change is automatically enacted (except for a free form proposal).",
    image: <Phase5 />,
  },
];

const GovernancePage = ({ data }) => {
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
          <GlitchTitle
            level="2"
            color="red"
            className="title-m md:title-l lg:title-xl mb-4 md:mb-6 mt-4 text-center"
          >
            Govern the network
          </GlitchTitle>
        </div>
        <div className="max-w-[44rem] mx-auto">
          <LeadingLine className="text-center">
             Decisions on the Vega network are on-chain, with tokenholders creating proposals that other tokenholders vote to approve or reject.
          </LeadingLine>
        </div>
      </Container>

      <GovernanceResponsive />

      <Container>
        <PageSection>
          <h2
            className="text-center title-m md:title-l mb-6 max-w-[30rem] lg:max-w-none mx-auto"
            id="governanceTools"
          >
            Governance Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-10 mt-10 md:mt-20 max-w-[75rem] mx-auto">
            <ToolBox
              icon={getImage(data.forumIcon)}
              title="Forum"
              link="https://community.vega.xyz/c/governance/25"
              text="Discuss governance, sense check and formalise governance proposals for the Vega network."
              type="Tool"
            />
            <ToolBox
              icon={getImage(data.tokenInterfaceIcon)}
              title="Governance"
              link="https://token.vega.xyz/governance"
              text="Review and vote on governance proposals."
              type="DAPP"
            />
            <ToolBox
              icon={getImage(data.makeProposalIcon)}
              title="Make a proposal"
              link="https://docs.vega.xyz/docs/mainnet/concepts/vega-protocol"
              text="Read the docs to create and submit a proposal using Vega APIs."
              type="DOCS"
            />
          </div>
        </PageSection>

        <PageSection>
          <h2 className="title-m md:title-l mb-6 max-w-[30rem] md:max-w-none mx-auto">
            Governance lifecycle
          </h2>

          <Accordion data={governanceProcess} />
        </PageSection>

        <PageSection>
          <h2 className="title-m md:title-l lg:title-xl text-center mb-12 px-1">
            Get started voting
          </h2>

          <div className="max-w-[31.25rem] mx-auto relative top-[3px]">
            <VotingIllustration />
          </div>

          <div className="border-2 border-current grid grid-cols-1 md:grid-cols-3 text-center">
            <div className="relative border-b-2 border-current md:border-b-0  md:border-r-2 p-12 md:p-6 lg:p-12">
              <div className="title-s mb-6">Get $VEGA tokens</div>
              <div className="lg:prose-lg">
                <p className="copy-xxs lg:copy-xs">
                  And store in an Ethereum wallet. You can purchase VEGA using
                  Ethereum (ETH) on decentralized exchanges.
                </p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 md:top-9 md:right-0 md:bottom-auto md:left-auto md:translate-x-1/2 md:rotate-[270deg] bg-white dark:bg-black p-3">
                <Arrow />
              </div>
            </div>
            <div className="relative border-b-2 border-current md:border-b-0 md:border-r-2 p-12 md:p-6 lg:p-12">
              <div className="title-s mb-6">Get a Vega Wallet</div>
              <div className="lg:prose-lg mb-6">
                <p className="copy-xxs lg:copy-xs">
                  A Vega wallet is used to access and sign transactions and
                  connect to any dApp running on Vega.
                </p>
              </div>
              <ButtonLink link="/wallet" text="Get a Vega Wallet" />
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 md:top-9 md:right-0 md:bottom-auto md:left-auto md:translate-x-1/2 md:rotate-[270deg] bg-white dark:bg-black p-3">
                <Arrow />
              </div>
            </div>
            <div className="relative border-current p-12 md:p-6 lg:p-12">
              <div className="title-s mb-6">Vote on proposals</div>
              <div className="mb-6">
                <p className="copy-xxs lg:copy-xs">Use our governance tools.</p>
                <p className="copy-xxs lg:copy-xs">
                  Note, you'll need some ETH to pay any transaction fees.
                </p>
              </div>
              <ButtonLink link="#governanceTools" text="Governance tools" />
            </div>
          </div>
        </PageSection>

        <PageSection>
          <Proposals />
        </PageSection>
      </Container>
    </Layout>
  );
};

export default GovernancePage;

export const query = graphql`
  query {
    forumIcon: file(relativePath: { eq: "governance-icon-forum.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    tokenInterfaceIcon: file(
      relativePath: { eq: "tool-icons/governance.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    makeProposalIcon: file(
      relativePath: { eq: "governance-icon-proposal.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;
