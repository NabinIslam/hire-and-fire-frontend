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
          <h4 className="text-primary text-[40px] font-bold text-center">
            Contact Us
          </h4>
          <p className="text-2xl text-center mt-2 mb-8 font-medium">
            Any question or remarks? Just write us a message
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6">
            {/* card */}
            <div className="w-[355px] min-h-[180px] flex flex-col items-center shadow-xl rounded-xl gap-4 p-4 bg-[#FAF8F8]">
              <div className="bg-primary size-10 text-white flex items-center justify-center rounded-full mx-auto">
                <FaMapMarkerAlt />
              </div>
              <h6 className="font-medium text-2xl">Office Address</h6>
              <p className="text-sm font-medium text-center">
                Bucureşti Sectorul 1, Strada ING.
                <br /> ZABLOVSCHI, Nr. 10, BIROUL 1
              </p>
            </div>
            {/* card */}
            <div className="w-[355px] min-h-[180px] flex flex-col items-center shadow-xl rounded-xl gap-4 p-4 bg-[#FAF8F8]">
              <div className="bg-primary size-10 text-white flex items-center justify-center rounded-full mx-auto">
                <FaPhoneVolume />
              </div>
              <h6 className="font-medium text-2xl">Call Us</h6>
              <p className="text-sm font-medium text-center">
                +(40) 7372 28622
              </p>
            </div>
            {/* card */}
            <div className="w-[355px] min-h-[180px] flex flex-col items-center shadow-xl rounded-xl gap-4 p-4 bg-[#FAF8F8]">
              <div className="bg-primary size-10 text-white flex items-center justify-center rounded-full mx-auto">
                <FaEnvelope />
              </div>
              <h6 className="font-medium text-2xl">Email Us</h6>
              <p className="text-sm font-medium text-center">
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
