import { Link } from 'react-router-dom'
import TPImageFile from '/src/assets/true-parents-formal.jpg'
import { MdArrowBackIosNew } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import image from '../../assets/default-bg.png'

const TPImage = () => {
  return (
    <main
      className='min-h-screen bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${image})` }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <title>TP Devotion Tech | TP Image</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <div className='container mx-auto'>
        <div className='pt-32'>
          <Link to='/'>
            <MdArrowBackIosNew className='text-white text-2xl' />
          </Link>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className='mx-auto xl:w-4/6'
          src={TPImageFile}
          alt='true parents'
        />
      </div>
    </main>
  )
}

export default TPImage
