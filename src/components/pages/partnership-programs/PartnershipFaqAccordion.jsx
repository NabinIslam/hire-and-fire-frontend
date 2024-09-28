"use client";

import React, { useState } from "react";
import { HiOutlineArrowDown, HiOutlineArrowRight } from "react-icons/hi";

const PartnershipFaqAccordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`rounded-lg bg-white ${accordionOpen ? "border-0 border-r-0" : "border-r-8 border-r-primary"}`}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className={`flex min-h-14 w-full items-stretch justify-between rounded-l-lg duration-500 ${accordionOpen ? "rounded-r-lg bg-primary" : ""}`}
      >
        <div className="flex min-h-full w-[60px] items-center justify-center rounded-l-lg bg-primary py-3">
          {accordionOpen ? (
            <HiOutlineArrowDown className="text-2xl text-white" />
          ) : (
            <HiOutlineArrowRight className="text-2xl text-white" />
          )}
        </div>

        <div
          className={`text-md flex min-h-full basis-full items-center justify-start px-3 py-1 text-left font-medium ${accordionOpen ? "text-white" : ""}`}
        >
          {title}
        </div>
      </button>
      <div
        className={`text-slate-600 grid overflow-hidden text-sm transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] py-5 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-6 font-medium">{answer}</div>
      </div>
    </div>
  );
};

export default PartnershipFaqAccordion;
