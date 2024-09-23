import PageBanner from "@/components/common/PageBanner";
import CareerOpportunities from "@/components/pages/partnership-programs/CareerOpportunities";
import ContactInfo from "@/components/pages/partnership-programs/ContactInfo";
import EmployerServices from "@/components/pages/partnership-programs/EmployerServices";
import Faq from "@/components/pages/partnership-programs/FAQ";
import InvestmentFreePartnership from "@/components/pages/partnership-programs/InvestmentFreePartnership";
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
      <Faq />
      <ContactInfo />

      {/* <EmployersAlign />
      <OurClients /> */}
    </main>
  );
};

export default PartnershipsProgramsPage;
