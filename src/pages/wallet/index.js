import React, { useState, useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import PageSection from "../../components/PageSection";
import GlitchTitle from "../../components/GlitchTitle";
import WalletRip from "../../components/Svg/WalletRip";
import WalletHowTo from "../../components/Svg/WalletHowTo";
import WalletLeft from "../../components/Svg/WalletLeft";
import WalletRight from "../../components/Svg/WalletRight";
import WalletHowToSmall from "../../components/Svg/WalletHowToSmall";
import LeadingLine from "../../components/LeadingLine";
import ButtonLink from "../../components/ButtonLink";
import DropdownArrow from "../../components/Svg/DropdownArrow";
import IconPlatformMac from "../../components/Svg/IconPlatformMac";
import IconPlatformWindows from "../../components/Svg/IconPlatformWindows";
import IconPlatformLinux from "../../components/Svg/IconPlatformLinux";

const platformIcons = {
  mac: IconPlatformMac,
  windows: IconPlatformWindows,
  linux: IconPlatformLinux,
};

const PlatformIcon = (platform) => {
  const PlatformIcon = platformIcons[platform];
  return (
    <div className="flex items-center">
      <PlatformIcon />
    </div>
  );
};

const ListItem = ({ idx, text }) => {
  return (
    <li className="flex mb-4 text-vega-mid-grey dark:text-vega-grey">
      <div className="relative top-1 w-12 title-s font-glitch-all dark:text-white text-black shrink-0">
        {idx + 1}.
      </div>
      <div className="copy-xs !mb-0">{text}</div>
    </li>
  );
};

const getArch = () => {
  var platform =
      window.navigator?.userAgentData?.platform ?? window.navigator.platform,
    macosPlatforms = ["macOS", "Macintosh", "MacIntel", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows"],
    linuxPlatforms = "Linux";

  if (macosPlatforms.includes(platform)) {
    const w = document.createElement("canvas").getContext("webgl");
    const d = w.getExtension("WEBGL_debug_renderer_info");
    const g = (d && w.getParameter(d.UNMASKED_RENDERER_WEBGL)) || "";
    if (
      (g.match(/Apple/) && !g.match(/Apple GPU/)) ||
      (g.match(/Apple GPU/) &&
        w
          .getSupportedExtensions()
          .indexOf("WEBGL_compressed_texture_s3tc_srgb") === -1)
    ) {
      return "MacOS (ARM64)";
    } else {
      return "MacOS";
    }
  } else if (windowsPlatforms.includes(platform)) {
    if (platform.match(/\barm/i)) {
      return "Windows (ARM64)";
    } else {
      return "Windows";
    }
  } else if (linuxPlatforms.includes(platform)) {
    return "Linux";
  } else {
    return "Linux";
  }
};

const howToText = [
  "Choose 'create a new wallet' in the app",
  "Name each individual wallet if you need more than one",
  "Create a passphrase for each wallet. You'll need it for depositing collateral, placing trades, etc.",
  "Record the recovery phrase that's provided on setup. This only appears once. Have an existing wallet you created in the CLI app? You will be given the option to connect this to the desktop app",
  "Need to restore a wallet? Use the recovery phrase exactly as it was presented to you",
  "To update the app, delete your existing version and download the new one",
];

const binaries = [
  {
    icon: "windows",
    platform: "Windows",
    file: "https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.1.1/vegawallet-desktop-windows-amd64.zip",
  },
  {
    icon: "windows",
    platform: "Windows (ARM64)",
    file: "https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.1.1/vegawallet-desktop-windows-arm64.zip",
  },
  {
    icon: "mac",
    platform: "MacOS",
    file: "https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.1.1/vegawallet-desktop-darwin-amd64.zip",
  },
  {
    icon: "mac",
    platform: "MacOS (ARM64)",
    file: "https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.1.1/vegawallet-desktop-darwin-arm64.zip",
  },
  {
    icon: "linux",
    platform: "Linux",
    file: "https://github.com/vegaprotocol/vegawallet-desktop/releases/download/v0.1.1/vegawallet-desktop-linux-amd64.zip",
  },
];

const WalletPage = () => {
  const [downloadDropdown, setDownloadDropdown] = useState(false);
  const [selectedBinary, setSelectedBinary] = useState(binaries[0]);
  const dropDownMenuButton = useRef(null);

  const showDownloadMenu = (state) => {
    setDownloadDropdown(state);
  };

  const chooseBinary = (idx) => {
    setSelectedBinary(binaries[idx]);
    dropDownMenuButton.current.blur();
  };

  useEffect(() => {
    setSelectedBinary(
      binaries.find((element) => element.platform === getArch())
    );

    return () => {};
  }, []);

  return (
    <Layout>
      <Seo
        title="Get the Vega Wallet"
        description="Download the Vega Wallet desktop app, to help you manage multiple wallets, multiple keys — and get access to the Vega network."
      />
      <Container dataCy={"main"}>
        <div className="pt-6 lg:pt-16 max-w-[38rem] md:max-w-none mx-auto">
          <div className="mx-auto max-w-[28rem] md:max-w-[38rem] lg:max-w-[42rem] text-center">
            <GlitchTitle level="1" className="my-4 title-l md:title-xxl">
              Get the Vega Wallet
            </GlitchTitle>
          </div>
          <LeadingLine className="text-current text-center max-w-[56rem] mx-auto">
            Download the Vega Wallet desktop app, to help you manage multiple
            wallets, multiple keys — and get access to the Vega network.
          </LeadingLine>

          <div
            ref={dropDownMenuButton}
            className="w-[16rem] mx-auto relative mt-10 cursor-pointer"
            tabIndex={0}
            role="button"
            onFocus={() => showDownloadMenu(true)}
            onBlur={() => showDownloadMenu(false)}
          >
            <div className="border border-current flex items-center">
              <div className="py-3 px-3.5 flex items-center">
                <div className="pr-2.5">
                  {PlatformIcon(selectedBinary.icon)}
                </div>
                <DropdownArrow />
                {downloadDropdown && (
                  <div className="absolute z-10 top-[2.9375rem] left-0 right-0 border border-t-0 border-current bg-white dark:bg-black">
                    <ul className="py-3 px-2">
                      {binaries.map((binary, idx) => {
                        return (
                          <li className="cursor-pointer my-1" key={idx}>
                            <div
                              onClick={() => chooseBinary(idx)}
                              onKeyDown={() => chooseBinary(idx)}
                              role="button"
                              // tabIndex={0}
                              className={`flex items-center w-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 ${
                                selectedBinary === binary
                                  ? "bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10"
                                  : ""
                              }`}
                            >
                              <div className="px-3.5 py-2">
                                {PlatformIcon(binary.icon)}
                              </div>
                              <div className="py-2 copy-xxs !mb-0 text-vega-mid-grey dark:text-vega-grey">
                                {binary.platform}
                              </div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
              <div className="text-center relative border-px border-l border-current uppercase copy-xxs !mb-0 flex-grow">
                <a
                  href={selectedBinary.file}
                  className="block py-3 px-3"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => showDownloadMenu(false)}
                >
                  Get Desktop App
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="relative pt-16 md:pt-36 md:mt-12">
        <StaticImage
          src="../../images/wallet-small.png"
          alt="Vega Wallet"
          placeholder="none"
          layout="fullWidth"
          className="relative z-10 md:hidden mr-8"
        />

        <WalletRip className="relative -mt-16 md:mt-16 lg:mt-0" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-2/3 hidden md:block">
          <StaticImage
            src="../../images/wallet.png"
            alt="Vega Wallet"
            placeholder="none"
            layout="constrained"
            width={894}
            height={561}
            className="md:scale-150 lg:scale-110"
          />
        </div>
      </div>

      <Container>
        <PageSection>
          <div className="text-center">
            <h2 className="title-m">With the wallet you can:</h2>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-8 text-center text-[1.125rem] leading-snug pt-12 pb-12 md:pb-6">
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
              <div className="mt-4">Import an existing Vega wallet</div>
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
              <div className="mt-4">Create a new wallet</div>
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
              <div className="mt-4">Manage multiple wallets and keys</div>
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
              <div className="mt-4">Connect to networks</div>
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
              <div className="mt-4">Sign transactions</div>
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
                Access Vega apps, such as the token site and Console
              </div>
            </div>
          </div>
          <p className="text-center copy-xs">
            It's also the starting point for trading, staking tokens, and voting
            on community proposals.
          </p>
        </PageSection>

        <PageSection>
          <WalletHowToSmall className="md:hidden mb-8" />
          <div className="grid grid-cols-12 md:gap-12 lg:gap-21 max-w-[62rem] mx-auto">
            <div className="col-span-12 md:col-span-4">
              <h2 className="title-l md:title-xl mb-3 max-w-[17rem] md:max-w-none">
                How to use
              </h2>
              <p className="copy-xs">
                You can have multiple wallets within the Vega Wallet desktop
                app.
              </p>
              <p className="copy-xxs">
                To learn more about the Vega Wallet desktop app, including full,
                step by step details on restoring wallets, updating the app, and
                troubleshooting, visit the docs pages.
              </p>
            </div>

            <div className="col-span-12 md:col-span-8 lg:pl-12">
              <ol className="list-none p-0 mt-6 md:mt-0">
                {howToText.map((text, idx) => {
                  return <ListItem idx={idx} key={idx} text={text} />;
                })}
              </ol>
            </div>
          </div>
          <WalletHowTo className="hidden md:block mt-5" />
        </PageSection>
      </Container>

      <PageSection>
        <div className="flex justify-between items-center">
          <div className="w-[200px] hidden md:block">
            <WalletLeft />
          </div>
          <div className="text-center max-w-[30rem] md:max-w-[42rem] mx-auto">
            <Container>
              <h2 className="title-s md:title-l mb-6 max-w-[30rem] lg:max-w-none mx-auto">
                Need the command line (CLI) wallet app?
              </h2>
              <p className="copy-xs md:copy-s">
                If you're comfortable with a non-visual interface and want
                additional or programmer functionality to that of the desktop
                app, CLI also lets you:
              </p>
              <div className="grid grid-cols-3 gap-8 text-center text-[1.125rem] leading-snug pt-8 pb-8">
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
                  <div className="mt-4">Customise key details</div>
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
                  <div className="mt-4">Isolate keys</div>
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
                  <div className="mt-4">Build & send commands</div>
                </div>
              </div>

              <ButtonLink
                text="Get the CLI App"
                link="https://docs.vega.xyz/docs/mainnet/tools/vega-wallet/cli-wallet/latest/create-wallet/"
              />
            </Container>
          </div>
          <div className="w-[200px] hidden md:block">
            <WalletRight />
          </div>
        </div>
      </PageSection>
    </Layout>
  );
};

export default WalletPage;
