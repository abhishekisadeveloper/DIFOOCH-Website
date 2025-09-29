import React from "react";
import { WhyDifoochData, Typography } from "../index";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";

const WhyDifooch = () => {
  return (
    <div className="flex flex-col my-[48px] sm:my-[90px] w-full p-5 bg-white rounded-[15px] items-center text-center">
      <ScrollAnimation>
        <Typography className="sm:my-6 text-mobile-heading-medium" variant="h2">
          {WhyDifoochData[0].whyDifoochHeading}
        </Typography>
      </ScrollAnimation>
      <ScrollAnimation>
        <Typography
          className="pt-6 text-small md:w-[85%] leading-small2"
          variant="p"
        >
          {WhyDifoochData[0].whyDifoochSubHeading}
        </Typography>
      </ScrollAnimation>
      <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center pt-[30px] sm:pt-10 w-full sm:w-[752px] sm:mb-6 gap-4 sm:gap-8">
        {WhyDifoochData[0].whyDifoochList1.map((item, index) => (
          <ScrollAnimation key={index}>
            <li className="flex items-center" key={index}>
              <div className="flex gap-[8.12px] sm:w-[360px] rounded-[15px] w-full p-4 bg-light-white text-black1 font-bold items-center">
                <img
                  className="bg-secondary rounded-[8px] w-10 h-10"
                  src={item.iconLink}
                  alt="icon1"
                  loading="lazy"
                />
                <Typography variant="p">{item.text}</Typography>
              </div>
            </li>
          </ScrollAnimation>
        ))}
      </ul>
    </div>
  );
};

export default WhyDifooch;
