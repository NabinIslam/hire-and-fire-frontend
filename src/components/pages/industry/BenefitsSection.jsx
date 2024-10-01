import { GiGearHammer } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";

const BenefitsSection = () => {
  return (
    <section className="py-[50px]">
      <div className="container">
        <h2 className="text-center text-4xl font-bold">
          Benefits of Hiring Through Us
        </h2>
        <p className="mt-6 text-center text-sm">
          "Benefit from our efficient hiring process, matching qualified
          candidates to your construction <br /> projects, ensuring quality and
          reliability."
        </p>
      </div>
      <div className="container mt-20 grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {/* card */}
        <div className="space-y-4 rounded-xl border border-b-8 border-b-[#F90945] px-6 py-5 shadow-lg">
          <div className="mx-auto mt-[-50px] size-[60px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-md">
            <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
              <GiGearHammer className="text-3xl text-white" />
            </div>
          </div>
          <h5 className="text-center text-xl font-semibold">
            Access to Skilled Labor
          </h5>
          <p className="text-center text-sm">
            We Provide a pool of highly trained professtional ready to
            contribute to your projects globally
          </p>
        </div>

        {/* card */}
        <div className="space-y-4 rounded-xl border border-b-8 border-b-[#F90945] px-6 py-5 shadow-lg">
          <div className="mx-auto mt-[-50px] size-[60px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-md">
            <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
              <IoBarChartSharp className="text-3xl text-white" />
            </div>
          </div>
          <h5 className="text-center text-xl font-semibold">
            Cost Effective Solutions
          </h5>
          <p className="text-center text-sm">
            Our service are designed to save you time and reduce hiring costs by
            taking care of the entire recruitment process
          </p>
        </div>

        {/* card */}
        <div className="space-y-4 rounded-xl border border-b-8 border-b-[#F90945] px-6 py-5 shadow-lg">
          <div className="mx-auto mt-[-50px] size-[60px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-md">
            <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
              <IoDocumentText className="text-3xl text-white" />
            </div>
          </div>
          <h5 className="text-center text-xl font-semibold">
            Compliance & Documentation
          </h5>
          <p className="text-center text-sm">
            We handle all necessary paperwork, ensuring compliance with
            international labor laws & regulations.
          </p>
        </div>

        {/* card */}
        <div className="space-y-4 rounded-xl border border-b-8 border-b-[#F90945] px-6 py-5 shadow-lg">
          <div className="mx-auto mt-[-50px] size-[60px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-md">
            <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
              <FaUsersGear className="text-3xl text-white" />
            </div>
          </div>
          <h5 className="text-center text-xl font-semibold">
            Tailored Recruitment
          </h5>
          <p className="text-center text-sm">
            We customize our recruitment process to match the specific
            requirements of your projects, ensuring a perfect fit for every
            role.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
