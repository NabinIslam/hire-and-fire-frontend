const EmployersAlignCard = ({ cardData }) => {
  const { icon, title, description } = cardData;

  return (
    <div className="bg-employer-align-card-bg relative bg-contain bg-bottom bg-no-repeat p-3">
      <div className="bg-employer-align-card-inner-bg flex size-full flex-col items-center justify-start gap-3 rounded-xl border bg-white bg-contain bg-top bg-no-repeat p-6 text-center shadow">
        {icon}
        <h5
          className="text-2xl font-medium"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="text-sm font-medium">{description}</p>
      </div>
    </div>
  );
};

export default EmployersAlignCard;
