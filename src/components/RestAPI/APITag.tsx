import React from 'react'
import Link from '../../components/UI/Link'
import Tooltip from '../../components/UI/Tooltip'
import Tippy from '@tippyjs/react'

interface APITagProps {
  children: React.ReactNode
  description: string
}

const APITag = ({ children, description }: APITagProps) => (
  <Tippy
    duration={50}
    content={
      description && (
        <div className="body-s font-not-glitched mt-2 text-left text-black dark:text-white">
          <Tooltip>{description}</Tooltip>
        </div>
      )
    }
  >
    <div className="heading-xxxs rounded bg-vega-dark-150 px-space-1 py-space-1 text-white dark:bg-vega-light-150 dark:text-black">
      {children}
    </div>
  </Tippy>
)

export default APITag
