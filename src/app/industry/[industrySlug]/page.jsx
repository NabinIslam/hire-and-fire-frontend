import BenefitsSection from "@/components/BenefitsSection";
import PageBanner from "@/components/PageBanner";
import Partner from "@/components/Partner";
import RolesSection from "@/components/RolesSection";
import { capitalizeAndRemoveHyphens } from "@/Utils/capitalizeAndRemoveHyphens";

const IndustryDetails = ({ params }) => {
  const { industrySlug } = params;

  return (
    <main>
      <PageBanner title={capitalizeAndRemoveHyphens(industrySlug)} />
      {capitalizeAndRemoveHyphens(industrySlug)}
      <Partner />
      <RolesSection />
      <BenefitsSection />
    </main>
  );
};

export default IndustryDetails;
