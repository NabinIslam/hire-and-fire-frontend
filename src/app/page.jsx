import CompanyPoints from "@/components/home-components/CompanyPoints";
import ContractStaffing from "@/components/home-components/ContractStaffing";
import Hero from "@/components/home-components/Hero";
import OurClients from "@/components/OurClients";
import OurSuccess from "@/components/home-components/OurSuccess";
import PermanentRecruitment from "@/components/home-components/PermanentRecruitment";
import RecentNewsesNBlogs from "@/components/home-components/RecentNewsesNBlogs";
import TeamSection from "@/components/home-components/TeamSection";
import WorkforcePlanning from "@/components/home-components/WorkforcePlanning";
import WorkSteps from "@/components/home-components/WorkSteps";

const HomePage = () => {
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

export default HomePage;
