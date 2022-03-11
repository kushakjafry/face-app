import React from "react";
import HeroDetails from "../molecules/HeroDetails";
import EmotionDetectImage from "../../../assets/illustrations/EmotionDetect.png";

function HeroSection() {
  return (
    <section className="relative">
      <div className="container flex flex-col-reverse lg:flex-row items-center mt-14 gap-12 lg:mt-28">
        <HeroDetails />
        <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
          <img
            class="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={EmotionDetectImage}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
