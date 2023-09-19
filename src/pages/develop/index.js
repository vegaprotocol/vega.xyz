import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Wormhole from '../../components/Svg/Wormhole'
import ImmersiveBannerCover from '../../components/UI/ImmersiveBannerCover'
import LeadingLine from '../../components/LeadingLine'
import ToolBox from '../../components/ToolBox'
import { getImage } from 'gatsby-plugin-image'
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
        title={t('Developers')}
        description={t(
          "Explore Vega's technical documentation, build integrations via APIs, or contribute to our open source repositories on Github"
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <div data-cy={'main'} className="pt-space-5 md:pt-space-6 lg:pt-space-10">
        <Container hideXOverflow={true}>
          <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
            <div className="md:grid md:grid-cols-12">
              <div className="relative z-10 col-span-8 col-start-1 row-span-full lg:pb-[8vw]">
                <div className="title-m md:title-l lg:title-xxl mb-4 mt-space-8 max-w-[38.75rem]">
                  <h1>
                    <Trans t={t}>Developers</Trans>
                  </h1>
                </div>
                <LeadingLine className="max-w-[25rem] text-current lg:max-w-[30rem]">
                  <Trans t={t}>
                    Explore Vega's technical documentation, build integrations
                    via APIs, or contribute to our open source repositories on
                    Github
                  </Trans>
                </LeadingLine>
              </div>
              <div className="relative col-span-6 col-start-7 row-span-full md:mt-0">
                <div className="md:scale-115 md:translate-x-20 md:translate-y-12 lg:translate-x-1/4">
                  <Wormhole />
                </div>
              </div>
            </div>
          </div>

          <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
            <h2 className="title-m font-glitched md:title-l mb-14">
              <Trans t={t}>Getting Started</Trans>
            </h2>

            <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
              <ToolBox
                title="Github"
                link="https://github.com/vegaprotocol/"
                icon={getImage(data.iconGithub)}
              />
              <ToolBox
                title={t('Documentation')}
                link="https://docs.vega.xyz/"
                icon={getImage(data.iconDocs)}
              />
              <ToolBox
                title={t('Programmatic Trading')}
                link="/programmatic-trading"
                icon={getImage(data.iconGithub)}
              />
              <ToolBox
                title={t('Report a security issue')}
                link="/bug-bounties"
                icon={getImage(data.iconGithub)}
              />
              <ToolBox
                title={t('Careers')}
                link="/careers"
                icon={getImage(data.iconGithub)}
              />
              <ToolBox
                title={t('Discord')}
                link="/discord"
                icon={getImage(data.iconDiscord)}
              />
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
                to: '/builders-club',
                text: t('Find out more'),
              }}
            />
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
    iconGithub: file(relativePath: { eq: "social-icons/github.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconDocs: file(relativePath: { eq: "contribute-icons/docs.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconDiscord: file(relativePath: { eq: "social-icons/discord.png" }) {
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
