import OurClients from "@/components/common/OurClients";
import PageBanner from "@/components/common/PageBanner";
import EmployersAlign from "@/components/pages/partnership-programs/EmployersAlign";
import PartnerWithUs from "@/components/pages/partnership-programs/PartnerWithUs";

export const metadata = {
  title: "Hire&Fire | Partnerships Programs",
};

const PartnershipsProgramsPage = () => {
  return (
    <main>
      <PageBanner title="Partnerships Programs" />

      <PartnerWithUs />

      <EmployersAlign />

      <OurClients />
    </main>
  );
};

export default PartnershipsProgramsPage;
