import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import TranslationsBanner from "../../components/TranslationsBanner";
import GlitchTitle from "../../components/GlitchTitle";
import CalloutHero from "../../components/CalloutHero";
import BoxTitle from "../../components/BoxTitle";
import Fairground from "../../components/Fairground";
import ToolBox from "../../components/ToolBox";
import { getImage } from "gatsby-plugin-image";
import AddGraphic from "../../components/Svg/Use/Add/Add";
import { Link, Trans, useTranslation } from "gatsby-plugin-react-i18next";

const UsePage = ({ data }) => {
  const { t, i18n } = useTranslation("page.use");
  const [missingTranslations, setMissingTranslations] = useState(false);
  const tabs = useRef(null);
  const [filter, setFilter] = useState(null);

  const changeFilter = (filter) => {
    setFilter(filter);
  };

  i18n.on("missingKey", (lng) => {
    setMissingTranslations(true);
  });

  useEffect(() => {
    if (filter) {
      for (let el of tabs.current.children) {
        el.classList.add("hidden");
      }

      tabs.current
        .querySelectorAll(`div.${filter}`)
        .forEach((el) => el.classList.remove("hidden"));
    } else {
      for (let el of tabs.current.children) {
        el.classList.remove("hidden");
      }
    }
  }, [filter, tabs]);

  const tools = [
    {
      collection: "tools",
      icon: data.desktopWalletIcon,
      title: "Desktop Wallet",
      author: "Vega",
      link: "/wallet/",
      description:
        "An easy to use Desktop Wallet app. Manage multiple wallets, multiple keys — and get access to the Vega network.",
      category: "WALLET",
    },
    {
      collection: "tools",
      icon: data.consoleIcon,
      title: "Console",
      author: "Vega",
      link: "https://console.fairground.wtf/",
      description: "A dApp for trading on the Vega network (Testnet).",
      category: "DAPP",
    },
    {
      collection: "tools",
      icon: data.governanceIcon,
      title: "Governance",
      author: "Vega",
      link: "https://token.vega.xyz/governance",
      description: "Review and vote on governance proposals.",
      category: "TOOL",
    },
    {
      collection: "tools",
      icon: data.blockExplorerIcon,
      title: "Block Explorer",
      author: "Vega",
      link: "https://explorer.vega.xyz/",
      description:
        "Dashboard with real-time information about the Vega blockchain.",
      category: "TOOL",
    },
    {
      collection: "tools",
      icon: data.stakingIcon,
      title: "Staking",
      author: "Vega",
      link: "https://token.vega.xyz/staking",
      description: "Stake $VEGA tokens and get rewarded.",
      category: "TOOL",
    },
    {
      collection: "tools",
      icon: data.cliWalletIcon,
      title: "CLI Wallet",
      author: "Vega",
      link: "https://docs.vega.xyz/docs/mainnet/tools/vega-wallet/cli-wallet",
      description:
        "Non-visual, command line wallet app with the ability to customise key details, isolate keys and build & send commands.",
      category: "WALLET",
    },
    {
      collection: "tools",
      icon: data.nodesGuruIcon,
      title: "Vega World",
      author: "Nodes Guru",
      link: "https://nodes.guru/vega",
      description: "Who the validators are and reward history, stake history.",
      category: "TOOL",
    },
    {
      collection: "tools",
      icon: data.vestingIcon,
      title: "Vesting",
      author: "Vega",
      link: "https://token.vega.xyz/vesting",
      description: "Redeem locked vega tokens.",
      category: "TOOL",
    },
    {
      collection: "tools",
      icon: data.dataNodeIcon,
      title: "Data Node",
      author: "Vega",
      link: "https://github.com/vegaprotocol/data-node",
      description: "Query the Vega network APIs to retrieve on chain data.",
      category: "TOOL",
    },
    {
      collection: "tools",
      icon: data.vegaCapsuleIcon,
      title: "Vega Capsule",
      author: "Vega",
      link: "https://github.com/vegaprotocol/vegacapsule",
      description:
        "Use Vega Capsule to create an instance of the Vega network on your computer to experiment with using the protocol.",
      category: "TOOL",
    },
    {
      collection: "tools",
      icon: data.vegaValidatorsIcon,
      title: "Vega Validators and Delegators",
      author: "XPRV",
      link: "https://xprv-0.github.io/",
      description: "Validators performance scores in a given Epoch.",
      category: "TOOL",
    },
  ];

  // t('Desktop Wallet')
  // t('An easy to use Desktop Wallet app. Manage multiple wallets, multiple keys — and get access to the Vega network.')
  // t('Console')
  // t('A dApp for trading on the Vega network (Testnet).')
  // t('Governance')
  // t('Review and vote on governance proposals.')
  // t('Block Explorer')
  // t('Dashboard with real-time information about the Vega blockchain.')
  // t('Staking')
  // t('Stake $VEGA tokens and get rewarded.')
  // t('CLI Wallet')
  // t('Non-visual, command line wallet app with the ability to customise key details, isolate keys and build & send commands.')
  // t('Vega World')
  // t('Who the validators are and reward history, stake history.')
  // t('Vesting')
  // t('Redeem locked vega tokens.')
  // t('Data Node')
  // t('Query the Vega network APIs to retrieve on chain data.')
  // t('Vega Capsule')
  // t('Use Vega Capsule to create an instance of the Vega network on your computer to experiment with using the protocol.')
  // t('Vega Validators and Delegators')
  // t('Validators performance scores in a given Epoch.')
  // t('WALLET')
  // t('DAPP')
  // t('TOOL')

  return (
    <Layout>
      <Seo
        title={t("Use the network")}
        description={t(
          "Use the network to get tokens, start staking, configure the network, or trade. And help fuel the DeFi economy."
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container>
        <div class="my-10">
          <CalloutHero
            title={t("The Vega mainnet is live, trading launch H2 2022")}
            text={t(
              "Token holders can participate in governance, stake and delegate."
            )}
            buttonText={t("View the Roadmap")}
            buttonLink="/#roadmap"
          />
        </div>
      </Container>
      <Container dataCy={"main"}>
        <div className="text-center mb-8 md:mb-12 pt-6 md:pt-16">
          <div className="max-w-[61rem] mx-auto text-center">
            <h1>
              <BoxTitle text={t("Use Vega")} />
            </h1>
            <GlitchTitle
              level="2"
              color="red"
              className="title-m md:title-l lg:title-xl mb-4 md:mb-6 mt-4 text-center"
            >
              <Trans t={t}>Tools built on Vega</Trans>
            </GlitchTitle>
          </div>
        </div>
        <div className="max-w-[90rem] md:px-6 lg:px-8 mx-auto">
          <div className="text-center mx-auto border-b overflow-x-scroll whitespace-nowrap md:whitespace-normal overflow-y-hidden border-vega-mid-grey md:flex md:justify-center md:gap-x-8 px-6">
            <button
              tabIndex={0}
              onClick={() => changeFilter(null)}
              className={`inline-block title-s px-3 py-5 border-b-2 ${
                filter === null
                  ? "border-current"
                  : "border-transparent hover:border-current"
              }`}
            >
              <Trans t={t}>All</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter("wallet")}
              className={`inline-block title-s px-3 py-5 border-b-2 ${
                filter === "wallet"
                  ? "border-current"
                  : "border-transparent over:border-current"
              }`}
            >
              <Trans t={t}>Wallets</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter("dapp")}
              className={`inline-block title-s px-3 py-5 border-b-2 ${
                filter === "dapp"
                  ? "border-current"
                  : "border-transparent hover:border-current"
              }`}
            >
              <Trans t={t}>dApps</Trans>
            </button>
            <button
              tabIndex={0}
              onClick={() => changeFilter("tool")}
              className={`inline-block title-s px-3 py-5 border-b-2 ${
                filter === "tool"
                  ? "border-current"
                  : "border-transparent hover:border-current"
              }`}
            >
              <Trans t={t}>Tools</Trans>
            </button>
          </div>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-10 py-16 md:mb-12"
          ref={tabs}
        >
          {tools.map((tool, idx) => (
            <div
              className={`${tool.category.toLowerCase()} max-w-[26rem] w-full mx-auto md:max-w-none`}
              key={idx}
            >
              <ToolBox
                icon={getImage(tool.icon)}
                title={t(tool.title)}
                link={tool.link}
                author={tool.author}
                text={t(tool.description)}
                category={t(tool.category)}
              />
            </div>
          ))}
        </div>
        <div className="border-b-2 border-current md:flex md:items-center md:justify-between">
          <div>
            <p className="title-m mb-3">
              <Trans t={t}>Want to add something to this list?</Trans>
            </p>
            <p className="prose copy-s text-vega-mid-grey">
              <Trans t={t}>
                <a
                  href="https://vega.xyz/discord/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat to us on Discord
                </a>{" "}
                and <Link to="/develop">start building</Link>.
              </Trans>
            </p>
          </div>
          <AddGraphic className="max-w-[16rem] w-full self-end" />
        </div>
      </Container>

      <div className="mt-16">
        <Fairground />
      </div>
    </Layout>
  );
};

export default UsePage;

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
    desktopWalletIcon: file(
      relativePath: { eq: "tool-icons/desktop-wallet.png" }
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
    consoleIcon: file(relativePath: { eq: "tool-icons/console.png" }) {
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
    stakingIcon: file(relativePath: { eq: "tool-icons/staking.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    cliWalletIcon: file(relativePath: { eq: "tool-icons/cli-wallet.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    nodesGuruIcon: file(relativePath: { eq: "tool-icons/nodes-guru.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    vestingIcon: file(relativePath: { eq: "tool-icons/vesting.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    dataNodeIcon: file(relativePath: { eq: "tool-icons/data-node.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    vegaCapsuleIcon: file(relativePath: { eq: "tool-icons/vega-capsule.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          height: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    vegaValidatorsIcon: file(
      relativePath: { eq: "tool-icons/vega-validators.png" }
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
  }
`;
