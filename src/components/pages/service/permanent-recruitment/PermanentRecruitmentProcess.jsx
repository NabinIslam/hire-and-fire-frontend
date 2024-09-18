import SVGTimeline from "./SVGTimeline";
import { ProcessTimeline } from "./Timeline";

const PermanentRecruitmentProcess = () => {
  return (
    <section className="space-y-20 py-[50px]">
      <div className="container space-y-8">
        <div className="flex items-center justify-center">
          <span className="mx-auto rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
            Permanent Recruitment Process
          </span>
        </div>
        <div className="mx-auto mb-16 mt-5 max-w-[607px]">
          <h2 className="text-center text-5xl font-semibold">
            Our Step-by-Step Permanent Recruitment Process
          </h2>
        </div>
      </div>
      <div className="container hidden xl:block">
        {/* <ProcessTimeline /> */}
        <SVGTimeline />
      </div>
    </section>
  );
};

export default PermanentRecruitmentProcess;
