import React from 'react'
import { Typography, PriceData, Button } from '../index'

const Price = () => {
  return (
    <div>
        <Typography className='mb-[30px]' variant="h2">{PriceData[0].PriceHeading}</Typography>
        {PriceData[0].PriceLists.map((item) => {
            return (
                <div className='flex flex-col items-start mb-[30px] border-[1px] border-[#D1E5D9] rounded-[8px] p-[20px] w-[318px] h-[256px] bg-white' key={item.id}>
                    <Typography className='text-black1 mb-1' variant="h3">{item.category}</Typography>
                    <div className='flex items-center mb-4'>
                        <Typography className='text-heading-medium font-bold' variant="span">{item.amount}</Typography>
                        <Typography variant="h3">{item.duration}</Typography>
                    </div>
                    <Button className='justify-center py-3 mb-4' variant="secondary">Get Started</Button>
                    {item.features.map((feature) => {
                        return (
                            <Typography variant="p">{feature}</Typography>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Price