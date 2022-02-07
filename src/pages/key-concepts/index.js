import React from "react";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Seo from "../../components/Seo";
import BoxTitle from "../../components/BoxTitle";
import Sticky from "react-stickynode";
import GlitchTitle from "../../components/GlitchTitle";
import ConceptBlock from "../../components/ConceptBlock";
import LeadingLine from "../../components/LeadingLine";
import ScrollSpy from "react-scrollspy-navigation";
import UniverseLeft from "../../components/Svg/UniverseLeft";
import UniverseRight from "../../components/Svg/UniverseRight";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useIntl } from "gatsby-plugin-react-intl";
import PermissionlessMarketCreationDiagramResponsive from "../../components/KeyConcepts/PermissionlessMarketCreationDiagram/Responsive";
import PurposeBuiltTable from "../../components/KeyConcepts/PurposeBuiltTable/Diagram";
import MarketMakingDiagramResponsive from "../../components/KeyConcepts/MarketMakingDiagram/Responsive";

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

  const intl = useIntl();
  return (
    <Layout>
      <Seo
        title="Key Vega Concepts"
        description="Explore how Vega bridges traditional finance and DeFi to create a bespoke trading alternative."
      />
      <Container hideXOverflow={true}>
        <div className="pt-6 md:grid md:grid-cols-12 mb-20">
          <div className="hidden md:col-span-2 lg:col-span-3 md:block">
            <UniverseLeft className="translate-y-1/4 -translate-x-2/4 xxl:translate-x-0 scale-135" />
          </div>
          <div className="md:col-span-8 lg:col-span-6 lg:pt-16">
            <div className="max-w-[45rem] mx-auto text-center mb-16">
              <h1 className="mb-6">
                <BoxTitle text="Key concepts" />
              </h1>
              <GlitchTitle level="2" size={[54, 54, 54, 68]} className="mb-6">
                We're creating the critical infrastructure for Web3 and DeFi to
                mature, and birth a thriving new world of finance
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
            </div>
          </div>
          <div className="hidden md:col-span-2 lg:col-span-3 md:block">
            <UniverseRight className="translate-y-1/4 translate-x-2/4 scale-135" />
          </div>
        </div>
      </Container>

      <Container>
        <div className="max-w-[26.25rem] mx-auto text-center">
          <h2 className="title-l mb-6">Vega is designed to:</h2>
        </div>
      </Container>

      <div className="relative z-30">
        <Sticky enabled={true}>
          <div className="bg-white dark:bg-black">
            <div className="mx-auto border-b overflow-x-scroll overflow-y-hidden whitespace-nowrap border-vega-mid-grey md:flex md:justify-center md:gap-x-8 px-6 md:px-0">
              <ScrollSpy>
                {sections.map((section, index) => (
                  <AnchorLink
                    key={index}
                    className={`inline-block relative bottom-[-1px] last:mr-0 py-2 px-4 text-lg leading-7 border-b-4 hover:border-current border-transparent`}
                    to={`/${intl.locale}/key-concepts/#${section.hash}`}
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

      <Container>
        <div className="mt-20">
          <div id="good" className="relative mb-12 md:mb-24 overflow-x-hidden">
            <div className="md:grid md:grid-cols-12 mb-12">
              <div className="md:col-span-6 title-l md:title-xl max-w-[32.5rem]">
                Be as good as CeFi
                <div className="absolute right-0 top-0 title-l md:title-xl max-w-[32.5rem] translate-x-1/2 hidden md:block">
                  Be as good as CeFi
                </div>
              </div>
              <div className="md:col-span-5 border-current border p-4 pb-6 relative mt-4 md:mt-12 bg-white dark:bg-black">
                <div className="copy-s text-current">
                  Vega will rival the current financial system, replacing it
                  with one that puts fairness, efficiency, and accessibility at
                  its heart.
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 border-t border-current"></div>
                </div>
              </div>
            </div>
            <ConceptBlock
              title="Purpose built blockchain"
              text="Ethereum and other blockchains suffer slow performance since
                they're generalist tools, with smart contracts for everything
                &mdash; applying the same rules regardless of what you use them
                for. And charging high gas fees in the process. Making these
                blockchains fit for sophisticated trading requires workarounds
                to avoid unwanted results, such as the unfair practice of front
                running. Derivatives are too important in finance to use
                workarounds. Vega is specifically built from the ground up with
                trading in mind, using high performing, purpose-built smart
                products for trading &mdash; meaning no fees on orders, and
                fairness at its core."
              diagram={<PurposeBuiltTable />}
              links={[
                {
                  link: "https://blog.vega.xyz/the-concepts-underpinning-vega-ad1d64f1a55c",
                  text: "Concepts underpinning Vega",
                },
                {
                  link: "https://vega.xyz/papers/vega-protocol-whitepaper.pdf",
                  text: "White paper",
                },
              ]}
            />
            <ConceptBlock
              title="Secure and fair transactions"
              text="Our high-throughput, low-latency platform secures transactions
                by Tendermint, our proof-of-stake consensus layer. The consensus
                algorithm ensures that all nodes see the same sequence of
                transactions, maintaining the integrity of the platform and
                ensuring transparency and auditability of trading outcomes. In
                this way, we can create a fair marketplace where no participant
                can routinely gain advantage through malicious actions &mdash;
                and market governance is decentralised."
              links={[
                {
                  link: "https://medium.com/wetez-studio/staking-project-vega-an-innovative-decentralized-derivatives-trading-protocol-ec831c4ac62f",
                  text: "Staking with Vega",
                },
              ]}
            />
          </div>

          <div
            id="better"
            className="relative mb-12 md:mb-24 overflow-x-hidden"
          >
            <div className="md:grid md:grid-cols-12 mb-12">
              <div className="md:col-span-6 title-l md:title-xl max-w-[32.5rem]">
                Be better than CeFi
                <div className="absolute right-0 top-0 title-l md:title-xl max-w-[32.5rem] translate-x-1/2 hidden md:block">
                  Be better than CeFi
                </div>
              </div>
              <div className="md:col-span-5 border-current border p-4 pb-6 relative mt-4 md:mt-12 dark:bg-black bg-white">
                <div className="copy-s text-current">
                  By standardising and automating every step of the trade
                  lifecycle, Vega addresses the shortcomings of traditional
                  trading. And strikes a balance between rigidity and
                  flexibility, for confidence and growth.
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 border-t border-current"></div>
                </div>
              </div>
            </div>

            <ConceptBlock
              title="Community curation of markets"
              text="Vega's market governance is designed so the network can operate
                and grow freely, without manual intervention &mdash; while
                minimising risks posed by bad actors. Weighted voting happens
                through the community allocating, or staking, their tokens to
                validator nodes. And decisions made include creation and closure
                of markets, and the setting of parameters that influence market
                behaviour."
              links={[
                {
                  link: "https://blog.vega.xyz/what-to-expect-from-restricted-mainnet-616086d9fdaf",
                  text: "What to expect from restricted mainneta",
                },
              ]}
            />

            <ConceptBlock
              title="Fully decentralised order book"
              text="Vega is a protocol for creating decentralised markets which uses
                a limit order book for trade generation. Different nodes receive
                different orders from different users, and these 'gossip'
                between themselves and decide which ones to include in the next
                block. So at any block height, all the nodes have exactly the
                same representation of the order book."
              links={[
                {
                  link: "https://blog.vega.xyz/designing-programmable-markets-de0650246dd5",
                  text: "Designing programmable markets",
                },
              ]}
            />

            <ConceptBlock
              title="Permissionless market creation"
              text="The freedom to transact and create markets is central to Vega
                delivering on the promise of blockchain and DeFi. Anyone can
                create markets on any underlying asset &mdash; and easily
                attract liquidity with our built-in incentive mechanism that
                matches traders and market makers."
              diagram={<PermissionlessMarketCreationDiagramResponsive />}
              links={[
                {
                  link: "https://blog.vega.xyz/vegas-derivatives-toolbox-b098b7de42e",
                  text: "The Vega toolbox",
                },
                {
                  link: "https://medium.com/greenfield-one/vega-protocol-fair-access-to-efficient-resilient-derivatives-markets-dba11fe281aa",
                  text: "Fair access to efficient and resilient derivatives markets",
                },
              ]}
            />

            <ConceptBlock
              title="Dynamic margins"
              text="Vega protocol's rigorous framework continuously monitors whether
                there is sufficient committed liquidity for a market &mdash; and
                manages credit risk much more efficiently than centralised
                exchanges. With a plugin-like architecture for risk models, it
                is easy to implement whichever risk model is appropriate for a
                new market. And we run best-in-class stochastic models fast
                enough to support frequent margin evaluations &mdash; allowing
                liquidity providers to quickly take appropriate action."
              links={[
                {
                  link: "https://blog.vega.xyz/why-vega-is-compelling-to-pro-traders-bd6fc3af2be2",
                  text: "What pro traders will love about Vega",
                },
                {
                  link: "https://blog.vega.xyz/credit-risk-and-margins-on-vega-e72bbac06723",
                  text: "Credit risk and margins on Vega",
                },
              ]}
            />

            <ConceptBlock
              title="Pseudonymous trading"
              text="Lowering the barrier to wealth and value creation calls for
                pseudonymous identities. In this way, the Vega network is
                accessible to anyone in the world without restriction."
              links={[
                {
                  link: "https://blog.vega.xyz/the-concepts-underpinning-vega-ad1d64f1a55c",
                  text: "Concepts underpinning Vega",
                },
              ]}
            />

            <ConceptBlock
              title="Pegged order for automated order management"
              text="Track the best offer when selling a stock and the best bid when
                buying a security, with pegged orders. This feature also enables
                advanced trading strategies, and reduces the number of
                transactions needed to maintain liquidity provider orders."
              links={[
                {
                  link: "https://blog.vega.xyz/pegged-orders-on-vega-d78e55c17bb5",
                  text: "Pegged orders and how they work",
                },
                {
                  link: "https://docs.fairground.vega.xyz/docs/trading-questions/",
                  text: "Docs trading questions",
                },
              ]}
            />

            <ConceptBlock
              title="Optimised for high capital efficiency"
              text="Vega's live, automated cross margining significantly lowers
                capital costs meaning markets can exist that previously wouldn't
                due to forbidding costs. Traditional derivatives exchanges
                charge an initial margin on open positions and then conduct a
                daily mark to market across all traders with open positions as a
                way of covering their risk. Instead, Vega runs SPAN-type
                calculations, ie it evaluates overall portfolio risk by
                calculating the worst possible loss that a portfolio of
                derivative and physical instruments might reasonably incur. But
                it does this live instead of over the course of one trading day.
                And it does this on-chain. Meanwhile, built-in cross margining routes a trader's gains made
                on one market (realised and/or unrealised), to offset positions
                on other markets. These combined innovations open up hedging
                instruments to a far greater range of people and businesses."
              links={[
                {
                  link: "https://blog.vega.xyz/why-vega-is-compelling-to-pro-traders-bd6fc3af2be2",
                  text: "What pro traders will love about Vega",
                },
                {
                  link: "https://vega.xyz/papers/vega-protocol-whitepaper.pdf",
                  text: "White paper",
                },
              ]}
            />

            <ConceptBlock
              title="Front-running protection"
              text="Vega has anti-frontrunning protection built in at the consensus
                layer. Our pre-protocol widget, 'Wendy', provides cryptographic
                proof that a trader has had fair access to the order book.
                Something not even sophisticated traditional exchanges can
                offer."
              links={[
                {
                  link: "https://vega.xyz/papers/fairness.pdf",
                  text: "Wendy, the good little fairness widget",
                },
                {
                  link: "https://vega.xyz/papers/Wendy_Grows_Up.pdf",
                  text: "Wendy Grows up",
                },
              ]}
            />

            <ConceptBlock
              title="Market making with built-in liquidity incentives"
              text="Successful markets need enough liquidity to generate bustling
                activity. Vega shifts power and reward away from rent-seeking
                exchange owners, towards the liquidity providers of markets.
                This opens up new sets of business models, and unlocks a “VC”
                like approach of incubating a portfolio of markets, or “buying
                in” to more mature markets."
              diagram={<MarketMakingDiagramResponsive />}
              links={[
                {
                  link: "https://cointelegraph.com/news/this-startup-is-on-a-quest-to-make-decentralized-exchanges-viable-for-pros",
                  text: "DEX viable for pros",
                },
                {
                  link: "https://blog.vega.xyz/sushiswap-how-to-get-vega-liquidity-rewards-9848e4cadee9",
                  text: "How to get liquidity rewards",
                },
                {
                  link: "https://blog.vega.xyz/unlocking-vega-coinlist-pro-uniswap-sushiswap-b1414750e358",
                  text: "The VEGA Token Listing & LP Incentives",
                },
              ]}
            />

            <ConceptBlock
              title="Efficient price discovery"
              text="Knowing the latest and most accurate price is key to making good
                trading decisions. Vega offers subsecond latency together with
                price protection mechanisms/circuit breakers and auctions in low
                liquidity regimes to discover true market prices."
              links={[
                {
                  link: "https://blog.vega.xyz/why-vega-is-compelling-to-pro-traders-bd6fc3af2be2",
                  text: "What pro traders will love about Vega",
                },
              ]}
            />
          </div>

          <div
            id="mature"
            className="relative mb-12 md:mb-24 overflow-x-hidden"
          >
            <div className="md:grid md:grid-cols-12 mb-12">
              <div className="md:col-span-6 title-l md:title-xl max-w-[32.5rem]">
                Help DeFi mature
                <div className="absolute right-0 top-0 title-l md:title-xl max-w-[32.5rem] translate-x-1/2 hidden md:block">
                  Help DeFi mature
                </div>
              </div>
              <div className="md:col-span-5 border-current border p-4 pb-6 relative mt-4 md:mt-12 bg-white dark:bg-black">
                <div className="copy-s text-current">
                  Designed from the ground up, and in a modular way to encourage
                  creativity and incentivise participation &mdash; we're
                  creating the critical infrastructure for Web3 and DeFi to
                  mature. And birth a thriving new world of finance.
                  <div className="absolute bottom-0 left-0 right-0 h-1.5 border-t border-current"></div>
                </div>
              </div>
            </div>

            <ConceptBlock
              title="Cross chain support"
              text="Vega lets users choose which digital asset they want to use as
                collateral, including Bitcoin, Ethereum, ERC-20 tokens, stable
                coins, and more &mdash; though currently it only supports Ether.
                By making the protocol blockchain-agnostic, trades will be able
                to settle in any crypto-asset on a supported chain, paving the
                way for physically settled and cash settled products, as
                commodity and asset tokenisation become widespread."
              links={[
                {
                  link: "https://vega.xyz/papers/vega-technical-overview.pdf",
                  text: "Technical overview",
                },
                {
                  link: "https://www.edenblock.com/post/vega-protocol-investment-thesis",
                  text: "What others are saying",
                },
              ]}
            />

            <ConceptBlock
              title="No gas fees"
              text="Vega does not charge gas fees. It uses a different fee structure
                that rewards participants and stimulates trading activity. Fees
                are incurred on every trade on a market in continuous trading,
                but it is the price taker who pays the fee. During a market's
                opening auction, no fees are collected."
              links={[
                {
                  link: "https://blog.vega.xyz/introducing-the-vega-token-40dac090b5c1",
                  text: "Introducing the Vega token",
                },
                {
                  link: "https://medium.com/greenfield-one/vega-protocol-fair-access-to-efficient-resilient-derivatives-markets-dba11fe281aa",
                  text: "Fair access to efficient and resilient derivatives markets",
                },
              ]}
            />

            <ConceptBlock
              title="Dev-friendly APIs"
              text="Vega works alongside other layer 1 blockchains so developers can
                easily build immersive web, mobile, or desktop apps on top of
                the Vega network. Developing with our APIs is very similar to
                integrating with a centralised exchange except that you connect
                to a node in the Vega PoS network rather than a central server.
                Full access to the blockchain and all trading data allows new
                types of market insight. What's more, with our REST, gRPC, or
                GraphQL APIs you can unleash the power of completely transparent
                risk and order books &mdash; a necessary element for fairer and
                faster trading."
              links={[
                {
                  link: "https://docs.vega.xyz/docs/api/overview/",
                  text: "Getting started on Vega APIs",
                },
                {
                  link: "https://vega.xyz/discord",
                  text: "Join the Discord channel",
                },
              ]}
            />

            <ConceptBlock
              title="Easy integration"
              text="Vega is designed from the ground-up, making integration with
                trading systems and bots seamless and easy. For example, you
                could easily create responsive markets to monitor various real
                world/spot dynamics and automatically propose a hedging market
                when volatility exceeds a threshold."
              links={[
                {
                  link: "https://docs.vega.xyz/docs/api/overview/",
                  text: "Get started on Vega APIs",
                },
              ]}
            />

            <ConceptBlock
              title="Create user-friendly front-ends"
              text="Unlock trading for the masses by creating status-quo
                challenging, trading user interfaces. All the information you
                need to create new trading front-ends is at your fingertips.
                WebSocket for communication between your app and the server,
                GraphQL or gRPC APIs for streaming market data. You can also
                show simple graphs of data from markets using an open source
                library (such as Vega Pennant graphing library). The
                possibilities are endless."
              links={[
                {
                  link: "https://github.com/vegaprotocol",
                  text: "Front ends",
                },
              ]}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default KeyConceptsPage;
