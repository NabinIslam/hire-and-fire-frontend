import PageBanner from "@/components/common/PageBanner";
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

      <WhyChooseUs />
    </main>
  );
};

export default WorkPermitAssistancePage;
