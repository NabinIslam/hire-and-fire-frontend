"use client";

import dynamic from "next/dynamic";
import flexjobsLogo from "@/assets/images/clients/flexjobs-logo.png";
import Image from "next/image";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const OurClients = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <section className="py-[100px] space-y-[40px]">
      <h2 className="text-center text-5xl font-semibold">Our clients</h2>
      <div className="container">
        <Slider {...settings}>
          <div className="border-2 rounded-lg p-5 mx-3">
            <Image src={flexjobsLogo} alt="Flexjobs Logo" />
          </div>
          <div className="border-2 rounded-lg p-5 mx-3">
            <Image src={flexjobsLogo} alt="Flexjobs Logo" />
          </div>
          <div className="border-2 rounded-lg p-5 mx-3">
            <Image src={flexjobsLogo} alt="Flexjobs Logo" />
          </div>
          <div className="border-2 rounded-lg p-5 mx-3">
            <Image src={flexjobsLogo} alt="Flexjobs Logo" />
          </div>
          <div className="border-2 rounded-lg p-5 mx-3">
            <Image src={flexjobsLogo} alt="Flexjobs Logo" />
          </div>
          <div className="border-2 rounded-lg p-5 mx-3">
            <Image src={flexjobsLogo} alt="Flexjobs Logo" />
          </div>
          <div className="border-2 rounded-lg p-5 mx-3">
            <Image src={flexjobsLogo} alt="Flexjobs Logo" />
          </div>
          <div className="border-2 rounded-lg p-5 mx-3">
            <Image src={flexjobsLogo} alt="Flexjobs Logo" />
          </div>
          <div className="border-2 rounded-lg p-5 mx-3">
            <Image src={flexjobsLogo} alt="Flexjobs Logo" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default OurClients;
