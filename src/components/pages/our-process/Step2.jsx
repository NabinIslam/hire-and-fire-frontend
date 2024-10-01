import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import Image from "next/image";

const Step2 = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:gap-[100px]">
      <FadeInLeftWithSlowBounce className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left">
        <h6 className="text-2xl font-medium text-primary">Step 02</h6>
        <h2 className="text-4xl font-semibold md:text-4xl lg:text-[40px]">
          View Matched Candidates
        </h2>
        <p className="text-sm font-medium">
          The "View Matched Candidates" feature on job websites streamlines the
          hiring process by presenting employers with a tailored list of
          candidates who closely match the job's criteria. Utilizing
          sophisticated algorithms, it evaluates candidates' skills, experience,
          and qualifications against the job description. This feature saves
          employers significant time by reducing the need for extensive manual
          searches and initial screenings. It ensures that only the most
          relevant candidates are highlighted, enhancing the efficiency of the
          recruitment process and increasing the chances of quickly finding the
          perfect candidate for the role.
        </p>
      </FadeInLeftWithSlowBounce>
      <FadeInRightWithSlowBounce className="relative min-h-[260px] w-full basis-full lg:min-h-[400px] lg:basis-1/2">
        <Image
          className="object-contain"
          src="/images/our-process/step-2.png"
          alt="Step 1"
          fill
        />
      </FadeInRightWithSlowBounce>
    </section>
  );
};

export default Step2;
