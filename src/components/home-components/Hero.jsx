import Image from "next/image";
import Button from "../ui/Button";
import HomeHeroImg from "../../../public/images/home-hero-img.png";

const Hero = () => {
  return (
    <section className="pt-[50px] pb-[140px] bg-hero-bg bg-cover bg-no-repeat text-white">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-[56px] md:leading-[60px] lg:leading-[60px] font-semibold">
            Connecting Employers <br /> with Top Global Talent
          </h1>
          <p className="mb-5 mt-3">Bringing skilled workers to your business</p>
          <Button>Find Talent</Button>
        </div>
        <div>
          <Image
            className="w-full h-auto"
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
