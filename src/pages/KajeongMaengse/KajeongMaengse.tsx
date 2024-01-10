import { Link, useParams } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import MaengseItem from './MaengseItem'
import { useEffect, useState } from 'react'
import { kajeongMaengseData } from './kajeongMaengseData'
import image from '../../assets/default-bg.png'

export type KajeongMaengseType = {
  number: string
  pledge: string
}

const KajeongMaengse = () => {
  const [currentPledge, setCurrentPledge] = useState<KajeongMaengseType>({
    number: '',
    pledge: '',
  })
  const params = useParams()

  useEffect(() => {
    const paramsValue = params.number

    const filteredData = kajeongMaengseData.filter((item, index) => {
      const currIndx = index + 1
      const indexToString = currIndx.toString()
      return indexToString === paramsValue
    })

    setCurrentPledge(filteredData[0])
  }, [params])

  return (
    <main
      className='min-h-screen bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${image})` }}
    >
      <Helmet>
        <meta charSet='utf-8' />
        <title>TP Devotion Tech | Kajeong Maengse</title>
        <link rel='canonical' href='http://mysite.com/example' />
      </Helmet>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className='container mx-auto'
      >
        <div className='pt-32'>
          <Link to='/'>
            <MdArrowBackIosNew className='text-white text-2xl' />
          </Link>
        </div>
        <h1 className='text-5xl text-center text-white font-bold'>
          Kajeong Maengse
        </h1>
        <h1 className='text-5xl text-center text-white font-bold mt-7'>
          가정맹세
        </h1>
        <MaengseItem currentPledge={currentPledge} />
      </motion.div>
    </main>
  )
}

export default KajeongMaengse
