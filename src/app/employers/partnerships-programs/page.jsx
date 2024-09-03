import OurClients from "@/components/OurClients";
import PageBanner from "@/components/PageBanner";
import Button from "@/components/ui/Button";
import Image from "next/image";

export const metadata = {
  title: "Hire&Fire | Partnerships Programs",
};

const PartnershipsProgramsPage = () => {
  return (
    <main>
      <PageBanner title="Partnerships Programs" />
      <section className="pt-[100px]">
        <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row lg:gap-[100px]">
          <div className="basis-full text-center lg:basis-1/2 lg:text-left">
            <h6 className="text-2xl font-medium text-primary">
              Partnerships Programs
            </h6>
            <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
              Collaborate with Us for business purpose
            </h2>
            <p className="my-5 text-sm font-medium">
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
          <div className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
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

export default PartnershipsProgramsPage;
