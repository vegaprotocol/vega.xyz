import React from 'react'
import Button from '../components/UI/Button'
import SquareBullet from './Svg/SquareBullet'
import Link from '../components/UI/Link'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'
import { GatsbyImage } from 'gatsby-plugin-image'

const Talk = ({ talk, image }) => {
  const { t } = useTranslation('component.talk')

  return (
    <div
      className="mb-space-6 border-b border-vega-light-200 pb-space-6 dark:border-vega-dark-200 md:mb-space-6 md:pb-space-6"
      id={`talk${talk.fields.slug}`}
    >
      <div className="grid grid-cols-12 gap-x-space-6">
        <div className="col-span-12 md:col-span-6">
          <div>
            <div className="copy-s mb-2 w-full">
              {talk.frontmatter?.links?.length > 0 &&
              talk.frontmatter.links[0]?.link ? (
                <Link to={talk.frontmatter.links[0].link} hideArrow={true}>
                  {talk.frontmatter.title}
                </Link>
              ) : (
                talk.frontmatter.title
              )}
            </div>

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

          <div className="w-full dark:prose-invert">
            <div
              className="prose mb-space-4 text-vega-light-400 dark:text-vega-dark-400"
              dangerouslySetInnerHTML={{ __html: talk.html }}
            />
            {talk.frontmatter.links &&
              talk.frontmatter.links.map((link, idx) => {
                return (
                  <div key={idx} className="mb-space-3 last:mb-0">
                    <Button to={link.link} variant="secondary">
                      {link.title}
                    </Button>
                  </div>
                )
              })}
          </div>
        </div>
        <div className="col-span-12 mt-space-6 md:col-span-6 md:mt-0">
          {image &&
            (talk.frontmatter?.links?.length > 0 &&
            talk.frontmatter.links[0]?.link ? (
              <Link to={talk.frontmatter.links[0].link} hideArrow={true}>
                <GatsbyImage image={image} alt="" className="max-w-[20rem]" />
              </Link>
            ) : (
              <GatsbyImage image={image} alt="" className="max-w-[20rem]" />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Talk
