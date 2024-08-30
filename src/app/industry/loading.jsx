import IndustrySkeleton from "@/components/skeletons/IndustrySkeleton";

const loading = () => {
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
          <IndustrySkeleton />
        </div>
      </section>
    </main>
  );
};

export default loading;
