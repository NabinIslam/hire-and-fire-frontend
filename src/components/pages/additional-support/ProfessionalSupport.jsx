"use client";

import Image from "next/image";
import Button from "../../ui/Button";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import ServiceImage from "@/components/common/ServiceImage";
import { Link } from "@/i18n/routing";

const ProfessionalSupport = () => {
  return (
    <section className="pb-[50px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row lg:gap-[100px]">
        <FadeInLeftWithSlowBounce className="basis-full text-center lg:basis-1/2 lg:text-left">
          <div className="flex h-[46px] w-[264px] items-center justify-center border-2 border-dashed border-primary text-xl font-medium text-primary">
            Professional Support
          </div>
          <h2 className="mt-5 text-4xl font-semibold leading-[62px] lg:text-4xl">
            We also provide support for Workers
          </h2>
          <p className="my-5 text-sm font-medium">
            "Support for Workers" encompasses comprehensive assistance aimed at
            enhancing workplace productivity and employee satisfaction. Our
            services include HR guidance, training programs, and resource
            allocation to foster a positive work environment. We prioritize
            employee well-being through health and safety initiatives, career
            development opportunities, and responsive problem-solving. By
            offering personalized support and addressing individual needs, we
            empower workers to thrive professionally and contribute effectively
            to organizational success.
          </p>
          <Link href="/contact-us">
            <Button>Meet Us</Button>
          </Link>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/professional-support-img.png"
            title1="Worker Accommodation"
            desc1="Global worker housing and lodging."
            title2="Training Programs"
            desc2="Global professional training programs."
            title3="Language Training"
            desc3="Boost fluency with expert guidance."
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default ProfessionalSupport;
