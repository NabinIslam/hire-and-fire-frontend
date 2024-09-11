"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useInView } from "react-intersection-observer";

const OurSuccess = () => {
  const t = useTranslations("OurSuccess");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-our-success-bg bg-cover bg-center py-[70px] text-white">
      <div className="container space-y-6">
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="text-center text-4xl font-semibold lg:text-5xl"
        >
          {t("title")}
        </motion.h2>
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="text-center text-sm"
        >
          {t("description")}
        </motion.p>

        <div className="grid grid-cols-1 gap-5 divide-y md:grid-cols-2 md:divide-x-0 md:divide-y-0 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-y-0">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 12,
            }}
            className="space-y-5 p-4"
          >
            <h5 className="text-center text-xl">
              {t.rich("success_1_title", {
                br: () => <br />,
              })}
            </h5>
            <p className="text-center text-sm">{t("success_1_description")}</p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 12,
            }}
            className="space-y-5 p-4"
          >
            <h5 className="text-center text-xl">
              {t.rich("success_2_title", {
                br: () => <br />,
              })}
            </h5>
            <p className="text-center text-sm">{t("success_2_description")}</p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 12,
            }}
            className="space-y-5 p-4"
          >
            <h5 className="text-center text-xl">
              {t.rich("success_3_title", {
                br: () => <br />,
              })}
            </h5>
            <p className="text-center text-sm">{t("success_3_description")}</p>
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 50,
              damping: 12,
            }}
            className="space-y-5 p-4"
          >
            <h5 className="text-center text-xl">
              {t.rich("success_4_title", {
                br: () => <br />,
              })}
            </h5>
            <p className="text-center text-sm">{t("success_4_description")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;
