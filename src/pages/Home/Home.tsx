import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from './Navigation'
import HolySongPlayerButton from '../HolySongPlayer/HolySongPlayerButton'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>TP Devotion Tech</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>

      <main className='min-h-screen bg-[url("src/assets/default-bg.png")] bg-no-repeat bg-cover flex flex-col'>
        <section className='text-white container mx-auto'>
          <Navigation />
        </section>
        <div className='mb-0 mt-auto'>
          <HolySongPlayerButton />
        </div>
      </main>
    </>
  )
}

export default Home
