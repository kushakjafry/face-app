import React from "react";
import AccentButton from "./AccentButton";
import HeaderButton from "./HeaderButton";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

function Button(props) {
  switch (props.type) {
    case "primary":
      return <PrimaryButton>{props.children}</PrimaryButton>;
    case "secondary":
      return <SecondaryButton>{props.children}</SecondaryButton>;
    case "header":
      return <HeaderButton>{props.children}</HeaderButton>;
    case "accent":
      return <AccentButton>{props.children}</AccentButton>;
    default:
      return <PrimaryButton>{props.children}</PrimaryButton>;
  }
}

export default Button;
