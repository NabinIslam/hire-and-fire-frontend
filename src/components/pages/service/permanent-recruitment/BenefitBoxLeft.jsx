import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";

const BenefitBoxLeft = ({ title, description, icon }) => {
  return (
    <FadeInDownWithSlowBounce className="benefit-box relative flex flex-row-reverse items-center gap-4 rounded-lg border border-l-8 border-r-8 border-l-secondary border-r-secondary px-5 py-7 shadow-md xl:flex-row">
      <div className="absolute left-1/2 top-0 h-[8px] w-[120px] -translate-x-1/2 rounded-b-full bg-secondary"></div>

      <div className="absolute bottom-0 left-1/2 h-[8px] w-[120px] -translate-x-1/2 rounded-t-full bg-secondary"></div>

      <div className="space-y-3">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-sm font-medium">{description}</p>
      </div>

      <div>{icon}</div>
    </FadeInDownWithSlowBounce>
  );
};

export default BenefitBoxLeft;
