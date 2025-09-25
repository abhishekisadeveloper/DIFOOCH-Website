import React from "react";
import { HeroData, Button, Typography } from "../index";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center pt-8 sm:pt-12">
      <Typography className="text-center" variant="h1">
        {HeroData[0].heroHeading}
      </Typography>
      <Typography
        className="text-center text-[16px] sm:w-[481px] sm:-[64px] pt-3 sm:pt-6 sm:text-heading-small2 font-normal"
        variant="h2"
      >
        {HeroData[0].heroSubHeading}
      </Typography>
      <img
        className="mt-[30px] sm:mt-12 w-[199.98px] h-[179.05px] sm:w-[400px] sm:h-[357px]"
        src={HeroData[0].heroImage}
        loading="lazy"
        alt="Hero Image"
      />
      <Button
        className="mt-[29.94px] sm:mt-12 sm:text-heading-small3 py-2 hover:bg-accent2 sm:py-4 sm:px-6"
        variant="primary"
        icon={HeroData[0].heroButton.icon}
      >
        {HeroData[0].heroButton.text}
      </Button>
    </div>
  );
};

export default HeroSection;
