const BgButton = ({ children }) => {
  return (
    <button className="rounded-md border-2 border-secondary bg-secondary px-4 py-3 text-sm font-medium text-white duration-200 hover:border-white hover:bg-transparent hover:text-white">
      {children}
    </button>
  );
};

export default BgButton;
