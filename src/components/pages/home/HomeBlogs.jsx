import BlogCard from "../blog/BlogCard";
import { getBlogs } from "@/services/getBlogs";

const HomeBlogs = async () => {
  const blogs = await getBlogs();

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
      {blogs.slice(0, 4).map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default HomeBlogs;
