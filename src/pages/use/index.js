import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GlitchTitle from "../../components/GlitchTitle";
import BoxLink from "../../components/BoxLink";
import BoxTitle from "../../components/BoxTitle";
import ButtonLink from "../../components/ButtonLink";
import LeadingLine from "../../components/LeadingLine";
import Wave from "../../components/Svg/Wave";
import DeadFish from "../../images/dead-fish.svg";

const UsePage = () => {
  return (
    <Layout>
      <Seo
        title="Use the network"
        description="Use the network to get tokens, start staking, configure the network, or trade. And help fuel the DeFi economy."
      />
      <div className="relative z-10">
        <Container dataCy={"main"}>
          <div className="pt-6 mb-12 md:mb-24 lg:pt-16">
            <div className="max-w-[28rem] lg:max-w-[41.875rem]">
              <h1>
                <BoxTitle text="Use the network" />
              </h1>
              <GlitchTitle level="1" size="small" className="mt-4">
                Fuel the engine of the new DeFi economy
              </GlitchTitle>
              <LeadingLine className="text-current">
                Get tokens, start staking, configure the network, or trade.
                Remember to keep an eye out for new features, like proposing
                markets and providing liquidity.
              </LeadingLine>
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-12">
            <div>
              <div className="mb-16">
                <BoxLink
                  title={`Stake Tokens`.toUpperCase()}
                  text="Signal your support for a validator by staking tokens. This strengthens the consensus layer, secures the network &mdash; and earns you rewards too."
                  linkTitle="Stake Tokens"
                  link="https://token.vega.xyz/staking/"
                  inlineLinkTitle="Read the docs"
                  inlineLink="https://docs.vega.xyz"
                />
              </div>
              <div className="mb-16">
                <BoxLink
                  title={`Get Tokens`.toUpperCase()}
                  text="Join the new era of finance. Earn tokens as rewards for contributing to the community."
                  linkTitle="Earn Rewards"
                  link="/community/#contributions"
                />
              </div>
            </div>
            <div className="md:-translate-y-12">
              <div className="mb-16">
                <BoxLink
                  title={`Configure the network`.toUpperCase()}
                  text="Shape the future of DeFi. Propose and vote on governance actions to define the optimal network configuration."
                  linkTitle="Configure the network"
                  link="https://token.vega.xyz/governance"
                  inlineLinkTitle="Read the docs"
                  inlineLink="https://docs.vega.xyz/docs/concepts/vega-protocol#governance"
                />
              </div>
              <div className="mb-16">
                <BoxLink
                  title={`Propose new markets and provide liquidity`.toUpperCase()}
                  text="Change the game of value creation. Propose a new market and provide liquidity, or place liquidity on an existing market. Coming soon to Mainnet."
                  linkTitle="Try it out on Fairground"
                  link="https://fairground.wtf"
                  locked="true"
                  inlineLinkTitle="See where it is on our roadmap"
                  inlineLink="/#roadmap"
                />
              </div>
              <div className="mb-16">
                <BoxLink
                  title={`Trade`.toUpperCase()}
                  text="Smarter, fairer trading is the future. Place orders and trade on a fully decentralised network. Coming soon to the Mainnet."
                  linkTitle="Try it out on Fairground"
                  link="https://fairground.wtf"
                  locked="true"
                  inlineLinkTitle="See where it is on our roadmap"
                  inlineLink="/#roadmap"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="md:-mt-40 relative z-0 mb-12">
        <Wave />
      </div>

      <Container>
        <div className="text-center">
          <img src={DeadFish} alt="" className="inline-block rotate-90 mb-6" />

          <div className="max-w-[18.75rem] md:max-w-[45rem] mx-auto">
            <GlitchTitle level="2" size="medium">
              Experiment on Fairground
            </GlitchTitle>
          </div>
          <div className="mb-12 max-w-[35rem] md:max-w-[42rem] mx-auto">
            <p className="copy-xs md:copy-s">
              Fairground is our test network &mdash; a safe and fun place to try
              out Vega without consequences.
            </p>
            <p className="copy-xs mb-12">
              Use the powerful Vega Console app, build on the protocol's rich
              decentralised APIs, experiment before using the Mainnet and earn
              rewards for finding bugs and perfecting Vega.
            </p>
          </div>
          <ButtonLink link="https://fairground.wtf" text="Fairground" />
        </div>
      </Container>
    </Layout>
  );
};

export default UsePage;
