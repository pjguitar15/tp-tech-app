import { useAudioContext } from '../../contexts/AudioContext/AudioContext'
import { IoStopSharp } from 'react-icons/io5'
import PlayPauseIcon from './PlayPauseIcon'
import { SoundLinksType } from './Navbar'

const KeyboardShortcut = ({ item }: { item: SoundLinksType }) => {
  const { toggle, handleReset } = useAudioContext()
  return (
    <div
      onClick={(event) => {
        event.stopPropagation()
        if (item.title !== `Stop/Reset`) {
          toggle(item.title)
        } else {
          handleReset()
        }
      }}
      className='flex gap-3 items-center cursor-pointer hover:scale-105 duration-300 justify-between'
    >
      <div className='flex gap-2'>
        {item.title === 'Stop/Reset' ? (
          <>
            <IoStopSharp className='text-3xl' />
          </>
        ) : (
          <PlayPauseIcon isPlaying={item.isPlaying} />
        )}

        <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
      </div>
      <div className='bg-[#5D4483] px-3 rounded py-1 font-semibold'>
        {item.shortcut}
      </div>
    </div>
  )
}

export default KeyboardShortcut
