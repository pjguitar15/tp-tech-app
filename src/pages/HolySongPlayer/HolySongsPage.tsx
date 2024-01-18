import React from 'react'
import { Helmet } from 'react-helmet'
import image from '../../assets/default-bg.png'
import { Link } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import HolySongList from './HolySongList/HolySongList'

const HolySongsPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>TP Devotion Tech | Home</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>

      <main
        className='min-h-screen bg-no-repeat bg-cover flex flex-col'
        style={{ backgroundImage: `url(${image})` }}
      >
        <section className='text-white container mx-auto'>
          <div className='pt-32 inline-block'>
            <Link to='/'>
              <div className='flex gap-2'>
                <MdArrowBackIosNew className='text-white text-2xl' />
                Go back home
              </div>
            </Link>
          </div>
          <h1 className='text-center text-5xl font-bold'>Holy Songs</h1>
          <HolySongList />
        </section>
      </main>
    </>
  )
}

export default HolySongsPage
