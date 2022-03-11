import React from "react";

function FeatureItemText(props) {
  return (
    <p className="text-face-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
      {props.children}
    </p>
  );
}

export default FeatureItemText;
