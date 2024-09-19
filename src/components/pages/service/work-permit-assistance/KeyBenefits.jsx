import Image from "next/image";

const KeyBenefits = () => {
  return (
    <section className="py-[50px]">
      <div className="container flex items-center justify-between">
        <div className="basis-full lg:basis-1/2">
          <div className="basis-1/2">
            <div className="relative min-h-[400px] w-full">
              <Image
                className="h-auto w-full"
                src="/images/work-permit.png"
                fill
              />
            </div>
          </div>
          <div className="basis-1/2">
            <div className="relative min-h-full w-full">
              <Image
                className="h-full w-full"
                src="/images/work-permit-2.png"
                fill
              />
            </div>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2"></div>
      </div>
    </section>
  );
};

export default KeyBenefits;
