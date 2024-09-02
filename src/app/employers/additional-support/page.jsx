import PageBanner from "@/components/PageBanner";
import Button from "@/components/ui/Button";
import Image from "next/image";

const AdditionalSupportPage = () => {
  return (
    <main>
      <PageBanner title="Additional Support" />

      <section className="pb-[50px] pt-[100px]">
        <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row lg:gap-[100px]">
          <div className="basis-full text-center lg:basis-1/2 lg:text-left">
            <div className="flex h-[46px] w-[264px] items-center justify-center border-2 border-dashed border-primary text-xl font-medium text-primary">
              Professional Support
            </div>
            <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
              We also provide support for Workers{" "}
            </h2>
            <p className="my-5 text-sm font-medium">
              "Support for Workers" encompasses comprehensive assistance aimed
              at enhancing workplace productivity and employee satisfaction. Our
              services include HR guidance, training programs, and resource
              allocation to foster a positive work environment. We prioritize
              employee well-being through health and safety initiatives, career
              development opportunities, and responsive problem-solving. By
              offering personalized support and addressing individual needs, we
              empower workers to thrive professionally and contribute
              effectively to organizational success.
            </p>
            <Button>Contact Us</Button>
          </div>
          <div className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
            <Image
              className="object-contain"
              src="/images/additional-support-img.png"
              alt="Work Permit & Visa Support"
              fill
            />
          </div>
        </div>
      </section>

      <section className="py-[50px]">
        <h2 className="my-5 text-center text-4xl font-semibold lg:text-5xl">
          Our Best Support
        </h2>
        <div className="container flex flex-col items-center justify-between gap-6 lg:flex-row">
          <div className="space-y-3 rounded-lg px-10 py-6 shadow-lg">
            <Image
              className="mx-auto"
              src="/images/best-support/1.png"
              height={60}
              width={60}
            />
            <h6 className="text-center text-2xl font-medium">Pre-selection</h6>
            <p className="text-center text-sm font-medium">
              Initial screening process to identify and shortlist qualified job
              candidates for further evaluation.
            </p>
          </div>
          <div className="space-y-3 rounded-lg px-10 py-6 shadow-lg">
            <Image
              className="mx-auto"
              src="/images/best-support/1.png"
              height={60}
              width={60}
            />
            <h6 className="text-center text-2xl font-medium">Pre-selection</h6>
            <p className="text-center text-sm font-medium">
              Initial screening process to identify and shortlist qualified job
              candidates for further evaluation.
            </p>
          </div>
          <div className="space-y-3 rounded-lg px-10 py-6 shadow-lg">
            <Image
              className="mx-auto"
              src="/images/best-support/1.png"
              height={60}
              width={60}
            />
            <h6 className="text-center text-2xl font-medium">Pre-selection</h6>
            <p className="text-center text-sm font-medium">
              Initial screening process to identify and shortlist qualified job
              candidates for further evaluation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[50px]">
        <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row lg:gap-[100px]">
          <div className="basis-full text-center lg:basis-1/2 lg:text-left">
            <h6 className="text-2xl font-medium text-primary">
              Worker Accommodation Service
            </h6>
            <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
              Global Accommodation Services for Workers
            </h2>
            <p className="my-5 text-sm font-medium">
              Providing comprehensive global worker accommodation services,
              ensuring comfortable and convenient lodging solutions for
              international employees. Our services cater to diverse industry
              needs, offering flexible housing options and personalized support
              to meet workforce demands worldwide. We prioritize safety,
              comfort, and seamless integration to enhance productivity and
              employee satisfaction.
            </p>
            <Button>Contact Us</Button>
          </div>
          <div className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
            <Image
              className="object-contain"
              src="/images/global-accomodation.png"
              alt="Work Permit & Visa Support"
              fill
            />
          </div>
        </div>
      </section>

      <section className="py-[50px]">
        <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row-reverse lg:gap-[100px]">
          <div className="basis-full text-center lg:basis-1/2 lg:text-left">
            <h6 className="text-2xl font-medium text-primary">
              Professtional Training
            </h6>
            <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
              Industry-Specific Skills Training Programs
            </h2>
            <p className="my-5 text-sm font-medium">
              Offering diverse and specialized professional training programs
              designed to enhance skills and knowledge for workers across
              industries. Our workshops and courses focus on practical,
              industry-specific skills development, ensuring participants gain
              valuable expertise to excel in their roles. We prioritize quality
              instruction, hands-on learning, and career advancement
              opportunities.
            </p>
            <Button>Contact Us</Button>
          </div>
          <div className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
            <Image
              className="object-contain"
              src="/images/training-program.png"
              alt="Work Permit & Visa Support"
              fill
            />
          </div>
        </div>
      </section>

      <section className="py-[50px]">
        <div className="container flex flex-col items-center justify-between md:gap-[50px] lg:flex-row lg:gap-[100px]">
          <div className="basis-full text-center lg:basis-1/2 lg:text-left">
            <h6 className="text-2xl font-medium text-primary">
              Language Training
            </h6>
            <h2 className="mt-5 text-4xl font-semibold lg:text-5xl">
              Essential Language Skills for the Workplace
            </h2>
            <p className="my-5 text-sm font-medium">
              At Hire and Fire, we offer language training as additional support
              for workers heading to EU countries. This training focuses on the
              basics needed for everyday life and work. The sessions cover
              speaking, listening, and writing skills to help workers feel
              confident in their new environment. We tailor the training to
              match the language of the destination, ensuring the most relevant
              experience. Plus, we offer flexible scheduling to fit the needs of
              workers, making it easy for them to prepare for
              their new adventure.
            </p>
            <Button>Contact Us</Button>
          </div>
          <div className="relative min-h-[400px] w-full basis-full lg:basis-1/2">
            <Image
              className="object-contain"
              src="/images/language-skill.png"
              alt="Work Permit & Visa Support"
              fill
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdditionalSupportPage;
