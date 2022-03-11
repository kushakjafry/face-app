import React from "react";

function SecondaryButton(props) {
  return (
    <button
      type="button"
      class="inline-block px-6 py-3 border-2 border-face-purple text-face-purple font-medium text-xs leading-tight uppercase rounded hover:bg-face-purple hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
    >
      {props.children}
    </button>
  );
}
export default SecondaryButton;
