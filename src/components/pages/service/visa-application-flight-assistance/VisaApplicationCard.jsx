const VisaApplicationCard = ({ cardData }) => {
  const { icon, title, description } = cardData;

  return (
    <div className="p-3">
      <div className="bg-visa-application-card-bg flex size-full flex-col items-center justify-start gap-3 rounded-lg border border-b-8 border-b-primary bg-white bg-contain bg-top bg-no-repeat p-6 text-center shadow">
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

export default VisaApplicationCard;
