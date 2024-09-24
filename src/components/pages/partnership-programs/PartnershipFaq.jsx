import { partnershipFaqQuesAns } from "@/data/partnershipFaqQuesAns";
import PartnershipFaqAccordion from "./PartnershipFaqAccordion";

const PartnershipFaq = () => {
  return (
    <section className="bg-partnership-faq-bg bg-cover bg-center bg-no-repeat py-[100px]">
      <div className="container">
        <div className="flex items-center justify-start">
          <span className="rounded-full border-2 border-primary bg-white px-5 py-3 text-2xl font-medium text-primary">
            FAQ
          </span>
        </div>

        <h2 className="my-5 text-start text-4xl font-semibold text-white lg:text-5xl">
          Frequently Asked Questions
        </h2>

        <p className="my-5 text-sm font-medium text-white">
          A Frequently Asked Questions (FAQ) section provides concise answers to
          common queries, helping users quickly find essential information about
          a product or service.
        </p>

        <div className="flex flex-col justify-between gap-x-20 gap-y-6 lg:flex-row">
          <div className="space-y-6">
            {partnershipFaqQuesAns
              .filter((item) => item.position === "left")
              .map((item) => (
                <PartnershipFaqAccordion
                  title={item.ques}
                  answer={item.ans}
                  key={item.id}
                />
              ))}
          </div>
          <div className="space-y-6">
            {partnershipFaqQuesAns
              .filter((item) => item.position === "right")
              .map((item) => (
                <PartnershipFaqAccordion
                  title={item.ques}
                  answer={item.ans}
                  key={item.id}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipFaq;
