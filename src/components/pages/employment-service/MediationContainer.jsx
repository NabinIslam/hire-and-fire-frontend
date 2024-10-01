"use client";

import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import Image from "next/image";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";

const MediationContainer = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2">
      {/* card  */}

      <FadeInLeftWithSlowBounce className="flex flex-col gap-3 rounded-lg border border-b-8 border-b-secondary p-5 shadow-md md:flex-row">
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
      </FadeInLeftWithSlowBounce>

      {/* card  */}

      <FadeInRightWithSlowBounce className="flex flex-col gap-3 rounded-lg border border-b-8 border-b-secondary p-5 shadow-md md:flex-row">
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
      </FadeInRightWithSlowBounce>

      {/* card  */}

      <FadeInLeftWithSlowBounce className="flex flex-col gap-3 rounded-lg border border-b-8 border-b-secondary p-5 shadow-md md:flex-row">
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
      </FadeInLeftWithSlowBounce>

      {/* card  */}

      <FadeInRightWithSlowBounce className="flex flex-col gap-3 rounded-lg border border-b-8 border-b-secondary p-5 shadow-md md:flex-row">
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
      </FadeInRightWithSlowBounce>
    </div>
  );
};

export default MediationContainer;
