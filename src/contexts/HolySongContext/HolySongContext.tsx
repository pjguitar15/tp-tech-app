import { createContext, useContext } from 'react'

export interface HolySongContextType {
  toggle: () => void
  isHolySongPlaying: boolean
  audioProgress: number
  currAudioDuration: string
  currTime: string
  currSeconds: number
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
