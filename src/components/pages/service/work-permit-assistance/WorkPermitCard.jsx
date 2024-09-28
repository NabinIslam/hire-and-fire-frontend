import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";

const WorkPermitCard = ({ icon, title, description, stepNo }) => {
  return (
    <FadeInLeftWithSlowBounce className="group flex flex-col">
      <div className="flex items-center justify-center">
        <span className="rounded-t-lg bg-secondary px-[100px] py-2 font-medium text-white duration-200 group-hover:bg-primary">
          Step {stepNo}
        </span>
      </div>
      <div className="relative basis-full rounded-lg border border-secondary duration-200 group-hover:border-primary">
        <div className="mx-10 my-5 flex h-full flex-col items-center gap-5">
          {icon}
          <h5 className="text-center text-2xl font-medium">{title}</h5>
          <p className="text-center text-sm font-medium">{description}</p>
        </div>

        {/* shapes */}
        <div className="absolute bottom-0 left-1/2 mx-auto h-[8px] w-[200px] -translate-x-1/2 rounded-t-lg bg-secondary duration-200 group-hover:bg-primary"></div>

        <div className="absolute bottom-0 left-0 h-[100px] w-[8px] -translate-y-[75%] rounded-r-lg bg-secondary duration-200 group-hover:bg-primary"></div>

        <div className="absolute bottom-0 right-0 h-[100px] w-[8px] -translate-y-[75%] rounded-l-lg bg-secondary duration-200 group-hover:bg-primary"></div>
      </div>
    </FadeInLeftWithSlowBounce>
  );
};

export default WorkPermitCard;
