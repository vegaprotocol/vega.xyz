import React from 'react'
import TextLink from '../components/TextLink'
import Container from '../components/Container'
import SquareBullet from '../components/Svg/SquareBullet'
import IconDiscord from '../components/Svg/IconDiscord'
import IconGithub from '../components/Svg/IconGithub'
import IconTelegram from '../components/Svg/IconTelegram'
import IconTwitter from '../components/Svg/IconTwitter'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Footer = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <footer>
      <div className="border-y border-current pb-12 pt-8">
        <Container>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
            <div>
              <div className="mb-3 text-[0.9375rem] uppercase">
                <SquareBullet size="11" />
                <Trans t={t}>About</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="https://blog.vega.xyz/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Blog</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/faqs/" className="block py-1.5 leading-[1.3]">
                    <Trans t={t}>FAQs</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/articles/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Articles</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/key-concepts"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Key Concepts</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/papers" className="block py-1.5 leading-[1.3]">
                    <Trans t={t}>Vega Papers</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/privacy/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Privacy & Cookie Policy</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-[0.9375rem] uppercase">
                <SquareBullet size="11" />
                <Trans t={t}>Docs</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="https://docs.vega.xyz/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Vega Docs</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-[0.9375rem] uppercase">
                <SquareBullet size="11" />
                <Trans t={t}>Governance</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/governance/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Intro</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://community.vega.xyz/c/governance/25"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Forums</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://governance.vega.xyz/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Governance dApp</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://docs.vega.xyz/mainnet/concepts/governance"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Governance docs</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-[0.9375rem] uppercase">
                <SquareBullet size="11" />
                <Trans t={t}>Community</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/community/contributors"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Contributors</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/events"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Events & Meetups</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://fairground.wtf/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Fairground incentives</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Community Home</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community#partners-backers"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Partners & Backers</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://github.com/vegaprotocol/feedback/discussions"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Provide Feedback</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/bug-bounties"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Report a Security Issue</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-[0.9375rem] uppercase">
                <SquareBullet size="11" />
                <Trans t={t}>Ecosystem</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="https://docs.vega.xyz/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>API Documentation</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/developers"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Getting Started</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://github.com/vegaprotocol"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Github</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/programmatic-trading"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Programmatic Trading</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://github.com/vegaprotocol/feedback/discussions"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Provide Feedback</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/apps" className="block py-1.5 leading-[1.3]">
                    <Trans t={t}>Apps & Tools</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/validators"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Validators</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/wallet" className="block py-1.5 leading-[1.3]">
                    <Trans t={t}>Wallet</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-[0.9375rem] uppercase">
                <SquareBullet size="11" />
                <Trans t={t}>Socials</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="https://vega.xyz/discord"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Discord</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://community.vega.xyz/c/governance/25"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Forum</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://t.me/vegacommunity/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Telegram</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://twitter.com/vegaprotocol"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>X (Formerly Twitter)</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vegacommunity.substack.com/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Substack</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://www.youtube.com/vegaprotocol"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>YouTube</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://www.twitch.tv/vegaprotocol"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Twitch</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://blog.vega.xyz/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Blog</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://github.com/vegaprotocol"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Github</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-5">
        <Container>
          <div className="flex flex-wrap gap-x-12 gap-y-2 md:justify-between">
            <div className="flex items-center gap-x-4">
              <div className="mr-3 text-[0.9375rem] uppercase">
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
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
              <TextLink to="https://blog.vega.xyz/tagged/vega-incident-reports">
                <Trans t={t}>Mainnet status and incidents</Trans>
              </TextLink>
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
  )
}

export default Footer
