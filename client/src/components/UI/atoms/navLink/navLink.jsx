import React from "react";

function navLink(props) {
  return (
    <li className="cursor-pointer">
      <a href={props.href}>{props.children}</a>
    </li>
  );
}

export default navLink;
