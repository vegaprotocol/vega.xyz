import React from 'react'
import LinkWrapper from './LinkWrapper'
import LinkArrow from '../Svg/LinkArrow'

export interface ActionButtonProps {
  to: string
  children: React.ReactNode
}

const ActionButton = ({ to, children }: ActionButtonProps) => {
  const isExternal = to.startsWith('http')
  const buttonClass = `h-full inline-block p-space-3 pb-space-5 !pr-space-8 md:p-space-4 md:pb-space-7 w-full title-xs md:title-s before:absolute relative z-10 before:bottom-1.5 before:left-0 before:right-0 inline-block dark:bg-black bg-white border before:border-t before:border-current border-current dark:border-white hover:-top-1.5 transition-[top] duration-75`
  return (
    <LinkWrapper to={to}>
      <div className={buttonClass}>
        {children}{' '}
        {isExternal && (
          <LinkArrow className="mt-space-2 md:absolute md:top-space-4 md:right-space-4 md:mt-0" />
        )}
      </div>
    </LinkWrapper>
  )
}

export default ActionButton
