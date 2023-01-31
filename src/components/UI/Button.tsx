import React from 'react'
import LinkWrapper from './LinkWrapper'
import LinkArrow from '../Svg/LinkArrow'

export interface ButtonProps {
  variant?: string
  width?: string
  to: string
  children: React.ReactNode
  className?: string
  colorMode?: string
}

const Button = ({
  variant = 'primary',
  width,
  to,
  children,
  className,
  colorMode = 'auto',
}: ButtonProps) => {
  const isExternal = to.startsWith('http') || to.startsWith('/external-link')
  let buttonWrapperStyles
  let buttonBaseStyles
  let buttonBgColorStyles
  let buttonWrapperColorStyles

  let colorClasses =
    'dark:bg-white dark:text-black bg-black text-white border-black dark:border-white'

  const buttonStyles =
    'text-[0.9375rem] leading-1 tracking-[0.01rem] transition-[top] relative z-20 hover:-top-1.5 top-0 inline-block px-10 py-3 border border-current uppercase'

  if (colorMode === 'white') {
    buttonWrapperColorStyles = 'text-white'
    colorClasses = 'bg-white text-black border-white'
    buttonBgColorStyles = `border-white`
  } else if (colorMode === 'black') {
    buttonWrapperColorStyles = 'text-black'
    colorClasses = 'bg-black text-white border-black'
    buttonBgColorStyles = `border-black`
  } else {
    buttonBgColorStyles = `dark:border-white border-black`
  }

  // secondary
  if (variant === 'secondary') {
    buttonWrapperStyles = `inline-block relative ${buttonWrapperColorStyles}`
    buttonBaseStyles = `text-base underline hover:no-underline underline-offset-8`
  }
  // hero
  else if (variant === 'hero') {
    buttonWrapperStyles = `inline-block relative`
    buttonBaseStyles = `${colorClasses} ${buttonStyles} ${
      width === 'full' ? 'w-full text-center' : ''
    }`
  }
  //primary
  else {
    buttonWrapperStyles = `inline-block relative ${
      width === 'full' ? 'w-full' : ''
    }`
    buttonBaseStyles = `${buttonStyles} ${
      width === 'full' ? 'w-full text-center' : ''
    }`
    buttonBgColorStyles = `border-current`
  }

  return (
    <div className={`${buttonWrapperStyles} ${className ? className : ''}`}>
      <LinkWrapper to={to}>
        <div className={buttonBaseStyles}>
          {children} {isExternal && <LinkArrow className="ml-2 inline-block" />}
        </div>
        {variant !== 'secondary' && (
          <div
            className={`absolute inset-0 border border-t-0 ${buttonBgColorStyles}`}
          ></div>
        )}
      </LinkWrapper>
    </div>
  )
}

export default Button
