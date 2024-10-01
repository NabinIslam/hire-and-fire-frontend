const CareerOpportunityCard = ({ icon, title, description }) => {
  return (
    <div className="group space-y-2 rounded-lg border border-b-8 border-primary border-b-primary px-8 py-4 shadow-md duration-200 hover:border-secondary hover:border-b-secondary">
      <div className="-mt-[62px]">{icon}</div>
      <h6 className="text-center text-2xl font-medium">{title}</h6>
      <p className="text-center text-sm font-medium">{description}</p>
    </div>
  );
};

export default CareerOpportunityCard;
