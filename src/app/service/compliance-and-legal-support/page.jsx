import PageBanner from "@/components/common/PageBanner";
import ComplianceLegal from "@/components/pages/service/compliance-legal-support/ComplianceLegal";
import KeyBenefits from "@/components/pages/service/compliance-legal-support/KeyBenefits";
import LegalProcess from "@/components/pages/service/compliance-legal-support/LegalProcess";
import WhyChooseUs from "@/components/pages/service/compliance-legal-support/WhyChooseUs";

const ComplianceAndLegalSupportPage = () => {
  return (
    <main>
      <PageBanner title="Compliance And Legal Support" />
      <ComplianceLegal />
      <KeyBenefits />
      <LegalProcess />
      <WhyChooseUs />
    </main>
  );
};

export default ComplianceAndLegalSupportPage;
