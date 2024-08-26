"use client";

import Button from "../ui/Button";
import BlogCard from "../BlogCard";
import Link from "next/link";
import TitleDescSection from "../TitleDescSection";

const RecentNewsesNBlogs = () => {
  return (
    <TitleDescSection
      className="pt-[50px] pb-[50px]"
      title="Our Blog & News"
      description="Stay updated with the latest news articles and trending stories."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-5">
        {/* blog card */}

        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/resources/blog">
          <Button>View All Blogs & Newses</Button>
        </Link>
      </div>
    </TitleDescSection>
  );
};

export default RecentNewsesNBlogs;
