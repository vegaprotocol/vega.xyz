import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Seo from '../components/Seo'
import Link from '../components/UI/Link'
import { routeThroughInterstitialPage } from '../utils/tools'
import TranslationsBanner from '../components/TranslationsBanner'
import Ticker from '../components/Ticker'
import GlitchTitle from '../components/UI/GlitchTitle'
import LatestNews from '../components/LatestNews'
import Button from '../components/UI/Button'
import LinkCta from '../components/LinkCta'
import LinkWrapper from '../components/UI/LinkWrapper'
import PageSection from '../components/PageSection'
import Calendar from '../components/Calendar'
import AsSeenOn from '../components/AsSeenOn'
import BoxLinkSimple from '../components/BoxLinkSimple'
import RoadMap from '../components/RoadMap'
import Rip from '../components/Svg/Home/Rip/Responsive'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import UniverseLeft from '../components/Svg/Home/UniverseLeft/Responsive'
import UniverseRight from '../components/Svg/Home/UniverseRight/Responsive'
import UniverseBottom from '../components/Svg/Home/UniverseBottom/Responsive'
import UniverseBottom2 from '../components/Svg/Home/UniverseBottom2'
import UniverseTop from '../components/Svg/Home/UniverseTop'
import Announcement from '../components/Announcement'
import PermissionlessMarketCreationIcon from '../images/feature-icons/permissionless-market-creation.svg'
import AntiFrontRunningProtectionIcon from '../images/feature-icons/anti-front-running-protection.svg'
import PurposeBuiltBlockChainIcon from '../images/feature-icons/purpose-built.svg'
import PseudononymousTradingIcon from '../images/feature-icons/pseudononymous-trading.svg'
import HighCapitalEfficiencyIcon from '../images/feature-icons/high-capital-efficiency.svg'
import NoGasFeesIcon from '../images/feature-icons/no-gas-fees.svg'
import NativeLiquidityProvision from '../images/feature-icons/native-liquidity-provision.svg'
import CrossChainSupportIcon from '../images/feature-icons/cross-chain-support.svg'

const ToolBox = ({ title, description, icon, link }) => {
  return (
    <Link
      to={link}
      hideArrow
      className="flex gap-4 rounded-3xl border border-vega-border-muted p-4 hover:-translate-y-2 md:block md:p-5 md:pb-8"
    >
      <div className="w-[4.75rem] shrink-0 lg:w-[5.9375rem]">
        <GatsbyImage image={icon} alt={title} className="md:mb-6 lg:w-auto " />
      </div>
      <div>
        <div className="title-s mb-1 md:mb-3">{title}</div>
        <p className="copy-xxs !mb-0 text-vega-text-muted">{description}</p>
      </div>
    </Link>
  )
}

