"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Step1 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row lg:gap-[100px]">
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
        className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left"
      >
        <h6 className="text-2xl font-medium text-primary">Step 01</h6>
        <h2 className="text-4xl font-semibold md:text-5xl lg:text-[40px]">
          Tell Us Your Need
        </h2>
        <p className="text-sm font-medium">
          Share your hiring needs with us, and we'll tailor our services to find
          the perfect fit for your team. Specify the job role, required skills,
          experience level, and any other important criteria. Whether you need
          temporary staff, permanent hires, or specialized talent, we have the
          expertise to match your requirements. Our goal is to streamline the
          recruitment process, saving you time and ensuring you get top-quality
          candidates who meet your expectations and contribute to your company's
          success.
        </p>
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
        className="relative min-h-[260px] w-full basis-full lg:min-h-[400px] lg:basis-1/2"
      >
        <Image
          className="object-contain"
          src="/images/our-process/step-1.png"
          alt="Step 1"
          fill
        />
      </motion.div>
    </section>
  );
};

export default Step1;
