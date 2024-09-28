"use client";

import { Link } from "@/i18n/routing";
import Button from "@/components/ui/Button";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import ServiceImage from "@/components/common/ServiceImage";

const WorkPermitAssistance = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Work Permit Assistance
          </h2>
          <p className="text-sm font-medium">
            Our Work Permit Assistance service streamlines the process of
            securing work permits for your international hires. With a deep
            understanding of local regulations and requirements, we ensure
            compliance while handling all paperwork and communication with
            government authorities. From initial consultation to final approval,
            we provide personalized support, allowing you to focus on your
            business operations. Whether you're relocating employees or hiring
            foreign talent, our team ensures a smooth and timely process,
            minimizing delays and ensuring a hassle-free experience.
          </p>
          <div>
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Work Permit Assistance.png"
            title1="Permit Application Guidance"
            desc1="Efficient permit application support."
            title2="Visa & Work Permit Solutions"
            desc2="Comprehensive visa & permit services."
            title3="Visa & Permit Processing Aid"
            desc3="Expert help with visa processing."
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WorkPermitAssistance;
