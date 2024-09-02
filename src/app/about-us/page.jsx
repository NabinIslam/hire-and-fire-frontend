import AboutHero from "@/components/about-components/AboutHero";
import CoreCompetencies from "@/components/about-components/CoreCompetencies";
import OurMissionAndVision from "@/components/about-components/OurMissionAndVision";
import OurValues from "@/components/about-components/OurValues";
import OurClients from "@/components/OurClients";
import PageBanner from "@/components/PageBanner";
import Teams from "@/components/Teams";
import TitleDescSection from "@/components/TitleDescSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

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
        title="Our Values"
        description="Our values include integrity, innovation, and excellence. We prioritize inclusivity, collaboration, customer-centricity, accountability, and empowerment, ensuring a trustworthy and effective experience."
      >
        <OurValues />
      </TitleDescSection>
      <OurClients />
      <WhyChooseUs />
      <TitleDescSection
        title="Key Skills"
        description="Expertise in job posting, candidate sourcing, resume screening, interviewing, onboarding, training, performance management, conflict resolution, and legal compliance."
      >
        <div className="relative mx-auto min-h-[476px] max-w-[1276px]">
          <Image
            className="h-full w-full object-contain"
            src="/images/key-skills-chart.png"
            fill={true}
            alt="Key Skills Chart"
          />
        </div>
      </TitleDescSection>
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
