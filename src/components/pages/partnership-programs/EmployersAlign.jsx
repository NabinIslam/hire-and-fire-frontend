import { employersWhoWanttoAlignwithUs } from "@/data/employersWhoWanttoAlignwithUs";
import EmployersAlignCard from "./EmployersAlignCard";

const EmployersAlign = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container space-y-8">
        <div className="flex justify-center">
          <span className="rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
            Collaborate With Us
          </span>
        </div>
        <div className="mx-auto mb-16 mt-5 max-w-[651px]">
          <h2 className="text-center text-4xl font-semibold">
            Employers Who Want to Align with Us
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {employersWhoWanttoAlignwithUs.map((cardData) => (
            <EmployersAlignCard cardData={cardData} key={cardData.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployersAlign;
