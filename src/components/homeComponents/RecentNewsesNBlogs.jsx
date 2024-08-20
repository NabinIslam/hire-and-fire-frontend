"use client";
import dynamic from "next/dynamic";
import Button from "../ui/Button";
import thumbnail1 from "@/assets/images/Thumbnails/thumbnail1.png";
import Image from "next/image";
import videoPlayIcon from "@/assets/images/video-play-icon.png";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const RecentNewsesNBlogs = () => {
  return (
    <section className="py-[50px] space-y-8">
      <div className="container space-y-4">
        <h2 className="text-center text-5xl font-semibold">
          Recent Newses & Blogs
        </h2>
        <p className="text-center text-sm font-medium">
          Stay updated with the latest news articles and trending stories.
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* blog card */}

        <div className="p-4 border shadow-xl rounded-lg">
          <div className="min-h-[200px]">
            <ReactPlayer
              url="https://youtu.be/CpCN9lTFHc4?si=fvrv43jLjq2EBHR9"
              playing
              loop
              muted
              width="100%"
              height="100%"
              light={
                <Image className="h-full" src={thumbnail1} alt="Thumbnail" />
              }
              playIcon={
                <Image
                  className="absolute"
                  src={videoPlayIcon}
                  height={48}
                  width={48}
                  alt="Video Play Icon"
                />
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.86333 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V4.66667C2 4.31304 2.14048 3.97391 2.39052 3.72386C2.64057 3.47381 2.97971 3.33333 3.33333 3.33333H11.3333C11.687 3.33333 12.0261 3.47381 12.2761 3.72386C12.5262 3.97391 12.6667 4.31304 12.6667 4.66667V7.33333H2M12 9.33333V12H14.6667M12 9.33333C12.7072 9.33333 13.3855 9.61428 13.8856 10.1144C14.3857 10.6145 14.6667 11.2928 14.6667 12M12 9.33333C11.2928 9.33333 10.6145 9.61428 10.1144 10.1144C9.61428 10.6145 9.33333 11.2928 9.33333 12C9.33333 12.7072 9.61428 13.3855 10.1144 13.8856C10.6145 14.3857 11.2928 14.6667 12 14.6667C12.7072 14.6667 13.3855 14.3857 13.8856 13.8856C14.3857 13.3855 14.6667 12.7072 14.6667 12M10 2V4.66667M4.66667 2V4.66667"
                  stroke="#3F3F3F"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-sm font-medium">25th June, 2024</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16667 8C7.16667 8.35362 7.30714 8.69276 7.55719 8.94281C7.80724 9.19286 8.14638 9.33333 8.5 9.33333C8.85362 9.33333 9.19276 9.19286 9.44281 8.94281C9.69286 8.69276 9.83333 8.35362 9.83333 8C9.83333 7.64638 9.69286 7.30724 9.44281 7.05719C9.19276 6.80714 8.85362 6.66667 8.5 6.66667C8.14638 6.66667 7.80724 6.80714 7.55719 7.05719C7.30714 7.30724 7.16667 7.64638 7.16667 8Z"
                  stroke="#3F3F3F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 8C12.9 10.6667 10.9 12 8.5 12C6.1 12 4.1 10.6667 2.5 8C4.1 5.33333 6.1 4 8.5 4C10.9 4 12.9 5.33333 14.5 8Z"
                  stroke="#3F3F3F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="text-sm font-medium">580 Views</p>
            </div>
          </div>

          <h5 className="text-xl font-medium mt-3">
            Why skilled workers matter for a business?
          </h5>
          <p className="text-sm font-medium my-3">
            Skilled workers enhance business efficiency, innovation, and
            quality, crucial for maintaining competitiveness and driving growth.
          </p>
          <Link
            className="text-primary text-sm font-medium flex items-center"
            href="#"
          >
            Read more
            <IoMdArrowDropright className="text-xl" />
          </Link>
        </div>
        {/* blog card */}

        <div className="p-4 border shadow-xl rounded-lg">
          <div className="min-h-[200px]">
            <ReactPlayer
              url="https://youtu.be/CpCN9lTFHc4?si=fvrv43jLjq2EBHR9"
              playing
              loop
              muted
              width="100%"
              height="100%"
              light={
                <Image className="h-full" src={thumbnail1} alt="Thumbnail" />
              }
              playIcon={
                <Image
                  className="absolute"
                  src={videoPlayIcon}
                  height={48}
                  width={48}
                  alt="Video Play Icon"
                />
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.86333 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V4.66667C2 4.31304 2.14048 3.97391 2.39052 3.72386C2.64057 3.47381 2.97971 3.33333 3.33333 3.33333H11.3333C11.687 3.33333 12.0261 3.47381 12.2761 3.72386C12.5262 3.97391 12.6667 4.31304 12.6667 4.66667V7.33333H2M12 9.33333V12H14.6667M12 9.33333C12.7072 9.33333 13.3855 9.61428 13.8856 10.1144C14.3857 10.6145 14.6667 11.2928 14.6667 12M12 9.33333C11.2928 9.33333 10.6145 9.61428 10.1144 10.1144C9.61428 10.6145 9.33333 11.2928 9.33333 12C9.33333 12.7072 9.61428 13.3855 10.1144 13.8856C10.6145 14.3857 11.2928 14.6667 12 14.6667C12.7072 14.6667 13.3855 14.3857 13.8856 13.8856C14.3857 13.3855 14.6667 12.7072 14.6667 12M10 2V4.66667M4.66667 2V4.66667"
                  stroke="#3F3F3F"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-sm font-medium">25th June, 2024</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16667 8C7.16667 8.35362 7.30714 8.69276 7.55719 8.94281C7.80724 9.19286 8.14638 9.33333 8.5 9.33333C8.85362 9.33333 9.19276 9.19286 9.44281 8.94281C9.69286 8.69276 9.83333 8.35362 9.83333 8C9.83333 7.64638 9.69286 7.30724 9.44281 7.05719C9.19276 6.80714 8.85362 6.66667 8.5 6.66667C8.14638 6.66667 7.80724 6.80714 7.55719 7.05719C7.30714 7.30724 7.16667 7.64638 7.16667 8Z"
                  stroke="#3F3F3F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 8C12.9 10.6667 10.9 12 8.5 12C6.1 12 4.1 10.6667 2.5 8C4.1 5.33333 6.1 4 8.5 4C10.9 4 12.9 5.33333 14.5 8Z"
                  stroke="#3F3F3F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="text-sm font-medium">580 Views</p>
            </div>
          </div>

          <h5 className="text-xl font-medium mt-3">
            Why skilled workers matter for a business?
          </h5>
          <p className="text-sm font-medium my-3">
            Skilled workers enhance business efficiency, innovation, and
            quality, crucial for maintaining competitiveness and driving growth.
          </p>
          <Link
            className="text-primary text-sm font-medium flex items-center"
            href="#"
          >
            Read more
            <IoMdArrowDropright className="text-xl" />
          </Link>
        </div>
        {/* blog card */}

        <div className="p-4 border shadow-xl rounded-lg">
          <div className="min-h-[200px]">
            <ReactPlayer
              url="https://youtu.be/CpCN9lTFHc4?si=fvrv43jLjq2EBHR9"
              playing
              loop
              muted
              width="100%"
              height="100%"
              light={
                <Image className="h-full" src={thumbnail1} alt="Thumbnail" />
              }
              playIcon={
                <Image
                  className="absolute"
                  src={videoPlayIcon}
                  height={48}
                  width={48}
                  alt="Video Play Icon"
                />
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.86333 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V4.66667C2 4.31304 2.14048 3.97391 2.39052 3.72386C2.64057 3.47381 2.97971 3.33333 3.33333 3.33333H11.3333C11.687 3.33333 12.0261 3.47381 12.2761 3.72386C12.5262 3.97391 12.6667 4.31304 12.6667 4.66667V7.33333H2M12 9.33333V12H14.6667M12 9.33333C12.7072 9.33333 13.3855 9.61428 13.8856 10.1144C14.3857 10.6145 14.6667 11.2928 14.6667 12M12 9.33333C11.2928 9.33333 10.6145 9.61428 10.1144 10.1144C9.61428 10.6145 9.33333 11.2928 9.33333 12C9.33333 12.7072 9.61428 13.3855 10.1144 13.8856C10.6145 14.3857 11.2928 14.6667 12 14.6667C12.7072 14.6667 13.3855 14.3857 13.8856 13.8856C14.3857 13.3855 14.6667 12.7072 14.6667 12M10 2V4.66667M4.66667 2V4.66667"
                  stroke="#3F3F3F"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-sm font-medium">25th June, 2024</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16667 8C7.16667 8.35362 7.30714 8.69276 7.55719 8.94281C7.80724 9.19286 8.14638 9.33333 8.5 9.33333C8.85362 9.33333 9.19276 9.19286 9.44281 8.94281C9.69286 8.69276 9.83333 8.35362 9.83333 8C9.83333 7.64638 9.69286 7.30724 9.44281 7.05719C9.19276 6.80714 8.85362 6.66667 8.5 6.66667C8.14638 6.66667 7.80724 6.80714 7.55719 7.05719C7.30714 7.30724 7.16667 7.64638 7.16667 8Z"
                  stroke="#3F3F3F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 8C12.9 10.6667 10.9 12 8.5 12C6.1 12 4.1 10.6667 2.5 8C4.1 5.33333 6.1 4 8.5 4C10.9 4 12.9 5.33333 14.5 8Z"
                  stroke="#3F3F3F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="text-sm font-medium">580 Views</p>
            </div>
          </div>

          <h5 className="text-xl font-medium mt-3">
            Why skilled workers matter for a business?
          </h5>
          <p className="text-sm font-medium my-3">
            Skilled workers enhance business efficiency, innovation, and
            quality, crucial for maintaining competitiveness and driving growth.
          </p>
          <Link
            className="text-primary text-sm font-medium flex items-center"
            href="#"
          >
            Read more
            <IoMdArrowDropright className="text-xl" />
          </Link>
        </div>
        {/* blog card */}

        <div className="p-4 border shadow-xl rounded-lg">
          <div className="min-h-[200px]">
            <ReactPlayer
              url="https://youtu.be/CpCN9lTFHc4?si=fvrv43jLjq2EBHR9"
              playing
              loop
              muted
              width="100%"
              height="100%"
              light={
                <Image className="h-full" src={thumbnail1} alt="Thumbnail" />
              }
              playIcon={
                <Image
                  className="absolute"
                  src={videoPlayIcon}
                  height={48}
                  width={48}
                  alt="Video Play Icon"
                />
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.86333 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V4.66667C2 4.31304 2.14048 3.97391 2.39052 3.72386C2.64057 3.47381 2.97971 3.33333 3.33333 3.33333H11.3333C11.687 3.33333 12.0261 3.47381 12.2761 3.72386C12.5262 3.97391 12.6667 4.31304 12.6667 4.66667V7.33333H2M12 9.33333V12H14.6667M12 9.33333C12.7072 9.33333 13.3855 9.61428 13.8856 10.1144C14.3857 10.6145 14.6667 11.2928 14.6667 12M12 9.33333C11.2928 9.33333 10.6145 9.61428 10.1144 10.1144C9.61428 10.6145 9.33333 11.2928 9.33333 12C9.33333 12.7072 9.61428 13.3855 10.1144 13.8856C10.6145 14.3857 11.2928 14.6667 12 14.6667C12.7072 14.6667 13.3855 14.3857 13.8856 13.8856C14.3857 13.3855 14.6667 12.7072 14.6667 12M10 2V4.66667M4.66667 2V4.66667"
                  stroke="#3F3F3F"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="text-sm font-medium">25th June, 2024</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.16667 8C7.16667 8.35362 7.30714 8.69276 7.55719 8.94281C7.80724 9.19286 8.14638 9.33333 8.5 9.33333C8.85362 9.33333 9.19276 9.19286 9.44281 8.94281C9.69286 8.69276 9.83333 8.35362 9.83333 8C9.83333 7.64638 9.69286 7.30724 9.44281 7.05719C9.19276 6.80714 8.85362 6.66667 8.5 6.66667C8.14638 6.66667 7.80724 6.80714 7.55719 7.05719C7.30714 7.30724 7.16667 7.64638 7.16667 8Z"
                  stroke="#3F3F3F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.5 8C12.9 10.6667 10.9 12 8.5 12C6.1 12 4.1 10.6667 2.5 8C4.1 5.33333 6.1 4 8.5 4C10.9 4 12.9 5.33333 14.5 8Z"
                  stroke="#3F3F3F"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p className="text-sm font-medium">580 Views</p>
            </div>
          </div>

          <h5 className="text-xl font-medium mt-3">
            Why skilled workers matter for a business?
          </h5>
          <p className="text-sm font-medium my-3">
            Skilled workers enhance business efficiency, innovation, and
            quality, crucial for maintaining competitiveness and driving growth.
          </p>
          <Link
            className="text-primary text-sm font-medium flex items-center"
            href="#"
          >
            Read more
            <IoMdArrowDropright className="text-xl" />
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <Button>View All Blogs & Newses</Button>
      </div>
    </section>
  );
};

export default RecentNewsesNBlogs;
