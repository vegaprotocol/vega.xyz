import React from 'react'
import { Link } from 'gatsby'
import LinkArrow from './Svg/LinkArrow'
import Tag from './UI/Tag'
import { GatsbyImage } from 'gatsby-plugin-image'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const LinkWrapper = ({
  link,
  externalLinkWrapper,
  internalLinkWrapper,
  children,
}) =>
  link.startsWith('http') || link.includes('/external-link')
    ? externalLinkWrapper(children)
    : internalLinkWrapper(children)

const ToolBox = ({ icon, title, link, text, author, categories }) => {
  const { t } = useTranslation('component.tool-box')
  const isExternal = link.startsWith('http')

  return (
    <LinkWrapper
      link={link}
      internalLinkWrapper={(children) => (
        <Link to={link} className="group relative block h-full">
          {children}
        </Link>
      )}
      externalLinkWrapper={(children) => (
        <a
          target="_blank"
          rel="noreferrer"
          className="group relative block h-full"
          href={link}
        >
          {children}
        </a>
      )}
    >
      <div className="relative flex h-full flex-col justify-between border border-current bg-white p-6 group-hover:-translate-y-2 dark:bg-black">
        <div>
          <GatsbyImage image={icon} alt={title} className="mb-5" />
          <div className="title-s block">
            {title}
            {isExternal && (
              <span className="relative top-[2px] ml-2 inline-block align-top">
                <LinkArrow />
              </span>
            )}
          </div>

          {author && (
            <div className="mt-2 inline-block items-center rounded-md bg-vega-border-grey px-1.5 text-white dark:text-current">
              {author === 'Vega' && (
                <svg
                  width="12"
                  height="14"
                  viewBox="0 0 12 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="align-center mr-1.5 inline-block"
                >
                  <g fill="currentColor">
                    <path d="M5.9999 12H4V14H5.9999V12Z" />
                    <path d="M3.9999 10H2V12H3.9999V10Z" />
                    <path d="M1.9999 0H0V10H1.9999V0Z" />
                    <path d="M11.9999 8H10V10H11.9999V8Z" />
                    <path d="M9.9999 0H8V8.00001H9.9999V0Z" />
                    <path d="M6.0001 12H8V10H6.0001V12Z" />
                  </g>
                </svg>
              )}
              <div className="align-center inline-block text-[0.875rem] uppercase">
                {t('Made by {{author}}', { author: author })}
              </div>
            </div>
          )}

          <div className="copy-xs mt-4 text-vega-mid-grey">{text}</div>
        </div>
        {categories && (
          <div className="flex flex-row flex-wrap gap-space-2 pt-3">
            {categories.map((category, idx) => (
              <Tag key={idx}>{category}</Tag>
            ))}
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 hidden h-3 border-b border-l border-r border-current group-hover:block" />
    </LinkWrapper>
  )
}

export default ToolBox
