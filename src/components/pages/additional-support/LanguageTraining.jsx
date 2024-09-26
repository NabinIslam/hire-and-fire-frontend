"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "@/components/ui/Button";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        borderRadius: "100%",
        border: "1px solid #ddd",
        backgroundColor: "#ddd",
      }}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        borderRadius: "100%",
        border: "1px solid #ddd",
        backgroundColor: "#ddd",
      }}
    />
  );
}

const LanguageTraining = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: (
      <div>
        <IoIosArrowForward className="rounded-full border p-2 text-4xl text-black shadow-2xl" />
      </div>
    ),
    prevArrow: (
      <div className="absolute">
        <IoIosArrowBack className="rounded-full border p-2 text-4xl text-black shadow-2xl" />
      </div>
    ),
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row lg:gap-[100px]">
        <FadeInLeftWithSlowBounce className="basis-full text-center lg:basis-1/2 lg:text-left">
          <h6 className="text-2xl font-medium text-primary">
            Language Training
          </h6>
          <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
            Essential Language Skills for the Workplace
          </h2>
          <p className="my-5 text-sm font-medium">
            At Hire and Fire, we offer language training as additional support
            for workers heading to EU countries. This training focuses on the
            basics needed for everyday life and work. The sessions cover
            speaking, listening, and writing skills to help workers feel
            confident in their new environment. We tailor the training to match
            the language of the destination, ensuring the most relevant
            experience. Plus, we offer flexible scheduling to fit the needs of
            workers, making it easy for them to prepare for their new adventure.
          </p>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
          <Image
            className="object-contain lg:object-right"
            src="/images/language-skill.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </FadeInRightWithSlowBounce>
      </div>

      <div className="container mt-[50px]">
        <FadeInDownWithSlowBounce className="slider-container">
          <Slider {...settings}>
            <div className="">
              <ReactPlayer
                className="h-full w-full"
                url="https://youtu.be/GEieqZy0aqI?si=7Z2zW8hOXRKSJ3FU"
                light={
                  <div className="relative min-h-full w-full">
                    <Image
                      className="h-full w-full rounded-lg"
                      src="/images/additional-support-video-thumbnail.png"
                      alt="thumbnail"
                      fill
                    />
                  </div>
                }
                width="100%"
                playIcon={
                  <svg
                    className="absolute"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#F90945" />
                    <path
                      d="M60 40L30 57.3205L30 22.6795L60 40Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                }
              />
              <div className="mt-4 flex items-center justify-center gap-3">
                <h6 className="text-2xl font-medium">Demo Video</h6>
                <div className="flex size-[36px] items-center justify-center rounded-full bg-primary text-[18px] text-white">
                  01
                </div>
              </div>
            </div>
            <div className="">
              <ReactPlayer
                className="h-full w-full"
                url="https://youtu.be/GEieqZy0aqI?si=7Z2zW8hOXRKSJ3FU"
                light={
                  <div className="relative min-h-full w-full">
                    <Image
                      className="h-full w-full rounded-lg"
                      src="/images/additional-support-video-thumbnail.png"
                      alt="thumbnail"
                      fill
                    />
                  </div>
                }
                width="100%"
                playIcon={
                  <svg
                    className="absolute"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#F90945" />
                    <path
                      d="M60 40L30 57.3205L30 22.6795L60 40Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                }
              />
              <div className="mt-4 flex items-center justify-center gap-3">
                <h6 className="text-2xl font-medium">Demo Video</h6>
                <div className="flex size-[36px] items-center justify-center rounded-full bg-primary text-[18px] text-white">
                  01
                </div>
              </div>
            </div>
            <div className="">
              <ReactPlayer
                className="h-full w-full"
                url="https://youtu.be/GEieqZy0aqI?si=7Z2zW8hOXRKSJ3FU"
                light={
                  <div className="relative min-h-full w-full">
                    <Image
                      className="h-full w-full rounded-lg"
                      src="/images/additional-support-video-thumbnail.png"
                      alt="thumbnail"
                      fill
                    />
                  </div>
                }
                width="100%"
                playIcon={
                  <svg
                    className="absolute"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#F90945" />
                    <path
                      d="M60 40L30 57.3205L30 22.6795L60 40Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                }
              />
              <div className="mt-4 flex items-center justify-center gap-3">
                <h6 className="text-2xl font-medium">Demo Video</h6>
                <div className="flex size-[36px] items-center justify-center rounded-full bg-primary text-[18px] text-white">
                  01
                </div>
              </div>
            </div>
            <div className="">
              <ReactPlayer
                className="h-full w-full"
                url="https://youtu.be/GEieqZy0aqI?si=7Z2zW8hOXRKSJ3FU"
                light={
                  <div className="relative min-h-full w-full">
                    <Image
                      className="h-full w-full rounded-lg"
                      src="/images/additional-support-video-thumbnail.png"
                      alt="thumbnail"
                      fill
                    />
                  </div>
                }
                width="100%"
                playIcon={
                  <svg
                    className="absolute"
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="40" cy="40" r="40" fill="#F90945" />
                    <path
                      d="M60 40L30 57.3205L30 22.6795L60 40Z"
                      fill="#D9D9D9"
                    />
                  </svg>
                }
              />
              <div className="mt-4 flex items-center justify-center gap-3">
                <h6 className="text-2xl font-medium">Demo Video</h6>
                <div className="flex size-[36px] items-center justify-center rounded-full bg-primary text-[18px] text-white">
                  01
                </div>
              </div>
            </div>
          </Slider>
        </FadeInDownWithSlowBounce>
      </div>
      <FadeInUpWithSlowBounce className="container mt-10 flex items-center justify-center">
        <Button>Meet Us</Button>
      </FadeInUpWithSlowBounce>
    </section>
  );
};

export default LanguageTraining;
