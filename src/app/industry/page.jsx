import IndustryCard from "@/components/IndustryCard";
import PageBanner from "@/components/PageBanner";
import { apiBaseUrl } from "@/secrets";
import { Suspense } from "react";
import Skeleton from "react-loading-skeleton";

const Industry = async () => {
  const data = await fetch(`${apiBaseUrl}/industries`, {
    cache: "no-cache",
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

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {industries.map((industry) => (
              <Suspense
                fallback={
                  <div className="rounded-lg border p-4 text-center shadow-xl">
                    <Skeleton className="h-[240px] w-full" />

                    <Skeleton className="h-[20px]" />
                    <Skeleton className="h-[10px]" />
                    <Skeleton className="h-[10px]" />
                    <Skeleton className="h-[10px]" />
                    <Skeleton className="h-[15px] w-[88px]" />
                  </div>
                }
              >
                <IndustryCard industry={industry} key={industry.name} />
              </Suspense>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Industry;
