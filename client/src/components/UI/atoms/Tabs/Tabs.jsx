import React from "react";

function Tabs(props) {
  return (
    <ul
      className=" flex rounded-lg rounded-b-none divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700"
      style={{ ...props.style }}
    >
      {props.children}
    </ul>
  );
}

export default Tabs;
