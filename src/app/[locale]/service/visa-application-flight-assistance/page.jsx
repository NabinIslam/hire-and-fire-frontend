import PageBanner from "@/components/common/PageBanner";
import WhyChooseUs from "@/components/pages/service/visa-application-flight-assistance/WhyChooseUs";

export const metadata = {
  title: "Hire&Fire | Visa Application Flight Assistance",
};

const VisaApplicationFlightAssistancePage = () => {
  return (
    <main>
      <PageBanner title="Visa Application Flight Assistance" />

      <WhyChooseUs />
    </main>
  );
};

export default VisaApplicationFlightAssistancePage;
