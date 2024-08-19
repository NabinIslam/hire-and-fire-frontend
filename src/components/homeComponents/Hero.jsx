import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="pt-[50px] pb-[140px] bg-hero-bg bg-cover bg-no-repeat text-white">
      <div className="container flex items-center justify-between">
        <div className="space-y-6">
          <h1 className="text-[56px] leading-[70px] font-semibold">
            "Connecting Employers <br /> with Top Global Talent"
          </h1>
          <p>"Bringing skilled workers to your business"</p>
          <Button>Find Talent</Button>
        </div>
        <div>
          <img src="/hero-img.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
