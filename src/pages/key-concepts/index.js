import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import BoxTitle from "../../components/BoxTitle";
import Sticky from "react-stickynode";
import Parallax from "../../components/Parallax";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import ScrollSpy from "react-scrollspy-navigation";
import UniverseLeft from "../../components/Svg/UniverseLeft";
import UniverseRight from "../../components/Svg/UniverseRight";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import PurposeBuiltBlock from "../../components/KeyConcepts/Blocks/PurposeBuilt";
import TextLink from "../../components/TextLink";
import BlockA from "../../components/KeyConcepts/Blocks/BlockA";
import BlockB from "../../components/KeyConcepts/Blocks/BlockB";
import BlockC from "../../components/KeyConcepts/Blocks/BlockC";
import BlockD from "../../components/KeyConcepts/Blocks/BlockD";
import HighCapitalEfficiencyDiagram from "../../components/KeyConcepts/Diagrams/HighCapitalEfficiencyDiagram";
import PseudononymousTradingDiagramResponsive from "../../components/KeyConcepts/Diagrams/PseudononymousTradingDiagram/Responsive";
import EfficientPriceDiscoveryDiagramResponsive from "../../components/KeyConcepts/Diagrams/EfficientPriceDiscoveryDiagram/Responsive";
import CommunityCurationOfMarketsDiagramResponsive from "../../components/KeyConcepts/Diagrams/CommunityCurationOfMarketsDiagram/Responsive";
import FrontRunningProtectionDiagramResponsive from "../../components/KeyConcepts/Diagrams/FrontRunningProtectionDiagram/Responsive";
import PermissionlessMarketCreationDiagram from "../../components/KeyConcepts/Diagrams/PermissionlessMarketCreationDiagram/Responsive";
import MarketMakingDiagram from "../../components/KeyConcepts/Diagrams/MarketMakingDiagram/Responsive";
import PeggedOrdersDiagram from "../../components/KeyConcepts/Diagrams/PeggedOrdersDiagram/Responsive";
import DecentralisedNetworkDiagram from "../../components/KeyConcepts/Diagrams/DecentralisedNetworkDiagram";
import CrossChainSupportDiagramResponsive from "../../components/KeyConcepts/Diagrams/CrossChainSupportDiagram/Responsive";
import ScalableDefiInfrastructureDiagramResponsive from "../../components/KeyConcepts/Diagrams/ScalableDefiInfrastructureDiagram/Responsive";

