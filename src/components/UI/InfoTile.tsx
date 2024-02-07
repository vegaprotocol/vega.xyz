import * as React from 'react'
import Link from './Link'
import Button from './Button'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export interface Link {
  to: string
  title: string
}

export interface GenericTileProps {
  title: string
  image?: IGatsbyImageData
  children?: React.ReactNode
  subline?: string
  link?: Link
}

const InfoTile = ({
  title,
  image,
  subline,
  link,
  children,
}: GenericTileProps) => {
  return (
    <div className="flex flex-col justify-between rounded-[1.875rem] bg-vega-light-100 p-space-5 dark:bg-vega-dark-100">
      <div>
        {image && <GatsbyImage image={image} alt="" className="mb-space-5" />}
        <div className="mb-space-4 text-[1.5rem] leading-[1.2]">{title}</div>
        {children && (
          <div className="text-[1.125rem] text-vega-light-400 dark:text-vega-dark-400">
            {children}
          </div>
        )}
        {subline && (
          <div className="body-s mt-space-4 text-vega-light-300 dark:text-vega-dark-300">
            {subline}
          </div>
        )}
      </div>
      {link && (
        <div>
          <Button variant="secondary" to={link.to} className="mt-space-2">
            {link.title}
          </Button>
        </div>
      )}
    </div>
  )
}

export default InfoTile
