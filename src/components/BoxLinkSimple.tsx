import { Link } from 'gatsby'
import React from 'react'
import LinkArrow from './Svg/LinkArrow'

interface BoxLinkSimpleProps {
  text: string
  link: string
  className?: string
}

const BoxLinkSimple = ({ text, link, className }: BoxLinkSimpleProps) => {
  const isExternal =
    link.startsWith('http') || link.startsWith('/external-link')
  const buttonClass = `inline-block title-xs md:title-s before:absolute relative z-10 before:bottom-1.5 before:left-0 before:right-0 inline-block pb-5 md:pb-10 pt-4 pl-4 pr-4 md:pr-16 dark:bg-black bg-white border before:border-t before:border-current border-current dark:border-white hover:-top-1.5 transition-[top] duration-75 ${className}`

  if (isExternal) {
    return (
      <a href={link} target="_blank" rel="noreferrer" className={buttonClass}>
        <div dangerouslySetInnerHTML={{ __html: text }} />
        <div className="mt-2 md:absolute md:right-4 md:top-4 md:mt-0">
          <LinkArrow />
        </div>
      </a>
    )
  } else {
    return (
      <Link
        to={link}
        className={buttonClass}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  }
}

export default BoxLinkSimple
