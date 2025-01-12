import React from "react";

export function Button({ children, ...props }) {
  return (
    <button
      className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      {...props}
    >
      {children}
    </button>
  );
}
