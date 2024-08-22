import Image from "next/image";
import integrity from "@/assets/images/our-values-icons/integrity.png";
import collaboration from "@/assets/images/our-values-icons/collaboration.png";
import excellence from "@/assets/images/our-values-icons/excellence.png";
import empowerment from "@/assets/images/our-values-icons/empowerment.png";
import responsibility from "@/assets/images/our-values-icons/responsibility.png";

const OurValues = () => {
  return (
    <div className="max-w-6xl mx-auto flex flex-wrap gap-y-20 gap-x-10 items-center justify-center mt-16">
      {/* card */}
      <div className="w-[350px] shadow-xl py-5 px-8 rounded-lg border-b-8 border-b-[#F90945] border space-y-4">
        <div className="shadow-lg bg-white size-[80px] rounded-full border-dotted border-2 border-[#F90945] p-1 mx-auto mt-[-60px]">
          <div className="bg-[#F90945] size-full rounded-full flex items-center justify-center">
            <Image src={integrity} width={40} height={40} />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Integrity</h5>
        <p className="text-sm text-center font-medium">
          Upholding the highest ethical standards in all our interactions,
          ensuring trust and transparency.
        </p>
      </div>

      {/* card */}
      <div className="w-[350px] shadow-xl py-5 px-8 rounded-lg border-b-8 border-b-[#F90945] border space-y-4">
        <div className="shadow-lg bg-white size-[80px] rounded-full border-dotted border-2 border-[#F90945] p-1 mx-auto mt-[-60px]">
          <div className="bg-[#F90945] size-full rounded-full flex items-center justify-center">
            <Image src={collaboration} width={40} height={40} />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Collaboration</h5>
        <p className="text-sm text-center font-medium">
          Embracing teamwork and knowledge-sharing to enhance continuous
          improvement.
        </p>
      </div>

      {/* card */}
      <div className="w-[350px] shadow-xl py-5 px-8 rounded-lg border-b-8 border-b-[#F90945] border space-y-4">
        <div className="shadow-lg bg-white size-[80px] rounded-full border-dotted border-2 border-[#F90945] p-1 mx-auto mt-[-60px]">
          <div className="bg-[#F90945] size-full rounded-full flex items-center justify-center">
            <Image src={excellence} width={40} height={40} />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Excellence</h5>
        <p className="text-sm text-center font-medium">
          Striving for the highest standards in our daily work and the quality
          of services provided.
        </p>
      </div>

      {/* card */}
      <div className="w-[350px] shadow-xl py-5 px-8 rounded-lg border-b-8 border-b-[#F90945] border space-y-4">
        <div className="shadow-lg bg-white size-[80px] rounded-full border-dotted border-2 border-[#F90945] p-1 mx-auto mt-[-60px]">
          <div className="bg-[#F90945] size-full rounded-full flex items-center justify-center">
            <Image src={empowerment} width={40} height={40} />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Empowerment</h5>
        <p className="text-sm text-center font-medium">
          Delivering operational excellence through innovation and leadership at
          all levels.
        </p>
      </div>

      {/* card */}
      <div className="w-[350px] shadow-xl py-5 px-8 rounded-lg border-b-8 border-b-[#F90945] border space-y-4">
        <div className="shadow-lg bg-white size-[80px] rounded-full border-dotted border-2 border-[#F90945] p-1 mx-auto mt-[-60px]">
          <div className="bg-[#F90945] size-full rounded-full flex items-center justify-center">
            <Image src={responsibility} width={40} height={40} />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Responsibility</h5>
        <p className="text-sm text-center font-medium">
          Fulfilling commitments with a clear understanding of urgency and
          accountability to colleagues and clients.
        </p>
      </div>
    </div>
  );
};

export default OurValues;
