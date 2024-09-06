"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";

const AddressInfoSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      <FadeInDownWithSlowBounce>
        <h4 className="text-center text-[40px] font-bold text-primary">
          Contact Us
        </h4>

        <p className="mb-8 mt-2 text-center text-2xl font-medium">
          Any question or remarks? Just write us a message
        </p>
      </FadeInDownWithSlowBounce>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* card */}
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
          className="flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl border bg-[#FAF8F8] p-4 shadow-xl"
        >
          <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white">
            <FaMapMarkerAlt />
          </div>
          <h6 className="text-2xl font-medium">Office Address</h6>
          <Link href="https://maps.app.goo.gl/52W4k1TirayToasE7">
            <p className="text-center text-sm font-medium">
              Bucureşti Sectorul 1, Strada ING.
              <br /> ZABLOVSCHI, Nr. 10, BIROUL 1
            </p>
          </Link>
        </motion.div>

        {/* card */}
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
          className="flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl border bg-[#FAF8F8] p-4 shadow-xl"
        >
          <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white">
            <FaPhoneVolume />
          </div>
          <h6 className="text-2xl font-medium">Call Us</h6>
          <Link href="tel:+40737228622">
            <p className="text-center text-sm font-medium">+(40) 7372 28622</p>
          </Link>
        </motion.div>

        {/* card */}
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
          className="flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl border bg-[#FAF8F8] p-4 shadow-xl"
        >
          <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white">
            <FaEnvelope />
          </div>
          <h6 className="text-2xl font-medium">Email Us</h6>
          <Link href="mailto:career@hireandfire.eu">
            <p className="text-center text-sm font-medium">
              career@hireandfire.eu
            </p>
          </Link>
        </motion.div>
      </div>
    </>
  );
};

export default AddressInfoSection;
