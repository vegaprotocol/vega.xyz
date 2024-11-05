import React from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import { getImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import MarketCreationResponsive from '../../components/Svg/MarketCreation/Hero/Responsive'
import MarketCreationFooter from '../../components/Svg/MarketCreation/Footer'
import BoxTitle from '../../components/BoxTitle'
import GlitchTitle from '../../components/GlitchTitle'
import BoxLinkSimple from '../../components/BoxLinkSimple'
import LeadingLine from '../../components/LeadingLine'
import Accordion from '../../components/Accordion/Accordion'
import NetworkParameter from '../../components/NetworkParameter'
import Phase1 from '../../components/Svg/MarketCreation/Process/Phase1'
import Phase2 from '../../components/Svg/MarketCreation/Process/Phase2'
import Phase3 from '../../components/Svg/MarketCreation/Process/Phase3'
import Phase4 from '../../components/Svg/MarketCreation/Process/Phase4'
import Phase5 from '../../components/Svg/MarketCreation/Process/Phase5'
import Phase6 from '../../components/Svg/MarketCreation/Process/Phase6'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Callout from '../../components/UI/Callout'

const MarketCreationPage = ({ data }) => {
  const { t } = useTranslation('page.market-creation')

  const Phase3Text = () => {
    return (
      <>
        <p>
          <Trans t={t}>
            Once you have formalised your proposal and made any final amends, it
            is time to submit the proposal to the public chain using the APIs.
            Use the templates provided in the docs to convert your market
            definition from the forum post into a formal on-chain proposal.
          </Trans>
        </p>
        <p>
          <Trans t={t}>
            A proposal cannot be changed once submitted - it will be validated
            by the nodes and enter straight into the voting period - therefore
            it's important to submit only when you are happy with the proposal's
            content. Anyone with{' '}
            <NetworkParameter
              param="governance_proposal_market_minProposerBalance"
              suffix=" $VEGA"
              formatForVega={true}
            />{' '}
            who has staked to a validator, can submit a new market proposal.
            Once submitted, head back to the forum to rally the community to
            vote.
          </Trans>
        </p>
      </>
    )
  }

  const Phase4Text = () => {
    return (
      <>
        <p>
          <Trans t={t}>
            If all your proposals inputs pass validation, community token
            holders consider and vote for or against active proposals using the
            governance dApp. Share your market ideas on the Vega forum to get
            the community motivated to vote for your proposal. Note, each public
            key with a minimum of{' '}
            <NetworkParameter
              param="governance_proposal_market_minVoterBalance"
              suffix=" $VEGA"
              formatForVega={true}
            />{' '}
            gets just one vote per proposal.
          </Trans>
        </p>
      </>
    )
  }

  const marketCreationProcess = [
    {
      phase: t('Phase 1'),
      title: t('Sense check your market idea'),
      text: t(
        "<p>Start a topic and share an outline of the market you propose on the forum with a 'sense-check' tag. Get an idea of whether there is support for your proposal from the likes and replies you receive, and refine your plans.</p>"
      ),
      links: [
        {
          title: t('Start a topic on the forum'),
          url: 'https://community.vega.xyz/c/governance/market-proposals/28',
        },
        {
          title: t('See what markets already exist'),
          url: 'https://console.vega.xyz/#/markets/all',
        },
      ],
      image: <Phase1 />,
    },
    {
      phase: t('Phase 2'),
      title: t('Formalise your proposal'),
      text: t(
        '<p>Update your proposal topic based on the feedback received, and ensure you have included the rationale and specifics of the the market, including the data (JSON or similar) that would be submitted on chain i.e. market name and code, Oracle / data source the market will use for settlement, and risk model (to calculate margin requirements and ensure safe trading).</p><p>Update the tag and invite debate and discussion to amend the proposal until it reaches a final state, ready to submit.</p>'
      ),
      links: [
        {
          title: t('Read the docs to make a proposal'),
          url: 'https://docs.vega.xyz/mainnet/tutorials/proposals/new-market-proposal',
        },
        {
          title: t('Check out the forum'),
          url: 'https://community.vega.xyz/c/governance/market-proposals/28',
        },
      ],
      image: <Phase2 />,
    },
    {
      phase: t('Phase 3'),
      title: t('Submit your proposal'),
      component: <Phase3Text />,
      links: [
        {
          title: t('Read the docs to make a proposal'),
          url: 'https://docs.vega.xyz/mainnet/tutorials/proposals/new-market-proposal',
        },
      ],
      image: <Phase3 />,
    },
    {
      phase: t('Phase 4'),
      title: t('Get voting'),
      component: <Phase4Text />,
      links: [
        {
          title: t('Vote for proposals'),
          url: 'https://governance.vega.xyz/proposals',
        },
      ],
      image: <Phase4 />,
    },
    {
      phase: t('Phase 5'),
      title: t('Attract liquidity'),
      text: t(
        "<p>Any Vega participant with sufficient collateral* can provide liquidity for a market by submitting a transaction to the network. Attract liquidity with Vega's built-in incentive mechanism that matches traders and market makers.</p><p><i>*the size of the nominated liquidity commitment amount and the margins required to support the orders generated from that commitment.</i></p>"
      ),
      links: [
        {
          title: t('Read the docs about liquidity provision'),
          url: 'https://docs.vega.xyz/mainnet/concepts/liquidity/provision',
        },
      ],
      image: <Phase5 />,
    },
    {
      phase: t('Phase 6'),
      title: t('Launch Market'),
      text: t(
        '<p>If a proposal passes the vote, the market is enacted automatically, as soon as it has received enough committed liquidity.</p>'
      ),
      image: <Phase6 />,
    },
  ]

  return (
    <Layout>
      <Seo
        title={t('Market Creation with Vega')}
        description={t(
          "Bring the future of DeFi within reach - and create a futures market on any underlying. Attract liquidity with Vega's built-in incentive mechanism that matches traders and market makers."
        )}
      />
      <Container dataCy={'main'}>
        <div className="mx-auto max-w-[52rem] pt-6 text-center lg:pt-24">
          <h1>
            <BoxTitle text={t('Governance')} />
          </h1>
          <GlitchTitle
            level="2"
            color="red"
            className="title-m md:title-l lg:title-xxl mb-4 mt-4 text-center md:mb-6"
          >
            <Trans t={t}>Create markets</Trans>
          </GlitchTitle>
        </div>
        <div className="mx-auto max-w-[44rem]">
          <LeadingLine className="text-center">
            <Trans t={t}>
              Create a cash-settled futures market on any underlying. Attract
              liquidity with Vega's built-in incentive mechanism that matches
              traders and market makers.
            </Trans>
          </LeadingLine>
        </div>
      </Container>
      <div className="mb-space-8 md:mb-space-10">
        <MarketCreationResponsive />
      </div>
      <Container>
        <h2 className="title-m md:title-l mx-auto mb-6 max-w-[30rem] md:mx-0 md:max-w-[40rem]">
          <Trans t={t}>How to create a new market on Vega</Trans>
        </h2>

        <div className="mb-space-8 md:mb-space-10">
          <Accordion data={marketCreationProcess} />
        </div>

        <Callout
          title={t(
            'Creating a market is part of Vega governance. To get started, get and hold $VEGA tokens in your wallet.'
          )}
          image={getImage(data.governanceImage)}
          linkText={t('Find out more')}
          link="/governance"
          className="mb-space-8 md:mb-space-10"
        />

        <div className="mb-space-8 md:mb-space-10">
          <div className="text-center">
            <h2 className="title-m md:title-l lg:title-xxl mb-10">
              <Trans t={t}>Get started</Trans>
            </h2>

            <BoxLinkSimple
              className="max-w-[20rem] text-left"
              link="https://console.vega.xyz/"
              text={t('See what markets already exist')}
            />
          </div>
        </div>
      </Container>
      <MarketCreationFooter className="text-center" />
    </Layout>
  )
}

export default MarketCreationPage

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
    governanceImage: file(relativePath: { eq: "governance-image.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 580
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
