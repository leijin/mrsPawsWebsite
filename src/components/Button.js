import * as React from "react";

export default function Button({ className, children }) {
  return (
    <button
      type="button"
      className={`${className} inline-flex items-center px-4 py-2 border border-transparent font-primary text-lg font-normal rounded-md shadow-sm text-white bg-secondary hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400`}
    >
      {children}
    </button>
  );
}
