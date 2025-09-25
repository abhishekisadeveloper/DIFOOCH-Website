import React from 'react'
import { Typography, FooterData } from '../index'

const Footer = () => {
  return (
    <>
    <div className="bg-primary font-family-jakarta">
    <div className="flex flex-col max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-2.5 items-start pt-10 px-9">
            {FooterData[0].FooterLists.map((list) => (
                <Typography className="text-white text-[16px] font-regular leading-[24px] tracking-[0px]" variant="span" key={list.id}>{list.title}</Typography>
            ))}
        </div>
        <div className="flex gap-4 items-start my-6 px-9">
            {FooterData[0].FooterIcons.map((icon) => (
                <img className="text-white text-[16px] font-regular leading-[24px] tracking-[0px]" variant="span" key={icon.id} src={icon.icon} alt="icon" />
            ))}
        </div>
        <Typography className="text-white pb-10 px-9 text-[16px] font-regular leading-[24px] tracking-[0px]" variant="span">{FooterData[0].FooterText}</Typography>
    </div>
    </div>
    </>
  )
}

export default Footer