const EmployersAlignCard = ({ cardData }) => {
  const { icon, title, description } = cardData;

  return (
    <div className="group relative">
      <div className="relative z-50 m-3 rounded-lg border bg-white text-center shadow-md">
        <div class="absolute -z-50 h-20 w-full rounded-t-lg border-l-[220px] border-r-[220px] border-t-[100px] border-transparent border-t-primary group-hover:border-t-secondary"></div>

        <div className="z-50 flex flex-col items-center justify-between gap-4 px-6 py-4">
          {icon}

          <h5
            className="text-2xl font-medium"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p className="text-sm font-medium">{description}</p>
        </div>
      </div>
      <div className="absolute bottom-0 -z-50 min-h-[130px] w-full rounded-2xl bg-primary duration-200 group-hover:bg-secondary"></div>
    </div>
  );
};

export default EmployersAlignCard;

//  <div className="bg-employer-align-card-bg relative bg-contain bg-bottom bg-no-repeat p-3">
//       <div className="bg-employer-align-card-inner-bg flex size-full flex-col items-center justify-start gap-3 rounded-xl border bg-white bg-contain bg-top bg-no-repeat p-6 text-center shadow">
//         {icon}
//         <h5
//           className="text-2xl font-medium"
//           dangerouslySetInnerHTML={{ __html: title }}
//         />
//         <p className="text-sm font-medium">{description}</p>
//       </div>
//     </div>
