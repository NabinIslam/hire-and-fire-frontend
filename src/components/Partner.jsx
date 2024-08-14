import Button from './ui/Button';

const Partner = () => {
  return (
    <section className="py-[50px]">
      <div className="container flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-24">
        <div className="space-y-5 basis-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-5xl font-bold">
            Your Partner in international Construction Recruitment
          </h2>
          <p className="text-sm leading-5">
            "Hire & Fire Job s platform for the construction industry connects
            companies with skilled professionals globally. We streamline
            recruitment processes, ensuring precise matches for project
            requirements through our extensive network and industry specific
            expertise. Our platform offers tailored solutions for construction
            companies, facilitating efficient hiring and workforce management.
            Partner with us to access a pool of qualified talent and optimize
            your construction projects with ease."
          </p>
          <Button>Contact Us</Button>
        </div>
        <div className="basis-1/2">
          <img src="/Image-1.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Partner;
