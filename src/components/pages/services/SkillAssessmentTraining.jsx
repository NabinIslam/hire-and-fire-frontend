"use client";

import Button from "../../ui/Button";
import SubServiceCard from "../../common/SubServiceCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "@/i18n/routing";
import ServiceImage from "@/components/common/ServiceImage";

const SkillAssessmentTraining = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row-reverse">
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
            Skill Assessment & Training
          </h2>
          <p className="text-sm font-medium">
            Skill assessment and training involve evaluating employees'
            capabilities and providing development opportunities to enhance
            their proficiency. This process includes identifying strengths and
            areas needing improvement through tests, simulations, or performance
            evaluations. Subsequently, tailored training programs are
            implemented to foster skill development and career advancement. By
            regularly assessing and improving employee skills, organizations
            ensure workforce competence and adaptability to evolving business
            needs. This approach not only enhances productivity but also boosts
            employee satisfaction and retention, contributing to overall
            organizational success.
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
            imageLink="/images/services/Compliance & Legal Support.png"
            title1="Risk Management"
            desc1="Managing risks to protect assets."
            title2="Regulatory Adherence"
            desc2="Following laws and regulations."
            title3="Contractual Compliance"
            desc3="Ensuring contract terms are met."
          />
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
              <g clipPath="url(#clip0_35_2742)">
                <path d="M39.0625 16.4062C36.0477 16.4062 33.5938 18.8602 33.5938 21.875C33.5938 24.8898 36.0477 27.3438 39.0625 27.3438C42.0773 27.3438 44.5312 24.8898 44.5312 21.875C44.5312 18.8602 42.0773 16.4062 39.0625 16.4062ZM39.0625 25.7812C36.9086 25.7812 35.1562 24.0289 35.1562 21.875C35.1562 19.7211 36.9086 17.9688 39.0625 17.9688C41.2164 17.9688 42.9688 19.7211 42.9688 21.875C42.9688 24.0289 41.2164 25.7812 39.0625 25.7812Z" />
                <path d="M39.0625 19.5312C37.7703 19.5312 36.7188 20.5828 36.7188 21.875C36.7188 23.1672 37.7703 24.2188 39.0625 24.2188C40.3547 24.2188 41.4062 23.1672 41.4062 21.875C41.4062 20.5828 40.3547 19.5312 39.0625 19.5312ZM39.0625 22.6562C38.8553 22.6562 38.6566 22.5739 38.5101 22.4274C38.3636 22.2809 38.2812 22.0822 38.2812 21.875C38.2812 21.6678 38.3636 21.4691 38.5101 21.3226C38.6566 21.1761 38.8553 21.0938 39.0625 21.0938C39.2697 21.0938 39.4684 21.1761 39.6149 21.3226C39.7614 21.4691 39.8438 21.6678 39.8438 21.875C39.8438 22.0822 39.7614 22.2809 39.6149 22.4274C39.4684 22.5739 39.2697 22.6562 39.0625 22.6562Z" />
                <path d="M47.5664 19.2039C47.4528 19.1685 47.3485 19.1083 47.2611 19.0277C47.1737 18.947 47.1053 18.8479 47.0609 18.7375C47.0211 18.6348 46.9792 18.533 46.9352 18.432C46.8898 18.3231 46.869 18.2056 46.8741 18.0877C46.8792 17.9699 46.9102 17.8546 46.9648 17.75C47.1937 17.2987 47.274 16.7865 47.1941 16.2868C47.1143 15.7871 46.8784 15.3255 46.5203 14.968L45.9695 14.4172C45.6127 14.0582 45.1511 13.8217 44.6513 13.7418C44.1515 13.662 43.6392 13.7428 43.1883 13.9727C43.0836 14.0278 42.9679 14.059 42.8497 14.064C42.7315 14.069 42.6137 14.0476 42.5047 14.0016C42.4037 13.9579 42.3019 13.9162 42.1992 13.8766C42.0892 13.8318 41.9903 13.7633 41.9099 13.6759C41.8294 13.5885 41.7692 13.4844 41.7336 13.3711C41.5764 12.89 41.2709 12.471 40.861 12.1742C40.451 11.8774 39.9577 11.718 39.4516 11.7188H38.6734C38.1674 11.7181 37.674 11.8776 37.2641 12.1744C36.8542 12.4712 36.5487 12.8901 36.3914 13.3711C36.3133 13.6078 36.1445 13.7914 35.925 13.8766C35.8219 13.9172 35.7203 13.9578 35.6195 14.0023C35.5105 14.0473 35.393 14.068 35.2752 14.0628C35.1574 14.0577 35.0422 14.0269 34.9375 13.9727C34.4861 13.744 33.974 13.6639 33.4744 13.7438C32.9748 13.8236 32.5131 14.0593 32.1555 14.4172L31.7305 14.8438H27.3438V3.125C27.3438 1.83281 26.2922 0.78125 25 0.78125H3.125C1.83281 0.78125 0.78125 1.83281 0.78125 3.125V18.75C0.78125 20.0422 1.83281 21.0938 3.125 21.0938H5.46875V40.625C5.46875 42.7789 7.22109 44.5312 9.375 44.5312H18.75V47.6562H14.0625V49.2188H34.375V47.6562H29.6875V44.5312H39.0625C41.2164 44.5312 42.9688 42.7789 42.9688 40.625V29.7188C43.0422 29.7336 43.1172 29.7414 43.1867 29.7766C44.1148 30.2453 45.2328 30.0664 45.9688 29.332L46.5203 28.7812C46.8782 28.4237 47.1139 27.9622 47.1936 27.4626C47.2733 26.9631 47.193 26.4511 46.9641 26C46.9092 25.8952 46.8781 25.7796 46.8731 25.6614C46.8681 25.5433 46.8893 25.4254 46.9352 25.3164C46.9789 25.2164 47.0195 25.1148 47.0602 25.0109C47.1453 24.793 47.3297 24.6234 47.5656 24.5453C48.0469 24.3886 48.4662 24.0834 48.7632 23.6735C49.0602 23.2637 49.2197 22.7702 49.2188 22.2641V21.4859C49.2194 20.9799 49.0599 20.4865 48.7631 20.0766C48.4663 19.6667 48.0474 19.3612 47.5664 19.2039ZM30.5586 24.5461C30.7953 24.6242 30.9789 24.793 31.0641 25.0125C31.1047 25.1156 31.1453 25.2172 31.1898 25.318C31.2352 25.4269 31.256 25.5444 31.2509 25.6623C31.2458 25.7801 31.2148 25.8954 31.1602 26C30.9313 26.4513 30.851 26.9635 30.9309 27.4632C31.0107 27.9629 31.2466 28.4245 31.6047 28.782L32.1555 29.3336C32.5129 29.6916 32.9745 29.9273 33.474 30.0071C33.9736 30.0868 34.4856 30.0064 34.9367 29.7773C35.157 29.6672 35.407 29.6555 35.6203 29.7484C35.7203 29.7922 35.8219 29.8328 35.9258 29.8734C36.1437 29.9586 36.3133 30.143 36.3914 30.3789C36.5277 30.7962 36.776 31.1681 37.1093 31.4538C37.4426 31.7396 37.848 31.9283 38.2812 31.9992V36.7188H10.1562V21.0938H25C25.4831 21.0922 25.9539 20.9412 26.3478 20.6614C26.7417 20.3817 27.0394 19.9869 27.2 19.5312H29.9156C29.6033 19.7525 29.3486 20.0455 29.1729 20.3857C28.9973 20.7258 28.9058 21.1031 28.9062 21.4859V22.2641C28.9062 23.3047 29.5711 24.2219 30.5586 24.5461ZM30.9219 16.4062C30.8727 16.8578 30.9453 17.3234 31.1609 17.75C31.1961 17.8203 31.2039 17.8953 31.2188 17.9688H27.3438V16.4062H30.9219ZM3.125 2.34375H25C25.2072 2.34375 25.4059 2.42606 25.5524 2.57257C25.6989 2.71909 25.7812 2.9178 25.7812 3.125V7.03125H2.34375V3.125C2.34375 2.9178 2.42606 2.71909 2.57257 2.57257C2.71909 2.42606 2.9178 2.34375 3.125 2.34375ZM2.34375 18.75V8.59375H25.7812V18.75C25.7812 18.9572 25.6989 19.1559 25.5524 19.3024C25.4059 19.4489 25.2072 19.5312 25 19.5312H3.125C2.9178 19.5312 2.71909 19.4489 2.57257 19.3024C2.42606 19.1559 2.34375 18.9572 2.34375 18.75ZM28.125 47.6562H20.3125V44.5312H28.125V47.6562ZM39.0625 42.9688H9.375C8.08281 42.9688 7.03125 41.9172 7.03125 40.625V21.0938H8.59375V36.7188C8.59375 37.5805 9.29453 38.2812 10.1562 38.2812H38.2812C39.143 38.2812 39.8438 37.5805 39.8438 36.7188V31.9984C40.1558 31.9469 40.4545 31.834 40.7227 31.6664C40.9908 31.4988 41.2232 31.2797 41.4062 31.0219V40.625C41.4062 41.9172 40.3547 42.9688 39.0625 42.9688ZM47.6562 22.2641C47.6562 22.6281 47.4242 22.9484 47.0781 23.0617C46.7454 23.1689 46.4407 23.3487 46.1859 23.5879C45.9311 23.8272 45.7326 24.12 45.6047 24.4453C45.5719 24.5297 45.5367 24.6133 45.5016 24.6953C45.3644 25.0146 45.2993 25.3603 45.3111 25.7076C45.3228 26.0549 45.4111 26.3954 45.5695 26.7047C45.7336 27.0289 45.6711 27.4195 45.4148 27.6766L44.8641 28.2266C44.7393 28.3521 44.5779 28.4348 44.4031 28.4628C44.2283 28.4907 44.0491 28.4624 43.8914 28.382C43.5824 28.2236 43.2422 28.1353 42.8952 28.1234C42.5481 28.1116 42.2027 28.1764 41.8836 28.3133C41.8009 28.3494 41.7175 28.384 41.6336 28.4172C41.3081 28.5451 41.015 28.7438 40.7757 28.9989C40.5365 29.254 40.3569 29.5591 40.25 29.8922C40.1947 30.0602 40.0877 30.2064 39.9443 30.3099C39.8009 30.4135 39.6284 30.4691 39.4516 30.4688H38.6734C38.3094 30.4688 37.9891 30.2367 37.8758 29.8906C37.7686 29.5579 37.5888 29.2532 37.3496 28.9984C37.1103 28.7436 36.8175 28.5451 36.4922 28.4172C36.4083 28.3842 36.3249 28.3498 36.2422 28.3141C35.9498 28.1872 35.6344 28.1217 35.3156 28.1219C34.9461 28.1219 34.5758 28.2086 34.232 28.382C33.9086 28.5461 33.518 28.4836 33.2602 28.2273L32.7102 27.6766C32.5849 27.5516 32.5024 27.3902 32.4745 27.2155C32.4466 27.0408 32.4746 26.8617 32.5547 26.7039C32.7131 26.3949 32.8014 26.0547 32.8133 25.7077C32.8252 25.3606 32.7603 25.0152 32.6234 24.6961C32.5873 24.6134 32.5527 24.53 32.5195 24.4461C32.3916 24.1206 32.1929 23.8275 31.9378 23.5882C31.6827 23.349 31.3776 23.1694 31.0445 23.0625C30.8767 23.0069 30.7308 22.8998 30.6274 22.7565C30.524 22.6131 30.4685 22.4408 30.4688 22.2641V21.4859C30.4688 21.1219 30.7008 20.8016 31.0469 20.6883C31.3796 20.5811 31.6843 20.4013 31.9391 20.1621C32.1939 19.9228 32.3924 19.63 32.5203 19.3047C32.5531 19.2203 32.5883 19.1367 32.6234 19.0547C32.7606 18.7354 32.8257 18.3897 32.8139 18.0424C32.8022 17.6951 32.7139 17.3546 32.5555 17.0453C32.3914 16.7211 32.4539 16.3305 32.7102 16.0734L33.2609 15.5227C33.518 15.2664 33.9094 15.2047 34.2336 15.368C34.5426 15.5265 34.8827 15.6149 35.2298 15.6268C35.5769 15.6387 35.9223 15.5738 36.2414 15.4367C36.3242 15.4008 36.4078 15.3656 36.4914 15.3328C36.8169 15.2049 37.11 15.0062 37.3493 14.7511C37.5885 14.496 37.7681 14.1909 37.875 13.8578C37.9303 13.6898 38.0373 13.5436 38.1807 13.4401C38.3241 13.3365 38.4966 13.2809 38.6734 13.2812H39.4516C39.8156 13.2812 40.1359 13.5133 40.2492 13.8594C40.4734 14.5406 40.9781 15.0781 41.6328 15.3328C41.7172 15.3656 41.8008 15.4008 41.8828 15.4359C42.5234 15.7141 43.2555 15.6891 43.8922 15.368C44.0498 15.2879 44.2287 15.2597 44.4032 15.2875C44.5778 15.3153 44.7391 15.3976 44.8641 15.5227L45.4141 16.0734C45.6711 16.3305 45.7336 16.7211 45.5695 17.0461C45.4111 17.3551 45.3228 17.6953 45.3109 18.0423C45.2991 18.3894 45.3639 18.7348 45.5008 19.0539C45.5367 19.1367 45.5719 19.2203 45.6047 19.3039C45.7326 19.6294 45.9313 19.9225 46.1864 20.1618C46.4415 20.401 46.7466 20.5806 47.0797 20.6875C47.4242 20.8016 47.6562 21.1219 47.6562 21.4859V22.2641Z" />
                <path d="M10.1562 3.90625H11.7188V5.46875H10.1562V3.90625ZM3.90625 3.90625H5.46875V5.46875H3.90625V3.90625ZM7.03125 3.90625H8.59375V5.46875H7.03125V3.90625ZM26.5625 40.625C26.5625 39.3328 25.5109 38.2812 24.2188 38.2812C22.9266 38.2812 21.875 39.3328 21.875 40.625C21.875 41.9172 22.9266 42.9688 24.2188 42.9688C25.5109 42.9688 26.5625 41.9172 26.5625 40.625ZM24.2188 41.4062C24.0115 41.4062 23.8128 41.3239 23.6663 41.1774C23.5198 41.0309 23.4375 40.8322 23.4375 40.625C23.4375 40.4178 23.5198 40.2191 23.6663 40.0726C23.8128 39.9261 24.0115 39.8438 24.2188 39.8438C24.426 39.8438 24.6247 39.9261 24.7712 40.0726C24.9177 40.2191 25 40.4178 25 40.625C25 40.8322 24.9177 41.0309 24.7712 41.1774C24.6247 41.3239 24.426 41.4062 24.2188 41.4062ZM11.7188 22.6562H27.3438V24.2188H11.7188V22.6562ZM11.7188 25.7812H27.3438V27.3438H11.7188V25.7812ZM11.1664 29.4586L13.7391 32.0312L11.1664 34.6039L12.2711 35.7086L15.9484 32.0312L12.2711 28.3539L11.1664 29.4586ZM16.4062 33.5938H22.6562V35.1562H16.4062V33.5938ZM3.90625 10.1562H7.03125V11.7188H3.90625V10.1562ZM8.59375 10.1562H16.4062V11.7188H8.59375V10.1562ZM17.9688 17.9688H24.2188V10.1562H17.9688V17.9688ZM19.5312 11.7188H22.6562V16.4062H19.5312V11.7188ZM3.90625 13.2812H16.4062V14.8438H3.90625V13.2812ZM13.2812 16.4062H16.4062V17.9688H13.2812V16.4062ZM10.1562 16.4062H11.7188V17.9688H10.1562V16.4062ZM3.90625 16.4062H8.59375V17.9688H3.90625V16.4062Z" />
              </g>
              <defs>
                <clipPath id="clip0_35_2742">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Customized Training Programs"
          description="We design training programs tailored to your organization's needs."
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
              <path d="M28.8592 26.9801H20.3258C20.1186 26.9801 19.9199 26.8978 19.7734 26.7513C19.6268 26.6047 19.5445 26.406 19.5445 26.1988C19.5445 25.9916 19.6268 25.7929 19.7734 25.6464C19.9199 25.4999 20.1186 25.4176 20.3258 25.4176H30.8144C30.93 25.4175 31.0442 25.4431 31.1487 25.4926C31.2533 25.5421 31.3455 25.6142 31.4187 25.7037L31.3838 25.7057C30.3683 25.7622 29.4668 26.2374 28.8592 26.9801ZM20.3258 33.1399H25.5517C25.6282 32.5764 25.8411 32.04 26.172 31.5774H20.3258C20.1186 31.5774 19.9199 31.6598 19.7734 31.8063C19.6268 31.9528 19.5445 32.1515 19.5445 32.3587C19.5445 32.5659 19.6268 32.7646 19.7734 32.9111C19.9199 33.0576 20.1186 33.1399 20.3258 33.1399ZM20.3258 36.5395H26.5787C26.5746 36.5304 26.5702 36.5214 26.5657 36.5125L25.9022 35.2C25.8653 35.1268 25.8309 35.0524 25.799 34.9769H20.3258C20.1186 34.9769 19.9198 35.0592 19.7733 35.2057C19.6268 35.3522 19.5445 35.5509 19.5445 35.7582C19.5445 35.9654 19.6268 36.1641 19.7733 36.3106C19.9198 36.4571 20.1186 36.5395 20.3258 36.5395ZM20.3258 17.4208H30.8144C31.0216 17.4208 31.2203 17.3385 31.3668 17.192C31.5133 17.0455 31.5956 16.8468 31.5956 16.6396C31.5956 16.4324 31.5133 16.2336 31.3668 16.0871C31.2203 15.9406 31.0216 15.8583 30.8144 15.8583H20.3258C20.1186 15.8583 19.9199 15.9406 19.7734 16.0871C19.6268 16.2336 19.5445 16.4324 19.5445 16.6396C19.5445 16.8468 19.6268 17.0455 19.7734 17.192C19.9199 17.3385 20.1186 17.4208 20.3258 17.4208ZM30.8144 12.4589H20.3258C20.1186 12.4589 19.9199 12.5412 19.7734 12.6877C19.6268 12.8342 19.5445 13.0329 19.5445 13.2401C19.5445 13.4473 19.6268 13.6461 19.7734 13.7926C19.9199 13.9391 20.1186 14.0214 20.3258 14.0214H30.8145C30.9171 14.0214 31.0186 14.0012 31.1134 13.9619C31.2082 13.9226 31.2943 13.8651 31.3669 13.7925C31.4394 13.72 31.497 13.6339 31.5362 13.5391C31.5755 13.4443 31.5957 13.3427 31.5957 13.2401C31.5957 13.1375 31.5754 13.0359 31.5362 12.9411C31.4969 12.8463 31.4394 12.7602 31.3668 12.6877C31.2943 12.6151 31.2081 12.5576 31.1133 12.5183C31.0185 12.4791 30.917 12.4589 30.8144 12.4589ZM34.4232 24.5383C35.2129 24.0189 36.1481 23.8481 37.0336 24.026V7.0127C37.0336 5.9792 36.1906 5.13623 35.1571 5.13623H29.4951V7.74668H34.4232V24.5383ZM30.8144 22.0182H20.3258C20.1186 22.0182 19.9199 22.1005 19.7734 22.247C19.6268 22.3935 19.5445 22.5922 19.5445 22.7994C19.5445 23.0066 19.6268 23.2053 19.7734 23.3518C19.9199 23.4984 20.1186 23.5807 20.3258 23.5807H30.8145C30.9171 23.5807 31.0186 23.5604 31.1134 23.5212C31.2082 23.4819 31.2943 23.4244 31.3669 23.3518C31.4394 23.2793 31.497 23.1931 31.5362 23.0983C31.5755 23.0036 31.5957 22.902 31.5957 22.7994C31.5957 22.6968 31.5754 22.5952 31.5362 22.5004C31.4969 22.4056 31.4394 22.3195 31.3668 22.247C31.2943 22.1744 31.2081 22.1169 31.1133 22.0776C31.0185 22.0384 30.917 22.0182 30.8144 22.0182ZM27.1665 40.8062H6.99326V7.74668H11.9213V5.13623H6.25928C5.22578 5.13623 4.38281 5.9792 4.38281 7.0127V41.5401C4.38281 42.5736 5.22578 43.4166 6.25928 43.4166H27.7902L28.5242 41.8401C27.9775 41.6032 27.5172 41.2449 27.1665 40.8062ZM45.4029 34.4951C44.3687 36.5411 44.4456 36.105 44.7177 38.3813C44.8222 39.2557 44.3561 40.063 43.5466 40.4097C41.4392 41.3122 41.7784 41.0275 40.5236 42.9462C40.0416 43.6831 39.1657 44.002 38.3228 43.7473C36.1282 43.084 36.5711 43.084 34.3767 43.7473C33.5337 44.0021 32.6578 43.6832 32.1758 42.9462L31.3709 41.7154C30.9067 41.0058 29.9174 40.7371 29.1528 40.4097C28.3434 40.063 27.8772 39.2557 27.9817 38.3813L28.1563 36.9211C28.204 36.5218 28.1414 36.1666 27.96 35.8076L27.2965 34.4951C26.8992 33.7093 27.0611 32.7912 27.7032 32.1887C29.3749 30.6197 29.1534 31.0033 29.6763 28.7712C29.8771 27.9138 30.5912 27.3146 31.4704 27.2657C33.7595 27.1384 33.3432 27.2899 35.1786 25.916C35.8836 25.3884 36.8157 25.3884 37.5207 25.916C39.3561 27.2898 38.9398 27.1383 41.2289 27.2657C42.1081 27.3146 42.8223 27.9138 43.023 28.7712C43.5459 31.0033 43.3245 30.6197 44.9961 32.1887C45.6384 32.7913 45.8002 33.7093 45.4029 34.4951ZM42.3719 34.6771C42.3719 31.3513 39.6758 28.6551 36.3498 28.6551C33.0238 28.6551 30.3277 31.3513 30.3277 34.6771C30.3277 38.003 33.0239 40.6992 36.3498 40.6992C39.6757 40.6992 42.3719 38.003 42.3719 34.6771ZM39.4813 32.1509C39.3202 32.0206 39.1139 31.9596 38.9079 31.9814C38.7019 32.0031 38.5129 32.1058 38.3826 32.2669L35.8239 35.43L34.2621 33.8682C34.1896 33.7956 34.1035 33.7381 34.0087 33.6988C33.9139 33.6595 33.8124 33.6393 33.7098 33.6393C33.6072 33.6393 33.5056 33.6595 33.4108 33.6988C33.3161 33.7381 33.23 33.7956 33.1574 33.8682C33.0849 33.9407 33.0273 34.0268 32.9881 34.1216C32.9488 34.2163 32.9286 34.3179 32.9286 34.4205C32.9286 34.5231 32.9488 34.6247 32.9881 34.7194C33.0273 34.8142 33.0849 34.9003 33.1574 34.9729L35.3331 37.1484C35.6635 37.4788 36.2062 37.4465 36.4964 37.0829L39.5974 33.2494C39.7276 33.0883 39.7885 32.8821 39.7668 32.6761C39.745 32.4701 39.6423 32.2812 39.4813 32.1509ZM16.5607 17.3023C16.5607 17.6416 16.2832 17.9191 15.9439 17.9191H11.2189C10.8797 17.9191 10.6021 17.6416 10.6021 17.3023V12.5773C10.6021 12.2381 10.8797 11.9605 11.2189 11.9605H15.9439C16.2832 11.9605 16.5607 12.2381 16.5607 12.5773V17.3023ZM15.3297 13.4189C15.1686 13.2887 14.9624 13.2277 14.7564 13.2494C14.5503 13.2711 14.3614 13.3738 14.2311 13.5349L13.2989 14.6872L12.877 14.2652C12.7296 14.1229 12.5323 14.0442 12.3274 14.046C12.1226 14.0477 11.9266 14.1299 11.7818 14.2748C11.6369 14.4196 11.5548 14.6156 11.553 14.8204C11.5512 15.0252 11.63 15.2226 11.7723 15.3699L12.808 16.4057C13.1384 16.736 13.6811 16.7037 13.9713 16.3401L15.4457 14.5175C15.5102 14.4377 15.5584 14.3461 15.5875 14.2477C15.6166 14.1493 15.626 14.0462 15.6152 13.9442C15.6045 13.8422 15.5737 13.7433 15.5247 13.6532C15.4757 13.563 15.4094 13.4835 15.3297 13.4189ZM16.5607 26.8616C16.5607 27.2009 16.2832 27.4784 15.9439 27.4784H11.2189C10.8797 27.4784 10.6021 27.2009 10.6021 26.8616V22.1366C10.6021 21.7974 10.8797 21.5198 11.2189 21.5198H15.9439C16.2832 21.5198 16.5607 21.7974 16.5607 22.1366V26.8616ZM15.3297 22.9782C15.2499 22.9137 15.1583 22.8655 15.0599 22.8364C14.9615 22.8073 14.8584 22.7979 14.7563 22.8086C14.6543 22.8194 14.5554 22.8502 14.4653 22.8992C14.3752 22.9482 14.2956 23.0145 14.2311 23.0942L13.2989 24.2466L12.8769 23.8246C12.8043 23.7521 12.7182 23.6945 12.6234 23.6553C12.5287 23.616 12.4271 23.5958 12.3245 23.5958C12.2219 23.5958 12.1204 23.616 12.0256 23.6553C11.9308 23.6945 11.8447 23.7521 11.7722 23.8246C11.6996 23.8971 11.6421 23.9832 11.6028 24.078C11.5636 24.1728 11.5433 24.2744 11.5433 24.377C11.5433 24.4795 11.5636 24.5811 11.6028 24.6759C11.6421 24.7707 11.6996 24.8568 11.7722 24.9293L12.8079 25.965C13.1383 26.2954 13.681 26.2631 13.9712 25.8995L15.4456 24.0769C15.5101 23.9971 15.5583 23.9054 15.5874 23.8071C15.6166 23.7087 15.626 23.6055 15.6152 23.5035C15.6045 23.4015 15.5737 23.3026 15.5247 23.2125C15.4757 23.1223 15.4094 23.0427 15.3297 22.9782ZM16.5607 31.6959V36.4209C16.5607 36.7602 16.2832 37.0377 15.9439 37.0377H11.2189C10.8797 37.0377 10.6021 36.7602 10.6021 36.4209V31.6959C10.6021 31.3566 10.8797 31.0791 11.2189 31.0791H15.9439C16.2832 31.0791 16.5607 31.3566 16.5607 31.6959ZM15.3297 32.5376C15.2499 32.4731 15.1583 32.4249 15.0599 32.3958C14.9615 32.3667 14.8584 32.3573 14.7563 32.368C14.6543 32.3788 14.5554 32.4096 14.4653 32.4586C14.3752 32.5076 14.2956 32.5738 14.2311 32.6536L13.2989 33.806L12.8769 33.3839C12.7295 33.2416 12.5322 33.1628 12.3273 33.1646C12.1225 33.1664 11.9265 33.2486 11.7817 33.3934C11.6368 33.5383 11.5547 33.7342 11.5529 33.939C11.5511 34.1439 11.6299 34.3412 11.7722 34.4886L12.8079 35.5243C13.1383 35.8547 13.681 35.8224 13.9712 35.4588L15.4456 33.6361C15.5101 33.5564 15.5583 33.4647 15.5874 33.3664C15.6165 33.268 15.626 33.1649 15.6152 33.0629C15.6045 32.9608 15.5737 32.8619 15.5247 32.7718C15.4757 32.6817 15.4094 32.6021 15.3297 32.5376ZM13.4838 8.39258V4.49023C13.4838 4.22129 13.7031 4.00195 13.9721 4.00195H17.6073C17.9449 2.60234 19.2051 1.5625 20.7083 1.5625C22.2115 1.5625 23.4717 2.60234 23.8093 4.00195H27.4445C27.7135 4.00195 27.9328 4.22129 27.9328 4.49023V8.39258C27.9328 8.66152 27.7135 8.88086 27.4445 8.88086H13.9721C13.8426 8.8806 13.7186 8.82907 13.6271 8.73756C13.5356 8.64605 13.484 8.522 13.4838 8.39258ZM19.8645 4.17773C19.8645 4.40155 19.9534 4.6162 20.1116 4.77446C20.2699 4.93272 20.4845 5.02163 20.7083 5.02163C20.9322 5.02163 21.1468 4.93272 21.3051 4.77446C21.4633 4.6162 21.5522 4.40155 21.5522 4.17773C21.5522 3.95392 21.4633 3.73927 21.3051 3.58101C21.1468 3.42275 20.9322 3.33384 20.7083 3.33384C20.4845 3.33384 20.2699 3.42275 20.1116 3.58101C19.9534 3.73927 19.8645 3.95392 19.8645 4.17773ZM30.8683 43.8014C30.7364 43.5998 30.083 42.5381 29.9591 42.4601L28.1937 46.252C28.1342 46.3797 28.2425 46.5211 28.3813 46.4968L31.0189 46.0359L32.3641 48.3509C32.4349 48.4726 32.6129 48.4646 32.6723 48.3368L34.0456 45.3869C32.7956 45.4743 31.5792 44.8885 30.8683 43.8014ZM42.7406 42.4601C42.6165 42.5383 41.9633 43.5997 41.8313 43.8014C41.1204 44.8885 39.904 45.4743 38.6541 45.3871L40.0274 48.337C40.0869 48.4646 40.2649 48.4728 40.3356 48.3511L41.6809 46.0361L44.3184 46.497C44.4572 46.5213 44.5656 46.3799 44.5061 46.2521L42.7406 42.4601Z" />
            </svg>
          }
          title="Certification and Accreditation"
          description="We provide certification and accreditation for specific skills."
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
              <path d="M34.6475 15.4326C31.3946 15.3125 28.001 15.3936 25.2159 16.7949C25.0684 16.8691 24.9307 16.8691 24.7833 16.7949C21.9981 15.3945 18.6045 15.3135 15.3516 15.4336H15.3477C14.9525 15.449 14.5787 15.6171 14.305 15.9025C14.0312 16.1879 13.8789 16.5684 13.8799 16.9639V18.1602H12.3965C11.5723 18.1602 10.9014 18.8311 10.9014 19.6553V33.1143C10.9014 33.9385 11.5723 34.6094 12.3965 34.6094H37.6036C38.4278 34.6094 39.0987 33.9385 39.0987 33.1143V19.6533C39.0987 18.8291 38.4278 18.1582 37.6036 18.1582H36.1202V16.9629C36.1204 16.5668 35.9672 16.1861 35.6925 15.9007C35.4179 15.6153 35.0433 15.4475 34.6475 15.4326ZM34.5577 16.9912V29.7373C31.5606 29.627 28.4405 29.6953 25.7803 30.8389V18.3272C25.7803 18.3018 25.7793 18.2773 25.7764 18.2529C25.8243 18.2334 25.8711 18.2119 25.918 18.1885C28.3799 16.9502 31.5264 16.8799 34.5577 16.9912ZM15.4405 16.9912C18.4747 16.8809 21.6192 16.9512 24.0801 18.1885C24.127 18.2119 24.1739 18.2334 24.2217 18.2529C24.2198 18.2773 24.2178 18.3018 24.2178 18.3272V30.8398C22.1006 29.9297 19.6924 29.6992 17.2862 29.6992C16.669 29.6992 16.0518 29.7139 15.4395 29.7363V16.9912H15.4405ZM37.5362 19.7197V33.0459H12.462V19.7197H13.879V29.7686C13.879 30.1943 14.0411 30.5752 14.3477 30.8701C14.6504 31.1621 15.0352 31.3086 15.4639 31.2988C18.4786 31.1865 21.6094 31.2539 24.0801 32.4951C24.377 32.6445 24.6875 32.7188 24.9991 32.7188C25.3096 32.7188 25.6211 32.6445 25.917 32.4951C28.3887 31.2539 31.5196 31.1865 34.543 31.2988C34.962 31.3096 35.3477 31.1621 35.6504 30.8701C35.9571 30.5742 36.1192 30.1934 36.1192 29.7676V19.7188H37.5362V19.7197ZM16.4483 18.9805C16.4483 18.5488 16.7979 18.2002 17.2286 18.2002C19.4288 18.2002 21.1465 18.3887 22.6348 18.792C23.0508 18.9053 23.2969 19.334 23.1836 19.75C23.1293 19.9498 22.9979 20.1198 22.8182 20.2227C22.6386 20.3256 22.4255 20.353 22.2256 20.2988C20.875 19.9326 19.2872 19.7617 17.2286 19.7617C16.7979 19.7607 16.4483 19.4111 16.4483 18.9805ZM26.8145 19.75C26.7012 19.334 26.9473 18.9053 27.3633 18.792C28.8516 18.3877 30.5694 18.2002 32.7696 18.2002C33.2012 18.2002 33.5499 18.5498 33.5499 18.9805C33.5499 19.4111 33.2002 19.7607 32.7696 19.7607C30.711 19.7607 29.1231 19.9316 27.7725 20.2979C27.7041 20.3164 27.6348 20.3252 27.5674 20.3252C27.3962 20.3254 27.2296 20.2692 27.0935 20.1652C26.9574 20.0612 26.8593 19.9153 26.8145 19.75ZM33.5499 21.7871C33.5499 22.2188 33.2002 22.5674 32.7696 22.5674C30.7129 22.5674 29.125 22.7373 27.7715 23.1025C27.7032 23.1211 27.6348 23.1299 27.5674 23.1299C27.3782 23.1298 27.1954 23.0609 27.0532 22.9361C26.9109 22.8113 26.8188 22.639 26.7941 22.4514C26.7694 22.2637 26.8137 22.0735 26.9188 21.9161C27.0238 21.7587 27.1825 21.6448 27.3653 21.5957C28.8545 21.1943 30.5723 21.0068 32.7696 21.0068C33.2002 21.0068 33.5499 21.3564 33.5499 21.7871ZM16.4483 21.7871C16.4483 21.3555 16.7979 21.0068 17.2286 21.0068C19.4258 21.0068 21.1436 21.1943 22.6329 21.5957C23.0489 21.708 23.2959 22.1367 23.1836 22.5527C23.0899 22.9004 22.7745 23.1299 22.4307 23.1299C22.3633 23.1299 22.295 23.1211 22.2266 23.1025C20.8731 22.7373 19.2852 22.5674 17.2286 22.5674C16.7979 22.5684 16.4483 22.2188 16.4483 21.7871ZM16.4483 24.5957C16.4473 24.165 16.7969 23.8145 17.2276 23.8135H17.2833C19.4434 23.8135 21.1446 24.001 22.6338 24.4023C23.0499 24.5147 23.2969 24.9434 23.1846 25.3594C23.0909 25.707 22.7754 25.9365 22.4317 25.9365C22.3643 25.9365 22.2959 25.9277 22.2276 25.9092C20.875 25.5449 19.3028 25.374 17.2842 25.374H17.2295C16.7979 25.375 16.4483 25.0264 16.4483 24.5957ZM32.7706 23.8135C32.8731 23.8136 32.9746 23.8339 33.0693 23.8733C33.164 23.9127 33.25 23.9704 33.3224 24.0431C33.3947 24.1157 33.4521 24.2019 33.4911 24.2967C33.5301 24.3916 33.5501 24.4932 33.5499 24.5957C33.5489 25.0264 33.2002 25.375 32.7696 25.375C32.7491 25.374 32.7334 25.375 32.7149 25.375C30.6963 25.375 29.1241 25.5449 27.7715 25.9102C27.7032 25.9287 27.6348 25.9375 27.5674 25.9375C27.3782 25.9374 27.1954 25.8685 27.0532 25.7437C26.9109 25.6189 26.8188 25.4466 26.7941 25.259C26.7694 25.0714 26.8137 24.8811 26.9188 24.7237C27.0238 24.5663 27.1825 24.4525 27.3653 24.4033C28.8663 23.998 30.587 23.8086 32.7706 23.8135ZM16.4483 27.3984C16.4483 26.9668 16.7979 26.6182 17.2286 26.6182C19.4288 26.6182 21.1465 26.8066 22.6348 27.21C23.0508 27.3232 23.2969 27.752 23.1836 28.168C23.1293 28.3677 22.9979 28.5378 22.8182 28.6407C22.6386 28.7436 22.4255 28.771 22.2256 28.7168C20.875 28.3506 19.2872 28.1797 17.2286 28.1797C16.7979 28.1797 16.4483 27.8301 16.4483 27.3984ZM26.8145 28.168C26.7012 27.752 26.9473 27.3232 27.3633 27.21C28.8506 26.8057 30.5694 26.6182 32.7696 26.6182C33.2012 26.6182 33.5499 26.9678 33.5499 27.3984C33.5499 27.8291 33.2002 28.1787 32.7696 28.1787C30.711 28.1787 29.1231 28.3496 27.7725 28.7158C27.7041 28.7344 27.6348 28.7432 27.5674 28.7432C27.3962 28.7434 27.2296 28.6872 27.0935 28.5832C26.9574 28.4792 26.8593 28.3333 26.8145 28.168ZM44.625 34.4932C42.8653 38.126 40.1348 41.1973 36.7286 43.376C33.2286 45.6143 29.1729 46.7979 24.9991 46.7979C19.3272 46.7979 13.9551 44.6309 9.87212 40.6953C6.1104 37.0693 3.80767 32.2979 3.30571 27.1465L1.39751 29.6143C1.32455 29.7087 1.23087 29.7851 1.12369 29.8376C1.0165 29.8901 0.89869 29.9173 0.779345 29.917C0.612352 29.917 0.444384 29.8643 0.302782 29.7539C0.139118 29.6272 0.0324648 29.4408 0.00627671 29.2355C-0.0199113 29.0302 0.0365103 28.8229 0.163134 28.6592L3.36333 24.5205C3.49003 24.3568 3.67653 24.25 3.88188 24.2236C4.08794 24.1973 4.29497 24.2539 4.45903 24.3809L8.5977 27.584C8.75754 27.712 8.86069 27.8976 8.88492 28.1009C8.90914 28.3042 8.8525 28.5089 8.7272 28.6709C8.6019 28.8328 8.41799 28.939 8.21511 28.9666C8.01222 28.9942 7.80662 28.941 7.64263 28.8184L4.82915 26.6416C5.66216 37.1348 14.3653 45.2373 24.9991 45.2373C32.7061 45.2373 39.8584 40.7529 43.2198 33.8135C43.4082 33.4258 43.875 33.2637 44.2627 33.4512C44.6504 33.6387 44.8125 34.1055 44.625 34.4932ZM49.836 21.3408L46.6358 25.4766C46.5628 25.571 46.4691 25.6474 46.362 25.6999C46.2548 25.7524 46.137 25.7796 46.0176 25.7793C45.8506 25.7793 45.6827 25.7266 45.5411 25.6162L41.4024 22.416C41.2426 22.2881 41.1394 22.1024 41.1152 21.8991C41.091 21.6958 41.1476 21.4911 41.2729 21.3291C41.3982 21.1672 41.5821 21.061 41.785 21.0334C41.9879 21.0058 42.1935 21.059 42.3575 21.1816L45.168 23.3555C44.3311 12.874 35.6036 4.7627 24.9991 4.7627C17.1749 4.7627 10.1915 9.14062 6.77544 16.1875C6.58696 16.5752 6.12016 16.7373 5.73247 16.5498C5.34477 16.3613 5.18266 15.8945 5.37016 15.5068C7.13091 11.874 9.86235 8.80273 13.2696 6.62402C16.7696 4.38477 20.8252 3.20215 24.9991 3.20215C30.6436 3.20215 35.9971 5.35156 40.0733 9.25391C43.8624 12.8828 46.1866 17.6758 46.6915 22.8525L48.6006 20.3848C48.7273 20.2211 48.9138 20.1145 49.1191 20.0883C49.3244 20.0621 49.5317 20.1185 49.6954 20.2451C50.0372 20.5098 50.0997 21 49.836 21.3408Z" />
            </svg>
          }
          title="Continuous Learning Opportunities"
          description="We offer ongoing training to keep your workforce up-to-date."
        />
      </div>
    </section>
  );
};

export default SkillAssessmentTraining;