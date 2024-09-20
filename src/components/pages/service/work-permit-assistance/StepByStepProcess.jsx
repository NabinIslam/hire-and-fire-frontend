import WorkPermitAssistancePage from "@/app/[locale]/service/work-permit-assistance/page";
import WorkPermitCard from "./WorkPermitCard";
import { WorkPermitAssistanceProcess } from "@/data/WorkPermitAssistanceProcess";

const StepByStepProcess = () => {
  return (
    <section className="py-[50px]">
      <div className="container space-y-6">
        <div className="flex items-center justify-center">
          <span className="rounded-full border-2 border-primary px-5 py-3 text-center text-2xl font-medium text-primary">
            Work Permit Assistance Process
          </span>
        </div>
        <div className="mx-auto max-w-[650px]">
          <h2 className="text-center text-4xl font-semibold lg:text-5xl">
            Our Step-by-Step Work Permit Assistance Process
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {WorkPermitAssistanceProcess.map((cardData) => (
            <WorkPermitCard key={cardData.id} cardData={cardData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepByStepProcess;
