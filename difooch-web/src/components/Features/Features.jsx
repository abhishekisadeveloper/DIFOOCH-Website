import React from 'react'
import { Typography, FeaturesData } from '../index'

const Features = () => {
  return (
    <div className='flex flex-col items-center text-center my-12'>
        <Typography variant="h2">{FeaturesData[0].FeaturesHeading}</Typography>
        <div>
            {FeaturesData[0].FeaturesLists.map((item) => (
                <div className='flex flex-col items-center text-center mt-[30px] mb-10' key={item.id}>
                    <img className='w-[40.25px] h-[40px] object-contain mb-2' src={item.image} alt="" />
                    <Typography className='mb-0.5' variant="h4">{item.title}</Typography>
                    <Typography className='text-gray1 font-light' variant="p">{item.text}</Typography>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features