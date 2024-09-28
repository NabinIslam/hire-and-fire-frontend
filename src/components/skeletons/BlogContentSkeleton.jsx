import Skeleton from "react-loading-skeleton";

const BlogContentSkeleton = () => {
  return (
    <div className="container flex flex-col gap-x-10 xl:flex-row">
      <main className="basis-full space-y-5 lg:basis-[80%]">
        <div className="relative min-h-[500px] w-full">
          <Skeleton className="h-full w-full" />
        </div>

        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
        <Skeleton className="h-[8px] w-full" />
      </main>

      <aside className="basis-full space-y-5 lg:basis-[20%]">
        <Skeleton className="min-h-[400px] w-full" />
      </aside>
    </div>
  );
};

export default BlogContentSkeleton;
