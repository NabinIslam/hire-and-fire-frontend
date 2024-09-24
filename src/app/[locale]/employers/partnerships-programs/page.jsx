import PageBanner from "@/components/common/PageBanner";
import CareerOpportunities from "@/components/pages/partnership-programs/CareerOpportunities";
import ContactInfo from "@/components/pages/partnership-programs/ContactInfo";
import EmployerServices from "@/components/pages/partnership-programs/EmployerServices";
import InvestmentFreePartnership from "@/components/pages/partnership-programs/InvestmentFreePartnership";
import PartnershipFaq from "@/components/pages/partnership-programs/PartnershipFaq";
import PartnerWithUs from "@/components/pages/partnership-programs/PartnerWithUs";

export const metadata = {
  title: "Hire&Fire | Partnerships Programs",
};

const PartnershipsProgramsPage = () => {
  return (
    <main>
      <PageBanner title="Partnerships Programs" />
      <PartnerWithUs />
      <EmployerServices />
      <InvestmentFreePartnership />
      <CareerOpportunities />
      <PartnershipFaq />
      <ContactInfo />

      {/* <EmployersAlign />
      <OurClients /> */}
    </main>
  );
};

export default PartnershipsProgramsPage;
