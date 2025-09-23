import React from "react";
import { WhyDifoochData, Typography } from "../index";

const WhyDifooch = () => {
  return (
    <div className="flex flex-col my-[48px] p-5 bg-white rounded-[15px] items-center text-center">
      <Typography variant="h2">
        {WhyDifoochData[0].whyDifoochHeading}
      </Typography>
      <Typography className="pt-6 text-small leading-small2" variant="p">
        {WhyDifoochData[0].whyDifoochSubHeading}
      </Typography>
      <ul className="flex flex-col pt-[30px] w-full gap-4">
        {WhyDifoochData[0].whyDifoochList1.map((item, index) => (
          <li className="flex items-center">
            <div className="flex gap-[8.12px] rounded-[15px] w-full p-4 bg-light-white text-black1 font-bold items-center">
            <img
            className="bg-secondary font rounded-[8px]"
              src={item.iconLink}
            alt="icon1"
          />
          <Typography variant="p">
            {item.text}
          </Typography>
          </div>
        </li>
      ))}
      </ul>
    </div>
  );
};

export default WhyDifooch;
