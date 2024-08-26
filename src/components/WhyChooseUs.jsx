import Image from "next/image";
import Button from "./ui/Button";
import BgButton from "./ui/BgButton";

const WhyChooseUs = () => {
  return (
    <section className="py-[70px] bg-why-choose-us-bg bg-cover bg-center bg-no-repeat text-white">
      <div className="container flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
        {/* column */}

        <div className="basis-full lg:basis-1/3 space-y-6 text-center lg:text-left">
          <h2 className="font-semibold text-5xl">Why Choose Us?</h2>
          <p className="text-sm">
            Choose our job website for streamlined recruitment, user-friendly
            interface, compliance assurance, and dedicated support for both
            employers
          </p>
          <BgButton>Contact Us</BgButton>
        </div>
        {/* column */}

        <div className="basis-full lg:basis-2/3 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-20">
          <div className="flex gap-2">
            <div className="basis-8">
              <Image
                className="mt-1"
                src="/images/check-icon.png"
                height={24}
                width={24}
              />
            </div>
            <div className="basis-full space-y-3">
              <h6 className="font-medium text-2xl">Global Network</h6>
              <p className="text-sm">
                Extensive connections worldwide to source the best talent for
                your business.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="basis-8">
              <Image
                className="mt-1"
                src="/images/check-icon.png"
                height={24}
                width={24}
              />
            </div>
            <div className="basis-full space-y-3">
              <h6 className="font-medium text-2xl">Industry Expertise</h6>
              <p className="text-sm">
                Specialized in collaborating with companies across diverse
                sectors.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="basis-8">
              <Image
                className="mt-1"
                src="/images/check-icon.png"
                height={24}
                width={24}
              />
            </div>
            <div className="basis-full space-y-3">
              <h6 className="font-medium text-2xl">Commitment</h6>
              <p className="text-sm">
                Service-oriented and highly dedicated to meeting client needs.
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="basis-8">
              <Image
                className="mt-1"
                src="/images/check-icon.png"
                height={24}
                width={24}
              />
            </div>
            <div className="basis-full space-y-3">
              <h6 className="font-medium text-2xl">Efficiency</h6>
              <p className="text-sm">
                Swift and precise matching of candidates based on client job
                descriptions within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
