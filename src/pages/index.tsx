import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { GeorestrictedContext } from '../context/georestricted'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Seo from '../components/Seo'
import TranslationsBanner from '../components/TranslationsBanner'
import Statistics from '../components/Home/Statistics'
import GlitchTitle from '../components/UI/GlitchTitle'
import LatestNews from '../components/LatestNews'
import Button from '../components/UI/Button'
import PageSection from '../components/PageSection'
import BackerLogos from '../components/Home/BackerLogos'
import Calendar from '../components/Calendar'
import BoxLinkSimple from '../components/BoxLinkSimple'
import Rip from '../components/Svg/Home/Rip/Responsive'
import Audits from '../components/Home/Audits'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import PlanetA from '../components/Svg/Home/PlanetA'
import PlanetB from '../components/Svg/Home/PlanetB'
import Explore from '../components/Svg/Home/Explore'
import LogoGRPC from '../components/Svg/LogoGRPC'
import LogoGraphQL from '../components/Svg/LogoGraphQL'
import LogoRestAPI from '../components/Svg/LogoRestAPI'
import PermissionlessMarketCreationIcon from '../images/feature-icons/permissionless-market-creation.svg'
import NonCustodialIcon from '../images/feature-icons/non-custodial.svg'
import PurposeBuiltBlockChainIcon from '../images/feature-icons/purpose-built.svg'
import PseudononymousTradingIcon from '../images/feature-icons/pseudononymous-trading.svg'
import HighCapitalEfficiencyIcon from '../images/feature-icons/high-capital-efficiency.svg'
import NoGasFeesIcon from '../images/feature-icons/no-gas-fees.svg'
import NativeLiquidityProvision from '../images/feature-icons/native-liquidity-provision.svg'
import RichCEXStyleIcon from '../images/feature-icons/rich-cex-style.svg'
// import { AnnouncementBanner } from '../components/AnnouncementRemote'

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
    i18n.language !== 'en' && setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('Vega Protocol - Futures & Perpetuals DEX')}
        description={t(
          "Discover Web3's native derivatives trading platform that is helping DeFi mature."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <main>
        <div data-cy="main">
          <Container>
            <div className="py-space-7 md:grid md:grid-cols-12 md:items-center md:gap-6">
              <div className="text-center md:col-span-6 md:text-left">
                <div className="md:pr-space-6 lg:pr-0">
                  <div className="mx-auto mb-space-7 max-w-[20.9375rem] md:mx-0 md:max-w-[28.75rem]">
                    <h1 className="mb-space-2 text-[2rem] leading-none md:text-[2.5rem] lg:text-[3rem]">
                      <Trans t={t}>Decentralised derivatives protocol</Trans>
                    </h1>
                    <div className="text-[1.125rem] leading-normal md:text-[1.5rem]">
                      <Trans t={t}>
                        Vega is an open sourced protocol for creating and
                        trading derivatives on a fully decentralised network.
                      </Trans>
                    </div>
                  </div>

                  <div className="mb-space-8 md:mb-space-7 xl:flex xl:items-center xl:gap-x-6">
                    <GeorestrictedContext.Consumer>
                      {({ isGeorestricted }) => {
                        if (isGeorestricted) {
                          return null
                        }
                        return (
                          <Button variant="hero" to="https://console.vega.xyz/">
                            <Trans t={t}>Launch console</Trans>
                          </Button>
                        )
                      }}
                    </GeorestrictedContext.Consumer>
                    <div className="mt-space-4 flex items-center justify-center gap-x-6 md:justify-start xl:mt-0 xl:justify-center">
                      <Button
                        className="text-vega-dark-300"
                        variant="secondary"
                        to="/wallet"
                      >
                        <Trans t={t}>Vega Wallet</Trans>
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
                        <Trans t={t}>Docs</Trans>
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
                  <div className="absolute left-0 top-0 hidden h-[180px] w-[200px] -translate-x-10 translate-y-20 md:block lg:-translate-x-20 2xl:-translate-x-32">
                    <PlanetA />
                  </div>
                  <div className="absolute bottom-0 right-0 z-10 hidden h-[120px] w-[175px] translate-y-[5.625rem] md:block">
                    <PlanetB />
                  </div>
                  <div className="after:from-10% after:to-100% relative after:absolute after:bottom-0 after:right-0 after:top-0 after:w-[7.375rem] after:bg-gradient-to-l after:from-white after:to-white/0 dark:after:from-black dark:after:to-black/0 md:translate-x-4 md:translate-x-6 lg:translate-x-8 2xl:after:origin-right 2xl:after:scale-110">
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
          </Container>

          <Container>
            <div className="mb-space-10 mt-space-6 md:my-space-12 lg:my-space-14">
              <LatestNews
                blogPosts={data.blogPosts}
                talks={data.talks}
                articles={data.articles}
              />
            </div>

            <div className="mt-16 md:mt-32 lg:mt-40">
              <h2 className="title-l lg:title-xl mb-12 text-center">
                <GlitchTitle color="orange">
                  <Trans t={t}>Key features</Trans>
                </GlitchTitle>
              </h2>
              <div className="py-8 lg:pt-16">
                <div className="mb-12 grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
                  <FeatureBox
                    title={t('Non-custodial and pseudonymous')}
                    description={t(
                      'All interactions are via public key cryptography with no backdoors or admin keys.'
                    )}
                    icon={NonCustodialIcon}
                  />
                  <FeatureBox
                    title={t('Purpose built appchain for trading')}
                    description={t(
                      'Vega can be deployed as a CometBFT based proof-of-stake chain.'
                    )}
                    icon={PurposeBuiltBlockChainIcon}
                  />
                  <FeatureBox
                    title={t('Unique and configurable fee model')}
                    description={t(
                      'Trading optimised fees with no per-transaction “gas” costs for orders'
                    )}
                    icon={NoGasFeesIcon}
                  />
                  <FeatureBox
                    title={t('Open source protocol and software')}
                    description={t(
                      'The protocol specs and software are open source.'
                    )}
                    icon={PseudononymousTradingIcon}
                  />
                  <FeatureBox
                    title={t('Rich CEX-style order book and APIs')}
                    description={t(
                      'Data nodes provide order book and historic data APIs.'
                    )}
                    icon={HighCapitalEfficiencyIcon}
                  />

                  <FeatureBox
                    title={t('Permissionless market creation')}
                    description={t(
                      'Built in governance allows protocol users to create and manage markets.'
                    )}
                    icon={NativeLiquidityProvision}
                  />
                </div>
              </div>
            </div>
          </Container>

          <Rip />
          <Audits />

          <Container>
            <div className="mt-space-10 rounded-xl border border-vega-light-200 dark:border-vega-dark-200 md:mt-space-12 lg:mt-space-14">
              <div className="grid md:grid-cols-2">
                <div className="p-space-5">
                  <h2 className="heading-m mb-space-4 max-w-[30rem]">
                    <Trans t={t}>Programmatic trading on Vega</Trans>
                  </h2>
                  <p className="body-l dark:text-vega-grey-300 mb-space-3 text-vega-light-300 md:mb-space-3">
                    <Trans t={t}>
                      Vega's decentralised datanode architecture provides rich
                      CEX-like APIs and full historic price data for everyone.
                    </Trans>
                  </p>
                  <div>
                    <div className="mb-space-6 flex items-center gap-x-space-5">
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
                    <Button to="/programmatic-trading">
                      <Trans t={t}>Explore</Trans>
                    </Button>
                  </div>
                </div>
                <div className="flex items-end justify-end">
                  <div className="relative ml-space-3 mr-space-3 w-full max-w-[33.25rem]">
                    <Explore />
                  </div>
                </div>
              </div>
            </div>

            {/* <PageSection>
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
            </PageSection> */}
          </Container>
        </div>
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
    blogPosts: allMediumPost(
      limit: 1
      sort: { fields: [firstPublishedAt], order: DESC }
    ) {
      edges {
        node {
          id
          title
          uniqueSlug
          firstPublishedAt(formatString: "ll")
          virtuals {
            subtitle
            readingTime
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
    talks: allMarkdownRemark(
      limit: 1
      filter: {
        collection: { eq: "talks" }
        fields: { locale: { eq: $language } }
        frontmatter: { featured: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "ll")
            location
            featured
            links {
              title
              link
            }
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 640)
              }
            }
          }
          fields {
            slug
            locale
          }
        }
      }
    }
    articles: allMarkdownRemark(
      limit: 1
      filter: {
        collection: { eq: "articles" }
        fields: { locale: { eq: $language } }
        frontmatter: { featured: { eq: true } }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            date(formatString: "ll")
            location
            featured
            links {
              title
              url
            }
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 640)
              }
            }
          }
          fields {
            slug
          }
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
