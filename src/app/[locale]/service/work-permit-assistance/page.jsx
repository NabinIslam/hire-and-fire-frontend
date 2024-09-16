import PageBanner from "@/components/common/PageBanner";
import WhyChooseUs from "@/components/pages/service/work-permit-assistance/WhyChooseUs";
import WorkPermitAssistance from "@/components/pages/service/work-permit-assistance/WorkPermitAssistance";

const WorkPermitAssistancePage = () => {
  return (
    <main>
      <PageBanner title="Work Permit Assistance" />

      <WorkPermitAssistance />

      <WhyChooseUs />
    </main>
  );
};

export default WorkPermitAssistancePage;
