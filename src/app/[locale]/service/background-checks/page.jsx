import PageBanner from "@/components/common/PageBanner";
import BackgroundChecks from "@/components/pages/service/background-checks/BackgroundChecks";
import BgChecksProcess from "@/components/pages/service/background-checks/BgCheckProcess";
import KeyBenefits from "@/components/pages/service/background-checks/KeyBenefits";
import WhyChooseUs from "@/components/pages/service/background-checks/WhyChooseUs";

const BackgroundChecksPage = () => {
  return (
    <main>
      <PageBanner title="Background Checks" />
      <BackgroundChecks />
      <KeyBenefits />
      <BgChecksProcess />
      <WhyChooseUs />
    </main>
  );
};

export default BackgroundChecksPage;
