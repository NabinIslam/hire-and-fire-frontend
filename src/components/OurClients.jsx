"use client";

import dynamic from "next/dynamic";
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
    <section className="py-[100px] space-y-[40px]">
      <h2 className="text-center text-5xl font-semibold">Our clients</h2>
      <div className="container">
        <Slider {...settings}>
          <div className="relative min-h-[134px] shadow-lg rounded-lg border">
            <Image
              className="object-contain px-12"
              src="/images/clients/flexjobs-logo.png"
              fill
              alt="Flexjobs Logo"
            />
          </div>
          <div className="relative min-h-[134px] shadow-lg rounded-lg border">
            <Image
              className="object-contain px-12"
              src="/images/clients/Upwork-logo.png"
              alt="Flexjobs Logo"
              fill
            />
          </div>
          <div className="relative min-h-[134px] shadow-lg rounded-lg border">
            <Image
              className="object-contain px-12"
              src="/images/clients/linkedin-logo.png"
              alt="Flexjobs Logo"
              fill
            />
          </div>
          <div className="relative min-h-[134px] shadow-lg rounded-lg border">
            <Image
              className="object-contain px-12"
              src="/images/clients/glassdoor-logo.png"
              alt="Flexjobs Logo"
              fill
            />
          </div>
          <div className="relative min-h-[134px] shadow-lg rounded-lg border">
            <Image
              className="object-contain px-12"
              src="/images/clients/indeed-logo.png"
              alt="Flexjobs Logo"
              fill
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default OurClients;

// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
// relative shadow-md rounded-lg border w-[296px] h-[134px] flex items-center justify-center border p-5
