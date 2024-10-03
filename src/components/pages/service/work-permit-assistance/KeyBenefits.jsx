"use client";

import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import VideoModal from "@/components/common/VideoModal";
import Image from "next/image";
import { useState } from "react";

const KeyBenefits = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-[50px]">
      {/* container row */}
      <div className="container flex flex-col items-center justify-start gap-20 lg:flex-row">
        {/* column */}
        <FadeInLeftWithSlowBounce className="flex w-full justify-start gap-5">
          <div className="flex basis-1/2 flex-col justify-center">
            <div className="relative min-h-[235px] w-full lg:min-h-[370px]">
              <Image
                className="object-contain"
                src="/images/work-permit.png"
                fill
              />
            </div>
            <div className="basis-full">
              <button
                className="text-md mt-6 flex w-full items-center justify-start rounded-lg border-2 border-primary px-4 font-medium md:justify-center"
                onClick={() => setIsOpen(true)}
              >
                <svg
                  className="animate-floating"
                  width="60"
                  height="60"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1134_2759)">
                    <circle cx="60" cy="60" r="30" fill="#F90945" />
                    <circle
                      cx="60"
                      cy="60"
                      r="27.5"
                      stroke="#FDFDFD"
                      strokeWidth="5"
                    />
                  </g>
                  <path
                    d="M72 60L54 70.3923L54 49.6077L72 60Z"
                    fill="#FDFDFD"
                  />
                  <defs>
                    <filter
                      id="filter0_d_1134_2759"
                      x="0"
                      y="0"
                      width="120"
                      height="120"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="15" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1134_2759"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1134_2759"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                Watch Video
              </button>
            </div>
          </div>
          <div className="flex basis-1/2 flex-col justify-end gap-5">
            <svg
              className="mx-auto animate-slideLeftRight"
              width="258"
              height="80"
              viewBox="0 0 258 118"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="57" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="3" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="75" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="21" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="93" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="39" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="111" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="129" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="147" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="165" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="183" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="201" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="237" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="255" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="219" cy="35" r="3" fill="#3F3F3F" />
              <circle cx="57" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="3" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="75" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="21" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="93" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="39" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="111" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="129" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="147" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="165" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="183" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="201" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="237" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="255" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="219" cy="3" r="3" fill="#3F3F3F" />
              <circle cx="57" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="3" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="75" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="21" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="93" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="39" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="111" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="129" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="147" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="165" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="183" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="201" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="237" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="255" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="219" cy="51" r="3" fill="#3F3F3F" />
              <circle cx="57" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="3" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="75" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="21" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="93" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="39" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="111" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="129" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="147" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="165" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="183" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="201" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="237" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="255" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="219" cy="19" r="3" fill="#3F3F3F" />
              <circle cx="57" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="3" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="75" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="21" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="93" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="39" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="111" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="129" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="147" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="165" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="183" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="201" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="237" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="255" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="219" cy="67" r="3" fill="#3F3F3F" />
              <circle cx="57" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="3" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="75" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="21" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="93" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="39" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="111" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="129" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="147" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="165" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="183" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="201" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="237" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="255" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="219" cy="83" r="3" fill="#3F3F3F" />
              <circle cx="57" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="3" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="75" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="21" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="93" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="39" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="111" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="129" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="147" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="165" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="183" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="201" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="237" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="255" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="219" cy="99" r="3" fill="#3F3F3F" />
              <circle cx="57" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="3" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="75" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="21" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="93" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="39" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="111" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="129" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="147" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="165" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="183" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="201" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="237" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="255" cy="115" r="3" fill="#3F3F3F" />
              <circle cx="219" cy="115" r="3" fill="#3F3F3F" />
            </svg>

            <div className="relative min-h-[370px] w-full">
              <Image
                className="object-contain"
                src="/images/work-permit-2.png"
                fill
              />
            </div>
          </div>
        </FadeInLeftWithSlowBounce>
        {/* column */}
        <FadeInRightWithSlowBounce className="space-y-6">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
              Key Benefits
            </span>
          </div>
          <h2 className="text-center text-4xl font-semibold lg:text-left lg:text-4xl">
            Key Benefits of Our Work Permit Assistance
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Expert guidance, personalized support, and efficient processing
            ensure timely approval, reducing stress and delays while navigating
            complex regulations to secure work permits smoothly and
            successfully.
          </p>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2">
            <div className="flex items-center gap-2">
              <div>
                <svg
                  className="basis-[70px]"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1141_2559)">
                    <rect
                      x="5"
                      y="5"
                      width="45"
                      height="45"
                      rx="4"
                      fill="#F90945"
                      shape-rendering="crispEdges"
                    />
                    <path
                      d="M22.8866 23.6907H25.3349V30.5288H22.8866V23.6907ZM27.7749 30.5288H30.2232V20.8527H27.7749V30.5288ZM32.6633 30.5288H35.1117V18.0856H32.6633V30.5288ZM37.5517 30.5288H40V15.3895H37.5517V30.5288ZM34.1149 35.2998L33.2871 32.8852C33.2757 32.8519 33.271 32.816 33.2733 32.7803C33.2757 32.7445 33.285 32.7099 33.3006 32.679C33.3395 32.602 33.3775 32.5244 33.4145 32.4461H30.9018C29.624 34.2581 27.7448 35.2948 25.7303 35.2948C22.0406 35.2948 19.0388 31.798 19.0388 27.5C19.0388 25.4374 19.7237 23.4931 20.9674 22.0253C22.1954 20.576 23.8287 19.7548 25.5728 19.7079L28.1184 17.6564C28.0585 17.6366 27.9988 17.6177 27.9395 17.5997C27.9097 17.5907 27.8821 17.5739 27.8588 17.5505C27.8355 17.5272 27.8171 17.498 27.805 17.4651L26.925 15.0775C26.5283 15.0262 26.1296 15.0003 25.7305 15C25.3361 15 24.9348 15.0261 24.5358 15.0775L23.6557 17.4651C23.6436 17.498 23.6252 17.5272 23.6019 17.5505C23.5786 17.5739 23.551 17.5907 23.5212 17.5997C22.7363 17.8378 21.9835 18.2017 21.2845 18.6809C21.258 18.6991 21.2283 18.7099 21.1976 18.7126C21.1669 18.7153 21.1361 18.7098 21.1076 18.6966L19.0345 17.7325C18.4107 18.3135 17.8441 18.9735 17.3453 19.7002L18.1729 22.1146C18.1844 22.1479 18.1891 22.1838 18.1867 22.2195C18.1844 22.2553 18.1751 22.2899 18.1595 22.3208C17.7482 23.1352 17.436 24.0122 17.2319 24.9266C17.2242 24.9613 17.2097 24.9935 17.1897 25.0207C17.1697 25.0478 17.1445 25.0693 17.1163 25.0834L15.0664 26.1085C15.0223 26.5707 15.0001 27.0353 15 27.5004C15 27.9618 15.0223 28.4292 15.0664 28.8915L17.1161 29.9165C17.1444 29.9307 17.1695 29.9522 17.1895 29.9793C17.2096 30.0065 17.224 30.0387 17.2317 30.0734C17.4359 30.9878 17.7481 31.8648 18.1594 32.6792C18.175 32.7101 18.1843 32.7447 18.1866 32.7804C18.1889 32.8161 18.1842 32.852 18.1728 32.8853L17.3452 35.2998C17.844 36.0266 18.4105 36.6866 19.0344 37.2676L21.1074 36.3035C21.136 36.2902 21.1668 36.2847 21.1974 36.2874C21.2281 36.2901 21.2578 36.3009 21.2844 36.3191C21.9832 36.7984 22.7359 37.162 23.5209 37.3993C23.5507 37.4083 23.5783 37.4251 23.6016 37.4484C23.625 37.4718 23.6434 37.501 23.6556 37.534L24.5356 39.9225C24.9324 39.9738 25.3312 39.9997 25.7304 40C26.1241 40 26.5254 39.9739 26.9248 39.9225L27.8049 37.534C27.817 37.501 27.8355 37.4718 27.8588 37.4484C27.8821 37.4251 27.9098 37.4083 27.9396 37.3993C28.7245 37.1619 29.4773 36.7983 30.1761 36.3191C30.2027 36.3009 30.2324 36.2901 30.2631 36.2874C30.2937 36.2847 30.3245 36.2902 30.3531 36.3035L32.4256 37.2676C33.0496 36.6866 33.6162 36.0267 34.1149 35.2998Z"
                      fill="#FBFBFB"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1141_2559"
                      x="0"
                      y="0"
                      width="55"
                      height="55"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset />
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1141_2559"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1141_2559"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Streamlined Process</h6>
                <p className="text-sm font-medium">
                  Optimized workflow designed to minimize delays, reduce
                  complexity, and ensure fast, efficient outcomes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_3437)">
                    <rect
                      x="5"
                      y="5"
                      width="45"
                      height="45"
                      rx="4"
                      fill="#F90945"
                      shape-rendering="crispEdges"
                    />
                    <g clip-path="url(#clip0_1_3437)">
                      <path
                        d="M28.397 34.9272C28.397 34.5149 28.4358 34.1115 28.5092 33.7202H18.8705C18.466 33.7202 18.138 33.3923 18.138 32.9878C18.138 32.5833 18.466 32.2554 18.8705 32.2554H28.9687C29.2508 31.6289 29.6297 31.0507 30.0914 30.5419C30.0149 30.5685 29.9345 30.5821 29.8536 30.5822H18.8705C17.9036 30.548 17.8969 29.1543 18.8705 29.1173H29.8535C30.3468 29.1079 30.7145 29.6259 30.5457 30.0876C31.4223 29.2926 32.515 28.732 33.724 28.5053V20.4357C33.724 19.1352 32.6647 18.1343 31.4225 18.1343H29.3711C29.2743 19.8234 27.8699 21.1681 26.1569 21.1681H22.567C20.8541 21.1681 19.4497 19.8234 19.3528 18.1343H17.3015C16.0592 18.1343 15 19.1353 15 20.4357V37.6948C15 38.9925 16.0571 39.9962 17.3015 39.9962H30.8132C29.3399 38.7972 28.397 36.9704 28.397 34.9272ZM18.8705 22.8413H29.8536C30.2581 22.8413 30.586 23.1692 30.586 23.5737C30.586 23.9782 30.2581 24.3062 29.8536 24.3062H18.8705C17.9031 24.2717 17.8973 22.8782 18.8705 22.8413ZM18.8705 25.9793H29.8536C30.2581 25.9793 30.586 26.3073 30.586 26.7118C30.586 27.1163 30.2581 27.4442 29.8536 27.4442H18.8705C17.9031 27.4098 17.8973 26.0162 18.8705 25.9793ZM22.793 36.8583H18.8705C17.901 36.8229 17.8993 35.4295 18.8705 35.3934H22.793C23.1975 35.3934 23.5254 35.7213 23.5254 36.1258C23.5254 36.5303 23.1975 36.8583 22.793 36.8583Z"
                        fill="#FBFBFB"
                      />
                      <path
                        d="M22.5663 19.7032H26.1562C28.5658 19.5952 28.4381 16.1334 26.0254 16.1928C25.4862 14.6068 23.2357 14.6078 22.6971 16.1928C20.2941 16.129 20.1482 19.5892 22.5663 19.7032ZM34.9301 29.858C32.135 29.858 29.8611 32.132 29.8611 34.9271C30.1159 41.6427 39.7454 41.6408 39.9992 34.927C39.9992 32.132 37.7253 29.858 34.9301 29.858ZM36.9688 34.431L34.9413 36.4586C34.6553 36.7446 34.1916 36.7446 33.9056 36.4587L32.8916 35.4451C32.2308 34.7341 33.2153 33.7482 33.9272 34.4091L34.4233 34.9049L35.9331 33.3952C36.6445 32.7343 37.6297 33.7196 36.9688 34.431Z"
                        fill="#FBFBFB"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_3437"
                      x="0"
                      y="0"
                      width="55"
                      height="55"
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
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_3437"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_3437"
                        result="shape"
                      />
                    </filter>
                    <clipPath id="clip0_1_3437">
                      <rect
                        width="25"
                        height="25"
                        fill="white"
                        transform="translate(15 15)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Enhanced Compliance</h6>
                <p className="text-sm font-medium">
                  Strengthen adherence to regulations with tailored strategies
                  that ensure legal and operational alignment.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_3429)">
                    <rect
                      x="5"
                      y="5"
                      width="45"
                      height="45"
                      rx="4"
                      fill="#F90945"
                      shape-rendering="crispEdges"
                    />
                    <path
                      d="M24.7656 27.7001C24.8056 27.7001 24.8056 27.7392 24.8056 27.7392L29.1281 23.5221L29.088 23.483L24.1252 18.6412C24.0852 18.6412 24.0852 18.6021 24.0852 18.6021L19.7627 22.8192L19.8027 22.8583L24.7656 27.7001ZM21.3636 31.0191C21.8039 31.4487 22.5643 31.4487 23.0446 31.0191C23.2047 30.7068 25.4059 29.4182 24.2053 28.2468L19.2424 23.4049C18.7621 22.9754 18.0417 22.9754 17.5615 23.4049L16.4008 24.5373C15.9605 24.9668 15.9605 25.7087 16.4008 26.1773L21.3636 31.0191ZM29.6484 22.9364C30.0886 23.3659 30.8491 23.3659 31.3293 22.9364L32.49 21.804C32.9703 21.3354 32.9302 20.6326 32.49 20.164L27.5272 15.3221C27.0869 14.8926 26.3265 14.8926 25.8462 15.3221L24.6855 16.4936C24.2453 16.9231 24.2453 17.665 24.6855 18.1335L29.6484 22.9364ZM39.2539 34.5334L28.7679 25.0059L26.3265 27.3877L36.0921 37.6572C36.9325 38.5553 38.4134 38.6333 39.3339 37.6962C40.2544 36.7981 40.2144 35.3924 39.2539 34.5334ZM29.048 36.7981C29.2081 36.5638 29.2882 36.2905 29.2882 36.0172C29.2882 35.2753 28.6878 34.6505 27.9674 34.6505H18.0417C17.3213 34.6505 16.721 35.2362 16.721 36.0172C16.721 36.3296 16.801 36.6029 16.9611 36.7981C15.8005 37.2276 15 38.321 15 39.6095C15 39.8048 15.1601 40 15.4002 40H30.6489C30.8491 40 31.0492 39.8048 31.0492 39.6095C31.0091 38.321 30.2087 37.2276 29.048 36.7981Z"
                      fill="#FBFBFB"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_3429"
                      x="0"
                      y="0"
                      width="55"
                      height="55"
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
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_3429"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_3429"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Regulatory Expertise</h6>
                <p className="text-sm font-medium">
                  Specialized knowledge to navigate complex regulations,
                  ensuring compliance and smooth business operations.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1_3446)">
                    <rect
                      x="5"
                      y="5"
                      width="45"
                      height="45"
                      rx="4"
                      fill="#F90945"
                      shape-rendering="crispEdges"
                    />
                    <path
                      d="M32.543 32.2969L30.3242 31.5547C29.5024 32.1489 28.5141 32.4687 27.5 32.4687C26.4859 32.4687 25.4976 32.1489 24.6758 31.5547L22.457 32.2969C21.7665 32.525 21.1658 32.9655 20.7407 33.5555C20.3155 34.1455 20.0877 34.8548 20.0899 35.582V37.168C20.0897 37.5041 20.2228 37.8265 20.4601 38.0645C20.6974 38.3025 21.0194 38.4367 21.3555 38.4375H33.6445C33.9806 38.4367 34.3027 38.3025 34.5399 38.0645C34.7772 37.8265 34.9104 37.5041 34.9102 37.168V35.582C34.9123 34.8548 34.6845 34.1455 34.2594 33.5555C33.8342 32.9655 33.2335 32.525 32.543 32.2969Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M37.1524 25.3867C37.0662 25.3969 36.9792 25.3757 36.9074 25.3269C36.8356 25.2781 36.7839 25.205 36.7617 25.1211C36.5394 24.2464 36.1921 23.4083 35.7305 22.6328C35.6866 22.5576 35.6715 22.469 35.688 22.3835C35.7046 22.298 35.7516 22.2214 35.8203 22.168C35.949 22.0689 36.0549 21.9434 36.1311 21.8C36.2072 21.6566 36.2518 21.4985 36.2618 21.3365C36.2717 21.1744 36.2469 21.0121 36.189 20.8604C36.131 20.7087 36.0413 20.5712 35.9258 20.457L34.543 19.0742C34.4288 18.959 34.2913 18.8694 34.1398 18.8114C33.9882 18.7535 33.826 18.7286 33.6641 18.7383C33.5022 18.7493 33.3444 18.7943 33.201 18.8704C33.0577 18.9464 32.932 19.0518 32.832 19.1797C32.7786 19.2484 32.702 19.2954 32.6165 19.312C32.531 19.3285 32.4424 19.3134 32.3672 19.2695C31.5917 18.8079 30.7536 18.4606 29.8789 18.2383C29.795 18.216 29.722 18.1643 29.6732 18.0925C29.6244 18.0208 29.6032 17.9338 29.6133 17.8477C29.6327 17.687 29.618 17.5241 29.57 17.3696C29.5221 17.2151 29.442 17.0725 29.335 16.9511C29.228 16.8298 29.0966 16.7324 28.9493 16.6654C28.802 16.5984 28.6423 16.5634 28.4805 16.5625H26.5195C26.3578 16.5634 26.198 16.5984 26.0507 16.6654C25.9034 16.7324 25.772 16.8298 25.665 16.9511C25.5581 17.0725 25.478 17.2151 25.43 17.3696C25.382 17.5241 25.3673 17.687 25.3867 17.8477C25.3969 17.9338 25.3756 18.0208 25.3268 18.0925C25.278 18.1643 25.205 18.216 25.1211 18.2383C24.2464 18.4606 23.4084 18.8079 22.6328 19.2695C22.5579 19.3144 22.469 19.3301 22.3832 19.3135C22.2974 19.2969 22.2208 19.2493 22.168 19.1797C22.0689 19.051 21.9434 18.9451 21.8 18.8689C21.6566 18.7928 21.4985 18.7482 21.3365 18.7383C21.1744 18.7283 21.0121 18.7531 20.8604 18.811C20.7087 18.869 20.5712 18.9587 20.457 19.0742L19.0742 20.457C18.9606 20.5721 18.8725 20.7099 18.8157 20.8614C18.7589 21.0129 18.7347 21.1746 18.7446 21.3361C18.7546 21.4975 18.7985 21.6551 18.8734 21.7984C18.9484 21.9418 19.0528 22.0677 19.1797 22.168C19.2485 22.2214 19.2955 22.298 19.312 22.3835C19.3285 22.469 19.3134 22.5576 19.2695 22.6328C18.8079 23.4083 18.4606 24.2464 18.2383 25.1211C18.2172 25.2057 18.1658 25.2795 18.0937 25.3285C18.0216 25.3775 17.934 25.3982 17.8477 25.3867C17.6868 25.3657 17.5232 25.3793 17.368 25.4266C17.2128 25.474 17.0696 25.554 16.9478 25.6613C16.8261 25.7686 16.7287 25.9007 16.6623 26.0487C16.5958 26.1967 16.5618 26.3573 16.5625 26.5195V28.4805C16.5618 28.6427 16.5958 28.8033 16.6623 28.9513C16.7287 29.0993 16.8261 29.2314 16.9478 29.3387C17.0696 29.446 17.2128 29.526 17.368 29.5734C17.5232 29.6207 17.6868 29.6343 17.8477 29.6133C17.9338 29.6031 18.0208 29.6244 18.0925 29.6732C18.1643 29.722 18.216 29.795 18.2383 29.8789C18.4606 30.7536 18.8079 31.5917 19.2695 32.3672C19.3134 32.4424 19.3285 32.531 19.312 32.6165C19.2955 32.702 19.2485 32.7786 19.1797 32.832C19.0523 32.932 18.9476 33.0578 18.8723 33.2012C18.7971 33.3446 18.753 33.5022 18.7431 33.6638C18.7331 33.8254 18.7575 33.9873 18.8145 34.1389C18.8716 34.2904 18.9601 34.4281 19.0742 34.543L19.375 34.8438C19.5061 34.0903 19.8391 33.3865 20.3385 32.8073C20.8379 32.2281 21.485 31.7952 22.2109 31.5547L23.2266 31.2148C22.5133 30.3949 22.051 29.3871 21.8948 28.3116C21.7386 27.2361 21.895 26.1384 22.3455 25.1494C22.796 24.1605 23.5215 23.322 24.4355 22.734C25.3494 22.146 26.4133 21.8333 27.5 21.8333C28.5868 21.8333 29.6506 22.146 30.5645 22.734C31.4785 23.322 32.204 24.1605 32.6545 25.1494C33.105 26.1384 33.2615 27.2361 33.1052 28.3116C32.949 29.3871 32.4867 30.3949 31.7734 31.2148L32.7891 31.5547C33.515 31.7952 34.1621 32.2281 34.6615 32.8073C35.1609 33.3865 35.4939 34.0903 35.625 34.8438L35.9258 34.543C36.0365 34.4301 36.1227 34.2957 36.1793 34.1482C36.2358 34.0006 36.2614 33.8429 36.2544 33.685C36.2475 33.5272 36.2081 33.3724 36.1388 33.2303C36.0695 33.0883 35.9717 32.962 35.8516 32.8594C35.7759 32.8101 35.7206 32.735 35.6962 32.648C35.6718 32.5611 35.6798 32.4682 35.7188 32.3867C36.1849 31.6051 36.5361 30.7605 36.7617 29.8789C36.784 29.795 36.8357 29.722 36.9075 29.6732C36.9792 29.6244 37.0662 29.6031 37.1524 29.6133C37.313 29.6327 37.4759 29.618 37.6304 29.57C37.7849 29.5221 37.9275 29.442 38.0489 29.335C38.1702 29.228 38.2676 29.0966 38.3346 28.9493C38.4016 28.802 38.4366 28.6423 38.4375 28.4805V26.5195C38.4363 26.3579 38.401 26.1983 38.3339 26.0512C38.2668 25.9041 38.1694 25.7728 38.0481 25.6659C37.9268 25.559 37.7844 25.4789 37.63 25.4308C37.4757 25.3827 37.3129 25.3677 37.1524 25.3867Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M27.5 31.6875C29.735 31.6875 31.5469 29.8757 31.5469 27.6406C31.5469 25.4056 29.735 23.5938 27.5 23.5938C25.265 23.5938 23.4531 25.4056 23.4531 27.6406C23.4531 29.8757 25.265 31.6875 27.5 31.6875Z"
                      fill="#FBFBFB"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1_3446"
                      x="0"
                      y="0"
                      width="55"
                      height="55"
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
                      <feGaussianBlur stdDeviation="2.5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1_3446"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1_3446"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </div>

              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Personalized Support</h6>
                <p className="text-sm font-medium">
                  Tailored assistance designed to meet your specific needs,
                  ensuring effective solutions and individual attention.
                </p>
              </div>
            </div>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
      <VideoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  );
};

export default KeyBenefits;
