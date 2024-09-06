"use client";

import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Step2 = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:gap-[100px]">
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
        className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left"
      >
        <h6 className="text-2xl font-medium text-primary">Step 02</h6>
        <h2 className="text-4xl font-semibold md:text-5xl lg:text-[40px]">
          View Matched Candidates
        </h2>
        <p className="text-sm font-medium">
          The "View Matched Candidates" feature on job websites streamlines the
          hiring process by presenting employers with a tailored list of
          candidates who closely match the job's criteria. Utilizing
          sophisticated algorithms, it evaluates candidates' skills, experience,
          and qualifications against the job description. This feature saves
          employers significant time by reducing the need for extensive manual
          searches and initial screenings. It ensures that only the most
          relevant candidates are highlighted, enhancing the efficiency of the
          recruitment process and increasing the chances of quickly finding the
          perfect candidate for the role.
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
          src="/images/our-process/step-2.png"
          alt="Step 1"
          fill
        />
      </motion.div>
    </section>
  );
};

export default Step2;
