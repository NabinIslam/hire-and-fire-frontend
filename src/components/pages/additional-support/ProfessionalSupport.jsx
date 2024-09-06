"use client";

import Image from "next/image";
import Button from "../../ui/Button";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const ProfessionalSupport = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <section className="pb-[50px] pt-[100px]">
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
          <div className="flex h-[46px] w-[264px] items-center justify-center border-2 border-dashed border-primary text-xl font-medium text-primary">
            Professional Support
          </div>
          <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
            We also provide support for Workers{" "}
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
          <Button>Contact Us</Button>
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
            className="object-contain lg:object-right"
            src="/images/additional-support-img.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalSupport;