"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInRightWithSlowBounce = ({ children, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 50,
        damping: 12,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInRightWithSlowBounce;
