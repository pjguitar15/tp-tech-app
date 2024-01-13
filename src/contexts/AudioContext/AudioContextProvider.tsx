import React, { useState, ReactNode, useEffect } from 'react'
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
    const soundToggleMap: Record<
      string,
      React.Dispatch<React.SetStateAction<boolean>>
    > = {
      'Clap SFX': setIsClapPlaying,
      'Prayer Music': setIsPrayerPlaying,
      'Eog Mansei': setIsEogManseiPlaying,
    }

    const toggleFunction = soundToggleMap[item]

    if (toggleFunction) {
      toggleFunction((prev) => !prev)
    }
  }

  const handleReset = () => {
    const audioRefs = [clapAudio, prayerAudio, eogManseiAudio]
    const setPlayingStates = [
      setIsClapPlaying,
      setIsPrayerPlaying,
      setIsEogManseiPlaying,
    ]

    audioRefs.forEach((audio, index) => {
      audio.pause()
      audio.currentTime = 0
      setPlayingStates[index](false)
    })
  }

  const contextValue: AudioContextType = {
    toggle,
    isClapPlaying,
    isPrayerPlaying,
    isEogManseiPlaying,
    handleReset,
  }

  useEffect(() => {
    const audioElements = [clapAudio, prayerAudio, eogManseiAudio]
    const playingStates = [isClapPlaying, isPrayerPlaying, isEogManseiPlaying]

    audioElements.forEach((audio, index) => {
      playingStates[index] ? audio.play() : audio.pause()
    })
  }, [isClapPlaying, isPrayerPlaying, isEogManseiPlaying])

  useEffect(() => {
    const audioElements = [clapAudio, prayerAudio, eogManseiAudio]
    const endedHandlers = [
      () => setIsClapPlaying(false),
      () => setIsPrayerPlaying(false),
      () => setIsEogManseiPlaying(false),
    ]

    audioElements.forEach((audio, index) => {
      audio.addEventListener('ended', endedHandlers[index])
    })

    return () => {
      audioElements.forEach((audio, index) => {
        audio.removeEventListener('ended', endedHandlers[index])
      })
    }
  }, [clapAudio, prayerAudio, eogManseiAudio])

  // Keyboard Shortcuts Code
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault()
      const keyMappings: { [key: string]: string } = {
        '1': 'Prayer Music',
        '2': 'Clap SFX',
        '3': 'Eog Mansei',
      }

      const soundName = keyMappings[event.key]

      if (soundName && event.ctrlKey) {
        toggle(soundName)
      }

      if (event.key === '0' && event.ctrlKey) {
        handleReset()
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [])

  return (
    <AudioContext.Provider value={contextValue}>
      {children}
    </AudioContext.Provider>
  )
}

export default AudioContextProvider
