import React, { useState } from 'react'
import { graphql, Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import GovernanceResponsive from '../../components/Svg/Governance/Hero/Responsive'
import ToolBox from '../../components/ToolBox'
import ButtonLink from '../../components/ButtonLink'
import PageHeader from '../../components/UI/PageHeader'
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
            As a token holder, you can submit a proposal to create or update a
            market, create or update a settlement asset, change network
            parameters, initiate a transfer of funds from the treasury, or make
            a freeform proposal (for changes that will not change network
            behaviour). For each, you will define specific inputs for a set list
            of parameters, which are validated by the nodes before entering into
            the voting period you set. Then it's time to rally the community on
            the forum to vote for your proposal.
          </Trans>
        </p>

        <p>
          <Trans t={t}>
            The number of tokens needed to make a proposal differs by proposal
            type, for example{' '}
            <NetworkParameter
              param="governance_proposal_market_minProposerBalance"
              formatForVega={true}
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
              formatForVega={true}
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
            <NetworkParameter
              param="governance_proposal_market_requiredParticipation"
              expressPercentage={true}
              suffix="%"
            />{' '}
            and a majority of{' '}
            <NetworkParameter
              param="governance_proposal_market_requiredMajority"
              expressPercentage={true}
              suffix="%"
            />
            .
          </Trans>
        </p>
        <p>
          <Trans t={t}>
            If the proposal was creating a new market, once enacted it will
            remain in opening auction until it has attracted enough liquidity to
            start trading.
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
          url: 'https://docs.vega.xyz/mainnet/tutorials/proposals',
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
          url: 'https://docs.vega.xyz/mainnet/tutorials/proposals',
        },
      ],
      image: <Phase3 />,
    },
    {
      phase: t('Phase 4'),
      title: t('Vote'),
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
        title={t('Governance Home')}
        description={t(
          'Governance allows the Vega network to arrive at on-chain decisions, where tokenholders can create proposals that other tokenholders can vote to approve or reject.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mx-auto max-w-[61rem] pt-space-5 text-center md:pt-space-6 lg:pt-space-10">
          <PageHeader
            title={t('Governance')}
            description={t(
              'Vega is uncompromisingly decentralised, with all network governance taking place on-chain. Read on to find out how to propose new markets, create settlement assets, and configure the network'
            )}
          />
        </div>
      </Container>

      <Container>
        <div
          className="mx-auto mt-10 mb-space-10 grid max-w-[75rem] grid-cols-1 gap-5 md:mt-20 md:grid-cols-3 md:gap-6 lg:gap-10"
          id="governanceTools"
        >
          <ToolBox
            icon={getImage(data.forumIcon)}
            title={t('Forums')}
            link="https://community.vega.xyz/c/governance/25"
            text={t(
              'Read initial proposals and get involved in the discussion before the proposal goes to vote.'
            )}
            type="Tool"
          />
          <ToolBox
            icon={getImage(data.tokenInterfaceIcon)}
            title={t('Stake & Vote')}
            link="https://governance.vega.xyz/proposals"
            text={t('Review and vote on governance proposals.')}
            type="DAPP"
          />
          <ToolBox
            icon={getImage(data.makeProposalIcon)}
            title={t('Submit a proposal')}
            link="https://docs.vega.xyz/mainnet/concepts/governance"
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
                    You can purchase VEGA on various exchanges.
                  </Trans>
                </p>
              </div>
              <div className="absolute left-1/2 -bottom-5 -translate-x-1/2 bg-white p-3 dark:bg-black md:top-9 md:right-0 md:bottom-auto md:left-auto md:translate-x-1/2 md:rotate-[270deg]">
                <Arrow />
              </div>
            </div>
            <div className="relative border-b-2 border-current p-12 md:border-b-0 md:border-r-2 md:p-6 lg:p-12">
              <div className="title-s mb-6">
                <Trans t={t}>Stake VEGA</Trans>
              </div>
              <div className="mb-6 lg:prose-lg">
                <p className="copy-xxs lg:copy-xs">
                  <Trans t={t}>
                    Stake your VEGA tokens on the governance site to be eligible
                    to vote, note you will need to get a{' '}
                    <Link to="/wallet">wallet</Link> to do this
                  </Trans>
                </p>
              </div>
              <ButtonLink
                link="https://governance.vega.xyz/token/associate"
                text={t('Stake VEGA')}
              />
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
                link="https://governance.vega.xyz/"
                text={t('Governance App')}
              />
            </div>
          </div>
        </div>

        <div className="mb-space-8 md:mb-space-10">
          <div>
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
        </div>
        <div className="mb-space-8 md:mb-space-10">
          <Proposals />
        </div>
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
