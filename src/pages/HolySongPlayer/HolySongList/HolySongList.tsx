import SongListItem from './SongListItem'
import { HOLY_SONGS } from './holySongsData'

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
      {HOLY_SONGS.map((item: SongListItemType, index) => (
        <SongListItem key={index} item={item} />
      ))}
    </div>
  )
}

export default HolySongList
