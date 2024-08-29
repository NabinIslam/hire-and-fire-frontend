import BenefitsSection from "@/components/BenefitsSection";
import PageBanner from "@/components/PageBanner";
import Partner from "@/components/Partner";
import RolesSection from "@/components/RolesSection";

const IndustryDetails = ({ params }) => {
  const { industryName } = params;

  return (
    <main>
      <PageBanner title={industryName} />
      {industryName}
      <Partner />
      <RolesSection />
      <BenefitsSection />
    </main>
  );
};

export default IndustryDetails;
