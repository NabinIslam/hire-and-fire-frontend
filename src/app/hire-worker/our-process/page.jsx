import PageBanner from "@/components/PageBanner";
import TitleDescSection from "@/components/TitleDescSection";
import Image from "next/image";

const OurProcess = () => {
  return (
    <main>
      <PageBanner title="Our Process" />
      <TitleDescSection
        title="Our Process"
        description="We ensure top-quality results through a streamlined approach involving clear communication, expert execution, and continuous improvement, guaranteeing efficiency and satisfaction at every step of the project."
      >
        <div className="space-y-[80px] py-[50px] xl:space-y-[100px]">
          <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row lg:gap-[100px]">
            <div className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left">
              <h6 className="text-2xl font-medium text-primary">Step 01</h6>
              <h2 className="text-4xl font-semibold md:text-5xl lg:text-[40px]">
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
            <div className="relative min-h-[260px] w-full basis-full lg:min-h-[400px] lg:basis-1/2">
              <Image
                className="object-contain"
                src="/images/our-process/step-1.png"
                alt="Step 1"
                fill
              />
            </div>
          </section>
          <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:gap-[100px]">
            <div className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left">
              <h6 className="text-2xl font-medium text-primary">Step 02</h6>
              <h2 className="text-4xl font-semibold md:text-5xl lg:text-[40px]">
                View Matched Candidates
              </h2>
              <p className="text-sm font-medium">
                The "View Matched Candidates" feature on job websites
                streamlines the hiring process by presenting employers with a
                tailored list of candidates who closely match the job's
                criteria. Utilizing sophisticated algorithms, it evaluates
                candidates' skills, experience, and qualifications against the
                job description. This feature saves employers significant time
                by reducing the need for extensive manual searches and initial
                screenings. It ensures that only the most relevant candidates
                are highlighted, enhancing the efficiency of the recruitment
                process and increasing the chances of quickly finding the
                perfect candidate for the role.
              </p>
            </div>
            <div className="relative min-h-[260px] w-full basis-full lg:min-h-[400px] lg:basis-1/2">
              <Image
                className="object-contain"
                src="/images/our-process/step-2.png"
                alt="Step 1"
                fill
              />
            </div>
          </section>
          <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row lg:gap-[100px]">
            <div className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left">
              <h6 className="text-2xl font-medium text-primary">Step 03</h6>
              <h2 className="text-4xl font-semibold md:text-5xl lg:text-[40px]">
                Interview Selected Candidates
              </h2>
              <p className="text-sm font-medium">
                When interviewing selected candidates, focus on evaluating their
                skills, experience, and cultural fit for the role. Start with a
                brief introduction of your company and the position. Ask
                open-ended questions that encourage detailed responses about
                their past work, problem-solving abilities, and how they handle
                challenges. Assess their communication skills, enthusiasm, and
                alignment with your company's values. Provide an opportunity for
                candidates to ask questions, offering transparency and clarity
                about the role and expectations. Aim for a structured yet
                conversational tone to create a comfortable environment.
              </p>
            </div>
            <div className="relative min-h-[260px] w-full basis-full lg:min-h-[400px] lg:basis-1/2">
              <Image
                className="object-contain"
                src="/images/our-process/step-3.png"
                alt="Step 1"
                fill
              />
            </div>
          </section>
          <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:gap-[100px]">
            <div className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left">
              <h6 className="text-2xl font-medium text-primary">Step 04</h6>
              <h2 className="text-4xl font-semibold md:text-5xl lg:text-[40px]">
                Select & We Complete Visa Procedures
              </h2>
              <p className="text-sm font-medium">
                Upon selecting a candidate, we manage and complete all necessary
                visa procedures to ensure a smooth transition. Our dedicated
                team handles the entire process, from gathering required
                documents to submitting applications and coordinating with
                immigration authorities. We provide guidance and support to the
                candidate throughout, ensuring compliance with all regulations.
                Our goal is to facilitate a hassle-free experience, enabling the
                candidate to focus on preparing for their new role while we take
                care of the visa formalities.
              </p>
            </div>
            <div className="relative min-h-[260px] w-full basis-full lg:min-h-[400px] lg:basis-1/2">
              <Image
                className="object-contain"
                src="/images/our-process/step-4.png"
                alt="Step 1"
                fill
              />
            </div>
          </section>
        </div>
      </TitleDescSection>
    </main>
  );
};

export default OurProcess;
