import Image from "next/image";

const OurValues = () => {
  return (
    <div className="mx-auto mt-16 flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-20">
      {/* card */}
      <div className="w-[350px] space-y-4 rounded-lg border border-b-8 border-b-[#F90945] px-8 py-5 shadow-xl">
        <div className="mx-auto mt-[-60px] size-[80px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-lg">
          <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
            <Image
              src="/images/our-values-icons/integrity.png"
              width={40}
              height={40}
            />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Integrity</h5>
        <p className="text-center text-sm font-medium">
          Upholding the highest ethical standards in all our interactions,
          ensuring trust and transparency.
        </p>
      </div>

      {/* card */}
      <div className="w-[350px] space-y-4 rounded-lg border border-b-8 border-b-[#F90945] px-8 py-5 shadow-xl">
        <div className="mx-auto mt-[-60px] size-[80px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-lg">
          <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
            <Image
              src="/images/our-values-icons/collaboration.png"
              width={40}
              height={40}
            />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Collaboration</h5>
        <p className="text-center text-sm font-medium">
          Embracing teamwork and knowledge-sharing to enhance continuous
          improvement.
        </p>
      </div>

      {/* card */}
      <div className="w-[350px] space-y-4 rounded-lg border border-b-8 border-b-[#F90945] px-8 py-5 shadow-xl">
        <div className="mx-auto mt-[-60px] size-[80px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-lg">
          <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
            <Image
              src="/images/our-values-icons/excellence.png"
              width={40}
              height={40}
            />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Excellence</h5>
        <p className="text-center text-sm font-medium">
          Striving for the highest standards in our daily work and the quality
          of services provided.
        </p>
      </div>

      {/* card */}
      <div className="w-[350px] space-y-4 rounded-lg border border-b-8 border-b-[#F90945] px-8 py-5 shadow-xl">
        <div className="mx-auto mt-[-60px] size-[80px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-lg">
          <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
            <Image
              src="/images/our-values-icons/empowerment.png"
              width={40}
              height={40}
            />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Empowerment</h5>
        <p className="text-center text-sm font-medium">
          Delivering operational excellence through innovation and leadership at
          all levels.
        </p>
      </div>

      {/* card */}
      <div className="w-[350px] space-y-4 rounded-lg border border-b-8 border-b-[#F90945] px-8 py-5 shadow-xl">
        <div className="mx-auto mt-[-60px] size-[80px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-lg">
          <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
            <Image
              src="/images/our-values-icons/responsibility.png"
              width={40}
              height={40}
            />
          </div>
        </div>
        <h5 className="text-center text-xl font-semibold">Responsibility</h5>
        <p className="text-center text-sm font-medium">
          Fulfilling commitments with a clear understanding of urgency and
          accountability to colleagues and clients.
        </p>
      </div>
    </div>
  );
};

export default OurValues;
