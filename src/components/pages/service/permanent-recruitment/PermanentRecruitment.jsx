"use client";

import Image from "next/image";
import Button from "../../../ui/Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const PermanentRecruitment = () => {
  const t = useTranslations("PermanentRecruitment");

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
            Permanent Recruitment
          </h2>
          <p className="text-sm font-medium">
            Permanent recruitment involves the process of hiring employees for
            long-term positions within an organization. It includes sourcing
            candidates, conducting interviews, and selecting the best fit based
            on skills and cultural fit. This process aims to secure talented
            individuals who align with the company's goals and values for
            sustained productivity and growth. Permanent recruitment strategies
            often involve various assessments and negotiations to ensure mutual
            satisfaction and long-term commitment from both the employer and the
            employee.
          </p>
          <div>
            <Link href="/service/permanent-recruitment">
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
        </motion.div>
      </div>
    </section>
  );
};

export default PermanentRecruitment;
