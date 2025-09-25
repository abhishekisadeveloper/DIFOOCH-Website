import React from 'react'
import { MultiLocationData, Typography } from '../index'

const MultiLocation = () => {
  return (
    <div className='flex flex-col items-center text-center mb-12 sm:mb-[90px]'>
        <Typography className='text-black1 text-large leading-large' variant="h2">{MultiLocationData[0].MultiLocationHeading}</Typography>
        <Typography className='text-gray1 text-medium leading-medium mt-[30px] sm:mt-12' variant="p">{MultiLocationData[0].MultiLocationText}</Typography>
    </div>
  )
}

export default MultiLocation