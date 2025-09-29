import React from "react";
import { Button, Typography, ReadyData } from "../index";
import { NavLink } from "react-router";
import ScrollAnimation from "../ScrollAnimation/ScrollAnimation";
const Ready = () => {
  return (
    <div className="flex flex-col items-center text-center gap-[30px] sm:gap-12 mb-12 sm:mb-[90px]">
      <ScrollAnimation>
      <h3 className="text-[20px] font-bold sm:text-heading-medium">
        {ReadyData[0].ReadyHeading}
      </h3>
      </ScrollAnimation>
      <ScrollAnimation>
      <Typography className="text-gray1" variant="p">
        {ReadyData[0].ReadyText}
      </Typography>
      </ScrollAnimation>
      <ScrollAnimation>
      <NavLink to="/sign-up">
        <Button
          className="sm:w-[207px] h-[40px] sm:h-[64px] sm:text-heading-small3 rounded-[8px] hover:bg-accent2"
          variant="primary"
          icon="./HeroImagesAssets/rocket.svg"
        >
          Get Started
        </Button>
      </NavLink>
      </ScrollAnimation>
    </div>
  );
};

export default Ready;
