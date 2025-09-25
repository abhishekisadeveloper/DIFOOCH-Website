import React from "react";
import { Typography, FooterData } from "../index";

const Footer = () => {
  return (
    <>
      <div className="bg-primary font-family-jakarta">
        <div className="flex flex-col sm:flex-row max-w-[1440px] sm:justify-between mx-auto">
          <div className="flex flex-col items-start sm:mb-24 pt-10 px-9">
            {FooterData[0].FooterLists.map((list) => (
              <ul className="flex items-center gap-2.5 sm:mb-5" key={list.id}>
                <li
                  className="text-white text-[16px] sm:text-heading-small3 font-regular leading-[24px] tracking-[0px] cursor-pointer"
                  key={list.id}
                >
                  {list.title}
                </li>
              </ul>
            ))}
          </div>
          <div className="flex gap-4 items-start my-6 sm:my-0 px-9 sm:px-0 sm:gap-6 sm:py-12">
            {FooterData[0].FooterIcons.map((icon) => (
              <div className="flex items-center gap-2.5" key={icon.id}>
                <img
                  className="text-white w-[24px] h-[24px] sm:w-[34.61px] sm:h-[35px] font-regular leading-[24px] tracking-[0px] cursor-pointer"
                  key={icon.id}
                  src={icon.icon}
                  alt="icon"
                />
              </div>
            ))}
          </div>
          <Typography
            className="text-white pb-10 py-9 sm:py-12 px-9 sm:px-0 sm:pr-12 text-[16px] sm:text-heading-small3 font-regular leading-[24px] tracking-[0px]"
            variant="span"
          >
            {FooterData[0].FooterText}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default Footer;
