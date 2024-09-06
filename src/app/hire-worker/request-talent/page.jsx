import PageBanner from "@/components/common/PageBanner";
import RequestTalentForm from "@/components/RequestTalentForm";

export const metadata = {
  title: "Hire&Fire | Request Talent",
};

const RequestTalentPage = () => {
  return (
    <main>
      <PageBanner title="Request Talent" />
      <section className="px-4 py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-5xl space-y-5 rounded-2xl bg-secondary px-5 py-6 text-white shadow-xl md:px-0 lg:px-[150px] lg:py-[100px]">
            <h2 className="text-center text-3xl font-semibold lg:text-5xl">
              Find Skilled Workers for your business
            </h2>
            <p className="text-center text-sm">
              Fill out this form and Contact us and find out how to most
              efficiently involve foreign workers in your business.
            </p>
            <RequestTalentForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default RequestTalentPage;
