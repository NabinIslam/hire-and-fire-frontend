import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const IndustryCard = ({ industry }) => {
  const { name, shortDescription, photo } = industry;
  console.log(industry);

  return (
    <div className="rounded-lg border p-4 text-center shadow-xl">
      <div className="relative h-[240px] w-full">
        <Image
          className="rounded-lg object-cover"
          src={photo}
          alt={name}
          fill
        />
      </div>
      <h3 className="mt-3 text-2xl font-medium">{name}</h3>
      <p className="my-3 text-sm font-medium">{shortDescription}</p>
      <Link className="mt-5" href={`/industry/${name}`}>
        <button className="mx-auto flex items-center text-sm font-medium text-pink-600">
          <span>Contact Us</span> <IoMdArrowDropright className="text-lg" />
        </button>
      </Link>
    </div>
  );
};

export default IndustryCard;
