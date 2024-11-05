import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Developers from '../../components/Svg/Developers'
import IconGithub from '../../components/Svg/OutlineIcons/Github'
import IconDocumentation from '../../components/Svg/OutlineIcons/Documentation'
import IconProgrammaticTrading from '../../components/Svg/OutlineIcons/ProgrammaticTrading'
import IconDiscord from '../../components/Svg/OutlineIcons/Discord'
import IconSecurity from '../../components/Svg/OutlineIcons/Security'
import LinkWrapper from '../../components/UI/LinkWrapper'

import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Box = ({ title, icon, link, className }) => {
  return (
    <LinkWrapper to={link} className={`col-span-6 lg:col-span-1 ${className}`}>
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
    i18n.language !== 'en' && setMissingTranslations(true)
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
            <div className="body-xl mx-auto max-w-[25rem] text-current text-vega-light-300 dark:text-vega-dark-300 lg:max-w-[34rem]">
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
            <div className="md:grid-cols-auto mx-auto mb-space-9 grid max-w-[72rem] grid-cols-12 gap-space-5 md:mb-space-14 lg:grid-cols-4">
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
                title={t('Discord')}
                icon={<IconDiscord />}
                link="https://vega.xyz/discord"
              />
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
