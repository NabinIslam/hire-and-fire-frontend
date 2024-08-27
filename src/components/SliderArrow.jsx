import React from "react";

export const CustomNextArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-blue-500 p-2 text-black hover:bg-blue-700 ${className}`}
    style={{ ...style, display: "block" }}
  >
    {/* Use any icon or text */}
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);
