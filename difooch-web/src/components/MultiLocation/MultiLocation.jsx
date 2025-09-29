import React from 'react'
import { MultiLocationData, Typography } from '../index'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

const MultiLocation = () => {
  return (
    <div className='flex flex-col items-center text-center mb-12 sm:mb-[90px]'>
        <ScrollAnimation>
        <Typography className='text-black1 text-large leading-large' variant="h2">{MultiLocationData[0].MultiLocationHeading}</Typography>
        </ScrollAnimation>
        <ScrollAnimation>
        <Typography className='text-gray1 text-medium leading-medium mt-[30px] sm:mt-12' variant="p">{MultiLocationData[0].MultiLocationText}</Typography>
        </ScrollAnimation>
    </div>
  )
}

export default MultiLocation