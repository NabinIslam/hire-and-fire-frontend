import Step1 from "@/components/our-process/Step1";
import Step2 from "@/components/our-process/Step2";
import Step3 from "@/components/our-process/Step3";
import Step4 from "@/components/our-process/Step4";
import PageBanner from "@/components/PageBanner";
import TitleDescSection from "@/components/TitleDescSection";
import Image from "next/image";

export const metadata = {
  title: "Hire&Fire | Our Process",
};

const OurProcessPage = () => {
  return (
    <main>
      <PageBanner title="Our Process" />
      <TitleDescSection
        title="Our Process"
        description="We ensure top-quality results through a streamlined approach involving clear communication, expert execution, and continuous improvement, guaranteeing efficiency and satisfaction at every step of the project."
      >
        <div className="space-y-[80px] py-[50px] xl:space-y-[100px]">
          <Step1 />

          <Step2 />

          <Step3 />

          <Step4 />
        </div>
      </TitleDescSection>
    </main>
  );
};

export default OurProcessPage;
