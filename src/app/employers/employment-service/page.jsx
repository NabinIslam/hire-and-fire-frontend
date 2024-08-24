import PageBanner from "@/components/PageBanner";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const EmploymentService = () => {
  return (
    <main>
      <PageBanner title="Employment Service" />
      <section className="pt-[100px] pb-[50px]">
        <div className="container">
          <h6 className="text-primary text-center lg:text-left text-2xl font-medium">
            Direct Employment
          </h6>
          <h2 className="text-4xl text-center lg:text-left md:text-5xl lg:text-[40px] font-semibold mt-4">
            Mediation in Employment
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex gap-3 shadow-lg p-5 rounded-lg border-b-8 border-b-secondary border">
              <div className="basis-[50px]">
                <Image
                  src="/images/mediation-icons/1.png"
                  alt="Recruitment & Administration"
                  height={50}
                  width={50}
                />
              </div>
              <div className="space-y-4 basis-full">
                <h5 className="text-2xl font-medium">
                  Recruitment & Administration
                </h5>
                <p className="text-sm font-medium">
                  Recruitment & Administration involves sourcing, attracting,
                  and selecting candidates for employment while managing the
                  organizational processes, policies, and documentation
                  necessary to support these activities. This function ensures
                  that the right talent is hired and administrative tasks are
                  efficiently handled to maintain smooth operations within an
                  organization.
                </p>
                <Link
                  className="text-secondary text-sm flex items-center font-medium"
                  href="#"
                >
                  Find Talent <IoMdArrowDropright className="text-xl" />
                </Link>
              </div>
            </div>
            <div className="flex gap-3 shadow-lg p-5 rounded-lg border-b-8 border-b-secondary border">
              <div className="basis-[50px]">
                <Image
                  src="/images/mediation-icons/1.png"
                  alt="Recruitment & Administration"
                  height={50}
                  width={50}
                />
              </div>
              <div className="space-y-4 basis-full">
                <h5 className="text-2xl font-medium">
                  Global advertising of vacancies{" "}
                </h5>
                <p className="text-sm font-medium">
                  Global Advertising of Vacancies utilizes various international
                  platforms and media to promote job openings across different
                  regions. This strategy aims to attract a diverse pool of
                  candidates by reaching a wide audience, leveraging online job
                  boards, social media, and industry-specific channels to ensure
                  effective global talent acquisition.
                </p>
                <Link
                  className="text-secondary text-sm flex items-center font-medium"
                  href="#"
                >
                  Find Talent <IoMdArrowDropright className="text-xl" />
                </Link>
              </div>
            </div>
            <div className="flex gap-3 shadow-lg p-5 rounded-lg border-b-8 border-b-secondary border">
              <div className="basis-[50px]">
                <Image
                  src="/images/mediation-icons/1.png"
                  alt="Recruitment & Administration"
                  height={50}
                  width={50}
                />
              </div>
              <div className="space-y-4 basis-full">
                <h5 className="text-2xl font-medium">
                  Guidance for work permits and visas
                </h5>
                <p className="text-sm font-medium">
                  Guidance for Work Permits and Visas provides essential support
                  to employees and employers in navigating the legal
                  requirements for working in a foreign country. This includes
                  assistance with application processes, documentation,
                  compliance with immigration laws, and understanding different
                  visa types to ensure smooth and lawful international
                  employment transitions.
                </p>
                <Link
                  className="text-secondary text-sm flex items-center font-medium"
                  href="#"
                >
                  Find Talent <IoMdArrowDropright className="text-xl" />
                </Link>
              </div>
            </div>
            <div className="flex gap-3 shadow-lg p-5 rounded-lg border-b-8 border-b-secondary border">
              <div className="basis-[50px]">
                <Image
                  src="/images/mediation-icons/1.png"
                  alt="Recruitment & Administration"
                  height={50}
                  width={50}
                />
              </div>
              <div className="space-y-4 basis-full">
                <h5 className="text-2xl font-medium">
                  Integration support for workers
                </h5>
                <p className="text-sm font-medium">
                  Integration Support for Workers helps new employees acclimate
                  to their workplace and community. This includes orientation,
                  training, cultural adaptation resources, mentoring programs,
                  and assistance with housing, language, and local services.
                  Effective integration support ensures a smooth transition,
                  enhancing employee satisfaction and productivity.
                </p>
                <Link
                  className="text-secondary text-sm flex items-center font-medium"
                  href="#"
                >
                  Find Talent <IoMdArrowDropright className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[50px]">
        <div className="container text-center">
          <h6 className="text-primary text-2xl font-medium">
            Temporary in Employment
          </h6>
          <h2 className="text-4xl md:text-5xl lg:text-[40px] font-semibold mt-4 mb-10">
            Assignment of workers
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="basis-full lg:basis-1/3 px-8 py-5 shadow-lg rounded-3xl border-t-[24px] border-secondary space-y-4">
              <Image
                className="mx-auto"
                src="/images/assignment-workers-icons/1.png"
                alt="Adaptation to market challenges"
                height={80}
                width={80}
              />
              <h5 className="text-2xl font-medium">
                Adaptation to market challenges
              </h5>
              <p className="text-sm font-medium">
                Adaptation to Market Challenges involves strategies and actions
                taken by businesses to respond to evolving market conditions.
                This includes innovation, diversification, cost management, and
                leveraging new technologies. By staying agile and proactive,
                companies can navigate economic fluctuations, competitive
                pressures, and changing customer demands to maintain growth and
                profitability.
              </p>
            </div>
            <div className="basis-full lg:basis-1/3 space-y-8">
              <div className="px-8 py-5 shadow-lg rounded-3xl border-t-[24px] border-secondary space-y-4">
                <Image
                  className="mx-auto"
                  src="/images/assignment-workers-icons/2.png"
                  alt="Adaptation to market challenges"
                  height={80}
                  width={80}
                />
                <h5 className="text-2xl font-medium">Staffing Agency</h5>
                <p className="text-sm font-medium">
                  Staffing Agency connects employers with temporary or permanent
                  employees. They handle recruitment, screening, and placement
                  of candidates for various job roles, providing businesses with
                  flexible workforce solutions and job seekers with employment
                  opportunities. These agencies streamline hiring processes,
                  saving time and resources for both employers and candidates.
                </p>
              </div>
              <div className="px-8 py-5 shadow-lg rounded-3xl border-t-[24px] border-secondary space-y-4">
                <Image
                  className="mx-auto"
                  src="/images/assignment-workers-icons/3.png"
                  alt="Adaptation to market challenges"
                  height={80}
                  width={80}
                />
                <h5 className="text-2xl font-medium">
                  Payroll & compliance management
                </h5>
                <p className="text-sm font-medium">
                  Payroll & Compliance Management involves overseeing the
                  accurate and timely processing of employee salaries, taxes,
                  and benefits while ensuring adherence to legal regulations and
                  company policies. This function minimizes risks related to
                  financial inaccuracies and legal non-compliance, maintaining
                  organizational integrity and employee satisfaction.
                </p>
              </div>
            </div>
            <div className="basis-full lg:basis-1/3 px-8 py-5 shadow-lg rounded-3xl border-t-[24px] border-secondary space-y-4">
              <Image
                className="mx-auto"
                src="/images/assignment-workers-icons/4.png"
                alt="Adaptation to market challenges"
                height={80}
                width={80}
              />
              <h5 className="text-2xl font-medium">Fixed-term employment</h5>
              <p className="text-sm font-medium">
                Fixed-Term Employment refers to a contractual work arrangement
                where an employee is hired for a specific period or project.
                This type of employment ends on a predetermined date or upon
                project completion. It offers flexibility for employers to meet
                temporary needs and provides workers with defined terms and
                conditions of employment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-[50px] pb-[100px]">
        <div className="container flex flex-col lg:flex-row items-center justify-between md:gap-[50px] lg:gap-[100px]">
          <div className="basis-full lg:basis-1/2 text-center lg:text-left">
            <h2 className="text-4xl lg:text-5xl font-semibold">
              Work Permit & Visa Support
            </h2>
            <p className="text-sm font-medium my-5">
              Our Work Permit & Visa Support services are designed to simplify
              and expedite your international employment journey. We provide
              comprehensive assistance with obtaining work permits and visas,
              guiding you through each step of the process. Our experts handle
              everything from gathering necessary documentation and completing
              application forms to addressing regulatory requirements and
              resolving any issues that arise. We ensure compliance with local
              laws and streamline procedures, reducing the stress and complexity
              of navigating immigration processes. Whether you’re an employer
              hiring global talent or an individual seeking to work abroad, our
              tailored support maximizes efficiency and increases your chances
              of a successful outcome.
            </p>
            <Button>Find Talent</Button>
          </div>
          <div className="basis-full lg:basis-1/2 relative w-full min-h-[400px]">
            <Image
              className="object-contain"
              src="/images/work-permit-visa-support.png"
              alt="Work Permit & Visa Support"
              fill
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmploymentService;
