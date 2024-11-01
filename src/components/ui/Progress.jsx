import React from "react";

export function Progress({ value, max = 100, ...props }) {
  return (
    <div
      className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
      {...props}
    >
      <div
        className="bg-purple-600 h-2.5 rounded-full"
        style={{ width: `${(value / max) * 100}%` }}
      ></div>
    </div>
  );
}
