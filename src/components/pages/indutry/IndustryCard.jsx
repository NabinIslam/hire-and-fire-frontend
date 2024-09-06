import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import FadeInLeftWithSlowBounce from "../../animations/FadeInLeftWithSlowBounce";

const IndustryCard = ({ industry }) => {
  const { name, shortDescription, photo, slug } = industry;

  return (
    <FadeInLeftWithSlowBounce>
      <div className="flex flex-col rounded-lg border p-4 text-center shadow-xl">
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
        <Link className="mt-auto" href={`/industry/${slug}`}>
          <button className="mx-auto flex items-center text-sm font-medium text-pink-600">
            <span>Read More</span> <IoMdArrowDropright className="text-lg" />
          </button>
        </Link>
      </div>
    </FadeInLeftWithSlowBounce>
  );
};

export default IndustryCard;