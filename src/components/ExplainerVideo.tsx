import React, { useState, useRef } from 'react'
import ExplainerVideoSrc from '../video/vega-explainer-video-vp8.webm'
import ExplainerVideoCover from '../images/explainer-video-cover.jpg'

const ExplainerVideo = () => {
  const [showVideo, setShowVideo] = useState(false)
  const video = useRef<HTMLVideoElement>(null)

  const playVideo = () => {
    setShowVideo(true)
    console.log(video.current)
    video.current?.play()
  }

  return (
    <div className="relative mx-auto mt-space-10 max-w-[46.875rem]">
      {!showVideo && (
        <button className="absolute inset-0 z-10" onClick={() => playVideo()}>
          <img src={ExplainerVideoCover} className="h-auto w-full" alt="" />
        </button>
      )}
      <video className={`h-auto w-full`} controls ref={video}>
        <source type="video/webm" src={ExplainerVideoSrc} />
      </video>
    </div>
  )
}

export default ExplainerVideo
