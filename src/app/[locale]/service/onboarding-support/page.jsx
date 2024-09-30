import PageBanner from "@/components/common/PageBanner";
import KeyBenefits from "@/components/pages/service/onboarding-support/KeyBenefits";
import OnboardingProcess from "@/components/pages/service/onboarding-support/OnboardingProcess";
import OnboardingSupport from "@/components/pages/service/onboarding-support/OnboardingSupport";
import WhyChooseUs from "@/components/pages/service/onboarding-support/WhyChooseUs";

const OnboardingSupportPage = () => {
  return (
    <main>
      <PageBanner title="Onboarding Support" />
      <OnboardingSupport />
      <KeyBenefits />
      <OnboardingProcess />
      <WhyChooseUs />
    </main>
  );
};

export default OnboardingSupportPage;
