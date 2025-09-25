import React from "react";
import { Typography, PriceData, Button } from "../index";

const Price = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      <Typography className="mb-[30px]" variant="h2">
        {PriceData[0].PriceHeading}
      </Typography>
      {PriceData[0].PriceLists.map((item) => {
        return (
          <div
            className="flex flex-col items-start mb-[30px] relative border-[1px] border-[#D1E5D9] rounded-[8px] p-[20px] w-[318px] bg-white"
            key={item.id}
          >
            <Typography className="text-black1 mb-1" variant="h3">
              {item.category}
            </Typography>
            <div className="flex items-center mb-4 gap-1">
              <Typography
                className="font-family-poppins text-heading-medium font-bold"
                variant="span"
              >
                {item.amount}
              </Typography>
              <Typography variant="h3">{item.duration}</Typography>
            </div>
            <Button
              className="justify-center py-3 mb-4 w-full hover:bg-success hover:text-white"
              variant="secondary"
            >
              Get Started
            </Button>
            {item.features.map((feature) => {
              return (
                <div className="flex items-center mb-2 gap-3">
                  <img src={PriceData[0].CheckIcon} alt="check" />
                  <Typography
                    className="text-gray1 font-regular"
                    variant="span"
                  >
                    {feature}
                  </Typography>
                </div>
              );
            })}
            {/* Recommended Badge */}
            {item.recommended === true && (
              <Typography
                className="absolute top-5 right-5 bg-accent2 rounded-[8px] mb-1 text-[12px] leading-4.5 font-medium px-3 py-[3px]"
                variant="span"
              >
                Recommended
              </Typography>
            )}
          </div>
        );
      })}
      <div className="flex items-center gap-[11.71px]">
        <Button
        className="justify-center w-[158.97px] h-[39.02] rounded-[7.8px] py-3 mb-4 hover:bg-accent2"
        variant="primary" icon='./PriceAssets/callIcon.svg'
      >
        Talk to Sales
      </Button>
      <Button
        className="justify-center w-[158.97px] h-[39.02] rounded-[7.8px] py-3 mb-4 bg-white"
        variant="primary" icon='./PriceAssets/arrow.svg'
      >
        Talk to Sales
      </Button>
      </div>
    </div>
  );
};

export default Price;
