import React, { useState, ReactNode, useEffect } from 'react'
import {
  HolySongContext,
  HolySongContextType,
  HolySongItemType,
} from './HolySongContext'
import test from '../../assets/sound/prayer.mp3'
import useSecondsToHms from '../../helpers/hooks/useSecondsToHms'
import { HOLY_SONG_AUDIOS } from './holySongAudioFiles'

const HolySongContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHolySongPlaying, setIsHolySongPlaying] = useState(false)
  const [holySongAudio, setHolySongAudio] = useState<HTMLAudioElement>(
    new Audio(test)
  )

  // for bottom player states
  const [audioProgress, setAudioProgress] = useState(0)
  const [currAudioDuration, setCurrAudioDuration] = useState('0:00')
  const [currTime, setCurrTime] = useState('0')
  const [currSeconds, setCurrSeconds] = useState(0)
  const [currentHolySongItem, setCurrentHolySongItem] =
    useState<HolySongItemType | null>(null)
  const { secondsToHms } = useSecondsToHms()

  const toggle = () => {
    setIsHolySongPlaying(!isHolySongPlaying)
  }

  const holySongSelect = (holySongItem: HolySongItemType) => {
    // console.log(holySongItem)
    // setIsHolySongPlaying(false)
    setCurrentHolySongItem(holySongItem)

    // option 1: combine 2 arrays using map() function
    // option 2: use filter function to find the audio
    // once found, set new Audio

    // setIsHolySongPlaying(true)
  }

  useEffect(() => {
    holySongAudio.pause()
    if (currentHolySongItem) {
      const newAudio = new Audio(
        HOLY_SONG_AUDIOS[currentHolySongItem.number - 1]
      )
      setHolySongAudio(newAudio)
      setIsHolySongPlaying(true)
    }
  }, [currentHolySongItem])

  useEffect(() => {
    let intervalId: number | undefined

    const updateCurrentTime = () => {
      const currentTime = holySongAudio.currentTime
      const audioDuration = holySongAudio.duration
      const durationPercentage = (currentTime / audioDuration) * 100
      // console.log(Math.floor(holySongAudio.currentTime))
      setAudioProgress(Math.ceil(durationPercentage))
      setCurrAudioDuration(secondsToHms(audioDuration))
      setCurrTime(secondsToHms(currentTime))
      setCurrSeconds(currentTime)
    }

    if (isHolySongPlaying) {
      holySongAudio.play()
      intervalId = window.setInterval(updateCurrentTime, 1000) // Log every second
    } else {
      holySongAudio.pause()
      window.clearInterval(intervalId)
    }

    // Cleanup function to clear the interval when the component unmounts or is updated
    return () => window.clearInterval(intervalId)
  }, [isHolySongPlaying, holySongAudio])

  const handleSongEnd = () => setIsHolySongPlaying(false)

  useEffect(() => {
    holySongAudio.addEventListener('ended', handleSongEnd)
    return () => {
      holySongAudio.removeEventListener('ended', handleSongEnd)
    }
  }, [holySongAudio])

  const contextValue: HolySongContextType = {
    toggle,
    isHolySongPlaying,
    audioProgress,
    currAudioDuration,
    currTime,
    currSeconds,
    currentHolySongItem,
    holySongSelect,
    // handleReset,
  }

  return (
    <HolySongContext.Provider value={contextValue}>
      {children}
    </HolySongContext.Provider>
  )
}

export default HolySongContextProvider
