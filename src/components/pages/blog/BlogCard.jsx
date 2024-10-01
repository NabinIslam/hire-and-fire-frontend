"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { IoMdArrowDropright } from "react-icons/io";
import { MdCalendarMonth } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { formatDate } from "@/Utils/formatDate";
import { FaPlayCircle } from "react-icons/fa";
import { Link } from "@/i18n/routing";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const BlogCard = ({ blog }) => {
  // const blog = ({
  //   title,
  //   short_description,
  //   slug,
  //   created_at,
  //   thumbnail,
  //   video,
  //   view_count,
  // } = blog);

  return (
    <FadeInLeftWithSlowBounce className="flex flex-col items-start gap-3 rounded-lg border p-4 shadow-lg">
      {blog?.video ? (
        <ReactPlayer
          className="relative min-h-[200px] w-full rounded-lg duration-200 hover:scale-125"
          url="https://youtu.be/ZEyAs3NWH4A?si=o8pfJ1T-YSg-11ZO"
          playing
          loop
          muted
          width="100%"
          height="200px"
          light={
            <div className="relative min-h-full w-full">
              <Image
                className="h-full w-full rounded-lg"
                src={blog?.thumbnail}
                alt={blog?.title}
                fill
              />
            </div>
          }
          playIcon={
            // <div className="flex size-[48px] items-center justify-center rounded-full bg-white">
            <FaPlayCircle className="absolute rounded-full border border-primary bg-white text-[48px] text-primary" />
            // </div>
          }
        />
      ) : (
        <div className="relative min-h-[200px] w-full">
          <Image
            src={blog?.thumbnail}
            alt={blog?.title}
            fill
            className="h-full w-full rounded-lg"
          />
        </div>
      )}

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-2">
          <MdCalendarMonth />

          <p className="text-sm font-medium">{formatDate(blog?.created_at)}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegEye />

          <p className="text-sm font-medium">{blog?.view_count} Views</p>
        </div>
      </div>

      <h5 className="text-xl font-medium">{blog?.title}</h5>
      <p className="line-clamp-3 text-sm font-medium">
        {blog?.short_description}
      </p>
      <div className="mt-auto">
        <Link
          className="flex items-center text-sm font-medium text-primary duration-200 hover:text-secondary"
          href={`/resources/blog/${blog?.slug}`}
        >
          Read more
          <IoMdArrowDropright className="text-xl" />
        </Link>
      </div>
    </FadeInLeftWithSlowBounce>
  );
};

export default BlogCard;
