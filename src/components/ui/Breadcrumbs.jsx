"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CapitalizeAndRemoveHyphens } from "@/utils/capitalizeAndRemoveHyphens";

const Breadcrumbs = () => {
  const location = usePathname();

  const parts = location.split("/");

  return (
    <div className="flex items-center justify-center gap-3 text-sm">
      Home
      {parts.map((part, index) => (
        <Fragment key={index}>
          {index > 0 && <MdKeyboardDoubleArrowRight />}
          {CapitalizeAndRemoveHyphens(part)}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
