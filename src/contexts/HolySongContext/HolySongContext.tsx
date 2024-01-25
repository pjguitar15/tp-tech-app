import { createContext, useContext } from 'react'

/* number: 2,
    title: 'Grace of the Holy Garden',
    duration: '2:18',
    audio: graceOfTheHolyGarden, */

export interface HolySongItemType {
  number: number
  title: string
  duration: string
}

export interface HolySongContextType {
  toggle: () => void
  isHolySongPlaying: boolean
  audioProgress: number
  currAudioDuration: string
  currTime: string
  currSeconds: number
  currentHolySongItem: HolySongItemType | null
  holySongSelect: (item: HolySongItemType) => void
  // handleReset: () => void
}

const HolySongContext = createContext<HolySongContextType | undefined>(
  undefined
)

const useHolySongContext = (): HolySongContextType => {
  const context = useContext(HolySongContext)

  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider')
  }

  return context
}

export { HolySongContext, useHolySongContext }
