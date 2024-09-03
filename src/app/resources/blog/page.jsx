import BlogCard from "@/components/BlogCard";
import Blogs from "@/components/Blogs";
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
      >
        <Blogs />
      </TitleDescSection>
    </main>
  );
};

export default BlogPage;
