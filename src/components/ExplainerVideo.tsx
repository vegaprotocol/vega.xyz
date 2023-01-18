import React, { useState, useRef } from 'react'
import ExplainerVideoSrcWebM from '../video/vega-explainer-video-vp8.webm'
import ExplainerVideoSrcMp4 from '../video/vega-explainer-video.mp4'
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
        <source type="video/webm" src={ExplainerVideoSrcWebM} />
        <source type="video/mp4" src={ExplainerVideoSrcMp4} />
      </video>
    </div>
  )
}

export default ExplainerVideo
