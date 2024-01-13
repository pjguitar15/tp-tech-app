import React, { useState, ReactNode, useEffect } from 'react'
import { AudioContext, AudioContextType } from './AudioContext'
import applauseSoundEffect from '../../assets/sound/applause-sound-effect.mp3'
import prayerSoundEffect from '../../assets/sound/prayer.mp3'

const AudioContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isClapPlaying, setIsClapPlaying] = useState(false)
  const [isPrayerPlaying, setIsPrayerPlaying] = useState(false)

  const [clapAudio] = useState(new Audio(applauseSoundEffect))
  const [prayerAudio] = useState(new Audio(prayerSoundEffect))

  const toggle = (item: string) => {
    if (item === 'Clap SFX') {
      setIsClapPlaying(!isClapPlaying)
    }

    if (item === 'Prayer Music') {
      setIsPrayerPlaying(!isPrayerPlaying)
    }
  }

  const contextValue: AudioContextType = {
    toggle,
    isClapPlaying,
    isPrayerPlaying,
  }

  useEffect(() => {
    isClapPlaying ? clapAudio.play() : clapAudio.pause()
    isPrayerPlaying ? prayerAudio.play() : prayerAudio.pause()
  }, [isClapPlaying, isPrayerPlaying])

  useEffect(() => {
    const handleClapEnded = () => {
      setIsClapPlaying(false)
    }

    const handlePrayerEnded = () => {
      setIsPrayerPlaying(false)
    }

    clapAudio.addEventListener('ended', handleClapEnded)
    prayerAudio.addEventListener('ended', handlePrayerEnded)

    return () => {
      clapAudio.removeEventListener('ended', handleClapEnded)
      prayerAudio.removeEventListener('ended', handlePrayerEnded)
    }
  }, [])

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  )
}

export default AudioContextProvider
