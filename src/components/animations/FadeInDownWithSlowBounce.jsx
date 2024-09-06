"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInDownWithSlowBounce = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
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

export default FadeInDownWithSlowBounce;
