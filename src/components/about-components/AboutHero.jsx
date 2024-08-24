import Button from "../ui/Button";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="pt-[100px] pb-[50px] text-black">
      <div className="container flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="text-center lg:text-left basis-full lg:basis-1/2 space-y-6">
          <h6 className="text-primary text-2xl font-medium">About Us</h6>
          <h2 className="text-4xl md:text-5xl lg:text-[40px] font-semibold">
            We believe that great companies are built by great people
          </h2>
          <p className="text-sm font-medium">
            Welcome to Hire & Fire SRL, your strategic partner in international
            workforce solutions. Based in Bucuresti, Romania, and registered in
            the heart of Europe. Our consultancy is dedicated to facilitating
            the seamless migration of skilled workers across borders. With a
            specialized focus on connecting talented individuals with employment
            opportunities worldwide, we take pride in our ability to serve a
            diverse range of companies, from large corporations to small and
            medium enterprises.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-10 mb-6">
            <div className="flex items-center gap-5">
              <Image
                src="/images/visa-icon.png"
                height={40}
                width={40}
                alt="Visa Icon"
              />
              <p className="text-sm font-medium">
                95% VISA SUCCESS <br /> RATE IN EUROPE
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/images/moneyback-icon.png"
                height={40}
                width={40}
                alt="Moneyback Icon"
              />
              <p className="text-sm font-medium">
                100% MONEYBACK <br /> OFFER YOU WILL GET
              </p>
            </div>
          </div>
          <Button>Request Talent</Button>
        </div>
        <div className="basis-full lg:basis-1/2">
          <Image
            src="/images/about-hero-img.png"
            alt="About Hire and Fire"
            width={824}
            height={624}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
