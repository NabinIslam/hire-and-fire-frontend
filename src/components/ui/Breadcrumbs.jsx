"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { capitalizeAndRemoveHyphens } from "@/Utils/capitalizeAndRemoveHyphens";

const Breadcrumbs = () => {
  const location = usePathname();

  const parts = location.split("/");

  return (
    <div className="text-sm flex justify-center items-center gap-3">
      Home
      {parts.map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <MdKeyboardDoubleArrowRight />}
          {capitalizeAndRemoveHyphens(part)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
