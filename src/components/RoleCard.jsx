import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const RoleCard = ({ role }) => {
  const { title, description, image } = role;

  return (
    <div className="flex flex-col rounded-lg border p-4 text-center shadow-xl">
      <div className="relative h-[240px] w-full">
        <Image
          className="rounded-lg object-cover"
          src={image}
          alt={title}
          fill
        />
      </div>
      <h3 className="mt-3 text-2xl font-medium">{title}</h3>
      <p className="my-3 text-sm font-medium">{description}</p>
      <Link className="mt-auto" href="/contact-us">
        <button className="mx-auto flex items-center text-sm font-medium text-pink-600">
          <span>Contact Us</span> <IoMdArrowDropright className="text-lg" />
        </button>
      </Link>
    </div>
  );
};

export default RoleCard;
