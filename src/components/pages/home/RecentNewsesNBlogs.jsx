import Button from "../../ui/Button";
import BlogCard from "../blog/BlogCard";
import Link from "next/link";
import TitleDescSection from "../../common/TitleDescSection";
import { apiBaseUrl } from "@/secrets";

const RecentNewsesNBlogs = async () => {
  const data = await fetch(`${apiBaseUrl}/blogs`, {
    cache: "no-store",
  });

  const blogs = await data.json();

  return (
    <TitleDescSection
      className="pb-[100px]"
      title="Our Recent Newses & Blogs"
      description="Stay updated with the latest news articles and trending stories."
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-5 xl:grid-cols-4">
        {/* blog card */}

        {blogs.slice(0, 4).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/resources/blog">
          <Button>View All Blogs & Newses</Button>
        </Link>
      </div>
    </TitleDescSection>
  );
};

export default RecentNewsesNBlogs;
