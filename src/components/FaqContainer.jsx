import Accordion from "@/components/ui/Accordion";

const FaqContainer = ({ faqs }) => {
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

export default FaqContainer;
