"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "@/i18n/routing";
import Button from "@/components/ui/Button";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import ServiceImage from "@/components/common/ServiceImage";

const VisaApplication = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold leading-[62px] lg:text-4xl">
            Visa Application Flight Assistance
          </h2>
          <p className="text-sm font-medium">
            Our Visa Application and Flight Assistance service simplifies the
            travel process for your international employees. We handle the
            complex visa application procedures, ensuring all documentation is
            accurate and compliant with local regulations. Once the visa is
            approved, we assist in booking flights that best suit your business
            needs and employee schedules. From start to finish, our team
            provides seamless coordination, minimizing travel disruptions and
            ensuring a stress-free transition for your global workforce. Focus
            on your business while we handle the logistics.
          </p>
          <div>
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Visa Application Flight Assistance.png"
            title1="Visa and Travel Support"
            desc1="Assistance with visas and travel."
            title2="Visa and Flight Coordination"
            desc2="Seamless visa & flight arrangements."
            title3="Travel Visa and Flight Aid"
            desc3="Comprehensive visa & flight assistance."
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default VisaApplication;
