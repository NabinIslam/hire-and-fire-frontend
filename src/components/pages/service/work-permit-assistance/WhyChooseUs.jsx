import { whyChooseUsForWorkPermitAssistance } from "@/data/why_choose_us_for_work_permit_assistance";
import WorkPermitCard from "./WorkPermitCard";

const WhyChooseUs = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container space-y-8">
        <div className="flex justify-center">
          <span className="rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
            Why Choose Us
          </span>
        </div>
        <div className="mx-auto mb-16 mt-5 max-w-[651px]">
          <h2 className="text-center text-5xl font-semibold">
            Why Choose Us for Work Permit Assistance?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-2 xl:grid-cols-3">
          {whyChooseUsForWorkPermitAssistance.map((cardData) => (
            <WorkPermitCard cardData={cardData} key={cardData.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
