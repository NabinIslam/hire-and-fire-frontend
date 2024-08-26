const OurSuccess = () => {
  return (
    <section className="py-[70px] bg-our-success-bg bg-cover bg-center text-white">
      <div className="container space-y-6">
        <h2 className="text-center text-4xl lg:text-5xl font-semibold">
          Our Success
        </h2>
        <p className="text-center text-sm">
          We believe that great companies are built by great people
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x-0 lg:divide-x lg:divide-y-0 gap-5 lg:gap-0">
          <div className="p-4 space-y-5">
            <h5 className="text-xl text-center">
              25,000+ <br /> Workers Placed
            </h5>
            <p className="text-sm text-center">
              We've helped over 25,000 skilled workers find jobs globally. Our
              rigorous selection process ensures we provide only the best
              talent.
            </p>
          </div>
          <div className="p-4 space-y-5">
            <h5 className="text-xl text-center">
              Expertise Across <br />
              the Globe
            </h5>
            <p className="text-sm text-center">
              We specialize in navigating complex international recruitment
              processes. Our knowledge helps us place workers efficiently.
            </p>
          </div>
          <div className="p-4 space-y-5">
            <h5 className="text-xl text-center">
              Ethical <br /> Recruitment
            </h5>
            <p className="text-sm text-center">
              We believe in fair and honest recruitment practices. Our
              commitment to ethical standards has earned us recognition from top
              organizations.
            </p>
          </div>
          <div className="p-4 space-y-5">
            <h5 className="text-xl text-center">
              Your Trusted <br />
              Partner
            </h5>
            <p className="text-sm text-center">
              We strive to be your reliable partner in finding the right talent.
              Our goal is to create successful and long-lasting matches in the
              global workforce.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;
