import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RxCross2 } from "react-icons/rx";
import dynamic from "next/dynamic";
import Image from "next/image";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const VideoModal = ({ isOpen, setIsOpen, videoUrl, thumbnail }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="mb-5 flex justify-end">
                  <RxCross2
                    className="cursor-pointer rounded-full p-1 text-4xl duration-200 hover:bg-black hover:bg-opacity-[10%]"
                    onClick={() => setIsOpen(false)}
                  />
                </div>
                <ReactPlayer
                  className="min-h-[60vh] w-full"
                  url="/assets/Hire & Fire.mp4"
                  controls
                  playing
                  light={
                    <div className="relative min-h-full w-full">
                      <Image
                        className="min-h-full w-full rounded-lg object-cover"
                        src={
                          thumbnail
                            ? thumbnail
                            : "/images/additional-support-video-thumbnail.png"
                        }
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
                      <path
                        d="M60 40L30 57.3205L30 22.6795L60 40Z"
                        fill="#D9D9D9"
                      />
                    </svg>
                  }
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default VideoModal;
