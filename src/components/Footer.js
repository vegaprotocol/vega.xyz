import React from "react";
import TextLink from "../components/TextLink";
import Container from "../components/Container";
import SquareBullet from "../components/Svg/SquareBullet";
import IconDiscord from "../components/Svg/IconDiscord";
import IconGithub from "../components/Svg/IconGithub";
import IconTelegram from "../components/Svg/IconTelegram";
import IconTwitter from "../components/Svg/IconTwitter";
import { Trans, useTranslation } from "gatsby-plugin-react-i18next";

const Footer = () => {
  const { t } = useTranslation("component.navigation");
  return (
    <footer>
      <div className="border-y border-current pt-8 pb-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6">
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                <Trans t={t}>Use</Trans>
              </div>
              <ul>
                <li>
                  <TextLink to="/use/" className="py-1.5 block leading-[1.3]">
                    <Trans t={t}>Use the network</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/wallet/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Vega Wallet</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://console.fairground.wtf/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Trade</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://token.vega.xyz/governance"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Govern</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://token.vega.xyz/staking"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Stake</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://explorer.vega.xyz/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Block Explorer</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                <Trans t={t}>Community</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/community/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Vega Community</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/events"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Events + meetups</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/contributors"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Contributors</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vega.xyz/discord"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Discord</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/ambassadors"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Ambassadors</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/builders-club"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Builders club</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/incentives-bounties"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Incentives + bounties</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/swag"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Swag</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://fairground.wtf/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Fairground Testnet</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/careers"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Careers</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/partners-backers"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Partners and backers</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                <Trans t={t}>Governance</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/governance/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Vega Governance</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/market-creation"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Market creation</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://community.vega.xyz/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Forum</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://token.vega.xyz/governance"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Governance dApp</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://docs.vega.xyz/mainnet/concepts/vega-protocol"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Governance docs</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                <Trans t={t}>Develop</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/develop/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Get started</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://github.com/vegaprotocol"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Github</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://docs.vega.xyz"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Documentation</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                <Trans t={t}>Learn</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/key-concepts"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Key concepts</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/papers" className="py-1.5 block leading-[1.3]">
                    <Trans t={t}>Vega papers</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vega.xyz/papers/vega-protocol-whitepaper.pdf"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Whitepaper</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vega.xyz/papers/vega-technical-overview.pdf"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Technical overview</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/talks" className="py-1.5 block leading-[1.3]">
                    <Trans t={t}>Talks</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://blog.vega.xyz"
                    className="py-1.5 block leading-[1.3]"
                  >
                    <Trans t={t}>Blog</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-5">
        <Container>
          <div className="flex md:justify-between flex-wrap gap-y-2 gap-x-12">
            <div className="flex items-center gap-x-4">
              <div className="uppercase text-[0.9375rem] mr-3">
                <SquareBullet size="11" />
                <Trans t={t}>Connect</Trans>
              </div>
              <a
                href="https://twitter.com/vegaprotocol"
                rel="noreferrer"
                target="_blank"
              >
                <IconTwitter />
              </a>
              <a
                href="https://vega.xyz/discord"
                rel="noreferrer"
                target="_blank"
              >
                <IconDiscord />
              </a>
              <a
                href="https://github.com/vegaprotocol"
                rel="noreferrer"
                target="_blank"
              >
                <IconGithub />
              </a>
              <a
                href="https://t.me/vegacommunity/"
                rel="noreferrer"
                target="_blank"
              >
                <IconTelegram />
              </a>
            </div>
            <div className="flex items-center gap-x-5 gap-y-1 flex-wrap">
              <TextLink to="/bug-bounties">
                <Trans t={t}>Report a security issue</Trans>
              </TextLink>
              <TextLink to="https://github.com/vegaprotocol/brand">
                <Trans t={t}>Brand assets</Trans>
              </TextLink>
              <TextLink to="https://github.com/vegaprotocol/">
                <Trans t={t}>Contribute to Vega</Trans>
              </TextLink>
              <TextLink to="/privacy/">
                <Trans t={t}>Privacy & Cookie Policy</Trans>
              </TextLink>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
