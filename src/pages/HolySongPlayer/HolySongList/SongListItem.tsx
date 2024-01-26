import React from 'react'
import { SongListItemType } from './HolySongList'
import { useHolySongContext } from '../../../contexts/HolySongContext/HolySongContext'
import { useNavigate } from 'react-router-dom'

const SongListItem: React.FC<{ item: SongListItemType }> = ({ item }) => {
  const { holySongSelect } = useHolySongContext()
  const navigate = useNavigate()
  return (
    <div
      onClick={() => {
        holySongSelect(item)
        navigate(
          `/holy-songs/lyrics/${item.title
            .replace(/%20/g, ' ')
            .replace(/ /g, '-')
            .toLowerCase()}`
        )
      }}
      className='px-6 py-3 relative hover:scale-105 duration-200 cursor-pointer'
    >
      <div className='flex px-6 relative z-10 text-lg font-semibold'>
        <div className='w-3/12'>{item.number}</div>
        <div className='w-6/12'>{item.title}</div>
        <div className='w-2/12'>{item.duration}</div>
      </div>
      <div className='absolute inset-0 bg-[#16061E] opacity-50 w-full h-full z-0'></div>
    </div>
  )
}

export default SongListItem
