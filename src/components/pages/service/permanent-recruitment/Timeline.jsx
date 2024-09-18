"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

export function ProcessTimeline() {
  return (
    <div className="mx-auto flex grid-cols-9 p-2 text-blue-50 md:grid">
      <div className="flex flex-row-reverse md:contents">
        <div className="col-start-1 col-end-5 my-4 ml-auto min-h-[183px] rounded-xl bg-timeline-card-bg bg-contain bg-right bg-no-repeat px-10 pb-7 pt-5">
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
        </div>
        <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div className="flex h-full w-6 items-center justify-center">
            <div className="pointer-events-none h-full w-1 bg-primary"></div>
          </div>
          <div className="absolute top-1/2 -ml-[5px] -mt-5 h-6 w-6 rounded-full shadow">
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="12"
                  ry="11.945"
                  fill="#FBFBFB"
                />
                <path
                  d="M28.6695 14.606C28.8146 15.208 28.9138 15.8278 28.9634 16.4615L28.4649 16.5005C28.4881 16.7978 28.5 17.0983 28.5 17.4017C28.5 17.7052 28.4881 18.0057 28.4649 18.303L28.9634 18.342C28.9138 18.9757 28.8146 19.5955 28.6695 20.1975L28.1834 20.0804C28.0415 20.6695 27.8538 21.2408 27.6243 21.7905L28.0857 21.9831C27.8428 22.5648 27.5551 23.1232 27.2268 23.6542L26.8015 23.3912C26.4848 23.9034 26.1287 24.3889 25.7373 24.8436L26.1163 25.1698C25.7073 25.645 25.2614 26.0878 24.7831 26.4938L24.4595 26.1127C24.0025 26.5007 23.5145 26.8538 22.9999 27.1676L23.2603 27.5945C22.7277 27.9193 22.1677 28.2039 21.5845 28.4441L21.3941 27.9818C20.8433 28.2086 20.2709 28.3941 19.6809 28.5343L19.7965 29.0207C19.1941 29.1638 18.5741 29.2618 17.9403 29.3107L17.9018 28.8121C17.6043 28.8351 17.3036 28.8468 17 28.8468C16.6964 28.8468 16.3957 28.8351 16.0982 28.8121L16.0597 29.3107C15.4259 29.2618 14.8059 29.1638 14.2035 29.0207L14.3191 28.5343C13.7291 28.3941 13.1567 28.2086 12.6059 27.9818L12.4155 28.4441C11.8323 28.2039 11.2723 27.9193 10.7397 27.5945L11.0001 27.1676C10.4855 26.8538 9.99754 26.5007 9.54047 26.1127L9.21686 26.4938C8.73859 26.0878 8.29275 25.645 7.88374 25.1698L8.26269 24.8436C7.8713 24.3889 7.51517 23.9034 7.19848 23.3912L6.77321 23.6542C6.44492 23.1232 6.15718 22.5648 5.9143 21.9831L6.3757 21.7905C6.14617 21.2408 5.95848 20.6695 5.81658 20.0804L5.33049 20.1975C5.18544 19.5955 5.0862 18.9757 5.03663 18.342L5.53511 18.303C5.51185 18.0057 5.5 17.7052 5.5 17.4017C5.5 17.0983 5.51185 16.7978 5.53511 16.5005L5.03663 16.4615C5.0862 15.8278 5.18544 15.208 5.33049 14.606L5.81658 14.7231C5.95848 14.134 6.14617 13.5627 6.3757 13.013L5.9143 12.8204C6.15718 12.2387 6.44492 11.6803 6.77321 11.1493L7.19848 11.4123C7.51517 10.9001 7.8713 10.4146 8.26269 9.95988L7.88375 9.63369C8.29275 9.15853 8.73859 8.71573 9.21686 8.30966L9.54047 8.69081C9.99754 8.30275 10.4855 7.94971 11.0001 7.63587L10.7397 7.20899C11.2723 6.88418 11.8323 6.59957 12.4155 6.3594L12.6059 6.82172C13.1567 6.59489 13.7291 6.40943 14.3191 6.26923L14.2035 5.78278C14.8059 5.63965 15.4259 5.54173 16.0597 5.49283L16.0982 5.99135C16.3957 5.96839 16.6964 5.9567 17 5.9567C17.3036 5.9567 17.6043 5.96839 17.9018 5.99135L17.9403 5.49283C18.5741 5.54173 19.1941 5.63965 19.7965 5.78277L19.6809 6.26923C20.2709 6.40943 20.8433 6.59489 21.3941 6.82172L21.5845 6.35939C22.1677 6.59957 22.7277 6.88418 23.2603 7.20899L22.9999 7.63587C23.5145 7.94971 24.0025 8.30275 24.4595 8.69081L24.7831 8.30966C25.2614 8.71573 25.7073 9.15853 26.1163 9.63369L25.7373 9.95988C26.1287 10.4146 26.4848 10.9001 26.8015 11.4123L27.2268 11.1493C27.5551 11.6803 27.8428 12.2387 28.0857 12.8204L27.6243 13.013C27.8538 13.5627 28.0415 14.134 28.1834 14.7231L28.6695 14.606Z"
                  stroke="#F90945"
                  stroke-dasharray="2 2"
                />
              </g>
              <g filter="url(#filter1_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="9"
                  ry="8.95879"
                  fill="#F90945"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_779_3535"
                  x="0"
                  y="0.456696"
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
                  y="3.44293"
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
      </div>

      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div className="flex h-full w-6 items-center justify-center">
            <div className="pointer-events-none h-full w-1 bg-primary"></div>
          </div>
          <div className="absolute top-1/2 -ml-[5px] -mt-3 h-6 w-6 rounded-full shadow">
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="12"
                  ry="11.945"
                  fill="#FBFBFB"
                />
                <path
                  d="M28.6695 14.606C28.8146 15.208 28.9138 15.8278 28.9634 16.4615L28.4649 16.5005C28.4881 16.7978 28.5 17.0983 28.5 17.4017C28.5 17.7052 28.4881 18.0057 28.4649 18.303L28.9634 18.342C28.9138 18.9757 28.8146 19.5955 28.6695 20.1975L28.1834 20.0804C28.0415 20.6695 27.8538 21.2408 27.6243 21.7905L28.0857 21.9831C27.8428 22.5648 27.5551 23.1232 27.2268 23.6542L26.8015 23.3912C26.4848 23.9034 26.1287 24.3889 25.7373 24.8436L26.1163 25.1698C25.7073 25.645 25.2614 26.0878 24.7831 26.4938L24.4595 26.1127C24.0025 26.5007 23.5145 26.8538 22.9999 27.1676L23.2603 27.5945C22.7277 27.9193 22.1677 28.2039 21.5845 28.4441L21.3941 27.9818C20.8433 28.2086 20.2709 28.3941 19.6809 28.5343L19.7965 29.0207C19.1941 29.1638 18.5741 29.2618 17.9403 29.3107L17.9018 28.8121C17.6043 28.8351 17.3036 28.8468 17 28.8468C16.6964 28.8468 16.3957 28.8351 16.0982 28.8121L16.0597 29.3107C15.4259 29.2618 14.8059 29.1638 14.2035 29.0207L14.3191 28.5343C13.7291 28.3941 13.1567 28.2086 12.6059 27.9818L12.4155 28.4441C11.8323 28.2039 11.2723 27.9193 10.7397 27.5945L11.0001 27.1676C10.4855 26.8538 9.99754 26.5007 9.54047 26.1127L9.21686 26.4938C8.73859 26.0878 8.29275 25.645 7.88374 25.1698L8.26269 24.8436C7.8713 24.3889 7.51517 23.9034 7.19848 23.3912L6.77321 23.6542C6.44492 23.1232 6.15718 22.5648 5.9143 21.9831L6.3757 21.7905C6.14617 21.2408 5.95848 20.6695 5.81658 20.0804L5.33049 20.1975C5.18544 19.5955 5.0862 18.9757 5.03663 18.342L5.53511 18.303C5.51185 18.0057 5.5 17.7052 5.5 17.4017C5.5 17.0983 5.51185 16.7978 5.53511 16.5005L5.03663 16.4615C5.0862 15.8278 5.18544 15.208 5.33049 14.606L5.81658 14.7231C5.95848 14.134 6.14617 13.5627 6.3757 13.013L5.9143 12.8204C6.15718 12.2387 6.44492 11.6803 6.77321 11.1493L7.19848 11.4123C7.51517 10.9001 7.8713 10.4146 8.26269 9.95988L7.88375 9.63369C8.29275 9.15853 8.73859 8.71573 9.21686 8.30966L9.54047 8.69081C9.99754 8.30275 10.4855 7.94971 11.0001 7.63587L10.7397 7.20899C11.2723 6.88418 11.8323 6.59957 12.4155 6.3594L12.6059 6.82172C13.1567 6.59489 13.7291 6.40943 14.3191 6.26923L14.2035 5.78278C14.8059 5.63965 15.4259 5.54173 16.0597 5.49283L16.0982 5.99135C16.3957 5.96839 16.6964 5.9567 17 5.9567C17.3036 5.9567 17.6043 5.96839 17.9018 5.99135L17.9403 5.49283C18.5741 5.54173 19.1941 5.63965 19.7965 5.78277L19.6809 6.26923C20.2709 6.40943 20.8433 6.59489 21.3941 6.82172L21.5845 6.35939C22.1677 6.59957 22.7277 6.88418 23.2603 7.20899L22.9999 7.63587C23.5145 7.94971 24.0025 8.30275 24.4595 8.69081L24.7831 8.30966C25.2614 8.71573 25.7073 9.15853 26.1163 9.63369L25.7373 9.95988C26.1287 10.4146 26.4848 10.9001 26.8015 11.4123L27.2268 11.1493C27.5551 11.6803 27.8428 12.2387 28.0857 12.8204L27.6243 13.013C27.8538 13.5627 28.0415 14.134 28.1834 14.7231L28.6695 14.606Z"
                  stroke="#F90945"
                  stroke-dasharray="2 2"
                />
              </g>
              <g filter="url(#filter1_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="9"
                  ry="8.95879"
                  fill="#F90945"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_779_3535"
                  x="0"
                  y="0.456696"
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
                  y="3.44293"
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
        <div className="bg-timeline-card-bg-left col-start-6 col-end-10 my-4 mr-auto min-h-[183px] rounded-xl bg-contain bg-left bg-no-repeat p-4">
          <div className="bg-timeline-card-inner-bg-right mx-[25px] flex h-full flex-row-reverse items-center justify-between gap-2 rounded-full border bg-white bg-contain bg-right bg-no-repeat p-4 text-black shadow">
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
        </div>
      </div>

      <div className="flex flex-row-reverse md:contents">
        <div className="col-start-1 col-end-5 my-4 ml-auto min-h-[183px] rounded-xl bg-timeline-card-bg bg-contain bg-right bg-no-repeat px-10 pb-7 pt-5">
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
        </div>
        <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div className="flex h-full w-6 items-center justify-center">
            <div className="pointer-events-none h-full w-1 bg-primary"></div>
          </div>
          <div className="absolute top-1/2 -ml-[5px] -mt-5 h-6 w-6 rounded-full shadow">
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="12"
                  ry="11.945"
                  fill="#FBFBFB"
                />
                <path
                  d="M28.6695 14.606C28.8146 15.208 28.9138 15.8278 28.9634 16.4615L28.4649 16.5005C28.4881 16.7978 28.5 17.0983 28.5 17.4017C28.5 17.7052 28.4881 18.0057 28.4649 18.303L28.9634 18.342C28.9138 18.9757 28.8146 19.5955 28.6695 20.1975L28.1834 20.0804C28.0415 20.6695 27.8538 21.2408 27.6243 21.7905L28.0857 21.9831C27.8428 22.5648 27.5551 23.1232 27.2268 23.6542L26.8015 23.3912C26.4848 23.9034 26.1287 24.3889 25.7373 24.8436L26.1163 25.1698C25.7073 25.645 25.2614 26.0878 24.7831 26.4938L24.4595 26.1127C24.0025 26.5007 23.5145 26.8538 22.9999 27.1676L23.2603 27.5945C22.7277 27.9193 22.1677 28.2039 21.5845 28.4441L21.3941 27.9818C20.8433 28.2086 20.2709 28.3941 19.6809 28.5343L19.7965 29.0207C19.1941 29.1638 18.5741 29.2618 17.9403 29.3107L17.9018 28.8121C17.6043 28.8351 17.3036 28.8468 17 28.8468C16.6964 28.8468 16.3957 28.8351 16.0982 28.8121L16.0597 29.3107C15.4259 29.2618 14.8059 29.1638 14.2035 29.0207L14.3191 28.5343C13.7291 28.3941 13.1567 28.2086 12.6059 27.9818L12.4155 28.4441C11.8323 28.2039 11.2723 27.9193 10.7397 27.5945L11.0001 27.1676C10.4855 26.8538 9.99754 26.5007 9.54047 26.1127L9.21686 26.4938C8.73859 26.0878 8.29275 25.645 7.88374 25.1698L8.26269 24.8436C7.8713 24.3889 7.51517 23.9034 7.19848 23.3912L6.77321 23.6542C6.44492 23.1232 6.15718 22.5648 5.9143 21.9831L6.3757 21.7905C6.14617 21.2408 5.95848 20.6695 5.81658 20.0804L5.33049 20.1975C5.18544 19.5955 5.0862 18.9757 5.03663 18.342L5.53511 18.303C5.51185 18.0057 5.5 17.7052 5.5 17.4017C5.5 17.0983 5.51185 16.7978 5.53511 16.5005L5.03663 16.4615C5.0862 15.8278 5.18544 15.208 5.33049 14.606L5.81658 14.7231C5.95848 14.134 6.14617 13.5627 6.3757 13.013L5.9143 12.8204C6.15718 12.2387 6.44492 11.6803 6.77321 11.1493L7.19848 11.4123C7.51517 10.9001 7.8713 10.4146 8.26269 9.95988L7.88375 9.63369C8.29275 9.15853 8.73859 8.71573 9.21686 8.30966L9.54047 8.69081C9.99754 8.30275 10.4855 7.94971 11.0001 7.63587L10.7397 7.20899C11.2723 6.88418 11.8323 6.59957 12.4155 6.3594L12.6059 6.82172C13.1567 6.59489 13.7291 6.40943 14.3191 6.26923L14.2035 5.78278C14.8059 5.63965 15.4259 5.54173 16.0597 5.49283L16.0982 5.99135C16.3957 5.96839 16.6964 5.9567 17 5.9567C17.3036 5.9567 17.6043 5.96839 17.9018 5.99135L17.9403 5.49283C18.5741 5.54173 19.1941 5.63965 19.7965 5.78277L19.6809 6.26923C20.2709 6.40943 20.8433 6.59489 21.3941 6.82172L21.5845 6.35939C22.1677 6.59957 22.7277 6.88418 23.2603 7.20899L22.9999 7.63587C23.5145 7.94971 24.0025 8.30275 24.4595 8.69081L24.7831 8.30966C25.2614 8.71573 25.7073 9.15853 26.1163 9.63369L25.7373 9.95988C26.1287 10.4146 26.4848 10.9001 26.8015 11.4123L27.2268 11.1493C27.5551 11.6803 27.8428 12.2387 28.0857 12.8204L27.6243 13.013C27.8538 13.5627 28.0415 14.134 28.1834 14.7231L28.6695 14.606Z"
                  stroke="#F90945"
                  stroke-dasharray="2 2"
                />
              </g>
              <g filter="url(#filter1_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="9"
                  ry="8.95879"
                  fill="#F90945"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_779_3535"
                  x="0"
                  y="0.456696"
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
                  y="3.44293"
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
      </div>

      <div className="flex flex-row-reverse md:contents">
        <div className="col-start-1 col-end-5 my-4 ml-auto rounded-xl bg-blue-500 p-4 shadow-md">
          <h3 className="mb-1 text-lg font-semibold">Lorem ipsum</h3>
          <p className="text-justify leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
            quaerat?
          </p>
        </div>
        <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div className="flex h-full w-6 items-center justify-center">
            <div className="pointer-events-none h-full w-1 bg-primary"></div>
          </div>
          <div className="absolute top-1/2 -ml-[5px] -mt-3 h-6 w-6 rounded-full shadow">
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="12"
                  ry="11.945"
                  fill="#FBFBFB"
                />
                <path
                  d="M28.6695 14.606C28.8146 15.208 28.9138 15.8278 28.9634 16.4615L28.4649 16.5005C28.4881 16.7978 28.5 17.0983 28.5 17.4017C28.5 17.7052 28.4881 18.0057 28.4649 18.303L28.9634 18.342C28.9138 18.9757 28.8146 19.5955 28.6695 20.1975L28.1834 20.0804C28.0415 20.6695 27.8538 21.2408 27.6243 21.7905L28.0857 21.9831C27.8428 22.5648 27.5551 23.1232 27.2268 23.6542L26.8015 23.3912C26.4848 23.9034 26.1287 24.3889 25.7373 24.8436L26.1163 25.1698C25.7073 25.645 25.2614 26.0878 24.7831 26.4938L24.4595 26.1127C24.0025 26.5007 23.5145 26.8538 22.9999 27.1676L23.2603 27.5945C22.7277 27.9193 22.1677 28.2039 21.5845 28.4441L21.3941 27.9818C20.8433 28.2086 20.2709 28.3941 19.6809 28.5343L19.7965 29.0207C19.1941 29.1638 18.5741 29.2618 17.9403 29.3107L17.9018 28.8121C17.6043 28.8351 17.3036 28.8468 17 28.8468C16.6964 28.8468 16.3957 28.8351 16.0982 28.8121L16.0597 29.3107C15.4259 29.2618 14.8059 29.1638 14.2035 29.0207L14.3191 28.5343C13.7291 28.3941 13.1567 28.2086 12.6059 27.9818L12.4155 28.4441C11.8323 28.2039 11.2723 27.9193 10.7397 27.5945L11.0001 27.1676C10.4855 26.8538 9.99754 26.5007 9.54047 26.1127L9.21686 26.4938C8.73859 26.0878 8.29275 25.645 7.88374 25.1698L8.26269 24.8436C7.8713 24.3889 7.51517 23.9034 7.19848 23.3912L6.77321 23.6542C6.44492 23.1232 6.15718 22.5648 5.9143 21.9831L6.3757 21.7905C6.14617 21.2408 5.95848 20.6695 5.81658 20.0804L5.33049 20.1975C5.18544 19.5955 5.0862 18.9757 5.03663 18.342L5.53511 18.303C5.51185 18.0057 5.5 17.7052 5.5 17.4017C5.5 17.0983 5.51185 16.7978 5.53511 16.5005L5.03663 16.4615C5.0862 15.8278 5.18544 15.208 5.33049 14.606L5.81658 14.7231C5.95848 14.134 6.14617 13.5627 6.3757 13.013L5.9143 12.8204C6.15718 12.2387 6.44492 11.6803 6.77321 11.1493L7.19848 11.4123C7.51517 10.9001 7.8713 10.4146 8.26269 9.95988L7.88375 9.63369C8.29275 9.15853 8.73859 8.71573 9.21686 8.30966L9.54047 8.69081C9.99754 8.30275 10.4855 7.94971 11.0001 7.63587L10.7397 7.20899C11.2723 6.88418 11.8323 6.59957 12.4155 6.3594L12.6059 6.82172C13.1567 6.59489 13.7291 6.40943 14.3191 6.26923L14.2035 5.78278C14.8059 5.63965 15.4259 5.54173 16.0597 5.49283L16.0982 5.99135C16.3957 5.96839 16.6964 5.9567 17 5.9567C17.3036 5.9567 17.6043 5.96839 17.9018 5.99135L17.9403 5.49283C18.5741 5.54173 19.1941 5.63965 19.7965 5.78277L19.6809 6.26923C20.2709 6.40943 20.8433 6.59489 21.3941 6.82172L21.5845 6.35939C22.1677 6.59957 22.7277 6.88418 23.2603 7.20899L22.9999 7.63587C23.5145 7.94971 24.0025 8.30275 24.4595 8.69081L24.7831 8.30966C25.2614 8.71573 25.7073 9.15853 26.1163 9.63369L25.7373 9.95988C26.1287 10.4146 26.4848 10.9001 26.8015 11.4123L27.2268 11.1493C27.5551 11.6803 27.8428 12.2387 28.0857 12.8204L27.6243 13.013C27.8538 13.5627 28.0415 14.134 28.1834 14.7231L28.6695 14.606Z"
                  stroke="#F90945"
                  stroke-dasharray="2 2"
                />
              </g>
              <g filter="url(#filter1_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="9"
                  ry="8.95879"
                  fill="#F90945"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_779_3535"
                  x="0"
                  y="0.456696"
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
                  y="3.44293"
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
      </div>

      <div className="flex md:contents">
        <div className="relative col-start-5 col-end-6 mr-10 md:mx-auto">
          <div className="flex h-full w-6 items-center justify-center">
            <div className="pointer-events-none h-full w-1 bg-primary"></div>
          </div>
          <div className="absolute top-1/2 -ml-[5px] -mt-3 h-6 w-6 rounded-full shadow">
            <svg
              width="34"
              height="35"
              viewBox="0 0 34 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="12"
                  ry="11.945"
                  fill="#FBFBFB"
                />
                <path
                  d="M28.6695 14.606C28.8146 15.208 28.9138 15.8278 28.9634 16.4615L28.4649 16.5005C28.4881 16.7978 28.5 17.0983 28.5 17.4017C28.5 17.7052 28.4881 18.0057 28.4649 18.303L28.9634 18.342C28.9138 18.9757 28.8146 19.5955 28.6695 20.1975L28.1834 20.0804C28.0415 20.6695 27.8538 21.2408 27.6243 21.7905L28.0857 21.9831C27.8428 22.5648 27.5551 23.1232 27.2268 23.6542L26.8015 23.3912C26.4848 23.9034 26.1287 24.3889 25.7373 24.8436L26.1163 25.1698C25.7073 25.645 25.2614 26.0878 24.7831 26.4938L24.4595 26.1127C24.0025 26.5007 23.5145 26.8538 22.9999 27.1676L23.2603 27.5945C22.7277 27.9193 22.1677 28.2039 21.5845 28.4441L21.3941 27.9818C20.8433 28.2086 20.2709 28.3941 19.6809 28.5343L19.7965 29.0207C19.1941 29.1638 18.5741 29.2618 17.9403 29.3107L17.9018 28.8121C17.6043 28.8351 17.3036 28.8468 17 28.8468C16.6964 28.8468 16.3957 28.8351 16.0982 28.8121L16.0597 29.3107C15.4259 29.2618 14.8059 29.1638 14.2035 29.0207L14.3191 28.5343C13.7291 28.3941 13.1567 28.2086 12.6059 27.9818L12.4155 28.4441C11.8323 28.2039 11.2723 27.9193 10.7397 27.5945L11.0001 27.1676C10.4855 26.8538 9.99754 26.5007 9.54047 26.1127L9.21686 26.4938C8.73859 26.0878 8.29275 25.645 7.88374 25.1698L8.26269 24.8436C7.8713 24.3889 7.51517 23.9034 7.19848 23.3912L6.77321 23.6542C6.44492 23.1232 6.15718 22.5648 5.9143 21.9831L6.3757 21.7905C6.14617 21.2408 5.95848 20.6695 5.81658 20.0804L5.33049 20.1975C5.18544 19.5955 5.0862 18.9757 5.03663 18.342L5.53511 18.303C5.51185 18.0057 5.5 17.7052 5.5 17.4017C5.5 17.0983 5.51185 16.7978 5.53511 16.5005L5.03663 16.4615C5.0862 15.8278 5.18544 15.208 5.33049 14.606L5.81658 14.7231C5.95848 14.134 6.14617 13.5627 6.3757 13.013L5.9143 12.8204C6.15718 12.2387 6.44492 11.6803 6.77321 11.1493L7.19848 11.4123C7.51517 10.9001 7.8713 10.4146 8.26269 9.95988L7.88375 9.63369C8.29275 9.15853 8.73859 8.71573 9.21686 8.30966L9.54047 8.69081C9.99754 8.30275 10.4855 7.94971 11.0001 7.63587L10.7397 7.20899C11.2723 6.88418 11.8323 6.59957 12.4155 6.3594L12.6059 6.82172C13.1567 6.59489 13.7291 6.40943 14.3191 6.26923L14.2035 5.78278C14.8059 5.63965 15.4259 5.54173 16.0597 5.49283L16.0982 5.99135C16.3957 5.96839 16.6964 5.9567 17 5.9567C17.3036 5.9567 17.6043 5.96839 17.9018 5.99135L17.9403 5.49283C18.5741 5.54173 19.1941 5.63965 19.7965 5.78277L19.6809 6.26923C20.2709 6.40943 20.8433 6.59489 21.3941 6.82172L21.5845 6.35939C22.1677 6.59957 22.7277 6.88418 23.2603 7.20899L22.9999 7.63587C23.5145 7.94971 24.0025 8.30275 24.4595 8.69081L24.7831 8.30966C25.2614 8.71573 25.7073 9.15853 26.1163 9.63369L25.7373 9.95988C26.1287 10.4146 26.4848 10.9001 26.8015 11.4123L27.2268 11.1493C27.5551 11.6803 27.8428 12.2387 28.0857 12.8204L27.6243 13.013C27.8538 13.5627 28.0415 14.134 28.1834 14.7231L28.6695 14.606Z"
                  stroke="#F90945"
                  stroke-dasharray="2 2"
                />
              </g>
              <g filter="url(#filter1_d_779_3535)">
                <ellipse
                  cx="17"
                  cy="17.4017"
                  rx="9"
                  ry="8.95879"
                  fill="#F90945"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_779_3535"
                  x="0"
                  y="0.456696"
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
                  y="3.44293"
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
        <div className="col-start-6 col-end-10 my-4 mr-auto rounded-xl bg-blue-500 p-4 shadow-md">
          <h3 className="mb-1 text-lg font-semibold">Lorem ipsum</h3>
          <p className="text-justify leading-tight">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae,
            facilis.
          </p>
        </div>
      </div>
    </div>
  );
}
