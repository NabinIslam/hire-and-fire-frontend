"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const TitleDescSection = ({ title, description, children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className={`${className} space-y-8 py-[50px]`}>
      <div className="container space-y-4">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="text-center text-4xl font-semibold lg:text-5xl"
        >
          {title}
        </motion.h2>
        <div className="mx-auto max-w-2xl">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 12,
            }}
            className="text-center text-sm font-medium"
          >
            {description}
          </motion.p>
        </div>
      </div>
      <div className="container">{children}</div>
    </section>
  );
};

export default TitleDescSection;