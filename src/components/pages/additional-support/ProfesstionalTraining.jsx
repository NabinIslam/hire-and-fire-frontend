"use client";

import Image from "next/image";
import Button from "../../ui/Button";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import { Link } from "@/i18n/routing";

const ProfessionalTraining = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row-reverse lg:gap-[100px]">
        <FadeInLeftWithSlowBounce className="basis-full text-center lg:basis-1/2 lg:text-left">
          <h6 className="text-2xl font-medium text-primary">
            Professtional Training
          </h6>
          <h2 className="mt-5 text-4xl font-semibold leading-[62px] lg:text-4xl">
            Industry-Specific Skills Training Programs
          </h2>
          <p className="my-5 text-sm font-medium">
            Offering diverse and specialized professional training programs
            designed to enhance skills and knowledge for workers across
            industries. Our workshops and courses focus on practical,
            industry-specific skills development, ensuring participants gain
            valuable expertise to excel in their roles. We prioritize quality
            instruction, hands-on learning, and career advancement
            opportunities.
          </p>
          <Link href="/meet-us">
            <Button>Meet Us</Button>
          </Link>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
          <Image
            className="object-contain lg:object-left"
            src="/images/training-program.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default ProfessionalTraining;
