import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PlanetA from '../../components/Svg/Home/PlanetA'
import Chrome from '../../components/Svg/Chrome'
import Firefox from '../../components/Svg/Firefox'
import PageHeader from '../../components/UI/PageHeader'
import Button from '../../components/UI/Button'
import SectionScrollButton from '../../components/UI/SectionScrollButton/SectionScrollButton'
import Link from '../../components/UI/Link'
import DropdownArrow from '../../components/Svg/DropdownArrow'
import TeamTile from '../../components/UI/TeamTile'
import Sticky from 'react-stickynode'
import ScrollSpy from 'react-ui-scrollspy'
import IconPlatformMac from '../../components/Svg/IconPlatformMac'
import IconPlatformWindows from '../../components/Svg/IconPlatformWindows'
import IconPlatformLinux from '../../components/Svg/IconPlatformLinux'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import './wallet.css'

const WalletPageNew = ({ data }) => {
  const { t } = useTranslation('page.wallet')
  const [userAgent, setUserAgent] = useState(false)

  const sections = [
    {
      title: t('Overview'),
      hash: 'overview',
    },
    {
      title: t('Developers'),
      hash: 'developers',
    },
  ]

  const platformIcons = {
    mac: IconPlatformMac,
    windows: IconPlatformWindows,
    linux: IconPlatformLinux,
  }

  const PlatformIcon = (platform) => {
    const PlatformIcon = platformIcons[platform]
    return (
      <div className="flex items-center">
        <PlatformIcon />
      </div>
    )
  }

  const binaries = [
    {
      icon: 'windows',
      platform: 'Windows',
      file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vega-wallet-desktop-windows-amd64.exe',
    },
    {
      icon: 'windows',
      platform: 'Windows (ARM64)',
      file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vega-wallet-desktop-windows-arm64.exe',
    },
    {
      icon: 'mac',
      platform: 'MacOS (Intel)',
      file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vega-wallet-desktop-macos-intel.zip',
    },
    {
      icon: 'mac',
      platform: 'MacOS (M1 / M2)',
      file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vega-wallet-desktop-macos-apple-silicon.zip',
    },
    {
      icon: 'linux',
      platform: 'Linux',
      file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vega-wallet-desktop-linux-amd64.zip',
    },
  ]

  const DownloadButton = ({ binaries, title, variant = 'primary' }) => {
    const [downloadDropdown, setDownloadDropdown] = useState(false)

    let dropDownContainerClasses =
      variant === 'primary'
        ? 'dark:border-white border-black'
        : 'dark:border-white border-black'

    let titleVariantClasses =
      variant === 'primary'
        ? 'uppercase dark:bg-white dark:text-black bg-black text-white'
        : ''

    let dropdownVariantClasses =
      variant === 'primary'
        ? 'dark:bg-white bg-black text-white dark:!border-white !border-black'
        : 'text-black bg-white dark:bg-black dark:text-white'

    let iconVariantClasses =
      variant === 'primary'
        ? 'dark:text-black text-white'
        : 'dark:text-white text-black'

    let dropdownItemVariantClasses =
      variant === 'primary'
        ? 'hover:bg-white hover:bg-opacity-10 dark:hover:bg-black dark:hover:bg-opacity-10'
        : 'hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10'

    let dropdownItemTextVariantClasses =
      variant === 'primary'
        ? 'dark:text-vega-light-400 text-vega-dark-400'
        : 'text-vega-light-400 dark:text-vega-dark-400'

    const showDownloadMenu = (state) => {
      setDownloadDropdown(state)
    }

    return (
      <div className={`relative inline-block cursor-pointer`}>
        <div
          role="button"
          tabIndex={0}
          className={`flex items-center border ${dropDownContainerClasses}`}
          data-cy={title}
          onFocus={() => showDownloadMenu(true)}
          onBlur={(e) => {
            if (!e.relatedTarget?.dataset?.fileDownload) {
              showDownloadMenu(false)
            }
          }}
        >
          <div
            className={`copy-xxs relative !mb-0 flex items-center py-3.5 pl-4 pr-6 ${titleVariantClasses}`}
          >
            <div className="mr-4">
              <DropdownArrow />
            </div>
            {title}
          </div>
          <div>
            {downloadDropdown && (
              <div
                className={`absolute left-0 right-0 top-[100%] z-40 border border-t-0 border-current ${dropdownVariantClasses}`}
              >
                <ul className="px-2 py-3">
                  {binaries.map((binary, idx) => {
                    if (binary.file !== '') {
                      return (
                        <li className="my-1 cursor-pointer" key={idx}>
                          <a
                            href={binary.file}
                            role="button"
                            target="_blank"
                            rel="noreferrer"
                            data-file-download
                            className={`flex w-full items-center ${dropdownItemVariantClasses}`}
                            data-cy={'downloadLink'}
                          >
                            <div
                              className={`${iconVariantClasses} px-3.5 py-2`}
                            >
                              {PlatformIcon(binary.icon)}
                            </div>
                            <div
                              className={`body-xs ${dropdownItemTextVariantClasses} !mb-0 py-2`}
                              data-cy={'downloadPlatform'}
                            >
                              {binary.platform}
                            </div>
                          </a>
                        </li>
                      )
                    } else return null
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }

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
    let link =
      'https://chrome.google.com/webstore/detail/vega-wallet-mainnet/codfcglpplgmmlokgilfkpcjnmkbfiel'

    return (
      <div
        className={className ? className : ''}
        data-cy={`downloadLink${network}`}
      >
        <Button variant={variant} to={link}>
          <div className="relative -top-[2px] mr-3 inline-block w-[1.5rem] align-middle">
            <Chrome />
          </div>
          <Trans t={t}>Get the Vega Wallet</Trans>
        </Button>
      </div>
    )
  }

  const FirefoxDownloadButton = ({
    variant = 'primary',
    network = 'Alpha',
    className,
  }) => {
    let link =
      'https://addons.mozilla.org/en-GB/firefox/addon/vega-wallet-beta/'

    return (
      <div
        className={className ? className : ''}
        data-cy={`downloadLink${network}`}
      >
        <Button variant={variant} to={link}>
          <div className="relative -top-[2px] mr-3 inline-block w-[1.5rem] align-middle">
            <Firefox />
          </div>
          <Trans t={t}>Get the Vega Wallet</Trans>
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
        title={t('Wallet')}
        description={t(
          "Connect to Vega dapps securely, deposit funds and approve or reject transactions with the Vega wallet. Download, set up and you're ready to connect"
        )}
      />
      <Container dataCy={'main'}>
        <div className="xl:items-top mb-space-6 items-center gap-x-space-6 pt-6 md:mb-space-10 md:grid md:grid-cols-12 lg:pt-16">
          <div className="pb-space-10 md:col-span-6 md:py-space-6">
            <div className="mx-auto mb-space-8 max-w-[21rem] text-center md:mx-0 md:max-w-[30rem] md:text-left">
              <PageHeader
                title={t('Vega Wallet')}
                description={t(
                  "Connect to Vega dapps securely, deposit funds and approve or reject transactions with the Vega wallet. Download, set up and you're ready to connect"
                )}
              />
              <div className="mb-space-6 mt-space-6">
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
                  <>
                    <div>
                      <ChromeDownloadButton variant="hero" className="mb-3" />
                      <FirefoxDownloadButton variant="hero" />
                    </div>
                    <div className="prose mx-auto mt-space-4 max-w-[30rem] md:mx-0">
                      <p>
                        <Trans t={t}>
                          Vega Wallet browser extension officially supports
                          Chrome or Firefox. Check the list of{' '}
                          <Link to="https://github.com/vegaprotocol/vegawallet-browser/issues/360">
                            supported browsers
                          </Link>{' '}
                          for latest guidance.
                        </Trans>
                      </p>
                    </div>
                  </>
                )}
              </div>

              <DownloadButton
                binaries={binaries}
                variant="secondary"
                title={t('DOWNLOAD THE VEGA DESKTOP WALLET')}
              />
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
              <div className="mx-auto flex gap-x-space-4 overflow-x-auto overflow-y-hidden whitespace-nowrap px-space-4 py-space-4 md:mx-0 md:flex md:justify-center md:whitespace-normal md:py-space-6">
                {sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#${section.hash}`}
                    className="inline-block"
                  >
                    <div data-to-scrollspy-id={section.hash} className="">
                      <SectionScrollButton>
                        {t(section.title)}
                      </SectionScrollButton>
                    </div>
                  </a>
                ))}
              </div>
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
                  <h2 className="mx-auto mb-space-3 max-w-[28rem] text-[2rem] leading-none md:mx-0 md:text-[2.5rem]">
                    <Trans t={t}>Your wallets, your keys</Trans>
                  </h2>
                  <p className="body-xl">
                    <Trans t={t}>
                      Easily manage multiple key pairs in one place with the
                      Vega Wallet extension, or for full multi-wallet
                      functionality download the Vega Desktop Wallet.
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
                  <h2 className="mx-auto mb-space-3 max-w-[28rem] text-[2rem] leading-none md:mx-0  md:text-[2.5rem]">
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
                  <h2 className="mx-auto mb-space-3 max-w-[28rem] text-[2rem] leading-none md:mx-0  md:text-[2.5rem]">
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
            id="developers"
          >
            <h2 className="mb-space-6 text-[2.5rem] leading-none md:mb-space-8 md:text-[3.5rem]">
              <Trans t={t}>Developers</Trans>
            </h2>
            <div className="grid grid-cols-1 gap-space-6 text-left md:grid-cols-2">
              <TeamTile
                title={t('Integrate')}
                body={t('Connect your dapp using the Vega wallet API')}
              >
                <Button to="https://docs.vega.xyz/release/category/api/wallet-api">
                  <Trans t={t}>Read the Docs</Trans>
                </Button>
              </TeamTile>
              <TeamTile
                title="Use the CLI Wallet"
                body={t(
                  'Interact directly via command line (CLI), customise, isolate keys and build and send commands'
                )}
              >
                <Button to="https://docs.vega.xyz/release/tools/vega-wallet/cli-wallet/create-wallet">
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
