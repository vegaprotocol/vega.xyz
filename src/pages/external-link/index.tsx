import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Container from '../../components/Container'
import GlitchTitle from '../../components/UI/GlitchTitle'
import Seo from '../../components/Seo'
import TranslationsBanner from '../../components/TranslationsBanner'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import interstitialAllowList from '../../../interstitial-allow.json'
import NotFoundPage from '../404'

function generateGatewayLink(cid, type, hash) {
  const base = interstitialAllowList.ipfsGateway

  return base.replace('#1#', cid).replace('#2#', type) + hash
}

const ExternalLinkPage = () => {
  const { t, i18n } = useTranslation('page.external-link')
  const [missingTranslations, setMissingTranslations] = useState(false)
  const [seconds, setSeconds] = useState(5)
  const [isIPFS, setIsIPFS] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const [url, setUrl] = useState('')

  i18n.on('missingKey', (lng) => {
    setMissingTranslations(true)
  })

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const urlValue = urlParams.get('url')
    const hash = window.location.hash

    if (urlValue !== null) {
      setUrl(urlValue)
    }

    // if no URL supplied, or not in whitelist then redirect to 404
    if (
      urlValue === null ||
      !interstitialAllowList.allowedSites
        .map((url) => url.replace(/\/$/, ''))
        .includes(urlValue.replace(/\/$/, '')) // strip trailing slashes for comparison
    ) {
      try {
        if (
          urlValue &&
          interstitialAllowList.allowedIPFS.indexOf(urlValue) !== -1
        ) {
          setIsIPFS(true)
          setUrl(generateGatewayLink(urlValue, 'ipfs', hash))
        } else if (
          urlValue &&
          interstitialAllowList.allowedIPNS.indexOf(urlValue) !== -1
        ) {
          setIsIPFS(true)
          setUrl(generateGatewayLink(urlValue, 'ipns', hash))
        } else {
          setNotFound(true)
        }
      } catch (e) {
        setNotFound(true)
      }
    }

    if (notFound === false) {
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
    }
  }, [seconds])

  const message = isIPFS
    ? `We're about to redirect you to an application on IPFS`
    : `We're about to redirect you to:`
  return (
    <div>
      {notFound ? (
        <NotFoundPage />
      ) : (
        <div>
          {missingTranslations && <TranslationsBanner />}
          <div className="flex min-h-screen items-center justify-center bg-white text-black text-black dark:bg-black dark:text-white">
            <Seo title={t("You're leaving Vega.xyz")} />

            <Container dataCy={'main'}>
              <div className="pt-space-4 pb-space-8 text-center md:pt-space-14 md:pb-space-14">
                <h1 className="heading-xl mx-auto mb-space-6 max-w-[45rem]">
                  <GlitchTitle>
                    <Trans t={t}>You're leaving Vega.xyz</Trans>
                  </GlitchTitle>
                </h1>
                <p className="body-xl mx-auto mb-space-4 max-w-[40rem]">
                  <Trans t={t}>{message}</Trans>
                </p>
                <p className="body-xl mx-auto mb-space-4 max-w-[40rem]">
                  <Trans t={t}>You will be redirected in </Trans> {seconds}...
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
        </div>
      )}
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
