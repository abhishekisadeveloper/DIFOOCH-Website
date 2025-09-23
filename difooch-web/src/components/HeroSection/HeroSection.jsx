import React from "react";
import { HeroData, Button, Typography } from "../index";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center pt-8">
      <Typography className="text-center" variant="h1">
        {HeroData[0].heroHeading}
      </Typography>
      <Typography className="text-center text-mobile-heading-small pt-3 font-normal" variant="h2">
        {HeroData[0].heroSubHeading}
      </Typography>
      <img className="mt-[30px]" src={HeroData[0].heroImage} alt="Hero Image" />
      <Button className='mt-[29.94px] py-2' variant="primary" icon={HeroData[0].heroButton.icon}>
        {HeroData[0].heroButton.text}
      </Button>
    </div>
  );
};

export default HeroSection;
