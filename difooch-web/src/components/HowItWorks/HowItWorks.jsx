import React from "react";
import { HowItWorksData } from "../index";
import { Typography } from "../index";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center text-mobile-heading-medium gap-[30px] sm:gap-12">
      <ScrollAnimation>
      <Typography variant="h2">
        {HowItWorksData[0].howItWorksHeading}
      </Typography>
      </ScrollAnimation>
      {HowItWorksData[0].howItWorksLists.map((item, index) => (
        <ScrollAnimation key={index}>
        <div key={index} className="flex flex-col text-center items-center">
          <img className="w-[40.25px] sm:w-[56px] h-[40px] sm:h-[56px]" src={item.howItWorksIcon} alt="" />
          <Typography className="mb-1 mt-2.5 sm:text-large" variant="h4">
            {item.howItWorksSubHeading}
          </Typography>
          <Typography className="text-gray1 sm:text-medium font-light" variant="p">
            {item.howItWorksText}
          </Typography>
        </div>
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default HowItWorks;
