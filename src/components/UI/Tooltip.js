import React from 'react'

const Tooltip = ({ children, padding = 'narrow' }) => {
  return (
    <span
      className={`block rounded-sm border border-black/20 dark:border-white/20 ${
        padding === 'narrow' ? 'p-2' : 'p-4'
      } relative break-words bg-white dark:bg-vega-box-grey`}
    >
      {children}
    </span>
  )
}

export default Tooltip
