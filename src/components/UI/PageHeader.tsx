import * as React from 'react'

export interface LinkProps {
  title: string
  description: React.ReactNode
}

const PageHeader = ({ title, description }: LinkProps) => {
  return (
    <>
      <h2 className="mb-space-4 text-[2.5rem] leading-none md:text-[3.5rem]">
        {title}
      </h2>
      {description && (
        <p className="body-l mx-auto max-w-[25rem] text-vega-light-300 dark:text-vega-dark-300 md:max-w-[33.75rem]">
          {description}
        </p>
      )}
    </>
  )
}

export default PageHeader
