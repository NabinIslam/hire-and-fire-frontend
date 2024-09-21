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
      <div className="absolute hidden h-full w-full flex-col items-start justify-center space-y-5 transition-transform duration-1000 group-hover:translate-x-1/2 xl:flex">
        <div className="border-[rgba(52, 78, 98, 0.16)] -ml-12 rounded-lg border-8 bg-white p-3">
          <h6 className="text-lg font-medium text-secondary">{title1}</h6>
          <p className="text-sm">{desc1}</p>
        </div>
        <div className="border-[rgba(52, 78, 98, 0.16)] -mr-12 rounded-lg border-8 bg-white p-3">
          <h6 className="text-lg font-medium text-secondary">{title2}</h6>
          <p className="text-sm">{desc2}</p>
        </div>
        <div className="border-[rgba(52, 78, 98, 0.16)] -ml-12 rounded-lg border-8 bg-white p-3">
          <h6 className="text-lg font-medium text-secondary">{title3}</h6>
          <p className="text-sm">{desc3}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceImage;
