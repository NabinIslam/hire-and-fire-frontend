"use client";

import team1 from "@/assets/images/team1.png";
import team2 from "@/assets/images/team2.png";
import team3 from "@/assets/images/team3.png";
import team4 from "@/assets/images/team4.png";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import Button from "../ui/Button";
import Link from "next/link";
import TitleDescSection from "../TitleDescSection";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TeamSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 10% of the component is in view
  });

  return (
    <TitleDescSection
      title="Team of recruitment expert"
      description=" A team of recruitment experts specializes in sourcing, assessing, and hiring top talent to meet organizational needs efficiently and effectively."
    >
      <div className="container grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {/* team card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          className="group rounded-lg shadow-xl"
        >
          <div className="relative">
            <Image className="" src={team1} alt="" />
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
            <h5 className="text-center text-xl font-medium">Johnsen Roy</h5>
            <h6 className="text-center text-sm">Recruitment Manager</h6>
          </div>
        </motion.div>

        {/* team card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="group rounded-lg shadow-xl"
        >
          <div className="relative">
            <Image className="" src={team2} alt="" />
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
            <h5 className="text-center text-xl font-medium">Marie</h5>
            <h6 className="text-center text-sm">Recruiter</h6>
          </div>
        </motion.div>

        {/* team card */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="group rounded-lg shadow-xl"
        >
          <div className="relative">
            <Image className="" src={team3} alt="" />
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
            <h5 className="text-center text-xl font-medium">Catherine</h5>
            <h6 className="text-center text-sm">Recruiter</h6>
          </div>
        </motion.div>

        {/* team card */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          className="group rounded-lg shadow-xl"
        >
          <div className="relative">
            <Image className="" src={team4} alt="" />
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
            <h5 className="text-center text-xl font-medium">Staven Joy</h5>
            <h6 className="text-center text-sm">Recruitment Coordinator</h6>
          </div>
        </motion.div>
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/about-us">
          <Button>View All Team</Button>
        </Link>
      </div>
    </TitleDescSection>
  );
};

export default TeamSection;
