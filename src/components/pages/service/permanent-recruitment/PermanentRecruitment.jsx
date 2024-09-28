"use client";

import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import Button from "../../../ui/Button";
import { Link } from "@/i18n/routing";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import ServiceImage from "@/components/common/ServiceImage";

const PermanentRecruitment = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Permanent Recruitment
          </h2>
          <p className="text-sm font-medium">
            Permanent recruitment involves the process of hiring employees for
            long-term positions within an organization. It includes sourcing
            candidates, conducting interviews, and selecting the best fit based
            on skills and cultural fit. This process aims to secure talented
            individuals who align with the company's goals and values for
            sustained productivity and growth. Permanent recruitment strategies
            often involve various assessments and negotiations to ensure mutual
            satisfaction and long-term commitment from both the employer and the
            employee.
          </p>
          <div>
            <Link href="#">
              <Button>See More</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Permanent Recruitment.png"
            title1="Tailored Job Matching"
            desc1="Customized job matching for you."
            title2="Global Talent Pool Access"
            desc2="Access to a global talent pool."
            title3="Retention-Focused Hiring"
            desc3="Global retention-focused hiring."
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default PermanentRecruitment;