const KeyConceptsPage = () => {
  const sections = [
    {
      title: "Be as good as CeFi",
      hash: "good",
    },
    {
      title: "Be better than CeFi",
      hash: "better",
    },
    {
      title: "Help DeFi mature",
      hash: "mature",
    },
  ];

  return (
    <Layout>
      <Seo
        title="Key Vega Concepts"
        description="Explore how Vega bridges traditional finance and DeFi to create a bespoke trading alternative."
      />
      <div datacy={"main"}>
        <div className="pt-6 md:grid md:grid-cols-12">
          <div className="hidden md:col-span-2 lg:col-span-3 xl:col-span-2 md:block">
            <Parallax offset={600}>
              <UniverseLeft />
            </Parallax>
          </div>
          <div className="md:col-span-8 lg:col-span-6 xl:col-span-8 lg:pt-16">
            <div className="max-w-[45rem] xl:max-w-[50rem] mx-auto text-center">
              <Parallax offset={300}>
                <h1 className="mb-6">
                  <BoxTitle text="Key concepts" />
                </h1>
                <GlitchTitle
                  level="2"
                  className="mb-6 title-l xl:title-xl px-3"
                >
                  We're creating the critical infrastructure for Web3 and DeFi
                  to mature, and birth a thriving new world of finance
                </GlitchTitle>

                <LeadingLine className="text-current">
                  We're building a future of finance to rival, or outdo, CeFi
                  &mdash; where control of the markets, products, and fees is in
                  the community's hands.
                </LeadingLine>
                <LeadingLine className="text-current">
                  And the tools to create decentralised markets that give
                  centralised versions a run for their money.
                </LeadingLine>
              </Parallax>
            </div>
          </div>
          <div className="hidden md:col-span-2 lg:col-span-3 xl:col-span-2 md:block">
            <Parallax offset={600}>
              <UniverseRight />
            </Parallax>
          </div>
        </div>
      </div>

      <Container>
        <div className="relative max-w-[26.25rem] mt-4 pt-[10.5rem] mx-auto text-center after:content-[''] after:absolute after:w-px dark:after:bg-white after:bg-black after:top-0 after:h-[8rem] after:left-1/2">
          <h2 className="title-m mb-6">Vega is designed to:</h2>
        </div>
      </Container>

      <div className="relative z-30">
        <Sticky enabled={true}>
          <div className="bg-white dark:bg-black">
            <div className="mx-auto border-b overflow-x-scroll whitespace-nowrap md:whitespace-normal overflow-y-hidden border-vega-mid-grey md:flex md:justify-center md:gap-x-8 px-6 md:px-0">
              <ScrollSpy>
                {sections.map((section, index) => (
                  <AnchorLink
                    key={index}
                    className={`inline-block md:block text-center md:w-[13rem] title-s relative bottom-[-1px] last:mr-0 py-2 px-4 text-lg leading-7 border-t-4 border-b-4 hover:border-b-current border-transparent`}
                    to={`/key-concepts/#${section.hash}`}
                    title={section.title}
                    stripHash
                  >
                    {section.title}
                  </AnchorLink>
                ))}
              </ScrollSpy>
            </div>
          </div>
        </Sticky>
      </div>

      <div id="good" className="relative mt-20 md:mt-24 overflow-x-hidden">
        <div className="text-center max-w-[30rem] md:max-w-[44rem] mx-auto">
          <div className="title-l md:title-xl max-w-[25rem] md:max-w-[30rem] mx-auto mb-3">
            Be as good as CeFi
          </div>
          <div className="copy-s text-current !mb-0">
            Vega will rival the current financial system, replacing it with one
            that puts fairness, efficiency, and accessibility at its heart.
          </div>
        </div>
      </div>

      <PurposeBuiltBlock />

      <BlockD
        title="Anti front-running protection"
        diagram={<FrontRunningProtectionDiagramResponsive />}
      >
        <p>
          Our high-throughput, low-latency platform secures transactions by
          Tendermint, the proof-of-stake consensus layer with anti front-running
          protection built in. The consensus algorithm ensures all nodes see the
          same sequence of transactions, maintaining the integrity of the
          platform and ensuring transparency and auditability of trading
          outcomes. In this way, we can create a fair marketplace where no
          participant can routinely gain advantage through malicious actions -
          and market governance is decentralised. Our pre-protocol widget,
          'Wendy', provides cryptographic proof that a trader has had fair
          access to the order book. Something not even sophisticated traditional
          exchanges can offer.
        </p>
      </BlockD>

      <div id="better" className="relative pt-20 md:pt-32 overflow-x-hidden">
        <div className="text-center max-w-[30rem] md:max-w-[44rem] mx-auto">
          <div className="title-l md:title-xl max-w-[25rem] md:max-w-[30rem] mx-auto mb-3">
            Be better than CeFi
          </div>
          <div className="copy-s text-current !mb-0">
            By standardising and automating every step of the trade lifecycle,
            Vega addresses the shortcomings of traditional trading. And strikes
            a balance between rigidity and flexibility, for confidence and
            growth.
          </div>
        </div>
      </div>

      <BlockD
        title="Permissionless market creation"
        diagram={<PermissionlessMarketCreationDiagram />}
      >
        <p>
          The freedom to transact and create markets is central to Vega
          delivering on the promise of blockchain and DeFi. Unlike other
          decentralised exchanges where market creation is centrally controlled,
          with Vega, anyone can propose a market on any underlying asset - which
          the community must then approve. They can then easily attract
          liquidity with our built-in incentive mechanism that matches traders
          and market makers.
        </p>
        {/* <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
          Read more:
        </div>
        <TextLink
          to="https://blog.vega.xyz/the-concepts-underpinning-vega-ad1d64f1a55c"
          colour="grey"
          underline={true}
          className="block mb-2"
        >
          The concepts underpinning Vega
        </TextLink>
        <TextLink
          to="https://blog.vega.xyz/the-concepts-underpinning-vega-ad1d64f1a55c"
          colour="grey"
          underline={true}
          className="block mb-2"
        >
          Download the whitepaper
        </TextLink> */}
      </BlockD>

      <BlockD
        title="Market making with built-in liquidity incentives"
        diagram={<MarketMakingDiagram />}
      >
        <p>
          Successful markets need enough liquidity to generate bustling
          activity. Vega shifts power and reward away from rent-seeking exchange
          owners, towards the liquidity providers of markets. This opens up new
          sets of business models, and unlocks a “VC” like approach of
          incubating a portfolio of markets, or “buying in” to more mature
          markets.
        </p>
      </BlockD>

      <BlockA
        title="Optimised for high capital efficiency"
        diagram={<HighCapitalEfficiencyDiagram />}
      >
        <p>
          Vega's innovations open up hedging instruments to a far greater range
          of people and businesses. live, automated cross margining
          significantly lowers capital costs allowing markets to exist that
          previously wouldn't due to cost. Vega runs SPAN-type calculations, ie
          it evaluates overall portfolio risk by calculating the worst possible
          loss that a portfolio of derivative and physical instruments might
          reasonably incur. And it does this live, and on-chain, instead of over
          the course of one trading day. Meanwhile, built-in cross margining
          routes a trader's gains made on one market to offset positions on
          other markets.
        </p>
      </BlockA>

      <BlockB
        title="Efficient Price Discovery"
        diagram={<EfficientPriceDiscoveryDiagramResponsive />}
      >
        <p>
          Launch a new market on Vega, or trade, confident in the knowledge that
          the latest and most accurate price is available to you. Unlike other
          decentralised exchanges, we don't charge gas fees meaning better price
          discovery. What's more, Vega offers subsecond latency together with
          price protection mechanisms/circuit breakers and auctions in low
          liquidity regimes to discover true market prices. Automated market
          makers rely on other price services, whereas with Vega you can have an
          initial offering of something that has never been traded before.
        </p>
      </BlockB>

      <BlockC
        title="Pseudonymous trading"
        diagram={<PseudononymousTradingDiagramResponsive />}
      >
        <p>
          Lowering the barrier to wealth and value creation calls for
          pseudonymous identities. In this way, the Vega network is accessible
          to anyone in the world without restriction.
        </p>
      </BlockC>

      <BlockD
        title="Community curation of markets"
        diagram={<CommunityCurationOfMarketsDiagramResponsive />}
      >
        <p>
          Vega's market governance is designed so the network can operate and
          grow freely, without manual intervention - while minimising risks
          posed by bad actors. Weighted voting happens through the community
          allocating, or staking, their tokens to validator nodes. And decisions
          made include creation and closure of markets, and the setting of
          parameters that influence market behaviour.
        </p>
      </BlockD>

      <BlockD title="Dynamic margins with cross margining" diagram="">
        <p>
          Vega protocol's rigorous framework continuously monitors and manages
          credit risk much more efficiently than centralised exchanges. With a
          plugin-like architecture for risk models, it is easy to implement
          whichever risk model is appropriate for a new market. And we run
          best-in-class stochastic models fast enough to support frequent margin
          evaluations - allowing traders with positions to quickly take
          appropriate action.
        </p>
      </BlockD>

      <BlockD
        title="Pegged order for automated order management"
        diagram={<PeggedOrdersDiagram />}
      >
        <p>
          Forget worrying about latency, or manually tracking order prices. Use
          pegged orders on any market, at any time to place orders and track
          another price on the market. By automating this feature, Vega enables
          advanced trading strategies, fast reaction times - while reducing the
          number of transactions needed to maintain liquidity provider orders.
        </p>
      </BlockD>

      <BlockB
        title="Completely decentralised network"
        diagram={<DecentralisedNetworkDiagram />}
        diagramPosition="right"
      >
        <p>
          Most decentralised exchanges use a centralised order book, and
          centrally control what can be traded. With Vega, everything from the
          order book to market creation and maintenance, liquidity provision and
          rewards, prices, management of margin, how that position eventually
          settles happen on chain as part of the network - all of it is managed
          and governed by the community. This is trading with full transparency
          - and no black boxes - doing away with the risks that come with
          centralised servers and single points of failure and control.
        </p>
      </BlockB>

      <BlockD title="No gas fees on trading" diagram="">
        <p>
          Vega does not charge gas fees. It uses a different fee structure that
          rewards participants and stimulates trading activity. Fees are
          incurred on every trade on a market in continuous trading, but it is
          the price taker who pays the fee. During a market’s opening auction,
          no fees are collected.
        </p>
      </BlockD>

      <div id="mature" className="relative pt-20 md:pt-32 overflow-x-hidden">
        <div className="text-center max-w-[30rem] md:max-w-[44rem] mx-auto">
          <div className="title-l md:title-xl max-w-[25rem] md:max-w-[30rem] mx-auto mb-3">
            Help DeFi mature
          </div>
          <div className="copy-s text-current !mb-0">
            Designed from the ground up, and in a modular way to encourage
            creativity and incentivise participation — we're creating the
            critical infrastructure for Web3 and DeFi to mature. And birth a
            thriving new world of finance.
          </div>
        </div>
      </div>

      <BlockD
        title="Cross chain support"
        diagram={<CrossChainSupportDiagramResponsive />}
        diagramFlush={true}
      >
        <p>
          Vega lets users choose which digital asset they want to use as
          collateral, including Bitcoin, Ethereum, ERC-20 tokens, stable coins,
          and more - though currently it only supports Ether. By making the
          protocol blockchain-agnostic, trades will be able to settle in any
          crypto-asset on a supported chain, paving the way for physically
          settled and cash settled products, as commodity and asset tokenisation
          become widespread.
        </p>
      </BlockD>

      <BlockD title="Scalable DeFi infrastructure" diagram="">
        <p>
          From providing dev-friendly APIs, to streamlining integration and
          allowing for custom creation of user-friendly front-ends, Vega makes
          it easy for developers to unlock fairer and faster trading for the
          masses. Vega works alongside other layer 1 blockchains so devs can
          easily build immersive web, mobile or desktop apps. And because
          integration is so simple, you could, for example, easily create
          responsive markets to monitor various real world/spot dynamics and
          automatically propose a hedging market when volatility exceeds a
          threshold. What's more, you can create status quo-challenging user
          interfaces with WebSocket for communication between your app and the
          server, GraphQL or gRPC APIs for streaming market data. You can also
          show simple graphs of data from markets using an open source library
          (such as Vega Pennant graphing library). The possibilities are
          endless.
        </p>
      </BlockD>
    </Layout>
  );
};

export default KeyConceptsPage;
