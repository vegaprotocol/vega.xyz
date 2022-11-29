import * as React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import SquareBullet from '../Svg/SquareBullet'
import Button from './Button'
import { GatsbyImage, IGatsbyImageData, getImage } from 'gatsby-plugin-image'

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
  return (
    <div className="0 mb-space-6 border-b border-vega-light-200 pb-space-6 dark:border-vega-dark-200 md:mb-space-7 md:pb-space-7 lg:mb-space-8 lg:pb-space-8">
      {image && <GatsbyImage image={image} alt="" className="mb-space-7" />}
      <div className="heading-xs !m-0 !mb-space-2">{title}</div>
      <div className="mb-space-4 flex gap-x-space-4">
        {location && (
          <div className="">
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
  )
}

export default NewsList
