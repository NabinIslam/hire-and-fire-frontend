import { IoIosArrowBack } from "react-icons/io";

const ArrowPrev = ({ onClick }) => {
  return (
    <div
      className="prev_arrow flex size-[48px] cursor-pointer items-center justify-center rounded-lg bg-white p-2 shadow-md lg:ml-[-30px]"
      onClick={onClick}
    >
      <IoIosArrowBack className="text-xl" />
    </div>
  );
};

export default ArrowPrev;
