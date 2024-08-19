import CompanyPoints from "@/components/homeComponents/CompanyPoints";
import ContractStaffing from "@/components/homeComponents/ContractStaffing";
import Hero from "@/components/homeComponents/Hero";
import PermanentRecruitment from "@/components/homeComponents/PermanentRecruitment";
import WorkforcePlanning from "@/components/homeComponents/WorkforcePlanning";
import WorkSteps from "@/components/homeComponents/WorkSteps";

const Home = () => {
  return (
    <main>
      <Hero />
      <CompanyPoints />
      <PermanentRecruitment />
      <ContractStaffing />
      <WorkforcePlanning />
      <WorkSteps />
    </main>
  );
};

export default Home;
