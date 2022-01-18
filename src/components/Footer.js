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
    <footer className="mt-12 pt-12">
      <div className="border-y border-current pt-8 pb-12">
        <Container>
          <div className="grid grid-cols-12 gap-y-8 gap-x-6">
            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                Learn
              </div>
              <ul>
                <li>
                  <TextLink to="/key-concepts/" className="py-1 block">
                    Key concepts
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/papers/" className="py-1 block">
                    Papers
                  </TextLink>
                </li>
                <li>
                  <TextLink to="https://blog.vega.xyz/" className="py-1 block">
                    Blog
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/talks/" className="py-1 block">
                    Talks
                  </TextLink>
                </li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-6 lg:col-span-3">
              <div className="uppercase text-[0.9375rem] mb-3">
                <SquareBullet size="11" />
                Develop
              </div>
              <ul>
                <li>
                  <TextLink to="/develop/" className="py-1 block">
                    Get started
                  </TextLink>
                </li>
                <li>
                  <TextLink to="https://docs.vega.xyz" className="py-1 block">
                    Explore the docs
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://github.com/vegaprotocol"
                    className="py-1 block"
                  >
                    Get the code
                  </TextLink>
                </li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-6 lg:col-span-3">
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
                    to="https://token.vega.xyz/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Stake/Delegate tokens
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/" className="py-1.5 block leading-[1.3]">
                    Configure the network
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/" className="py-1.5 block leading-[1.3]">
                    Acquire tokens
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://fairground.wtf/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Fairground (Testnet)
                  </TextLink>
                </li>
              </ul>
            </div>

            <div className="col-span-6 md:col-span-6 lg:col-span-3">
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
                    Join the community
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/careers/"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Careers
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/" className="py-1.5 block leading-[1.3]">
                    Contributors
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/partners-backers"
                    className="py-1.5 block leading-[1.3]"
                  >
                    Partners and backers
                  </TextLink>
                </li>

                <li>
                  <TextLink
                    to="https://vegacommunity.substack.com/subscribe"
                    className="py-1.5 block mt-8 leading-[1.3]"
                  >
                    Newsletter sign up
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
              <TextLink
                to="https://github.com/vegaprotocol/brand"
                className="text-vega-mid-grey"
              >
                Brand assets
              </TextLink>
              <TextLink
                to="https://github.com/vegaprotocol/"
                className="text-vega-mid-grey"
              >
                Contribute to Vega
              </TextLink>
              <TextLink to="/privacy/" className="text-vega-mid-grey">
                Privacy & Cookie Policy
              </TextLink>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
