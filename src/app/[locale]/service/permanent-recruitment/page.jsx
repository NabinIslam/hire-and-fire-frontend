import PageBanner from "@/components/common/PageBanner";
import KeyBenefits from "@/components/pages/service/permanent-recruitment/KeyBenefits";
import PermanentRecruitment from "@/components/pages/service/permanent-recruitment/PermanentRecruitment";
import PermanentRecruitmentProcess from "@/components/pages/service/permanent-recruitment/PermanentRecruitmentProcess";

const PermanentRecruitmentPage = () => {
  return (
    <main>
      <PageBanner title="Permanent Recruitment" />
      <PermanentRecruitment />
      <KeyBenefits />
      <PermanentRecruitmentProcess />
    </main>
  );
};

export default PermanentRecruitmentPage;
