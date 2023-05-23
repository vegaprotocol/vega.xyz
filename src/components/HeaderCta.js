import { Link } from 'gatsby'
import React from 'react'
import LinkArrow from './Svg/LinkArrow'

const HeaderCta = ({ text, link, className }) => {
  const isExternal =
    link.startsWith('http') || link.startsWith('/external-link')
  const linkClass = `md:max-w-none group button-link relative inline-block z-10 ${className}`
  let buttonClass = `dark:text-black text-white dark:bg-white bg-black leading-1 text-[0.9375rem] tracking-[0.01rem] transition-[top] relative z-20 group-hover:-top-1.5 top-0 inline-block px-6 py-2 border-current`
  const buttonBgClass = `absolute z-10 inset-0 border border-current `

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={linkClass}>
        <div className={buttonClass}>
          {text} &nbsp;&nbsp;
          <LinkArrow className="inline" />
        </div>
        <div className={buttonBgClass}></div>
      </a>
    )
  } else {
    return (
      <Link to={link} className={linkClass}>
        <div className={buttonClass}>{text}</div>
        <div className={buttonBgClass}></div>
      </Link>
    )
  }
}

export default HeaderCta
