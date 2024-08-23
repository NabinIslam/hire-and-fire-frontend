"use client";

import dynamic from "next/dynamic";
import flexjobsLogo from "@/assets/images/clients/flexjobs-logo.png";
import glassdoorLogo from "@/assets/images/clients/glassdoor-logo.png";
import indeedLogo from "@/assets/images/clients/indeed-logo.png";
import linkedinLogo from "@/assets/images/clients/linkedin-logo.png";
import upworkLogo from "@/assets/images/clients/Upwork-logo.png";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowPrev from "./ui/ArrowPrev";
import ArrowNext from "./ui/ArrowNext";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const OurClients = () => {
  const settings = {
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <ArrowPrev />,
    nextArrow: <ArrowNext />,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       initialSlide: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };

  return (
    <section className="py-[100px] space-y-[40px]">
      <h2 className="text-center text-5xl font-semibold">Our clients</h2>
      <div className="container">
        <Slider {...settings}>
          <div className="relative shadow-md rounded-lg w-[296px] h-[134px] border p-5 flex justify-center items-center">
            {/* <Image
              className="mx-auto object-cover w-full h-auto"
              src={flexjobsLogo}
              alt="Flexjobs Logo"
              fill
            /> */}
            <img className="mx-auto" src="/images/clients/linkedin-logo.png" alt="" />
          </div>
          <div className="relative shadow-md rounded-lg w-[296px] h-[134px] border p-5 flex justify-center items-center">
            {/* <Image
              className="mx-auto object-cover w-full h-auto"
              src={glassdoorLogo}
              alt="Flexjobs Logo"
              fill
            /> */}
            <img className="mx-auto" src="/images/clients/linkedin-logo.png" alt="" />
          </div>
          <div className="relative shadow-md rounded-lg w-[296px] h-[134px] border p-5 flex justify-center items-center">
            {/* <Image
              className="mx-auto object-cover w-full h-auto"
              src={indeedLogo}
              alt="Flexjobs Logo"
              fill
            /> */}
            <img className="mx-auto" src="/images/clients/linkedin-logo.png" alt="" />
          </div>
          <div className="relative shadow-md rounded-lg w-[296px] h-[134px] border p-5 flex justify-center items-center">
            {/* <Image
              className="mx-auto object-cover w-full h-auto"
              src={linkedinLogo}
              alt="Flexjobs Logo"
              fill
            /> */}
            <img className="mx-auto" src="/images/clients/linkedin-logo.png" alt="" />
          </div>
          <div className="relative shadow-md rounded-lg w-[296px] h-[134px] border p-5 flex justify-center items-center">
            {/* <Image
              className="mx-auto object-cover w-full h-auto"
              src={upworkLogo}
              alt="Flexjobs Logo"
              fill
            /> */}
            <img className="mx-auto" src="/images/clients/linkedin-logo.png" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default OurClients;
