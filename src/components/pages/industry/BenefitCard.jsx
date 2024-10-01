const BenefitCard = ({ icon, title, description }) => {
  return (
    <div className="space-y-4 rounded-xl border border-b-8 border-b-[#F90945] px-6 py-5 shadow-lg">
      <div className="mx-auto mt-[-50px] size-[60px] rounded-full border-2 border-dotted border-[#F90945] bg-white p-1 shadow-md">
        <div className="flex size-full items-center justify-center rounded-full bg-[#F90945]">
          {icon}
        </div>
      </div>
      <h5 className="text-center text-xl font-semibold">{title}</h5>
      <p className="text-center text-sm">{description}</p>
    </div>
  );
};

export default BenefitCard;
