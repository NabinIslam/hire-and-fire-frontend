"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";

const WorkerAccommodationService = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-[50px]">
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
            Worker Accommodation Service
          </h6>
          <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
            Global Accommodation Services for Workers
          </h2>
          <p className="my-5 text-sm font-medium">
            Providing comprehensive global worker accommodation services,
            ensuring comfortable and convenient lodging solutions for
            international employees. Our services cater to diverse industry
            needs, offering flexible housing options and personalized support to
            meet workforce demands worldwide. We prioritize safety, comfort, and
            seamless integration to enhance productivity and employee
            satisfaction.
          </p>
          <Button>Contact Us</Button>
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
            className="object-contain"
            src="/images/global-accomodation.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WorkerAccommodationService;
