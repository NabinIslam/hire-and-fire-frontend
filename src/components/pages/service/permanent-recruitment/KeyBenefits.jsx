import Image from "next/image";
import BenefitBoxLeft from "./BenefitBoxLeft";
import BenefitBoxRight from "./BenefitBoxRight";

const benefitsData = [
  {
    title: "Long-term Stability",
    description:
      "Discover dedicated professionals who align with your company's vision, ensuring long-term growth and mutual success.",
    icon: "/icons/stability-icon.svg", // Update with your actual icon path
  },
  {
    title: "Reduced Turnover",
    description:
      "Build strong, loyal teams committed to your company's goals, fostering long-term retention and lasting organizational success.",
    icon: "/icons/turnover-icon.svg",
  },
  {
    title: "Cultural Fit",
    description:
      "Ensure candidates align with your company's core values, fostering a harmonious work culture and driving long-term success.",
    icon: "/icons/cultural-fit-icon.svg",
  },
  {
    title: "Enhanced Productivity",
    description:
      "Hiring the right individuals improves workplace performance, boosts efficiency, and drives higher productivity and success.",
    icon: "/icons/productivity-icon.svg",
  },
  {
    title: "Improved Employee Morale",
    description:
      "Building a team with aligned values creates a supportive, positive work environment that boosts collaboration.",
    icon: "/icons/morale-icon.svg",
  },
  {
    title: "Cost Efficiency",
    description:
      "Reducing turnover and improving cultural fit lowers recruitment and training costs, saving your company resources in the long run.",
    icon: "/icons/cost-efficiency-icon.svg",
  },
];

const KeyBenefits = () => {
  return (
    <section className="py-[50px]">
      <div className="container min-h-[550px]">
        <div className="mx-auto flex h-[56px] w-[195px] items-center justify-center rounded-full border-2 border-primary text-2xl font-medium text-primary">
          Key Benefits
        </div>
        <div className="mx-auto mb-16 mt-5 max-w-[607px]">
          <h2 className="text-center text-5xl font-semibold">
            Key Benefits of Our  Permanent Recruitment
          </h2>
        </div>
        <div className="flex min-h-[600px] grid-cols-3 flex-col items-center justify-between gap-8 xl:flex-row">
          <div className="flex basis-full flex-col justify-between gap-6 xl:basis-[30%]">
            <BenefitBoxLeft
              icon="/images/benefit/1.png"
              title="Long-term Stability"
              description="Discover dedicated professionals who align with your company's vision, ensuring long-term growth and mutual success."
            />
            <BenefitBoxLeft
              icon="/images/benefit/2.png"
              title="Reduced Turnover"
              description="Build strong, loyal teams committed to your company's goals, fostering long-term retention and lasting organizational success."
            />
            <BenefitBoxLeft
              icon="/images/benefit/1.png"
              title="Cultural Fit"
              description="Ensure candidates align with your company’s core values, fostering a harmonious work culture and driving long-term success."
            />
          </div>
          <div className="relative hidden min-h-[500px] basis-full xl:block xl:basis-[40%]">
            <Image
              className="object-contain"
              src="/images/key-benefits.png"
              fill
            />
          </div>
          <div className="flex basis-full flex-col justify-between gap-6 xl:basis-[30%]">
            <BenefitBoxRight
              icon="/images/benefit/4.png"
              title="Enhanced Productivity"
              description="Hiring the right individuals improves workplace performance, boosts efficiency, and drives higher productivity and success."
            />
            <BenefitBoxRight
              icon="/images/benefit/5.png"
              title="Improved Employee Morale"
              description="Building a team with aligned values creates a supportive, positive work environment that boosts collaboration."
            />
            <BenefitBoxRight
              icon="/images/benefit/6.png"
              title="Cost Efficiency"
              description="Reducing turnover and improving cultural fit lowers recruitment and training costs, saving your company resources in the long run."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
