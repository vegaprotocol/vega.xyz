import React from "react";
import TextLink from "../components/TextLink";
import Container from "../components/Container";
import SquareBullet from "../components/Svg/SquareBullet";
import IconDiscord from "../components/Svg/IconDiscord";
import IconGithub from "../components/Svg/IconGithub";
import IconTelegram from "../components/Svg/IconTelegram";
import IconTwitter from "../components/Svg/IconTwitter";

const Footer = () => {
  return (
    <footer>
      <div className="border-y border-current pt-8 pb-12">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-6">
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                Use
              </div>
              <ul>
                <li>
                  <TextLink to="/use/" className="py-1.5 block leading-[1.3]">
                    Use the network
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/wallet/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Vega Wallet
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://console.fairground.wtf/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Trade
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://token.vega.xyz/governance"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Govern
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://token.vega.xyz/staking"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Stake
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://explorer.vega.xyz/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Block Explorer
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                Community
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/community/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Vega Community
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/events"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Events + meetups
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/contributors"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Contributors
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vega.xyz/discord"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Discord
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/ambassadors"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Ambassadors
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vega.xyz/discord"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Builders club
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/incentives-bounties"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Incetives + bounties
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/swag"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Swag
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://fairground.wtf/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Fairground Testnet
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                Governance
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/governance/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Vega Governance
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/market-creation"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Market creation
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://community.vega.xyz/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Forum
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://token.vega.xyz/governance"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Governance dApp
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://docs.vega.xyz/docs/mainnet/concepts/vega-protocol"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Governance docs
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                Develop
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/develop/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Get started
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://github.com/vegaprotocol"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Github
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://docs.vega.xyz"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Documentation
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                Learn
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/key-concepts"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Key concepts
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/papers" className="py-1.5 block leading-[1.3]">
                    Vega papers
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vega.xyz/papers/vega-protocol-whitepaper.pdf"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Whitepaper
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vega.xyz/papers/vega-technical-overview.pdf"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Technical overview
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/talks" className="py-1.5 block leading-[1.3]">
                    Talks
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://blog.vega.xyz"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Blog
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
                Connect
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
              <TextLink to="https://github.com/vegaprotocol/brand">
                Brand assets
              </TextLink>
              <TextLink to="https://github.com/vegaprotocol/">
                Contribute to Vega
              </TextLink>
              <TextLink to="/privacy/">Privacy & Cookie Policy</TextLink>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
