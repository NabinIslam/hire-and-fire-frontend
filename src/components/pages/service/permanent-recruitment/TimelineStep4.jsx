"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const TimelineStep4 = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  return (
    <div className="flex h-[220px] items-center justify-between">
      <div className="basis-[45%]"></div>
      <div className="flex h-full items-center justify-center">
        <div className="relative mx-auto h-full w-1 bg-primary">
          <svg
            className="absolute left-[-15px] top-[90px]"
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_779_3535)">
              <ellipse cx="17" cy="16.945" rx="12" ry="11.945" fill="#FBFBFB" />
              <path
                d="M28.6695 14.1493C28.8146 14.7513 28.9138 15.3711 28.9634 16.0048L28.4649 16.0438C28.4881 16.3411 28.5 16.6416 28.5 16.945C28.5 17.2485 28.4881 17.549 28.4649 17.8463L28.9634 17.8853C28.9138 18.519 28.8146 19.1388 28.6695 19.7408L28.1834 19.6237C28.0415 20.2128 27.8538 20.7841 27.6243 21.3338L28.0857 21.5264C27.8428 22.1081 27.5551 22.6665 27.2268 23.1975L26.8015 22.9345C26.4848 23.4467 26.1287 23.9322 25.7373 24.3869L26.1163 24.7131C25.7073 25.1883 25.2614 25.6311 24.7831 26.0371L24.4595 25.656C24.0025 26.044 23.5145 26.3971 22.9999 26.7109L23.2603 27.1378C22.7277 27.4626 22.1677 27.7472 21.5845 27.9874L21.3941 27.5251C20.8433 27.7519 20.2709 27.9374 19.6809 28.0776L19.7965 28.564C19.1941 28.7071 18.5741 28.8051 17.9403 28.854L17.9018 28.3554C17.6043 28.3784 17.3036 28.3901 17 28.3901C16.6964 28.3901 16.3957 28.3784 16.0982 28.3554L16.0597 28.854C15.4259 28.8051 14.8059 28.7071 14.2035 28.564L14.3191 28.0776C13.7291 27.9374 13.1567 27.7519 12.6059 27.5251L12.4155 27.9874C11.8323 27.7472 11.2723 27.4626 10.7397 27.1378L11.0001 26.7109C10.4855 26.3971 9.99754 26.044 9.54047 25.656L9.21686 26.0371C8.73859 25.6311 8.29275 25.1883 7.88374 24.7131L8.26269 24.3869C7.8713 23.9322 7.51517 23.4467 7.19848 22.9345L6.77321 23.1975C6.44492 22.6665 6.15718 22.1081 5.9143 21.5264L6.3757 21.3338C6.14617 20.7841 5.95848 20.2128 5.81658 19.6237L5.33049 19.7408C5.18544 19.1388 5.0862 18.519 5.03663 17.8853L5.53511 17.8463C5.51185 17.549 5.5 17.2485 5.5 16.945C5.5 16.6416 5.51185 16.3411 5.53511 16.0438L5.03663 16.0048C5.0862 15.3711 5.18544 14.7513 5.33049 14.1493L5.81658 14.2664C5.95848 13.6773 6.14617 13.106 6.3757 12.5563L5.9143 12.3637C6.15718 11.782 6.44492 11.2236 6.77321 10.6926L7.19848 10.9556C7.51517 10.4434 7.8713 9.95788 8.26269 9.50318L7.88375 9.17699C8.29275 8.70184 8.73859 8.25903 9.21686 7.85296L9.54047 8.23411C9.99754 7.84605 10.4855 7.49302 11.0001 7.17917L10.7397 6.7523C11.2723 6.42748 11.8323 6.14287 12.4155 5.9027L12.6059 6.36503C13.1567 6.13819 13.7291 5.95273 14.3191 5.81254L14.2035 5.32608C14.8059 5.18295 15.4259 5.08503 16.0597 5.03613L16.0982 5.53465C16.3957 5.5117 16.6964 5.5 17 5.5C17.3036 5.5 17.6043 5.5117 17.9018 5.53465L17.9403 5.03613C18.5741 5.08503 19.1941 5.18295 19.7965 5.32608L19.6809 5.81254C20.2709 5.95273 20.8433 6.13819 21.3941 6.36503L21.5845 5.9027C22.1677 6.14287 22.7277 6.42748 23.2603 6.7523L22.9999 7.17917C23.5145 7.49302 24.0025 7.84605 24.4595 8.23411L24.7831 7.85296C25.2614 8.25903 25.7073 8.70184 26.1163 9.17699L25.7373 9.50318C26.1287 9.95788 26.4848 10.4434 26.8015 10.9556L27.2268 10.6926C27.5551 11.2236 27.8428 11.782 28.0857 12.3637L27.6243 12.5563C27.8538 13.106 28.0415 13.6773 28.1834 14.2664L28.6695 14.1493Z"
                stroke="#F90945"
                stroke-dasharray="2 2"
              />
            </g>
            <g filter="url(#filter1_d_779_3535)">
              <ellipse cx="17" cy="16.945" rx="9" ry="8.95879" fill="#F90945" />
            </g>
            <defs>
              <filter
                id="filter0_d_779_3535"
                x="0"
                y="0"
                width="34"
                height="33.8901"
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
                  result="effect1_dropShadow_779_3535"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_779_3535"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_779_3535"
                x="3"
                y="2.98624"
                width="28"
                height="27.9176"
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
                  result="effect1_dropShadow_779_3535"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_779_3535"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="basis-[45%]">
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="bg-timeline-card-bg-left my-4 min-h-[183px] rounded-xl bg-contain bg-left bg-no-repeat p-4"
        >
          <div className="bg-timeline-card-inner-bg-right mx-[25px] flex h-full flex-row-reverse items-center justify-between gap-2 rounded-full border bg-white bg-contain bg-right bg-no-repeat p-4 text-black shadow">
            <div>
              <svg
                width="110"
                height="111"
                viewBox="0 0 110 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1037_2780)">
                  <ellipse
                    cx="55"
                    cy="55.3977"
                    rx="50"
                    ry="49.771"
                    fill="#FBFBFB"
                  />
                </g>
                <g clip-path="url(#clip0_1037_2780)">
                  <path
                    d="M67.4063 36.2916C67.1837 36.8804 67.0699 37.5044 67.0703 38.1334C67.0703 41.0275 69.4363 43.3827 72.3438 43.3827C72.995 43.3827 73.6185 43.2637 74.1948 43.0479C76.3739 46.3907 77.6134 50.1975 77.8199 54.1939C79.0738 54.7554 80.2586 55.4588 81.3508 56.2901C81.3625 55.9927 81.3672 55.6952 81.3672 55.3978C81.3672 50.1298 79.8257 45.103 76.8979 40.7749C77.3696 39.9738 77.6179 39.0619 77.6172 38.1334C77.6172 35.2393 75.2512 32.8841 72.3438 32.8841C71.4112 32.8834 70.4954 33.1305 69.6909 33.5998C65.3427 30.686 60.2924 29.1513 55 29.1513C54.7012 29.1513 54.4023 29.156 54.1035 29.1676C54.9391 30.2548 55.6422 31.4295 56.2094 32.6823C60.224 32.8879 64.0482 34.1225 67.4063 36.2916ZM42.5937 74.5039C42.8163 73.9151 42.9301 73.2911 42.9297 72.6621C42.9297 69.768 40.5637 67.4128 37.6562 67.4128C37.0243 67.4124 36.3975 67.5257 35.806 67.7472C33.6268 64.4045 32.3864 60.5978 32.1801 56.6016C30.9262 56.0401 29.7414 55.3367 28.6492 54.5054C28.6375 54.8028 28.6328 55.1003 28.6328 55.3978C28.6328 60.6649 30.1745 65.693 33.1018 70.0213C32.6303 70.8222 32.3821 71.7338 32.3828 72.6621C32.3828 75.5562 34.7488 77.9114 37.6562 77.9114C38.623 77.9114 39.5291 77.6497 40.3091 77.1957C44.6574 80.1095 49.7086 81.6442 55 81.6442C55.2988 81.6442 55.5977 81.6395 55.8965 81.6279C55.0613 80.5407 54.3547 79.3613 53.7906 78.1132C49.776 77.9076 45.9518 76.673 42.5937 74.5039ZM72.8688 68.0275C72.8688 66.6476 71.7402 65.5254 70.3539 65.5254C68.9676 65.5254 67.8402 66.6476 67.8402 68.0275C67.8402 69.4075 68.9676 70.5309 70.3539 70.5309C71.7402 70.5309 72.8688 69.4075 72.8688 68.0275ZM70.3539 74.0304C66.7293 74.0304 63.7809 76.9653 63.7809 80.5733V83.7089C65.759 84.7016 67.9914 85.2604 70.3516 85.2604C72.7141 85.2604 74.95 84.7004 76.9281 83.7066V80.5733C76.9281 78.8247 76.2438 77.1823 75.0027 75.947C73.7605 74.7116 72.1094 74.0304 70.3539 74.0304Z"
                    fill="#F90945"
                  />
                  <path
                    d="M70.352 56.0976C62.2742 56.0976 55.7035 62.6382 55.7035 70.679C55.7035 74.8329 57.4578 78.5856 60.2656 81.2441V80.5733C60.2656 76.7448 62.4301 73.411 65.6035 71.7172C64.8031 70.6988 64.325 69.418 64.325 68.0275C64.325 64.7181 67.0297 62.0258 70.3543 62.0258C73.6801 62.0258 76.3848 64.7181 76.3848 68.0275C76.3848 69.4157 75.9078 70.6942 75.1109 71.7114C75.9746 72.1721 76.775 72.7624 77.4887 73.4716C79.3941 75.3684 80.4441 77.8903 80.4441 80.5733V81.2382C83.2496 78.5809 85.0004 74.8294 85.0004 70.679C85.0004 62.6382 78.4297 56.0976 70.352 56.0976ZM42.166 37.465C42.166 36.085 41.0375 34.9628 39.6512 34.9628C38.2648 34.9628 37.1375 36.085 37.1375 37.465C37.1375 38.845 38.2648 39.9683 39.6512 39.9683C41.0375 39.9683 42.166 38.845 42.166 37.465ZM33.0781 50.0108V53.1464C35.0562 54.1391 37.2887 54.6978 39.6488 54.6978C42.0113 54.6978 44.2473 54.1379 46.2254 53.144V50.0108C46.2254 48.2622 45.541 46.6198 44.3 45.3844C43.0578 44.1491 41.4066 43.4678 39.6512 43.4678C36.0266 43.4678 33.0781 46.4028 33.0781 50.0108Z"
                    fill="#F90945"
                  />
                  <path
                    d="M29.5621 50.6816V50.0108C29.5621 46.1824 31.7266 42.8485 34.9 41.1547C34.0996 40.1363 33.6215 38.8555 33.6215 37.465C33.6215 34.1557 36.3262 31.4634 39.6508 31.4634C42.9766 31.4634 45.6812 34.1557 45.6812 37.465C45.6812 38.8532 45.2043 40.1317 44.4074 41.1489C45.2711 41.6096 46.0715 42.1999 46.7852 42.9091C48.6906 44.8059 49.7406 47.3279 49.7406 50.0108V50.6758C52.5461 48.0184 54.2969 44.267 54.2969 40.1165C54.2969 32.0758 47.7262 25.5352 39.6484 25.5352C31.5707 25.5352 25 32.0758 25 40.1165C25 44.2705 26.7543 48.0231 29.5621 50.6816Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1037_2780"
                    x="0"
                    y="0.626709"
                    width="110"
                    height="109.542"
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
                      result="effect1_dropShadow_1037_2780"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1037_2780"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_1037_2780">
                    <rect
                      width="60"
                      height="59.7252"
                      fill="white"
                      transform="translate(25 25.5352)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="basis-[50%] text-center">
              <h3 className="mb-1 text-2xl font-medium">Precise Matching</h3>
              <p className="text-sm font-medium leading-tight">
                We align candidate skills precisely with your job requirements,
                ensuring the perfect fit for your team.
              </p>
            </div>
            <div className="size-[100px] basis-[100px] rounded-full border p-2 shadow">
              <div className="flex size-full items-center justify-center rounded-full bg-primary text-sm text-white">
                Step 4
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineStep4;
