import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import ImmersiveBannerCover from '../../components/UI/ImmersiveBannerCover'
import Developers from '../../components/Svg/Developers'
import IconGithub from '../../components/Svg/OutlineIcons/Github'
import IconDocumentation from '../../components/Svg/OutlineIcons/Documentation'
import IconProgrammaticTrading from '../../components/Svg/OutlineIcons/ProgrammaticTrading'
import IconDiscord from '../../components/Svg/OutlineIcons/Discord'
import IconSecurity from '../../components/Svg/OutlineIcons/Security'
import LinkWrapper from '../../components/UI/LinkWrapper'

import { getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Box = ({ title, icon, link }) => {
  return (
    <LinkWrapper to={link}>
      <div className="flex h-full flex-col items-center justify-center rounded-xl bg-vega-light-100 p-space-5 hover:bg-vega-light-200 dark:bg-vega-dark-100 hover:dark:bg-vega-dark-200">
        {icon}
        <div className="body-s mt-space-4 text-center uppercase leading-none">
          {title}
        </div>
      </div>
    </LinkWrapper>
  )
}

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
          <div className="mx-auto mb-space-9 text-center">
            <h1 className="mb-space-2 text-[56px]">
              <Trans t={t}>Developers</Trans>
            </h1>
            <div className="body-xl mx-auto max-w-[25rem] text-vega-light-300 text-current dark:text-vega-dark-300 lg:max-w-[34rem]">
              <Trans t={t}>
                Explore Vega's technical documentation, build integrations via
                APIs, or contribute to our open source repositories on Github
              </Trans>
            </div>
          </div>
          <div className="mx-auto mb-space-9 w-full max-w-[45.25rem] md:mb-space-12">
            <Developers />
          </div>
          <div className="mb-space-10 md:mb-space-11 lg:mb-space-13">
            <h2 className="mb-space-7 text-center text-[40px]">
              <Trans t={t}>Getting Started</Trans>
            </h2>
            <div className="mx-auto mb-space-9 grid max-w-[72rem] grid-cols-2 gap-space-5 md:mb-space-14 md:grid-cols-3 lg:grid-cols-6">
              <Box
                title={t('Github')}
                icon={<IconGithub />}
                link="https://github.com/vegaprotocol/"
              />
              <Box
                title={t('Documentation')}
                icon={<IconDocumentation />}
                link="https://docs.vega.xyz/"
              />
              <Box
                title={t('Programmatic Trading')}
                icon={<IconProgrammaticTrading />}
                link="/programmatic-trading"
              />
              <Box
                title={t('Report a security issue')}
                icon={<IconSecurity />}
                link="/bug-bounties"
              />
              <Box
                title={t('Discord')}
                icon={<IconDiscord />}
                link="https://vega.xyz/discord"
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
  }
`
