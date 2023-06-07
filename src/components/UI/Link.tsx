import * as React from 'react'
import LinkWrapper from './LinkWrapper'
import LinkArrow from '../Svg/LinkArrow'

export interface LinkProps {
  to: string
  children: React.ReactNode
  hideArrow?: boolean
  className?: string
}

const Link = ({ to, children, hideArrow = false, className }: LinkProps) => {
  const isExternal = to.startsWith('http')

  return (
    <LinkWrapper to={to} className={className}>
      {children}
      {isExternal && !hideArrow && <LinkArrow className="ml-2 inline-block" />}
    </LinkWrapper>
  )
}

export default Link
