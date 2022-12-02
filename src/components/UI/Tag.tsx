import React from 'react'

export interface TagProps {
  children: React.ReactNode
  className?: string
}

const Tag = ({ children, className }: TagProps) => {
  return (
    <div
      className={`inline-block border border-black py-space-1 px-space-3 text-[0.875rem] uppercase leading-none tracking-[0.01em] dark:border-white ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

export default Tag
