import React from 'react'
import { Button, Typography, ReadyData } from '../index'

const Ready = () => {
  return (
    <div className='flex flex-col items-center text-center gap-[30px] sm:gap-12 mb-12 sm:mb-[90px]'>
        <h3 className='text-[20px] font-bold sm:text-heading-medium'>{ReadyData[0].ReadyHeading}</h3>
        <Typography className='text-gray1' variant='p'>{ReadyData[0].ReadyText}</Typography>
        <Button className='sm:w-[207px] h-[40px] sm:h-[64px] sm:text-heading-small3 rounded-[8px]' variant='primary' icon='./HeroImagesAssets/rocket.svg'>Get Started</Button>
    </div>
  )
}

export default Ready