import PageBanner from "@/components/PageBanner";
import Button from "@/components/ui/Button";
import Image from "next/image";

const AdditionalSupport = () => {
  return (
    <main>
      <PageBanner title="Additional Support" />

      <section className="pt-[100px] pb-[50px]">
        <div className="container flex flex-col lg:flex-row items-center justify-between md:gap-[50px] lg:gap-[100px]">
          <div className="basis-full lg:basis-1/2 text-center lg:text-left">
            <div className="text-primary text-xl font-medium border-dashed border-2 border-primary h-[46px] w-[264px] flex items-center justify-center">
              Professional Support
            </div>
            <h2 className="text-4xl lg:text-5xl font-semibold mt-5">
              We also provide support for Workers{" "}
            </h2>
            <p className="text-sm font-medium my-5">
              "Support for Workers" encompasses comprehensive assistance aimed at
              enhancing workplace productivity and employee satisfaction. Our
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
          <div className="basis-full lg:basis-1/2 relative w-full min-h-[400px]">
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
        <h2 className="text-4xl lg:text-5xl font-semibold my-5 text-center">
          Our Best Support
        </h2>
        <div className="container flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="shadow-lg px-10 py-6 rounded-lg space-y-3">
            <Image
              className="mx-auto"
              src="/images/best-support/1.png"
              height={60}
              width={60}
            />
            <h6 className="text-center font-medium text-2xl">Pre-selection</h6>
            <p className="font-medium text-sm text-center">
              Initial screening process to identify and shortlist qualified job
              candidates for further evaluation.
            </p>
          </div>
          <div className="shadow-lg px-10 py-6 rounded-lg space-y-3">
            <Image
              className="mx-auto"
              src="/images/best-support/1.png"
              height={60}
              width={60}
            />
            <h6 className="text-center font-medium text-2xl">Pre-selection</h6>
            <p className="font-medium text-sm text-center">
              Initial screening process to identify and shortlist qualified job
              candidates for further evaluation.
            </p>
          </div>
          <div className="shadow-lg px-10 py-6 rounded-lg space-y-3">
            <Image
              className="mx-auto"
              src="/images/best-support/1.png"
              height={60}
              width={60}
            />
            <h6 className="text-center font-medium text-2xl">Pre-selection</h6>
            <p className="font-medium text-sm text-center">
              Initial screening process to identify and shortlist qualified job
              candidates for further evaluation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[50px]">
        <div className="container flex flex-col lg:flex-row items-center justify-between md:gap-[50px] lg:gap-[100px]">
          <div className="basis-full lg:basis-1/2 text-center lg:text-left">
            <h6 className="text-primary text-2xl font-medium">
              Worker Accommodation Service
            </h6>
            <h2 className="text-4xl lg:text-5xl font-semibold mt-5">
              Global Accommodation Services for Workers
            </h2>
            <p className="text-sm font-medium my-5">
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
          <div className="basis-full lg:basis-1/2 relative w-full min-h-[400px]">
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
        <div className="container flex flex-col lg:flex-row-reverse items-center justify-between md:gap-[50px] lg:gap-[100px]">
          <div className="basis-full lg:basis-1/2 text-center lg:text-left">
            <h6 className="text-primary text-2xl font-medium">
              Professtional Training
            </h6>
            <h2 className="text-4xl lg:text-5xl font-semibold mt-5">
              Industry-Specific Skills Training Programs
            </h2>
            <p className="text-sm font-medium my-5">
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
          <div className="basis-full lg:basis-1/2 relative w-full min-h-[400px]">
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
        <div className="container flex flex-col lg:flex-row items-center justify-between md:gap-[50px] lg:gap-[100px]">
          <div className="basis-full lg:basis-1/2 text-center lg:text-left">
            <h6 className="text-primary text-2xl font-medium">
              Language Training
            </h6>
            <h2 className="text-4xl lg:text-5xl font-semibold mt-5">
              Essential Language Skills for the Workplace
            </h2>
            <p className="text-sm font-medium my-5">
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
          <div className="basis-full lg:basis-1/2 relative w-full min-h-[400px]">
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

export default AdditionalSupport;
