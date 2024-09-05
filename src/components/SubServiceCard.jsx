"use client";

const SubServiceCard = ({ icon, title, description }) => {
  return (
    <div className="group min-h-[205px] space-y-4 rounded-lg border bg-white px-6 py-4 text-center shadow-lg duration-200 hover:scale-105 hover:bg-secondary hover:text-white">
      {icon}
      <h5 className="text-xl font-medium">{title}</h5>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default SubServiceCard;
