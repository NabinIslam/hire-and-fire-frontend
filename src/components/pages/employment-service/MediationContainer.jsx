"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const MediationContainer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
      {/* card  */}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 12,
        }}
        className="flex flex-col gap-3 rounded-lg border border-b-8 border-b-secondary p-5 shadow-lg md:flex-row"
      >
        <div className="basis-[50px]">
          <Image
            src="/images/mediation-icons/1.png"
            alt="Recruitment & Administration"
            height={50}
            width={50}
          />
        </div>
        <div className="flex basis-full flex-col items-start gap-4">
          <h5 className="text-2xl font-medium">Recruitment & Administration</h5>
          <p className="text-sm font-medium">
            Recruitment & Administration involves sourcing, attracting, and
            selecting candidates for employment while managing the
            organizational processes, policies, and documentation necessary to
            support these activities. This function ensures that the right
            talent is hired and administrative tasks are efficiently handled to
            maintain smooth operations within an organization.
          </p>
          <Link
            className="mt-auto flex items-center text-sm font-medium text-secondary"
            href="#"
          >
            Find Talent <IoMdArrowDropright className="text-xl" />
          </Link>
        </div>
      </motion.div>

      {/* card  */}

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
        className="flex flex-col gap-3 rounded-lg border border-b-8 border-b-secondary p-5 shadow-lg md:flex-row"
      >
        <div className="basis-[50px]">
          <Image
            src="/images/mediation-icons/2.png"
            alt="Recruitment & Administration"
            height={50}
            width={50}
          />
        </div>
        <div className="flex basis-full flex-col items-start gap-4">
          <h5 className="text-2xl font-medium">
            Global advertising of vacancies{" "}
          </h5>
          <p className="text-sm font-medium">
            Global Advertising of Vacancies utilizes various international
            platforms and media to promote job openings across different
            regions. This strategy aims to attract a diverse pool of candidates
            by reaching a wide audience, leveraging online job boards, social
            media, and industry-specific channels to ensure effective global
            talent acquisition.
          </p>
          <Link
            className="mt-auto flex items-center text-sm font-medium text-secondary"
            href="#"
          >
            Find Talent <IoMdArrowDropright className="text-xl" />
          </Link>
        </div>
      </motion.div>

      {/* card  */}

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 12,
        }}
        className="flex flex-col gap-3 rounded-lg border border-b-8 border-b-secondary p-5 shadow-lg md:flex-row"
      >
        <div className="basis-[50px]">
          <Image
            src="/images/mediation-icons/3.png"
            alt="Recruitment & Administration"
            height={50}
            width={50}
          />
        </div>
        <div className="flex basis-full flex-col items-start gap-4">
          <h5 className="text-2xl font-medium">
            Guidance for work permits and visas
          </h5>
          <p className="text-sm font-medium">
            Guidance for Work Permits and Visas provides essential support to
            employees and employers in navigating the legal requirements for
            working in a foreign country. This includes assistance with
            application processes, documentation, compliance with immigration
            laws, and understanding different visa types to ensure smooth and
            lawful international employment transitions.
          </p>
          <Link
            className="mt-auto flex items-center text-sm font-medium text-secondary"
            href="#"
          >
            Find Talent <IoMdArrowDropright className="text-xl" />
          </Link>
        </div>
      </motion.div>

      {/* card  */}

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
        className="flex flex-col gap-3 rounded-lg border border-b-8 border-b-secondary p-5 shadow-lg md:flex-row"
      >
        <div className="basis-[50px]">
          <Image
            src="/images/mediation-icons/4.png"
            alt="Recruitment & Administration"
            height={50}
            width={50}
          />
        </div>
        <div className="flex basis-full flex-col items-start gap-4">
          <h5 className="text-2xl font-medium">
            Integration support for workers
          </h5>
          <p className="text-sm font-medium">
            Integration Support for Workers helps new employees acclimate to
            their workplace and community. This includes orientation, training,
            cultural adaptation resources, mentoring programs, and assistance
            with housing, language, and local services. Effective integration
            support ensures a smooth transition, enhancing employee satisfaction
            and productivity.
          </p>
          <Link
            className="mt-auto flex items-center text-sm font-medium text-secondary"
            href="#"
          >
            Find Talent <IoMdArrowDropright className="text-xl" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default MediationContainer;
