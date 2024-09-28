import PageBanner from "@/components/common/PageBanner";
import ContractStaffing from "@/components/pages/home/ContractStaffing";
import ContractStaffingProcess from "@/components/pages/service/contract-staffing/ContractStaffingProcess";
import KeyBenefits from "@/components/pages/service/contract-staffing/KeyBenefits";
import WhyChooseUs from "@/components/pages/service/contract-staffing/WhyChooseUs";

const ContractStaffingPage = () => {
  return (
    <main>
      <PageBanner title="Contract Staffing" />
      {/* spacer */}
      <div className="h-[50px] w-full"></div>
      <ContractStaffing />
      <KeyBenefits />
      <ContractStaffingProcess />
      <WhyChooseUs />
    </main>
  );
};

export default ContractStaffingPage;
