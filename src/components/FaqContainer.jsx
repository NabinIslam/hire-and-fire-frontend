import Accordion from "@/components/ui/Accordion";
import { faqsData } from "@/data/faqs";

const FaqContainer = () => {
  return (
    <div className="space-y-4">
      {faqsData.map((faq) => (
        <Accordion
          title={faq.question}
          answer={faq.answer}
          key={faq.question}
        />
      ))}
    </div>
  );
};

export default FaqContainer;
