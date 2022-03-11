import React from "react";

function FeatureHeading(props) {
  return (
    <h1 class="text-3xl text-center font-bold text-face-blue">
      {props.children}
    </h1>
  );
}

export default FeatureHeading;
