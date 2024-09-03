"use client";

import { motion } from "framer-motion";

const FadeInRightWithSlowBounce = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
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
