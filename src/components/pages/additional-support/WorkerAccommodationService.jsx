"use client";

import Image from "next/image";
import Button from "../../ui/Button";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import Link from "next/link";

const WorkerAccommodationService = () => {
  return (
    <section className="py-[50px]">
      <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row lg:gap-[100px]">
        <FadeInLeftWithSlowBounce className="basis-full text-center lg:basis-1/2 lg:text-left">
          <h6 className="text-2xl font-medium text-primary">
            Worker Accommodation Service
          </h6>
          <h2 className="mt-5 text-4xl font-semibold lg:text-4xl">
            Global Accommodation Services for Workers
          </h2>
          <p className="my-5 text-sm font-medium">
            Providing comprehensive global worker accommodation services,
            ensuring comfortable and convenient lodging solutions for
            international employees. Our services cater to diverse industry
            needs, offering flexible housing options and personalized support to
            meet workforce demands worldwide. We prioritize safety, comfort, and
            seamless integration to enhance productivity and employee
            satisfaction.
          </p>
          <Link href="/meet-us">
            <Button>Meet Us</Button>
          </Link>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
          <Image
            className="object-contain lg:object-right"
            src="/images/global-accomodation.png"
            alt="Work Permit & Visa Support"
            fill
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WorkerAccommodationService;
