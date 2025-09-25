import React from 'react'
import { Typography, FeaturesData } from '../index'

const Features = () => {
  return (
    <div className='flex flex-col items-center text-center w-full my-12 sm:my-[90px]'>
        <Typography className='mb-[30px] sm:mb-12 text-large text-center' variant="h2">{FeaturesData[0].FeaturesHeading}</Typography>
        <div className='flex flex-col sm:flex-row sm:flex-wrap sm:items-center justify-center sm:gap-[32.5px] gap-10'>
            {FeaturesData[0].FeaturesLists.map((item) => (
                <div className='flex flex-col items-center text-center sm:w-[175px]' key={item.id}>
                    <img className='w-[40.25px] h-[40px] object-contain mb-2' src={item.image} alt="" />
                    <Typography className='mb-0.5 text-primary sm:text-large' variant="h4">{item.title}</Typography>
                    <Typography className='text-gray1 font-light text-medium' variant="p">{item.text}</Typography>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features