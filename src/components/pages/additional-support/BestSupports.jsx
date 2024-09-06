"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BestSupports = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <div className="container mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
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
        className="space-y-3 rounded-lg border px-10 py-6 shadow-lg"
      >
        <Image
          className="mx-auto"
          src="/images/best-support/1.png"
          height={60}
          width={60}
        />
        <h6 className="text-center text-2xl font-medium">Pre-selection</h6>
        <p className="text-center text-sm font-medium">
          Initial screening process to identify and shortlist qualified job
          candidates for further evaluation.
        </p>
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 50,
          damping: 12,
        }}
        className="space-y-3 rounded-lg border px-10 py-6 shadow-lg"
      >
        <Image
          className="mx-auto"
          src="/images/best-support/2.png"
          height={60}
          width={60}
        />
        <h6 className="text-center text-2xl font-medium">Post selection</h6>
        <p className="text-center text-sm font-medium">
          Finalizing hiring process, including job offer, onboarding, and
          integrating the new employee into the team.
        </p>
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
        className="space-y-3 rounded-lg border px-10 py-6 shadow-lg"
      >
        <Image
          className="mx-auto"
          src="/images/best-support/3.png"
          height={60}
          width={60}
        />
        <h6 className="text-center text-2xl font-medium">Pre-selection</h6>
        <p className="text-center text-sm font-medium">
          Initial screening process to identify and shortlist qualified job
          candidates for further evaluation.
        </p>
      </motion.div>
    </div>
  );
};

export default BestSupports;
