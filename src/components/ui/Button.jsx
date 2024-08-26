const Button = ({ className, children }) => {
  return (
    <button
      className={`bg-secondary hover:bg-transparent text-white font-medium hover:text-secondary border-2 border-secondary hover:border-secondary text-sm px-4 py-3 rounded-md duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