const FeatureBox = ({ title, description, icon }) => {
  return (
    <div>
      <img src={icon} alt="" className="mb-4 h-[30px] w-[30px]" />
      <div>
        <div className="!mb-3 text-[1.3125rem] leading-[1.15] xl:text-[1.5rem]">
          {title}
        </div>
        <p className="mb-0 text-base text-vega-grey">{description}</p>
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const { t, i18n } = useTranslation('page.index')
  const [missingTranslations, setMissingTranslations] = useState(false)
  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('Blockchain derivatives')}
        description={t(
          "Discover Web3's native derivatives trading platform that is helping DeFi mature."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <main>
        <div className="relative mt-6 md:mt-8">
          <div className="mx-auto max-w-[18.75rem] md:hidden">
            <UniverseTop />
          </div>
          <div className="absolute top-0 left-0 right-0">
            <div className="mx-auto grid max-w-[100rem] grid-cols-12">
              <div className="col-span-3">
                <UniverseLeft />
              </div>
              <div className="col-span-6"></div>
              <div className="col-span-3 pt-[50%]">
                <UniverseRight />
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[100rem] md:grid md:grid-cols-12">
            <div className="hidden md:col-span-3 md:block"></div>
            <div className="md:col-span-6">
              <div className="pt-8 text-center  md:pt-20">
                <Container>
                  <h1 className="title-l md:title-xxl mx-auto mb-space-5 max-w-[25rem] md:max-w-[35rem] xl:text-[7.1875rem]">
                    <GlitchTitle color="red">
                      <Trans t={t}>Toward a new era of finance</Trans>
                    </GlitchTitle>
                  </h1>
                  <p className="body-xl mx-auto max-w-[30rem] md:max-w-none">
                    <Trans t={t}>
                      Vega is Web3's native derivatives layer. Fully
                      decentralised and optimised for permissionless market
                      creation. Currently supports futures trading with an
                      on-chain order book.
                    </Trans>
                  </p>
                </Container>
              </div>
            </div>
            <div className="hidden md:col-span-3 md:block"></div>
          </div>
        </div>
        <div className="mt-10 flex justify-end md:hidden">
          <div className="w-full max-w-[27rem]">
            <UniverseBottom2 />
          </div>
        </div>
        <Container dataCy={'main'}>
          <div className="relative mx-auto mb-10 -mt-[15%] max-w-[29rem] md:mt-0 md:max-w-[50rem] lg:max-w-[50rem]">
            <div className="grid gap-4 py-12 md:grid-cols-3 md:gap-8">
              <ToolBox
                title="Console"
                description={t(
                  'Try out trading cash settled futures on the fully decentralised Vega network (Testnet).'
                )}
                icon={getImage(data.consoleIcon)}
                link="https://console.fairground.wtf"
              />
              <ToolBox
                title="Governance"
                description={t(
                  'Submit and vote on proposals to create and change markets, network parameters and assets.'
                )}
                icon={getImage(data.governanceIcon)}
                link="https://token.vega.xyz/governance"
              />
              <ToolBox
                title="Block Explorer"
                description={t(
                  'Explore real-time Vega blockchain information.'
                )}
                icon={getImage(data.blockExplorerIcon)}
                link="https://explorer.vega.xyz/"
              />
            </div>

            <div className="text-center">
              <LinkCta to="/use">Browse the dapps and tools</LinkCta>
            </div>
          </div>
        </Container>
        <div className="mx-auto mb-20 hidden max-w-[38rem] md:block xl:max-w-[45rem]">
          <UniverseBottom />
        </div>

        <div className="pt-8 lg:pt-16">
          <Container>
            <h2 className="title-l md:title-xl mx-auto max-w-[45rem] md:text-center xl:text-[5.875rem]">
              <GlitchTitle color="orange">
                <Trans t={t}>Vega in 120 seconds</Trans>
              </GlitchTitle>
            </h2>
            <div className="mx-auto max-w-[75rem] py-8 md:mx-[8%] lg:pt-16">
              <LinkWrapper to="https://youtu.be/vcgY5zi1JQs">
                <GatsbyImage
                  image={getImage(data.explainerVideoCover)}
                  alt="Vega explainer video"
                />
              </LinkWrapper>
            </div>
          </Container>
        </div>
        <div className="pt-16 md:pt-32 lg:pt-40">
          <Container>
            <h2 className="title-l md:title-xl mb-4 max-w-[20rem] md:max-w-none md:text-center lg:mb-0 xl:text-[5.875rem]">
              <GlitchTitle color="orange">
                <Trans t={t}>Key features</Trans>
              </GlitchTitle>
            </h2>
            <div className="py-8 lg:pt-16">
              <div className="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
                <FeatureBox
                  title={t('Permissionless market creation')}
                  description={t('Propose a market on any underlying.')}
                  icon={PermissionlessMarketCreationIcon}
                />
                <FeatureBox
                  title={t('Anti front running')}
                  description={t(
                    'Fair access to the order book, preventing miner extractable value (MEV).'
                  )}
                  icon={AntiFrontRunningProtectionIcon}
                />
                <FeatureBox
                  title={t('Purpose-built blockchain')}
                  description={t(
                    'High performing smart contracts for sophisticated trading.'
                  )}
                  icon={PurposeBuiltBlockChainIcon}
                />
                <FeatureBox
                  title={t('Pseudonymous trading')}
                  description={t(
                    'Keep control of your data, and protect your privacy.'
                  )}
                  icon={PseudononymousTradingIcon}
                />
                <FeatureBox
                  title={t('High capital efficiency')}
                  description={t(
                    'Lower capital costs and evaluate risk live with cross margining.'
                  )}
                  icon={HighCapitalEfficiencyIcon}
                />
                <FeatureBox
                  title={t('No gas fees on trading')}
                  description={t(
                    'Fees only on trades on a market in continuous trading.'
                  )}
                  icon={NoGasFeesIcon}
                />
                <FeatureBox
                  title={t('Native liquidity provision')}
                  description={t(
                    'Built-in liquidity incentives for bustling markets.'
                  )}
                  icon={NativeLiquidityProvision}
                />
                <FeatureBox
                  title={t('Cross-chain support')}
                  description={t(
                    'Choose the digital asset for collateral or settlements.'
                  )}
                  icon={CrossChainSupportIcon}
                />
              </div>
              <div className="text-center">
                <Button to="/key-concepts">
                  <Trans t={t}>View all</Trans>
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <Rip />
        <div className="pt-16">
          <Ticker />
        </div>

        <div className="pt-16 md:pt-32 lg:pt-40">
          <div id="roadmap">
            <div className="text-center">
              <h2 className="heading-xl">
                <GlitchTitle color="purple">
                  <Trans t={t}>Roadmap</Trans>
                </GlitchTitle>
              </h2>
            </div>
            <RoadMap data={data.roadmap} />
          </div>
        </div>

        <Container hideXOverflow={true}>
          <PageSection>
            <LatestNews />
          </PageSection>

          <PageSection>
            <AsSeenOn />
          </PageSection>

          <PageSection>
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="title-l mb-8 hyphens-auto">
                  <Trans t={t}>Events</Trans>
                </div>
              </div>

              <div className="lg:col-span-8">
                <Calendar limit={3} />
              </div>
            </div>
          </PageSection>

          <PageSection>
            <div className="text-center">
              <h2 className="title-m md:title-l lg:title-xxl mb-4">
                <GlitchTitle color="red">
                  <Trans t={t}>Where next?</Trans>
                </GlitchTitle>
              </h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-[12rem] gap-6 md:max-w-[70rem] md:grid-cols-2 lg:grid-cols-4">
              <BoxLinkSimple text={t('Use the network')} link="/use" />
              <BoxLinkSimple text={t('Join the community')} link="/community" />
              <BoxLinkSimple
                text={t('Govern the network')}
                link="/governance"
              />
              <BoxLinkSimple text={t('Develop on Vega')} link="/develop" />
            </div>
          </PageSection>
        </Container>
        <Announcement
          title={t('Build, test & earn')}
          bodyText={t(
            'Your participation strengthens the network and can earn you a piece of up to 150k VEGA rewards.'
          )}
          link={{
            text: t('Join the Mainnet Sims now'),
            url: 'https://fairground.wtf/',
          }}
        />
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      translations: totalCount
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    roadmap: allMarkdownRemark(
      filter: {
        collection: { eq: "roadmap" }
        fields: { locale: { eq: $language } }
      }
      sort: { fields: [fields___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            step_title
            title
          }
          fields {
            locale
            order
            slug
          }
          html
        }
      }
    }
    consoleIcon: file(relativePath: { eq: "tool-icons/console-alt.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    governanceIcon: file(relativePath: { eq: "tool-icons/governance.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    blockExplorerIcon: file(
      relativePath: { eq: "tool-icons/block-explorer.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    explainerVideoCover: file(
      relativePath: { eq: "vega-explainer-video-cover.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 1920
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
