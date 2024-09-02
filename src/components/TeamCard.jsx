import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const TeamCard = ({ team }) => {
  const { photo, name, designtion } = team;

  return (
    <div className="group rounded-lg shadow-xl">
      <div className="relative">
        <div className="relative min-h-[354px] w-full">
          <Image
            className="rounded-lg object-cover"
            src={photo}
            alt={name}
            fill
          />
        </div>
        <div className="absolute bottom-0 flex h-[50px] w-full items-center justify-center gap-6 rounded-lg bg-secondary duration-200 group-hover:bg-primary">
          <Link
            className="flex size-[30px] items-center justify-center rounded-full bg-white duration-200 group-hover:size-[40px]"
            href="#"
          >
            <FaLinkedinIn className="text-secondary group-hover:text-primary" />
          </Link>

          <Link
            className="flex size-[30px] items-center justify-center rounded-full bg-white duration-200 group-hover:size-[40px]"
            href="#"
          >
            <FaEnvelope className="text-secondary group-hover:text-primary" />
          </Link>
        </div>
      </div>
      <div className="py-4">
        <h5 className="text-center text-xl font-medium">{name}</h5>
        <h6 className="text-center text-sm">{designtion}</h6>
      </div>
    </div>
  );
};

export default TeamCard;
