import React, { createRef, useEffect, useState } from 'react'
import Moshed from '../../video/moshed.mp4'

export interface Params {
  className?: string
  circle?: boolean
}

const VideoBackground = ({ className, circle = false }: Params) => {
  const video = createRef<HTMLVideoElement>()
  const [replaceVideoWithPoster, setReplaceVideoWithPoster] = useState(false)
  const cssClass = `absolute left-0 top-0 h-full w-full rounded-full object-cover ${
    circle ? 'rounded-full' : ''
  }`

  useEffect(() => {
    // fix for iOS 'low power mode', if error playing
    // video then use a background image instead
    if (video.current) {
      video.current
        .play()
        .then(() => {})
        .catch((error) => {
          setReplaceVideoWithPoster(true)
        })
    }
  }, [video, replaceVideoWithPoster])

  return (
    <div className={`absolute inset-px ${className}`}>
      {replaceVideoWithPoster ? (
        <img src="/poster-image.jpg" alt="" className={cssClass} />
      ) : (
        <video
          ref={video}
          autoPlay
          muted
          loop
          playsInline
          className={cssClass}
          poster="/poster-image.jpg"
        >
          <source src={Moshed} type="video/mp4" />
        </video>
      )}
    </div>
  )
}

export default VideoBackground
