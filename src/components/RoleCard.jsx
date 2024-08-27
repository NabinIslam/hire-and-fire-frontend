import { IoMdArrowDropright } from "react-icons/io";

const RoleCard = ({ role }) => {
  const { title, description, image } = role;

  return (
    <div className="space-y-3 rounded-lg p-4 text-center shadow-xl">
      <img className="rounded-lg" src={image} alt="" />
      <h3 className="text-2xl">{title}</h3>
      <p className="text-sm">{description}</p>
      <button className="mx-auto flex items-center text-sm text-pink-600">
        <span>Contact Us</span> <IoMdArrowDropright className="text-lg" />
      </button>
    </div>
  );
};

export default RoleCard;
