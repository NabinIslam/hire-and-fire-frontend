import { apiBaseUrl } from "@/secrets";
import BlogCard from "./BlogCard";

const Blogs = async () => {
  const data = await fetch(`${apiBaseUrl}/blogs`, {
    cache: "no-store",
  });

  const blogs = await data.json();

  return (
    <div className="grid grid-cols-1 gap-12 pb-[50px] md:grid-cols-2 md:gap-x-6 md:gap-y-12 xl:grid-cols-4">
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
