import { Link } from 'react-router-dom'
import TPImage from '/src/assets/true-parents-formal.jpg'
import { MdArrowBackIosNew } from 'react-icons/md'
import { motion } from 'framer-motion'

const TrueParentsPhoto = () => {
  return (
    <main className='min-h-screen bg-[url("src/assets/default-bg.png")] bg-no-repeat bg-cover'>
      <div className='container mx-auto'>
        <div className='py-8'>
          <Link to='/'>
            <MdArrowBackIosNew className='text-white text-2xl' />
          </Link>
        </div>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className='mx-auto xl:w-4/6'
          src={TPImage}
          alt='true parents'
        />
      </div>
    </main>
  )
}

export default TrueParentsPhoto