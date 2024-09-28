import PageBanner from "@/components/common/PageBanner";
import TitleDescSection from "@/components/common/TitleDescSection";
import BlogContents from "@/components/pages/blog-details/BlogContents";
import Blogs from "@/components/pages/blog-details/Blogs";
import BlogContentSkeleton from "@/components/skeletons/BlogContentSkeleton";
import BlogSkeleton from "@/components/skeletons/BlogSkeleton";
import { getBlogBySlug } from "@/services/getBlogBySlug";
import { Suspense } from "react";

const BlogDetailsPage = async ({ params }) => {
  const { blogSlug } = params;

  const blog = await getBlogBySlug(blogSlug);

  return (
    <main>
      <PageBanner title={blog?.title} />

      <section className="py-[100px]">
        <Suspense fallback={<BlogContentSkeleton />}>
          <BlogContents blogSlug={blogSlug} />
        </Suspense>
        <TitleDescSection
          title="Our Similar Blogs & Newses"
          description="Stay updated with the latest news articles and trending stories."
        >
          <Suspense fallback={<BlogSkeleton />}>
            <Blogs currentBlog={blog} />
          </Suspense>
        </TitleDescSection>
      </section>
    </main>
  );
};

export default BlogDetailsPage;
