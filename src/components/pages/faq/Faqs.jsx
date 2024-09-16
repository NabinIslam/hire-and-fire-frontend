import { getFaqs } from "@/services/getFaqs";
import Accordion from "../../ui/Accordion";

const Faqs = async () => {
  const faqs = await getFaqs();

  return (
    <div className="space-y-6">
      {faqs.map((faq) => (
        <Accordion
          title={faq.question}
          answer={faq.answer}
          key={faq.question}
        />
      ))}
    </div>
  );
};

export default Faqs;
