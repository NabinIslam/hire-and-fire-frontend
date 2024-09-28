import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";

const VisaApplicationCard = ({ icon, stepNo, title, description }) => {
  return (
    <FadeInLeftWithSlowBounce className="flex flex-col items-center justify-center rounded-lg border border-b-8 border-primary">
      <div className="-mt-5 flex items-center justify-center">
        <span className="rounded-full bg-primary px-14 py-2 text-sm font-medium text-white">
          Step {stepNo}
        </span>
      </div>
      <div className="space-y-4 px-6 py-4">
        <h6 className="text-center text-2xl font-medium">{title}</h6>
        <p className="text-center text-sm font-medium">{description}</p>
      </div>
      <div className="-mb-12 mt-auto flex items-center justify-center">
        {icon}
      </div>
    </FadeInLeftWithSlowBounce>
  );
};

export default VisaApplicationCard;
