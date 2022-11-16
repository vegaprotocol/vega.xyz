import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Tag from '../../components/UI/Tag'
import Button from '../../components/UI/Button'
import Wormhole from '../../components/Svg/Wormhole'
import Incentives from '../../components/Incentives'
import GlitchTitle from '../../components/UI/GlitchTitle'
import ImmersiveBannerCover from '../../components/UI/ImmersiveBannerCover'
import LeadingLine from '../../components/LeadingLine'
import BoxLink from '../../components/BoxLink'
import ActionButton from '../../components/UI/ActionButton'
import StarCrossed from '../../components/Svg/StarCrossed'
import BlogPosts from '../../components/BlogPosts'
import { getImage } from 'gatsby-plugin-image'
import { StaticImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const DevelopPage = ({ data }) => {
  const { i18n, t } = useTranslation('page.develop')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })
  return (
    <Layout>
      <Seo
        title={t('Develop with Vega')}
        description={t(
          'Get access to the Vega APIs, contribute to the source code, earn bounties and be rewarded for building the future of DeFi.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <div dataCy={'main'} className="pt-space-5 md:pt-space-6 lg:pt-space-7">
        <Container hideXOverflow={true}>
          <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
            <div className="md:grid md:grid-cols-12">
              <div className="relative z-10 col-span-8 col-start-1 row-span-full lg:pb-[8vw]">
                <h1>
                  <Tag>Develop</Tag>
                </h1>
                <div className="title-m md:title-l lg:title-xxl mb-4 mt-4 max-w-[38.75rem]">
                  <Trans t={t}>Develop on Vega</Trans>
                </div>
                <LeadingLine className="max-w-[30rem] text-current">
                  <Trans t={t}>
                    Contribute to our open source repositories on GitHub or
                    create software using Vega — and earn rewards.
                  </Trans>
                </LeadingLine>
                <div className="mt-12 hidden md:block">
                  <Button to="https://docs.vega.xyz/mainnet/concepts/new-to-vega">
                    <Trans t={t}>Explore the docs</Trans>
                  </Button>

                  <Button
                    to="https://github.com/vegaprotocol"
                    className="ml-space-4"
                  >
                    <Trans t={t}>Get the code</Trans>
                  </Button>
                </div>
              </div>
              <div className="relative col-span-6 col-start-7 row-span-full md:mt-0">
                <div className="md:translate-x-20 md:translate-y-12 md:scale-125 lg:translate-x-1/4">
                  <Wormhole />
                </div>
              </div>
            </div>
            <div className="mt-6 md:hidden">
              <Button to="https://docs.vega.xyz/mainnet/concepts/new-to-vega">
                <Trans t={t}>Explore the docs</Trans>
              </Button>
              <div className="mt-space-4">
                <Button to="https://github.com/vegaprotocol">
                  <Trans t={t}>Get the code</Trans>
                </Button>
              </div>
            </div>
          </div>

          <div className="mx-auto mb-space-10 max-w-[72.5rem] md:mb-space-11 lg:mb-space-13">
            <ImmersiveBannerCover
              title={t('Join the builders club')}
              text={t(
                'Get support building on top of the Vega protocol and access exclusive builder club bounties.'
              )}
              backgroundImage={getImage(data.bannerBg)}
              image={getImage(data.buildersClubVegaBond)}
              link1={{
                to: 'https://vegaprotocol.typeform.com/to/YgOgiGqF',
                text: t('Apply now'),
              }}
              link2={{
                to: 'https://discord.com/channels/720571334798737489/732948871948533791',
                text: t("See whats's going on"),
              }}
            />
          </div>

          <Incentives />

          <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
            <StarCrossed />

            <h2 className="title-m md:title-l mx-auto mt-6 max-w-[43.75rem] text-center">
              <Trans t={t}>
                Build decentralised apps, bots and trading clients with our APIs
              </Trans>
            </h2>

            <div className="mb-12 mt-12 grid grid-cols-1 gap-x-5 gap-y-14 md:grid-cols-2 xl:grid-cols-2">
              <BoxLink
                title={t('REST')}
                text={t(
                  'The ubiquitous protocol for the web, Vega has a set of REST APIs that map directly onto equivalent gRPC API service methods.'
                )}
                linkTitle={t('Get Started')}
                link="https://docs.vega.xyz/mainnet/api/rest/overview"
              />

              <BoxLink
                title={t('gRPC')}
                text={t(
                  "For fast and efficient communication with Vega's APIs, gRPC supports near real time streaming of updates from Vega and is the transport of choice for many web3 apps."
                )}
                linkTitle={t('Get Started')}
                link="https://docs.vega.xyz/mainnet/api/grpc/vega/vega.proto"
              />

              <BoxLink
                title={t('GraphQL')}
                text={t(
                  'Like gRPC, GraphQL supports near real time streaming of updates from Vega. It uses websockets under the hood but follows the specification for streaming as set by GraphQL.'
                )}
                linkTitle={t('Get Started')}
                link="https://docs.vega.xyz/mainnet/graphql"
              />

              <BoxLink
                title={t('Wallet')}
                text={t(
                  'Allows programmatic access to signing and key management and is used to sign transactions with a private and public key pair when submitting orders or other commands to a Vega Node.'
                )}
                linkTitle={t('Get Started')}
                link="https://docs.vega.xyz/mainnet/tools/vega-wallet"
              />
            </div>
          </div>

          <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
            <div className="mb-24">
              <div className="mb-8 flex items-end justify-between">
                <h2 className="title-m md:title-l max-w-[15rem] md:max-w-[26rem]">
                  <Trans t={t}>Featured tutorials</Trans>
                </h2>
                <div className="hidden md:block">
                  <Button to="https://www.youtube.com/watch?v=7ZqIER8KF9E&list=PLtgXvHMJ2nYKco68-NzWWI0PnjZGAc9I2">
                    <Trans t={t}>Video tutorials</Trans>
                  </Button>
                </div>
              </div>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div className="aspect-w-16 aspect-h-9">
                  <a
                    href="https://www.youtube.com/watch?v=hpsHUCU5MwY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage
                      src="../../images/vega-wallet-video-poster.jpg"
                      alt="Vega Wallet Mac OS"
                      placeholder="none"
                      layout="constrained"
                      width={1200}
                      height={679}
                    />
                  </a>
                </div>
                <div className="aspect-w-16 aspect-h-9">
                  <a
                    href="https://www.youtube.com/watch?v=rzOxpWrnv64"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StaticImage
                      src="../../images/vega-deposits-withdrawals-poster.jpg"
                      alt="Deconstructing Vega - Deposits & Withdrawals"
                      placeholder="none"
                      layout="constrained"
                      width={1200}
                      height={679}
                    />
                  </a>
                </div>
              </div>
              <div className="md:hidden">
                <Button to="https://www.youtube.com/watch?v=7ZqIER8KF9E&list=PLtgXvHMJ2nYKco68-NzWWI0PnjZGAc9I2">
                  <Trans t={t}>Video tutorials</Trans>
                </Button>
              </div>
            </div>
            <BlogPosts />
          </div>

          <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
            <h2 className="heading-l text-center">
              <GlitchTitle color="red">
                <Trans t={t}>Where next?</Trans>
              </GlitchTitle>
            </h2>

            <div className="mx-auto mt-12 grid max-w-[12rem] gap-6 md:max-w-[52.5rem] md:grid-cols-3">
              <ActionButton to="https://vega.xyz/discord/">
                <Trans t={t}>Say hello on Discord</Trans>
              </ActionButton>
              <ActionButton to="https://community.vega.xyz/">
                <Trans t={t}>Explore the forum</Trans>
              </ActionButton>
              <ActionButton to="/#roadmap">
                <Trans t={t}>See the roadmap</Trans>
              </ActionButton>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default DevelopPage

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
    bannerBg: file(relativePath: { eq: "gradient-builders-club.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 800
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    buildersClubVegaBond: file(
      relativePath: { eq: "builders-club-vegabond.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
