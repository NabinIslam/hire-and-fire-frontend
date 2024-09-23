"use client";

import Button from "../../ui/Button";
import SubServiceCard from "../../common/SubServiceCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "@/i18n/routing";
import ServiceImage from "@/components/common/ServiceImage";

const WorkPermitAssistance = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="basis-full space-y-5 text-center lg:basis-1/2 xl:text-left"
        >
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Work Permit Assistance
          </h2>
          <p className="text-sm font-medium">
            Our Work Permit Assistance service streamlines the process of
            securing work permits for your international hires. With a deep
            understanding of local regulations and requirements, we ensure
            compliance while handling all paperwork and communication with
            government authorities. From initial consultation to final approval,
            we provide personalized support, allowing you to focus on your
            business operations. Whether you're relocating employees or hiring
            foreign talent, our team ensures a smooth and timely process,
            minimizing delays and ensuring a hassle-free experience.
          </p>
          <div>
            <Link href="#">
              <Button>See More</Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          className="w-full basis-full lg:basis-1/2"
        >
          <ServiceImage
            imageLink="/images/services/Work Permit Assistance.png"
            title1="Permit Application Guidance"
            desc1="Efficient permit application support."
            title2="Visa & Work Permit Solutions"
            desc2="Comprehensive visa & permit services."
            title3="Visa & Permit Processing Aid"
            desc3="Expert help with visa processing."
          />
          {/* <Image
            className="hidden object-contain md:block"
            src="/images/permanent-recruitment.png"
            alt="Permanent Recruitment"
            fill
          />

          <img
            className="absolute hidden h-full w-auto transition-transform duration-1000 group-hover:translate-x-full md:block lg:-translate-x-20"
            src="/images/permanent-rec.png"
          /> */}
        </motion.div>
      </div>
      <div className="container mt-[50px] grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* card */}
        <SubServiceCard
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 25.7848H2.95674V30.6871H19.5823C20.9328 29.1177 22.9049 28.2011 25 28.2011C27.0951 28.2011 29.0672 29.1177 30.4177 30.6871H47.0433V25.7848H50V22.8551H0V25.7848ZM5.79561 19.9254H8.72529V16.2469H14.5209V5.73374H0V16.2469H5.79561V19.9254ZM31.562 19.1598C31.562 16.0216 29.183 13.4397 26.1302 13.1176C27.8173 12.6283 29.051 11.0725 29.051 9.22759V7.67476C29.051 5.43745 27.2373 3.62378 25 3.62378C22.7627 3.62378 20.949 5.43745 20.949 7.67476V9.22769C20.949 11.0726 22.1828 12.6284 23.8699 13.1177C20.8171 13.4397 18.4381 16.0217 18.4381 19.1599V19.9255H31.562V19.1598ZM40.785 13.7042H50V19.9255H40.785V13.7042ZM40.785 6.16284H50V10.7746H40.785V6.16284ZM28.4877 32.977C27.6997 31.821 26.3959 31.1308 25 31.1308C23.6041 31.1308 22.3003 31.8209 21.5123 32.977L21.0762 33.6167H2.95674V37.0795H21.0762L21.5123 37.7193C22.3003 38.8753 23.6041 39.5655 25 39.5655C26.3959 39.5655 27.6997 38.8753 28.4877 37.7193L28.9238 37.0795H47.0433V33.6167H28.9238L28.4877 32.977ZM25 42.4953C23.9712 42.4954 22.9545 42.2733 22.0195 41.8443C21.0845 41.4152 20.2531 40.7893 19.5823 40.0092H2.95674V46.3763H47.0433V40.0092H30.4177C29.7469 40.7892 28.9155 41.4152 27.9805 41.8442C27.0455 42.2733 26.0288 42.4954 25 42.4953Z" />
            </svg>
          }
          title="Work Permit Filing Assistance"
          description="Guiding you through the work permit filing process with expert support."
        />

        {/* card */}
        <SubServiceCard
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1_5402)">
                <path d="M26.794 39.8544C26.794 39.0298 26.8717 38.223 27.0185 37.4404H7.74092C6.93193 37.4404 6.27607 36.7846 6.27607 35.9756C6.27607 35.1666 6.93193 34.5107 7.74092 34.5107H27.9374C28.5016 33.2579 29.2593 32.1014 30.1827 31.0839C30.0298 31.1369 29.869 31.1641 29.7071 31.1644H7.74092C5.80723 31.096 5.79375 28.3087 7.74092 28.2347H29.707C30.6936 28.2158 31.429 29.2518 31.0914 30.1752C32.8445 28.5852 35.03 27.4641 37.4479 27.0105V10.8714C37.4479 8.27041 35.3294 6.26855 32.845 6.26855H28.7423C28.5486 9.64688 25.7398 12.3362 22.3139 12.3362H15.1341C11.7081 12.3362 8.89932 9.64688 8.70566 6.26855H4.60293C2.11846 6.26855 0 8.27061 0 10.8714V45.3896C0 47.9851 2.11426 49.9925 4.60293 49.9925H31.6264C28.6799 47.5944 26.794 43.9407 26.794 39.8544ZM7.74092 15.6826H29.7071C30.5161 15.6826 31.172 16.3385 31.172 17.1475C31.172 17.9564 30.5161 18.6123 29.7071 18.6123H7.74092C5.80615 18.5435 5.79463 15.7563 7.74092 15.6826ZM7.74092 21.9587H29.7071C30.5161 21.9587 31.172 22.6145 31.172 23.4235C31.172 24.2325 30.5161 24.8884 29.7071 24.8884H7.74092C5.80615 24.8195 5.79463 22.0323 7.74092 21.9587ZM15.5859 43.7165H7.74092C5.80205 43.6457 5.79853 40.8591 7.74092 40.7868H15.5859C16.3949 40.7868 17.0508 41.4427 17.0508 42.2517C17.0508 43.0606 16.3949 43.7165 15.5859 43.7165Z" />
                <path d="M15.134 9.40662H22.3138C27.1331 9.1907 26.8777 2.26707 22.0522 2.38582C20.9738 -0.786157 16.4728 -0.784204 15.3956 2.38582C10.5896 2.25828 10.2978 9.17869 15.134 9.40662ZM39.8618 29.7163C34.2715 29.7163 29.7236 34.2642 29.7236 39.8544C30.2332 53.2856 49.4922 53.2819 49.9999 39.8543C49.9999 34.2642 45.452 29.7163 39.8618 29.7163ZM43.9391 38.8623L39.884 42.9174C39.312 43.4894 38.3847 43.4894 37.8126 42.9176L35.7847 40.8904C34.4631 39.4684 36.4321 37.4967 37.8559 38.8184L38.8481 39.8101L41.8676 36.7907C43.2905 35.4689 45.2608 37.4395 43.9391 38.8623Z" />
              </g>
              <defs>
                <clipPath id="clip0_1_5402">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Work Permit Compliance Support"
          description="Ensuring your work permits meet all compliance requirements with expert guidance."
        />
        {/* card */}
        <SubServiceCard
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
          transition={{
            duration: 1,
            type: "spring",
            stiffness: 50,
            damping: 12,
          }}
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.1875 6.25L18.75 3.125H9.19067L10.7532 6.25H17.1875ZM42.1875 41.0594V39.0625C42.1875 38.6481 42.0228 38.2508 41.7297 37.9578L39.0625 35.2906V32.6344C38.2375 32.4671 37.4457 32.1651 36.7188 31.7406C36.4657 31.8906 36.2032 32.0172 35.9375 32.1359V35.9375C35.9376 36.3519 36.1023 36.7492 36.3954 37.0422L39.0625 39.7094V41.0594C38.1329 41.6016 37.5 42.5984 37.5 43.75C37.5 45.4734 38.9016 46.875 40.625 46.875C42.3485 46.875 43.75 45.4734 43.75 43.75C43.75 42.5984 43.1172 41.6016 42.1875 41.0594ZM34.375 41.0594V32.6344C33.8641 32.7422 33.3438 32.8125 32.8125 32.8125C32.2813 32.8125 31.761 32.7422 31.25 32.6344V41.0594C30.3204 41.6016 29.6875 42.5984 29.6875 43.75C29.6875 45.4734 31.0891 46.875 32.8125 46.875C34.536 46.875 35.9375 45.4734 35.9375 43.75C35.9375 42.5984 35.3047 41.6016 34.375 41.0594ZM28.9063 31.7406C28.1719 32.175 27.3813 32.4641 26.5625 32.6344V35.2906L23.8954 37.9578C23.6023 38.2508 23.4376 38.6481 23.4375 39.0625V41.0594C22.5079 41.6016 21.875 42.5984 21.875 43.75C21.875 45.4734 23.2766 46.875 25 46.875C26.7235 46.875 28.125 45.4734 28.125 43.75C28.125 42.5984 27.4922 41.6016 26.5625 41.0594V39.7094L29.2297 37.0422C29.5228 36.7492 29.6875 36.3519 29.6875 35.9375V32.1359C29.42 32.0188 29.1591 31.8868 28.9063 31.7406Z" />
              <path d="M17.1875 25C17.19 23.1105 17.8761 21.2857 19.1191 19.8627C20.3621 18.4396 22.078 17.5144 23.95 17.2578C24.2078 16.5125 24.575 15.8281 25 15.1859V4.6875C25 4.2731 24.8354 3.87567 24.5424 3.58265C24.2493 3.28962 23.8519 3.125 23.4375 3.125H20.3125L18.4 6.94844C18.2703 7.20794 18.071 7.42622 17.8243 7.57882C17.5775 7.73143 17.2932 7.81235 17.0031 7.8125H10.9375C10.6474 7.81235 10.3631 7.73143 10.1164 7.57882C9.86965 7.42622 9.6703 7.20794 9.54063 6.94844L7.62813 3.125H4.6875C4.2731 3.125 3.87567 3.28962 3.58265 3.58265C3.28962 3.87567 3.125 4.2731 3.125 4.6875V34.375C3.125 34.7894 3.28962 35.1868 3.58265 35.4799C3.87567 35.7729 4.2731 35.9375 4.6875 35.9375H23.4375C23.8519 35.9375 24.2493 35.7729 24.5424 35.4799C24.8354 35.1868 25 34.7894 25 34.375V32.8125C20.6922 32.8125 17.1875 29.3078 17.1875 25ZM12.2719 27.8969L9.14688 31.0219C9.07452 31.095 8.98837 31.1531 8.89343 31.1927C8.79849 31.2323 8.69663 31.2527 8.59375 31.2527C8.49087 31.2527 8.38901 31.2323 8.29407 31.1927C8.19913 31.1531 8.11298 31.095 8.04062 31.0219L6.47812 29.4594C6.40549 29.3867 6.34787 29.3005 6.30856 29.2056C6.26925 29.1107 6.24901 29.009 6.24901 28.9062C6.24901 28.8035 6.26925 28.7018 6.30856 28.6069C6.34787 28.512 6.40549 28.4258 6.47812 28.3531C6.55076 28.2805 6.637 28.2229 6.7319 28.1836C6.82681 28.1442 6.92853 28.124 7.03125 28.124C7.13398 28.124 7.23569 28.1442 7.3306 28.1836C7.4255 28.2229 7.51174 28.2805 7.58438 28.3531L8.59375 29.3641L11.1656 26.7906C11.2383 26.718 11.3245 26.6604 11.4194 26.6211C11.5143 26.5817 11.616 26.5615 11.7188 26.5615C11.8215 26.5615 11.9232 26.5817 12.0181 26.6211C12.113 26.6604 12.1992 26.718 12.2719 26.7906C12.3445 26.8633 12.4021 26.9495 12.4414 27.0444C12.4808 27.1393 12.501 27.241 12.501 27.3438C12.501 27.4465 12.4808 27.5482 12.4414 27.6431C12.4021 27.738 12.3445 27.8242 12.2719 27.8969ZM12.2719 20.0844L9.14688 23.2094C9.07452 23.2825 8.98837 23.3406 8.89343 23.3802C8.79849 23.4198 8.69663 23.4402 8.59375 23.4402C8.49087 23.4402 8.38901 23.4198 8.29407 23.3802C8.19913 23.3406 8.11298 23.2825 8.04062 23.2094L6.47812 21.6469C6.40549 21.5742 6.34787 21.488 6.30856 21.3931C6.26925 21.2982 6.24901 21.1965 6.24901 21.0938C6.24901 20.991 6.26925 20.8893 6.30856 20.7944C6.34787 20.6995 6.40549 20.6133 6.47812 20.5406C6.55076 20.468 6.637 20.4104 6.7319 20.3711C6.82681 20.3317 6.92853 20.3115 7.03125 20.3115C7.13398 20.3115 7.23569 20.3317 7.3306 20.3711C7.4255 20.4104 7.51174 20.468 7.58438 20.5406L8.59375 21.5516L11.1656 18.9781C11.3123 18.8314 11.5113 18.749 11.7188 18.749C11.9262 18.749 12.1252 18.8314 12.2719 18.9781C12.4186 19.1248 12.501 19.3238 12.501 19.5312C12.501 19.7387 12.4186 19.9377 12.2719 20.0844ZM12.2719 12.2719L9.14688 15.3969C9.07452 15.47 8.98837 15.5281 8.89343 15.5677C8.79849 15.6073 8.69663 15.6277 8.59375 15.6277C8.49087 15.6277 8.38901 15.6073 8.29407 15.5677C8.19913 15.5281 8.11298 15.47 8.04062 15.3969L6.47812 13.8344C6.40549 13.7617 6.34787 13.6755 6.30856 13.5806C6.26925 13.4857 6.24901 13.384 6.24901 13.2812C6.24901 13.1785 6.26925 13.0768 6.30856 12.9819C6.34787 12.887 6.40549 12.8008 6.47812 12.7281C6.55076 12.6555 6.637 12.5979 6.7319 12.5586C6.82681 12.5192 6.92853 12.499 7.03125 12.499C7.13398 12.499 7.23569 12.5192 7.3306 12.5586C7.4255 12.5979 7.51174 12.6555 7.58438 12.7281L8.59375 13.7391L11.1656 11.1656C11.3123 11.0189 11.5113 10.9365 11.7188 10.9365C11.9262 10.9365 12.1252 11.0189 12.2719 11.1656C12.4186 11.3123 12.501 11.5113 12.501 11.7188C12.501 11.9262 12.4186 12.1252 12.2719 12.2719Z" />
              <path d="M40.625 18.75C40.5719 18.75 40.5219 18.7656 40.4688 18.7656C40.1101 16.9996 39.152 15.4118 37.7567 14.2713C36.3613 13.1308 34.6146 12.5078 32.8125 12.5078C31.0104 12.5078 29.2637 13.1308 27.8683 14.2713C26.473 15.4118 25.5149 16.9996 25.1563 18.7656C25.1031 18.7656 25.0531 18.75 25 18.75C23.3424 18.75 21.7527 19.4085 20.5806 20.5806C19.4085 21.7527 18.75 23.3424 18.75 25C18.75 26.6576 19.4085 28.2473 20.5806 29.4194C21.7527 30.5915 23.3424 31.25 25 31.25C26.4859 31.25 27.8328 30.7094 28.9062 29.8438C29.9797 30.7094 31.3266 31.25 32.8125 31.25C34.2984 31.25 35.6453 30.7094 36.7188 29.8438C37.7922 30.7094 39.1391 31.25 40.625 31.25C42.2826 31.25 43.8723 30.5915 45.0444 29.4194C46.2165 28.2473 46.875 26.6576 46.875 25C46.875 23.3424 46.2165 21.7527 45.0444 20.5806C43.8723 19.4085 42.2826 18.75 40.625 18.75Z" />
            </svg>
          }
          title="Work Permit Application Services"
          description="Streamlined services for efficient and accurate work permit application and processing."
        />
      </div>
    </section>
  );
};

export default WorkPermitAssistance;
