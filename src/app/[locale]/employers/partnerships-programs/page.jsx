import OurClients from "@/components/common/OurClients";
import PageBanner from "@/components/common/PageBanner";
import CareerOpportunities from "@/components/pages/partnership-programs/CareerOpportunities";
import EmployersAlign from "@/components/pages/partnership-programs/EmployersAlign";
import EmployerServices from "@/components/pages/partnership-programs/EmployerServices";
import FAQ from "@/components/pages/partnership-programs/faq";
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
      <FAQ />
      {/* <EmployersAlign />
      <OurClients /> */}
    </main>
  );
};

export default PartnershipsProgramsPage;
