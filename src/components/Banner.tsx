import React from 'react'
import type { ReactNode } from 'react'
import classnames from 'classnames'
export interface BannerProps {
  children?: ReactNode
  className?: string
}

export const Banner = ({ className, children }: BannerProps) => {
  const bannerClasses = classnames(
    "bg-[url('https://static.vega.xyz/assets/img/banner-bg.jpg')] bg-cover bg-center bg-no-repeat",
    'p-4',
    className
  )

  return <div className={bannerClasses}>{children}</div>
}
