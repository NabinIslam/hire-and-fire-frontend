"use client";
import { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";

const ResourcesNavDropdown = ({ children, title, pathname }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <div className={`rounded-lg`}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-stretch justify-between"
      >
        <div
          className={`flex w-full basis-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/hire-worker/our-process" ? "bg-primary text-white" : ""}${pathname === "/hire-worker/request-worker" ? "bg-primary text-white" : ""}`}
        >
          {title}

          {accordionOpen ? (
            <MdKeyboardArrowRight className="text-xl" />
          ) : (
            <MdKeyboardArrowDown className="text-xl" />
          )}
        </div>
      </button>

      <div
        className={`text-slate-600 grid overflow-hidden text-sm transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] py-4 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className={`overflow-hidden px-3 font-medium text-secondary`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ResourcesNavDropdown;
