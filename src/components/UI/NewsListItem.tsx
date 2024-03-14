import React from 'react'
import SquareBullet from '../Svg/SquareBullet'
import Button from './Button'
import Link from '../UI/Link'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

export interface Link {
  url: string
  title: string
}

export interface NewsListItemProps {
  title: string
  children: React.ReactNode
  date: string
  image?: IGatsbyImageData
  location?: string
  links?: Link[]
}

const NewsList = ({
  title,
  children,
  date,
  image,
  location,
  links,
}: NewsListItemProps) => {
  const { i18n, t } = useTranslation('component.news-item')

  return (
    <div className="mb-space-6 border-b border-vega-light-200 pb-space-6 dark:border-vega-dark-200 md:mb-space-6 md:pb-space-6">
      <div className="grid grid-cols-12 gap-x-space-6">
        <div className="col-span-12 md:col-span-6">
          <div className="heading-xs !m-0 !mb-space-2">
            {links && links[0]?.url ? (
              <Link to={links[0].url} hideArrow={true}>
                {title}
              </Link>
            ) : (
              title
            )}
          </div>
          <div className="mb-space-4 flex gap-x-space-4">
            <div className="inline-block">
              <SquareBullet size="10" />
              <Trans t={t}>Insight</Trans>
            </div>
            {location && (
              <div>
                <SquareBullet size={6} /> {location}
              </div>
            )}
            {date && (
              <div className="text-vega-light-300 dark:text-vega-dark-300">
                <SquareBullet size={6} />
                {date}
              </div>
            )}
          </div>
          <div className="mb-space-4 text-vega-light-400 dark:text-vega-dark-400">
            {children}
          </div>

          {links &&
            links.map((link, idx) => (
              <div key={idx} className="mb-space-3 last:mb-0">
                <Button to={link.url} variant="secondary">
                  {link.title}
                </Button>
              </div>
            ))}
        </div>
        <div className="col-span-12 mt-space-6 md:col-span-6 md:mt-0">
          {image &&
            links &&
            (links[0].url ? (
              <Link to={links[0].url} hideArrow={true}>
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

export default NewsList
