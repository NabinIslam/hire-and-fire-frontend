"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "@/i18n/routing";
import Button from "@/components/ui/Button";

const VisaApplication = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between md:gap-6 lg:flex-row lg:gap-24">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left"
        >
          <h2 className="text-4xl font-semibold lg:text-5xl">
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
            <Link href="/hire-worker-request-talent">
              <Button>Hire Worker</Button>
            </Link>
          </div>
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
          className="group relative min-h-[400px] w-full basis-full lg:basis-1/2"
        >
          <Image
            className="object-contain"
            src="/images/permanent-rec-full.png"
            alt="Permanent Recruitment"
            fill
          />
          {/* <Image
            className="hidden object-contain md:block"
            src="/images/permanent-recruitment.png"
            alt="Permanent Recruitment"
            fill
          />

          <img
            className="absolute hidden h-full w-auto transition-transform duration-1000 group-hover:translate-x-full md:block lg:-translate-x-20"
            src="/images/permanent-rec.png"
          /> */}
        </motion.div>
      </div>
    </section>
  );
};

export default VisaApplication;
