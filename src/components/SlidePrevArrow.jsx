const CustomPrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-black bg-blue-500 hover:bg-blue-700 rounded-full p-2 ${className}`}
    style={{ ...style, display: "block" }}
  >
    {/* Use any icon or text */}
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

export default CustomPrevArrow;
