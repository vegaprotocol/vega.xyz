import * as React from 'react'
import { addLineBreakIfTwoWords } from '../../utils/tools'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'

export interface TeamTileProps {
  title: string
  image?: IGatsbyImageData
  body?: string | React.ReactNode
  children: React.ReactNode
}

const TeamTile = ({ title, image, body, children }: TeamTileProps) => {
  return (
    <div className="flex flex-col justify-between rounded-[1.875rem] border border-current border-vega-light-300 p-space-5 dark:border-vega-dark-300 lg:p-space-6">
      <div className="md:flex md:flex-row md:justify-between md:gap-x-space-5">
        {image && (
          <GatsbyImage
            image={image}
            objectFit="contain"
            objectPosition="center top"
            alt=""
            className="md:align-self-top mb-space-4 shrink-0 md:order-2"
          />
        )}
        <div>
          <div className="heading-m mb-space-4 max-w-[25rem] md:order-1">
            <div
              dangerouslySetInnerHTML={{
                __html: addLineBreakIfTwoWords(title),
              }}
            />
          </div>
          <div className="body-l text-vega-light-400 dark:text-vega-dark-400">
            {body}
          </div>
        </div>
      </div>
      {children && <div className="mt-space-5">{children}</div>}
    </div>
  )
}

export default TeamTile
