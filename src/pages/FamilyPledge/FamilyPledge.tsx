import { Link, useParams } from 'react-router-dom'
import { MdArrowBackIosNew } from 'react-icons/md'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'
import PledgeItem from './PledgeItem'
import { useEffect, useState } from 'react'
import { familyPledgeData } from './familyPledgeData'
import image from '../../assets/default-bg.png'

export type FamilyPledgeType = {
  number: string
  pledge: string
}

const FamilyPledge = () => {
  const [currentPledge, setCurrentPledge] = useState<FamilyPledgeType>({
    number: '',
    pledge: '',
  })
  const params = useParams()

  useEffect(() => {
    const paramsValue = params.number

    const filteredData = familyPledgeData.filter((item, index) => {
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
        <title>TP Devotion Tech | Family Pledge</title>
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
          Family Pledge
        </h1>
        <PledgeItem currentPledge={currentPledge} />
      </motion.div>
    </main>
  )
}

export default FamilyPledge
