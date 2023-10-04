import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import EpochCountdown from '../../components/EpochCountdown'
// import Stars from '../../components/Svg/Stars'
import Button from '../../components/UI/Button'
import Link from '../../components/UI/Link'
import GenericTile from '../../components/UI/GenericTile'
import { getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import LiquidityProvisionRewards from '../../components/Rewards/LiquidityProvisionRewards'
import TradingRewards from '../../components/Rewards/TradingRewards'
import MarketCreationRewards from '../../components/Rewards/MarketCreationRewards'
import MarketMakingRewards from '../../components/Rewards/MarketMakingRewards'
//import { useStakingApy } from '../../hooks/use-staking-apy'

const RewardsPage = ({ data }) => {
  const { t, i18n } = useTranslation('page.rewards')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  // const {
  //   loading: loadingApy,
  //   data: dataApy,
  //   error: errorApy,
  // } = useStakingApy()

  // const Apy = ({ className }) => {
  //   return (
  //     <div className={`relative max-w-[37.5rem] lg:max-w-none ${className}`}>
  //       <div>
  //         <Stars className="hidden h-auto w-full lg:block" />
  //         <div className="bg-moshed2 bg-cover bg-clip-text bg-center text-[3rem] leading-[1.2] text-transparent lg:absolute lg:top-1/2 lg:left-0 lg:right-0 lg:-translate-y-1/2 lg:text-center lg:text-[3.5rem] lg:leading-[1.1]">
  //           {loadingApy && <Trans t={t}>Loading...</Trans>}

  //           {errorApy && (
  //             <div className="text-[1.5rem]">
  //               <Trans t={t}>Can't fetch APY right now...</Trans>
  //             </div>
  //           )}

  //           {dataApy && (
  //             <div>
  //               <div>
  //                 <Trans t={t}>APY</Trans> {dataApy.apy}%*
  //               </div>
  //               <div className="font-not-glitched bg-moshed bg-clip-text text-[1.2rem] lg:text-[1.5rem]">
  //                 {dataApy.totalRewardsThisEpoch}{' '}
  //                 <Trans t={t}>$VEGA paid out this epoch</Trans>
  //               </div>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <Layout>
      <Seo
        title={t('Rewards')}
        description={t('Get rewarded for participating in the future of DeFi.')}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="mb-space-8 pt-space-5 md:flex md:justify-between md:pt-space-6 lg:pt-space-10">
          <div>
            <h1 className="heading-l mb-space-8">
              <Trans t={t}>Rewards</Trans>
            </h1>
            <div className="body-xl max-w-[50rem]">
              <Trans t={t}>
                Rewards on Vega are designed to allow any Vega network
                participant to incentivise user behaviour and are paid at the
                end of each epoch.
              </Trans>
            </div>
          </div>
          <div className="shrink-0">
            <Button
              variant="secondary"
              to="https://governance.vega.xyz/rewards"
              className="mt-space-2 md:mt-0"
            >
              <Trans t={t}>Rewards I've earned</Trans>
            </Button>
          </div>
        </div>

        <div className="my-space-6">
          <EpochCountdown />
        </div>

        <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
          <div className="my-space-6 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:gap-8 xl:grid-cols-4">
            <TradingRewards />
            <MarketMakingRewards />
            <LiquidityProvisionRewards />
            <MarketCreationRewards />
          </div>

          <div className="prose-p:body-l prose max-w-[55rem] text-vega-light-400 dark:text-vega-dark-400">
            <p>
              <Trans t={t}>
                Anyone can fund a reward pool of any type and can customise that
                reward pool to reward specific markets or settlement assets if
                desired.
              </Trans>{' '}
            </p>
            <p>
              <Trans t={t}>
                To learn more about rewards, or to find out how to fund your own
                rewards,{' '}
                <Link
                  className="text-vega-black dark:text-vega-white"
                  to="https://docs.vega.xyz/mainnet/concepts/trading-on-vega/fees-rewards"
                >
                  visit the docs
                </Link>
              </Trans>
            </p>
          </div>
        </div>

        <h2 className="heading-l mb-space-9 max-w-[48rem]">
          <Trans t={t}>Incentives and Bounties</Trans>
        </h2>
        <div className="mb-space-10 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          <GenericTile
            image={getImage(data.iconBounties)}
            title={t('Bounties')}
            link={{
              to: 'https://github.com/vegaprotocol/bounties/',
              title: t('Bounties'),
            }}
          >
            <Trans t={t}>
              Participate in developer bounties and get rewarded for your
              commitment.
            </Trans>
          </GenericTile>
          <GenericTile
            image={getImage(data.iconSecurity)}
            title={t('Security issues')}
            link={{
              to: '/bug-bounties',
              title: t('Report a security issue'),
            }}
          >
            <Trans t={t}>
              Found a software security issue? Report it to us and earn rewards
              by finding bugs that affect the Vega Network.
            </Trans>
          </GenericTile>
          <GenericTile
            image={getImage(data.iconFairground)}
            title={t('Fairground incentives')}
            link={{
              to: 'https://fairground.wtf/',
              title: t('Fairground'),
            }}
          >
            <Trans t={t}>
              Earn rewards for helping to find bugs and battle harden Vega's
              Testnet.
            </Trans>
          </GenericTile>
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
