import { getBlogs } from "@/services/getBlogs";
import BlogCard from "../blog/BlogCard";

const Blogs = async ({ currentBlog }) => {
  const blogs = await getBlogs();

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-6 md:gap-y-12 xl:grid-cols-4">
      {blogs
        .filter((item) => item.id !== currentBlog.id)
        .map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
    </div>
  );
};

export default Blogs;
