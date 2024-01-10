import { useNavigate, useParams } from 'react-router-dom'
import { KajeongMaengseType } from './KajeongMaengse'
import { useEffect } from 'react'
import { IoArrowForwardCircleSharp } from 'react-icons/io5'
import { IoArrowBackCircle } from 'react-icons/io5'

type RouteParams = {
  number?: string
}

const MaengseItem = ({
  currentPledge,
}: {
  currentPledge: KajeongMaengseType
}) => {
  const { number } = useParams<RouteParams>() // Providing type information here
  const paramNumberToInteger = parseInt(number ?? '1', 10)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(paramNumberToInteger < 8)
  }, [])

  const goToNextNumber = () => {
    navigate(`/kajeong-maengse/${paramNumberToInteger + 1}`)
  }

  const goToPreviousNumber = () => {
    navigate(`/kajeong-maengse/${paramNumberToInteger - 1}`)
  }
  return (
    <div>
      <div className='text-center mt-12 relative'>
        {paramNumberToInteger > 1 && (
          <div
            onClick={goToPreviousNumber}
            className='text-white absolute left-10 top-48'
          >
            <IoArrowBackCircle className='text-6xl cursor-pointer hover:scale-110 duration-300' />
          </div>
        )}
        {paramNumberToInteger < 8 && (
          <div
            onClick={goToNextNumber}
            className='text-white absolute right-10 top-48'
          >
            <IoArrowForwardCircleSharp className='text-6xl cursor-pointer hover:scale-110 duration-300' />
          </div>
        )}
        <div className='bg-white inline-block px-10 py-1 text-2xl font-bold rounded-full'>
          {currentPledge.number}
        </div>
        <p className='text-3xl mt-7 font-semibold text-white w-1/2 mx-auto leading-loose'>
          {currentPledge.pledge}
        </p>
      </div>
    </div>
  )
}

export default MaengseItem
