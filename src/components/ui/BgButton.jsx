const BgButton = ({ children }) => {
  return (
    <button className="bg-secondary hover:bg-transparent text-white font-medium hover:text-white border-2 border-secondary hover:border-white text-sm px-4 py-3 rounded-md duration-200">
      {children}
    </button>
  );
};

export default BgButton;
