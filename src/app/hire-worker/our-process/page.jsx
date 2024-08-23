import PageBanner from "@/components/PageBanner";
import TitleDescSection from "@/components/TitleDescSection";
import Image from "next/image";

const OurProcess = () => {
  return (
    <main>
      <PageBanner title="Hire Worker" />
      <TitleDescSection
        title="Our Process"
        description="We ensure top-quality results through a streamlined approach involving clear communication, expert execution, and continuous improvement, guaranteeing efficiency and satisfaction at every step of the project."
      >
        <div className="md:space-y-[50px]">
          <div className="flex flex-col lg:flex-row items-center justify-between md:gap-[50px] lg:gap-[100px]">
            <div className="basis-full lg:basis-1/2 space-y-5 text-center lg:text-left">
              <h6 className="text-primary text-2xl font-medium">Step 01</h6>
              <h2 className="text-4xl md:text-5xl lg:text-[40px] font-semibold">
                Tell Us Your Need
              </h2>
              <p className="text-sm font-medium">
                Share your hiring needs with us, and we'll tailor our services
                to find the perfect fit for your team. Specify the job role,
                required skills, experience level, and any other important
                criteria. Whether you need temporary staff, permanent hires, or
                specialized talent, we have the expertise to match your
                requirements. Our goal is to streamline the recruitment process,
                saving you time and ensuring you get top-quality candidates who
                meet your expectations and contribute to your company's success.
              </p>
            </div>
            <div className="relative h-[400px] w-full lg:basis-1/2">
              <Image
                className="object-contain"
                src="/images/our-process/step-1.png"
                alt="Step 1"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between md:gap-[50px] lg:gap-[100px]">
            <div className="basis-full lg:basis-1/2 space-y-5 text-center lg:text-left">
              <h6 className="text-primary text-2xl font-medium">Step 01</h6>
              <h2 className="text-4xl md:text-5xl lg:text-[40px] font-semibold">
                Tell Us Your Need
              </h2>
              <p className="text-sm font-medium">
                Share your hiring needs with us, and we'll tailor our services
                to find the perfect fit for your team. Specify the job role,
                required skills, experience level, and any other important
                criteria. Whether you need temporary staff, permanent hires, or
                specialized talent, we have the expertise to match your
                requirements. Our goal is to streamline the recruitment process,
                saving you time and ensuring you get top-quality candidates who
                meet your expectations and contribute to your company's success.
              </p>
            </div>
            <div className="relative h-[400px] w-full lg:basis-1/2">
              <Image
                className="object-contain"
                src="/images/our-process/step-1.png"
                alt="Step 1"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between md:gap-[50px] lg:gap-[100px]">
            <div className="basis-full lg:basis-1/2 space-y-5 text-center lg:text-left">
              <h6 className="text-primary text-2xl font-medium">Step 01</h6>
              <h2 className="text-4xl md:text-5xl lg:text-[40px] font-semibold">
                Tell Us Your Need
              </h2>
              <p className="text-sm font-medium">
                Share your hiring needs with us, and we'll tailor our services
                to find the perfect fit for your team. Specify the job role,
                required skills, experience level, and any other important
                criteria. Whether you need temporary staff, permanent hires, or
                specialized talent, we have the expertise to match your
                requirements. Our goal is to streamline the recruitment process,
                saving you time and ensuring you get top-quality candidates who
                meet your expectations and contribute to your company's success.
              </p>
            </div>
            <div className="relative h-[400px] w-full lg:basis-1/2">
              <Image
                className="object-contain"
                src="/images/our-process/step-1.png"
                alt="Step 1"
                fill
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between md:gap-[50px] lg:gap-[100px]">
            <div className="basis-full lg:basis-1/2 space-y-5 text-center lg:text-left">
              <h6 className="text-primary text-2xl font-medium">Step 01</h6>
              <h2 className="text-4xl md:text-5xl lg:text-[40px] font-semibold">
                Tell Us Your Need
              </h2>
              <p className="text-sm font-medium">
                Share your hiring needs with us, and we'll tailor our services
                to find the perfect fit for your team. Specify the job role,
                required skills, experience level, and any other important
                criteria. Whether you need temporary staff, permanent hires, or
                specialized talent, we have the expertise to match your
                requirements. Our goal is to streamline the recruitment process,
                saving you time and ensuring you get top-quality candidates who
                meet your expectations and contribute to your company's success.
              </p>
            </div>
            <div className="relative h-[400px] w-full lg:basis-1/2">
              <Image
                className="object-contain"
                src="/images/our-process/step-1.png"
                alt="Step 1"
                fill
              />
            </div>
          </div>
        </div>
      </TitleDescSection>
    </main>
  );
};

export default OurProcess;
