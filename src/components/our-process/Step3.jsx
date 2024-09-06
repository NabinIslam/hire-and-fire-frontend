"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Step3 = () => {
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
        <h6 className="text-2xl font-medium text-primary">Step 03</h6>
        <h2 className="text-4xl font-semibold md:text-5xl lg:text-[40px]">
          Interview Selected Candidates
        </h2>
        <p className="text-sm font-medium">
          When interviewing selected candidates, focus on evaluating their
          skills, experience, and cultural fit for the role. Start with a brief
          introduction of your company and the position. Ask open-ended
          questions that encourage detailed responses about their past work,
          problem-solving abilities, and how they handle challenges. Assess
          their communication skills, enthusiasm, and alignment with your
          company's values. Provide an opportunity for candidates to ask
          questions, offering transparency and clarity about the role and
          expectations. Aim for a structured yet conversational tone to create a
          comfortable environment.
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
          src="/images/our-process/step-3.png"
          alt="Step 1"
          fill
        />
      </motion.div>
    </section>
  );
};

export default Step3;
