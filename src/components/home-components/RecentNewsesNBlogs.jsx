"use client";

import Button from "../ui/Button";
import BlogCard from "../BlogCard";

const RecentNewsesNBlogs = () => {
  return (
    <section className="py-[50px] space-y-8">
      <div className="container space-y-4">
        <h2 className="text-center text-4xl lg:text-5xl font-semibold">
          Recent Newses & Blogs
        </h2>
        <p className="text-center text-sm font-medium">
          Stay updated with the latest news articles and trending stories.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-5">
        {/* blog card */}

        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center">
        <Button>View All Blogs & Newses</Button>
      </div>
    </section>
  );
};

export default RecentNewsesNBlogs;
