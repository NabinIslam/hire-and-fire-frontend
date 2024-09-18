"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const TimelineStep2 = () => {
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
                <g filter="url(#filter0_d_783_2627)">
                  <ellipse
                    cx="55"
                    cy="55.4033"
                    rx="50"
                    ry="49.771"
                    fill="#FBFBFB"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M78.7063 81.9547L82.6205 77.9393C83.3079 77.2342 83.2906 76.0976 82.5823 75.4132L71.7411 64.9414C71.0328 64.257 69.8905 64.2743 69.2032 64.9793L68.9607 65.2281L62.8035 59.2142C65.0437 56.0269 66.3583 52.1478 66.3583 47.9629C66.3583 37.1098 57.5196 28.3116 46.6166 28.3116C35.7136 28.3117 26.875 37.1099 26.875 47.963C26.875 55.2613 30.8721 61.6303 36.8061 65.0194C37.3293 63.9686 38.0191 63.0086 38.849 62.1761C33.629 59.3433 30.3648 53.9112 30.3648 47.963C30.3648 39.0287 37.6413 31.7856 46.6166 31.7856C55.592 31.7856 62.8684 39.0287 62.8684 47.963C62.8684 53.9112 59.6044 59.3432 54.3845 62.1761C55.2144 63.0085 55.9043 63.9686 56.4275 65.0194C57.5019 64.4054 58.516 63.6923 59.4564 62.8895L65.4925 68.786L65.2891 68.9947C64.6018 69.6997 64.6189 70.8367 65.3273 71.5208L76.1685 81.9925C76.8769 82.6768 78.0189 82.66 78.7063 81.9547ZM46.6168 60.8213C51.6246 60.8213 55.6844 64.8624 55.6844 69.8473C55.6844 74.8321 51.6246 78.8732 46.6168 78.8732C41.6089 78.8732 37.5493 74.8321 37.5493 69.8473C37.5493 64.8624 41.6089 60.8213 46.6168 60.8213ZM45.4258 70.6434L49.8348 66.2108C50.3568 65.6861 51.2082 65.6846 51.7338 66.2049C52.2592 66.7251 52.2609 67.5702 51.7396 68.094C49.9517 69.8902 48.1758 71.6983 46.3797 73.4863C45.8546 74.009 45.0029 74.009 44.4777 73.4863L41.4977 70.52C40.9725 69.9973 40.9725 69.1495 41.4977 68.6267C42.0228 68.104 42.8746 68.104 43.3997 68.6267L45.4258 70.6434ZM46.6168 37.5018C49.6029 37.5018 52.0238 39.9116 52.0238 42.8841C52.0238 45.8567 49.6029 48.2665 46.6168 48.2665C43.6305 48.2665 41.2096 45.8567 41.2096 42.8841C41.2097 39.9116 43.6306 37.5018 46.6168 37.5018ZM36.1698 57.7947C33.7339 55.2308 32.2398 51.7707 32.2398 47.963C32.2398 40.0591 38.6764 33.652 46.6166 33.652C54.5569 33.652 60.9934 40.0592 60.9934 47.963C60.9934 51.7706 59.4995 55.2307 57.0636 57.7945C55.9916 52.914 51.6343 49.4331 46.6168 49.4331C41.5993 49.433 37.2418 52.914 36.1698 57.7947Z"
                  fill="#F90945"
                />
                <defs>
                  <filter
                    id="filter0_d_783_2627"
                    x="0"
                    y="0.632263"
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
                      result="effect1_dropShadow_783_2627"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_783_2627"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="basis-[50%] text-center">
              <h3 className="mb-1 text-2xl font-medium">Candidate Sourcing</h3>
              <p className="text-sm font-medium leading-tight">
                Leveraging our vast network and advanced technology, we connect
                you with top-tier talent quickly and efficiently.
              </p>
            </div>
            <div className="size-[100px] basis-[100px] rounded-full border p-2 shadow">
              <div className="flex size-full items-center justify-center rounded-full bg-primary text-sm text-white">
                Step 2
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TimelineStep2;
