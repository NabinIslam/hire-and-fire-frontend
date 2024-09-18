"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const TimelineStep1 = () => {
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
      <div className="basis-[45%]">
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="min-h-[183px] rounded-xl bg-timeline-card-bg bg-contain bg-right bg-no-repeat px-10 pb-7 pt-5"
        >
          <div className="flex h-full items-center justify-between gap-2 rounded-full border bg-white bg-timeline-card-inner-bg bg-contain bg-left bg-no-repeat p-4 text-black shadow">
            <div>
              <svg
                width="110"
                height="111"
                viewBox="0 0 110 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_779_3423)">
                  <ellipse
                    cx="55"
                    cy="55.3972"
                    rx="50"
                    ry="49.771"
                    fill="#FBFBFB"
                  />
                </g>
                <path
                  d="M47.0147 71.1292C45.4829 72.521 43.4838 73.2926 41.4098 73.2926C39.3359 73.2926 37.3368 72.521 35.805 71.1292C33.2325 72.6092 29.2837 76.9403 31.3969 80.0702C31.7205 80.5202 32.1471 80.887 32.6414 81.1403C33.1357 81.3936 33.6834 81.5261 34.2394 81.527H48.5709C49.1268 81.5262 49.6745 81.3938 50.1688 81.1407C50.663 80.8876 51.0897 80.5209 51.4134 80.0712C53.5237 76.9449 49.574 72.6092 47.0147 71.1292Z"
                  fill="#F90945"
                />
                <path
                  d="M47.8159 65.0717C47.5244 56.6047 35.2647 56.6243 34.9844 65.0717C35.2666 73.4818 47.5066 73.5564 47.8159 65.0717ZM62.185 65.0717C62.4916 73.5518 74.7316 73.4874 75.0166 65.0717C74.7381 56.6281 62.4784 56.6019 62.185 65.0717Z"
                  fill="#F90945"
                />
                <path
                  d="M74.2053 71.1292C72.675 72.5244 70.6752 73.2983 68.6 73.2983C66.5248 73.2983 64.525 72.5244 62.9947 71.1292C60.4381 72.6092 56.4706 76.9421 58.5884 80.0702C58.9118 80.5198 59.338 80.8863 59.8317 81.1396C60.3255 81.3929 60.8727 81.5257 61.4281 81.527H75.7606C76.3165 81.5262 76.8642 81.3938 77.3585 81.1407C77.8527 80.8876 78.2794 80.5209 78.6031 80.0712C80.7125 76.9412 76.7712 72.6111 74.2053 71.1292ZM51.9059 46.1584H58.7178L64.7563 50.9728C64.8937 51.0791 65.0582 51.1451 65.2313 51.1634C65.4043 51.1817 65.5791 51.1515 65.7359 51.0764C65.8927 51.0013 66.0254 50.8841 66.1189 50.738C66.2125 50.592 66.2633 50.4228 66.2656 50.2496V46.1584H68.6984C69.3898 46.1565 70.0523 45.8822 70.5411 45.3956C71.03 44.9089 71.3055 44.2495 71.3075 43.5613V31.8645C71.307 31.1758 71.032 30.5155 70.5428 30.0286C70.0536 29.5417 69.3903 29.2679 68.6984 29.2674H51.9059C51.2141 29.2679 50.5508 29.5417 50.0616 30.0286C49.5724 30.5155 49.2974 31.1758 49.2969 31.8645V43.5613C49.2989 44.2495 49.5744 44.9089 50.0632 45.3956C50.5521 45.8822 51.2146 46.1565 51.9059 46.1584Z"
                  fill="#F90945"
                />
                <path
                  d="M47.4346 43.5613V37.7082H41.0409C40.4183 37.709 39.8215 37.9555 39.3814 38.3938C38.9413 38.8321 38.6939 39.4262 38.6934 40.0459V49.8875C38.6939 50.5074 38.9414 51.1017 39.3817 51.54C39.8221 51.9783 40.4191 52.2247 41.0418 52.2252H42.9337V55.5269C42.9373 55.7006 42.9892 55.8699 43.0838 56.016C43.1783 56.1621 43.3117 56.2792 43.4692 56.3542C43.6266 56.4293 43.8019 56.4594 43.9755 56.4412C44.1491 56.423 44.3142 56.3571 44.4524 56.2511L49.4934 52.2252H55.1774C55.8001 52.2247 56.3972 51.9783 56.8375 51.54C57.2778 51.1017 57.5254 50.5074 57.5259 49.8875V48.0136H51.9065C50.7205 48.0131 49.5832 47.5439 48.7446 46.709C47.9061 45.8741 47.4349 44.7419 47.4346 43.5613Z"
                  fill="#F90945"
                />
                <defs>
                  <filter
                    id="filter0_d_779_3423"
                    x="0"
                    y="0.626122"
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
                      result="effect1_dropShadow_779_3423"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_779_3423"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
            <div className="basis-[50%] text-center">
              <h3 className="mb-1 text-2xl font-medium">
                Initial Consultation
              </h3>
              <p className="text-sm font-medium leading-tight">
                We understand your hiring needs and goals, delivering tailored
                recruitment solutions to drive success.
              </p>
            </div>
            <div className="size-[100px] basis-[100px] rounded-full border p-2 shadow">
              <div className="flex size-full items-center justify-center rounded-full bg-primary text-sm text-white">
                Step 1
              </div>
            </div>
          </div>
        </motion.div>
      </div>
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
      <div className="basis-[45%]"></div>
    </div>
  );
};

export default TimelineStep1;
