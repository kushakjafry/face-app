import React from "react";
import HeaderButton from "../atoms/Button/HeaderButton";
import NavLink from "../atoms/navLink/navLink";

function NavLinks() {
  return (
    <ul className="flex flex-1 justify-end items-center gap-12 text-face-blue uppercase text-xs">
      <NavLink href="#features">Features</NavLink>
      <HeaderButton>
        <a href="#demo">Demo</a>
      </HeaderButton>
    </ul>
  );
}

export default NavLinks;
