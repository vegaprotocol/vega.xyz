import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import LinkArrow from '../Svg/LinkArrow'

const NavigationItem = ({ text, link }) => {
  const naviationItemClasses =
    'relative z-10 inline-block cursor-pointer px-3 py-3 underline-offset-8 transition-colors hover:text-vega-mid-grey group-hover:underline xl:px-6'

  return (
    <>
      {link.startsWith('http') ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={naviationItemClasses}
        >
          {text}
          <LinkArrow className="relative -top-px ml-2 inline" />
        </a>
      ) : (
        <div>
          <Link to={link} className={naviationItemClasses}>
            {text}
          </Link>
        </div>
      )}
    </>
  )
}

export default NavigationItem
