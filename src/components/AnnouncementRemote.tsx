import React, { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import classnames from 'classnames'
import type { AppNameType, Announcement } from '../utils/announcements/schema'
import {
  useAnnouncement,
  useDismissedAnnouncement,
} from '../hooks/use-announcement'
import { ExternalLink } from './ExternalLink'

export type AnnouncementBannerProps = {
  app: AppNameType
  configUrl: string
}

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

// run only if below the allowed maximum delay ~24.8 days (https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#maximum_delay_value)
const MAX_DELAY = 2147483648

const doesStartInTheFuture = (now: Date, data: Announcement) => {
  return data.timing?.from
    ? now < data.timing.from &&
        data.timing.from.valueOf() - now.valueOf() < MAX_DELAY
    : false
}

const doesEndInTheFuture = (now: Date, data: Announcement) => {
  return data.timing?.to
    ? now < data.timing.to &&
        data.timing.to.valueOf() - now.valueOf() < MAX_DELAY
    : false
}

export const AnnouncementBanner = ({
  app,
  configUrl,
}: AnnouncementBannerProps) => {
  const [isVisible, setVisible] = useState(false)
  const { data, reload } = useAnnouncement(app, configUrl)
  const [, setDismissed] = useDismissedAnnouncement()

  useEffect(() => {
    const now = new Date()
    let stampFrom: NodeJS.Timeout
    let stampTo: NodeJS.Timeout

    if (data) {
      const startsInTheFuture = doesStartInTheFuture(now, data)
      const endsInTheFuture = doesEndInTheFuture(now, data)

      if (!startsInTheFuture) {
        setVisible(true)
      }

      if (data.timing?.from && startsInTheFuture) {
        stampFrom = setTimeout(() => {
          setVisible(true)
        }, data.timing.from.valueOf() - now.valueOf())
      }

      if (data.timing?.to && endsInTheFuture) {
        stampTo = setTimeout(() => {
          setVisible(false)
          reload()
        }, data.timing.to.valueOf() - now.valueOf())
      }
    }

    return () => {
      clearTimeout(stampFrom)
      clearTimeout(stampTo)
    }
  }, [data, reload, setVisible])

  if (!data || !isVisible) {
    return <div />
  }

  return (
    <Banner className="relative px-10">
      <div
        data-testid="app-announcement"
        className="font-alpha relative flex justify-center gap-2 text-center text-lg text-white"
      >
        <span>{data.text}</span>{' '}
        {data.urlText && data.url && (
          <ExternalLink href={data.url}>{data.urlText}</ExternalLink>
        )}
      </div>
      <button
        className="absolute right-0 top-0 flex h-full items-center justify-center p-4 text-white"
        data-testid="app-announcement-close"
        onClick={() => {
          setVisible(false)
          setDismissed(data)
        }}
      >
        <IconCross size={24} />
      </button>
    </Banner>
  )
}

export const IconCross = ({ size = 16 }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      className="fill-current"
    >
      <path d="M13.3745 3.37476L3.37453 13.3748L2.625 12.6252L12.625 2.62523L13.3745 3.37476Z" />
      <path d="M3.37453 2.62523L13.3745 12.6252L12.625 13.3748L2.625 3.37476L3.37453 2.62523Z" />
    </svg>
  )
}
