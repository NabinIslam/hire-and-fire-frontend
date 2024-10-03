import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";

const AddressInfoSection = () => {
  return (
    <>
      <FadeInDownWithSlowBounce>
        <h4 className="text-center text-[40px] font-bold text-primary">
          Meet Us
        </h4>

        <p className="mb-8 mt-2 text-center text-2xl font-medium">
          Any question or remarks? Just write us a message
        </p>
      </FadeInDownWithSlowBounce>

      <div className="flex flex-wrap items-center justify-center gap-6">
        {/* card */}
        <FadeInLeftWithSlowBounce className="group flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl border bg-[#FAF8F8] p-4 shadow-lg duration-200 hover:bg-primary">
          <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white duration-200 group-hover:bg-secondary group-hover:text-white">
            <FaMapMarkerAlt />
          </div>
          <h6 className="text-2xl font-medium duration-200 group-hover:text-white">
            Office Address
          </h6>
          <Link href="https://maps.app.goo.gl/52W4k1TirayToasE7">
            <p className="text-center text-sm font-medium group-hover:text-white">
              Bucureşti Sectorul 1, Strada ING.
              <br /> ZABLOVSCHI, Nr. 10, BIROUL 1
            </p>
          </Link>
        </FadeInLeftWithSlowBounce>

        {/* card */}
        <FadeInUpWithSlowBounce className="group flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl border bg-[#FAF8F8] p-4 shadow-lg hover:bg-primary">
          <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white duration-200 group-hover:bg-secondary group-hover:text-white">
            <FaPhoneVolume />
          </div>
          <h6 className="text-2xl font-medium duration-200 group-hover:text-white">
            Call Us
          </h6>
          <Link href="tel:+40737228622">
            <p className="text-center text-sm font-medium group-hover:text-white">
              +(40) 7372 28622
            </p>
          </Link>
        </FadeInUpWithSlowBounce>

        {/* card */}
        <FadeInRightWithSlowBounce className="group flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl border bg-[#FAF8F8] p-4 shadow-lg hover:bg-primary">
          <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white duration-200 group-hover:bg-secondary group-hover:text-white">
            <FaEnvelope />
          </div>
          <h6 className="text-2xl font-medium duration-200 group-hover:text-white">
            Email Us
          </h6>
          <Link href="mailto:career@hireandfire.eu">
            <p className="text-center text-sm font-medium group-hover:text-white">
              career@hireandfire.eu
            </p>
          </Link>
        </FadeInRightWithSlowBounce>
      </div>
    </>
  );
};

export default AddressInfoSection;
