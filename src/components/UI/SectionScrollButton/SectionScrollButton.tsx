import React, { useRef } from 'react'
import './section-scroll-button.css'

interface Props {
  active?: boolean
  inverse?: boolean
  children: React.ReactNode
}

const lightVariant =
  'bg-vega-light-100 text-vega-light-400 hover:bg-vega-dark-100 hover:text-vega-dark-400'
const darkVariant =
  'dark:bg-vega-dark-100 dark:text-vega-dark-400 dark:hover:bg-white dark:hover:text-vega-light-400'

const lightActiveVariant = 'bg-vega-dark-100 text-vega-dark-400'
const darkActiveVariant = 'dark:bg-vega-light-100 dark:text-vega-light-400'

const SectionScrollButton = ({
  active = false,
  children,
  inverse = false,
}: Props) => {
  const getClassVariants = () => {
    if (inverse) {
      return active
        ? `${darkActiveVariant} ${lightActiveVariant}`
        : `${darkVariant} ${lightVariant}`
    } else {
      return active
        ? `${lightActiveVariant} ${darkActiveVariant}`
        : `${lightVariant} ${darkVariant}`
    }
  }

  return (
    <div
      className={`section-scroll-button font-not-glitched rounded-[100px] border border-solid border-transparent py-space-3 px-space-6 text-center text-[1rem] leading-none md:text-left ${getClassVariants()} `}
    >
      {children}
    </div>
  )
}

export default SectionScrollButton
