import * as React from 'react'
import { Link } from 'gatsby-plugin-react-i18next'

export interface LinkWrapperProps {
  to: string
  children: React.ReactNode
  className?: string
}

const LinkWrapper = ({ to, children, className }: LinkWrapperProps) => {
  const isExternal = to.startsWith('http') || to.startsWith('/external-link')

  if (isExternal) {
    return (
      <a href={to} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    )
  } else {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }
}

export default LinkWrapper
