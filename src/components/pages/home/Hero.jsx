"use client";

import Image from "next/image";
import BgButton from "../../ui/BgButton";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });
  return (
    <section className="bg-hero-bg bg-cover bg-no-repeat pb-[140px] pt-[50px] text-white">
      <div className="container flex flex-col items-center justify-between gap-16 lg:flex-row">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{
            duration: 0.2,
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          className="basis-full text-center lg:basis-1/2 lg:text-left"
        >
          <h1 className="text-5xl font-semibold leading-[60px] md:text-5xl md:leading-[60px] lg:text-[56px] lg:leading-[60px]">
            Connecting Employers <br /> with Top Global Talent
          </h1>
          <p className="mb-5 mt-3">Bringing skilled workers to your business</p>

          <BgButton>Find Talent</BgButton>
        </motion.div>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="relative min-h-[400px] w-full basis-full md:min-h-[472px] lg:basis-1/2"
        >
          <Image
            className="ml-auto object-contain lg:object-right"
            src="/images/home-hero-img.png"
            alt="Hire and Fire"
            fill
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
