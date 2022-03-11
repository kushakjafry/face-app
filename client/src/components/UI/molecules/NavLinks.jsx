import React from "react";
import HeaderButton from "../atoms/Button/HeaderButton";
import NavLink from "../atoms/navLink/navLink";

function NavLinks() {
  return (
    <ul className="hidden sm:flex flex-1 justify-end items-center gap-12 text-face-blue uppercase text-xs">
      <NavLink href="#features">Features</NavLink>
      <NavLink href="#contact">Contact</NavLink>
      <HeaderButton>
        <a href="#demo">Demo</a>
      </HeaderButton>
      <div class="flex sm:hidden flex-1 justify-end">
        <i class="text-2xl fas fa-bars"></i>
      </div>
    </ul>
  );
}

export default NavLinks;
