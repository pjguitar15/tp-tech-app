import React from 'react'
import CIGLogo from '/src/assets/cig-logo.png'

const Navbar = () => {
  return (
    <nav className='bg-[#16061E]/50 py-5 px-12 absolute w-full'>
      <div className='flex items-center gap-3'>
        <img className='w-12 h-12' src={CIGLogo} alt='cig logo' />
        <div>
          <h3 className='text-white text-2xl font-bold'>TP Devotion Tech</h3>
          <p className='text-white text-sm opacity-75'>
            Easy Access to Devotion Materials
          </p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
