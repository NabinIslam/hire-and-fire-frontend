import Blogs from "@/components/pages/blog/Blogs";
import PageBanner from "@/components/common/PageBanner";
import TitleDescSection from "@/components/common/TitleDescSection";
import { Suspense } from "react";
import BlogSkeleton from "@/components/skeletons/BlogSkeleton";

export const metadata = {
  title: "Hire&Fire | Blogs & Newses",
};

const BlogPage = () => {
  return (
    <main>
      <PageBanner title="Blog" />
      <div className="h-[50px] w-full"></div>
      <TitleDescSection
        title="Our Blogs & Newses"
        description="Stay updated with the latest news articles and trending stories."
      >
        <Suspense fallback={<BlogSkeleton />}>
          <Blogs />
        </Suspense>
      </TitleDescSection>
    </main>
  );
};

export default BlogPage;
