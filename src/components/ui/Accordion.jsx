"use client";
import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="rounded-lg border-2 py-2">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-center justify-between px-6 py-1"
      >
        <div className="basis-full text-left text-lg font-medium">{title}</div>
        <div className="flex basis-[30px] items-center justify-end">
          {accordionOpen ? (
            <FaMinus className="text-xl" />
          ) : (
            <FaPlus className="text-xl" />
          )}
        </div>
      </button>
      <div
        className={`text-slate-600 grid overflow-hidden text-sm transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden px-6 font-medium">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
