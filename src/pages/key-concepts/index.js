import React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import BoxTitle from "../../components/BoxTitle";
import Sticky from "react-stickynode";
import GlitchTitle from "../../components/GlitchTitle";
import LeadingLine from "../../components/LeadingLine";
import ScrollSpy from "react-scrollspy";
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
import NoGasFeesDiagramResponsive from "../../components/KeyConcepts/Diagrams/NoGasFeesDiagram/Responsive";
import DynamicMarginsDiagramResponsive from "../../components/KeyConcepts/Diagrams/DynamicMarginsDiagram/Responsive";
import { Trans } from "gatsby-plugin-react-i18next";

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
      <div data-cy="main">
        <div className="max-w-[45rem] px-4 md:px-0 xl:max-w-[50rem] mx-auto text-center pt-16">
          <h1 className="mb-6">
            <BoxTitle text="Key concepts" />
          </h1>
          <GlitchTitle
            level="2"
            className="mb-6 title-m md:title-l xl:title-xl px-3"
          >
            <Trans>What makes Vega different</Trans>
          </GlitchTitle>

          <LeadingLine className="text-current">
            <Trans>
              Explore the features that enable you to trade and create
              derivatives on a fully decentralised network.
            </Trans>
          </LeadingLine>
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
                <ScrollSpy
                  items={["good", "better", "mature"]}
                  currentClassName="border-b-current"
                  offset={-120}
                >
                  {sections.map((section, index) => (
                    <AnchorLink
                      key={index}
                      className={`inline-block text-center md:w-[13rem] title-s relative bottom-[-1px] last:mr-0 py-2 px-4 text-lg leading-7 border-t-4 border-b-4 hover:border-b-current border-transparent`}
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

        <div id="good">
          <PurposeBuiltBlock />

          <BlockD
            title="Anti front-running protection"
            diagram={<FrontRunningProtectionDiagramResponsive />}
          >
            <p>
              Vega's pre-protocol widget, 'Wendy', ensures all nodes see the
              same sequence of transactions and provides cryptographic proof
              that all traders have fair access to the order book.{" "}
              <strong>
                This creates a fair marketplace where no participant can gain an
                unfair advantage
              </strong>
              , an issue rampant in DeFi and something not even sophisticated
              traditional exchanges can offer.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              Vega's front running protection in the papers
              <TextLink
                to="https://vega.xyz/papers/fairness.pdf"
                className="inline-block"
              >
                'Wendy, the Good Little Fairness Widget'
              </TextLink>{" "}
              and{" "}
              <TextLink
                to="https://vega.xyz/papers/Wendy_Grows_Up.pdf"
                className="inline-block"
              >
                'Wendy grows up'
              </TextLink>
              {"  "}
            </p>
            <p>
              Or try out the{" "}
              <TextLink
                to="https://github.com/vegaprotocol/wendy/"
                className="inline-block"
              >
                Wendy prototype
              </TextLink>{" "}
              on a simulated network
            </p>
          </BlockD>
        </div>

        <div id="better">
          <BlockD
            title="Permissionless market creation"
            diagram={<PermissionlessMarketCreationDiagram />}
          >
            <p>
              Key to delivering on the promise of blockchain and DeFi,{" "}
              <strong>
                anyone can propose a market on any underlying and the community
                decides what gets created
              </strong>{" "}
              (unlike other decentralised exchanges).
            </p>
          </BlockD>

          <BlockD
            title="Built-in liquidity incentives"
            diagram={<MarketMakingDiagram />}
          >
            <p>
              Unlock a “VC” like approach of incubating a portfolio of new
              markets with built in liquidity incentives, or “buying in” to more
              mature markets - shifting the power and reward away from exchange
              owners to market liquidity providers. Successful markets have
              enough liquidity to generate bustling activity.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              Earning liquidity rewards in the Vega blog{" "}
              <TextLink
                to="https://blog.vega.xyz/sushiswap-how-to-get-vega-liquidity-rewards-9848e4cadee9"
                className="inline-block"
              >
                'Getting liquidity rewards'
              </TextLink>
            </p>
          </BlockD>

          <BlockA
            title="Optimised for high capital efficiency"
            diagram={<HighCapitalEfficiencyDiagram />}
          >
            <p>
              Vega’s cross margining and portfolio risk evaluation innovations
              significantly lower capital costs opening up hedging instruments
              to a far greater range of people and businesses and allowing
              markets to exist that previously wouldn't due to cost.
            </p>
            <p>
              Overall portfolio risk is evaluated by calculating the worst
              possible loss that a portfolio of derivative and physical
              instruments might reasonably incur - live, and on-chain, instead
              of over the course of one trading day.
            </p>
            <p>
              Built-in live, automated cross margining routes a trader’s gains
              made on one market to offset positions on other markets.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              High capital efficiency in section 3 of the Vega blog{" "}
              <TextLink
                to="https://blog.vega.xyz/why-vega-is-compelling-to-pro-traders-bd6fc3af2be2"
                className="inline-block"
              >
                Pro traders & Vega
              </TextLink>
            </p>
            <p>
              How Vega optimises for high capital efficiency in sections 3.5 and
              6.6 of the Vega
              <TextLink
                to="https://vega.xyz/papers/vega-protocol-whitepaper.pdf"
                className="inline-block"
              >
                whitepaper
              </TextLink>
            </p>
          </BlockA>

          <BlockB
            title="Efficient Price Discovery"
            diagram={<EfficientPriceDiscoveryDiagramResponsive />}
          >
            <p>
              Unlike other decentralised exchanges, Vega doesn't charge gas
              fees, allowing better price discovery. What’s more, Vega offers
              subsecond latency together with price protection
              mechanisms/circuit breakers and auctions in low liquidity regimes
              to discover true market prices.
            </p>
            <p>
              Launch a new market on Vega, or trade, confident in the knowledge
              that the latest and most accurate price is available to you.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              Different methods of price discovery in section 5 of the Vega blog{" "}
              <TextLink
                to="https://blog.vega.xyz/why-vega-is-compelling-to-pro-traders-bd6fc3af2be2"
                className="inline-block"
              >
                Pro traders & Vega
              </TextLink>
            </p>
          </BlockB>

          <BlockC
            title="Pseudonymous trading"
            diagram={<PseudononymousTradingDiagramResponsive />}
          >
            <p>
              Lowering the barrier to wealth and value creation calls for
              pseudonymous identities. In this way, the Vega network is
              accessible to anyone in the world without restriction.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              The risk considerations behind pseudonymous environments and
              Vega's protective measures in the Vega{" "}
              <TextLink
                to="https://vega.xyz/papers/vega-protocol-whitepaper.pdf"
                className="inline-block"
              >
                whitepaper
              </TextLink>
            </p>
          </BlockC>

          <BlockD
            title="Community curation of markets"
            diagram={<CommunityCurationOfMarketsDiagramResponsive />}
          >
            <p>
              <strong>
                Vega’s market governance is designed to allow the network to
                operate and grow freely, without manual or centralised
                intervention
              </strong>
              . Weighted voting happens by the community allocating, or staking,
              their tokens to validator nodes. Governance decisions include
              creation and closure of markets, and the setting of parameters
              that influence market behaviour.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              Market curation in section 3.4 of the Vega{" "}
              <TextLink
                to="https://vega.xyz/papers/vega-protocol-whitepaper.pdf"
                className="inline-block"
              >
                whitepaper
              </TextLink>
            </p>
          </BlockD>

          <BlockD
            title="Dynamic margins with cross margining"
            diagram={<DynamicMarginsDiagramResponsive />}
          >
            <p>
              Vega protocol’s rigorous framework continuously monitors and
              manages credit risk more efficiently than centralised exchanges. A
              plugin-like architecture for risk models and best-in-class
              stochastic models that run fast enough to support frequent margin
              evaluations allows traders with positions to adjust quickly.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              Cross margining in the Vega blog{" "}
              <TextLink
                to="https://blog.vega.xyz/credit-risk-and-margins-on-vega-e72bbac06723"
                className="inline-block"
              >
                'Credit Risk and Margins on Vega'
              </TextLink>
            </p>
            <p>
              Automated cross margining in section 3 of the Vega blog{" "}
              <TextLink
                to="https://blog.vega.xyz/why-vega-is-compelling-to-pro-traders-bd6fc3af2be2"
                className="inline-block"
              >
                'Pro traders & Vega'
              </TextLink>
            </p>
          </BlockD>

          <BlockD
            title="Pegged orders for automated order management"
            diagram={<PeggedOrdersDiagram />}
          >
            <p>
              Use pegged orders on any market, at any time, to place orders and
              automatically track another price on the market. This enables
              advanced trading strategies and fast reaction times while removing
              concerns about latency and reducing the number of manual
              transactions needed to maintain liquidity provider orders.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              Pegged orders for automated management in the Vega blog{" "}
              <TextLink
                to="https://blog.vega.xyz/pegged-orders-on-vega-d78e55c17bb5"
                className="inline-block"
              >
                'How pegged orders work'
              </TextLink>
            </p>
          </BlockD>

          <BlockB
            title="Completely decentralised network"
            diagram={<DecentralisedNetworkDiagram />}
            diagramPosition="right"
          >
            <p>
              Most decentralised exchanges use a centralised order book, and
              centrally control what can be traded. With Vega, everything from
              the order book to market creation and maintenance, liquidity
              provision and rewards, prices, management of margin and how that
              position eventually settles happen on chain as part of the network
              - all of it is managed and governed by the community. This is
              trading with full transparency - and no black boxes - doing away
              with the risks that come with centralised servers and single
              points of failure and control.
            </p>
          </BlockB>

          <BlockD
            title="No gas fees on trading"
            diagram={<NoGasFeesDiagramResponsive />}
          >
            <p>
              Vega does not charge gas fees. It uses a different fee structure
              that rewards participants and stimulates trading activity. Fees
              are incurred on every trade on a market in continuous trading, but
              it is the price taker who pays the fee. During a market's opening
              auction, no fees are collected.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              Gas fees under 'Miner extractable value (MEV) on blockchains' on
              the blog{" "}
              <TextLink
                to="https://medium.com/greenfield-one/vega-protocol-fair-access-to-efficient-resilient-derivatives-markets-dba11fe281aa"
                className="inline-block"
              >
                'Fair access to efficient derivatives markets'
              </TextLink>
            </p>
          </BlockD>
        </div>

        <div id="mature">
          <BlockD
            title="Cross chain support"
            diagram={<CrossChainSupportDiagramResponsive />}
            diagramFlush={true}
          >
            <p>
              Vega lets users choose which digital asset they want to use as
              collateral, including Bitcoin, Ethereum, ERC-20 tokens, stable
              coins, and more - though currently it only supports Ether. By
              making the protocol blockchain-agnostic, trades will be able to
              settle in any crypto-asset on a supported chain, paving the way
              for physically settled and cash settled products, as commodity and
              asset tokenisation become widespread.
            </p>
            <div className="title-xxs !font-not-glitched mt-8 mb-4 text-black dark:text-white">
              Read more about:
            </div>
            <p>
              Cross chain support and multi-chain collateral in the Vega paper
              <TextLink
                to="https://vega.xyz/papers/vega-technical-overview.pdf"
                className="inline-block"
              >
                'Vega Technical Overview'
              </TextLink>
            </p>
          </BlockD>

          <BlockD
            title="Scalable DeFi infrastructure"
            diagram={<ScalableDefiInfrastructureDiagramResponsive />}
          >
            <p>
              Vega works alongside other layer 1 blockchains - with open source
              APIs and libraries - making it easy to build status
              quo-challenging user interfaces.
            </p>
            <p>
              For example, by using WebSocket for communication between your app
              and the server, GraphQL or gRPC APIs for streaming market data and
              Vega Pennant for simple graphs you could easily create responsive
              markets to monitor real world/spot dynamics and automatically
              propose a hedging market when volatility exceeds a threshold.
            </p>
          </BlockD>
        </div>
      </div>
    </Layout>
  );
};

export default KeyConceptsPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
