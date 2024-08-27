import { IoIosArrowForward } from "react-icons/io";

const ArrowNext = ({ onClick }) => {
  return (
    <div
      className="next_arrow flex size-[48px] cursor-pointer items-center justify-center rounded-lg bg-white p-2 shadow-md lg:mr-[-30px]"
      onClick={onClick}
    >
      <IoIosArrowForward className="text-xl" />
    </div>
  );
};

export default ArrowNext;
