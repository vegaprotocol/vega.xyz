import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import GlitchTitle from '../../components/UI/GlitchTitle'
import Button from '../../components/UI/Button'
import TranslationsBanner from '../../components/TranslationsBanner'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import DropdownArrow from '../../components/Svg/DropdownArrow'
import IconPlatformMac from '../../components/Svg/IconPlatformMac'
import IconPlatformWindows from '../../components/Svg/IconPlatformWindows'
import IconPlatformLinux from '../../components/Svg/IconPlatformLinux'
import IconGithub from '../../components/Svg/IconGithub'

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

const ListItem = ({ idx, text }) => {
  return (
    <li className="mb-4 flex text-vega-mid-grey dark:text-vega-grey">
      <div className="title-s font-glitch-all relative top-1 w-12 shrink-0 text-black dark:text-white">
        {idx + 1}.
      </div>
      <div className="copy-xs !mb-0">{text}</div>
    </li>
  )
}

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
    <div className={`relative mx-auto inline-block cursor-pointer`}>
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
          className={`copy-xxs relative !mb-0 flex items-center py-3 pl-4 pr-6 ${titleVariantClasses}`}
        >
          <div className="mr-4">
            <DropdownArrow />
          </div>
          {title}
        </div>
        <div>
          {downloadDropdown && (
            <div
              className={`absolute top-[100%] left-0 right-0 z-20 border border-t-0 border-current ${dropdownVariantClasses}`}
            >
              <ul className="py-3 px-2">
                {binaries.map((binary, idx) => {
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
                        <div className={`${iconVariantClasses} px-3.5 py-2`}>
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
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const binaries = [
  {
    icon: 'windows',
    platform: 'Windows',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vega-wallet-desktop-windows-amd64.zip',
  },
  {
    icon: 'windows',
    platform: 'Windows (ARM64)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vega-wallet-desktop-windows-arm64.zip',
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

const fairgroundBinaries = [
  {
    icon: 'windows',
    platform: 'Windows',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.12.2/fairground-wallet-desktop-windows-amd64.zip',
  },
  {
    icon: 'windows',
    platform: 'Windows (ARM64)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.12.2/fairground-wallet-desktop-windows-arm64.zip',
  },
  {
    icon: 'mac',
    platform: 'MacOS (Intel)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.12.2/fairground-wallet-desktop-macos-intel.zip',
  },
  {
    icon: 'mac',
    platform: 'MacOS (M1 / M2)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.12.2/fairground-wallet-desktop-macos-apple-silicon.zip',
  },
  {
    icon: 'linux',
    platform: 'Linux',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.12.2/fairground-wallet-desktop-linux-amd64.zip',
  },
]

const WalletPageNew = ({ data }) => {
  const { i18n, t } = useTranslation('page.wallet')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('Vega Wallet')}
        description={t(
          'Securely connect to Vega dapps and instantly approve and reject transactions on the Vega network'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="xl:items-top gap-x-space-6 pt-6 md:grid md:grid-cols-12 lg:pt-16">
          <div className="md:col-span-6 md:py-space-6 xl:py-space-10">
            <div className="mx-auto mb-space-6 max-w-[21rem] text-center md:mx-0 md:max-w-[30rem] md:text-left">
              <h1 className="heading-xl mb-space-3">
                <GlitchTitle color="purple">
                  <Trans t={t}>Vega Wallet</Trans>
                </GlitchTitle>
              </h1>
              <p className="body-xl mb-space-6">
                Securely connect to Vega dapps and instantly approve and reject
                transactions on the Vega network
              </p>
            </div>
            <div className="mx-auto text-center md:m-0 md:text-left">
              <GatsbyImage
                image={getImage(data.walletScreenSmall)}
                alt=""
                className="mx-auto my-space-6 max-w-[18rem] md:hidden"
              />
              <DownloadButton
                binaries={binaries}
                title={t('Download Vega Wallet (Mainnet)')}
              />

              <div class="heading-xxs !font-not-glitched mt-space-7 mb-space-4 text-vega-light-300 dark:text-vega-dark-300">
                Want to test new features?
              </div>
              <DownloadButton
                binaries={fairgroundBinaries}
                variant="secondary"
                title={t('Try the pre-release Fairground (testnet) wallet')}
              />

              <div className="mt-space-5">
                <IconGithub />
                <Button
                  className="ml-2"
                  variant="secondary"
                  to="https://github.com/vegaprotocol/vegawallet-desktop"
                >
                  Explore the wallet project on Github
                </Button>
              </div>
            </div>
          </div>
          <div className="relative flex h-[460px] justify-center md:col-span-6 xl:justify-end">
            <GatsbyImage
              image={getImage(data.walletScreenMedium)}
              alt=""
              className="z-10 hidden md:block xl:absolute xl:right-0 xl:top-0 xl:mt-space-6 xl:mr-space-12"
            />
            <div className="relative hidden xl:block">
              <div className="after:from-10% after:to-100% relative after:absolute after:right-0 after:top-0 after:bottom-0 after:w-[7.375rem] after:bg-gradient-to-l after:from-white after:to-white/0 dark:after:from-black dark:after:to-black/0">
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
  }
`
