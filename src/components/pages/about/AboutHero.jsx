"use client";

import Link from "next/link";
import Button from "../../ui/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutHero = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="pb-[50px] pt-[100px] text-black">
      <div className="container flex flex-col items-center justify-between gap-16 lg:flex-row">
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
          className="basis-full space-y-6 text-center lg:basis-1/2 lg:text-left"
        >
          <h6 className="text-2xl font-medium text-primary">About Us</h6>
          <h2 className="text-4xl font-semibold md:text-5xl lg:text-[40px]">
            We believe that great companies are built by great people
          </h2>
          <p className="text-sm font-medium">
            Welcome to Hire & Fire SRL, your strategic partner in international
            workforce solutions. Based in Bucuresti, Romania, and registered in
            the heart of Europe. Our consultancy is dedicated to facilitating
            the seamless migration of skilled workers across borders. With a
            specialized focus on connecting talented individuals with employment
            opportunities worldwide, we take pride in our ability to serve a
            diverse range of companies, from large corporations to small and
            medium enterprises.
          </p>
          <div className="mb-6 flex flex-col items-center justify-center gap-10 md:flex-row lg:justify-start">
            <div className="flex items-center gap-5">
              <Image
                src="/images/visa-icon.png"
                height={40}
                width={40}
                alt="Visa Icon"
              />
              <p className="text-sm font-medium">
                95% VISA SUCCESS <br /> RATE IN EUROPE
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/images/moneyback-icon.png"
                height={40}
                width={40}
                alt="Moneyback Icon"
              />
              <p className="text-sm font-medium">
                100% MONEYBACK <br /> OFFER YOU WILL GET
              </p>
            </div>
          </div>
          <div>
            <Link href="/hire-worker/request-talent">
              <Button>Request Talent</Button>
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
          className="relative min-h-[400px] w-full basis-full md:min-h-[624px] lg:basis-1/2"
        >
          <Image
            src="/images/about-hero-img.png"
            alt="About Hire and Fire"
            fill
            className="object-contain object-center lg:object-right"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
