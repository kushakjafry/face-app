import React from "react";
import NavLinks from "../molecules/NavLinks";

function Navbar() {
  return (
    <header>
      <nav className="container flex items-center py-4 mt-4 sm:mt-12">
        <div class="py-1 font-bold ">Face-App</div>
        <NavLinks />
      </nav>
    </header>
  );
}

export default Navbar;
