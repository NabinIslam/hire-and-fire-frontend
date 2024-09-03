"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FadeInRightWithSlowBounce = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.9, // Trigger when 10% of the component is in view
  });

  return (
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
    >
      {children}
    </motion.div>
  );
};

export default FadeInRightWithSlowBounce;
