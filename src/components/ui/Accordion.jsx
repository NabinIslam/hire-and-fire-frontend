"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 border-2 rounded-lg">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full px-6 py-1"
      >
        <div className="font-medium text-lg text-left basis-full">{title}</div>
        <div className="basis-[30px] flex items-center justify-end">
          {accordionOpen ? (
            <FaMinus className="text-xl" />
          ) : (
            <FaPlus className="text-xl" />
          )}
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-6">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
