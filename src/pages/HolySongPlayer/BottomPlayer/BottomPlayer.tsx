import { IoPlaySharp } from 'react-icons/io5'
import { IoPlaySkipBackSharp } from 'react-icons/io5'
import { IoPlaySkipForwardSharp } from 'react-icons/io5'
import { IoMdPause } from 'react-icons/io'
import { IoVolumeMediumSharp } from 'react-icons/io5'
import { useHolySongContext } from '../../../contexts/HolySongContext/HolySongContext'

const PlayerButtons = () => {
  const { toggle, isHolySongPlaying, currentHolySongItem } =
    useHolySongContext()
  const buttonStyle =
    'text-gray-300 hover:text-white hover:scale-105 cursor-pointer duration-100'

  return (
    <div className='flex gap-3 items-center'>
      <IoPlaySkipBackSharp className={`text-2xl ${buttonStyle}`} />
      {isHolySongPlaying ? (
        <IoMdPause
          onClick={() => {
            console.log(currentHolySongItem?.title)
            toggle()
          }}
          className={`text-4xl ms-1 ${buttonStyle}`}
        />
      ) : (
        <IoPlaySharp
          onClick={() => toggle()}
          className={`text-4xl ms-1 ${buttonStyle}`}
        />
      )}

      <IoPlaySkipForwardSharp className={`text-2xl ${buttonStyle}`} />
    </div>
  )
}

const TitleAndNumber = () => {
  const { currentHolySongItem } = useHolySongContext()
  return (
    <div>
      <h5 className='font-semibold'>{currentHolySongItem?.title}</h5>
      <p className='text-sm text-slate-400'>
        Holy Song #{currentHolySongItem?.number}
      </p>
    </div>
  )
}

const DurationAndVolume = () => {
  const { currTime, currAudioDuration, currSeconds } = useHolySongContext()
  return (
    <div className='flex items-center gap-4'>
      <div>
        {currSeconds < 60 ? '00:' + currTime : currTime} - {currAudioDuration}
      </div>
      <div className='flex items-center gap-2'>
        <IoVolumeMediumSharp className='text-xl' />
        <div className='bg-black w-24 rounded'>
          <div className='bg-white h-1 w-[80%] rounded'></div>
        </div>
      </div>
    </div>
  )
}

const SongProgressBar = () => {
  const { audioProgress } = useHolySongContext()
  return (
    <div
      className={`bg-white absolute top-0 right-0 left-0 z-10 h-1`}
      style={{ width: `${audioProgress}%` }}
    ></div>
  )
}

const BottomPlayer = () => {
  const containerStyle = 'px-12 py-4 absolute bottom-0 w-full'
  const overlayStyle = 'absolute bg-[#16061E] opacity-75 inset-0'
  const textContainerStyle = 'text-white relative'
  const flexCenterStyle = 'flex justify-center'
  const flexEndStyle = 'flex justify-end'

  return (
    <div className={containerStyle}>
      <SongProgressBar />
      <div className={overlayStyle}></div>
      <div className='grid grid-cols-3'>
        <div className={`${textContainerStyle}`}>
          <TitleAndNumber />
        </div>
        <div className={`${textContainerStyle} ${flexCenterStyle}`}>
          <PlayerButtons />
        </div>
        <div className={`${textContainerStyle} ${flexEndStyle}`}>
          <DurationAndVolume />
        </div>
      </div>
    </div>
  )
}

export default BottomPlayer
