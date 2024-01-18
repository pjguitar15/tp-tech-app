import React from 'react'
import { SongListItemType } from './HolySongList'

const SongListItem: React.FC<{ item: SongListItemType }> = ({ item }) => {
  return (
    <div className='px-6 py-3 relative'>
      <div className='flex px-6 relative z-10 text-lg font-semibold'>
        <div className='w-4/12'>{item.number}</div>
        <div className='w-6/12'>{item.title}</div>
        <div className='w-2/12'>{item.duration}</div>
      </div>
      <div className='absolute inset-0 bg-[#16061E] opacity-50 w-full h-full z-0'></div>
    </div>
  )
}

export default SongListItem
