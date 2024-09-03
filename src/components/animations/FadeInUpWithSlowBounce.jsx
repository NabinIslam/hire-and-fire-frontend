"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInUpWithSlowBounce = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.9, // Trigger when 10% of the component is in view
  });

  return (
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
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpWithSlowBounce;
