"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const OurSuccess = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.9, // Trigger when 10% of the component is in view
  });

  return (
    <section className="bg-our-success-bg bg-cover bg-center py-[70px] text-white">
      <div className="container space-y-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="text-center text-4xl font-semibold lg:text-5xl"
        >
          Our Success
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="text-center text-sm"
        >
          We believe that great companies are built by great people
        </motion.p>

        <div className="grid grid-cols-1 gap-5 divide-y md:grid-cols-2 md:divide-x-0 md:divide-y-0 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-y-0">
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
            className="space-y-5 p-4"
          >
            <h5 className="text-center text-xl">
              25,000+ <br /> Workers Placed
            </h5>
            <p className="text-center text-sm">
              We've helped over 25,000 skilled workers find jobs globally. Our
              rigorous selection process ensures we provide only the best
              talent.
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
            className="space-y-5 p-4"
          >
            <h5 className="text-center text-xl">
              Expertise Across <br />
              the Globe
            </h5>
            <p className="text-center text-sm">
              We specialize in navigating complex international recruitment
              processes. Our knowledge helps us place workers efficiently.
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
            className="space-y-5 p-4"
          >
            <h5 className="text-center text-xl">
              Ethical <br /> Recruitment
            </h5>
            <p className="text-center text-sm">
              We believe in fair and honest recruitment practices. Our
              commitment to ethical standards has earned us recognition from top
              organizations.
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
            className="space-y-5 p-4"
          >
            <h5 className="text-center text-xl">
              Your Trusted <br />
              Partner
            </h5>
            <p className="text-center text-sm">
              We strive to be your reliable partner in finding the right talent.
              Our goal is to create successful and long-lasting matches in the
              global workforce.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;
