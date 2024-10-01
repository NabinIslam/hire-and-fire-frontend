const EmployersServiceCard = ({ icon, title, description }) => {
  //   const { icon, title, description } = cardData;

  return (
    <div className="group relative space-y-4 rounded-lg border border-b-8 border-b-primary px-8 py-4 shadow-md duration-200 hover:border-b-secondary">
      <div className="-mt-14">{icon}</div>
      <h6 className="text-center text-2xl font-medium">{title}</h6>
      <p className="text-center text-sm font-medium">{description}</p>

      {/* shapes  */}

      <div className="absolute bottom-0 left-0 h-[100px] w-[8px] -translate-y-[40%] rounded-r-lg bg-primary duration-200 group-hover:bg-secondary"></div>

      <div className="absolute bottom-0 right-0 h-[100px] w-[8px] -translate-y-[40%] rounded-l-lg bg-primary duration-200 group-hover:bg-secondary"></div>
    </div>
  );
};

export default EmployersServiceCard;
