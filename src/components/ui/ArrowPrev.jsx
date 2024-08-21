import { IoIosArrowBack } from "react-icons/io";

const ArrowPrev = ({ onClick }) => {
  return (
    <div
      className="prev_arrow bg-white size-[48px] shadow-md rounded-lg flex items-center justify-center p-2 cursor-pointer lg:ml-[-30px]"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-xl" />
    </div>
  );
};

export default ArrowPrev;
