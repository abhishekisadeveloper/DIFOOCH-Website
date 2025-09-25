import React from 'react'
import { Button, Typography, ReadyData } from '../index'

const Ready = () => {
  return (
    <div className='flex flex-col items-center text-center gap-[30px] mb-12'>
        <h3 className='text-[20px] font-bold'>{ReadyData[0].ReadyHeading}</h3>
        <Typography className='text-gray1' variant='p'>{ReadyData[0].ReadyText}</Typography>
        <Button className='w-[146px] h-[40px] rounded-[8px]' variant='primary' icon='./HeroImagesAssets/rocket.svg'>Get Started</Button>
    </div>
  )
}

export default Ready