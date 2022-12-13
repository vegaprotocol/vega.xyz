import React from 'react'
import Container from '../../Container'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const ConditionalContainer = ({ condition, children }) =>
  condition ? children : <Container>{children}</Container>

const BlockD = (props) => {
  const { i18n, t } = useTranslation('page.key-concepts')

  return (
    <div className="pt-20 md:pt-32">
      <ConditionalContainer condition={props.diagramFlush}>
        <div className="mb-6">{props.diagram}</div>
      </ConditionalContainer>
      <Container>
        <>
          <div className="pt-6 md:grid md:grid-cols-2 md:gap-x-12" lang="en">
            <div>
              {props.comingSoon && (
                <div className="mb-space-2 inline-block rounded bg-vega-pink px-space-3 py-px text-[0.875rem] uppercase text-white">
                  <Trans t={t}>Coming soon</Trans>
                </div>
              )}
              <h2 className="title-m md:title-l max-w-[40rem] break-words pb-6">
                {props.title}
              </h2>
            </div>
            <div className="prose dark:prose-invert md:text-lg">
              {props.children}
            </div>
          </div>
        </>
      </Container>
    </div>
  )
}

export default BlockD
