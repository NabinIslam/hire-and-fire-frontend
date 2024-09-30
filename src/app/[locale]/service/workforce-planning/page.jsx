import PageBanner from "@/components/common/PageBanner";
import KeyBenefits from "@/components/pages/service/workforce-planning/KeyBenefits";
import WhyChooseUs from "@/components/pages/service/workforce-planning/WhyChooseUs";
import WorkforcePlanning from "@/components/pages/service/workforce-planning/WorkforcePlanning";
import WorkforcePlanningProcess from "@/components/pages/service/workforce-planning/WorkforcePlanningProcess";

const WorkforcePlanningPage = () => {
  return (
    <main>
      <PageBanner title="Workforce Planning" />
      <WorkforcePlanning />
      <KeyBenefits />
      <WorkforcePlanningProcess />
      <WhyChooseUs />
    </main>
  );
};

export default WorkforcePlanningPage;
