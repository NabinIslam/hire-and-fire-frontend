import OurClients from "@/components/OurClients";
import PageBanner from "@/components/PageBanner";
import PartnershipsPrograms from "@/components/partnership-programs/PartnershipsPrograms";

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
