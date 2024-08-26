"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import thumbnail1 from "@/assets/images/Thumbnails/thumbnail1.png";
import videoPlayIcon from "@/assets/images/video-play-icon.png";
import { MdCalendarMonth } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const BlogCard = () => {
  return (
    <div className="p-4 border shadow-xl rounded-lg">
      <div className="relative min-h-[200px] flex items-center justify-center mb-3">
        <ReactPlayer
          url="https://youtu.be/CpCN9lTFHc4?si=fvrv43jLjq2EBHR9"
          playing
          loop
          muted
          width="100%"
          height="100%"
          light={
            <Image
              className="object-cover rounded-lg"
              src="/images/blog-video-thumbnail.png"
              alt="Video Thumbnail"
              fill
            />
          }
          playIcon={
            <Image
              className="absolute"
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

          <p className="text-sm font-medium">25th June, 2024</p>
        </div>
        <div className="flex items-center gap-2">
          <FaRegEye />

          <p className="text-sm font-medium">580 Views</p>
        </div>
      </div>

      <h5 className="text-xl font-medium mt-3">
        Why skilled workers matter for a business?
      </h5>
      <p className="text-sm font-medium my-3">
        Skilled workers enhance business efficiency, innovation, and quality,
        crucial for maintaining competitiveness and driving growth.
      </p>
      <Link
        className="text-primary text-sm font-medium flex items-center"
        href={`/resources/blog/article-slug`}
      >
        Read more
        <IoMdArrowDropright className="text-xl" />
      </Link>
    </div>
  );
};

export default BlogCard;
