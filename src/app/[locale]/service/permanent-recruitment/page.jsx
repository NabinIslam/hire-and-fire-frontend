import PageBanner from "@/components/common/PageBanner";
import KeyBenefits from "@/components/pages/service/permanent-recruitment/KeyBenefits";
import PermanentRecruitment from "@/components/pages/service/permanent-recruitment/PermanentRecruitment";
import PermanentRecruitmentProcess from "@/components/pages/service/permanent-recruitment/PermanentRecruitmentProcess";
import WhyChooseUs from "@/components/pages/service/permanent-recruitment/WhyChooseUs";

const PermanentRecruitmentPage = () => {
  return (
    <main>
      <PageBanner title="Permanent Recruitment" />
      <PermanentRecruitment />
      <KeyBenefits />
      <PermanentRecruitmentProcess />
      <WhyChooseUs />
    </main>
  );
};

export default PermanentRecruitmentPage;
