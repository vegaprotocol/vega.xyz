import React, { useState } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import TranslationsBanner from "../../components/TranslationsBanner";
import Container from "../../components/Container";
import BoxTitle from "../../components/BoxTitle";
import LinkCta from "../../components/LinkCta";
import LeadingLine from "../../components/LeadingLine";
import EpochCountdown from "../../components/EpochCountdown";
import UICallout from "../../components/UI/Callout";
import UIButton from "../../components/UI/Button";
import UILink from "../../components/UI/Link";
import UICard from "../../components/UI/Card";
import Stars from "../../components/Svg/Stars";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const RewardsPage = ({ data }) => {
  const { t, i18n } = useTranslation("page.rewards");
  const [missingTranslations, setMissingTranslations] = useState(false);

  i18n.on("missingKey", (lng) => {
    setMissingTranslations(true);
  });

  const Apy = ({ className }) => {
    return (
      <div className={`relative max-w-[37.5rem] lg:max-w-none ${className}`}>
        <Stars className="w-full h-auto hidden lg:block" />
        <div className="lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-0 lg:right-0 lg:text-center text-[3rem] lg:text-[5rem] font-glitch-all bg-moshed2 bg-clip-text text-transparent bg-cover leading-none">
          <div>APY 29.9%</div>
        </div>
      </div>
    );
  };

  const RewardBox = ({
    title,
    rewardValue,
    rewardValueQualifier,
    description,
    buttonText,
    buttonLink,
  }) => {
    return (
      <div className="flex flex-col justify-between border border-vega-border-muted p-4 [&:nth-child(1)_.reward-value]:bg-moshed [&:nth-child(2)_.reward-value]:bg-moshed2 [&:nth-child(3)_.reward-value]:bg-moshed3">
        <div>
          <div className="title-s mb-6">{title}</div>
          <div
            className={`reward-value bg-clip-text text-transparent bg-cover text-[2.5rem] leading-none mb-2`}
          >
            {rewardValue}
          </div>
          {rewardValueQualifier && (
            <div className="text-vega-grey text-[1.125rem] mb-4 leading-tight">
              {rewardValueQualifier}
            </div>
          )}
          <div className="mb-6">{description}</div>
        </div>
        <UIButton width="full" to={buttonLink}>
          {buttonText}
        </UIButton>
      </div>
    );
  };

  const Card = ({ image, title, text, link, buttonText }) => {
    return (
      <UICard className="flex flex-col justify-between">
        <div className="mb-6">
          <GatsbyImage image={image} alt="" className="mb-5" />
          <UILink to={link} className="title-s block mb-3">
            {title}
          </UILink>
          <div className="text-vega-grey">{text}</div>
        </div>
        <UIButton to={link} width="full">
          {buttonText}
        </UIButton>
      </UICard>
    );
  };

  return (
    <Layout>
      <Seo
        title={t("Develop with Vega")}
        description={t(
          "Get access to the Vega APIs, contribute to the source code, earn bounties and be rewarded for building the future of DeFi."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={"main"}>
        <div className="pt-6 lg:pt-16 md:flex md:justify-between mb-4 md:mb-10">
          <div>
            <BoxTitle text={t("Develop")} />
            <h1 className="title-m max-w-[48rem] font-glitched md:title-l mb-4 md:mb-12 mt-4">
              <Trans t={t}>Rewards</Trans>
            </h1>
            <LeadingLine className="!mb-0">
              <Trans t={t}>
                Rewards are paid out from the treasury at the end of an epoch.
              </Trans>
            </LeadingLine>
          </div>
          <LinkCta to="https://token.vega.xyz/rewards" className="mt-2 md:mt-0">
            <Trans t={t}>Rewards I've earned</Trans>
          </LinkCta>
        </div>
        <EpochCountdown />
        <div className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8">
            <RewardBox
              idx={0}
              title={t("Trading")}
              rewardValue="10,000 $VEGA"
              rewardValueQualifier="Average total paid out per epoch"
              description={
                <div className="text-[0.875rem] text-vega-mid-grey">
                  <span className="dark:text-white text-black">
                    10,000 $VEGA committed this epoch.
                  </span>
                  <br /> Distributed based on the proportion of the total maker
                  fees you've paid, in this epoch per market.
                </div>
              }
              buttonText="Trade"
              buttonLink="https://console.fairground.wtf/"
            />
            <RewardBox
              idx={1}
              title={t("Liquidity Provision")}
              rewardValue="10,000 $VEGA"
              rewardValueQualifier="Average total paid out per month"
              description={
                <div className="text-[0.875rem] text-vega-mid-grey">
                  <span className="dark:text-white text-black">
                    10,000 $VEGA committed this epoch.
                  </span>
                  <br /> Distributed based on the proportion of the total
                  liquidity and maker fees you have received, in this epoch per
                  market.
                </div>
              }
              buttonText="Provide liquidity"
              buttonLink="https://docs.vega.xyz/docs/testnet/tutorials/providing-liquidity"
            />
            <RewardBox
              idx={2}
              title={t("Market Creation")}
              rewardValue="10,000 $VEGA"
              rewardValueQualifier="per month"
              description={
                <div className="text-[0.875rem] text-vega-mid-grey">
                  <span className="dark:text-white text-black">
                    10,000 $VEGA committed this epoch.
                  </span>
                  <br /> For markets that meet the threshold value in a month.
                  The current threshold is 1 $VEGA
                </div>
              }
              buttonText="Provide liquidity"
              buttonLink="https://docs.vega.xyz/docs/testnet/tutorials/providing-liquidity"
            />
          </div>
        </div>
        <div className="text-[1.3125rem] text-vega-grey max-w-[43.75rem]">
          Any Vega network participant with assets can use the rewards
          functionality to incentivise behaviours they would like to see in a
          market for trading, liquidity provision.{" "}
          <LinkCta
            to="https://docs.fairground.vega.xyz/docs/trading-questions/#trading-rewards"
            className="text-black dark:text-white"
          >
            Create your own reward
          </LinkCta>
        </div>
        <UICallout className="my-16 md:my-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[1.5rem]">Staking rewards</div>
              <p className="text-vega-mid-grey mb-4 lg:mb-6">
                Nominate a validator and earn treasury rewards for each full
                epoch staked, as well as a share of trading fees.
              </p>
              <Apy className="lg:hidden max-w-[17.75rem] mb-6" />
              <div className="grid grid-cols-1 gap-6 md:flex md:gap-6 md:items-center">
                <UIButton to="https://token.vega.xyz/">Staking</UIButton>
                <UIButton
                  variant="secondary"
                  to="https://console.fairground.wtf/"
                >
                  Become a validator
                </UIButton>
              </div>
            </div>
            <Apy className="hidden lg:block" />
          </div>
        </UICallout>

        <h2 className="title-m max-w-[48rem] font-glitched md:title-l mb-4 md:mb-12 mt-4">
          <Trans t={t}>Incentives and Bounties</Trans>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 my-10">
          <Card
            image={getImage(data.iconBounties)}
            title={t("Bounties")}
            text={t(
              "Participate in developer bounties and get rewarded for your commitment."
            )}
            link="https://github.com/vegaprotocol/bounties/"
            buttonText={t("Bounties")}
          />
          <Card
            image={getImage(data.iconSecurity)}
            title={t("Security issues")}
            text={t(
              "Found a software security issue? Report it to us and earn rewards by finding bugs that affect the Vega Network."
            )}
            link="/bug-bounties"
            buttonText={t("Report a security issue")}
          />
          <Card
            image={getImage(data.iconFairground)}
            title={t("Fairground incentives")}
            text={t(
              "Earn rewards for helping to find bugs and battle harden Vega's Testnet."
            )}
            link="https://fairground.wtf/"
            buttonText={t("Fairground")}
          />
        </div>
      </Container>
    </Layout>
  );
};

export default RewardsPage;

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
    iconBounties: file(
      relativePath: { eq: "contribute-icons/ambassador.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconSecurity: file(
      relativePath: { eq: "contribute-icons/builders-club.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconFairground: file(
      relativePath: { eq: "contribute-icons/feedback.png" }
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
