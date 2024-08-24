import OurClients from "@/components/OurClients";
import PageBanner from "@/components/PageBanner";
import Button from "@/components/ui/Button";
import Image from "next/image";

const PartnershipsPrograms = () => {
  return (
    <main>
      <PageBanner title="Partnerships Programs" />
      <section className="pt-[100px] pb-[50px]">
        <div className="container flex flex-col lg:flex-row items-center justify-between md:gap-[50px] lg:gap-[100px]">
          <div className="basis-full lg:basis-1/2 text-center lg:text-left">
            <h6 className="text-primary text-2xl font-medium">
              Partnerships Programs
            </h6>
            <h2 className="text-4xl lg:text-5xl font-semibold mt-5">
              Collaborate with Us for business purpose
            </h2>
            <p className="text-sm font-medium my-5">
              Partnership programs are collaborations between entities,
              fostering mutual benefits such as shared resources, expanded
              market reach, and combined expertise. These initiatives can
              include joint ventures, affiliate marketing agreements, or
              strategic alliances tailored to leverage strengths and capitalize
              on market opportunities. By aligning goals and pooling
              capabilities, partners aim to innovate, enhance competitiveness,
              and deliver enhanced value to customers across diverse industries.
            </p>
            <Button>Contact Us</Button>
          </div>
          <div className="basis-full lg:basis-1/2 relative w-full min-h-[400px]">
            <Image
              className="object-contain"
              src="/images/collaborate.png"
              alt="Work Permit & Visa Support"
              fill
            />
          </div>
        </div>
      </section>
      <OurClients />
    </main>
  );
};

export default PartnershipsPrograms;
