import CompanyPoints from "@/components/homeComponents/CompanyPoints";
import ContractStaffing from "@/components/homeComponents/ContractStaffing";
import Hero from "@/components/homeComponents/Hero";
import OurClients from "@/components/homeComponents/OurClients";
import OurSuccess from "@/components/homeComponents/OurSuccess";
import PermanentRecruitment from "@/components/homeComponents/PermanentRecruitment";
import RecentNewsesNBlogs from "@/components/homeComponents/RecentNewsesNBlogs";
import TeamSection from "@/components/homeComponents/TeamSection";
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
      <OurSuccess />
      <OurClients />
      <TeamSection />
      <RecentNewsesNBlogs />
    </main>
  );
};

export default Home;
