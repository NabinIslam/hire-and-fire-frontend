"use client";

import Image from "next/image";
import BgButton from "../../ui/BgButton";
import Link from "next/link";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";

const Hero = () => {
  return (
    <section className="bg-hero-bg bg-cover bg-no-repeat pb-[140px] pt-[50px] text-white">
      <div className="container flex flex-col items-center justify-between gap-16 lg:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full text-center lg:basis-1/2 lg:text-left">
          <h1 className="text-4xl font-semibold leading-[50px] lg:text-[56px] lg:leading-[70px]">
            Connecting Employers with Top Global Talent
          </h1>
          <p className="mb-5 mt-3">Bringing skilled workers to your business</p>

          <Link href="/hire-worker/request-worker">
            <BgButton>Request Worker</BgButton>
          </Link>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full md:min-h-[472px] lg:basis-1/2">
          <Image
            className="ml-auto object-contain lg:object-right"
            src="/images/home-hero-img.png"
            alt="Hire and Fire"
            fill
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default Hero;
