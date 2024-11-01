import React from "react";

export function Textarea(props) {
  return (
    <textarea
      className="border border-gray-300 rounded-md px-3 py-2 w-full"
      {...props}
    />
  );
}
