import AboutHero from "@/components/pages/about/AboutHero";
import CoreCompetencies from "@/components/pages/about/CoreCompetencies";
import OurMissionAndVision from "@/components/pages/about/OurMissionAndVision";
import OurValues from "@/components/pages/about/OurValues";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import PageBanner from "@/components/common/PageBanner";
import Teams from "@/components/pages/about/Teams";
import TitleDescSection from "@/components/common/TitleDescSection";

import OurClients from "@/components/common/OurClients";
import WhyChooseUs from "@/components/pages/about/WhyChooseUs";
import KeySkills from "@/components/pages/about/KeySkills";

export const metadata = {
  title: "Hire&Fire | About Us",
};

const AboutUsPage = () => {
  return (
    <main>
      <PageBanner title="About Us" />

      <AboutHero />

      <TitleDescSection
        title="Hire & Fire Team of experts"
        description="A team of recruitment experts specializes in sourcing, assessing, and hiring top talent to meet organizational needs efficiently and effectively."
      >
        <Teams />
      </TitleDescSection>

      <OurMissionAndVision />

      <TitleDescSection
        title={"Our Values"}
        description="Our values include integrity, innovation, and excellence. We prioritize inclusivity, collaboration, customer-centricity, accountability, and empowerment, ensuring a trustworthy and effective experience."
      >
        <OurValues />
      </TitleDescSection>

      <OurClients />

      <WhyChooseUs />

      <KeySkills />

      <TitleDescSection
        title="Core Competencies"
        description="Proficient in communication, organization, attention to detail, decision-making, empathy, adaptability, leadership, time management, problem-solving, and networking."
      >
        <CoreCompetencies />
      </TitleDescSection>
    </main>
  );
};

export default AboutUsPage;
