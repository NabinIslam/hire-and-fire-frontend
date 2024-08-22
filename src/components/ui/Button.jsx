const Button = ({ className, children }) => {
  return (
    <button
      className={`bg-secondary hover:bg-white text-white font-medium hover:text-primary border-2 border-secondary hover:border-primary text-sm px-4 py-3 rounded-md duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
