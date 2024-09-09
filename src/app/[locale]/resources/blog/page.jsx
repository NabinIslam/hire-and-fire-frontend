import Blogs from "@/components/pages/blog/Blogs";
import PageBanner from "@/components/common/PageBanner";
import TitleDescSection from "@/components/common/TitleDescSection";
export const metadata = {
  title: "Hire&Fire | Blog & News",
};

const BlogPage = () => {
  return (
    <main>
      <PageBanner title="Blog" />
      <TitleDescSection
        title="Our Blogs & Newses"
        description="Stay updated with the latest news articles and trending stories."
      >
        <Blogs />
      </TitleDescSection>
    </main>
  );
};

export default BlogPage;
