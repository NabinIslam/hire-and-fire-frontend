import { apiBaseUrl } from "@/secrets";
import Accordion from "../../ui/Accordion";

const Faqs = async () => {
  const data = await fetch(`${apiBaseUrl}/faqs`);
  const faqs = await data.json();

  return (
    <div className="space-y-4">
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
