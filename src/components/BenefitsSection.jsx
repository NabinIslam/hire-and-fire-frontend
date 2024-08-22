import { GiGearHammer } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaUsersGear } from "react-icons/fa6";

const BenefitsSection = () => {
  return (
    <section className="py-[50px]">
      <div className="container">
        <h2 className="text-4xl font-bold text-center">
          Benefits of Hiring Through Us
        </h2>
        <p className="text-sm text-center mt-6">
          "Benefit from our efficient hiring process, matching qualified
          candidates to your construction <br /> projects, ensuring quality and
          reliability."
        </p>
      </div>
      <div className="container mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-5">
        {/* card */}
        <div className="shadow-xl py-5 px-6 rounded-xl border-b-8 border-b-[#F90945] border space-y-4">
          <div className="shadow-lg bg-white size-[60px] rounded-full border-dotted border-2 border-[#F90945] p-1 mx-auto mt-[-50px]">
            <div className="bg-[#F90945] size-full rounded-full flex items-center justify-center">
              <GiGearHammer className="text-white text-3xl" />
            </div>
          </div>
          <h5 className="text-center text-xl font-semibold">
            Access to Skilled Labor
          </h5>
          <p className="text-sm text-center">
            We Provide a pool of highly trained professtional ready to
            contribute to your projects globally
          </p>
        </div>

        {/* card */}
        <div className="shadow-xl py-5 px-6 rounded-xl border-b-8 border-b-[#F90945] border space-y-4">
          <div className="shadow-lg bg-white size-[60px] rounded-full border-dotted border-2 border-[#F90945] p-1 mx-auto mt-[-50px]">
            <div className="bg-[#F90945] size-full rounded-full flex items-center justify-center">
              <IoBarChartSharp className="text-white text-3xl" />
            </div>
          </div>
          <h5 className="text-center text-xl font-semibold">
            Cost Effective Solutions
          </h5>
          <p className="text-sm text-center">
            Our service are designed to save you time and reduce hiring costs by
            taking care of the entire recruitment process
          </p>
        </div>

        {/* card */}
        <div className="shadow-xl py-5 px-6 rounded-xl border-b-8 border-b-[#F90945] border space-y-4">
          <div className="shadow-lg bg-white size-[60px] rounded-full border-dotted border-2 border-[#F90945] p-1 mx-auto mt-[-50px]">
            <div className="bg-[#F90945] size-full rounded-full flex items-center justify-center">
              <IoDocumentText className="text-white text-3xl" />
            </div>
          </div>
          <h5 className="text-center text-xl font-semibold">
            Compliance & Documentation
          </h5>
          <p className="text-sm text-center">
            We handle all necessary paperwork, ensuring compliance with
            international labor laws & regulations.
          </p>
        </div>

        {/* card */}
        <div className="shadow-xl py-5 px-6 rounded-xl border-b-8 border-b-[#F90945] border space-y-4">
          <div className="shadow-lg bg-white size-[60px] rounded-full border-dotted border-2 border-[#F90945] p-1 mx-auto mt-[-50px]">
            <div className="bg-[#F90945] size-full rounded-full flex items-center justify-center">
              <FaUsersGear className="text-white text-3xl" />
            </div>
          </div>
          <h5 className="text-center text-xl font-semibold">
            Tailored Recruitment
          </h5>
          <p className="text-sm text-center">
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
