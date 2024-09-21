import { VisaApplicationFlightAssistanceProcess } from "@/data/VisaApplicationFlightAssistanceProcess";
import VisaApplicationCard from "./VisaApplicationCard";

const FlightAssistanceProcess = () => {
  return (
    <section className="pt-[50px] pb-[100px]">
      <div className="container">
        <div className="flex items-center justify-center">
          <span className="rounded-full border-2 border-primary px-5 py-3 text-center text-2xl font-medium text-primary">
            Guided Visa & Flight Assistance
          </span>
        </div>
        <div className="mx-auto mb-16 mt-6 max-w-[840px]">
          <h2 className="text-center text-4xl font-semibold lg:text-5xl">
            Our Step-by-Step Visa Application Flight Assistance Process
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {VisaApplicationFlightAssistanceProcess.map((cardData) => (
            <VisaApplicationCard key={cardData.id} cardData={cardData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlightAssistanceProcess;
