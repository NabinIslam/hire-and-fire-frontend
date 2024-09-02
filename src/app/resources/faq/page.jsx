import Accordion from "@/components/ui/Accordion";
import PageBanner from "@/components/PageBanner";
import { apiBaseUrl } from "@/secrets";

const FAQPage = async () => {
  const data = await fetch(`${apiBaseUrl}/faqs`);
  const faqs = await data.json();

  return (
    <main>
      <PageBanner title="FAQ" />
      <section className="py-[100px]">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-5">
            <h6 className="text-center text-2xl font-medium text-primary lg:text-left">
              FAQ
            </h6>
            <h2 className="text-center text-4xl font-semibold md:text-5xl lg:text-left lg:text-[40px]">
              Our experts answer the most frequently asked questions
            </h2>
            <p className="text-center text-sm font-medium lg:text-left">
              Clear answers to common inquiries about job search, application
              processes, requirements, and company culture for applicants.
            </p>

            {/* faq container */}

            <div className="space-y-4">
              {faqs.map((faq) => (
                <Accordion
                  title={faq.question}
                  answer={faq.answer}
                  key={faq.question}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPage;
