"use client";

import { motion } from "framer-motion";

const SubServiceCard = ({
  icon,
  title,
  description,
  ref,
  initial,
  animate,
  transition,
}) => {
  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={transition}
      className="group border space-y-4 rounded-lg bg-white px-6 py-4 text-center shadow-lg duration-200 hover:scale-105 hover:bg-secondary hover:text-white"
    >
      {icon}
      <h5 className="text-xl font-medium">{title}</h5>
      <p className="text-sm">{description}</p>
    </motion.div>
  );
};

export default SubServiceCard;
