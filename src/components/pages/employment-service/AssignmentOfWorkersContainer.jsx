"use client";

import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import Image from "next/image";

const AssignmentOfWorkersContainer = () => {
  return (
    <section className="py-[50px]">
      <div className="container text-center">
        <FadeInDownWithSlowBounce>
          <h6 className="text-2xl font-medium text-primary">
            Temporary in Employment
          </h6>
          <h2 className="mb-10 mt-4 text-4xl font-semibold md:text-4xl lg:text-[40px]">
            Assignment of workers
          </h2>
        </FadeInDownWithSlowBounce>
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <FadeInLeftWithSlowBounce className="min-h-[380px] basis-full space-y-4 rounded-3xl border-t-[24px] border-secondary px-8 py-5 shadow-md lg:basis-1/3">
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
              taken by businesses to respond to evolving market conditions. This
              includes innovation, diversification, cost management, and
              leveraging new technologies. By staying agile and proactive,
              companies can navigate economic fluctuations, competitive
              pressures, and changing customer demands to maintain growth and
              profitability.
            </p>
          </FadeInLeftWithSlowBounce>

          <div className="basis-full space-y-8 lg:basis-1/3">
            <FadeInDownWithSlowBounce>
              <div className="min-h-[380px] space-y-4 rounded-3xl border-t-[24px] border-secondary px-8 py-5 shadow-md">
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
            </FadeInDownWithSlowBounce>

            <FadeInUpWithSlowBounce>
              <div className="min-h-[380px] space-y-4 rounded-3xl border-t-[24px] border-secondary px-8 py-5 shadow-md">
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
            </FadeInUpWithSlowBounce>
          </div>
          <FadeInRightWithSlowBounce className="min-h-[380px] basis-full space-y-4 rounded-3xl border-t-[24px] border-secondary px-8 py-5 shadow-md lg:basis-1/3">
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
              where an employee is hired for a specific period or project. This
              type of employment ends on a predetermined date or upon project
              completion. It offers flexibility for employers to meet temporary
              needs and provides workers with defined terms and conditions of
              employment.
            </p>
          </FadeInRightWithSlowBounce>
        </div>
      </div>
    </section>
  );
};

export default AssignmentOfWorkersContainer;
