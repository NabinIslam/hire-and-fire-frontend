"use client";

import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";

const OurSuccess = () => {
  return (
    <section className="space-y-8 bg-our-success-bg bg-cover bg-center py-[70px] text-white">
      <FadeInUpWithSlowBounce className="container space-y-6">
        <h2 className="text-center text-4xl font-semibold lg:text-4xl">
          Our Success
        </h2>
        <p className="text-center text-sm">
          We believe that great companies are built by great people
        </p>
      </FadeInUpWithSlowBounce>

      <div className="container grid grid-cols-1 gap-5 divide-y md:grid-cols-2 md:divide-x-0 md:divide-y-0 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-y-0">
        <FadeInLeftWithSlowBounce className="space-y-5 p-4">
          <h5 className="text-center text-xl">
            25,000+ <br /> Workers Placed
          </h5>
          <p className="text-center text-sm">
            We've helped over 25,000 skilled workers find jobs globally. Our
            rigorous selection process ensures we provide only the best talent.
          </p>
        </FadeInLeftWithSlowBounce>
        <FadeInUpWithSlowBounce className="space-y-5 p-4">
          <h5 className="text-center text-xl">
            Expertise Across <br />
            the Globe
          </h5>
          <p className="text-center text-sm">
            We specialize in navigating complex international recruitment
            processes. Our knowledge helps us place workers efficiently.
          </p>
        </FadeInUpWithSlowBounce>
        <FadeInUpWithSlowBounce className="space-y-5 p-4">
          <h5 className="text-center text-xl">
            Ethical <br />
            Recruitment
          </h5>
          <p className="text-center text-sm">
            We believe in fair and honest recruitment practices. Our commitment
            to ethical standards has earned us recognition from top
            organizations.
          </p>
        </FadeInUpWithSlowBounce>
        <FadeInRightWithSlowBounce className="space-y-5 p-4">
          <h5 className="text-center text-xl">
            Your Trusted <br />
            Partner
          </h5>
          <p className="text-center text-sm">
            We strive to be your reliable partner in finding the right talent.
            Our goal is to create successful and long-lasting matches in the
            global workforce.
          </p>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default OurSuccess;
