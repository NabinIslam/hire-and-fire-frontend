"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Button from "../../ui/Button";

const LanguageTraining = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
          <h6 className="text-2xl font-medium text-primary">
            Language Training
          </h6>
          <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
            Essential Language Skills for the Workplace
          </h2>
          <p className="my-5 text-sm font-medium">
            At Hire and Fire, we offer language training as additional support
            for workers heading to EU countries. This training focuses on the
            basics needed for everyday life and work. The sessions cover
            speaking, listening, and writing skills to help workers feel
            confident in their new environment. We tailor the training to match
            the language of the destination, ensuring the most relevant
            experience. Plus, we offer flexible scheduling to fit the needs of
            workers, making it easy for them to prepare for their new adventure.
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
            className="object-contain lg:object-right"
            src="/images/language-skill.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
};

export default LanguageTraining;
