import React, { useState } from 'react'
import Seo from '../../components/Seo'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import ButtonLink from '../../components/ButtonLink'
import BoxTitle from '../../components/BoxTitle'
import Fairground from '../../components/Fairground'
import LeadingLine from '../../components/LeadingLine'
import Callout from '../../components/UI/Callout'
import { getImage } from 'gatsby-plugin-image'
import CommunityResponsive from '../../components/Svg/Community/Hero/Responsive'
import ToolBox from '../../components/ToolBox'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const CommunityPage = ({ data }) => {
  const { i18n, t } = useTranslation('page.community')
  const [missingTranslations, setMissingTranslations] = useState(false)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  return (
    <Layout>
      <Seo
        title={t('Community')}
        description={t(
          'Join the Vega community, where a fair finance future is being co-created - starting with derivatives.'
        )}
      />
      {missingTranslations && <TranslationsBanner />}
      <Container dataCy={'main'}>
        <div className="pt-6 lg:pt-16">
          <h1>
            <BoxTitle text={t('Community')} />
          </h1>
          <h2 className="title-m font-glitched md:title-l mb-4 mt-4 max-w-[48rem] md:mb-6">
            <Trans t={t}>Join the Vega community</Trans>
          </h2>

          <div className="max-w-[48rem]">
            <LeadingLine className="!mb-14">
              <Trans t={t}>
                Earn rewards for contributing to the future of finance.
              </Trans>
            </LeadingLine>

            <ButtonLink
              text={t('Join us on Discord')}
              link="https://vega.xyz/discord"
            ></ButtonLink>
          </div>
        </div>
      </Container>
      <div className="relative mb-10 md:-top-6">
        <CommunityResponsive />
      </div>
      <Container>
        <h2 className="title-m font-glitched md:title-l mb-14">
          <Trans t={t}>Where we are</Trans>
        </h2>

        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          <ToolBox
            title="Discord"
            text={t(
              "Hangout, chat, get support, suggest new content and art - we're all here!"
            )}
            link="https://vega.xyz/discord"
            icon={getImage(data.iconDiscord)}
          />
          <ToolBox
            title={t('Forum')}
            text={t(
              'Discuss governance and governance proposals on Vega Networks.'
            )}
            link="https://community.vega.xyz/c/governance/25"
            icon={getImage(data.iconForum)}
          />
          <ToolBox
            title={t('Telegram')}
            text={t('Official Telegram Group for Vega Protocol.')}
            link="https://t.me/vegacommunity/"
            icon={getImage(data.iconTelegram)}
          />
          <ToolBox
            title={t('Twitter')}
            text="@vegaprotocol"
            link="https://twitter.com/vegaprotocol"
            icon={getImage(data.iconTwitter)}
          />
          <ToolBox
            title={t('Substack')}
            text={t(
              "Roll up! Roll up! Vega's bi-weekly highlights newsletter."
            )}
            link="https://vegacommunity.substack.com/subscribe"
            icon={getImage(data.iconSubstack)}
          />
          <ToolBox
            title={t('YouTube')}
            text={t(
              'Video tutorials, presentations, development updates, and milestones of the Vega project.'
            )}
            link="https://www.youtube.com/vegaprotocol"
            icon={getImage(data.iconYouTube)}
          />
          <ToolBox
            title={t('Twitch')}
            text={t('Weekly live-streams, Thursdays 6pm BST/UTC+1!')}
            link="https://www.twitch.tv/vegaprotocol"
            icon={getImage(data.iconTwitch)}
          />
          <ToolBox
            title={t('Medium')}
            text={t('Latest news on the Vega blog.')}
            link="https://medium.com/@Vega_Protocol"
            icon={getImage(data.iconMedium)}
          />
        </div>

        <Callout
          title={t('Upcoming events')}
          subtitle={t(
            'Livestreams, conferences, research office hours and community calls'
          )}
          linkText={t('Events and meetups')}
          link="/community/events"
          image={getImage(data.eventsGraphic)}
          className="mb-space-10"
        />

        <h2 className="title-m font-glitched md:title-l mb-14">
          <Trans t={t}>Contribute and get rewarded</Trans>
        </h2>

        <div className="mb-16 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
          <ToolBox
            title={t('Ambassador program')}
            text={t(
              "Leading community members share what we're building with those that need to hear it — and get rewarded."
            )}
            link="/community/ambassadors/"
            icon={getImage(data.iconAmbassador)}
          />
          <ToolBox
            title={t('Builders Club')}
            text={t(
              'For developers, coders, hackers, dreamers who want to create software on top of Vega.'
            )}
            link="https://vega.xyz/discord/"
            icon={getImage(data.iconBuildersClub)}
          />
          <ToolBox
            title={t('Translate')}
            text={t(
              'For the talented multi-linguists who want to support the project with translations.'
            )}
            link="https://github.com/vegaprotocol/vega.xyz#internationalisation"
            icon={getImage(data.iconTranslation)}
          />
          <ToolBox
            title={t('Feedback')}
            text={t('Feedback and feature requests')}
            link="https://github.com/vegaprotocol/feedback/discussions"
            icon={getImage(data.iconFeedback)}
          />
          <ToolBox
            title={t('Github')}
            text={t(
              'Contribute to the source code, and get building with our APIs.'
            )}
            link="https://github.com/vegaprotocol/"
            icon={getImage(data.iconGithub)}
          />
          <ToolBox
            title={t('Docs')}
            text={t('Share feedback, make suggestions and help translate.')}
            link="https://docs.vega.xyz/"
            icon={getImage(data.iconDocs)}
          />
        </div>

        <Callout
          title={t('Incentives')}
          subtitle={t('Get rewarded for your efforts testing the network')}
          linkText={t('Earn rewards')}
          link="https://fairground.wtf/"
          image={getImage(data.incentivesGraphic)}
          className="mb-space-10"
        />
      </Container>
      <Fairground />
    </Layout>
  )
}

export default CommunityPage

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
    ambassadorImage: file(relativePath: { eq: "ghost-ambassador.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    builderImage: file(relativePath: { eq: "ghost-builder.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 600
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
    iconForum: file(relativePath: { eq: "social-icons/forum.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconTelegram: file(relativePath: { eq: "social-icons/telegram.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconTwitter: file(relativePath: { eq: "social-icons/twitter.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconSubstack: file(relativePath: { eq: "social-icons/substack.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconYouTube: file(relativePath: { eq: "social-icons/youtube.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconTwitch: file(relativePath: { eq: "social-icons/twitch.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconMedium: file(relativePath: { eq: "social-icons/medium.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconAmbassador: file(
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
    iconBuildersClub: file(
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
    iconTranslation: file(
      relativePath: { eq: "contribute-icons/translation.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconFeedback: file(relativePath: { eq: "contribute-icons/feedback.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 96
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    iconGithub: file(relativePath: { eq: "contribute-icons/github.png" }) {
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
    incentivesGraphic: file(relativePath: { eq: "incentives-graphic.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1080
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
    eventsGraphic: file(relativePath: { eq: "events-graphic.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 1080
          layout: CONSTRAINED
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`
