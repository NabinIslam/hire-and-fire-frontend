"use client";

import { HiArrowLongDown, HiArrowLongRight } from "react-icons/hi2";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkSteps = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.2, // Trigger when 10% of the component is in view
  });

  return (
    <section className="pb-[100px] pt-[50px]">
      <h6 className="text-center text-2xl font-medium text-primary">
        Work Steps
      </h6>
      <h2 className="mt-[20px] text-center text-4xl font-semibold lg:text-5xl">
        How It Works?
      </h2>
      <div className="container mt-[60px] flex flex-col items-center justify-between gap-5 xl:flex-row">
        {/* step card start*/}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          className="group relative min-h-[270px] w-[350px] shadow-lg duration-200 hover:scale-105 border"
        >
          <div className="m-5 space-y-4">
            <div className="mx-auto flex size-[80px] items-center justify-center rounded-full bg-primary duration-200 group-hover:bg-secondary">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.8668 1.7959H18.0927C15.6302 1.7959 13.6269 3.79882 13.6269 6.26215V14.193H6.12893C3.6681 14.1934 1.66602 16.1963 1.66602 18.6571V28.5738C1.66602 31.0347 3.6681 33.038 6.12893 33.038H6.82768V36.1263C6.82768 36.9651 7.30518 37.6959 8.07393 38.0305C8.34143 38.1472 8.62477 38.2042 8.9056 38.2042C9.43297 38.2041 9.94074 38.0043 10.3268 37.6451L15.2314 33.038H21.9077C24.3694 33.038 26.3718 31.0351 26.3718 28.5738V22.1421L29.6752 25.2367C29.9697 25.5146 30.3394 25.6999 30.7382 25.7695C31.1371 25.8391 31.5477 25.7901 31.9189 25.6284C32.2904 25.4677 32.6068 25.2018 32.8289 24.8634C33.051 24.525 33.1692 24.129 33.1689 23.7242V20.6446H33.8673C36.3293 20.6451 38.3327 18.6417 38.3327 16.1788V6.26215C38.3327 3.79923 36.3293 1.7959 33.8668 1.7959ZM21.9077 30.7838H14.7856C14.4989 30.7841 14.223 30.8934 14.0139 31.0896L9.08185 35.7234V31.9109C9.0819 31.7629 9.05279 31.6163 8.99617 31.4795C8.93954 31.3428 8.85653 31.2185 8.75186 31.1138C8.64719 31.0091 8.52292 30.9261 8.38615 30.8695C8.24938 30.8129 8.10279 30.7838 7.95477 30.7838H6.12893C5.54312 30.7832 4.98151 30.5501 4.5674 30.1357C4.15329 29.7214 3.92051 29.1596 3.92018 28.5738V18.6571C3.92051 18.0713 4.15329 17.5096 4.5674 17.0952C4.98151 16.6809 5.54312 16.4478 6.12893 16.4471H13.6406C13.7806 18.7851 15.721 20.6451 18.0927 20.6451H24.1173V28.5738C24.1169 29.1598 23.884 29.7216 23.4698 30.136C23.0555 30.5504 22.4936 30.7834 21.9077 30.7838ZM36.0785 16.1788C36.0779 16.7652 35.8446 17.3274 35.43 17.7421C35.0154 18.1568 34.4533 18.3901 33.8668 18.3909H32.0414C31.8934 18.3908 31.7468 18.42 31.6101 18.4766C31.4733 18.5332 31.349 18.6162 31.2443 18.7209C31.1397 18.8256 31.0567 18.9498 31 19.0866C30.9434 19.2234 30.9143 19.37 30.9144 19.518V23.3109L26.0218 18.7192L25.9985 18.6971L25.9956 18.7005L25.9898 18.6951C25.7808 18.4995 25.5051 18.3909 25.2189 18.3913H18.0927C17.5063 18.3905 16.9441 18.1572 16.5295 17.7425C16.1149 17.3278 15.8817 16.7656 15.881 16.1792V16.1771H15.8893L15.881 6.26298C15.8817 5.67658 16.1149 5.11437 16.5295 4.69968C16.9441 4.28499 17.5063 4.05167 18.0927 4.0509H33.8668C34.4533 4.05167 35.0154 4.28499 35.43 4.69968C35.8446 5.11437 36.0779 5.67658 36.0785 6.26298V16.1788Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M30.4872 7.77002H21.4713C21.1724 7.77002 20.8857 7.88877 20.6744 8.10013C20.463 8.3115 20.3442 8.59818 20.3442 8.8971C20.3442 9.19602 20.463 9.4827 20.6744 9.69407C20.8857 9.90544 21.1724 10.0242 21.4713 10.0242H30.4876C30.6356 10.0242 30.7821 9.99498 30.9189 9.93831C31.0556 9.88165 31.1798 9.7986 31.2845 9.69392C31.3891 9.58924 31.4721 9.46498 31.5287 9.32823C31.5854 9.19147 31.6145 9.04491 31.6145 8.89689C31.6144 8.74888 31.5852 8.60233 31.5286 8.46559C31.4719 8.32886 31.3889 8.20463 31.2842 8.09999C31.1795 7.99535 31.0553 7.91235 30.9185 7.85573C30.7817 7.79912 30.6352 7.76999 30.4872 7.77002ZM30.4872 12.2779H21.4713C21.1724 12.2779 20.8857 12.3967 20.6744 12.6081C20.463 12.8194 20.3442 13.1061 20.3442 13.405C20.3442 13.7039 20.463 13.9906 20.6744 14.202C20.8857 14.4134 21.1724 14.5321 21.4713 14.5321H30.4876C30.6356 14.5321 30.7821 14.5029 30.9189 14.4462C31.0556 14.3896 31.1798 14.3065 31.2845 14.2018C31.3891 14.0972 31.4721 13.9729 31.5287 13.8361C31.5854 13.6994 31.6145 13.5528 31.6145 13.4048C31.6144 13.2568 31.5852 13.1102 31.5286 12.9735C31.4719 12.8368 31.3889 12.7125 31.2842 12.6079C31.1795 12.5033 31.0553 12.4203 30.9185 12.3637C30.7817 12.307 30.6352 12.2779 30.4872 12.2779ZM9.52049 22.5159C9.38549 22.56 9.27258 22.65 9.16008 22.7404C8.95716 22.965 8.82174 23.26 8.82174 23.5525C8.82174 23.845 8.95674 24.1379 9.16008 24.3404C9.38549 24.565 9.65591 24.6796 9.94883 24.6796C10.1063 24.6796 10.2647 24.6334 10.3997 24.5892C10.5351 24.5429 10.6476 24.4525 10.7601 24.3404C10.963 24.1379 11.0984 23.845 11.0984 23.5525C11.0984 23.26 10.963 22.9646 10.7601 22.7404C10.4447 22.4479 9.94883 22.3354 9.52049 22.5159ZM14.9076 22.5159C14.4792 22.3354 13.9834 22.4475 13.668 22.7404C13.4651 22.965 13.3526 23.26 13.3526 23.5525C13.3526 23.845 13.4651 24.1379 13.668 24.3404C13.7805 24.4525 13.8934 24.5429 14.0284 24.5892C14.1863 24.6334 14.3213 24.6796 14.4792 24.6796C14.7726 24.6796 15.043 24.565 15.2684 24.3404C15.4713 24.1379 15.6067 23.845 15.6067 23.5525C15.6067 23.26 15.4713 22.9646 15.2684 22.7404C15.1555 22.6504 15.043 22.56 14.9076 22.5159ZM19.4159 22.5159C19.1455 22.4013 18.8297 22.4013 18.5367 22.5159C18.4017 22.56 18.2888 22.65 18.1763 22.7404C17.9734 22.965 17.838 23.26 17.838 23.5525C17.838 23.845 17.973 24.1379 18.1763 24.3404C18.4017 24.565 18.6722 24.6796 18.9655 24.6796C19.123 24.6796 19.2809 24.6334 19.4163 24.5892C19.5517 24.5429 19.6642 24.4525 19.7772 24.3404C19.9801 24.1379 20.0926 23.845 20.0926 23.5525C20.0926 23.26 19.9797 22.9646 19.7772 22.7404C19.6638 22.6504 19.5513 22.56 19.4159 22.5159ZM7.70716 11.1513H9.96133C10.2602 11.1513 10.5469 11.0325 10.7583 10.8212C10.9697 10.6098 11.0884 10.3231 11.0884 10.0242C11.0884 9.72527 10.9697 9.43859 10.7583 9.22722C10.5469 9.01585 10.2602 8.8971 9.96133 8.8971H7.70716C7.40824 8.8971 7.12156 9.01585 6.91019 9.22722C6.69882 9.43859 6.58008 9.72527 6.58008 10.0242C6.58008 10.3231 6.69882 10.6098 6.91019 10.8212C7.12156 11.0325 7.40824 11.1513 7.70716 11.1513ZM32.5013 29.1834H30.2472C29.9482 29.1834 29.6616 29.3021 29.4502 29.5135C29.2388 29.7248 29.1201 30.0115 29.1201 30.3104C29.1201 30.6094 29.2388 30.896 29.4502 31.1074C29.6616 31.3188 29.9482 31.4375 30.2472 31.4375H32.5013C32.8002 31.4375 33.0869 31.3188 33.2983 31.1074C33.5097 30.896 33.6284 30.6094 33.6284 30.3104C33.6284 30.0115 33.5097 29.7248 33.2983 29.5135C33.0869 29.3021 32.8002 29.1834 32.5013 29.1834Z"
                  fill="#FBFBFB"
                />
              </svg>
            </div>
            <h5 className="text-center text-xl font-medium">
              Tell Us <br /> Your Need
            </h5>
            <p className="text-center text-sm font-medium">
              Share your specific requirements and job descriptions.
            </p>
          </div>

          <div className="absolute left-0 top-0 size-[80px] border-r-[80px] border-t-[80px] border-r-transparent border-t-primary duration-200 group-hover:border-t-secondary"></div>
          <span className="absolute left-[15px] top-[10px] z-50 text-xl text-white">
            01
          </span>
        </motion.div>

        {/* step card end*/}

        <HiArrowLongDown className="text-4xl lg:hidden" />
        <HiArrowLongRight className="hidden text-4xl lg:inline" />

        {/* step card start*/}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="group relative min-h-[270px] w-[350px] shadow-lg duration-200 hover:scale-105 border"
        >
          <div className="m-5 space-y-4">
            <div className="mx-auto flex size-[80px] items-center justify-center rounded-full bg-primary duration-200 group-hover:bg-secondary">
              <svg
                width="34"
                height="40"
                viewBox="0 0 34 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.77102 13.2758C1.62578 13.1304 1.42422 13.0469 1.21875 13.0469C1.01328 13.0469 0.811797 13.1305 0.666406 13.2758C0.521016 13.4211 0.4375 13.6227 0.4375 13.8281C0.4375 14.0336 0.521016 14.2352 0.666406 14.3804C0.811719 14.5258 1.01328 14.6094 1.21875 14.6094C1.42422 14.6094 1.62578 14.5258 1.77102 14.3804C1.91641 14.2352 2 14.0336 2 13.8281C2 13.6227 1.91641 13.4211 1.77102 13.2758ZM31.2188 0H15.4115C14.9801 0 14.6302 0.349844 14.6302 0.78125C14.6302 1.21266 14.9801 1.5625 15.4115 1.5625H31.2188C31.6495 1.5625 32 1.91297 32 2.34375V37.6562C32 38.087 31.6495 38.4375 31.2188 38.4375H2.78125C2.35047 38.4375 2 38.087 2 37.6562V16.7448C2 16.3134 1.65016 15.9635 1.21875 15.9635C0.787344 15.9635 0.4375 16.3134 0.4375 16.7448V37.6562C0.4375 38.9486 1.48891 40 2.78125 40H31.2188C32.5111 40 33.5625 38.9486 33.5625 37.6562V2.34375C33.5625 1.05141 32.5111 0 31.2188 0Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M17.0007 3.125C16.4691 3.125 15.9349 3.16562 15.4129 3.24562C14.9864 3.31109 14.6937 3.70977 14.759 4.13625C14.8244 4.56273 15.2233 4.85508 15.6497 4.79008C16.0968 4.72175 16.5484 4.68745 17.0007 4.6875C21.8686 4.6875 25.8289 8.64781 25.8289 13.5157C25.8289 15.6774 25.0475 17.6597 23.7528 19.1962C23.1799 18.211 22.3974 17.3612 21.4476 16.7021C20.8985 16.3209 20.3025 16.012 19.6744 15.7831C20.3859 15.0876 20.8288 14.1183 20.8288 13.047V12.2853C20.8288 10.1744 19.1115 8.45711 17.0007 8.45711C14.8898 8.45711 13.1726 10.1744 13.1726 12.2853V13.047C13.1726 14.1183 13.6154 15.0876 14.327 15.7831C13.6989 16.012 13.1029 16.3209 12.5537 16.7021C11.5994 17.3645 10.8138 18.219 10.2402 19.2101C9.25373 18.0378 8.5642 16.5959 8.29443 14.9874C8.22311 14.562 7.8199 14.275 7.39475 14.3462C6.9692 14.4175 6.68209 14.8203 6.75342 15.2459C7.15514 17.6412 8.39865 19.8337 10.255 21.4194C12.1324 23.0232 14.5281 23.9065 17.0006 23.9065C22.7301 23.9065 27.3913 19.2452 27.3913 13.5158C27.3913 7.78633 22.7301 3.125 17.0007 3.125ZM14.7351 12.2852C14.7351 11.0359 15.7515 10.0195 17.0007 10.0195C18.2499 10.0195 19.2663 11.0359 19.2663 12.2852V13.047C19.2663 14.2962 18.2499 15.3126 17.0007 15.3126C15.7515 15.3126 14.7351 14.2962 14.7351 13.047V12.2852ZM17.0007 22.3439C14.8855 22.3439 12.9301 21.6053 11.3996 20.3531C12.4487 18.2241 14.5933 16.8751 17.0007 16.8751C19.4031 16.8751 21.5437 18.2185 22.5951 20.3398C21.0711 21.5915 19.1221 22.3439 17.0007 22.3439ZM24.2161 31.0939H13.1223C12.6909 31.0939 12.3411 31.4438 12.3411 31.8752C12.3411 32.3066 12.6909 32.6564 13.1223 32.6564H24.2161C24.6476 32.6564 24.9973 32.3066 24.9973 31.8752C24.9973 31.4438 24.6475 31.0939 24.2161 31.0939ZM10.3374 26.9477C10.1921 26.8023 9.99053 26.7188 9.78506 26.7188C9.57959 26.7188 9.37803 26.8023 9.23272 26.9477C9.0874 27.093 9.00381 27.2945 9.00381 27.5C9.00438 27.7071 9.08665 27.9055 9.23272 28.0523C9.37803 28.1977 9.57959 28.2812 9.78506 28.2812C9.99053 28.2812 10.1921 28.1977 10.3374 28.0523C10.4835 27.907 10.5663 27.7055 10.5663 27.5C10.5663 27.2945 10.4835 27.093 10.3374 26.9477ZM10.3374 31.3227C10.1907 31.1765 9.99215 31.0943 9.78506 31.0938C9.57959 31.0938 9.37803 31.1773 9.23272 31.3227C9.0874 31.468 9.00381 31.6695 9.00381 31.875C9.00438 32.0821 9.08665 32.2805 9.23272 32.4273C9.37803 32.5727 9.57959 32.6562 9.78506 32.6562C9.99053 32.6562 10.1921 32.5727 10.3374 32.4273C10.4838 32.2808 10.5661 32.0821 10.5663 31.875C10.5663 31.6695 10.4835 31.468 10.3374 31.3227ZM24.2161 26.7189H13.1223C12.6909 26.7189 12.3411 27.0688 12.3411 27.5002C12.3411 27.9316 12.6909 28.2814 13.1223 28.2814H24.2161C24.6476 28.2814 24.9973 27.9316 24.9973 27.5002C24.9973 27.0688 24.6475 26.7189 24.2161 26.7189ZM9.62772 4.50227C9.32248 4.19727 8.82795 4.19727 8.52279 4.50227L5.97857 7.04648L5.10912 6.17703C4.80389 5.87203 4.30936 5.87203 4.0042 6.17703C3.69912 6.48219 3.69912 6.97688 4.0042 7.28195L5.42607 8.70383C5.49854 8.77648 5.58465 8.83409 5.67945 8.87336C5.77425 8.91263 5.87588 8.93278 5.9785 8.93266C6.1785 8.93266 6.37834 8.85633 6.531 8.70391L9.62772 5.60719C9.93279 5.30203 9.93279 4.80734 9.62772 4.50227Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M6.84375 0C3.31133 0 0.4375 2.87383 0.4375 6.40625C0.4375 9.93867 3.31133 12.8125 6.84375 12.8125C10.3762 12.8125 13.25 9.93867 13.25 6.40625C13.25 2.87383 10.3762 0 6.84375 0ZM6.84375 11.25C4.17289 11.25 2 9.07711 2 6.40625C2 3.73539 4.17289 1.5625 6.84375 1.5625C9.51461 1.5625 11.6875 3.73539 11.6875 6.40625C11.6875 9.07711 9.51461 11.25 6.84375 11.25Z"
                  fill="#FBFBFB"
                />
              </svg>
            </div>
            <h5 className="text-center text-xl font-medium">
              View Matched <br />
              Candidates
            </h5>
            <p className="text-center text-sm font-medium">
              Review profiles of candidates that match your needs.
            </p>
          </div>
          {/* badge */}
          <div className="absolute left-0 top-0 size-[80px] border-r-[80px] border-t-[80px] border-r-transparent border-t-primary duration-200 group-hover:border-t-secondary"></div>
          <span className="absolute left-[15px] top-[10px] z-50 text-xl text-white">
            02
          </span>
        </motion.div>

        {/* step card end*/}

        <HiArrowLongDown className="text-4xl lg:hidden" />
        <HiArrowLongRight className="hidden text-4xl lg:inline" />

        <svg
          className="hidden"
          width="51"
          height="16"
          viewBox="0 0 51 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z"
            fill="black"
          />
        </svg>

        {/* step card start*/}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="group relative h-[270px] w-[350px] shadow-lg duration-200 hover:scale-105 border"
        >
          <div className="m-5 space-y-4">
            <div className="mx-auto flex size-[80px] items-center justify-center rounded-full bg-primary duration-200 group-hover:bg-secondary">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.2265 11.5029C18.7096 11.8979 19.324 12.1361 20.0015 12.1361C20.679 12.1361 21.2934 11.8986 21.7765 11.5029C22.2244 11.1363 22.548 10.6403 22.7031 10.0826C22.8581 9.52499 22.8371 8.93306 22.6427 8.38786C22.4484 7.84267 22.0903 7.37085 21.6175 7.03701C21.1447 6.70317 20.5803 6.52363 20.0015 6.52295C19.4227 6.52363 18.8583 6.70317 18.3854 7.03701C17.9126 7.37085 17.5545 7.84267 17.3602 8.38786C17.1659 8.93306 17.1448 9.52499 17.2999 10.0826C17.455 10.6403 17.7786 11.1363 18.2265 11.5029Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M17.4795 17.6999C17.4795 17.1786 17.7052 16.6899 18.1002 16.3574C18.2954 16.194 18.524 16.0752 18.7699 16.0091C19.0157 15.9431 19.2731 15.9314 19.5239 15.9749C20.352 16.1124 20.9727 16.8843 20.9727 17.7624V17.9311H25.012V15.178C25.0121 14.7777 24.9333 14.3813 24.7802 14.0114C24.627 13.6416 24.4025 13.3055 24.1194 13.0225C23.8364 12.7394 23.5003 12.5149 23.1305 12.3617C22.7606 12.2086 22.3642 12.1298 21.9639 12.1299H21.7758C21.2927 12.5255 20.6783 12.7636 20.0008 12.7636C19.3233 12.7636 18.7089 12.5255 18.2258 12.1299H18.0383C17.6379 12.1297 17.2415 12.2084 16.8715 12.3616C16.5016 12.5147 16.1655 12.7392 15.8823 13.0223C15.5992 13.3053 15.3746 13.6414 15.2215 14.0113C15.0683 14.3812 14.9895 14.7776 14.9895 15.178V17.9318H17.4795V17.6999ZM8.79954 13.9299C9.3341 13.9314 9.85267 13.7476 10.267 13.4099C10.6362 13.107 10.9028 12.6975 11.0303 12.2374C11.1578 11.7772 11.14 11.2889 10.9794 10.8392C10.8188 10.3896 10.5231 10.0005 10.1329 9.7253C9.74274 9.45009 9.27703 9.30216 8.79954 9.30176C8.18495 9.3011 7.59525 9.54452 7.16008 9.97851C6.72492 10.4125 6.4799 11.0015 6.47891 11.6161C6.47907 11.9205 6.53926 12.2219 6.65602 12.503C6.77279 12.7841 6.94384 13.0394 7.15939 13.2543C7.37494 13.4692 7.63075 13.6395 7.91218 13.7554C8.19362 13.8713 8.49516 13.9306 8.79954 13.9299ZM10.4177 14.0368H10.267C9.86579 14.363 9.35766 14.5574 8.79954 14.5574C8.24141 14.5574 7.73328 14.363 7.33203 14.0368H7.17516C6.84472 14.0362 6.51742 14.1008 6.21203 14.227C5.90664 14.3532 5.62916 14.5384 5.3955 14.7721C5.16185 15.0058 4.97662 15.2832 4.85043 15.5886C4.72424 15.894 4.65958 16.2213 4.66016 16.5518V18.8224H12.9327V16.5518C12.9332 16.2213 12.8686 15.894 12.7424 15.5886C12.6162 15.2832 12.431 15.0058 12.1973 14.7721C11.9637 14.5384 11.6862 14.3532 11.3808 14.227C11.0754 14.1008 10.7481 14.0362 10.4177 14.0368ZM31.202 13.9299C31.5065 13.9306 31.8081 13.8713 32.0895 13.7553C32.371 13.6394 32.6268 13.469 32.8424 13.254C33.058 13.0391 33.229 12.7837 33.3457 12.5025C33.4625 12.2214 33.5226 11.9199 33.5227 11.6155C33.5086 11.0102 33.2583 10.4344 32.8252 10.0113C32.3921 9.58811 31.8106 9.35121 31.2052 9.35121C30.5997 9.35121 30.0182 9.58811 29.5851 10.0113C29.1521 10.4344 28.9017 11.0102 28.8877 11.6155C28.8877 12.3374 29.2202 12.983 29.7345 13.4093C30.1488 13.7472 30.6674 13.9312 31.202 13.9299ZM32.8264 14.0368H32.6702C32.2683 14.363 31.7602 14.5574 31.202 14.5574C30.6439 14.5574 30.1358 14.363 29.7345 14.0368H29.5845C29.254 14.0361 28.9267 14.1007 28.6212 14.2268C28.3157 14.353 28.0382 14.5382 27.8045 14.7719C27.5707 15.0055 27.3855 15.283 27.2592 15.5885C27.133 15.8939 27.0683 16.2213 27.0689 16.5518V18.8224H35.3414V16.5518C35.342 16.2213 35.2773 15.894 35.1511 15.5886C35.025 15.2832 34.8397 15.0058 34.6061 14.7721C34.3724 14.5384 34.0949 14.3532 33.7895 14.227C33.4841 14.1008 33.1568 14.0362 32.8264 14.0368ZM18.7839 32.8499C18.7839 33.1955 19.0652 33.4768 19.4114 33.4768H25.802C26.1483 33.4768 26.4295 33.1955 26.4295 32.8493V31.998H18.7839V32.8499Z"
                  fill="#FBFBFB"
                />
                <path
                  d="M25.9343 21.7602C25.8037 21.7612 25.6789 21.8139 25.5871 21.9069C25.4954 21.9998 25.4443 22.1253 25.4449 22.2558V24.4133C25.4398 24.5763 25.3714 24.7308 25.2544 24.8442C25.1373 24.9576 24.9807 25.021 24.8177 25.021C24.6547 25.021 24.4981 24.9576 24.3811 24.8442C24.264 24.7308 24.1957 24.5763 24.1905 24.4133V21.5977C24.1842 21.4714 24.1295 21.3523 24.0379 21.2652C23.9462 21.178 23.8245 21.1294 23.6981 21.1294C23.5716 21.1294 23.4499 21.178 23.3582 21.2652C23.2666 21.3523 23.2119 21.4714 23.2055 21.5977V24.4133C23.1983 24.5748 23.1291 24.7272 23.0124 24.8388C22.8956 24.9505 22.7403 25.0128 22.5787 25.0128C22.4171 25.0128 22.2618 24.9505 22.145 24.8388C22.0282 24.7272 21.959 24.5748 21.9518 24.4133V20.9452C21.9516 20.8155 21.9 20.6911 21.8083 20.5994C21.7165 20.5076 21.5922 20.456 21.4624 20.4558C21.3373 20.4528 21.2159 20.4989 21.1244 20.5843C21.0329 20.6698 20.9786 20.7877 20.9731 20.9127V24.4133C20.9679 24.5763 20.8996 24.7308 20.7825 24.8442C20.6655 24.9576 20.5089 25.021 20.3459 25.021C20.1829 25.021 20.0263 24.9576 19.9092 24.8442C19.7922 24.7308 19.7238 24.5763 19.7187 24.4133V17.764C19.7187 17.4915 19.5399 17.2477 19.3124 17.2083C19.2417 17.1957 19.169 17.1987 19.0995 17.2173C19.0301 17.2359 18.9655 17.2695 18.9105 17.3158C18.8553 17.3627 18.8108 17.421 18.7804 17.4867C18.75 17.5524 18.7342 17.624 18.7343 17.6965V26.5402C18.7342 26.6597 18.7001 26.7766 18.6358 26.8773C18.5715 26.978 18.4797 27.0582 18.3714 27.1085C18.263 27.1588 18.1426 27.1771 18.0241 27.1613C17.9057 27.1454 17.7943 27.096 17.703 27.019L15.4049 25.0833C15.3447 25.0317 15.2741 24.9934 15.1979 24.9712C15.1217 24.949 15.0416 24.9434 14.963 24.9546C14.8845 24.9648 14.809 24.9916 14.7415 25.0332C14.6741 25.0748 14.6162 25.1302 14.5718 25.1958C14.5023 25.2956 14.467 25.4152 14.471 25.5368C14.4751 25.6583 14.5183 25.7753 14.5943 25.8702L18.4618 30.744H26.4299V22.2558C26.4298 22.1244 26.3775 21.9985 26.2846 21.9056C26.1917 21.8127 26.0657 21.7604 25.9343 21.7602Z"
                  fill="#FBFBFB"
                />
              </svg>
            </div>
            <h5 className="text-center text-xl font-medium">
              Interview Selected <br />
              Candidates
            </h5>
            <p className="text-center text-sm font-medium">
              Conduct interviews with shortlisted candidates.
            </p>
          </div>
          {/* badge */}
          <div className="absolute left-0 top-0 size-[80px] border-r-[80px] border-t-[80px] border-r-transparent border-t-primary duration-200 group-hover:border-t-secondary"></div>
          <span className="absolute left-[15px] top-[10px] z-50 text-xl text-white">
            03
          </span>
        </motion.div>

        {/* step card end*/}

        <HiArrowLongDown className="text-4xl lg:hidden" />
        <HiArrowLongRight className="hidden text-4xl lg:inline" />

        <svg
          className="hidden"
          width="51"
          height="16"
          viewBox="0 0 51 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50.7071 8.70711C51.0976 8.31658 51.0976 7.68342 50.7071 7.29289L44.3431 0.928932C43.9526 0.538408 43.3195 0.538408 42.9289 0.928932C42.5384 1.31946 42.5384 1.95262 42.9289 2.34315L48.5858 8L42.9289 13.6569C42.5384 14.0474 42.5384 14.6805 42.9289 15.0711C43.3195 15.4616 43.9526 15.4616 44.3431 15.0711L50.7071 8.70711ZM0 9H50V7H0V9Z"
            fill="black"
          />
        </svg>

        {/* step card start*/}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          className="group relative min-h-[270px] w-[350px] shadow-lg duration-200 hover:scale-105 border"
        >
          <div className="m-5 space-y-4">
            <div className="mx-auto flex size-[80px] items-center justify-center rounded-full bg-primary duration-200 group-hover:bg-secondary">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.2416 24.286C16.2441 24.2861 16.2465 24.2868 16.2489 24.2869C16.2539 24.2871 16.2589 24.289 16.2639 24.289L16.2645 24.2889L16.265 24.289C16.2682 24.289 16.2713 24.2877 16.2745 24.2877C16.2877 24.2878 16.3003 24.2897 16.3134 24.2897H16.3138C20.2929 24.2897 23.5301 21.0525 23.5301 17.0732C23.5301 13.0939 20.2929 9.8567 16.3138 9.8567C16.3063 9.8567 16.299 9.85779 16.2915 9.85787C16.2825 9.8574 16.2734 9.85873 16.2644 9.85873C16.2471 9.85879 16.2297 9.85968 16.2125 9.86138C16.2026 9.86232 16.1926 9.86185 16.1827 9.86334C12.2644 9.93427 9.09727 13.1381 9.09727 17.0732C9.09727 21.0281 12.2959 24.2467 16.2416 24.286ZM10.7004 19.5404H12.34C12.7209 20.7838 13.3859 21.9195 14.2948 22.8603C12.6872 22.2976 11.3833 21.0878 10.7004 19.5404ZM22.449 17.0731C22.449 17.5504 22.3888 18.013 22.2852 18.4593H20.4392C20.5149 18.0022 20.5579 17.5354 20.5579 17.0597C20.5579 16.594 20.5159 16.1362 20.4419 15.6873H22.2853C22.3888 16.1335 22.449 16.596 22.449 17.0731ZM19.4768 17.0865C19.4768 17.5535 19.432 18.0125 19.3469 18.4594H16.8541V15.6874H19.3445C19.4327 16.1486 19.4769 16.617 19.4768 17.0865ZM13.482 19.5404H15.773V22.7458C14.714 21.8997 13.9301 20.7923 13.482 19.5404ZM16.8541 22.6626V19.5403H19.0498C18.6164 20.7497 17.8648 21.826 16.8541 22.6626ZM16.8541 14.6063V11.4838C17.8627 12.3189 18.6132 13.394 19.047 14.6063H16.8541ZM15.773 11.4004V14.6063H13.4791C13.9266 13.3572 14.7116 12.2481 15.773 11.4004ZM15.773 15.6873V18.4593H13.1843C13.0962 17.998 13.0519 17.5294 13.052 17.0597C13.052 16.5929 13.0968 16.134 13.1819 15.6873H15.773ZM12.0871 18.4593H10.3421C10.2385 18.013 10.1783 17.5504 10.1783 17.0731C10.1783 16.5959 10.2384 16.1334 10.342 15.6873H12.0897C12.0141 16.1442 11.9711 16.611 11.9711 17.0865C11.9711 17.5523 12.0132 18.0104 12.0871 18.4593ZM18.174 22.9184C19.1074 21.9712 19.7977 20.8122 20.1859 19.5403H21.9269C21.2214 21.139 19.8552 22.382 18.174 22.9184ZM21.927 14.6063H20.189C19.8 13.3342 19.1089 12.1751 18.1747 11.2281C19.8557 11.7646 21.2217 13.0076 21.927 14.6063ZM14.2953 11.2858C13.3884 12.2251 12.7242 13.36 12.3428 14.6063H10.7002C11.3831 13.0585 12.6873 11.8485 14.2953 11.2858ZM35.3422 7.09631C34.9718 6.37841 34.3465 5.84881 33.5814 5.60459L16.4788 0.143805C15.7141 -0.101116 14.8973 -0.031429 14.1795 0.33943C13.4617 0.709665 12.932 1.33498 12.6877 2.09998L11.5527 5.65459H7.33703C5.67359 5.65459 4.32031 7.00802 4.32031 8.67146V36.9835C4.32031 38.6469 5.67359 40 7.33703 40H25.2902C26.9537 40 28.307 38.6469 28.307 36.9835V32.0419L35.5377 9.39568C35.7819 8.63099 35.7126 7.8142 35.3422 7.09631ZM27.2259 36.9835C27.2259 38.0508 26.3575 38.919 25.2902 38.919H7.33703C6.26969 38.919 5.40141 38.0508 5.40141 36.9835V8.67146C5.40141 7.60412 6.26977 6.73568 7.33703 6.73568H25.2902C26.3576 6.73568 27.2259 7.6042 27.2259 8.67146V36.9835ZM34.508 9.06701L28.307 28.4883V8.67146C28.307 7.00802 26.9537 5.65459 25.2902 5.65459H12.6872L13.7173 2.42873C13.8737 1.93888 14.2139 1.53802 14.6751 1.29982C15.1361 1.06193 15.6597 1.01724 16.1501 1.17349L33.2527 6.63435C33.7426 6.79091 34.1436 7.13091 34.3815 7.59224C34.6194 8.05318 34.6644 8.57716 34.508 9.06701ZM23.6048 28.4685C23.6047 28.6118 23.5478 28.7493 23.4464 28.8507C23.3451 28.9521 23.2076 29.009 23.0642 29.009H9.56281C9.42104 29.0066 9.28589 28.9486 9.18649 28.8475C9.08708 28.7464 9.03138 28.6103 9.03138 28.4685C9.03138 28.3267 9.08708 28.1906 9.18649 28.0895C9.28589 27.9884 9.42104 27.9304 9.56281 27.9279H23.0643C23.1353 27.9279 23.2056 27.9419 23.2711 27.9691C23.3367 27.9963 23.3963 28.0361 23.4465 28.0863C23.4967 28.1365 23.5365 28.1961 23.5636 28.2616C23.5908 28.3272 23.6048 28.3975 23.6048 28.4685ZM23.6048 32.2841C23.6047 32.4275 23.5478 32.5649 23.4464 32.6663C23.3451 32.7677 23.2076 32.8246 23.0642 32.8247H9.56281C9.42104 32.8223 9.28589 32.7642 9.18649 32.6631C9.08708 32.562 9.03138 32.4259 9.03138 32.2841C9.03138 32.1423 9.08708 32.0062 9.18649 31.9051C9.28589 31.804 9.42104 31.746 9.56281 31.7436H23.0643C23.2076 31.7436 23.3451 31.8006 23.4464 31.9019C23.5478 32.0033 23.6047 32.1408 23.6048 32.2841ZM20.5425 36.0998C20.5425 36.2432 20.4855 36.3807 20.3842 36.482C20.2828 36.5834 20.1453 36.6403 20.002 36.6404H12.6252C12.4834 36.638 12.3482 36.5799 12.2488 36.4788C12.1494 36.3777 12.0937 36.2416 12.0937 36.0998C12.0937 35.958 12.1494 35.8219 12.2488 35.7208C12.3482 35.6197 12.4834 35.5617 12.6252 35.5593H20.002C20.1453 35.5593 20.2828 35.6162 20.3842 35.7176C20.4855 35.819 20.5425 35.9565 20.5425 36.0998Z"
                  fill="#FBFBFB"
                />
              </svg>
            </div>
            <h5 className="text-center text-xl font-medium">
              Select and We Complete <br /> Visa Procedures
            </h5>
            <p className="text-center text-sm font-medium">
              Choose your candidates, and we handle the rest, including visa
              processing.
            </p>
          </div>
          {/* badge */}
          <div className="absolute left-0 top-0 size-[80px] border-r-[80px] border-t-[80px] border-r-transparent border-t-primary duration-200 group-hover:border-t-secondary"></div>
          <span className="absolute left-[15px] top-[10px] z-50 text-xl text-white">
            04
          </span>
        </motion.div>

        {/* step card end*/}
      </div>
    </section>
  );
};

export default WorkSteps;
