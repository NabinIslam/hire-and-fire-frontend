import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import FadeInLeftWithSlowBounce from "../../animations/FadeInLeftWithSlowBounce";
import { Link } from "@/i18n/routing";

const IndustryCard = ({ industry }) => {
  const { name, shortDescription, photo, slug } = industry;

  return (
    <FadeInLeftWithSlowBounce>
      <div className="flex flex-col items-center rounded-lg border-b-8 border-b-primary bg-industry-card-bg bg-contain bg-no-repeat p-4 text-center shadow-xl">
        <div className="relative min-h-[240px] w-full">
          <Image
            className="rounded-[33px] object-cover"
            src={photo}
            alt={name}
            fill
          />
        </div>
        <h3 className="mt-[15px] text-2xl font-medium">{name}</h3>
        <p className="my-[15px] text-sm font-medium">{shortDescription}</p>
        <Link className="mt-auto" href={`/industry/${slug}`}>
          <button className="mx-auto flex items-center text-sm font-medium text-primary duration-200 hover:text-secondary">
            <span>Read More</span> <IoMdArrowDropright className="text-lg" />
          </button>
        </Link>
      </div>
    </FadeInLeftWithSlowBounce>
  );
};

export default IndustryCard;
