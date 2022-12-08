import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export interface CalloutTileProps {
  icon?: string
  title: string
  description: string
}

const CalloutTile = ({ icon, title, description }: CalloutTileProps) => {
  return (
    <div>
      {icon && <img src={icon} className="mb-space-4" alt="" />}
      <div className="heading-xs">{title}</div>
      {description && (
        <div className="body-m text-vega-light-400 dark:text-vega-dark-400">
          {description}
        </div>
      )}
    </div>
  )
}

export default CalloutTile
