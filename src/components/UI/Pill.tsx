import React, { useRef } from 'react'

interface Props {
  active: boolean
  children: React.ReactNode
}

const lightVariant =
  'bg-vega-light-100 text-vega-light-400 hover:bg-vega-dark-100 hover:text-vega-dark-400'
const darkVariant =
  'dark:bg-vega-dark-100 dark:text-vega-dark-400 dark:hover:bg-white dark:hover:text-vega-light-400'

const lightActiveVariant = 'dark:bg-vega-light-100 dark:text-vega-light-400'
const darkActiveVariant = 'bg-vega-dark-100 text-vega-dark-400'

const Pill = ({ active = false, children }: Props) => (
  <div
    className={`font-not-glitched rounded-sm bg-vega-light-100 py-1.5 px-space-3 text-[0.75rem] uppercase leading-none ${
      active
        ? `${lightActiveVariant} ${darkActiveVariant}`
        : `${lightVariant} ${darkVariant}`
    }`}
  >
    {children}
  </div>
)

export default Pill
