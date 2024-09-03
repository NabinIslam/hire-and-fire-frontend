"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowPrev from "./ui/ArrowPrev";
import ArrowNext from "./ui/ArrowNext";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const OurClients = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.9, // Trigger when 10% of the component is in view
  });

  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 50,
        damping: 12,
      }}
      className="space-y-[40px] py-[100px]"
    >
      <h2 className="text-center text-5xl font-semibold">Our clients</h2>
      <div className="container">
        <Slider {...settings}>
          <div className="relative min-h-[134px] rounded-lg border shadow-lg">
            <Image
              className="object-contain px-12"
              src="/images/clients/flexjobs-logo.png"
              fill
              alt="Flexjobs Logo"
            />
          </div>
          <div className="relative min-h-[134px] rounded-lg border shadow-lg">
            <Image
              className="object-contain px-12"
              src="/images/clients/Upwork-logo.png"
              alt="Upwork Logo"
              fill
            />
          </div>
          <div className="relative min-h-[134px] rounded-lg border shadow-lg">
            <Image
              className="object-contain px-12"
              src="/images/clients/linkedin-logo.png"
              alt="Linkedin Logo"
              fill
            />
          </div>
          <div className="relative min-h-[134px] rounded-lg border shadow-lg">
            <Image
              className="object-contain px-12"
              src="/images/clients/glassdoor-logo.png"
              alt="Glassdoor Logo"
              fill
            />
          </div>
          <div className="relative min-h-[134px] rounded-lg border shadow-lg">
            <Image
              className="object-contain px-12"
              src="/images/clients/Indeed-logo.png"
              alt="Indeed Logo"
              fill
            />
          </div>
        </Slider>
      </div>
    </motion.section>
  );
};

export default OurClients;

// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
