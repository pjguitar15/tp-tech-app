import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { MdArrowBackIosNew } from 'react-icons/md'
import { Link } from 'react-router-dom'
import image from '../../../assets/default-bg.png'
import BottomPlayer from '../BottomPlayer/BottomPlayer'

const HolySongLyrics = () => {
  return (
    <main
      className='min-h-screen bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${image})` }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <title>TP Devotion Tech | Holy Song Lyrics</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className='container mx-auto'
      >
        <div className='pt-32 inline-block'>
          <Link to='/'>
            <MdArrowBackIosNew className='text-white text-2xl' />
          </Link>
        </div>
        <h1 className='text-5xl text-center text-white font-bold'>
          Holy Song Lyrics
        </h1>
        <h1 className='text-5xl text-center text-white font-bold mt-7'>
          가정맹세
        </h1>
      </motion.div>
      <BottomPlayer />
    </main>
  )
}

export default HolySongLyrics
