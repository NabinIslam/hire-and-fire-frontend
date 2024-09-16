const WorkPermitCard = ({ cardData }) => {
  const { icon, title, description } = cardData;

  return (
    <div className="bg-work-permit-card-bg min-h-[264px] bg-contain bg-center bg-no-repeat px-16 py-3">
      <div className="flex size-full flex-col items-center justify-start gap-3 rounded-3xl border bg-white p-6 text-center shadow">
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
