import * as React from 'react'

export interface LinkProps {
  title: string
  description: React.ReactNode
}

const PageHeader = ({ title, description }: LinkProps) => {
  return (
    <>
      <h1 className="mb-space-4 text-[2.5rem] leading-none md:text-[3.5rem]">
        {title}
      </h1>
      {description && (
        <p className="body-xl mx-auto max-w-[25rem] text-vega-light-300 dark:text-vega-dark-300 md:max-w-[42rem]">
          {description}
        </p>
      )}
    </>
  )
}

export default PageHeader
