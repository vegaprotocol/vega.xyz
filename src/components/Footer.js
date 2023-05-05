import React from 'react'
import TextLink from '../components/TextLink'
import Container from '../components/Container'
import SquareBullet from '../components/Svg/SquareBullet'
import IconDiscord from '../components/Svg/IconDiscord'
import IconGithub from '../components/Svg/IconGithub'
import IconTelegram from '../components/Svg/IconTelegram'
import IconTwitter from '../components/Svg/IconTwitter'
import { routeThroughInterstitialPage } from '../utils/tools'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Footer = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <footer>
      <div className="border-y border-current pt-8 pb-12">
        <Container>
          <div className="grid grid-cols-2 gap-y-8 gap-x-6 md:grid-cols-3 lg:grid-cols-5">
            <div>
              <div className="mb-3 text-[0.9375rem] uppercase">
                <SquareBullet size="11" />
                <Trans t={t}>Use</Trans>
              </div>
              <ul>
                <li>
                  <TextLink to="/use/" className="block py-1.5 leading-[1.3]">
                    <Trans t={t}>Use the network</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/wallet/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Vega Wallet</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/validators/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Validate and secure the network</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to={routeThroughInterstitialPage(
                      'https://console.fairground.wtf/'
                    )}
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Launch Console</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://token.vega.xyz/governance"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Govern</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://token.vega.xyz/staking"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Stake</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://explorer.vega.xyz/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Block Explorer</Trans>
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
                    to="/community/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Vega Community</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/events"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Events + meetups</Trans>
                  </TextLink>
                </li>
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
                    to="https://vega.xyz/discord"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Discord</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/ambassadors"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Ambassadors</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/builders-club"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Builders club</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://fairground.wtf"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Fairground incentives</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://github.com/vegaprotocol/bounties/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Bounties</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://github.com/vegaprotocol/feedback/discussions"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Provide feedback</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/community/swag"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Swag</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://fairground.wtf/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Fairground Testnet</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/careers"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Careers</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/partners-backers"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Partners and backers</Trans>
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
                    <Trans t={t}>Vega Governance</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/market-creation"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Market creation</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://community.vega.xyz/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Forum</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://token.vega.xyz/governance"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Governance dApp</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://docs.vega.xyz/mainnet/concepts/vega-protocol"
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
                <Trans t={t}>Develop</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/develop/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Get started</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/rewards/"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Rewards</Trans>
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
                    to="https://docs.vega.xyz"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Documentation</Trans>
                  </TextLink>
                </li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-[0.9375rem] uppercase">
                <SquareBullet size="11" />
                <Trans t={t}>Learn</Trans>
              </div>
              <ul>
                <li>
                  <TextLink
                    to="/key-concepts"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Key concepts</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/papers" className="block py-1.5 leading-[1.3]">
                    <Trans t={t}>Vega papers</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vega.xyz/papers/vega-protocol-whitepaper.pdf"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Whitepaper</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://vega.xyz/papers/vega-technical-overview.pdf"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Technical overview</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="/insights"
                    className="block py-1.5 leading-[1.3]"
                  >
                    <Trans t={t}>Insights</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink to="/talks" className="block py-1.5 leading-[1.3]">
                    <Trans t={t}>Talks</Trans>
                  </TextLink>
                </li>
                <li>
                  <TextLink
                    to="https://blog.vega.xyz"
                    className="block py-1.5 leading-[1.3]"
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
          <div className="flex flex-wrap gap-y-2 gap-x-12 md:justify-between">
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
