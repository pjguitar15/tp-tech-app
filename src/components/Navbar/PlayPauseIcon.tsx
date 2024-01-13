import React from 'react'
import { IoMdPause, IoMdPlay } from 'react-icons/io'

type PlayPauseIconProps = {
  isPlaying: boolean
}

const PlayPauseIcon: React.FC<PlayPauseIconProps> = ({ isPlaying }) => {
  return isPlaying ? (
    <IoMdPause className='text-3xl' />
  ) : (
    <IoMdPlay className='text-3xl' />
  )
}

export default PlayPauseIcon
