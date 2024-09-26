import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import PageBanner from "@/components/common/PageBanner";
import AssignmentOfWorkersContainer from "@/components/pages/employment-service/AssignmentOfWorkersContainer";
import MediationContainer from "@/components/pages/employment-service/MediationContainer";
import WorkPermitVisaSupport from "@/components/pages/employment-service/WorkPermitVisaSupport";
import Image from "next/image";

export const metadata = {
  title: "Hire&Fire | Employment Service",
};

const EmploymentServicePage = () => {
  return (
    <main>
      <PageBanner title="Employment Service" />
      <section className="pb-[50px] pt-[100px]">
        <div className="container">
          <FadeInDownWithSlowBounce>
            <h6 className="text-center text-2xl font-medium text-primary lg:text-left">
              Direct Employment
            </h6>

            <h2 className="mt-4 text-center text-4xl font-semibold md:text-5xl lg:text-left lg:text-[40px]">
              Mediation in Employment
            </h2>
          </FadeInDownWithSlowBounce>
          <MediationContainer />
        </div>
      </section>

      <AssignmentOfWorkersContainer />

      <WorkPermitVisaSupport />
    </main>
  );
};

export default EmploymentServicePage;
