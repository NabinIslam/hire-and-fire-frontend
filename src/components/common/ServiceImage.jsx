import Image from "next/image";

const ServiceImage = ({
  imageLink,
  title1,
  desc1,
  title2,
  desc2,
  title3,
  desc3,
}) => {
  return (
    <div className="group relative min-h-[250px] w-full xl:min-h-[400px]">
      <Image
        src={imageLink}
        className="object-contain object-center xl:object-right"
        fill
      />
      <div className="absolute hidden h-full w-full flex-col items-start justify-center space-y-5 px-5 transition-transform duration-1000 group-hover:translate-x-1/2 xl:flex">
        <div className="rounded-md bg-[#F4F3F380] bg-opacity-[50%] p-2">
          <div className="rounded bg-white p-3">
            <h6 className="text-lg font-medium text-secondary">{title1}</h6>
            <p className="text-sm">{desc1}</p>
          </div>
        </div>
        <div className="ml-12 rounded-md bg-[#F4F3F380] bg-opacity-[50%] p-2">
          <div className="rounded bg-white p-3">
            <h6 className="text-lg font-medium text-secondary">{title2}</h6>
            <p className="text-sm">{desc2}</p>
          </div>
        </div>
        <div className="rounded-md bg-[#F4F3F380] bg-opacity-[50%] p-2">
          <div className="rounded bg-white p-3">
            <h6 className="text-lg font-medium text-secondary">{title3}</h6>
            <p className="text-sm">{desc3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceImage;
