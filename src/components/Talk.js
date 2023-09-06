import React from 'react'
import UppercaseLink from './UppercaseLink'
import SquareBullet from './Svg/SquareBullet'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

const Talk = ({ talk }) => {
  const { i18n, t } = useTranslation('component.talk')

  return (
    <div
      className="mb-space-6 border-b border-vega-light-200 pb-space-6 dark:border-vega-dark-200 md:mb-space-6 md:pb-space-6"
      id={`talk${talk.fields.slug}`}
    >
      <div>
        <div className="copy-s mb-2 w-full">{talk.frontmatter.title}</div>

        <div className="mb-space-4 flex gap-x-space-4">
          {talk.frontmatter.location && (
            <div>
              <SquareBullet size="10" />
              <Trans t={t}>Talk</Trans> ({talk.frontmatter.location})
            </div>
          )}

          {talk.frontmatter.date && (
            <div className="text-[0.9375rem] text-vega-mid-grey">
              <SquareBullet size="5" />
              {talk.frontmatter.date}
            </div>
          )}
        </div>
      </div>

      <div className="long-text prose mb-3 w-full dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: talk.html }} />
        {talk.frontmatter.links &&
          talk.frontmatter.links.map((link, idx) => {
            return (
              <div key={idx} className="mb-4 text-white">
                <UppercaseLink text={link.title} link={link.link} />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default Talk
