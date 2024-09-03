import BlogCard from "@/components/BlogCard";
import PageBanner from "@/components/PageBanner";
import TitleDescSection from "@/components/TitleDescSection";

export const metadata = {
  title: "Hire&Fire | Blog & News",
};

const BlogPage = () => {
  return (
    <main>
      <PageBanner title="Blog" />
      <TitleDescSection
        title="Our Blog & News"
        description="Stay updated with the latest news articles and trending stories."
        className="py-[50px]"
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </TitleDescSection>
    </main>
  );
};

export default BlogPage;
