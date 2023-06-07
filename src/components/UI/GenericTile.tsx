import * as React from 'react'
import Link from '../../components/UI/Link'
import Button from '../../components/UI/Button'
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

const GenericTile = ({
  title,
  image,
  subline,
  link,
  children,
}: GenericTileProps) => {
  return (
    <div className="mb-space-4 flex flex-col justify-between border p-space-5">
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
        <Button to={link.to} width="full" className="mt-space-6">
          {link.title}
        </Button>
      )}
    </div>
  )
}

export default GenericTile
