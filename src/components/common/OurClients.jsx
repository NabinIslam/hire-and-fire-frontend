"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowPrev from "../ui/ArrowPrev";
import ArrowNext from "../ui/ArrowNext";
import { useTranslations } from "next-intl";
import FadeInDownWithSlowBounce from "../animations/FadeInDownWithSlowBounce";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const OurClients = () => {
  const t = useTranslations("OurClients");

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
    <section className="space-y-[40px] py-[100px]">
      <FadeInDownWithSlowBounce className="container space-y-8">
        <h2 className="text-center text-4xl font-semibold">{t("title")}</h2>
        <Slider {...settings}>
          <div className="relative min-h-[134px] rounded-lg border shadow">
            <Image
              className="object-contain px-12"
              src="/images/clients/flexjobs-logo.png"
              fill
              alt="Flexjobs Logo"
            />
          </div>
          <div className="relative min-h-[134px] rounded-lg border shadow">
            <Image
              className="object-contain px-12"
              src="/images/clients/Upwork-logo.png"
              alt="Upwork Logo"
              fill
            />
          </div>
          <div className="relative min-h-[134px] rounded-lg border shadow">
            <Image
              className="object-contain px-12"
              src="/images/clients/linkedin-logo.png"
              alt="Linkedin Logo"
              fill
            />
          </div>
          <div className="relative min-h-[134px] rounded-lg border shadow">
            <Image
              className="object-contain px-12"
              src="/images/clients/glassdoor-logo.png"
              alt="Glassdoor Logo"
              fill
            />
          </div>
          <div className="relative min-h-[134px] rounded-lg border shadow">
            <Image
              className="object-contain px-12"
              src="/images/clients/Indeed-logo.png"
              alt="Indeed Logo"
              fill
            />
          </div>
        </Slider>
      </FadeInDownWithSlowBounce>
    </section>
  );
};

export default OurClients;
