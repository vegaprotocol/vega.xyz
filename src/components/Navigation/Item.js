import React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'
import LinkArrow from '../Svg/LinkArrow'

const NavigationItem = ({ text, link }) => {
  return (
    <li>
      {link.startsWith('http') ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-block w-full cursor-pointer py-2.5 leading-none text-vega-light-300 transition-colors hover:text-black dark:text-vega-dark-300 dark:hover:text-white"
        >
          {text}
          <LinkArrow className="relative -top-px ml-2 inline" />
        </a>
      ) : (
        <div>
          <Link
            to={link}
            className="block inline-block w-full cursor-pointer py-2.5 leading-none text-vega-dark-300 transition-colors hover:text-black dark:hover:text-white"
          >
            {text}
          </Link>
        </div>
      )}
    </li>
  )
}

export default NavigationItem
