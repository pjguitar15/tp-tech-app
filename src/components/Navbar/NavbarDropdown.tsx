import { AiFillSound } from 'react-icons/ai'
import { IoMusicalNotes } from 'react-icons/io5'
import { SoundLinksType } from './Navbar'
import KeyboardShortcut from './KeyboardShortcut'

type NavbarDropdown = {
  soundMenuRef: React.RefObject<HTMLDivElement>
  isSoundPlaying: boolean
  setIsSoundOpen: React.Dispatch<React.SetStateAction<boolean>>
  isSoundOpen: boolean
  SOUND_LINKS: SoundLinksType[]
}

const NavbarDropdown: React.FC<NavbarDropdown> = ({
  soundMenuRef,
  isSoundPlaying,
  setIsSoundOpen,
  isSoundOpen,
  SOUND_LINKS,
}) => {
  return (
    <div>
      <div className='relative' ref={soundMenuRef}>
        {isSoundPlaying ? (
          <AiFillSound
            onClick={() => {
              setIsSoundOpen(!isSoundOpen)
            }}
            className='text-white text-3xl cursor-pointer hover:scale-110 duration-300'
          />
        ) : (
          <IoMusicalNotes
            onClick={() => {
              setIsSoundOpen(!isSoundOpen)
            }}
            className='text-white text-3xl cursor-pointer hover:scale-110 duration-300'
          />
        )}

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
  )
}

export default NavbarDropdown
