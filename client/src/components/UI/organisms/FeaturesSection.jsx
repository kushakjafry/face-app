import React from "react";
import FeatureItem from "../molecules/FeatureItem";
import EmotionDetectImage from "../../../assets/illustrations/Emotion.jpg";
import FaceMaskImage from "../../../assets/illustrations/face-mask.png";
import FeatureHeading from "../atoms/Headings/FeatureHeading";
import FeatureText from "../atoms/Text/FeatureText";

function FeaturesSection() {
  return (
    <section class="bg-face-white py-20 mt-20" id="features">
      <div class="sm:w-3/4 lg:w-5/12 mx-auto px-2">
        <FeatureHeading>Features</FeatureHeading>
        <FeatureText>
          Just a fun project using AI and computer vision to study and detect
          face and emotions
        </FeatureText>
      </div>
      <FeatureItem
        title="Emotion Detection in one click"
        align="left"
        img={EmotionDetectImage}
      >
        Know about your and your friends and families emotion in just one click.
      </FeatureItem>

      <FeatureItem
        title="Face mesh Generator"
        align="right"
        img={FaceMaskImage}
      >
        Create 68 point face mesh, can be used for creating filters for video.
      </FeatureItem>
    </section>
  );
}

export default FeaturesSection;
