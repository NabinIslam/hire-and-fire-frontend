import Image from "next/image";
import Button from "../ui/Button";
import HomeHeroImg from "../../../public/images/home-hero-img.png";
import BgButton from "../ui/BgButton";

const Hero = () => {
  return (
    <section className="bg-hero-bg bg-cover bg-no-repeat pb-[140px] pt-[50px] text-white">
      <div className="container flex flex-col items-center justify-between gap-16 lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-semibold md:text-5xl md:leading-[60px] lg:text-[56px] lg:leading-[60px]">
            Connecting Employers <br /> with Top Global Talent
          </h1>
          <p className="mb-5 mt-3">Bringing skilled workers to your business</p>

          <BgButton>Find Talent</BgButton>
        </div>
        <div>
          <Image
            className="h-auto w-full"
            src="/images/home-hero-img.png"
            alt="Home Hero Image"
            height={472}
            width={616}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
