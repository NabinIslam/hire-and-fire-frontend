"use client";

import { Fragment } from "react";
import { usePathname } from "next/navigation";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { capitalizeAndRemoveHyphens } from "@/Utils/capitalizeAndRemoveHyphens";

const languageCodes = ["en", "ro"];

const Breadcrumbs = () => {
  const location = usePathname();

  const parts = location.split("/").filter(Boolean);

  console.log(parts);

  // If the first part is a language code, remove it
  if (languageCodes.includes(parts[0])) {
    parts.shift();
  }

  return (
    <div className="flex items-center justify-center gap-3 text-sm">
      Home
      {parts.map((part, index) => (
        <Fragment key={index}>
          {index >= 0 && <MdKeyboardDoubleArrowRight />}
          {capitalizeAndRemoveHyphens(part)}
        </Fragment>
      ))}
    </div>
  );
};

export default Breadcrumbs;
