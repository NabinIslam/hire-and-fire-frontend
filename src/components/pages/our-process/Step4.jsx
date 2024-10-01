import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import Image from "next/image";

const Step4 = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row-reverse lg:gap-[100px]">
      <FadeInLeftWithSlowBounce className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left">
        <h6 className="text-2xl font-medium text-primary">Step 04</h6>
        <h2 className="text-4xl font-semibold md:text-4xl lg:text-[40px]">
          Select & We Complete Visa Procedures
        </h2>
        <p className="text-sm font-medium">
          Upon selecting a candidate, we manage and complete all necessary visa
          procedures to ensure a smooth transition. Our dedicated team handles
          the entire process, from gathering required documents to submitting
          applications and coordinating with immigration authorities. We provide
          guidance and support to the candidate throughout, ensuring compliance
          with all regulations. Our goal is to facilitate a hassle-free
          experience, enabling the candidate to focus on preparing for their new
          role while we take care of the visa formalities.
        </p>
      </FadeInLeftWithSlowBounce>
      <FadeInRightWithSlowBounce className="relative min-h-[260px] w-full basis-full lg:min-h-[400px] lg:basis-1/2">
        <Image
          className="object-contain"
          src="/images/our-process/step-4.png"
          alt="Step 1"
          fill
        />
      </FadeInRightWithSlowBounce>
    </section>
  );
};

export default Step4;
