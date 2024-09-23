import PartnershipFaqAccordion from "./PartnershipFaqAccordion";

const FAQ = () => {
  return (
    <section className="bg-partnership-faq-bg bg-cover bg-center bg-no-repeat py-[50px]">
      <div className="container">
        <div className="flex items-center justify-start">
          <span className="rounded-full border-2 border-primary bg-white px-5 py-3 text-2xl font-medium text-primary">
            FAQ
          </span>
        </div>

        <h2 className="mt-5 text-start text-4xl font-semibold text-white lg:text-5xl">
          Frequently Asked Questions
        </h2>

        <p className="text-sm font-medium text-white">
          A Frequently Asked Questions (FAQ) section provides concise answers to
          common queries, helping users quickly find essential information about
          a product or service.
        </p>

        <div>
          <PartnershipFaqAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
