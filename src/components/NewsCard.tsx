import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import LinkArrow from './Svg/LinkArrow'
import { Link } from 'gatsby-plugin-react-i18next'

const LinkWrapper = ({
  condition,
  internalWrapper,
  externalWrapper,
  children,
}) => (condition ? externalWrapper(children) : internalWrapper(children))

interface NewsCardProps {
  title: string
  text: string
  link: string
  image?: string
  date?: string
  category?: string
  extra?: string
  className?: string
}

const NewsCard = ({
  title,
  text,
  link,
  image,
  date,
  category,
  extra,
  className,
}: NewsCardProps) => {
  return (
    <div className={className ? className : ''}>
      <LinkWrapper
        condition={link.startsWith('https://')}
        externalWrapper={(children) => (
          <a href={link} target="_blank" rel="noreferrer">
            {children}
          </a>
        )}
        internalWrapper={(children) => <Link to={link}>{children}</Link>}
      >
        {image ? (
          <div
            className="aspect-h-9 aspect-w-16 mb-4 border border-white bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ) : (
          <div>
            <StaticImage
              className="mb-4"
              src="../images/block-placeholder.jpg"
              alt=""
              placeholder="none"
              layout="constrained"
              width={1200}
              height={679}
            />
          </div>
        )}
        {title && (
          <div className="font-glitched mb-2 text-[1.3125rem] leading-[1.2]">
            {title}

            <LinkArrow className="ml-2 inline-block" />
          </div>
        )}
        {text && (
          <div
            className="mb-2 break-words text-base text-vega-grey"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
        <div className="text-[0.875rem] text-vega-mid-grey">
          {date} {extra && <>&bull; {extra}</>}
        </div>
        {category && (
          <div className="mt-3 inline-block bg-vega-border-grey px-2 py-0.5 text-[0.75rem] uppercase text-white dark:bg-white/10 dark:text-vega-grey">
            {category}
          </div>
        )}
      </LinkWrapper>
    </div>
  )
}

export default NewsCard
