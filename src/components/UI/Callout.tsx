import React from 'react'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import LinkWrapper from './LinkWrapper'
import ArrowRight from '../Svg/ArrowRight'

export interface CalloutProps {
  title: string
  subtitle?: string
  link: string
  linkText: string
  image?: IGatsbyImageData
  className?: string
}

const Callout = ({
  title,
  subtitle,
  link,
  linkText,
  image,
  className,
}: CalloutProps) => {
  return (
    <div
      className={`rounded-lg border border-vega-light-200 bg-vega-light-100 dark:border-vega-dark-200 dark:bg-vega-dark-100 md:flex md:flex-row md:gap-x-6 ${
        className ? className : ''
      }`}
    >
      <div className="p-6">
        <div className="body-xl">{title}</div>
        {subtitle && (
          <div className="body-l text-vega-light-300 dark:text-vega-dark-300">
            {subtitle}
          </div>
        )}
        {link && linkText && (
          <LinkWrapper
            className="body-l mt-space-5 block text-base underline underline-offset-8 hover:no-underline"
            to={link}
          >
            {linkText}
            <ArrowRight className="ml-2 inline-block" />
          </LinkWrapper>
        )}
      </div>
      {image && (
        <GatsbyImage
          image={image}
          objectFit="contain"
          objectPosition="center bottom"
          alt=""
          className="align-self-bottom mx-auto block shrink-0 md:max-w-[50%]"
        />
      )}
    </div>
  )
}

export default Callout
