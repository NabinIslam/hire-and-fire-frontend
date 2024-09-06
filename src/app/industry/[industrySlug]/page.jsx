import PageBanner from "@/components/common/PageBanner";
import RoleCard from "@/components/RoleCard";
import TitleDescSection from "@/components/common/TitleDescSection";
import Button from "@/components/ui/Button";
import { roles } from "@/data/roleCardData";
import { capitalizeAndRemoveHyphens } from "@/Utils/capitalizeAndRemoveHyphens";
import Image from "next/image";
import Link from "next/link";
import { GiGearHammer } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";
import BenefitCard from "@/components/pages/industry/BenefitCard";

const IndustryDetailsPage = ({ params }) => {
  const { industrySlug } = params;

  return (
    <main>
      <PageBanner title={capitalizeAndRemoveHyphens(industrySlug)} />

      <div className="container flex flex-col items-center justify-between pb-[50px] pt-[100px] md:gap-6 lg:flex-row lg:gap-24">
        <div className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Your Partner in international Construction Recruitment
          </h2>
          <p className="text-sm font-medium">
            Hire & Fire Job s platform for the construction industry connects
            companies with skilled professionals globally. We streamline
            recruitment processes, ensuring precise matches for project
            requirements through our extensive network and industry specific
            expertise. Our platform offers tailored solutions for construction
            companies, facilitating efficient hiring and workforce management.
            Partner with us to access a pool of qualified talent and optimize
            your construction projects with ease.
          </p>
          <div>
            <Link href="/contact-us">
              <Button>Contact Us</Button>
            </Link>
          </div>
        </div>
        <div className="group relative min-h-[400px] w-full basis-full lg:basis-1/2">
          <Image
            className="object-contain"
            src="/Image-1.jpg"
            alt="Permanent Recruitment"
            fill
          />
          {/* <Image
            className="hidden object-contain md:block"
            src="/images/permanent-recruitment.png"
            alt="Permanent Recruitment"
            fill
          />

          <img
            className="absolute hidden h-full w-auto transition-transform duration-1000 group-hover:translate-x-full md:block lg:-translate-x-20"
            src="/images/permanent-rec.png"
          /> */}
        </div>
      </div>

      {/* <Partner /> */}
      <TitleDescSection
        title="Roles we Fill"
        description="We fill roles in construction, matching skilled professionals like
          engineers, supervisors, and laborers to projects requiring expertise and efficiency"
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {roles.map((role) => (
            <RoleCard key={role.id} role={role} />
          ))}
        </div>
      </TitleDescSection>
      <TitleDescSection
        className="pb-[50px]"
        title="Benefits of Hiring Through Us"
        description="Benefit from our efficient hiring process, matching qualified candidates to your construction projects, ensuring quality and reliability."
      >
        <div className="mt-20 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {/* card */}
          <BenefitCard
            icon={<GiGearHammer className="text-3xl text-white" />}
            title="Access to Skilled Labor"
            description="We Provide a pool of highly trained professtional ready to
              contribute to your projects globally"
          />

          {/* card */}
          <BenefitCard
            icon={<IoBarChartSharp className="text-3xl text-white" />}
            title="Cost Effective Solutions"
            description="Our service are designed to save you time and reduce hiring costs
              by taking care of the entire recruitment process"
          />

          {/* card */}
          <BenefitCard
            icon={<IoDocumentText className="text-3xl text-white" />}
            title="Compliance & Documentation"
            description="We handle all necessary paperwork, ensuring compliance with
              international labor laws & regulations."
          />

          {/* card */}
          <BenefitCard
            icon={<FaUsersGear className="text-3xl text-white" />}
            title="Tailored Recruitment"
            description="We customize our recruitment process to match the specific
              requirements of your projects, ensuring a perfect fit for every
              role."
          />
        </div>
      </TitleDescSection>
      {/* <BenefitsSection /> */}
    </main>
  );
};

export default IndustryDetailsPage;
