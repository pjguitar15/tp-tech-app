import { createContext, useContext } from 'react'

export interface AudioContextType {
  toggle: (item: string) => void
  isClapPlaying: boolean
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

const useAudioContext = (): AudioContextType => {
  const context = useContext(AudioContext)

  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider')
  }

  return context
}

export { AudioContext, useAudioContext }
