import Accordion from "@/components/ui/Accordion";
import FaqSkeleton from "./skeletons/FaqSkeleton";

const FaqContainer = ({ faqs }) => {
  if (!faqs) return <FaqSkeleton />;

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
