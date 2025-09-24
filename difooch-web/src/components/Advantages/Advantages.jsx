import React from "react";
import { Typography, AdvantageData } from "../index";

const Advantages = () => {
  return (
    <div className="flex flex-col items-center text-center my-12">
      <Typography className='flex flex-col items-center mx-9' variant="h2">
        {AdvantageData[0].AdvantagesDataHeading}
      </Typography>

      {/* Slider wrapper */}
      <div className="flex items-center text-center gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar w-full py-6">
        {AdvantageData[0].AdvantagesDataLists.map((item) => (
          // Cards.
          <div
            key={item.id}
            className="flex flex-col items-center text-center gap-2 flex-shrink-0 snap-start drop-shadow-lg drop-shadow-[rgba(0,0,0,0.25)]"
          >
            <div className="h-[400px] rounded-[50px] relative overflow-hidden">
              <img
                src={item.image}
                alt=""
                loading="lazy"
                className="w-[300px] h-[400px] brightness-[75%] object-cover"
              />
              <div className="absolute bottom-9 left-9 right-9 text-left gap-2 flex flex-col ">
                <Typography
                  variant="h3"
                  className="leading-small font-extrabold text-white"
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="p"
                  className="leading-small2 text-small text-white font-semibold"
                >
                  {item.text}
                </Typography>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
