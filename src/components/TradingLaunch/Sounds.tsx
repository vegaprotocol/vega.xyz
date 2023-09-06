import React, { useState, useEffect } from 'react'
import useSound from 'use-sound'
import GlitchSound from '../../audio/glitch.wav'
import DroneSound from '../../audio/drone.wav'

const useAudio = () => {
  const [audio] = useState(new Audio(GlitchSound))
  const [playing, setPlaying] = useState(false)

  const togglePlayback = () => {
    setPlaying(!playing)
  }

  useEffect(() => {
    if (playing) {
      audio.play()
    } else {
      audio.pause()
    }
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, togglePlayback]
}

export default useAudio
