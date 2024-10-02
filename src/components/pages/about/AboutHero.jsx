"use client";

import Link from "next/link";
import Button from "../../ui/Button";
import Image from "next/image";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const AboutHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="pb-[50px] pt-[100px] text-black">
      <div className="container flex flex-col items-center justify-between gap-16 lg:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-6 text-center lg:basis-1/2 lg:text-left">
          <h6 className="text-2xl font-medium text-primary">About Us</h6>
          <h2 className="text-4xl font-semibold md:text-4xl lg:text-[40px]">
            We believe that great companies are built by great people
          </h2>
          <p className="text-sm font-medium">
            Welcome to Hire & Fire SRL, your strategic partner in international
            workforce solutions. Based in Bucuresti, Romania, and registered in
            the heart of Europe. Our consultancy is dedicated to facilitating
            the seamless migration of skilled workers across borders. With a
            specialized focus on connecting talented individuals with employment
            opportunities worldwide, we take pride in our ability to serve a
            diverse range of companies, from large corporations to small and
            medium enterprises.
          </p>
          <div className="mb-6 flex flex-col items-center justify-center gap-10 md:flex-row lg:justify-start">
            <div className="flex items-center gap-5">
              <Image
                src="/images/visa-icon.png"
                height={40}
                width={40}
                alt="Visa Icon"
              />
              <p className="text-sm font-medium">
                95% VISA SUCCESS <br /> RATE IN EUROPE
              </p>
            </div>
            <div className="flex items-center gap-5">
              <Image
                src="/images/moneyback-icon.png"
                height={40}
                width={40}
                alt="Moneyback Icon"
              />
              <p className="text-sm font-medium">
                100% MONEYBACK <br /> OFFER YOU WILL GET
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start">
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>

            <button
              className="flex items-center justify-start font-semibold text-primary"
              onClick={() => setIsOpen(true)}
            >
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_24_3609)">
                  <circle cx="40" cy="40" r="20" fill="#F90945" />
                  <circle
                    cx="40"
                    cy="40"
                    r="18.3333"
                    stroke="#FDFDFD"
                    stroke-width="3.33333"
                  />
                </g>
                <path d="M48 40L36 46.9282L36 33.0718L48 40Z" fill="#FDFDFD" />
                <defs>
                  <filter
                    id="filter0_d_24_3609"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_24_3609"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_24_3609"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <span className="-ml-2">Watch Video</span>
            </button>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[400px] w-full basis-full md:min-h-[624px] lg:basis-1/2">
          <Image
            src="/images/about-hero-img.png"
            alt="About Hire and Fire"
            fill
            className="object-contain object-center lg:object-right"
          />
        </FadeInRightWithSlowBounce>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
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
                <Dialog.Panel className="min-h-[70%] max-w-2xl transform overflow-hidden rounded-2xl bg-primary p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Modal Title
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Your modal description goes here.
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Close Modal
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default AboutHero;
