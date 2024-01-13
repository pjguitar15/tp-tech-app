import CIGLogo from '/src/assets/cig-logo.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import { useAudioContext } from '../../contexts/AudioContext/AudioContext'
import NavbarDropdown from './NavbarDropdown'

export type SoundLinksType = {
  title: string
  shortcut: string
  isPlaying: boolean
}

const Navbar = () => {
  const [isSoundOpen, setIsSoundOpen] = useState<boolean>(false)
  const navigate = useNavigate()
  const soundMenuRef = useRef<HTMLDivElement>(null)

  const { isClapPlaying, isPrayerPlaying, isEogManseiPlaying } =
    useAudioContext()

  const isSoundPlaying = isClapPlaying || isPrayerPlaying || isEogManseiPlaying

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        soundMenuRef.current &&
        !soundMenuRef.current?.contains(event.target as Node)
      ) {
        setIsSoundOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const SOUND_LINKS: SoundLinksType[] = [
    {
      title: 'Prayer Music',
      shortcut: 'ctrl + 1',
      isPlaying: isPrayerPlaying,
    },
    {
      title: 'Clap SFX',
      shortcut: 'ctrl + 2',
      isPlaying: isClapPlaying,
    },
    {
      title: 'Eog Mansei',
      shortcut: 'ctrl + 3',
      isPlaying: isEogManseiPlaying,
    },
    {
      title: 'Stop/Reset',
      shortcut: 'ctrl + 0',
      isPlaying: false,
    },
  ]

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
      <NavbarDropdown
        soundMenuRef={soundMenuRef}
        isSoundPlaying={isSoundPlaying}
        setIsSoundOpen={setIsSoundOpen}
        isSoundOpen={isSoundOpen}
        SOUND_LINKS={SOUND_LINKS}
      />
    </nav>
  )
}

export default Navbar
