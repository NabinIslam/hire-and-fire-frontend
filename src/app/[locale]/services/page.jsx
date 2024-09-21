import PageBanner from "@/components/common/PageBanner";
import VisaApplicationFlightAssistance from "@/components/pages/services/VisaApplicationFlightAssistance";
import WorkPermitAssistance from "@/components/pages/services/WorkPermitAssistance";

const ServicesPage = () => {
  return (
    <main>
      <PageBanner title="Services" />
      <WorkPermitAssistance />
      <VisaApplicationFlightAssistance />
    </main>
  );
};

export default ServicesPage;
