import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GovernanceResponsive from "../../components/Svg/Governance/Hero/Responsive";
import PageSection from "../../components/PageSection";
import BoxTitle from "../../components/BoxTitle";
import TextLink from "../../components/TextLink";
import ButtonLink from "../../components/ButtonLink";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import ForumIcon from "../../images/governance-icon-forum.png";
import TokenInterfaceIcon from "../../images/governance-icon-token.png";
import MakeProposalIcon from "../../images/governance-icon-proposal.png";
import Accordion from "../../components/Accordion/Accordion";
import Arrow from "../../components/Svg/Arrow";
import VotingIllustration from "../../components/Svg/Governance/Voting";
import Phase1 from "../../components/Svg/Governance/Process/Phase1";
import Phase2 from "../../components/Svg/Governance/Process/Phase2";
import Phase3 from "../../components/Svg/Governance/Process/Phase3";
import Phase4 from "../../components/Svg/Governance/Process/Phase4";
import Phase5 from "../../components/Svg/Governance/Process/Phase5";

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

const GovernanceTool = ({ icon, title, link, text, type }) => {
  return (
    <div className="border border-current p-6 relative">
      <img src={icon} className="mb-6" width="96" height="96" alt={title} />
      <TextLink className="title-s block mb-4" to={link}>
        {title}
      </TextLink>
      <div className="copy-xs text-vega-mid-grey">{text}</div>
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
          <GlitchTitle
            level="2"
            color="red"
            className="title-m md:title-l lg:title-xl mb-4 md:mb-6 mt-4 text-center"
          >
            The Vega Protocol is owned and governed by Vega token holders
          </GlitchTitle>
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
          <h2
            className="text-center title-m md:title-l mb-6 max-w-[30rem] lg:max-w-none mx-auto"
            id="governanceTools"
          >
            Governance Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-12 mt-10 md:mt-20">
            <GovernanceTool
              icon={ForumIcon}
              title="Forum"
              link="https://community.vega.xyz/c/governance/25"
              text="Discuss governance and governance proposals on Vega networks."
              type="Tool"
            />
            <GovernanceTool
              icon={TokenInterfaceIcon}
              title="Token interface"
              link="https://token.vega.xyz/governance"
              text="Signal your support for a validator by staking tokens, create, submit and vote on governance actions and  proposals for network parameters, markets and assets."
              type="DAPP"
            />
            <GovernanceTool
              icon={MakeProposalIcon}
              title="Make a proposal"
              link="https://docs.fairground.vega.xyz/docs/api-howtos/create-market/"
              text="Create and submit a proposal for a new market, change to network parameters, community and assets using Vega APIs."
              type="DOCS"
            />
          </div>
        </PageSection>

        <PageSection>
          <h2 className="title-m md:title-l mb-6 max-w-[30rem] md:max-w-none mx-auto">
            Governance process
          </h2>

          <Accordion data={governanceProcess} />
        </PageSection>

        <PageSection>
          <h2 className="title-m md:title-l lg:title-xl text-center mb-12">
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
      </Container>
    </Layout>
  );
};

export default GovernancePage;
