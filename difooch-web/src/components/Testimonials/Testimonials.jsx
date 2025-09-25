import React from 'react'
import { TestimonialsData, Typography } from '../index'

const Testimonials = () => {
  return (
    <div>
        <Typography className='mb-7.5 text-center' variant="h2">{TestimonialsData[0].TestimonialsDataHeading}</Typography>
        <div className='flex items-center text-center gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar w-full'>
            {TestimonialsData[0].TestimonialsData.map((item) => (
                <div key={item.id} className='flex flex-col snap-start flex-shrink-0 max-w-[100%] sm:max-w-[50%] items-center p-8 bg-white rounded-3xl text-center'>
                    <img src={item.image} alt="image" className='w-[101px] h-[101px] mb-6' />
                    <Typography className='mb-0.5 font-semibold' variant="h2">{item.name}</Typography>
                    <Typography className='text-gray2' variant="p">{item.title}</Typography>
                    <img src={item.line} alt="line" className='w-full h-[1px] mt-6 mb-12' />
                    <Typography className='text-gray1 mb-3' variant="p">{item.quote}</Typography>
                    <img src={item.stars} alt="stars" />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonials