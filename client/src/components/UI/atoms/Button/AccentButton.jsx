import React from "react";

function AccentButton(props) {
  return (
    <button
      type="button"
      class="inline-block px-6 py-3 bg-face-red text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-face-white hover:shadow-lg focus:bg-face-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-face-white hover:text-face-blue active:shadow-lg transition duration-150 ease-in-out"
    >
      {props.children}
    </button>
  );
}

export default AccentButton;
