import { useStaticQuery, graphql } from 'gatsby'
import { useTranslation } from 'gatsby-plugin-react-i18next'

export const useEcosystemData = (t) => {
  // eslint-disable-next-line no-unused-vars
  const { t: trans } = useTranslation('page.ecosystem')

  const data = useStaticQuery(graphql`
    query EcosystemQuery {
      walletIcon: file(relativePath: { eq: "ecosystem/wallet.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 96
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      desktopWalletIcon: file(
        relativePath: { eq: "ecosystem/desktop-wallet.png" }
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
      consoleIcon: file(relativePath: { eq: "ecosystem/console.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 96
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      governanceIcon: file(relativePath: { eq: "ecosystem/governance.png" }) {
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
        relativePath: { eq: "ecosystem/block-explorer.png" }
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
      cliWalletIcon: file(relativePath: { eq: "ecosystem/cli-wallet.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 96
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      nodesGuruIcon: file(relativePath: { eq: "ecosystem/nodes-guru.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 96
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      dataNodeIcon: file(relativePath: { eq: "ecosystem/data-node.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 96
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      guidesIcon: file(relativePath: { eq: "ecosystem/guides.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 96
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      vegaCapsuleIcon: file(
        relativePath: { eq: "ecosystem/vega-capsule.png" }
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
      duneLogo: file(relativePath: { eq: "ecosystem/dune.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 210
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      ethereumLogo: file(relativePath: { eq: "ecosystem/ethereum.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 75
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      hummingbotLogo: file(relativePath: { eq: "ecosystem/hummingbot.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 96
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      chainlinkLogo: file(relativePath: { eq: "ecosystem/chainlink.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 210
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      uniswapLogo: file(relativePath: { eq: "ecosystem/uniswap.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 96
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      tradingviewLogo: file(
        relativePath: { eq: "ecosystem/trading-view.png" }
      ) {
        childImageSharp {
          gatsbyImageData(
            width: 210
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      metamaskLogo: file(relativePath: { eq: "ecosystem/metamask.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 210
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      pythLogo: file(relativePath: { eq: "ecosystem/pyth.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 96
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      gnosisLogo: file(relativePath: { eq: "ecosystem/gnosis.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 245
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      defiLlamaLogo: file(relativePath: { eq: "ecosystem/defilama.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 210
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      arbitrumLogo: file(relativePath: { eq: "ecosystem/arbitrum.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 120
            height: 96
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
      vegaDocsIcon: file(relativePath: { eq: "ecosystem/docs.png" }) {
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
  `)

  const ecosystem = [
    {
      icon: data.walletIcon,
      title: t('Vega Wallet'),
      author: 'Vega',
      link: '/wallet/',
      description: t(
        'Connect to Vega dApps and sign transactions from your browser on the Vega network.'
      ),
      categories: ['wallets'],
    },
    {
      icon: data.desktopWalletIcon,
      title: t('Desktop Wallet'),
      author: 'Vega',
      link: '/wallet/',
      description: t(
        'An easy to use Desktop Wallet app. Manage multiple wallets, multiple keys — and get access to the Vega network.'
      ),
      categories: ['wallets'],
    },
    {
      icon: data.cliWalletIcon,
      title: t('CLI Wallet'),
      author: 'Vega',
      link: 'https://docs.vega.xyz/mainnet/tools/vega-wallet/cli-wallet',
      description: t(
        'Non-visual, command line wallet app with the ability to customise key details, isolate keys and build & send commands.'
      ),
      categories: ['wallets'],
    },
    {
      icon: data.duneLogo,
      title: t('Dune'),
      link: 'https://dune.com/vega_protocol/analytics',
      description: t(
        'Visit the Vega dashboard on Defi Llama to explore on chain metrics for the network.'
      ),
      categories: ['analytics'],
    },
    {
      icon: data.defiLlamaLogo,
      title: t('Defi Llama'),
      link: 'https://defillama.com/protocol/vega-protocol',
      description: t(
        'Visit the Vega dashboard on Defi Llama to explore on chain metrics for the network.'
      ),
      categories: ['analytics'],
    },
    {
      icon: data.ethereumLogo,
      title: t('Ethereum'),
      link: 'https://ethereum.org/',
      description: t(
        'Vega supports bridging of any ERC20 token onto the network, so long as that token has been proposed and approved via on-chain governance. The protocol can also source oracle data from any Ethereum RPC.'
      ),
      categories: ['integrations'],
    },
    {
      icon: data.hummingbotLogo,
      title: t('Hummingbot'),
      link: 'https://hummingbot.org/',
      description: t(
        'Run pre-built automated strategies or compose your own with Hummingbot on Vega.'
      ),
      categories: ['build'],
    },
    {
      icon: data.chainlinkLogo,
      title: t('Chainlink'),
      link: 'https://chain.link/',
      description: t(
        "Any price feed available via Chainlink can be used to drive a market on the network through the protocol's flexible Ethereum oracles framework."
      ),
      categories: ['integrations'],
    },
    {
      icon: data.uniswapLogo,
      title: t('Uniswap'),
      link: 'https://app.uniswap.org/',
      description: t(
        'The Vega network can source prices from any Uniswap pool by using this community created smart contract during market creation.'
      ),
      categories: ['integrations'],
    },
    {
      icon: data.tradingviewLogo,
      title: t('TradingView'),
      link: 'https://www.tradingview.com/',
      description: t(
        "TradingView powered charts available in some versions of Console alongside Vega's own open source chart software."
      ),
      categories: ['integrations'],
    },
    {
      icon: data.metamaskLogo,
      title: t('Metamask'),
      link: 'https://metamask.io/',
      description: t(
        'Connect to Console or Governance apps using the Vega MetaMask Snap for quick and pain free onboarding to the Vega network.'
      ),
      categories: ['wallets'],
    },
    {
      icon: data.pythLogo,
      title: t('Pyth'),
      link: 'https://pyth.network/',
      description: t(
        "Pyth price data feeds can be pushed to a contract on Ethereum, Gnosis or Arbitrum chains and once available can be consumed by the protocol's data sourcing framework."
      ),
      categories: ['integrations'],
    },
    {
      icon: data.gnosisLogo,
      title: t('Gnosis'),
      link: 'https://www.gnosis.io/',
      description: t(
        "Gnosis offers low fee, high efficiency infrastructure for provision of pricing feeds as part of Vega's Ethereum L2 oracles framework."
      ),
      categories: ['integrations'],
    },
    {
      icon: data.arbitrumLogo,
      title: t('Arbitrum'),
      link: 'https://arbitrum.io/',
      description: t(
        "Arbitrm offers low fee, high efficiency infrastructure for provision of pricing feeds as part of Vega's Ethereum L2 oracles framework."
      ),
      categories: ['integrations'],
    },
    {
      icon: data.consoleIcon,
      title: t('Console'),
      author: 'Vega',
      link: 'https://console.vega.xyz/',
      description: t(
        'IPFS hosted trading interface to deposit assets, place trades and follow your positions.'
      ),
      categories: ['dapps'],
    },
    {
      icon: data.governanceIcon,
      title: t('Governance'),
      author: 'Vega',
      link: 'https://governance.vega.xyz/proposals',
      description: t(
        'Explore validators on the network, stake tokens, and vote on governance proposals.'
      ),
      categories: ['dapps', 'validators'],
    },
    {
      icon: data.blockExplorerIcon,
      title: t('Block Explorer'),
      author: 'Vega',
      link: 'https://explorer.vega.xyz/',
      description: t(
        'Dashboard with real-time information about the Vega blockchain.'
      ),
      categories: ['dapps'],
    },
    {
      icon: data.guidesIcon,
      title: t('Community Guides'),
      author: 'Vega Community',
      link: 'https://docs.vega.xyz/mainnet/tutorials/community-created',
      description: 'Explore community created guides for the Vega network',
      categories: ['build'],
    },
    {
      icon: data.nodesGuruIcon,
      title: t('Vega World'),
      author: 'Nodes Guru',
      link: 'https://stake.nodes.guru/vega/world',
      description: t(
        'Validator-created dashboard providing information on validators, staking, and rewards.'
      ),
      categories: ['analytics'],
    },
    {
      icon: data.dataNodeIcon,
      title: t('Data Node'),
      author: 'Vega',
      link: 'https://github.com/vegaprotocol/vega/tree/develop/datanode#data-node',
      description: t(
        'Learn how to set up your own data node to support application building on Vega.'
      ),
      categories: ['build'],
    },
    {
      icon: data.vegaCapsuleIcon,
      title: t('Vega Capsule'),
      author: 'Vega',
      link: 'https://github.com/vegaprotocol/vegacapsule',
      description: t(
        'Use Vega Capsule to create an instance of the Vega network on your computer to experiment with using the protocol.'
      ),
      categories: ['build'],
    },
    {
      icon: data.vegaDocsIcon,
      title: t('Docs'),
      author: 'Vega',
      link: 'https://docs.vega.xyz/',
      description: t(
        'Explore the official Vega Protocol documentation to learn about the network'
      ),
      categories: ['build'],
    },
  ]

  return ecosystem
}
