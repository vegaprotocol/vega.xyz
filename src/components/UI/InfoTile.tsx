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
  children: React.ReactNode
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
    <div className="flex flex-col justify-between rounded-[1.875rem] border p-space-5">
      <div>
        {image && <GatsbyImage image={image} alt="" className="mb-space-5" />}
        <div className="heading-s mb-space-4">{title}</div>
        {children && (
          <div className="body-l text-vega-light-400 dark:text-vega-dark-400">
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
          <Button to={link.to} className="mt-space-2">
            {link.title}
          </Button>
        </div>
      )}
    </div>
  )
}

export default InfoTile
