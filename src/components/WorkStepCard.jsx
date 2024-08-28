const WorkStepCard = ({ icon, title, description, stepNumber }) => {
  return (
    <div className="group relative min-h-[270px] w-[350px] shadow-lg duration-200 hover:scale-105">
      <div className="m-5 space-y-4">
        <div className="mx-auto flex size-[80px] items-center justify-center rounded-full bg-primary duration-200 group-hover:bg-secondary">
          {icon}
        </div>
        <h5 className="text-center text-xl font-medium">{title}</h5>
        <p className="text-center text-sm font-medium">{description}</p>
      </div>

      {/* badge */}
      <div className="absolute left-0 top-0 size-[80px] border-r-[80px] border-t-[80px] border-r-transparent border-t-primary duration-200 group-hover:border-t-secondary"></div>
      <span className="absolute left-[15px] top-[10px] z-50 text-xl text-white">
        {stepNumber}
      </span>
    </div>
  );
};

export default WorkStepCard;
