"use client";

import Image from "next/image";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";

const BestSupports = () => {
  return (
    <div className="container mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <FadeInLeftWithSlowBounce className="space-y-3 rounded-lg border px-10 py-6 shadow-lg">
        <Image
          className="mx-auto"
          src="/images/best-support/1.png"
          height={60}
          width={60}
        />
        <h6 className="text-center text-2xl font-medium">Pre-selection</h6>
        <p className="text-center text-sm font-medium">
          Initial screening process to identify and shortlist qualified job
          candidates for further evaluation.
        </p>
      </FadeInLeftWithSlowBounce>
      <FadeInUpWithSlowBounce className="space-y-3 rounded-lg border px-10 py-6 shadow-lg">
        <Image
          className="mx-auto"
          src="/images/best-support/2.png"
          height={60}
          width={60}
        />
        <h6 className="text-center text-2xl font-medium">Post selection</h6>
        <p className="text-center text-sm font-medium">
          Finalizing hiring process, including job offer, onboarding, and
          integrating the new employee into the team.
        </p>
      </FadeInUpWithSlowBounce>
      <FadeInRightWithSlowBounce className="space-y-3 rounded-lg border px-10 py-6 shadow-lg">
        <Image
          className="mx-auto"
          src="/images/best-support/3.png"
          height={60}
          width={60}
        />
        <h6 className="text-center text-2xl font-medium">Pre-selection</h6>
        <p className="text-center text-sm font-medium">
          Initial screening process to identify and shortlist qualified job
          candidates for further evaluation.
        </p>
      </FadeInRightWithSlowBounce>
    </div>
  );
};

export default BestSupports;
