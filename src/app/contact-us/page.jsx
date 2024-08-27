import PageBanner from "@/components/PageBanner";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import ContactFormSection from "@/components/contact-components/ContactFormSection";

const ContactUs = () => {
  return (
    <main>
      <PageBanner title="Contact Us" />
      <section className="py-[50px]">
        <div className="container">
          <h4 className="text-center text-[40px] font-bold text-primary">
            Contact Us
          </h4>
          <p className="mb-8 mt-2 text-center text-2xl font-medium">
            Any question or remarks? Just write us a message
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {/* card */}
            <div className="flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl bg-[#FAF8F8] p-4 shadow-xl">
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white">
                <FaMapMarkerAlt />
              </div>
              <h6 className="text-2xl font-medium">Office Address</h6>
              <p className="text-center text-sm font-medium">
                Bucureşti Sectorul 1, Strada ING.
                <br /> ZABLOVSCHI, Nr. 10, BIROUL 1
              </p>
            </div>
            {/* card */}
            <div className="flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl bg-[#FAF8F8] p-4 shadow-xl">
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white">
                <FaPhoneVolume />
              </div>
              <h6 className="text-2xl font-medium">Call Us</h6>
              <p className="text-center text-sm font-medium">
                +(40) 7372 28622
              </p>
            </div>
            {/* card */}
            <div className="flex min-h-[180px] w-[355px] flex-col items-center gap-4 rounded-xl bg-[#FAF8F8] p-4 shadow-xl">
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-primary text-white">
                <FaEnvelope />
              </div>
              <h6 className="text-2xl font-medium">Email Us</h6>
              <p className="text-center text-sm font-medium">
                career@hireandfire.eu
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactFormSection />
    </main>
  );
};

export default ContactUs;
