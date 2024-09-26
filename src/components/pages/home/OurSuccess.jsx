"use client";

import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import { useTranslations } from "next-intl";

const OurSuccess = () => {
  const t = useTranslations("OurSuccess");

  return (
    <section className="space-y-8 bg-our-success-bg bg-cover bg-center py-[70px] text-white">
      <FadeInUpWithSlowBounce className="container space-y-6">
        <h2 className="text-center text-4xl font-semibold lg:text-5xl">
          {t("title")}
        </h2>
        <p className="text-center text-sm">{t("description")}</p>
      </FadeInUpWithSlowBounce>

      <div className="container grid grid-cols-1 gap-5 divide-y md:grid-cols-2 md:divide-x-0 md:divide-y-0 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-y-0">
        <FadeInLeftWithSlowBounce className="space-y-5 p-4">
          <h5 className="text-center text-xl">
            {t.rich("success_1_title", {
              br: () => <br />,
            })}
          </h5>
          <p className="text-center text-sm">{t("success_1_description")}</p>
        </FadeInLeftWithSlowBounce>
        <FadeInUpWithSlowBounce className="space-y-5 p-4">
          <h5 className="text-center text-xl">
            {t.rich("success_2_title", {
              br: () => <br />,
            })}
          </h5>
          <p className="text-center text-sm">{t("success_2_description")}</p>
        </FadeInUpWithSlowBounce>
        <FadeInUpWithSlowBounce className="space-y-5 p-4">
          <h5 className="text-center text-xl">
            {t.rich("success_3_title", {
              br: () => <br />,
            })}
          </h5>
          <p className="text-center text-sm">{t("success_3_description")}</p>
        </FadeInUpWithSlowBounce>
        <FadeInRightWithSlowBounce className="space-y-5 p-4">
          <h5 className="text-center text-xl">
            {t.rich("success_4_title", {
              br: () => <br />,
            })}
          </h5>
          <p className="text-center text-sm">{t("success_4_description")}</p>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default OurSuccess;
