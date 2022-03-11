import React from "react";

function TextInput(props) {
  return (
    <input
      onChange={(e) => {
        const { value } = e.target;
        props.setValue(value);
      }}
      value={props.value}
      type="text"
      placeholder="Enter your email address"
      class="focus:outline-none flex-1 px-2 py-3 rounded-md text-black"
    />
  );
}

export default TextInput;
