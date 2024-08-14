import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Banner = () => {
  return (
    <section className="py-[50px] text-center bg-banner-bg bg-cover bg-no-repeat bg-center text-white space-y-6">
      <h1 className="text-5xl font-semibold">Construction</h1>
      <div className="text-lg flex justify-center items-center gap-3">
        Home <MdKeyboardDoubleArrowRight />
        Industry <MdKeyboardDoubleArrowRight />
        Construction
      </div>
    </section>
  );
};

export default Banner;
