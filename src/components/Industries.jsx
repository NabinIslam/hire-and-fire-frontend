import { apiBaseUrl } from "@/secrets";
import IndustryCard from "./IndustryCard";

const Industries = async () => {
  const data = await fetch(`${apiBaseUrl}/industries`, {
    cache: "no-store",
  });

  const industries = await data.json();
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {industries.map((industry) => (
        <IndustryCard industry={industry} key={industry.name} />
      ))}
    </div>
  );
};

export default Industries;
