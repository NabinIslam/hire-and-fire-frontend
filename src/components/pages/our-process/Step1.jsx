import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import Image from "next/image";

const Step1 = () => {
  return (
    <section className="flex flex-col items-center justify-between gap-[50px] lg:flex-row lg:gap-[100px]">
      <FadeInLeftWithSlowBounce className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left">
        <h6 className="text-2xl font-medium text-primary">Step 01</h6>
        <h2 className="text-4xl font-semibold md:text-4xl lg:text-[40px]">
          Tell Us Your Need
        </h2>
        <p className="text-sm font-medium">
          Share your hiring needs with us, and we'll tailor our services to find
          the perfect fit for your team. Specify the job role, required skills,
          experience level, and any other important criteria. Whether you need
          temporary staff, permanent hires, or specialized talent, we have the
          expertise to match your requirements. Our goal is to streamline the
          recruitment process, saving you time and ensuring you get top-quality
          candidates who meet your expectations and contribute to your company's
          success.
        </p>
      </FadeInLeftWithSlowBounce>
      <FadeInRightWithSlowBounce className="relative min-h-[260px] w-full basis-full lg:min-h-[400px] lg:basis-1/2">
        <Image
          className="object-contain"
          src="/images/our-process/step-1.png"
          alt="Step 1"
          fill
        />
      </FadeInRightWithSlowBounce>
    </section>
  );
};

export default Step1;
