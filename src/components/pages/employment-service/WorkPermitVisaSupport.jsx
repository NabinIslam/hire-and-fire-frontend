"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";

const WorkPermitVisaSupport = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row lg:gap-[100px]">
        <FadeInLeftWithSlowBounce className="basis-full text-center lg:basis-1/2 lg:text-left">
          <h2 className="text-4xl font-semibold lg:text-4xl">
            Work Permit & Visa Support
          </h2>
          <p className="my-5 text-sm font-medium">
            Our Work Permit & Visa Support services are designed to simplify and
            expedite your international employment journey. We provide
            comprehensive assistance with obtaining work permits and visas,
            guiding you through each step of the process. Our experts handle
            everything from gathering necessary documentation and completing
            application forms to addressing regulatory requirements and
            resolving any issues that arise. We ensure compliance with local
            laws and streamline procedures, reducing the stress and complexity
            of navigating immigration processes. Whether you’re an employer
            hiring global talent or an individual seeking to work abroad, our
            tailored support maximizes efficiency and increases your chances of
            a successful outcome.
          </p>
          <Link href="/hire-worker/request-worker">
            <Button>Request Worker</Button>
          </Link>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
          <Image
            className="object-contain"
            src="/images/work-permit-visa-support.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WorkPermitVisaSupport;
