import PageBanner from "@/components/PageBanner";

const FAQ = () => {
  return (
    <main>
      <PageBanner title="FAQ" />
      <section className="py-[100px]">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-5">
            <h6 className="text-primary text-2xl font-medium">FAQ</h6>
            <h2 className="text-4xl md:text-5xl lg:text-[40px] font-semibold">
              Our experts answer the most frequently asked questions
            </h2>
            <p className="text-sm font-medium">
              Clear answers to common inquiries about job search, application
              processes, requirements, and company culture for applicants.
            </p>

            {/* faq container */}

            <div></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
