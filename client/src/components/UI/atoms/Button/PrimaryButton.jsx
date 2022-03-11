import React from "react";

function PrimaryButton(props) {
  return (
    <button
      type="button"
      class="inline-block px-6 py-3 bg-face-purple text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      {props.children}
    </button>
  );
}

export default PrimaryButton;
