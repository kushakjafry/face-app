import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function HamburgerIcon() {
  return (
    <div class="flex sm:hidden flex-1 justify-end">
      <FontAwesomeIcon icon={faBars} className=" cursor-pointer" />
    </div>
  );
}

export default HamburgerIcon;
