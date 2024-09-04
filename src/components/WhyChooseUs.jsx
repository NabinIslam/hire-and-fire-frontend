import Image from "next/image";
import BgButton from "./ui/BgButton";
import Link from "next/link";
import FadeInUpWithSlowBounce from "./animations/FadeInUpWithSlowBounce";

const WhyChooseUs = () => {
  return (
    <section className="bg-why-choose-us-bg bg-cover bg-center bg-no-repeat py-[70px] text-white">
      <FadeInUpWithSlowBounce>
        <div className="container flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          {/* column */}

          <div className="basis-full space-y-6 text-center lg:basis-1/3 lg:text-left">
            <h2 className="text-5xl font-semibold">Why Choose Us?</h2>
            <p className="text-sm">
              Choose our job website for streamlined recruitment, user-friendly
              interface, compliance assurance, and dedicated support for both
              employers
            </p>
            <div>
              <Link href="/contact-us">
                <BgButton>Contact Us</BgButton>
              </Link>
            </div>
          </div>

          {/* column */}

          <div className="grid basis-full grid-cols-1 gap-10 md:grid-cols-2 lg:basis-2/3 lg:gap-x-20">
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
                <h6 className="text-2xl font-medium">Global Network</h6>
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
                <h6 className="text-2xl font-medium">Industry Expertise</h6>
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
                <h6 className="text-2xl font-medium">Commitment</h6>
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
                <h6 className="text-2xl font-medium">Efficiency</h6>
                <p className="text-sm">
                  Swift and precise matching of candidates based on client job
                  descriptions within 48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInUpWithSlowBounce>
    </section>
  );
};

export default WhyChooseUs;
