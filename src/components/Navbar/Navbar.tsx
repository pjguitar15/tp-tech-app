import CIGLogo from '/src/assets/cig-logo.png'
import { useNavigate } from 'react-router-dom'
import { IoMusicalNotes } from 'react-icons/io5'
import { useState } from 'react'
import { IoMdPlay } from 'react-icons/io'

type SoundLinksType = {
  title: string
  shortcut: string
}

const Navbar = () => {
  const [isSoundOpen, setIsSoundOpen] = useState<boolean>(false)
  const navigate = useNavigate()

  const SOUND_LINKS = [
    {
      title: 'Prayer Music',
      shortcut: 'ctrl + 1',
    },
    {
      title: 'Clap SFX',
      shortcut: 'ctrl + 2',
    },
    {
      title: 'Eog Mansei',
      shortcut: 'ctrl + 3',
    },
    {
      title: 'STOP',
      shortcut: 'ctrl + 0',
    },
  ]

  const KeyboardShortcut = ({ item }: { item: SoundLinksType }) => {
    return (
      <div className='flex gap-3 items-center cursor-pointer hover:scale-105 duration-300 justify-between'>
        <div className='flex gap-2'>
          <IoMdPlay className='text-3xl' />
          <h3 className='text-lg font-semibold text-white'>{item.title}</h3>
        </div>
        <div className='bg-[#5D4483] px-3 rounded py-1 font-semibold'>
          {item.shortcut}
        </div>
      </div>
    )
  }

  return (
    <nav className='bg-[#16061E]/50 py-5 px-12 absolute w-full flex justify-between items-center'>
      <div
        onClick={() => {
          navigate('/')
        }}
        className='flex items-center gap-3 cursor-pointer'
      >
        <img className='w-12 h-12' src={CIGLogo} alt='cig logo' />
        <div>
          <h3 className='text-white text-2xl font-bold'>TP Devotion Tech</h3>
          <p className='text-white text-sm opacity-75'>
            Easy Access to Devotion Materials
          </p>
        </div>
      </div>
      <div>
        <div className='relative'>
          <IoMusicalNotes
            onClick={() => {
              setIsSoundOpen(!isSoundOpen)
            }}
            className='text-white text-3xl cursor-pointer hover:scale-110 duration-300'
          />
          {isSoundOpen && (
            <div
              className='absolute right-0 top-12 text-white p-8 rounded-lg z-10 min-w-[300px]'
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
            >
              <div className='flex flex-col gap-7'>
                {SOUND_LINKS.map((item: SoundLinksType, index) => (
                  <KeyboardShortcut key={index} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
