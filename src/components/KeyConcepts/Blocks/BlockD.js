import React from 'react'
import Container from '../../Container'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const ConditionalContainer = ({ condition, children }) =>
  condition ? children : <Container>{children}</Container>

const BlockD = (props) => {
  const { t } = useTranslation('page.key-concepts')

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
                <div className="mb-space-3 inline-block rounded bg-vega-pink px-space-3 py-px text-[0.875rem] uppercase text-white">
                  <Trans t={t}>Coming soon</Trans>
                </div>
              )}
              <h2 className="mb-3 max-w-[30rem] text-[2rem] leading-none md:mb-6 md:max-w-none md:text-[2.5rem]">
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
