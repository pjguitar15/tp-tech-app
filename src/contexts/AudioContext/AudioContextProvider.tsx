import React, { useState, ReactNode, useEffect, useRef } from 'react'
import { AudioContext, AudioContextType } from './AudioContext'
import applauseSoundEffect from '../../assets/sound/applause-sound-effect.mp3'
import prayerSoundEffect from '../../assets/sound/prayer.mp3'
import eogManseiSoundEffect from '../../assets/sound/eog-mansei.wav'

const AudioContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isClapPlaying, setIsClapPlaying] = useState(false)
  const [isPrayerPlaying, setIsPrayerPlaying] = useState(false)
  const [isEogManseiPlaying, setIsEogManseiPlaying] = useState(false)

  const [clapAudio] = useState(new Audio(applauseSoundEffect))
  const [prayerAudio] = useState(new Audio(prayerSoundEffect))
  const [eogManseiAudio] = useState(new Audio(eogManseiSoundEffect))

  const toggle = (item: string) => {
    if (item === 'Clap SFX') {
      setIsClapPlaying(!isClapPlaying)
    }

    if (item === 'Prayer Music') {
      setIsPrayerPlaying(!isPrayerPlaying)
    }

    if (item === 'Eog Mansei') {
      setIsEogManseiPlaying(!isEogManseiPlaying)
    }
  }

  const handleReset = () => {
    clapAudio.pause()
    clapAudio.currentTime = 0
    prayerAudio.pause()
    prayerAudio.currentTime = 0
    eogManseiAudio.pause()
    eogManseiAudio.currentTime = 0

    setIsClapPlaying(false)
    setIsPrayerPlaying(false)
    setIsEogManseiPlaying(false)
  }

  const contextValue: AudioContextType = {
    toggle,
    isClapPlaying,
    isPrayerPlaying,
    isEogManseiPlaying,
    handleReset,
  }

  useEffect(() => {
    isClapPlaying ? clapAudio.play() : clapAudio.pause()
    isPrayerPlaying ? prayerAudio.play() : prayerAudio.pause()
    isEogManseiPlaying ? eogManseiAudio.play() : eogManseiAudio.pause()
  }, [isClapPlaying, isPrayerPlaying, isEogManseiPlaying])

  useEffect(() => {
    const handleClapEnded = () => {
      setIsClapPlaying(false)
    }

    const handlePrayerEnded = () => {
      setIsPrayerPlaying(false)
    }

    const handleEogManseiEnded = () => {
      setIsEogManseiPlaying(false)
    }

    clapAudio.addEventListener('ended', handleClapEnded)
    prayerAudio.addEventListener('ended', handlePrayerEnded)
    eogManseiAudio.addEventListener('ended', handleEogManseiEnded)

    return () => {
      clapAudio.removeEventListener('ended', handleClapEnded)
      prayerAudio.removeEventListener('ended', handlePrayerEnded)
      eogManseiAudio.removeEventListener('ended', handleEogManseiEnded)
    }
  }, [])

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  )
}

export default AudioContextProvider
