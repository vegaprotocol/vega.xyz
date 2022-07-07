import React from "react";
import Seo from "../../components/Seo";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import GlitchTitle from "../../components/GlitchTitle";
import { Link } from "gatsby";
import PageSection from "../../components/PageSection";
import BoxTitle from "../../components/BoxTitle";
import ToolBox from "../../components/ToolBox";
import UseVegaResponsive from "../../components/Svg/Use/Hero/Responsive";
import ConsoleIcon from "../../images/tool-icons/console.png";
import ConsoleLiteIcon from "../../images/tool-icons/console-lite.png";
import TokenInterfaceIcon from "../../images/tool-icons/token-interface.png";
import BlockExplorerIcon from "../../images/tool-icons/block-explorer.png";
import DataDashboardIcon from "../../images/tool-icons/data-dashboard.png";
import DesktopWalletIcon from "../../images/tool-icons/desktop-wallet.png";
import NetworkStatusIcon from "../../images/tool-icons/network-status.png";
import CLIWalletIcon from "../../images/tool-icons/cli-wallet.png";
import DataNodeIcon from "../../images/tool-icons/data-node.png";

const UsePage = () => {
  return (
    <Layout>
      <Seo
        title="Use the network"
        description="Use the network to get tokens, start staking, configure the network, or trade. And help fuel the DeFi economy."
      />
      <Container dataCy={"main"}>
        <div className="md:grid md:grid-cols-2 md:gap-x-12 md:border-b-2 md:border-current pt-6 lg:pt-16">
          <div className="relative -bottom-[2px] self-end">
            <UseVegaResponsive />
          </div>
          <div className="py-10 md:py-12 self-center">
            <BoxTitle text="Tools built on Vega" />

            <GlitchTitle
              color="red"
              className="mt-4 md:mt-8 title-l lg:title-xl max-w-[80%]"
              level={1}
            >
              Vega-powered tools and services
            </GlitchTitle>
            <div className="prose copy-xs">
              <p className="mt-4">
                Trade on a fully decentralised network and propose new markets,
                provide liquidity, start staking or configure the network
                through governance.
              </p>
            </div>
          </div>
        </div>
        <PageSection>
          <div>
            <div className="text-center">
              <h2 className="title-m md:title-l">Tools built on Vega</h2>
              <div className="prose mx-auto copy-xs md:copy-s">
                <div>
                  <p>
                    Together we are building the future of finance where control
                    of the markets, products, and fees is in the community's
                    hands. Find out more about how Vega works{" "}
                    <Link to="/key-concepts">here</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </PageSection>
      </Container>

      <div className="mx-auto border-b overflow-x-scroll whitespace-nowrap md:whitespace-normal overflow-y-hidden border-vega-mid-grey md:flex md:justify-center md:gap-x-8 px-6 md:px-0">
        <div className="inline-block title-s p-3">All</div>
        <div className="inline-block title-s p-3">Wallets</div>
        <div className="inline-block title-s p-3">Trading</div>
        <div className="inline-block title-s p-3">Governance</div>
      </div>

      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-16">
          <ToolBox
            icon={ConsoleIcon}
            title="Console"
            link="https://console.fairground.wtf/"
            text="A fully featured professional trading front end."
            type="DAPP"
          />
          <ToolBox
            icon={ConsoleLiteIcon}
            title="Console Lite"
            link=""
            text="A mobile first, simplified trading app for the trading curious."
            type="DAPP"
          />
          <ToolBox
            icon={TokenInterfaceIcon}
            title="Token Interface"
            link="https://token.vega.xyz/"
            text="Signal your support for a validator by staking $VEGA tokens, create, submit and vote on governance actions and proposals for network parameters, markets and assets."
            type="DOCS"
          />
          <ToolBox
            icon={BlockExplorerIcon}
            title="Block Explorer"
            link="https://explorer.vega.xyz/"
            text="Dashboard with real-time and historical information about the Vega blockchain."
            type="TOOL"
          />
          <ToolBox
            icon={DataDashboardIcon}
            title="Data Dashboard"
            link="https://explorer.vega.xyz/"
            text="See trading activity levels and understand trading stats."
            type="TOOL"
          />
          <ToolBox
            icon={DesktopWalletIcon}
            title="Desktop Wallet"
            link="/wallet/"
            text="An easy to use Desktop Wallet app. Manage multiple wallets, multiple keys — and get access to the Vega network."
            type="WALLET"
          />
          <ToolBox
            icon={NetworkStatusIcon}
            title="Network Status"
            link="https://status.vega.trading/"
            text="Check on the health of the Vega network; nodes, staking and uptime."
            type="TOOL"
          />
          <ToolBox
            icon={CLIWalletIcon}
            title="CLI Wallet"
            link="https://docs.vega.xyz/docs/mainnet/tools/vega-wallet/cli-wallet"
            text="Non-visual, command line wallet app with the ability to customise key details, isolate keys and build & send commands."
            type="WALLET"
          />
          <ToolBox
            icon={DataNodeIcon}
            title="Data Node"
            link=""
            text="Query our APIs to retrieve on-chain data."
            type="WALLET"
          />
        </div>
      </Container>
    </Layout>
  );
};

export default UsePage;
