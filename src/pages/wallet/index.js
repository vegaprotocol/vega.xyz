import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PlanetA from '../../components/Svg/Home/PlanetA'
import Chrome from '../../components/Svg/Chrome'
import Firefox from '../../components/Svg/Firefox'
import GlitchTitle from '../../components/UI/GlitchTitle'
import Button from '../../components/UI/Button'
import Link from '../../components/UI/Link'
import LinkWrapper from '../../components/UI/LinkWrapper'
import TeamTile from '../../components/UI/TeamTile'
import TranslationsBanner from '../../components/TranslationsBanner'
import Tooltip from '../../components/UI/Tooltip'
import Tippy from '@tippyjs/react'
import Sticky from 'react-stickynode'
import ScrollSpy from 'react-ui-scrollspy'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

import './wallet.css'

const WalletPageNew = ({ data }) => {
  const { i18n, t } = useTranslation('page.wallet')
  const [missingTranslations, setMissingTranslations] = useState(false)
  const [userAgent, setUserAgent] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  const sections = [
    {
      title: t('Overview'),
      hash: 'overview',
    },
    {
      title: t('How-to use'),
      hash: 'how-to-use',
    },
    {
      title: t('Developers'),
      hash: 'developers',
    },
  ]

  const getBrowser = () => {
    const userAgent = navigator.userAgent

    if (
      userAgent.includes('Chrome') &&
      !userAgent.includes('Edg') &&
      !userAgent.includes('OPR')
    ) {
      return 'Chrome'
    }

    if (userAgent.includes('Firefox')) {
      return 'Firefox'
    }

    return 'Other'
  }

  const ChromeDownloadButton = ({
    variant = 'primary',
    network = 'Alpha',
    className,
  }) => {
    let link = 'https://www.google.com/'

    if (network === 'Testnet') {
      link =
        'https://chrome.google.com/webstore/detail/vega-wallet/nmmjkiafpmphlikhefgjbblebfgclikn'
    }

    return (
      <div className={className ? className : ''}>
        <Button variant={variant} to={link}>
          <div className="relative -top-[2px] mr-3 inline-block w-[1.5rem] align-middle">
            <Chrome />
          </div>
          <Trans t={t}>Get the Vega Wallet</Trans> ({network})
        </Button>
      </div>
    )
  }

  const FirefoxDownloadButton = ({
    variant = 'primary',
    network = 'Alpha',
    className,
  }) => {
    let link = 'https://www.google.com/'

    if (network === 'Testnet') {
      link = 'https://addons.mozilla.org/en-GB/firefox/addon/vega-wallet/'
    }
    return (
      <div className={className ? className : ''}>
        <Button variant={variant} to={link}>
          <div className="relative -top-[2px] mr-3 inline-block w-[1.5rem] align-middle">
            <Firefox />
          </div>
          <Trans t={t}>Get the Vega Wallet</Trans> ({network})
        </Button>
      </div>
    )
  }

  useEffect(() => {
    setUserAgent(getBrowser())
  }, [])

  return (
    <Layout stickyHeader={false}>
      <Seo
        title={t('Vega Wallet')}
        description={t(
          "Connect to Vega dapps securely, deposit funds and approve or reject transactions with the Vega wallet. Download, set up and you're ready to connect"
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="xl:items-top mb-space-6 items-center gap-x-space-6 pt-6 md:mb-space-10 md:grid md:grid-cols-12 lg:pt-16">
          <div className="pb-space-10 md:col-span-6 md:py-space-6">
            <div className="mx-auto mb-space-8 max-w-[21rem] text-center md:mx-0 md:max-w-[30rem] md:text-left">
              <h1 className="heading-xl mb-space-3">
                <GlitchTitle color="purple">
                  <Trans t={t}>Vega Wallet</Trans>
                </GlitchTitle>
              </h1>
              <p className="body-xl mb-space-6">
                <Trans t={t}>
                  Connect to Vega dapps securely, deposit funds and approve or
                  reject transactions with the Vega wallet. Download, set up and
                  you're ready to connect
                </Trans>
              </p>
              {userAgent && userAgent === 'Chrome' && (
                <div>
                  <ChromeDownloadButton variant="hero" />
                </div>
              )}
              {userAgent && userAgent === 'Firefox' && (
                <div>
                  <FirefoxDownloadButton variant="hero" />
                </div>
              )}
              {userAgent && userAgent === 'Other' && (
                <div>
                  <ChromeDownloadButton variant="hero" className="mb-3" />
                  <FirefoxDownloadButton variant="hero" />
                </div>
              )}
            </div>
            <div className="relative mx-auto text-center md:m-0 md:text-left">
              <GatsbyImage
                image={getImage(data.walletScreenSmall)}
                alt=""
                className="mx-auto my-space-6 hidden max-w-[18rem] dark:block md:hidden dark:md:hidden"
              />
              <GatsbyImage
                image={getImage(data.walletScreenSmallWhite)}
                alt=""
                className="mx-auto my-space-6 max-w-[18rem] dark:hidden md:hidden"
              />
              <div className="heading-xxs !font-not-glitched mb-space-5 mt-space-7 text-vega-light-300 dark:text-vega-dark-300">
                <Trans t={t}>Want to test new features on Fairground?</Trans>
              </div>
              {userAgent && userAgent === 'Chrome' && (
                <div>
                  <ChromeDownloadButton network="Testnet" />
                </div>
              )}
              {userAgent && userAgent === 'Firefox' && (
                <div>
                  <FirefoxDownloadButton network="Testnet" />
                </div>
              )}
              {userAgent && userAgent === 'Other' && (
                <div>
                  <div className="mb-space-5">
                    <ChromeDownloadButton network="Testnet" className="mb-3" />
                    <FirefoxDownloadButton network="Testnet" />
                  </div>
                  <div className="prose mx-auto max-w-[30rem] md:mx-0">
                    <p>
                      <Trans t={t}>
                        Vega Wallet browser extension officially supports Chrome
                        or Firefox. Check the list of{' '}
                        <Link to="https://github.com/vegaprotocol/vegawallet-browser/issues/360">
                          supported browsers
                        </Link>{' '}
                        for latest guidance.
                      </Trans>
                    </p>
                  </div>
                </div>
              )}

              <div className="mx-auto mt-space-8 flex max-w-[30rem] flex-wrap justify-center gap-x-8 gap-y-4 md:mx-0 md:justify-start">
                <Button
                  variant="secondary"
                  to="https://github.com/vegaprotocol/vegawallet-browser/issues/360"
                  className="text-vega-light-300 dark:text-vega-dark-300"
                >
                  <Trans t={t}>Supported browsers</Trans>
                </Button>

                <Tippy
                  interactive={true}
                  content={
                    <div className="body-s font-not-glitched mt-2 text-left text-black dark:text-white">
                      <Tooltip padding="wide">
                        <div className="prose text-vega-dark-100 dark:text-vega-light-100">
                          <p>
                            <Trans t={t}>
                              The Vega desktop wallet is now in maintenance mode
                              and has been replaced by the browser extension.
                            </Trans>
                          </p>
                          <p>
                            <Trans t={t}>
                              For advanced users who need multi wallet support
                              or are working with our APIs,{' '}
                              <Link to="https://github.com/vegaprotocol/vegawallet-browser">
                                explore the Vega Wallet desktop app project on
                                Github
                              </Link>
                              in order to install the latest release.
                            </Trans>
                          </p>
                        </div>
                      </Tooltip>
                    </div>
                  }
                >
                  <span className="text-base text-vega-light-300 underline underline-offset-8 hover:no-underline dark:text-vega-dark-300">
                    <Trans t={t}>
                      Looking for the desktop wallet software?
                    </Trans>
                  </span>
                </Tippy>

                <Button
                  variant="secondary"
                  to="https://github.com/vegaprotocol/vegawallet-browser"
                  className="text-vega-light-300 dark:text-vega-dark-300"
                >
                  Github project
                </Button>
              </div>
            </div>
          </div>
          <div className="relative hidden h-[460px] justify-center md:col-span-6 md:flex xl:justify-end">
            <div className="z-10 xl:absolute xl:right-0 xl:top-0 xl:mr-space-12 xl:mt-space-6">
              <div className="absolute bottom-20 left-0 hidden h-[135px] w-[150px] -translate-x-24 xl:block">
                <PlanetA />
              </div>
              <GatsbyImage image={getImage(data.walletScreenMedium)} alt="" />
            </div>
            <div className="relative hidden xl:block">
              <div className="relative after:absolute after:bottom-0 after:right-0 after:top-0 after:w-[7.375rem] after:bg-gradient-to-l after:from-white after:from-10% after:to-white/0 after:to-100% dark:after:from-black dark:after:to-black/0">
                <div className="flex w-full justify-end overflow-hidden blur-[1px] md:h-[460px]">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative z-30">
        <Sticky enabled={true}>
          <div className="bg-white dark:bg-black">
            <div className="border-b border-vega-mid-grey">
              <Container>
                <div className="flex items-center justify-between">
                  <div className="mx-auto overflow-x-auto overflow-y-hidden whitespace-nowrap md:mx-0 md:mt-space-3 md:flex md:whitespace-normal">
                    {sections.map((section, index) => (
                      <a
                        key={index}
                        href={`#${section.hash}`}
                        className="mr-space-6 inline-block md:mr-space-6"
                      >
                        <div
                          data-to-scrollspy-id={section.hash}
                          className="heading-s relative bottom-[-1px] inline-block border-b-4 border-t-4 border-transparent py-space-4 text-center text-lg leading-7 last:mr-0 hover:border-b-current"
                        >
                          {t(section.title)}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Container>
            </div>
          </div>
        </Sticky>
      </div>

      <Container>
        <ScrollSpy>
          <div className="my-space-12 md:my-space-14" id="overview">
            <div className="grid grid-cols-1 items-center gap-y-space-6 text-center md:grid-cols-2 md:gap-x-space-8 md:gap-y-space-10 md:text-left">
              <div className="order-1">
                <GatsbyImage
                  image={getImage(data.walletYourKeys)}
                  alt=""
                  className="mx-auto hidden max-w-[25rem] dark:block md:max-w-[30rem]"
                />
                <GatsbyImage
                  image={getImage(data.walletYourKeysLight)}
                  alt=""
                  className="mx-auto max-w-[25rem] dark:hidden md:max-w-[30rem]"
                />
              </div>
              <div className="order-2">
                <div className="mx-auto mb-space-8 max-w-[32rem] md:mx-0 md:mb-0">
                  <h2 className="heading-m mx-auto mb-space-3 max-w-[28rem] md:mx-0">
                    <Trans t={t}>Your wallets, your keys</Trans>
                  </h2>
                  <p className="body-xl">
                    <Trans t={t}>
                      Easily manage multiple Vega wallets and key pairs in one
                      place.
                    </Trans>
                  </p>
                </div>
              </div>

              <div className="md:order-4">
                <GatsbyImage
                  image={getImage(data.walletSecureConnections)}
                  alt=""
                  className="mx-auto hidden max-w-[25rem] dark:block md:max-w-[30rem]"
                />
                <GatsbyImage
                  image={getImage(data.walletSecureConnectionsLight)}
                  alt=""
                  className="mx-auto max-w-[25rem] dark:hidden md:max-w-[30rem]"
                />
              </div>
              <div className="md:order-3">
                <div className="mx-auto mb-space-8 max-w-[32rem] md:mx-0 md:mb-0">
                  <h2 className="heading-m mx-auto mb-space-3 max-w-[28rem] md:mx-0">
                    <Trans t={t}>Secure connections</Trans>
                  </h2>
                  <p className="body-xl">
                    <Trans t={t}>
                      Connect, manage permissions key by key and disconnect from
                      Vega dapps securely.
                    </Trans>
                  </p>
                </div>
              </div>

              <div className="order-5">
                <GatsbyImage
                  image={getImage(data.walletInstantApproveReject)}
                  alt=""
                  className="mx-auto mb-space-5 hidden max-w-[25rem] dark:block md:max-w-[30rem]"
                />
                <GatsbyImage
                  image={getImage(data.walletInstantApproveRejectLight)}
                  alt=""
                  className="mx-auto mb-space-5 max-w-[25rem] dark:hidden md:max-w-[30rem]"
                />
              </div>
              <div className="order-6">
                <div className="mx-auto max-w-[32rem] md:mx-0">
                  <h2 className="heading-m mx-auto mb-space-3 max-w-[28rem] md:mx-0">
                    <Trans t={t}>
                      Instantly approve and reject transactions
                    </Trans>
                  </h2>
                  <p className="body-xl">
                    <Trans t={t}>
                      Quickly approve or reject transaction requests and keep
                      track of their status on the network.
                    </Trans>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="my-space-12 text-center md:my-space-14"
            id="how-to-use"
          >
            <h2 className="heading-xl mb-space-9">
              <GlitchTitle color="purple">
                <Trans t={t}>How-to use</Trans>
              </GlitchTitle>
            </h2>
            <LinkWrapper to="https://youtu.be/NNhs01_AtPQ">
              <GatsbyImage
                image={getImage(data.walletVideoPoster)}
                alt=""
                className="mx-auto mb-space-5 max-w-[43.75rem]"
              />
            </LinkWrapper>
            <div className="mt-space-4">
              <Button
                variant="secondary"
                className="text-vega-light-300 dark:text-vega-dark-300"
                to="https://docs.vega.xyz/mainnet/tools/vega-wallet/desktop-app/latest/getting-started"
              >
                <Trans t={t}>
                  Read the guide to getting started with Vega wallet
                </Trans>
              </Button>
            </div>
          </div>
          <div
            className="my-space-12 text-center md:my-space-14"
            id="developers"
          >
            <h2 className="heading-xl mb-space-9">
              <GlitchTitle color="purple">
                <Trans t={t}>Developers</Trans>
              </GlitchTitle>
            </h2>
            <div className="grid grid-cols-1 gap-space-6 text-left md:grid-cols-2">
              <TeamTile
                title={t('Integrate')}
                body={t('Connect your dapp using the Vega wallet API')}
              >
                <Button to="https://docs.vega.xyz/mainnet/tools/vega-wallet">
                  <Trans t={t}>Read the Docs</Trans>
                </Button>
              </TeamTile>
              <TeamTile
                title="Use the CLI Wallet"
                body={t(
                  'Interact directly via command line (CLI), customise, isolate keys and build and send commands'
                )}
              >
                <Button to="https://docs.vega.xyz/mainnet/tools/vega-wallet/cli-wallet/latest/create-wallet">
                  <Trans t={t}>Get the CLI app</Trans>
                </Button>
              </TeamTile>
            </div>
          </div>
        </ScrollSpy>
      </Container>
    </Layout>
  )
}

export default WalletPageNew

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
    walletScreenSmall: file(relativePath: { eq: "wallet-screen-small.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 283
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    walletScreenSmallWhite: file(
      relativePath: { eq: "wallet-screen-small-white.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 283
          layout: FULL_WIDTH
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    walletScreenMedium: file(relativePath: { eq: "wallet-screen-medium.png" }) {
      childImageSharp {
        gatsbyImageData(width: 345, layout: FIXED, formats: [AUTO, WEBP, AVIF])
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
    walletVideoPoster: file(relativePath: { eq: "wallet-video-poster.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    walletYourKeys: file(relativePath: { eq: "wallet-your-keys.png" }) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    walletYourKeysLight: file(
      relativePath: { eq: "wallet-your-keys-light.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    walletSecureConnections: file(
      relativePath: { eq: "wallet-secure-connections.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    walletSecureConnectionsLight: file(
      relativePath: { eq: "wallet-secure-connections-light.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    walletInstantApproveReject: file(
      relativePath: { eq: "wallet-instant-approve-reject.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    walletInstantApproveRejectLight: file(
      relativePath: { eq: "wallet-instant-approve-reject-light.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
