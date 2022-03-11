import React from "react";
import HeroHeading from "../atoms/Headings/HeroHeading";
import HeroText from "../atoms/Text/HeroText";
import CtaButtonGroup from "./CtaButtonGroup";

function HeroDetails() {
  return (
    <div class="flex flex-1 flex-col items-center lg:items-start">
      <HeroHeading />
      <HeroText />
      <CtaButtonGroup />
    </div>
  );
}

export default HeroDetails;
