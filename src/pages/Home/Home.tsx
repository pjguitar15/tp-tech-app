import React from 'react'
import { Helmet } from 'react-helmet'
import Navigation from './Navigation'

const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>TP Devotion Tech</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>

      <main className='min-h-screen bg-[url("src/assets/default-bg.png")] bg-no-repeat bg-cover'>
        <section className='text-white container mx-auto'>
          <Navigation />
        </section>
      </main>
    </>
  )
}

export default Home
