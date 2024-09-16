import IndustryCard from "./IndustryCard";
import { getIndustries } from "@/services/getIndustries";

const Industries = async () => {
  const industries = await getIndustries();

  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {industries.map((industry) => (
        <IndustryCard industry={industry} key={industry.name} />
      ))}
    </div>
  );
};

export default Industries;
