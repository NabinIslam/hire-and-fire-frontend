const WorkPermitCard = ({ cardData }) => {
  const { icon, title, description } = cardData;

  return (
    <div className="hover:bg-work-permit-card-bg-blue group min-h-[264px] bg-work-permit-card-bg bg-contain bg-center bg-no-repeat px-16 py-3 transition-all duration-500 ease-in-out">
      <div className="flex size-full flex-col items-center justify-start gap-3 rounded-3xl border bg-white p-6 text-center shadow duration-200">
        {icon}
        <h5
          className="text-2xl font-medium"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {/* <h5 className="text-2xl font-medium">{title}</h5> */}
        <p className="mt-auto text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default WorkPermitCard;
