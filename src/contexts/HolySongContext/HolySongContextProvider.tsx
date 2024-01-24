import React, { useState, ReactNode, useEffect } from 'react'
import { HolySongContext, HolySongContextType } from './HolySongContext'
import graceOfTheHolyGarden from '../../assets/holy-songs/grace-of-the-holy-garden.wav'

const HolySongContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHolySongPlaying, setIsHolySongPlaying] = useState(false)
  const [audioProgress, setAudioProgress] = useState(0)
  const [holySongAudio] = useState(new Audio(graceOfTheHolyGarden))

  const toggle = () => setIsHolySongPlaying(!isHolySongPlaying)
  // const handleReset = () => {
  //   holySongAudio.pause()
  //   holySongAudio.currentTime = 0
  //   setIsHolySongPlaying(false)
  // }

  useEffect(() => {
    let intervalId: number | undefined

    const updateCurrentTime = () => {
      const currentTime = holySongAudio.currentTime
      const audioDuration = holySongAudio.duration
      const durationPercentage = (currentTime / audioDuration) * 100
      // console.log(Math.floor(holySongAudio.currentTime))
      console.log(Math.ceil(durationPercentage))
      setAudioProgress(Math.ceil(durationPercentage))
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

  useEffect(() => {
    holySongAudio.addEventListener('ended', () => setIsHolySongPlaying(false))
    return () => {
      holySongAudio.removeEventListener('ended', () =>
        setIsHolySongPlaying(false)
      )
    }
  }, [])

  const contextValue: HolySongContextType = {
    toggle,
    isHolySongPlaying,
    audioProgress,
    // handleReset,
  }

  return (
    <HolySongContext.Provider value={contextValue}>
      {children}
    </HolySongContext.Provider>
  )
}

export default HolySongContextProvider
