import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import EpochCountdown from '../../components/EpochCountdown'
import RewardFees from '../../components/RewardFees'
import Button from '../../components/UI/Button'
import Tag from '../../components/UI/Tag'
import GenericTile from '../../components/UI/GenericTile'
//import Stars from '../../components/Svg/Stars'
import { getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const RewardsPage = ({ data }) => {
  const { t, i18n } = useTranslation('page.rewards')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  // const Apy = ({ className }) => {
  //   return (
  //     <div className={`relative max-w-[37.5rem] lg:max-w-none ${className}`}>
  //       <Stars className="hidden h-auto w-full lg:block" />
  //       <div className="font-glitch-all bg-moshed2 bg-cover bg-clip-text text-[3rem] leading-none text-transparent lg:absolute lg:top-1/2 lg:left-0 lg:right-0 lg:-translate-y-1/2 lg:text-center lg:text-[5rem]">
  //         <div>APY 29.9%</div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <Layout>
      <Seo
        title={t('Develop with Vega')}
        description={t(
          'Get access to the Vega APIs, contribute to the source code, earn bounties and be rewarded for building the future of DeFi.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mb-space-8 pt-space-5 md:flex md:justify-between md:pt-space-6 lg:pt-space-7">
          <div>
            <Tag className="mb-space-4">
              <Trans t={t}>Develop</Trans>
            </Tag>
            <h1 className="heading-l mb-space-8">
              <Trans t={t}>Rewards</Trans>
            </h1>
            <div className="body-xl">
              <Trans t={t}>
                Rewards are paid out from the treasury at the end of an epoch.
              </Trans>
            </div>
          </div>
          <div>
            <Button
              variant="secondary"
              to="https://token.vega.xyz/rewards"
              className="mt-space-2 md:mt-0"
            >
              <Trans t={t}>Rewards I've earned</Trans>
            </Button>
          </div>
        </div>
        <EpochCountdown />
        <RewardFees />
        <div className="body-l max-w-[47.5rem]">
          <div className="text-vega-light-400 dark:text-vega-dark-400">
            <Trans t={t}>
              Any Vega network participant with assets can use the rewards
              functionality to incentivise behaviours they would like to see in
              a market for trading, liquidity provision.
            </Trans>{' '}
          </div>
          <Button
            variant="secondary"
            className="mt-space-2"
            to="https://docs.fairground.vega.xyz/docs/trading-questions/#trading-rewards"
          >
            <Trans t={t}>Create your own reward</Trans>
          </Button>
        </div>

        <div className="my-space-10 rounded-lg border border-vega-light-200 bg-vega-light-100 p-space-5 dark:border-vega-dark-200 dark:bg-vega-dark-100 md:my-space-11 md:flex md:flex-row md:gap-x-6">
          <div>
            <div className="body-xl mb-space-3">
              <Trans t={t}>Staking rewards</Trans>
            </div>
            <p className="body-l text-vega-light-300 dark:text-vega-dark-300">
              <Trans t={t}>
                Nominate a validator and earn treasury rewards for each full
                epoch staked, as well as a share of trading fees.
              </Trans>
            </p>
            {/* <Apy className="lg:hidden max-w-[17.75rem] mb-6" /> */}
            <div className="mt-space-5 grid grid-cols-1 gap-6 md:flex md:items-center md:gap-6">
              <div>
                <Button to="https://token.vega.xyz/">
                  <Trans t={t}>Staking</Trans>
                </Button>
              </div>
              <Button variant="secondary" to="https://console.fairground.wtf/">
                <Trans t={t}>Become a validator</Trans>
              </Button>
            </div>
          </div>
          {/* <Apy className="hidden lg:block" /> */}
        </div>

        <h2 className="heading-l mb-space-9 max-w-[48rem]">
          <Trans t={t}>Incentives and Bounties</Trans>
        </h2>
        <div className="mb-space-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          <GenericTile
            image={getImage(data.iconBounties)}
            title={t('Bounties')}
            description={t(
              'Participate in developer bounties and get rewarded for your commitment.'
            )}
            link={{
              to: 'https://github.com/vegaprotocol/bounties/',
              title: t('Bounties'),
            }}
          />
          <GenericTile
            image={getImage(data.iconSecurity)}
            title={t('Security issues')}
            description={t(
              'Found a software security issue? Report it to us and earn rewards by finding bugs that affect the Vega Network.'
            )}
            link={{
              to: '/bug-bounties',
              title: t('Report a security issue'),
            }}
          />
          <GenericTile
            image={getImage(data.iconFairground)}
            title={t('Fairground incentives')}
            description={t(
              "Earn rewards for helping to find bugs and battle harden Vega's Testnet."
            )}
            link={{
              to: 'https://fairground.wtf/',
              title: t('Fairground'),
            }}
          />
        </div>
      </Container>
    </Layout>
  )
}

export default RewardsPage

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
    iconBounties: file(
      relativePath: { eq: "contribute-icons/ambassador.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconSecurity: file(
      relativePath: { eq: "contribute-icons/builders-club.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconFairground: file(
      relativePath: { eq: "contribute-icons/feedback.png" }
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
