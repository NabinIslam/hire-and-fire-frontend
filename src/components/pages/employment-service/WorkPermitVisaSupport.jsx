"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "./ui/Button";
import Image from "next/image";

const WorkPermitVisaSupport = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row lg:gap-[100px]">
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
          className="basis-full text-center lg:basis-1/2 lg:text-left"
        >
          <h2 className="text-4xl font-semibold lg:text-5xl">
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
          <Button>Find Talent</Button>
        </motion.div>
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
          className="relative min-h-[400px] w-full basis-full lg:basis-1/2"
        >
          <Image
            className="object-contain"
            src="/images/work-permit-visa-support.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkPermitVisaSupport;
