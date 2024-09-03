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

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const BlogCard = ({ blog }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const {
    title,
    description,
    short_description,
    slug,
    created_at,
    thumbnail,
    video,
  } = blog;

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
      className="group flex flex-col gap-3 rounded-lg border p-4 shadow-xl"
    >
      <div className="relative flex min-h-[200px] items-center justify-center duration-200 group-hover:scale-105">
        <ReactPlayer
          className=""
          url={video}
          playing
          loop
          muted
          width="100%"
          height="100%"
          light={
            <Image
              className="rounded-lg object-cover"
              src={thumbnail}
              alt="Video Thumbnail"
              fill
            />
          }
          playIcon={
            <Image
              className="absolute shadow-2xl"
              src="/images/video-play-icon.png"
              alt="Video Play Icon"
              height={40}
              width={40}
            />
          }
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MdCalendarMonth />

          <p className="text-sm font-medium">{formatDate(created_at)}</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegEye />

          <p className="text-sm font-medium">580 Views</p>
        </div>
      </div>

      <h5 className="text-xl font-medium">{title}</h5>
      <p className="text-sm font-medium">{short_description}</p>
      <div className="mt-auto">
        <Link
          className="flex items-center text-sm font-medium text-primary"
          href={`/resources/blog/${slug}`}
        >
          Read more
          <IoMdArrowDropright className="text-xl" />
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
