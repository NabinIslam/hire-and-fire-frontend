import { IoIosArrowForward } from "react-icons/io";

const ArrowNext = ({ onClick }) => {
  return (
    <div
      className="next_arrow bg-white size-[48px] shadow-md rounded-lg flex items-center justify-center p-2 cursor-pointer lg:mr-[-30px]"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-xl" />
    </div>
  );
};

export default ArrowNext;
