const VisaApplicationCard = ({ cardData }) => {
  const { icon, title, description } = cardData;

  return (
    <div className="relative p-3">
      <div className="flex size-full flex-col items-center justify-start gap-3 rounded-lg border border-b-8 border-b-primary bg-white bg-visa-application-card-bg bg-contain bg-top bg-no-repeat p-6 text-center shadow">
        {icon}
        <h5
          className="text-2xl font-medium"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-sm font-medium">{description}</p>
      </div>

      <div className="absolute left-0 top-[25%] h-[155px] w-[10px] rounded-l-lg bg-primary"></div>

      <div className="absolute right-0 top-[25%] h-[155px] w-[10px] rounded-r-lg bg-primary"></div>
    </div>
  );
};

export default VisaApplicationCard;
