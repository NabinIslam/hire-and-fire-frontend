"use client";

import { Carousel } from "flowbite-react";
import dynamic from "next/dynamic";
import Image from "next/image";

const LanguageTrainingCarousel = () => {
  const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

  return (
    <Carousel>
      <div className="">
        <ReactPlayer
          className="h-full w-full"
          url="https://youtu.be/GEieqZy0aqI?si=7Z2zW8hOXRKSJ3FU"
          light={
            <div className="relative min-h-full w-full">
              <Image
                className="h-full w-full rounded-lg"
                src="/images/additional-support-video-thumbnail.png"
                alt="thumbnail"
                fill
              />
            </div>
          }
          width="100%"
          playIcon={
            <svg
              className="absolute"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="#F90945" />
              <path d="M60 40L30 57.3205L30 22.6795L60 40Z" fill="#D9D9D9" />
            </svg>
          }
        />
        <div className="mt-4 flex items-center justify-center gap-3">
          <h6 className="text-2xl font-medium">Demo Video</h6>
          <div className="flex size-[36px] items-center justify-center rounded-full bg-primary text-[18px] text-white">
            01
          </div>
        </div>
      </div>
      <div className="">
        <ReactPlayer
          className="h-full w-full"
          url="https://youtu.be/GEieqZy0aqI?si=7Z2zW8hOXRKSJ3FU"
          light={
            <div className="relative min-h-full w-full">
              <Image
                className="h-full w-full rounded-lg"
                src="/images/additional-support-video-thumbnail.png"
                alt="thumbnail"
                fill
              />
            </div>
          }
          width="100%"
          playIcon={
            <svg
              className="absolute"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="#F90945" />
              <path d="M60 40L30 57.3205L30 22.6795L60 40Z" fill="#D9D9D9" />
            </svg>
          }
        />
        <div className="mt-4 flex items-center justify-center gap-3">
          <h6 className="text-2xl font-medium">Demo Video</h6>
          <div className="flex size-[36px] items-center justify-center rounded-full bg-primary text-[18px] text-white">
            01
          </div>
        </div>
      </div>
      <div className="">
        <ReactPlayer
          className="h-full w-full"
          url="https://youtu.be/GEieqZy0aqI?si=7Z2zW8hOXRKSJ3FU"
          light={
            <div className="relative min-h-full w-full">
              <Image
                className="h-full w-full rounded-lg"
                src="/images/additional-support-video-thumbnail.png"
                alt="thumbnail"
                fill
              />
            </div>
          }
          width="100%"
          playIcon={
            <svg
              className="absolute"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="#F90945" />
              <path d="M60 40L30 57.3205L30 22.6795L60 40Z" fill="#D9D9D9" />
            </svg>
          }
        />
        <div className="mt-4 flex items-center justify-center gap-3">
          <h6 className="text-2xl font-medium">Demo Video</h6>
          <div className="flex size-[36px] items-center justify-center rounded-full bg-primary text-[18px] text-white">
            01
          </div>
        </div>
      </div>
      <div className="">
        <ReactPlayer
          className="h-full w-full"
          url="https://youtu.be/GEieqZy0aqI?si=7Z2zW8hOXRKSJ3FU"
          light={
            <div className="relative min-h-full w-full">
              <Image
                className="h-full w-full rounded-lg"
                src="/images/additional-support-video-thumbnail.png"
                alt="thumbnail"
                fill
              />
            </div>
          }
          width="100%"
          playIcon={
            <svg
              className="absolute"
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40" cy="40" r="40" fill="#F90945" />
              <path d="M60 40L30 57.3205L30 22.6795L60 40Z" fill="#D9D9D9" />
            </svg>
          }
        />
        <div className="mt-4 flex items-center justify-center gap-3">
          <h6 className="text-2xl font-medium">Demo Video</h6>
          <div className="flex size-[36px] items-center justify-center rounded-full bg-primary text-[18px] text-white">
            01
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default LanguageTrainingCarousel;
