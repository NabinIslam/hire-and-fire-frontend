import PageBanner from "@/components/common/PageBanner";
import FlightAssistanceProcess from "@/components/pages/service/visa-application-flight-assistance/FlightAssistanceProcess";
import KeyBenefits from "@/components/pages/service/visa-application-flight-assistance/KeyBenefits";
import VisaApplication from "@/components/pages/service/visa-application-flight-assistance/VisaApplication";
import WhyChooseUs from "@/components/pages/service/visa-application-flight-assistance/WhyChooseUs";

export const metadata = {
  title: "Hire&Fire | Visa Application Flight Assistance",
};

const VisaApplicationFlightAssistancePage = () => {
  return (
    <main>
      <PageBanner title="Visa Application Flight Assistance" />

      <VisaApplication />

      <KeyBenefits />

      <FlightAssistanceProcess />

      <WhyChooseUs />
    </main>
  );
};

export default VisaApplicationFlightAssistancePage;
