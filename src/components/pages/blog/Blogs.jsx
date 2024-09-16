import { getBlogs } from "@/services/getBlogs";
import BlogCard from "./BlogCard";

const Blogs = async () => {
  const blogs = await getBlogs();

  return (
    <div className="grid grid-cols-1 gap-12 pb-[50px] md:grid-cols-2 md:gap-x-6 md:gap-y-12 xl:grid-cols-4">
      {blogs?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Blogs;
