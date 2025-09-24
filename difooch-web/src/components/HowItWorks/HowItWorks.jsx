import React from 'react'
import { HowItWorksData } from '../index'
import { Typography } from '../index'

const HowItWorks = () => {
  return (
    <div className='flex flex-col items-center gap-[30px]'>
        <Typography variant="h2">{HowItWorksData[0].howItWorksHeading}</Typography>
        <div className="flex flex-col text-center items-center">
        <img src={HowItWorksData[0].howItWorksLists[0].howItWorksIcon1} alt="" />
        <Typography variant="h4">{HowItWorksData[0].howItWorksLists[0].howItWorksSubHeading1}</Typography>
        <Typography className='text-gray1' variant="p">{HowItWorksData[0].howItWorksLists[0].howItWorksText1}</Typography>
        </div>
    </div>
  )
}

export default HowItWorks