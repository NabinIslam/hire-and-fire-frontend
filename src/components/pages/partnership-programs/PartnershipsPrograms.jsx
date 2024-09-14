"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const PartnershipsPrograms = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <section className="pt-[100px]">
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
          <h6 className="text-2xl font-medium text-primary">
            Partnerships Programs
          </h6>
          <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
            Collaborate with Us for business purpose
          </h2>
          <p className="my-5 text-sm font-medium">
            Partnership programs are collaborations between entities, fostering
            mutual benefits such as shared resources, expanded market reach, and
            combined expertise. These initiatives can include joint ventures,
            affiliate marketing agreements, or strategic alliances tailored to
            leverage strengths and capitalize on market opportunities. By
            aligning goals and pooling capabilities, partners aim to innovate,
            enhance competitiveness, and deliver enhanced value to customers
            across diverse industries.
          </p>
          <Button>Meet Us</Button>
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
            src="/images/collaborate.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsPrograms;
