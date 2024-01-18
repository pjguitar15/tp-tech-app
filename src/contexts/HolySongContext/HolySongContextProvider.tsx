import React, { useState, ReactNode, useEffect } from 'react'
import { HolySongContext, HolySongContextType } from './HolySongContext'
import graceOfTheHolyGarden from '../../assets/holy-songs/grace-of-the-holy-garden.wav'

const HolySongContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHolySongPlaying, setIsHolySongPlaying] = useState(false)
  const [holySongAudio] = useState(new Audio(graceOfTheHolyGarden))

  const toggle = () => setIsHolySongPlaying(!isHolySongPlaying)
  // const handleReset = () => {
  //   holySongAudio.pause()
  //   holySongAudio.currentTime = 0
  //   setIsHolySongPlaying(false)
  // }

  useEffect(() => {
    isHolySongPlaying ? holySongAudio.play() : holySongAudio.pause()
  }, [isHolySongPlaying])

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
    // handleReset,
  }

  return (
    <HolySongContext.Provider value={contextValue}>
      {children}
    </HolySongContext.Provider>
  )
}

export default HolySongContextProvider
