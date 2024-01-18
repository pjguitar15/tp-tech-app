import { MdPlayCircle } from 'react-icons/md'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HolySongPlayerButton = () => {
  return (
    <Link to='/holy-songs'>
      <div className='text-center'>
        <AnimatePresence>
          <motion.div
            className='inline-block'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className='flex justify-center items-center gap-3 mb-7 cursor-pointer duration-300 hover:scale-105'>
              <MdPlayCircle className='text-7xl text-white' />
              <h3 className='text-white text-2xl font-bold'>
                Holy Songs Player
              </h3>
              <span className='bg-yellow-500 font-bold px-5 rounded-full text-sm'>
                Try it!
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </Link>
  )
}

export default HolySongPlayerButton
