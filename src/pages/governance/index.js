import React, { useState } from 'react'
import { graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import GovernanceResponsive from '../../components/Svg/Governance/Hero/Responsive'
import BoxTitle from '../../components/BoxTitle'
import ToolBox from '../../components/ToolBox'
import ButtonLink from '../../components/ButtonLink'
import GlitchTitle from '../../components/GlitchTitle'
import LeadingLine from '../../components/LeadingLine'
import NetworkParameter from '../../components/NetworkParameter'
import Accordion from '../../components/Accordion/Accordion'
import Arrow from '../../components/Svg/Arrow'
import VotingIllustration from '../../components/Svg/Governance/Voting'
import Phase1 from '../../components/Svg/Governance/Process/Phase1'
import Phase2 from '../../components/Svg/Governance/Process/Phase2'
import Phase3 from '../../components/Svg/Governance/Process/Phase3'
import Phase4 from '../../components/Svg/Governance/Process/Phase4'
import Phase5 from '../../components/Svg/Governance/Process/Phase5'
import Proposals from '../../components/Proposals'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import Callout from '../../components/UI/Callout'

const GovernancePage = ({ data }) => {
  const { i18n, t } = useTranslation('page.governance')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  const Phase3Text = () => {
    return (
      <>
        <p>
          <Trans t={t}>
            As a token holder, you can submit the proposal to create a new
            market, change an existing market, change network parameters, add an
            external asset to Vega and make a freeform proposal (for changes
            that will not change network behaviour). For each, you will define
            specific inputs for a set list of parameters, which are validated by
            the nodes before entering into the voting period you set. Then it's
            time to rally the community on the forum to vote for your proposal.
          </Trans>
        </p>

        <p>
          <Trans t={t}>
            The number of tokens needed to make a proposal differs by proposal
            type, for example{' '}
            <NetworkParameter
              param="governance_proposal_market_minProposerBalance"
              suffix=" $VEGA"
            />{' '}
            for a new market proposal.
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
            Token holders consider and vote for or against active proposals.
            Tokens used for voting are not locked or transferred - they can be
            used for staking as well as voting on any/all active proposals, but
            cannot be used to trade. Note, each public key with a minimum of 1
            $VEGA gets just one vote per proposal.
          </Trans>
        </p>
        <p>
          <Trans t={t}>
            The number of tokens needed to vote differs by proposal type, for
            example{' '}
            <NetworkParameter
              param="governance_proposal_market_minVoterBalance"
              suffix=" $VEGA"
            ></NetworkParameter>{' '}
            for a new market proposal. Each public key is eligible for one vote.
          </Trans>
        </p>
      </>
    )
  }

  const Phase5Text = () => {
    return (
      <>
        <p>
          <Trans t={t}>
            If a proposal receives enough participation and reaches the majority
            threshold within the voting period, the change is automatically
            enacted (with the exception of free form proposals). The thresholds
            differ by proposal type, for example a new market proposal requires
            participation of{' '}
            <NetworkParameter param="governance_proposal_market_requiredParticipation" />{' '}
            and a majority of{' '}
            <NetworkParameter param="governance_proposal_market_requiredMajority" />
            .
          </Trans>
        </p>
      </>
    )
  }

  const governanceProcess = [
    {
      phase: t('Phase 1'),
      title: t('Sense check'),
      text: t(
        "Start a topic and share an outline of your proposal on the forum with a 'sense-check' tag. Get an idea of whether there is support for your proposal from the likes and replies you receive, and refine your plans."
      ),
      links: [
        {
          title: t('Start a topic on the forum'),
          url: 'https://community.vega.xyz/c/governance/25',
        },
      ],
      image: <Phase1 />,
    },
    {
      phase: t('Phase 2'),
      title: t('Formalise Proposal'),
      text: t(
        'Update your proposal topic based on the feedback received, and ensure you have included the rationale and specifics of the proposed addition/change, including the data (JSON or similar) that would be submitted on chain. Update the tag and invite debate and discussion to amend the proposal until it reaches a final state, ready to submit.'
      ),
      links: [
        {
          title: t('Read the docs to make a proposal'),
          url: 'https://docs.vega.xyz/mainnet/concepts/vega-protocol#governance',
        },
        {
          title: t('Check out the forum'),
          url: 'https://community.vega.xyz/c/governance/25',
        },
      ],
      image: <Phase2 />,
    },
    {
      phase: t('Phase 3'),
      title: t('Submit a proposal'),
      component: <Phase3Text />,
      links: [
        {
          title: t('Read the docs to make a proposal'),
          url: 'https://docs.vega.xyz/mainnet/concepts/vega-protocol#governance',
        },
      ],
      image: <Phase3 />,
    },
    {
      phase: t('Phase 4'),
      title: t('Vote to exercise your influence'),
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
      title: t('Enacting changes'),
      component: <Phase5Text />,
      image: <Phase5 />,
    },
  ]

  return (
    <Layout>
      <Seo
        title={t('Governance')}
        description={t(
          'Governance allows the Vega network to arrive at on-chain decisions, where tokenholders can create proposals that other tokenholders can vote to approve or reject.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mx-auto max-w-[61rem] pt-6 text-center lg:pt-24">
          <h1>
            <BoxTitle text={t('Governance')} />
          </h1>
          <GlitchTitle
            level="2"
            color="red"
            className="title-m md:title-l lg:title-xl mb-4 mt-4 text-center md:mb-6"
          >
            <Trans t={t}>Govern the network</Trans>
          </GlitchTitle>
        </div>
        <div className="mx-auto max-w-[44rem]">
          <LeadingLine className="text-center">
            <Trans t={t}>
              Decisions on the Vega network are on-chain, with tokenholders
              creating proposals that other tokenholders vote to approve or
              reject. This is how the protocol powers the creation of
              decentralised financial products.
            </Trans>
          </LeadingLine>
        </div>
      </Container>

      <Container>
        <div className="mx-auto mt-10 mb-space-10 grid max-w-[75rem] grid-cols-1 gap-5 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-10">
          <ToolBox
            icon={getImage(data.forumIcon)}
            title={t('Forum')}
            link="https://community.vega.xyz/c/governance/25"
            text={t(
              'Sense check and formalise proposals for the Vega network - add or change markets, network parameters, external assets and more.'
            )}
            type="Tool"
          />
          <ToolBox
            icon={getImage(data.tokenInterfaceIcon)}
            title={t('Governance')}
            link="https://governance.vega.xyz/proposals"
            text={t('Review, vote on, and submit governance proposals.')}
            type="DAPP"
          />
          <ToolBox
            icon={getImage(data.makeProposalIcon)}
            title={t('Make a proposal')}
            link="https://docs.vega.xyz/mainnet/concepts/vega-protocol"
            text={t(
              'Read the docs to create and submit a proposal using Vega APIs.'
            )}
            type="DOCS"
          />
        </div>

        <div className="mb-space-8 md:mb-space-10">
          <GovernanceResponsive />
        </div>          
       
        <div className="mb-space-8 md:mb-space-10">
          <h2 className="title-m md:title-l lg:title-xl mb-12 px-1 text-center">
            <Trans t={t}>Get started voting</Trans>
          </h2>

          <div className="relative top-[3px] mx-auto max-w-[31.25rem]">
            <VotingIllustration />
          </div>

          <div className="grid grid-cols-1 border-2 border-current text-center md:grid-cols-3">
            <div className="relative border-b-2 border-current p-12  md:border-b-0 md:border-r-2 md:p-6 lg:p-12">
              <div className="title-s mb-6">
                <Trans t={t}>Get $VEGA tokens</Trans>
              </div>
              <div className="lg:prose-lg">
                <p className="copy-xxs lg:copy-xs">
                  <Trans t={t}>
                    And store in an Ethereum wallet. You can purchase VEGA using
                    Ethereum (ETH) on decentralized exchanges.
                  </Trans>
                </p>
              </div>
              <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 bg-white p-3 dark:bg-black md:top-9 md:right-0 md:bottom-auto md:left-auto md:translate-x-1/2 md:rotate-[270deg]">
                <Arrow />
              </div>
            </div>
            <div className="relative border-b-2 border-current p-12 md:border-b-0 md:border-r-2 md:p-6 lg:p-12">
              <div className="title-s mb-6">
                <Trans t={t}>Get a Vega Wallet</Trans>
              </div>
              <div className="mb-6 lg:prose-lg">
                <p className="copy-xxs lg:copy-xs">
                  <Trans t={t}>
                    A Vega wallet is used to access and sign transactions and
                    connect to any dApp running on Vega.
                  </Trans>
                </p>
              </div>
              <ButtonLink link="/wallet" text={t('Get a Vega Wallet')} />
              <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 bg-white p-3 dark:bg-black md:top-9 md:right-0 md:bottom-auto md:left-auto md:translate-x-1/2 md:rotate-[270deg]">
                <Arrow />
              </div>
            </div>
            <div className="relative border-current p-12 md:p-6 lg:p-12">
              <div className="title-s mb-6">
                <Trans t={t}>Vote on proposals</Trans>
              </div>
              <div className="mb-6">
                <p className="copy-xxs lg:copy-xs">
                  <Trans t={t}>Use our governance tools.</Trans>
                </p>
                <p className="copy-xxs lg:copy-xs">
                  <Trans t={t}>
                    Note, you'll need some ETH to pay any transaction fees.
                  </Trans>
                </p>
              </div>
              <ButtonLink
                link="/governance/#governanceTools"
                text={t('Governance tools')}
              />
            </div>
          </div>          
        <div className="mb-space-8 md:mb-space-10">          
        <h2 className="title-m md:title-l mx-auto mb-6 max-w-[30rem] md:max-w-none">
          <Trans t={t}>Governance lifecycle</Trans>
        </h2>
        </div>

        <div className="mb-space-8 md:mb-space-10">
          <Accordion
            data={governanceProcess}
            transNamespace="page.governance"
          />
        </div>

        <Callout
          title={t('Propose a futures market on any underlying.')}
          image={getImage(data.marketMakingImage)}
          linkText={t('Create a new market')}
          link="/market-creation"
          className="mb-space-8 md:mb-space-11"
        />


        </div>

        <Proposals />
      </Container>
    </Layout>
  )
}

export default GovernancePage

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
    marketMakingImage: file(relativePath: { eq: "market-making-image.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 580
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    forumIcon: file(relativePath: { eq: "governance-icon-forum.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    tokenInterfaceIcon: file(
      relativePath: { eq: "tool-icons/governance.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    makeProposalIcon: file(
      relativePath: { eq: "governance-icon-proposal.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
