"use client";

import Image from "next/image";
import Button from "../../ui/Button";
import SubServiceCard from "../../common/SubServiceCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const PermanentRecruitment = () => {
  const t = useTranslations("PermanentRecruitment");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between md:gap-6 lg:flex-row lg:gap-24">
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
          className="basis-full space-y-5 text-center lg:basis-1/2 lg:text-left"
        >
          <h2 className="text-4xl font-semibold lg:text-5xl">{t("title")}</h2>
          <p className="text-sm font-medium">{t("description")}</p>
          <div>
            <Link href="/service/permanent-recruitment">
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
          className="group relative min-h-[400px] w-full basis-full lg:basis-1/2"
        >
          <Image
            className="object-contain"
            src="/images/permanent-rec-full.png"
            alt="Permanent Recruitment"
            fill
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
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
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
              <path d="M40.2008 40.4883C47.0737 33.6155 48.5624 22.899 43.8213 14.4278C43.7201 14.2486 43.6553 14.0513 43.6306 13.8471C43.6059 13.6429 43.6217 13.4358 43.6772 13.2377C43.7327 13.0396 43.8268 12.8545 43.954 12.6928C44.0813 12.5312 44.2392 12.3963 44.4187 12.2958C44.5982 12.1954 44.7958 12.1313 45.0001 12.1074C45.2044 12.0835 45.4114 12.1001 45.6093 12.1564C45.8071 12.2127 45.9919 12.3075 46.1531 12.4354C46.3142 12.5632 46.4485 12.7217 46.5483 12.9016C49.1575 17.5968 50.1918 23.0052 49.4992 28.3319C48.7294 34.1604 45.9248 39.5294 41.5805 43.4907C37.2363 47.452 31.6321 49.7508 25.7574 49.9811C25.4293 49.9941 25.1017 50.0006 24.7746 50.0006C19.8859 50.0056 15.1043 48.568 11.0289 45.8678L11.5104 48.0529C11.5995 48.4576 11.5242 48.8812 11.3011 49.2304C11.078 49.5796 10.7253 49.8259 10.3206 49.915C9.91587 50.0042 9.49233 49.9289 9.14313 49.7058C8.79392 49.4826 8.54766 49.1299 8.45851 48.7252L6.92062 41.7415C6.86993 41.5114 6.87192 41.2728 6.92647 41.0436C6.98101 40.8144 7.08669 40.6005 7.23559 40.4179C7.38449 40.2353 7.57277 40.0887 7.78632 39.9892C7.99987 39.8896 8.23317 39.8396 8.46877 39.843L15.9125 39.9491C16.1177 39.9521 16.3203 39.9954 16.5088 40.0766C16.6972 40.1578 16.8678 40.2754 17.0109 40.4225C17.1539 40.5697 17.2665 40.7436 17.3423 40.9343C17.4182 41.125 17.4557 41.3287 17.4528 41.5339C17.4498 41.7391 17.4065 41.9417 17.3253 42.1301C17.2441 42.3186 17.1265 42.4892 16.9794 42.6322C16.8322 42.7753 16.6583 42.8879 16.4676 42.9637C16.2769 43.0395 16.0732 43.0771 15.868 43.0741L12.4058 43.0253C20.923 48.8919 32.7498 47.9395 40.2008 40.4883ZM0.0797041 21.694C-0.630913 26.9767 0.357507 32.3485 2.90197 37.0323C3.10259 37.3927 3.43756 37.6591 3.83383 37.7735C4.2301 37.8879 4.65552 37.841 5.01733 37.6429C5.37913 37.4449 5.64796 37.1119 5.76521 36.7165C5.88245 36.321 5.83858 35.8953 5.64318 35.532C1.02804 27.0989 2.55763 16.4562 9.3631 9.6506C16.7878 2.2259 28.3659 1.24103 36.873 6.91994L33.8842 6.87736C33.679 6.87443 33.4752 6.91194 33.2846 6.98776C33.0939 7.06357 32.92 7.17621 32.7728 7.31923C32.6256 7.46225 32.5081 7.63285 32.4269 7.8213C32.3456 8.00975 32.3023 8.21235 32.2994 8.41755C32.2964 8.62274 32.334 8.82649 32.4098 9.01719C32.4856 9.20788 32.5982 9.38177 32.7412 9.52894C32.8843 9.6761 33.0549 9.79365 33.2433 9.87488C33.4318 9.95611 33.6344 9.99943 33.8396 10.0024L41.2834 10.1085H41.3057C41.5394 10.1085 41.7702 10.0561 41.9809 9.95505C42.1917 9.85403 42.3771 9.70701 42.5236 9.52482C42.67 9.34264 42.7737 9.12992 42.827 8.90235C42.8803 8.67477 42.8818 8.43814 42.8316 8.20988L41.2933 1.22638C41.2041 0.821683 40.9579 0.468971 40.6087 0.245841C40.2595 0.0227113 39.8359 -0.0525589 39.4312 0.0365891C39.0265 0.125737 38.6738 0.372001 38.4507 0.721205C38.2275 1.07041 38.1523 1.49395 38.2414 1.89865L38.8039 4.45216C35.2933 2.06548 31.2315 0.614559 27.0033 0.236859C22.7751 -0.140841 18.5204 0.567183 14.6424 2.29386C10.7644 4.02054 7.39139 6.70869 4.84294 10.1037C2.29449 13.4987 0.654971 17.4881 0.0797041 21.694ZM24.7819 39.9902C16.5163 39.9902 9.79172 33.2656 9.79172 25C9.79172 16.7344 16.5163 10.0098 24.7819 10.0098C33.0476 10.0098 39.7722 16.7344 39.7722 25C39.7722 33.2656 33.0477 39.9902 24.7819 39.9902ZM20.3916 25.8706C19.624 25.0214 19.1191 23.9678 18.9382 22.8374C18.7573 21.7071 18.9081 20.5485 19.3723 19.5021C19.8366 18.4557 20.5944 17.5665 21.5538 16.9421C22.5133 16.3176 23.6332 15.9849 24.778 15.9842C25.9227 15.9834 27.0431 16.3147 28.0034 16.9379C28.9636 17.5611 29.7225 18.4494 30.1881 19.4951C30.6537 20.5409 30.806 21.6993 30.6266 22.8299C30.4471 23.9605 29.9436 25.0148 29.1771 25.865C30.4138 26.451 31.5215 27.2774 32.4357 28.2958C33.3499 29.3142 34.0523 30.5043 34.502 31.7969C35.7468 30.0187 36.4801 27.9331 36.6219 25.7671C36.7636 23.6011 36.3085 21.4377 35.3061 19.5124C34.3036 17.5871 32.7922 15.9737 30.9364 14.8478C29.0806 13.7219 26.9515 13.1267 24.7809 13.1269C22.6103 13.127 20.4813 13.7227 18.6257 14.8489C16.7701 15.9752 15.259 17.5888 14.2569 19.5143C13.2548 21.4398 12.8 23.6033 12.9422 25.7692C13.0844 27.9352 13.818 30.0207 15.0632 31.7986C15.5155 30.5074 16.2194 29.3187 17.134 28.3012C18.0486 27.2837 19.1558 26.4576 20.3916 25.8706ZM24.7819 19.114C24.2296 19.114 23.6896 19.2778 23.2303 19.5847C22.771 19.8916 22.413 20.3278 22.2016 20.8381C21.9902 21.3485 21.9349 21.91 22.0426 22.4518C22.1504 22.9936 22.4164 23.4913 22.807 23.8819C23.1976 24.2725 23.6953 24.5385 24.2371 24.6462C24.7789 24.754 25.3404 24.6987 25.8508 24.4873C26.3611 24.2759 26.7973 23.9179 27.1042 23.4586C27.4111 22.9993 27.5749 22.4593 27.5749 21.9069C27.5741 21.1665 27.2796 20.4565 26.756 19.9329C26.2324 19.4093 25.5224 19.1148 24.7819 19.114ZM17.6562 34.4811C19.7096 36.0285 22.211 36.8654 24.7822 36.8654C27.3534 36.8654 29.8548 36.0285 31.9082 34.4811C31.5626 30.8432 28.4512 28.0065 24.7819 28.0065C23.0029 28.0101 21.2886 28.6747 19.9718 29.8711C18.6551 31.0675 17.8298 32.7105 17.6562 34.4811Z" />
            </svg>
          }
          title={t("card_1_title")}
          description={t("card_1_description")}
        />

        {/* card */}

        <SubServiceCard
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
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
              <path d="M6.70579 14.2362C6.52964 14.2745 6.34547 14.2416 6.1935 14.1447C6.04153 14.0477 5.9341 13.8945 5.89465 13.7186L5.44622 11.7115C2.6418 15.8418 1.21633 20.7535 1.37397 25.7434C1.5316 30.7333 3.26424 35.5453 6.32376 39.4903C6.37884 39.5612 6.41941 39.6423 6.44317 39.7288C6.46693 39.8154 6.4734 39.9058 6.46222 39.9949C6.45104 40.084 6.42243 40.17 6.37801 40.248C6.33359 40.326 6.27424 40.3945 6.20335 40.4496C6.13245 40.5047 6.0514 40.5452 5.96483 40.569C5.87825 40.5928 5.78785 40.5992 5.69877 40.5881C5.60969 40.5769 5.52369 40.5483 5.44567 40.5038C5.36765 40.4594 5.29915 40.4001 5.24407 40.3292C2.03513 36.1874 0.206722 31.1431 0.0165079 25.9072C-0.173706 20.6712 1.28386 15.5075 4.18381 11.1438L2.4512 11.5314C2.36345 11.552 2.2725 11.5549 2.18361 11.5401C2.09472 11.5252 2.00967 11.4928 1.9334 11.4448C1.85713 11.3968 1.79115 11.3341 1.7393 11.2604C1.68745 11.1867 1.65076 11.1034 1.63135 11.0154C1.61195 10.9274 1.61022 10.8364 1.62627 10.7477C1.64232 10.6591 1.67583 10.5744 1.72485 10.4988C1.77386 10.4232 1.83741 10.3581 1.91181 10.3072C1.98621 10.2563 2.06997 10.2207 2.15823 10.2025L5.63821 9.42459C5.81439 9.38587 5.99873 9.41863 6.1508 9.51566C6.30286 9.61269 6.41023 9.76607 6.44934 9.94217L7.22454 13.425C7.24409 13.5123 7.24617 13.6027 7.23064 13.6908C7.21511 13.779 7.18229 13.8632 7.13407 13.9386C7.08585 14.014 7.02318 14.0791 6.94967 14.1302C6.87617 14.1813 6.79328 14.2173 6.70579 14.2362ZM10.5097 6.3239C14.4547 3.26439 19.2667 1.53174 24.2566 1.37409C29.2465 1.21644 34.1582 2.64188 38.2885 5.44627L36.2814 5.89197C36.1927 5.90996 36.1085 5.94541 36.0336 5.99627C35.9588 6.04713 35.8948 6.11238 35.8455 6.18821C35.7961 6.26404 35.7623 6.34894 35.7461 6.43796C35.7299 6.52698 35.7315 6.61833 35.751 6.70671C35.7704 6.79508 35.8073 6.87869 35.8594 6.95268C35.9114 7.02667 35.9777 7.08956 36.0544 7.13767C36.131 7.18578 36.2164 7.21816 36.3057 7.23291C36.395 7.24767 36.4863 7.2445 36.5743 7.22361L40.0543 6.44851C40.1418 6.42964 40.2247 6.39362 40.2981 6.34253C40.3716 6.29144 40.4342 6.22629 40.4823 6.15085C40.5304 6.07542 40.5631 5.99119 40.5785 5.90304C40.5939 5.81489 40.5916 5.72456 40.5719 5.63728L39.7995 2.1574C39.7813 2.06914 39.7457 1.98538 39.6949 1.91098C39.644 1.83659 39.5789 1.77304 39.5032 1.72402C39.4276 1.675 39.343 1.64149 39.2543 1.62545C39.1656 1.6094 39.0746 1.61112 38.9866 1.63052C38.8986 1.64993 38.8153 1.68662 38.7416 1.73847C38.6679 1.79032 38.6052 1.8563 38.5572 1.93257C38.5092 2.00884 38.4769 2.09389 38.462 2.18278C38.4471 2.27167 38.4501 2.36263 38.4706 2.45037L38.8555 4.18611C34.4924 1.28519 29.3288 -0.173153 24.0928 0.0166823C18.8568 0.206517 13.8124 2.03496 9.67083 5.24422C9.52765 5.35546 9.43453 5.51902 9.41195 5.69892C9.38937 5.87882 9.43917 6.06032 9.55042 6.20349C9.66166 6.34667 9.82522 6.43979 10.0051 6.46237C10.185 6.48495 10.3665 6.43514 10.5097 6.3239ZM39.4901 43.6761C35.5458 46.7362 30.7339 48.4691 25.7442 48.6262C20.7544 48.7834 15.843 47.3567 11.714 44.5509L13.7184 44.1052C13.8926 44.0643 14.0437 43.9565 14.1389 43.8051C14.2342 43.6537 14.2661 43.4709 14.2276 43.2962C14.189 43.1214 14.0833 42.9689 13.9332 42.8716C13.783 42.7743 13.6006 42.7401 13.4254 42.7762L9.94544 43.5487C9.85794 43.568 9.77512 43.6045 9.70172 43.6559C9.62833 43.7073 9.5658 43.7727 9.51771 43.8483C9.46963 43.9239 9.43695 44.0083 9.42153 44.0965C9.40611 44.1848 9.40826 44.2752 9.42786 44.3627L10.2002 47.8426C10.2184 47.9308 10.254 48.0146 10.3049 48.089C10.3558 48.1634 10.4209 48.2269 10.4965 48.2759C10.5721 48.325 10.6568 48.3585 10.7454 48.3745C10.8341 48.3906 10.9251 48.3888 11.0131 48.3694C11.1011 48.35 11.1844 48.3133 11.2581 48.2615C11.3318 48.2096 11.3945 48.1437 11.4425 48.0674C11.4905 47.9911 11.5229 47.9061 11.5378 47.8172C11.5526 47.7283 11.5497 47.6373 11.5291 47.5496L11.1443 45.8166C15.5079 48.7164 20.6714 50.1739 25.9073 49.9836C31.1431 49.7933 36.1872 47.9649 40.3288 44.7559C40.472 44.6447 40.5651 44.4812 40.5877 44.3013C40.6103 44.1214 40.5605 43.9399 40.4493 43.7967C40.3381 43.6535 40.1745 43.5604 39.9946 43.5378C39.8147 43.5152 39.6332 43.565 39.4901 43.6762V43.6761ZM47.5489 38.4685L45.813 38.8534C48.7145 34.491 50.1732 29.3277 49.9836 24.092C49.7939 18.8562 47.9654 13.8121 44.7559 9.67097C44.6446 9.52779 44.4811 9.43465 44.3012 9.41206C44.1213 9.38947 43.9397 9.43927 43.7966 9.55052C43.6534 9.66176 43.5602 9.82532 43.5376 10.0052C43.5151 10.1851 43.5649 10.3667 43.6761 10.5098C46.7358 14.4552 48.4686 19.2677 48.6262 24.258C48.7838 29.2483 47.3582 34.1605 44.5535 38.2911L44.105 36.2812C44.0645 36.1064 43.9566 35.9545 43.8049 35.8587C43.6531 35.7629 43.4697 35.7308 43.2944 35.7693C43.1191 35.8079 42.9661 35.914 42.8685 36.0647C42.771 36.2154 42.7368 36.3985 42.7735 36.5742L43.5514 40.0543C43.5703 40.1417 43.6063 40.2246 43.6574 40.298C43.7085 40.3715 43.7736 40.4341 43.849 40.4822C43.9244 40.5304 44.0087 40.5631 44.0968 40.5784C44.1849 40.5938 44.2753 40.5916 44.3625 40.5719L47.8425 39.7967C48.0167 39.7558 48.1678 39.648 48.2631 39.4966C48.3584 39.3452 48.3902 39.1624 48.3517 38.9877C48.3132 38.813 48.2074 38.6604 48.0573 38.5631C47.9071 38.4658 47.7247 38.4316 47.5495 38.4678L47.5489 38.4685ZM42.9423 27.4805L40.9933 27.9706L39.3959 28.3748C39.0301 29.9368 38.411 31.4284 37.5631 32.7904L38.4103 34.2079L39.4402 35.9327C38.437 37.257 37.2568 38.4372 35.9325 39.4403L34.2078 38.4104L32.7904 37.5633C31.4286 38.4116 29.9369 39.0307 28.3746 39.396L27.9704 40.9934L27.4805 42.9424C25.8348 43.1712 24.1653 43.1712 22.5196 42.9424L22.0268 40.9934L21.6254 39.3932C20.0629 39.0302 18.571 38.4119 17.2097 37.5633L15.7922 38.4104L14.0675 39.4403C12.7431 38.4372 11.5628 37.257 10.5596 35.9327L11.5894 34.2079L12.4365 32.7904C11.5887 31.4284 10.9696 29.9368 10.6038 28.3748L9.00647 27.9706L7.05471 27.4805C6.82947 25.8346 6.82947 24.1656 7.05471 22.5196L9.00647 22.0268L10.6066 21.6254C10.9697 20.0629 11.588 18.571 12.4365 17.2097L11.5894 15.7923L10.5596 14.0645C11.5635 12.7418 12.7437 11.5625 14.0672 10.5596L15.7919 11.5895L17.2094 12.4367C18.5711 11.5883 20.0629 10.9692 21.6251 10.604L22.0265 9.00652L22.5196 7.05476C24.1655 6.82965 25.8345 6.82965 27.4805 7.05476L27.9705 9.00652L28.3747 10.604C29.937 10.9692 31.4287 11.5883 32.7905 12.4367L34.2079 11.5895L35.9326 10.5596C37.2562 11.5625 38.4363 12.7418 39.4403 14.0645L38.4104 15.7921L37.5632 17.2095C38.4116 18.5713 39.0307 20.063 39.396 21.6252L40.9934 22.0266L42.9424 22.5194C43.1713 24.1651 43.1713 25.8346 42.9424 27.4804L42.9423 27.4805ZM35.7249 25.0001C35.7249 22.8788 35.0959 20.8052 33.9175 19.0415C32.739 17.2777 31.0639 15.9031 29.1042 15.0913C27.1444 14.2795 24.9879 14.0671 22.9075 14.481C20.827 14.8948 18.9159 15.9163 17.416 17.4162C15.9161 18.9162 14.8946 20.8272 14.4808 22.9077C14.067 24.9882 14.2794 27.1447 15.0912 29.1044C15.903 31.0642 17.2777 32.7392 19.0414 33.9177C20.8052 35.0961 22.8788 35.7251 25 35.7251C27.8444 35.725 30.5723 34.595 32.5836 32.5837C34.5949 30.5724 35.7248 27.8445 35.7249 25.0001ZM25 18.71C23.7562 18.7102 22.5404 19.0791 21.5063 19.7702C20.4722 20.4613 19.6663 21.4436 19.1903 22.5927C18.7144 23.7418 18.5899 25.0063 18.8326 26.2262C19.0753 27.446 19.6742 28.5666 20.5537 29.4461C21.4332 30.3256 22.5537 30.9245 23.7736 31.1673C24.9934 31.41 26.2579 31.2855 27.407 30.8096C28.5562 30.3338 29.5384 29.5278 30.2295 28.4937C30.9207 27.4597 31.2897 26.2439 31.2899 25.0001C31.29 24.174 31.1274 23.3561 30.8113 22.5929C30.4953 21.8297 30.032 21.1362 29.4479 20.5521C28.8638 19.968 28.1704 19.5047 27.4072 19.1886C26.644 18.8726 25.8261 18.7099 25 18.71Z" />
            </svg>
          }
          title={t("card_2_title")}
          description={t("card_2_description")}
        />

        {/* card */}

        <SubServiceCard
          ref={ref}
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the left
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }} // Animate to final position
          transition={{
            duration: 1, // Adjusting duration for overall animation speed
            type: "spring",
            stiffness: 50, // Slowing down the movement
            damping: 12, // Adjusting damping to control bounce
          }}
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="44"
              viewBox="0 0 50 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.5853 28.4529C13.6645 25.4782 14.9019 22.6519 17.034 20.5759C19.166 18.4999 22.0243 17.3383 25 17.3383C27.9758 17.3383 30.8341 18.4999 32.9661 20.5759C35.0982 22.6519 36.3356 25.4782 36.4148 28.4529C28.8997 26.7551 21.1004 26.7551 13.5853 28.4529ZM20.1038 11.1591C20.1038 10.1907 20.3909 9.24403 20.9289 8.43883C21.4668 7.63363 22.2315 7.00604 23.1262 6.63543C24.0208 6.26482 25.0053 6.16783 25.9551 6.35673C26.9049 6.54562 27.7773 7.01193 28.4621 7.69666C29.1468 8.3814 29.6132 9.25382 29.8021 10.2036C29.991 11.1534 29.8941 12.1378 29.5235 13.0325C29.1529 13.9272 28.5254 14.6919 27.7202 15.2299C26.915 15.7679 25.9684 16.0551 25 16.0551C23.7019 16.0538 22.4573 15.5375 21.5393 14.6196C20.6213 13.7018 20.105 12.4572 20.1036 11.1591H20.1038ZM25 0.521851C15.9875 0.521851 8.65537 7.85505 8.65537 16.8676C8.64037 20.6639 9.96113 24.3445 12.3864 27.2651C12.6914 24.7238 13.7549 22.3333 15.4385 20.4053C17.1221 18.4774 19.3475 17.1014 21.8246 16.4569C20.6651 15.7623 19.7654 14.7066 19.2633 13.4516C18.7613 12.1967 18.6845 10.8118 19.0449 9.50905C19.4053 8.20634 20.1829 7.05772 21.2585 6.23924C22.3342 5.42075 23.6485 4.97755 25.0001 4.97755C26.3518 4.97755 27.6661 5.42075 28.7418 6.23924C29.8174 7.05772 30.595 8.20634 30.9554 9.50905C31.3158 10.8118 31.239 12.1967 30.737 13.4516C30.2349 14.7066 29.3352 15.7623 28.1757 16.4569C30.6527 17.1015 32.8781 18.4775 34.5616 20.4054C36.2451 22.3333 37.3087 24.7238 37.6136 27.2651C40.039 24.3445 41.3598 20.6639 41.3447 16.8676C41.3447 7.85505 34.0125 0.521851 25 0.521851ZM2.62334 43.4781L4.29404 39.554C4.32753 39.4753 4.34494 39.3906 4.34525 39.3051C4.34557 39.2195 4.32879 39.1348 4.29589 39.0558C4.26299 38.9769 4.21464 38.9053 4.15369 38.8452C4.09273 38.7852 4.02039 38.738 3.94092 38.7063L0 37.1402C2.0651 36.364 4.20386 35.8 6.3832 35.457C6.53806 36.5009 6.77379 37.5312 7.08828 38.5386C7.11555 38.6271 7.16179 38.7085 7.22377 38.7772C7.28576 38.8459 7.362 38.9002 7.44717 38.9364V38.9374L11.6436 40.7418C8.47925 41.0169 5.40711 41.949 2.62334 43.4784V43.4781ZM14.0979 40.4007V37.5656C12.6349 37.8255 11.1621 38.1373 9.67979 38.5011L14.0979 40.4007ZM8.13877 37.5664C13.882 36.0575 19.4408 35.3026 25 35.3026C30.5592 35.3026 36.118 36.0575 41.8612 37.5668C42.4071 35.6032 42.6331 33.5646 42.5304 31.5292C30.8956 27.4693 19.1043 27.4693 7.46963 31.5292C7.36711 33.5645 7.59305 35.603 8.13877 37.5664ZM40.3198 38.5008L35.9017 40.4003V37.5656C37.3651 37.8255 38.8378 38.1373 40.3198 38.5011V38.5008ZM46.0592 38.7058C45.9797 38.7375 45.9073 38.7847 45.8464 38.8447C45.7854 38.9047 45.737 38.9763 45.7041 39.0553C45.6712 39.1343 45.6545 39.219 45.6548 39.3046C45.6551 39.3901 45.6725 39.4748 45.7061 39.5535L47.3766 43.4776C44.593 41.9484 41.5213 41.0161 38.3574 40.7402L42.5531 38.9368L42.5522 38.9348C42.6373 38.8987 42.7136 38.8445 42.7757 38.776C42.8378 38.7075 42.8843 38.6263 42.9119 38.5381C43.2263 37.5306 43.462 36.5003 43.617 35.4564C45.7963 35.7997 47.935 36.3638 50 37.1402L46.0592 38.7058Z"
              />
            </svg>
          }
          title={t("card_3_title")}
          description={t("card_3_description")}
        />
      </div>
    </section>
  );
};

export default PermanentRecruitment;
