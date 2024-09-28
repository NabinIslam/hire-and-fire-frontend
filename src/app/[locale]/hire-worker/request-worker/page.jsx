import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import RequestTalentForm from "@/components/pages/request-talent/RequestTalentForm";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata = {
  title: "Hire&Fire | Request Worker",
};

const RequestTalentPage = () => {
  return (
    <main className="bg-hire-worker-bg bg-cover bg-center bg-no-repeat">
      <section className="space-y-6 pt-[50px] text-center text-white">
        <FadeInUpWithSlowBounce className="space-y-4">
          <h1 className="text-3xl font-semibold lg:text-5xl">Request Worker</h1>
          <Breadcrumbs />
        </FadeInUpWithSlowBounce>
      </section>
      <section className="px-4 py-[100px]">
        <div className="container">
          <div className="space-y-10 rounded-lg bg-white px-10 py-10 shadow-xl">
            <FadeInDownWithSlowBounce className="space-y-5">
              <h2 className="text-center text-3xl font-semibold lg:text-4xl">
                Hire Skilled Workers for your business
              </h2>
            </FadeInDownWithSlowBounce>
            <RequestTalentForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RequestTalentPage;
