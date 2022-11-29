import React, { useState } from 'react'
import Layout from '../../components/Layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Container from '../../components/Container'
import BuildersClubLogo from '../../components/Svg/BuildersClub/Logo'
import FooterVegabond from '../../components/Svg/BuildersClub/FooterVegabond'
import BuildersClubHero from '../../components/Svg/BuildersClub/Hero/Responsive'
import BuildersClubHeroSmall from '../../components/Svg/BuildersClub/Hero/Small'
import { graphql } from 'gatsby'
import Seo from '../../components/Seo'
import GlitchTitle from '../../components/UI/GlitchTitle'
import LeadingLine from '../../components/LeadingLine'
import Calendar from '../../components/Calendar'
import Button from '../../components/UI/Button'
import TranslationsBanner from '../../components/TranslationsBanner'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const BuildersClubPage = ({ data }) => {
  const { t, i18n } = useTranslation('page.builders-club')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  const Rectangle = () => {
    return (
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto mt-6 hidden md:block"
      >
        <rect width="7" height="7" fill="currentColor" />
      </svg>
    )
  }

  return (
    <Layout>
      <Seo
        title={t('Builders Club')}
        description={t(
          'Join the builders club VEGA+ Team to get support building on top of the Vega protocol and access to exclusive builder bounties.'
        )}
      />
      {missingTranslations && <TranslationsBanner className="mb-0" />}
      <div dataCy={'main'}>
        <div className="bg-buildersClubHero bg-cover bg-top">
          <Container>
            <div className="md:pt-16">
              <div className="md:grid md:grid-cols-2 md:gap-x-12">
                <div className="py-16">
                  <div className="max-w-[43rem]">
                    <BuildersClubLogo className="mb-6 h-auto w-full max-w-[22.625rem]" />
                    <LeadingLine className="text-white">
                      <Trans t={t}>
                        Join the builders club VEGA+ Team to get support
                        building on top of the Vega protocol and access to
                        exclusive builder bounties.
                      </Trans>
                    </LeadingLine>
                    <div>
                      <Button
                        variant="hero"
                        to="https://vegaprotocol.typeform.com/to/YgOgiGqF"
                        colorMode="white"
                      >
                        <Trans t={t}>Apply now</Trans>
                      </Button>
                      <br className="md:hidden" />
                      <Button
                        variant="secondary"
                        to="https://discord.com/channels/720571334798737489/732948871948533791"
                        colorMode="white"
                        className="mt-6 md:ml-6 md:mt-0"
                      >
                        <Trans t={t}>Meet us on Discord</Trans>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end self-end">
                  <BuildersClubHero className="h-auto w-full max-w-[35rem]" />
                </div>
              </div>
            </div>
          </Container>
          <BuildersClubHeroSmall className="relative -mt-28 h-auto w-full md:hidden" />
        </div>
        <div className="bg-buildersClubFooterLight bg-right-bottom bg-no-repeat dark:bg-buildersClubFooter">
          <div className="my-20 text-center lg:my-32 xl:my-40">
            <Container>
              <h2 className="heading-xl font-glitched mx-auto max-w-[60rem]">
                <GlitchTitle color="blue">
                  <Trans t={t}>Free builders course for new joiners</Trans>
                </GlitchTitle>
              </h2>
            </Container>

            <div className="relative my-20">
              <Container>
                <div className="absolute left-0 right-0 top-[7.7rem] hidden h-px bg-[#404040] md:block"></div>
                <div className="relative z-10 mb-12 grid grid-cols-2 md:mb-20 md:grid-cols-4">
                  <div>
                    <GatsbyImage
                      image={getImage(data.buildersClubIcon1)}
                      alt=""
                    />
                    <Rectangle />
                    <div className="heading-xs mx-auto mt-space-4 max-w-[12rem]">
                      <Trans t={t}>Blockchains for web2 devs</Trans>
                    </div>
                  </div>
                  <div>
                    <GatsbyImage
                      image={getImage(data.buildersClubIcon2)}
                      alt=""
                    />
                    <Rectangle />
                    <div className="heading-xs mx-auto mt-space-4 max-w-[12rem]">
                      <Trans t={t}>Finance 101</Trans>
                    </div>
                  </div>
                  <div>
                    <GatsbyImage
                      image={getImage(data.buildersClubIcon3)}
                      alt=""
                    />
                    <Rectangle />
                    <div className="heading-xs mx-auto mt-space-4 max-w-[12rem]">
                      <Trans t={t}>An introduction to Vega</Trans>
                    </div>
                  </div>
                  <div>
                    <GatsbyImage
                      image={getImage(data.buildersClubIcon4)}
                      alt=""
                    />
                    <Rectangle />
                    <div className="heading-xs mx-auto mt-space-4 max-w-[12rem]">
                      <Trans t={t}>Building on Vega Parts I and II</Trans>
                    </div>
                  </div>
                </div>

                <p className="body-xl mb-12">
                  <Trans t={t}>
                    Plus access exclusive grants and bounties once you have
                    learned the basics!
                  </Trans>
                </p>

                <Button to="https://vegaprotocol.typeform.com/to/YgOgiGqF">
                  <Trans t={t}>Apply now</Trans>
                </Button>
              </Container>
            </div>
          </div>

          <Container>
            <div className="grey-box bg-vega-light-grey p-6 dark:bg-vega-box-grey dark:text-white md:p-8">
              <div className="mb-14 md:flex md:items-center md:justify-between">
                <h1 className="heading-l !m-0">
                  <Trans t={t}>What's going on</Trans>
                </h1>
                <Button to="/community/events" className="hidden md:block">
                  <Trans t={t}>View all events</Trans>
                </Button>
              </div>
              <Calendar filter="Vega Builders Club" limit={5} />
            </div>
          </Container>

          <div className="pt-20 text-center lg:pt-40">
            <Container>
              <h2 className="heading-m mx-auto max-w-[58rem]">
                <Trans t={t}>
                  The builders club team is part of the ambassadors Vega+
                  program
                </Trans>
              </h2>
              <Button variant="secondary" to="/community/ambassadors/">
                <Trans t={t}>Find out more about the Ambassadors program</Trans>
              </Button>
            </Container>
            <FooterVegabond className="mx-auto mt-16 block" />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default BuildersClubPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      translations: totalCount
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    buildersClubIcon1: file(relativePath: { eq: "builders-club-icon-1.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    buildersClubIcon2: file(relativePath: { eq: "builders-club-icon-2.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    buildersClubIcon3: file(relativePath: { eq: "builders-club-icon-3.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    buildersClubIcon4: file(relativePath: { eq: "builders-club-icon-4.png" }) {
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
