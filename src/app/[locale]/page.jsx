import OurClients from "@/components/common/OurClients";
import CompanyPoints from "@/components/pages/home/CompanyPoints";
import ContractStaffing from "@/components/pages/home/ContractStaffing";
import Hero from "@/components/pages/home/Hero";
import OurSuccess from "@/components/pages/home/OurSuccess";
import PermanentRecruitment from "@/components/pages/home/PermanentRecruitment";
import RecentNewsesNBlogs from "@/components/pages/home/RecentNewsesNBlogs";
import TeamSection from "@/components/pages/home/TeamSection";
import WorkforcePlanning from "@/components/pages/home/WorkforcePlanning";
import WorkSteps from "@/components/pages/home/WorkSteps";

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
