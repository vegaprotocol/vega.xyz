import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Seo from '../components/Seo'
import { routeThroughInterstitialPage } from '../utils/tools'
import TranslationsBanner from '../components/TranslationsBanner'
import Ticker from '../components/Ticker'
import GlitchTitle from '../components/UI/GlitchTitle'
import LatestNews from '../components/LatestNews'
import Button from '../components/UI/Button'
import PageSection from '../components/PageSection'
import BackerLogos from '../components/Home/BackerLogos'
import Calendar from '../components/Calendar'
import AsSeenOn from '../components/AsSeenOn'
import BoxLinkSimple from '../components/BoxLinkSimple'
import RoadMap from '../components/RoadMap'
import Rip from '../components/Svg/Home/Rip/Responsive'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PlanetA from '../components/Svg/Home/PlanetA'
import PlanetB from '../components/Svg/Home/PlanetB'
import Explore from '../components/Svg/Home/Explore'
import Markets from '../components/Home/Markets'
import LogoGRPC from '../components/Svg/LogoGRPC'
import LogoGraphQL from '../components/Svg/LogoGraphQL'
import LogoRestAPI from '../components/Svg/LogoRestAPI'
import PermissionlessMarketCreationIcon from '../images/feature-icons/permissionless-market-creation.svg'
import AntiFrontRunningProtectionIcon from '../images/feature-icons/anti-front-running-protection.svg'
import PurposeBuiltBlockChainIcon from '../images/feature-icons/purpose-built.svg'
import PseudononymousTradingIcon from '../images/feature-icons/pseudononymous-trading.svg'
import HighCapitalEfficiencyIcon from '../images/feature-icons/high-capital-efficiency.svg'
import NoGasFeesIcon from '../images/feature-icons/no-gas-fees.svg'
import NativeLiquidityProvision from '../images/feature-icons/native-liquidity-provision.svg'
import CrossChainSupportIcon from '../images/feature-icons/cross-chain-support.svg'

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
      <main data-cy="main">
        <Container>
          <div className="py-space-7 md:grid md:grid-cols-12 md:items-center md:gap-6">
            <div className="text-center md:col-span-6 md:text-left">
              <div className="md:pr-space-6 lg:pr-0">
                <div className="mx-auto mb-space-7 max-w-[20.9375rem] md:mx-0 md:max-w-[28.75rem]">
                  <h1 className="mb-space-2 text-[2rem] leading-none md:text-[2.5rem] lg:text-[3rem]">
                    <Trans t={t}>Uncompromisingly Decentralised.</Trans>
                    <br />
                    <span className="text-vega-dark-300">
                      <Trans t={t}>The world's most advanced DEX.</Trans>
                    </span>
                  </h1>
                  <div className="text-[1.125rem] leading-normal md:text-[1.5rem]">
                    <Trans t={t}>
                      Cash settled futures are now live on Vega's Alpha Mainnet.
                    </Trans>
                  </div>
                </div>

                <div className="mb-space-8 md:mb-space-7 xl:flex xl:items-center xl:gap-x-6">
                  <Button variant="hero" to="https://console.fairground.wtf/">
                    Launch console app
                  </Button>
                  <div className="mt-space-4 flex items-center justify-center gap-x-6 md:justify-start xl:mt-0 xl:justify-center">
                    <Button
                      className="text-vega-dark-300"
                      variant="secondary"
                      to="/wallet"
                    >
                      Vega Wallet
                    </Button>
                    <Button
                      className="text-vega-dark-300"
                      variant="secondary"
                      to="https://vega.xyz/discord"
                    >
                      Discord
                    </Button>
                    <Button
                      className="text-vega-dark-300"
                      variant="secondary"
                      to="https://docs.vega.xyz/"
                    >
                      Docs
                    </Button>
                  </div>
                </div>
              </div>

              <div className="lg:mt-space-16 mt-space-8 hidden md:block">
                <div className="heading-xxs !font-not-glitched mb-space-6 text-vega-dark-300">
                  <Trans t={t}>Backed by:</Trans>
                </div>
                <BackerLogos />
              </div>
            </div>
            <div className="md:col-span-6 xl:flex xl:justify-end">
              <div className="relative">
                <div className="absolute top-0 left-0 hidden h-[180px] w-[200px] translate-y-20 -translate-x-10 md:block lg:-translate-x-20 2xl:-translate-x-32">
                  <PlanetA />
                </div>
                <div className="absolute bottom-0 right-0 z-10 hidden h-[120px] w-[175px] translate-y-[5.625rem] md:block">
                  <PlanetB />
                </div>
                <div className="after:from-10% after:to-100% relative after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[7.375rem] after:bg-gradient-to-l after:from-white after:to-white/0 dark:after:from-black dark:after:to-black/0 md:translate-x-4 md:translate-x-6 lg:translate-x-8 2xl:after:origin-right 2xl:after:scale-110">
                  <div className="w-full overflow-hidden md:h-[460px] 2xl:origin-right 2xl:scale-110">
                    <GatsbyImage
                      image={getImage(data.consoleDark)}
                      alt=""
                      className="hidden md:dark:block"
                    />
                    <GatsbyImage
                      image={getImage(data.consoleLight)}
                      alt=""
                      className="hidden dark:hidden md:block"
                    />
                    <GatsbyImage
                      image={getImage(data.consoleDarkSmall)}
                      alt=""
                      className="hidden dark:block md:hidden"
                    />
                    <GatsbyImage
                      image={getImage(data.consoleLightSmall)}
                      alt=""
                      className="dark:hidden md:hidden"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <div className="heading-xxs !font-not-glitched mb-space-4 text-vega-dark-300">
              <Trans t={t}>Backed by:</Trans>
            </div>
            <BackerLogos />
          </div>

          <div className="mt-space-10 mb-0 md:my-space-12 lg:my-space-14">
            <Markets />
          </div>

          <div className="mb-space-10 mt-space-6 md:my-space-12 lg:my-space-14">
            <Ticker />
          </div>

          <div className="rounded-xl border border-vega-light-200 dark:border-vega-dark-200">
            <div className="grid md:grid-cols-2">
              <div className="p-space-5">
                <h2 className="heading-m mb-space-4">Explore Vega's APIS</h2>
                <p className="body-l dark:text-vega-grey-300 mb-space-3 text-vega-light-300 md:mb-space-6">
                  <Trans t={t}>
                    Vega's decentralised datanode architecture provides rich
                    CEX-like APIs and full historic price data for everyone!
                  </Trans>
                </p>
                <div>
                  <div className="flex items-center gap-x-space-5">
                    <div className="max-w-[4.6875rem]">
                      <LogoGRPC />
                    </div>
                    <div className="max-w-[3.125rem]">
                      <LogoRestAPI />
                    </div>
                    <div className="max-w-[6.25rem]">
                      <LogoGraphQL />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <div className="relative mr-space-3 w-full max-w-[33.25rem]">
                  <Explore />
                </div>
              </div>
            </div>
          </div>
        </Container>

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
    consoleDarkSmall: file(relativePath: { eq: "console-dark.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: NONE
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    consoleLightSmall: file(relativePath: { eq: "console-light.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: NONE
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    consoleDark: file(relativePath: { eq: "console-dark.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 620
          height: 460
          placeholder: NONE
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    consoleLight: file(relativePath: { eq: "console-light.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          width: 620
          height: 460
          placeholder: NONE
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
