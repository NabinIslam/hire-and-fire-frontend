"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Button from "../../ui/Button";

const ProfessionalTraining = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row-reverse lg:gap-[100px]">
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
          <h6 className="text-2xl font-medium text-primary">
            Professtional Training
          </h6>
          <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
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
          <Button>Meet Us</Button>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="relative min-h-[400px] w-full basis-full lg:basis-1/2"
        >
          <Image
            className="object-contain lg:object-left"
            src="/images/training-program.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalTraining;
