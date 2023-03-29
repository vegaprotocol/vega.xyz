import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import GlitchTitle from '../../components/UI/GlitchTitle'
import WalletRip from '../../components/Svg/WalletRip'
import WalletHowTo from '../../components/Svg/WalletHowTo'
import WalletLeft from '../../components/Svg/WalletLeft'
import WalletRight from '../../components/Svg/WalletRight'
import WalletHowToSmall from '../../components/Svg/WalletHowToSmall'
import ButtonLink from '../../components/ButtonLink'
import Button from '../../components/UI/Button'
import LinkWrapper from '../../components/UI/LinkWrapper'
import DropdownArrow from '../../components/Svg/DropdownArrow'
import IconPlatformMac from '../../components/Svg/IconPlatformMac'
import IconPlatformWindows from '../../components/Svg/IconPlatformWindows'
import IconPlatformLinux from '../../components/Svg/IconPlatformLinux'
import WalletVideoWebM from '../../video/wallet-hero.webm'
import WalletVideoMP4 from '../../video/wallet-hero.mp4'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { MQMediumDown, MQLargeUp } from '../../utils/media-queries.js'

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

const DownloadButton = ({ binaries, title }) => {
  const [downloadDropdown, setDownloadDropdown] = useState(false)

  const showDownloadMenu = (state) => {
    setDownloadDropdown(state)
  }

  return (
    <div className="flex justify-center">
      <div className="relative mx-auto mt-6 inline-block cursor-pointer">
        <div
          role="button"
          tabIndex={0}
          className="flex items-center border border-current" data-cy={title}
          onFocus={() => showDownloadMenu(true)}
          onBlur={(e) => {
            if (!e.relatedTarget?.dataset?.fileDownload) {
              showDownloadMenu(false)
            }
          }}
        >
          <div
            className="border-px copy-xxs relative !mb-0 flex items-center py-3 pl-4 pr-6 text-center uppercase">
            <div className="mr-4">
              <DropdownArrow />
            </div>
            {title}
          </div>
          <div>
            {downloadDropdown && (
              <div className="absolute top-[100%] left-0 right-0 z-20 border border-t-0 border-current bg-white dark:bg-black">
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
                          className={`flex w-full items-center hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10`}
                          data-cy={'downloadLink'}
                        >
                          <div className="px-3.5 py-2">
                            {PlatformIcon(binary.icon)}
                          </div>
                          <div
                            className="copy-xxs !mb-0 py-2 text-vega-mid-grey dark:text-vega-grey"
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
    </div>
  )
}

const binaries = [
  {
    icon: 'windows',
    platform: 'Windows',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vegawallet-desktop-windows-amd64.zip',
  },
  {
    icon: 'windows',
    platform: 'Windows (ARM64)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vegawallet-desktop-windows-arm64.zip',
  },
  {
    icon: 'mac',
    platform: 'MacOS (Intel)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vegawallet-desktop-darwin-amd64.zip',
  },
  {
    icon: 'mac',
    platform: 'MacOS (M1 / M2)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vegawallet-desktop-darwin-arm64.zip',
  },
  {
    icon: 'linux',
    platform: 'Linux',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/latest/download/vegawallet-desktop-linux-amd64.zip',
  },
]

const fairgroundBinaries = [
  {
    icon: 'windows',
    platform: 'Windows',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.11.0/vegawallet-desktop-windows-amd64.zip',
  },
  {
    icon: 'windows',
    platform: 'Windows (ARM64)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.11.0/vegawallet-desktop-windows-arm64.zip',
  },
  {
    icon: 'mac',
    platform: 'MacOS (Intel)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.11.0/vegawallet-desktop-macos-intel.zip',
  },
  {
    icon: 'mac',
    platform: 'MacOS (M1 / M2)',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.11.0/vegawallet-desktop-macos-apple-silicon.zip',
  },
  {
    icon: 'linux',
    platform: 'Linux',
    file: 'https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.11.0/vegawallet-desktop-linux-amd64.zip',
  },
]

const WalletPage = ({ data }) => {
  const { i18n, t } = useTranslation('page.wallet')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  const howToText = [
    t("Choose 'create a new wallet' in the app"),
    t('Name each individual wallet if you need more than one'),
    t(
      "Create a passphrase for each wallet. You'll need it for depositing collateral, placing trades, etc."
    ),
    t(
      "Record the recovery phrase that's provided on setup. This only appears once. Have an existing wallet you created in the CLI app? You will be given the option to connect this to the desktop app"
    ),
    t(
      'Need to restore a wallet? Use the recovery phrase exactly as it was presented to you'
    ),
    t(
      'To update the app, delete your existing version and download the new one'
    ),
  ]

  return (
    <Layout>
      <Seo
        title={t('Get the Vega Wallet')}
        description={t(
          'Download the Vega Wallet desktop app, to help you manage multiple wallets, multiple keys — and get access to the Vega network.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mx-auto max-w-[38rem] pt-6 md:max-w-none lg:pt-16">
          <div className="mx-auto max-w-[28rem] text-center md:max-w-[38rem] lg:max-w-[42rem]">
            <h1 className="heading-xl mb-space-6">
              <GlitchTitle color="purple">
                <Trans t={t}>Get the Vega Wallet</Trans>
              </GlitchTitle>
            </h1>
          </div>
          <p className="body-xl mx-auto max-w-[56rem] text-center">
            <Trans t={t}>
              Download the Vega Wallet desktop app, to help you manage multiple
              wallets, multiple keys — and get access to the Vega network.
            </Trans>
          </p>
          <div className="lg:flex lg:items-center lg:justify-center lg:gap-x-space-5">
            <DownloadButton
              binaries={binaries}
              title={t('Download desktop app (Mainnet)')}
            />
            <DownloadButton
              binaries={fairgroundBinaries}
              title={t('Download desktop app (Fairground)')}
            />
          </div>
          <div className="mt-space-5 text-center">
            <Button
              variant="secondary"
              to="https://github.com/vegaprotocol/vegawallet-desktop/releases/"
            >
              Get a specific release (including Testnet)
            </Button>
          </div>
        </div>
      </Container>

      <div className="relative mb-space-10 pt-space-8 md:mt-space-6 md:mb-space-11 md:pt-space-13 lg:mb-space-13">
        <MQMediumDown>
          <video
            className="mx-auto h-auto w-full max-w-[90%] md:hidden"
            autoPlay
            muted
            loop
          >
            <source type="video/webm" src={WalletVideoWebM} />
            <source type="video/mp4" src={WalletVideoMP4} />
          </video>
        </MQMediumDown>

        <WalletRip className="relative md:mt-16 lg:mt-0" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-2/3 transform">
          <MQLargeUp>
            <video
              className="h-auto w-full md:scale-150 lg:scale-100"
              autoPlay
              muted
              loop
            >
              <source type="video/webm" src={WalletVideoWebM} />
              <source type="video/mp4" src={WalletVideoMP4} />
            </video>
          </MQLargeUp>
        </div>
      </div>

      <Container>
        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <div className="text-center">
            <h2 className="title-m">
              <Trans t={t}>With the wallet you can:</Trans>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-12 pb-12 text-center text-[1.125rem] leading-snug md:pb-6 lg:grid-cols-6">
            <div>
              <svg
                width="38"
                height="50"
                viewBox="0 0 38 50"
                fill="none"
                className="inline-block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <path d="M20 13.5701H18V35.5701H20V13.5701Z" />
                  <path d="M22 31.5701H20V33.5701H22V31.5701Z" />
                  <path d="M18 31.5701H16V33.5701H18V31.5701Z" />
                  <path d="M16 29.5701H14V31.5701H16V29.5701Z" />
                  <path d="M14 27.5701H12V29.5701H14V27.5701Z" />
                  <path d="M12 25.5701H10V27.5701H12V25.5701Z" />
                  <path d="M10 23.5701H8V25.5701H10V23.5701Z" />
                  <path d="M22 31.5801H24V29.5801H22V31.5801Z" />
                  <path d="M24 29.5801H26V27.5801H24V29.5801Z" />
                  <path d="M26 27.5801H28V25.5801H26V27.5801Z" />
                  <path d="M28 25.5801H30V23.5801H28V25.5801Z" />
                  <path d="M36 47.1399H2V49.1399H36V47.1399Z" />
                  <path d="M0 31.0699L0 47.1499H2L2 31.0699H0Z" />
                  <path d="M36 31.0699V47.1499H38V31.0699H36Z" />
                  <path d="M2 2L36 2V0L2 0V2Z" />
                  <path d="M38 18.08V2H36V18.08H38Z" />
                  <path d="M2 18.08L2 2H0L0 18.08H2Z" />
                </g>
              </svg>
              <div className="mt-4">
                <Trans t={t}>Import an existing Vega wallet</Trans>
              </div>
            </div>
            <div>
              <svg
                width="38"
                height="50"
                viewBox="0 0 38 50"
                fill="none"
                className="inline-block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <path d="M17.8799 23.51H7.87988V25.51H17.8799V23.51Z" />
                  <path d="M29.8799 23.51H19.8799V25.51H29.8799V23.51Z" />
                  <path d="M19.8799 13.51H17.8799V23.51H19.8799V13.51Z" />
                  <path d="M19.8799 25.51H17.8799V35.51H19.8799V25.51Z" />
                  <path d="M36 0H2V2H36V0Z" />
                  <path d="M36 47.1399H2V49.1399H36V47.1399Z" />
                  <path d="M0 1.99989L0 47.1399H2L2 1.99989H0Z" />
                  <path d="M36 1.99989V47.1399H38V1.99989H36Z" />
                </g>
              </svg>
              <div className="mt-4">
                <Trans t={t}>Create a new wallet</Trans>
              </div>
            </div>
            <div>
              <svg
                width="38"
                height="50"
                viewBox="0 0 38 50"
                fill="none"
                className="inline-block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <path d="M36 16.23H2V18.23H36V16.23Z" />
                  <path d="M36 47.1399H2V49.1399H36V47.1399Z" />
                  <path d="M0 18.2301L0 22.3401H2L2 18.2301H0Z" />
                  <path d="M36 18.2301V22.3401H38V18.2301H36Z" />
                  <path d="M36 24.3401H2V26.3401H36V24.3401Z" />
                  <path d="M36 8.11011H2V10.1101H36V8.11011Z" />
                  <path d="M0 10.12L0 14.23H2L2 10.12H0Z" />
                  <path d="M36 10.12V14.23H38V10.12H36Z" />
                  <path d="M36 0H2V2H36V0Z" />
                  <path d="M0 2.01012L0 6.12012H2L2 2.01012H0Z" />
                  <path d="M36 2.01012V6.12012H38V2.01012H36Z" />
                  <path d="M0 26.3399L0 47.1399H2L2 26.3399H0Z" />
                  <path d="M36 26.3399V47.1399H38V26.3399H36Z" />
                </g>
              </svg>
              <div className="mt-4">
                <Trans t={t}>Manage multiple wallets and keys</Trans>
              </div>
            </div>
            <div>
              <svg
                width="38"
                height="50"
                viewBox="0 0 38 50"
                fill="none"
                className="inline-block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <path d="M20 11.04H18V38.11H20V11.04Z" />
                  <path d="M36 47.1399H2V49.1399H36V47.1399Z" />
                  <path d="M0 31.0699L0 47.1499H2L2 31.0699H0Z" />
                  <path d="M36 31.0699V47.1499H38V31.0699H36Z" />
                  <path d="M2 2L36 2V0L2 0V2Z" />
                  <path d="M2 20.0701L36 20.0701V18.0701L2 18.0701V20.0701Z" />
                  <path d="M2 31.0701L36 31.0701V29.0701L2 29.0701V31.0701Z" />
                  <path d="M38 18.08V2H36V18.08H38Z" />
                  <path d="M2 18.08L2 2H0L0 18.08H2Z" />
                  <path d="M16 11.04H18V9.04004H16V11.04Z" />
                  <path d="M20 11.04H22V9.04004H20V11.04Z" />
                  <path d="M16 40.1001H18V38.1001H16V40.1001Z" />
                  <path d="M20 40.1001H22V38.1001H20V40.1001Z" />
                </g>
              </svg>
              <div className="mt-4">
                <Trans t={t}>Connect to networks</Trans>
              </div>
            </div>
            <div>
              <svg
                width="38"
                height="50"
                viewBox="0 0 38 50"
                fill="none"
                className="inline-block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <path d="M29.8799 28.55H7.87988V30.55H29.8799V28.55Z" />
                  <path d="M36 0H2V2H36V0Z" />
                  <path d="M36 47.1399H2V49.1399H36V47.1399Z" />
                  <path d="M0 1.99989L0 47.1399H2L2 1.99989H0Z" />
                  <path d="M36 1.99989V47.1399H38V1.99989H36Z" />
                  <path d="M14.9398 21.5501C17.8398 20.2301 20.5498 18.6101 22.9098 16.3701C23.5298 15.7501 23.0298 14.7501 22.2098 14.7101C20.2798 14.6301 18.8098 15.8301 17.3698 16.9501C16.1298 17.8801 14.9698 18.8801 13.8098 19.9701C10.8298 21.2901 7.61976 22.2101 4.48976 23.1001C3.28976 23.4501 3.78976 25.3101 4.98976 24.9601C6.91976 24.4201 8.85976 23.8401 10.7498 23.1801C8.88976 25.3501 7.26976 27.7101 5.87976 30.2201C5.25976 31.3001 6.91976 32.2701 7.53976 31.1901C9.19976 28.2101 11.2198 25.4301 13.5798 22.9101C14.0098 22.4501 14.4698 21.9801 14.9298 21.5601L14.9398 21.5501Z" />
                  <path d="M31.9704 21.9699C30.9604 22.0899 29.6504 22.4299 28.5704 22.3999C28.5704 22.2799 28.5304 22.1699 28.4904 22.0099C28.3404 21.5499 27.8304 21.1599 27.2904 21.3499C26.9804 21.4699 24.7404 22.3899 24.5404 22.0499C24.3104 21.6199 23.6504 21.3899 23.2204 21.6999C22.0604 22.5099 20.9404 22.9399 19.6204 23.0899C19.7404 22.8599 19.8504 22.5899 20.0104 22.3499C20.4404 21.6899 19.7004 20.6099 18.9304 20.9199C17.1104 21.6199 15.3704 22.4299 13.6704 23.3999C12.5904 24.0199 13.5504 25.6799 14.6404 25.0599C15.5704 24.5599 16.5004 24.0499 17.4604 23.6299C17.4604 23.7099 17.4204 23.7499 17.4204 23.8199C17.3404 24.4399 17.6504 25.0199 18.3504 25.0599C20.2504 25.1399 21.9904 24.7099 23.5704 23.7799C24.4604 24.3599 25.7004 23.9699 26.8204 23.5899C26.9404 23.8999 27.1704 24.1699 27.4804 24.2499C28.9104 24.4799 30.5404 24.0999 31.9704 23.9399C33.1704 23.7899 33.2104 21.8499 31.9704 21.9699Z" />
                </g>
              </svg>
              <div className="mt-4">
                <Trans t={t}>Sign transactions</Trans>
              </div>
            </div>
            <div>
              <svg
                width="38"
                height="50"
                viewBox="0 0 38 50"
                fill="none"
                className="inline-block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor">
                  <path d="M5.04004 3H3.04004V5H5.04004V3Z" />
                  <path d="M8.08008 3H6.08008V5H8.08008V3Z" />
                  <path d="M11.0703 3H9.07031V5H11.0703V3Z" />
                  <path d="M36 0H2V2H36V0Z" />
                  <path d="M36 6H2V8H36V6Z" />
                  <path d="M36 47.1399H2V49.1399H36V47.1399Z" />
                  <path d="M0 2.01002L0 15.52H2L2 2.01002H0Z" />
                  <path d="M36 2.01002V15.52H38V2.01002H36Z" />
                  <path d="M5.04004 20.51H3.04004V22.51H5.04004V20.51Z" />
                  <path d="M8.08008 20.51H6.08008V22.51H8.08008V20.51Z" />
                  <path d="M11.0703 20.51H9.07031V22.51H11.0703V20.51Z" />
                  <path d="M36 17.51H2V19.51H36V17.51Z" />
                  <path d="M36 23.51H2V25.51H36V23.51Z" />
                  <path d="M0 19.5199L0 47.1499H2L2 19.5199H0Z" />
                  <path d="M36 19.5199V47.1499H38V19.5199H36Z" />
                </g>
              </svg>
              <div className="mt-4">
                <Trans t={t}>
                  Access Vega apps, such as the token site and Console
                </Trans>
              </div>
            </div>
          </div>
          <p className="copy-xs text-center">
            <Trans t={t}>
              It's also the starting point for trading, staking tokens, and
              voting on community proposals.
            </Trans>
          </p>
        </div>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <h2 className="heading-xl mb-space-6 text-center md:mb-space-10">
            <GlitchTitle>
              <Trans t={t}>How-to use</Trans>
            </GlitchTitle>
          </h2>
          <div className="flex justify-center">
            <LinkWrapper to="https://www.youtube.com/watch?v=fFmLQeQUa1k">
              <GatsbyImage
                image={getImage(data.walletVideoPoster)}
                alt=""
                className="mx-auto mb-space-5 max-w-[43.75rem]"
              />
            </LinkWrapper>
          </div>
        </div>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <WalletHowToSmall className="mb-8 md:hidden" />
          <div className="lg:gap-21 mx-auto grid max-w-[62rem] grid-cols-12 md:gap-12">
            <div className="col-span-12 md:col-span-4">
              <h2 className="heading-xl  mb-3 max-w-[17rem] md:max-w-none">
                <Trans t={t}>Step by step</Trans>
              </h2>
              <p className="body-m">
                <Trans t={t}>
                  To learn more about the Vega Wallet desktop app, including
                  full, step by step details on restoring wallets, updating the
                  app, and troubleshooting, visit the docs pages.
                </Trans>
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 lg:pl-space-6">
              <ol className="mt-space-6 list-none p-0 md:mt-0">
                {howToText.map((text, idx) => {
                  return <ListItem idx={idx} key={idx} text={t(text)} />
                })}
              </ol>
            </div>
          </div>
          <WalletHowTo className="mt-5 hidden md:block" />
        </div>
      </Container>

      <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
        <div className="flex items-center justify-between">
          <div className="hidden w-[200px] md:block">
            <WalletLeft />
          </div>
          <div className="mx-auto max-w-[30rem] text-center md:max-w-[42rem]">
            <Container>
              <h2 className="title-s md:title-l mx-auto mb-6 max-w-[30rem] lg:max-w-none">
                <Trans t={t}>Need the command line (CLI) wallet app?</Trans>
              </h2>
              <p className="copy-xs md:copy-s">
                <Trans t={t}>
                  If you're comfortable with a non-visual interface and want
                  additional or programmer functionality to that of the desktop
                  app, CLI also lets you:
                </Trans>
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8 pb-8 text-center text-[1.125rem] leading-snug">
                <div>
                  <svg
                    width="38"
                    height="49"
                    viewBox="0 0 38 49"
                    fill="none"
                    className="inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path d="M36 0H2V1.9943H36V0Z" />
                      <path d="M36 47.0057H2V49H36V47.0057Z" />
                      <path d="M0 1.9942L0 47.0057H2L2 1.9942H0Z" />
                      <path d="M36 1.9942V47.0057H38V1.9942H36Z" />
                      <path d="M21.9004 33.2949H15.9004V35.2892H21.9004V33.2949Z" />
                      <path d="M18.9004 9.97144C16.3407 9.97008 13.8559 10.8332 11.8509 12.42C9.84587 14.0068 8.43877 16.224 7.85895 18.7101C7.27912 21.1963 7.5607 23.8049 8.65777 26.1111C9.75485 28.4173 11.6027 30.2851 13.9004 31.4102V33.2949H15.9004V30.1141L15.2906 29.8548C13.3036 29.0234 11.6663 27.5317 10.657 25.6332C9.6478 23.7347 9.32872 21.5465 9.75397 19.44C10.1792 17.3335 11.3225 15.4389 12.9898 14.0776C14.6571 12.7164 16.7456 11.9726 18.9004 11.9726C21.0553 11.9726 23.1438 12.7164 24.8111 14.0776C26.4784 15.4389 27.6217 17.3335 28.0469 19.44C28.4722 21.5465 28.1531 23.7347 27.1439 25.6332C26.1346 27.5317 24.4976 29.0234 22.5106 29.8548L21.9004 30.1141V33.2949H23.9004V31.4102C26.1982 30.2851 28.0461 28.4173 29.1431 26.1111C30.2402 23.8049 30.5218 21.1963 29.942 18.7101C29.3621 16.224 27.9553 14.0068 25.9503 12.42C23.9452 10.8332 21.4602 9.97008 18.9004 9.97144Z" />
                      <path d="M15.9004 35.2892H13.9004V37.2835H15.9004V35.2892Z" />
                      <path d="M23.9004 35.2892H21.9004V37.2835H23.9004V35.2892Z" />
                      <path d="M21.9004 37.2834H15.9004V39.2777H21.9004V37.2834Z" />
                      <path d="M19.9004 21.6282H17.9004V33.2849H19.9004V21.6282Z" />
                    </g>
                  </svg>
                  <div className="mt-4">
                    <Trans t={t}>Customise key details</Trans>
                  </div>
                </div>
                <div>
                  <svg
                    width="38"
                    height="49"
                    viewBox="0 0 38 49"
                    fill="none"
                    className="inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path d="M36 0H2V1.9943H36V0Z" />
                      <path d="M36 47.0057H2V49H36V47.0057Z" />
                      <path d="M0 1.9942L0 47.0057H2L2 1.9942H0Z" />
                      <path d="M36 1.9942V47.0057H38V1.9942H36Z" />
                      <path d="M21.9004 33.2949H15.9004V35.2892H21.9004V33.2949Z" />
                      <path d="M18.9004 9.97144C16.3407 9.97008 13.8559 10.8332 11.8509 12.42C9.84587 14.0068 8.43877 16.224 7.85895 18.7101C7.27912 21.1963 7.5607 23.8049 8.65777 26.1111C9.75485 28.4173 11.6027 30.2851 13.9004 31.4102V33.2949H15.9004V30.1141L15.2906 29.8548C13.3036 29.0234 11.6663 27.5317 10.657 25.6332C9.6478 23.7347 9.32872 21.5465 9.75397 19.44C10.1792 17.3335 11.3225 15.4389 12.9898 14.0776C14.6571 12.7164 16.7456 11.9726 18.9004 11.9726C21.0553 11.9726 23.1438 12.7164 24.8111 14.0776C26.4784 15.4389 27.6217 17.3335 28.0469 19.44C28.4722 21.5465 28.1531 23.7347 27.1439 25.6332C26.1346 27.5317 24.4976 29.0234 22.5106 29.8548L21.9004 30.1141V33.2949H23.9004V31.4102C26.1982 30.2851 28.0461 28.4173 29.1431 26.1111C30.2402 23.8049 30.5218 21.1963 29.942 18.7101C29.3621 16.224 27.9553 14.0068 25.9503 12.42C23.9452 10.8332 21.4602 9.97008 18.9004 9.97144Z" />
                      <path d="M15.9004 35.2892H13.9004V37.2835H15.9004V35.2892Z" />
                      <path d="M23.9004 35.2892H21.9004V37.2835H23.9004V35.2892Z" />
                      <path d="M21.9004 37.2834H15.9004V39.2777H21.9004V37.2834Z" />
                      <path d="M19.9004 21.6282H17.9004V33.2849H19.9004V21.6282Z" />
                    </g>
                  </svg>
                  <div className="mt-4">
                    <Trans t={t}>Isolate keys</Trans>
                  </div>
                </div>
                <div>
                  <svg
                    width="38"
                    height="49"
                    viewBox="0 0 38 49"
                    fill="none"
                    className="inline-block"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path d="M36 0H2V1.9943H36V0Z" />
                      <path d="M36 47.0057H2V49H36V47.0057Z" />
                      <path d="M0 1.9942L0 47.0057H2L2 1.9942H0Z" />
                      <path d="M36 1.9942V47.0057H38V1.9942H36Z" />
                      <path d="M21.9004 33.2949H15.9004V35.2892H21.9004V33.2949Z" />
                      <path d="M18.9004 9.97144C16.3407 9.97008 13.8559 10.8332 11.8509 12.42C9.84587 14.0068 8.43877 16.224 7.85895 18.7101C7.27912 21.1963 7.5607 23.8049 8.65777 26.1111C9.75485 28.4173 11.6027 30.2851 13.9004 31.4102V33.2949H15.9004V30.1141L15.2906 29.8548C13.3036 29.0234 11.6663 27.5317 10.657 25.6332C9.6478 23.7347 9.32872 21.5465 9.75397 19.44C10.1792 17.3335 11.3225 15.4389 12.9898 14.0776C14.6571 12.7164 16.7456 11.9726 18.9004 11.9726C21.0553 11.9726 23.1438 12.7164 24.8111 14.0776C26.4784 15.4389 27.6217 17.3335 28.0469 19.44C28.4722 21.5465 28.1531 23.7347 27.1439 25.6332C26.1346 27.5317 24.4976 29.0234 22.5106 29.8548L21.9004 30.1141V33.2949H23.9004V31.4102C26.1982 30.2851 28.0461 28.4173 29.1431 26.1111C30.2402 23.8049 30.5218 21.1963 29.942 18.7101C29.3621 16.224 27.9553 14.0068 25.9503 12.42C23.9452 10.8332 21.4602 9.97008 18.9004 9.97144Z" />
                      <path d="M15.9004 35.2892H13.9004V37.2835H15.9004V35.2892Z" />
                      <path d="M23.9004 35.2892H21.9004V37.2835H23.9004V35.2892Z" />
                      <path d="M21.9004 37.2834H15.9004V39.2777H21.9004V37.2834Z" />
                      <path d="M19.9004 21.6282H17.9004V33.2849H19.9004V21.6282Z" />
                    </g>
                  </svg>
                  <div className="mt-4">
                    <Trans t={t}>Build & send commands</Trans>
                  </div>
                </div>
              </div>

              <ButtonLink
                text={t('Get the CLI app')}
                link="https://docs.vega.xyz/mainnet/tools/vega-wallet/cli-wallet/latest/create-wallet"
              />
            </Container>
          </div>
          <div className="hidden w-[200px] md:block">
            <WalletRight />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default WalletPage

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
    walletVideoPoster: file(relativePath: { eq: "wallet-video-poster.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1400
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
