import React from "react";
import { Typography, PriceData, Button } from "../index";
import { NavLink } from "react-router";
const Price = () => {
  return (
    <div className="flex flex-col items-center mb-12 sm:mb-[90px]">
      <Typography
        className="mb-[30px] text-mobile-heading-medium sm:mb-12"
        variant="h2"
      >
        {PriceData[0].PriceHeading}
      </Typography>
      <div className="flex flex-col justify-center sm:flex-row sm:flex-wrap items-center sm:gap-12">
        {PriceData[0].PriceLists.map((item) => {
          return (
            <div
              className="flex flex-col items-start mb-[30px] sm:mb-0 relative border-[1px] border-[#D1E5D9] sm:border-primary rounded-[8px] sm:rounded-[9.59px] p-[20px] w-[318px] sm:w-[378px] bg-white"
              key={item.id}
            >
              <Typography
                className="text-black1 sm:text-heading-small3 mb-1"
                variant="h3"
              >
                {item.category}
              </Typography>
              <div className="flex items-center mb-4 gap-1">
                <Typography
                  className="font-family-poppins text-heading-medium sm:text-heading-large2 font-bold"
                  variant="span"
                >
                  {item.amount}
                </Typography>
                <Typography className="sm:text-large sm:font-bold" variant="h3">
                  {item.duration}
                </Typography>
              </div>
              <NavLink className="w-full" to="/sign-up">
                <Button
                  className="justify-center sm:text-medium sm:font-bold py-3 mb-4 w-full hover:bg-success hover:text-white"
                  variant="secondary"
                >
                  Get Started
                </Button>
              </NavLink>
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
      </div>
      <div className="flex items-center sm:mt-12 gap-[11.71px] sm:gap-12">
        <Button
          className="justify-center sm:gap-3 sm:text-heading-small3 w-[158.97px] sm:w-[230px] h-[39.02] sm:h-[64px] rounded-[7.8px] py-3 mb-4 sm:mb-0 hover:bg-accent2"
          variant="primary"
          icon="./PriceAssets/callIcon.svg"
        >
          Talk to Sales
        </Button>
        <Button
          className="justify-center sm:text-heading-small3 w-[158.97px] sm:w-[230px] h-[39.02] sm:h-[64px] rounded-[7.8px] py-3 mb-4 sm:mb-0 bg-white hover:bg-accent"
          variant="primary"
        >
          <span className="sm:gap-3">
            <img
              className="w-[24px] h-[24px] sm:w-[32px] sm:h-[32px] sm:block hidden"
              src="./HeroImagesAssets/rocket.svg"
              alt="arrow"
            />
            <img
              className="w-[13.21px] h-[17.07px] sm:w-[32px] sm:h-[32px] sm:hidden"
              src="./PriceAssets/arrow.svg"
              alt="arrow"
            />
          </span>
          Start Free Trial
        </Button>
      </div>
    </div>
  );
};

export default Price;
