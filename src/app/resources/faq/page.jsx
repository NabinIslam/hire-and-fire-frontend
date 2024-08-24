import PageBanner from "@/components/PageBanner";
import Accordion from "@/components/ui/Accordion";

const FAQ = () => {
  return (
    <main>
      <PageBanner title="FAQ" />
      <section className="py-[100px]">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-5">
            <h6 className="text-primary text-2xl font-medium text-center lg:text-left">
              FAQ
            </h6>
            <h2 className="text-4xl md:text-5xl lg:text-[40px] font-semibold text-center lg:text-left">
              Our experts answer the most frequently asked questions
            </h2>
            <p className="text-sm font-medium text-center lg:text-left">
              Clear answers to common inquiries about job search, application
              processes, requirements, and company culture for applicants.
            </p>

            {/* faq container */}

            <div className="space-y-4">
              <Accordion
                title={"How does Hire & Fire work? How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
              <Accordion
                title={"How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
              <Accordion
                title={"How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
              <Accordion
                title={"How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
              <Accordion
                title={"How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
              <Accordion
                title={"How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
              <Accordion
                title={"How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
              <Accordion
                title={"How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
              <Accordion
                title={"How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
              <Accordion
                title={"How does Hire & Fire work?"}
                answer={
                  "Clear answers to common inquiries about job search, application processes, requirements, and company culture for applicants."
                }
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
