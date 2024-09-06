"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Step4 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:gap-[100px]">
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
        className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left"
      >
        <h6 className="text-2xl font-medium text-primary">Step 04</h6>
        <h2 className="text-4xl font-semibold md:text-5xl lg:text-[40px]">
          Select & We Complete Visa Procedures
        </h2>
        <p className="text-sm font-medium">
          Upon selecting a candidate, we manage and complete all necessary visa
          procedures to ensure a smooth transition. Our dedicated team handles
          the entire process, from gathering required documents to submitting
          applications and coordinating with immigration authorities. We provide
          guidance and support to the candidate throughout, ensuring compliance
          with all regulations. Our goal is to facilitate a hassle-free
          experience, enabling the candidate to focus on preparing for their new
          role while we take care of the visa formalities.
        </p>
      </motion.div>
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
        className="relative min-h-[260px] w-full basis-full lg:min-h-[400px] lg:basis-1/2"
      >
        <Image
          className="object-contain"
          src="/images/our-process/step-4.png"
          alt="Step 1"
          fill
        />
      </motion.div>
    </section>
  );
};

export default Step4;
