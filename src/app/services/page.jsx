import PageBanner from "@/components/common/PageBanner";
import ContractStaffing from "@/components/pages/home/ContractStaffing";
import PermanentRecruitment from "@/components/pages/home/PermanentRecruitment";
import WorkforcePlanning from "@/components/pages/home/WorkforcePlanning";
import BackgroundChecks from "@/components/pages/services/BackgroundChecks";
import ComplianceLegalSupport from "@/components/pages/services/ComplianceLegalSupport";
import OnboardingSupport from "@/components/pages/services/OnboardingSupport";
import SkillAssessmentTraining from "@/components/pages/services/SkillAssessmentTraining";
import VisaApplicationFlightAssistance from "@/components/pages/services/VisaApplicationFlightAssistance";
import WorkPermitAssistance from "@/components/pages/services/WorkPermitAssistance";

const ServicesPage = () => {
  return (
    <main>
      <PageBanner title="Services" />
      <WorkPermitAssistance />
      <VisaApplicationFlightAssistance />
      <PermanentRecruitment />
      <ContractStaffing />
      <WorkforcePlanning />
      <ComplianceLegalSupport />
      <BackgroundChecks />
      <SkillAssessmentTraining />
      <OnboardingSupport />
    </main>
  );
};

export default ServicesPage;
