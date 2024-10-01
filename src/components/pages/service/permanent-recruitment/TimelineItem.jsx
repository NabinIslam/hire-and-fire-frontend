import { motion } from "framer-motion";

const TimelineItem = ({ event, isLeft }) => {
  return (
    <motion.div
      className={`timeline-item relative mb-8 w-1/2 rounded-lg bg-white p-6 shadow-md ${
        isLeft ? "timeline-item-left" : "timeline-item-right"
      }`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }} // Slide in from left/right
      whileInView={{ opacity: 1, x: 0 }} // Animate into view
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h3 className="text-xl font-bold text-blue-600">{event.title}</h3>
        <p className="mt-2 text-gray-600">{event.description}</p>
        <span className="mt-2 block text-sm text-gray-400">{event.date}</span>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
