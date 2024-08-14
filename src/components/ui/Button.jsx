const Button = ({ className, children }) => {
  return (
    <button
      className={`bg-[#004785] text-white text-sm px-4 py-3 rounded-md ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
