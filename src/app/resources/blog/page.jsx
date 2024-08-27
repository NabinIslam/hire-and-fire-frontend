import BlogCard from "@/components/BlogCard";
import PageBanner from "@/components/PageBanner";
import TitleDescSection from "@/components/TitleDescSection";

const Blog = () => {
  return (
    <main>
      <PageBanner title="Blog" />
      <TitleDescSection
        title="Our Blog & News"
        description="Stay updated with the latest news articles and trending stories."
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

export default Blog;
