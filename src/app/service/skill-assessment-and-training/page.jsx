import PageBanner from "@/components/common/PageBanner";
import KeyBenefits from "@/components/pages/service/skill-assessment-and-training/KeyBenefits";
import SkillAssessmentProcess from "@/components/pages/service/skill-assessment-and-training/SkillAssessmentProcess";
import SkillAssessmentTraining from "@/components/pages/service/skill-assessment-and-training/SkillAssessmentTraining";
import WhyChooseUs from "@/components/pages/service/skill-assessment-and-training/WhyChooseUs";

const SkillAssessmentTrainingPage = () => {
  return (
    <main>
      <PageBanner title="Skill Assessment And Training" />
      <SkillAssessmentTraining />
      <KeyBenefits />
      <SkillAssessmentProcess />
      <WhyChooseUs />
    </main>
  );
};

export default SkillAssessmentTrainingPage;
