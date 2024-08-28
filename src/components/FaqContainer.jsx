"use client";

import Accordion from "@/components/ui/Accordion";
import { faqsData } from "@/data/faqs";
import { apiBaseUrl } from "@/secrets";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";

const FaqContainer = () => {
  const [faqs, setFaqs] = useState(null);

  useEffect(() => {
    axios.get(`${apiBaseUrl}/faqs`).then((res) => console.log(res));

    // fetch(`${apiBaseUrl}/faqs`)
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  }, []);

  //   const { data: faqs, isLoading } = useQuery({
  //     queryKey: ["faqs"],
  //     queryFn: () =>
  //       axios.get(`${apiBaseUrl}/faqs`).then(function (response) {
  //         // handle success
  //         console.log(response);
  //       }),
  //   });

  console.log("hello world");
  console.log(faqs);

  //   if (isLoading) return <p>Loading...</p>;

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
