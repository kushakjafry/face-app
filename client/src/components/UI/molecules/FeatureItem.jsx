import React from "react";
import Button from "../atoms/Button";

function FeatureItem(props) {
  return (
    <div className="relative mt-10">
      <div
        className={`container flex flex-col ${
          props.align === "right" ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center justify-center gap-x-24`}
      >
        <div className="flex flex-1 justify-center z-10 mb-10 lg:mb-0">
          <img
            className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full"
            src={props.img}
            alt=""
          />
        </div>
        <div className="flex flex-1 flex-col items-center lg:items-start">
          <h1 className="text-3xl text-bookmark-blue">{props.title}</h1>
          <p className="text-bookmark-grey my-4 text-center lg:text-left sm:w-3/4 lg:w-full">
            {props.children}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureItem;
