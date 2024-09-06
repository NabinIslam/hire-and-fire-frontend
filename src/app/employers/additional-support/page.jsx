import BestSupports from "@/components/additional-support/BestSupports";
import LanguageTraining from "@/components/additional-support/LanguageTraining";
import OtherSupports from "@/components/additional-support/OtherSupports";
import ProfessionalSupport from "@/components/additional-support/ProfessionalSupport";
import ProfessionalTraining from "@/components/additional-support/ProfesstionalTraining";
import WorkerAccommodationService from "@/components/additional-support/WorkerAccommodationService";
import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";
import PageBanner from "@/components/PageBanner";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Hire&Fire | Additional Support",
};

const AdditionalSupportPage = () => {
  return (
    <main>
      <PageBanner title="Additional Support" />

      <ProfessionalSupport />

      <section className="py-[50px]">
        <FadeInDownWithSlowBounce>
          <h2 className="my-5 text-center text-4xl font-semibold lg:text-5xl">
            Our Best Supports
          </h2>
        </FadeInDownWithSlowBounce>

        <BestSupports />
      </section>

      <WorkerAccommodationService />

      <ProfessionalTraining />

      <LanguageTraining />
    </main>
  );
};

export default AdditionalSupportPage;
