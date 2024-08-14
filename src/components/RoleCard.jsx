import { IoMdArrowDropright } from 'react-icons/io';

const RoleCard = ({ role }) => {
  const { title, description, image } = role;

  return (
    <div className="shadow-xl p-4 rounded-lg text-center space-y-3">
      <img className="rounded-lg" src={image} alt="" />
      <h3 className="text-2xl">{title}</h3>
      <p className="text-sm">{description}</p>
      <button className="text-pink-600 text-sm flex items-center mx-auto">
        <span>Contact Us</span> <IoMdArrowDropright className="text-lg" />
      </button>
    </div>
  );
};

export default RoleCard;
