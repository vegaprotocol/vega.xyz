import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import TranslationsBanner from '../../components/TranslationsBanner'
import Container from '../../components/Container'
import Link from '../../components/UI/Link'
import GlitchTitle from '../../components/UI/GlitchTitle'
import Seo from '../../components/Seo'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const ExternalLinkPage = () => {
  const { t, i18n } = useTranslation('page.external-link')
  const [missingTranslations, setMissingTranslations] = useState(false)
  const [seconds, setSeconds] = useState(10)
  const [url, setUrl] = useState(null)

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    setUrl(urlParams.get('url'))

    const timer = setInterval(() => {
      if (seconds === 0) {
        clearInterval(timer)
        window.location.assign(url)
        return false
      } else {
        setSeconds((seconds) => seconds - 1)
      }
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [seconds])

  return (
    <div className="flex min-h-screen items-center justify-center text-black dark:text-white">
      <Seo title={t("You're leaving Vega...")} />
      <Container dataCy={'main'}>
        <div className="pt-space-4 pb-space-8 text-center md:pt-space-14 md:pb-space-14">
          <h1 className="heading-xl mx-auto mb-space-6 max-w-[45rem]">
            <GlitchTitle>
              <Trans t={t}>You're leaving Vega.xyz</Trans>
            </GlitchTitle>
          </h1>
          <p className="body-xl mx-auto mb-space-4 max-w-[40rem]">
            <Trans t={t}>
              The link you are following is not hosted by Vega. You will be
              redirected in
            </Trans>{' '}
            {seconds}...
          </p>
          {url && (
            <p className="body-xl">
              <a
                href={url}
                className="underline hover:no-underline"
                rel="noreferrer"
              >
                {url}
              </a>
            </p>
          )}
        </div>
      </Container>
    </div>
  )
}

export default ExternalLinkPage

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
  }
`
