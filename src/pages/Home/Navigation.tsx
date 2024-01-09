import React from 'react'
import { NAVIGATION_LINKS } from './navigationLinks'
import { NavigationItemProps } from './homeProps'
import { motion } from 'framer-motion'
import { FaGlobeAmericas } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Navigation = () => {
  return (
    <main>
      <div className='grid grid-cols-3 justify-center gap-6 py-36'>
        {NAVIGATION_LINKS.map((item: NavigationItemProps, index) => (
          <NavigationItem key={index} item={item} />
        ))}
      </div>
    </main>
  )
}

const NavigationItem: React.FC<{ item: NavigationItemProps }> = ({ item }) => {
  const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className='relative rounded-xl bg-cover bg-center cursor-pointer hover:scale-105 duration-300 group'
      style={{
        backgroundImage: `url(${item.imgUrl})`,
      }}
      onClick={() => {
        navigate(item.link)
      }}
    >
      <div className='absolute inset-0 bg-black bg-blend-darken group-hover:opacity-50 duration-300 opacity-70 rounded-xl'></div>

      <div
        className={`relative z-10 ${item.withIcon ? 'pt-24' : 'pt-52'} ${
          item.withIcon ? 'pb-24' : 'pb-12'
        } px-24`}
      >
        {item.withIcon && <FaGlobeAmericas className='text-7xl mx-auto' />}
        <h3 className='text-2xl text-white text-center font-bold'>
          {item.title}
        </h3>
      </div>
    </motion.div>
  )
}

export default Navigation
