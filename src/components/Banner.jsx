import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Banner = () => {
  return (
    <section className="space-y-6 bg-banner-bg bg-cover bg-center bg-no-repeat py-[50px] text-center text-white">
      <h1 className="text-5xl font-semibold">Construction</h1>
      <div className="flex items-center justify-center gap-3 text-lg">
        Home <MdKeyboardDoubleArrowRight />
        Industry <MdKeyboardDoubleArrowRight />
        Construction
      </div>
    </section>
  );
};

export default Banner;
