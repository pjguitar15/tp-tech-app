import React, { useState, ReactNode, useEffect } from 'react'
import { AudioContext, AudioContextType } from './AudioContext'
import clapAudio from '../../assets/sound/applause-sound-effect.mp3'

const AudioContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isClapPlaying, setIsClapPlaying] = useState(false)

  const [audio] = useState(new Audio(clapAudio))

  const toggle = (item: string) => {
    if (item === 'Clap SFX') {
      setIsClapPlaying(!isClapPlaying)
    }
  }

  const contextValue: AudioContextType = {
    toggle,
    isClapPlaying,
  }

  useEffect(() => {
    isClapPlaying ? audio.play() : audio.pause()
  }, [isClapPlaying])

  useEffect(() => {
    const handleClapEnded = () => {
      setIsClapPlaying(false)
    }

    audio.addEventListener('ended', handleClapEnded)

    return () => {
      audio.removeEventListener('ended', handleClapEnded)
    }
  }, [])

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  )
}

export default AudioContextProvider
