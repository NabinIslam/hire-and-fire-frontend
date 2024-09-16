"use client";

import VerticalTimeline from "./VerticalTimeline";

// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";

const timelineEvents = [
  {
    title: "Event 1",
    description: "Description for event 1",
    date: "Jan 1, 2024",
  },
  {
    title: "Event 2",
    description: "Description for event 2",
    date: "Feb 14, 2024",
  },
  {
    title: "Event 3",
    description: "Description for event 3",
    date: "Mar 30, 2024",
  },
  {
    title: "Event 4",
    description: "Description for event 4",
    date: "Apr 15, 2024",
  },
];

const PermanentRecruitmentProcess = () => {
  return (
    <section className="py-[50px]">
      <div className="container min-h-[550px] space-y-8">
        <div className="mx-auto flex h-[56px] max-w-[440px] items-center justify-center rounded-full border-2 border-primary text-2xl font-medium text-primary">
          Permanent Recruitment Process
        </div>
        <div className="mx-auto mb-16 mt-5 max-w-[607px]">
          <h2 className="text-center text-5xl font-semibold">
            Our Step-by-Step Permanent Recruitment Process
          </h2>
        </div>

        <div>
          <VerticalTimeline events={timelineEvents} />
        </div>

        {/* <div>
          <VerticalTimeline lineColor="#F90945" animate>
            <VerticalTimelineElement
              iconStyle={{ backgroundImage: "none" }}
              visible
              
              contentStyle={{ background: "#F90945", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #F90945",
              }}
              icon={
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
              }
            >
              <h3 className="vertical-timeline-element-title">
                Creative Director
              </h3>
              <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible
              className="vertical-timeline-element--work"
              icon={
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
              }
            >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible
              className="vertical-timeline-element--work"
              icon={
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
              }
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                Los Angeles, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible
              className="vertical-timeline-element--work"
              icon={
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
              }
            >
              <h3 className="vertical-timeline-element-title">Web Designer</h3>
              <h4 className="vertical-timeline-element-subtitle">
                San Francisco, CA
              </h4>
              <p>User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible
              className="vertical-timeline-element--education"
              icon={
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
              }
            >
              <h3 className="vertical-timeline-element-title">
                Content Marketing for Web, Mobile and Social Media
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Online Course
              </h4>
              <p>Strategy, Social Media</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible
              className="vertical-timeline-element--education"
              icon={
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
              }
            >
              <h3 className="vertical-timeline-element-title">
                Agile Development Scrum Master
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Certification
              </h4>
              <p>Creative Direction, User Experience, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible
              className="vertical-timeline-element--education"
              icon={
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
              }
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h4>
              <p>Creative Direction, Visual Design</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              visible
              icon={
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
              }
            />
          </VerticalTimeline>
        </div> */}
      </div>
    </section>
  );
};

export default PermanentRecruitmentProcess;
