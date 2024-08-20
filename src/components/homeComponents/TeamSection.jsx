import team1 from "@/assets/images/team1.png";
import team2 from "@/assets/images/team2.png";
import team3 from "@/assets/images/team3.png";
import team4 from "@/assets/images/team4.png";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Button from "../ui/Button";

const TeamSection = () => {
  return (
    <section className="py-[50px] space-y-10">
      <div className="container space-y-6">
        <h2 className="text-center text-5xl font-semibold">
          Team of recruitment expert
        </h2>
        <p className="text-center text-sm font-medium">
          A team of recruitment experts specializes in sourcing, assessing, and
          hiring top talent to <br /> meet organizational needs efficiently and
          effectively.
        </p>
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* team card */}
        <div className="shadow-xl rounded-lg">
          <div className="relative">
            <Image className="" src={team1} alt="" />
            <div className="absolute bottom-0 w-full bg-secondary p-[10px] flex justify-center gap-6 rounded-l-lg rounded-b-lg">
              <div className="bg-white size-[30px] flex justify-center items-center rounded-full">
                <FaLinkedinIn className="text-secondary" />
              </div>
              <div className="bg-white size-[30px] flex justify-center items-center rounded-full">
                <FaEnvelope className="text-secondary" />
              </div>
            </div>
          </div>
          <div className="py-4">
            <h5 className="text-xl text-center font-medium">Johnsen Roy</h5>
            <h6 className="text-center text-sm">Recruitment Manager</h6>
          </div>
        </div>

        {/* team card */}
        <div className="shadow-xl rounded-lg">
          <div className="relative">
            <Image className="" src={team2} alt="" />
            <div className="absolute bottom-0 w-full bg-secondary p-[10px] flex justify-center gap-6 rounded-l-lg rounded-b-lg">
              <div className="bg-white size-[30px] flex justify-center items-center rounded-full">
                <FaLinkedinIn className="text-secondary" />
              </div>
              <div className="bg-white size-[30px] flex justify-center items-center rounded-full">
                <FaEnvelope className="text-secondary" />
              </div>
            </div>
          </div>
          <div className="py-4">
            <h5 className="text-xl text-center font-medium">Marie</h5>
            <h6 className="text-center text-sm">Recruiter</h6>
          </div>
        </div>

        {/* team card */}

        <div className="shadow-xl rounded-lg">
          <div className="relative">
            <Image className="" src={team3} alt="" />
            <div className="absolute bottom-0 w-full bg-secondary p-[10px] flex justify-center gap-6 rounded-l-lg rounded-b-lg">
              <div className="bg-white size-[30px] flex justify-center items-center rounded-full">
                <FaLinkedinIn className="text-secondary" />
              </div>
              <div className="bg-white size-[30px] flex justify-center items-center rounded-full">
                <FaEnvelope className="text-secondary" />
              </div>
            </div>
          </div>
          <div className="py-4">
            <h5 className="text-xl text-center font-medium">Catherine</h5>
            <h6 className="text-center text-sm">Recruiter</h6>
          </div>
        </div>

        {/* team card */}

        <div className="shadow-xl rounded-lg">
          <div className="relative">
            <Image className="" src={team4} alt="" />
            <div className="absolute bottom-0 w-full bg-secondary p-[10px] flex justify-center gap-6 rounded-l-lg rounded-b-lg">
              <div className="bg-white size-[30px] flex justify-center items-center rounded-full">
                <FaLinkedinIn className="text-secondary" />
              </div>
              <div className="bg-white size-[30px] flex justify-center items-center rounded-full">
                <FaEnvelope className="text-secondary" />
              </div>
            </div>
          </div>
          <div className="py-4">
            <h5 className="text-xl text-center font-medium">Staven Joy</h5>
            <h6 className="text-center text-sm">Recruitment Coordinator</h6>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button>View All Team</Button>
      </div>
    </section>
  );
};

export default TeamSection;
