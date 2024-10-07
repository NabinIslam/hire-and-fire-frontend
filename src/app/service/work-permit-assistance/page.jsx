import PageBanner from "@/components/common/PageBanner";
import KeyBenefits from "@/components/pages/service/work-permit-assistance/KeyBenefits";
import StepByStepProcess from "@/components/pages/service/work-permit-assistance/StepByStepProcess";
import WhyChooseUs from "@/components/pages/service/work-permit-assistance/WhyChooseUs";
import WorkPermitAssistance from "@/components/pages/service/work-permit-assistance/WorkPermitAssistance";

export const metadata = {
  title: "Hire&Fire | Work Permit Assistance",
};

const WorkPermitAssistancePage = () => {
  return (
    <main>
      <PageBanner title="Work Permit Assistance" />

      <WorkPermitAssistance />

      <KeyBenefits />

      <StepByStepProcess />

      <WhyChooseUs />
    </main>
  );
};

export default WorkPermitAssistancePage;
