import IndustryCard from "@/components/IndustryCard";
import PageBanner from "@/components/PageBanner";
import { apiBaseUrl } from "@/secrets";
import { Suspense } from "react";
import IndustrySkeleton from "@/components/skeletons/IndustrySkeleton";

const Industry = async () => {
  const data = await fetch(`${apiBaseUrl}/industries`, {
    cache: "no-store",
  });
  const industries = await data.json();

  return (
    <main>
      <PageBanner title="Industry" />

      <section className="py-[100px]">
        <div className="container">
          <h2 className="mb-5 text-center text-5xl font-semibold">
            Industry We Serve
          </h2>
          <div className="mx-auto h-[5px] w-[200px] rounded-full bg-primary"></div>

          {/* industries container  */}

          <Suspense fallback={<IndustrySkeleton />}>
            <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {industries.map((industry) => (
                <IndustryCard industry={industry} key={industry.name} />
              ))}
            </div>
          </Suspense>
        </div>
      </section>
    </main>
  );
};

export default Industry;
