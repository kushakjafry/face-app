import React from "react";

function Tab(props) {
  if (props.active) {
    return <ActiveTab {...props}>{props.children}</ActiveTab>;
  }
  return <InactiveTab {...props}>{props.children}</InactiveTab>;
}

const ActiveTab = (props) => {
  return (
    <li class="w-full cursor-pointer" onClick={props.onClick}>
      <div
        className="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-b-none focus:ring-4 focus:ring-blue-300 focus:z-20 active dark:bg-gray-700 dark:text-white"
        aria-current="page"
      >
        {props.children}
      </div>
    </li>
  );
};

const InactiveTab = (props) => {
  return (
    <li className="w-full cursor-pointer" onClick={props.onClick}>
      <div className="inline-block relative py-4 px-4 w-full text-sm font-medium text-center text-gray-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:z-20 dark:text-gray-400 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
        {props.children}
      </div>
    </li>
  );
};

export default Tab;
