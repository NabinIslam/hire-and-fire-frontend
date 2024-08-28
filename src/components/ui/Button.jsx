const Button = ({ className, children, type }) => {
  return (
    <button
      className={`rounded-md border-2 border-secondary bg-secondary px-4 py-3 text-sm font-medium text-white duration-200 hover:border-secondary hover:bg-transparent hover:text-secondary ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
