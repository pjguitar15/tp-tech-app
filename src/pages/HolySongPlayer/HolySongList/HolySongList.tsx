import React from 'react'
import SongListItem from './SongListItem'

const TEST_SONGS = [
  {
    number: 1,
    title: 'Blessing of Glory',
    duration: '3:04',
  },
  {
    number: 2,
    title: 'Grace of the Holy Garden',
    duration: '3:04',
  },
  {
    number: 3,
    title: 'New Songs of Inspiration',
    duration: '3:04',
  },
  {
    number: 4,
    title: 'Garden of Restoration',
    duration: '3:04',
  },
  {
    number: 5,
    title: 'Spring Songs of Eden',
    duration: '3:04',
  },
  {
    number: 6,
    title: 'Song of the Victors',
    duration: '3:04',
  },
]

export type SongListItemType = {
  number: number
  title: string
  duration: string
}

const HolySongList = () => {
  return (
    <div className='flex flex-col gap-2 lg:w-4/6 mx-auto py-8'>
      <div className='flex px-12 text-lg'>
        <div className='w-3/12'>#</div>
        <div className='w-6/12'>Title</div>
        <div className='w-2/12'>Duration</div>
      </div>
      {TEST_SONGS.map((item: SongListItemType, index) => (
        <SongListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default HolySongList
