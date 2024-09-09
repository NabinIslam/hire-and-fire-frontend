import OurClients from "@/components/common/OurClients";
import PageBanner from "@/components/common/PageBanner";
import PartnershipsPrograms from "@/components/pages/partnership-programs/PartnershipsPrograms";

export const metadata = {
  title: "Hire&Fire | Partnerships Programs",
};

const PartnershipsProgramsPage = () => {
  return (
    <main>
      <PageBanner title="Partnerships Programs" />

      <PartnershipsPrograms />

      <OurClients />
    </main>
  );
};

export default PartnershipsProgramsPage;
