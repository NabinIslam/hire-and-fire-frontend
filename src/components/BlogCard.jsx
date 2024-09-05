"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { MdCalendarMonth } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { formatDate } from "@/Utils/formatDate";
import { FaPlayCircle } from "react-icons/fa";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const BlogCard = ({ blog }) => {
  // const {
  //   title,
  //   description,
  //   short_description,
  //   slug,
  //   created_at,
  //   thumbnail,
  //   video,
  // } = blog;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.01,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 50,
        damping: 12,
      }}
      className="group flex flex-col items-start gap-3 rounded-lg border p-4 shadow-xl"
    >
      {blog?.video ? (
        <ReactPlayer
          className="relative min-h-[200px] w-full rounded-lg duration-200 group-hover:scale-125"
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
    </motion.div>
  );
};

export default BlogCard;
