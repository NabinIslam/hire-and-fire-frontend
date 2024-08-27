const OurSuccess = () => {
  return (
    <section className="bg-our-success-bg bg-cover bg-center py-[70px] text-white">
      <div className="container space-y-6">
        <h2 className="text-center text-4xl font-semibold lg:text-5xl">
          Our Success
        </h2>
        <p className="text-center text-sm">
          We believe that great companies are built by great people
        </p>

        <div className="grid grid-cols-1 gap-5 divide-y md:grid-cols-2 md:divide-x-0 md:divide-y-0 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-y-0">
          <div className="space-y-5 p-4">
            <h5 className="text-center text-xl">
              25,000+ <br /> Workers Placed
            </h5>
            <p className="text-center text-sm">
              We've helped over 25,000 skilled workers find jobs globally. Our
              rigorous selection process ensures we provide only the best
              talent.
            </p>
          </div>
          <div className="space-y-5 p-4">
            <h5 className="text-center text-xl">
              Expertise Across <br />
              the Globe
            </h5>
            <p className="text-center text-sm">
              We specialize in navigating complex international recruitment
              processes. Our knowledge helps us place workers efficiently.
            </p>
          </div>
          <div className="space-y-5 p-4">
            <h5 className="text-center text-xl">
              Ethical <br /> Recruitment
            </h5>
            <p className="text-center text-sm">
              We believe in fair and honest recruitment practices. Our
              commitment to ethical standards has earned us recognition from top
              organizations.
            </p>
          </div>
          <div className="space-y-5 p-4">
            <h5 className="text-center text-xl">
              Your Trusted <br />
              Partner
            </h5>
            <p className="text-center text-sm">
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
