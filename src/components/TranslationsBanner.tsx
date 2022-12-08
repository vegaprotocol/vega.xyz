import React from 'react'
import Container from './Container'
import Globe from './Svg/Globe'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

export interface TranslationsBannerProps {
  className?: string
}

const TranslationsBanner = ({ className }: TranslationsBannerProps) => {
  const { t } = useTranslation('component.translations-banner')

  return (
    <div
      className={`mb-space-5 bg-vega-purple p-5 text-white ${
        className ? className : ''
      }`}
    >
      <Container>
        <div className="flex items-center justify-between gap-x-8">
          <div className="grow text-base leading-[1.4] md:text-[1.125rem]">
            <Trans t={t}>
              Fluent in this language? Help us translate the page.
            </Trans>
            <br className="hidden xl:block" />{' '}
            <Trans t={t}>
              <a
                href="https://github.com/vegaprotocol/vega.xyz/#internationalisation"
                target="_blank"
                rel="noreferrer"
                className="underline hover:no-underline"
              >
                Click here to contribute
              </a>
              .
            </Trans>
          </div>
          <div className="shink-0">
            <Globe />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default TranslationsBanner
