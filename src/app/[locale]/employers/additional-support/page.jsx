import BestSupports from "@/components/pages/additional-support/BestSupports";
import LanguageTraining from "@/components/pages/additional-support/LanguageTraining";
import OtherSupports from "@/components/pages/additional-support/OtherSupports";
import ProfessionalSupport from "@/components/pages/additional-support/ProfessionalSupport";
import ProfessionalTraining from "@/components/pages/additional-support/ProfesstionalTraining";
import WorkerAccommodationService from "@/components/pages/additional-support/WorkerAccommodationService";
import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";
import PageBanner from "@/components/common/PageBanner";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Hire&Fire | Additional Support",
};

const AdditionalSupportPage = () => {
  return (
    <main>
      <PageBanner title="Additional Support" />

      <LanguageTraining />

      <ProfessionalSupport />

      <section className="py-[50px]">
        <FadeInDownWithSlowBounce>
          <h2 className="my-5 text-center text-4xl font-semibold lg:text-4xl">
            Our Best Supports
          </h2>
        </FadeInDownWithSlowBounce>

        <BestSupports />
      </section>

      <WorkerAccommodationService />

      <ProfessionalTraining />
    </main>
  );
};

export default AdditionalSupportPage;
