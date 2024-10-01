"use client";

import Button from "../../ui/Button";
import SubServiceCard from "../../common/SubServiceCard";
import { Link } from "@/i18n/routing";
import ServiceImage from "@/components/common/ServiceImage";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";

const OnboardingSupport = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold lg:text-4xl">
            Onboarding Support
          </h2>
          <p className="text-sm font-medium">
            Onboarding support involves assisting new employees in adapting to
            their roles and integrating into the organization. This process
            includes orientation to company policies, introducing them to team
            members, and providing necessary training and resources. Effective
            onboarding ensures that new hires feel welcomed, understand their
            responsibilities, and can contribute to the organization's success
            quickly. It also fosters employee engagement and retention by
            setting clear expectations and helping new employees feel valued and
            prepared for their new roles.
          </p>
          <div>
            <Link href="/service/onboarding-support">
              <Button>See More</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Onboarding Support.png"
            title1="Role-Specific Training"
            desc1="Customized training tailored to roles."
            title2="Orientation Programs"
            desc2="Introducing new hires to company."
            title3="Cultural Assimilation"
            desc3="Adapting to company culture"
          />
        </FadeInRightWithSlowBounce>
      </div>
      <div className="container mt-[50px] grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* card */}
        <SubServiceCard
          icon={
            <svg
              className="mx-auto stroke-secondary group-hover:stroke-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2329 48.5352C18.1072 48.5352 22.0586 44.5838 22.0586 39.7095C22.0586 34.8352 18.1072 30.8838 13.2329 30.8838C8.35862 30.8838 4.40723 34.8352 4.40723 39.7095C4.40723 44.5838 8.35862 48.5352 13.2329 48.5352Z"
                stroke-width="2.92969"
                stroke-miterlimit="10"
              />
              <path
                d="M13.2329 44.1162V35.3027M8.82617 39.7095H17.6396M10.291 31.3865V13.2324L22.0586 1.46484H45.5938V45.5933H19.8109"
                stroke-width="2.92969"
                stroke-miterlimit="10"
              />
              <path
                d="M22.0586 1.46484V13.2324H10.291"
                stroke-width="2.92969"
                stroke-miterlimit="10"
              />
              <path
                d="M33.826 31.6451C35.661 31.6451 37.1485 30.1576 37.1485 28.3226C37.1485 26.4876 35.661 25 33.826 25C31.991 25 30.5034 26.4876 30.5034 28.3226C30.5034 30.1576 31.991 31.6451 33.826 31.6451Z"
                stroke-width="2.92969"
                stroke-miterlimit="10"
              />
              <path
                d="M14.71 19.1162H41.1748M41.1748 13.2324H32.3613M14.71 25H23.5234M41.1748 7.34863H38.2451M39.71 39.7095V37.5289C39.71 34.2794 37.0757 31.6451 33.8262 31.6451C30.5767 31.6451 27.9424 34.2794 27.9424 37.5289V39.7095H39.71Z"
                stroke-width="2.92969"
                stroke-miterlimit="10"
              />
            </svg>
          }
          title="New Hire Documentation"
          description="We assist with the preparation and management of new hire paperwork."
        />

        {/* card */}
        <SubServiceCard
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_354_773)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M27.696 7.67099C30.0938 8.64452 31.8452 10.8775 32.1307 13.5485C32.1424 13.6579 32.1309 13.7686 32.097 13.8732C32.0631 13.9779 32.0076 14.0743 31.9341 14.1561C31.8605 14.2379 31.7706 14.3034 31.6701 14.3482C31.5696 14.393 31.4608 14.4162 31.3508 14.4162H18.6477C18.5376 14.4162 18.4288 14.393 18.3283 14.3482C18.2277 14.3034 18.1378 14.2379 18.0642 14.156C17.9907 14.0742 17.9352 13.9777 17.9013 13.873C17.8675 13.7683 17.8561 13.6576 17.8679 13.5481C18.1547 10.8771 19.9067 8.64422 22.3039 7.67089C21.4952 6.93549 20.9863 5.87559 20.9863 4.70089C20.9863 2.4902 22.7886 0.686279 24.9992 0.686279C27.2119 0.686279 29.0139 2.4903 29.0139 4.70089C29.0139 5.87569 28.5049 6.93559 27.696 7.67099ZM24.9992 8.7155C22.4142 8.7155 20.2378 10.4666 19.5908 12.8477H30.4081C29.7624 10.4665 27.5856 8.7155 24.9992 8.7155ZM24.9992 7.14687C26.3474 7.14687 27.4452 6.04775 27.4452 4.70089C27.4452 3.35402 26.3474 2.25491 24.9992 2.25491C23.6525 2.25491 22.5549 3.35412 22.5549 4.70089C22.5549 6.04765 23.6525 7.14687 24.9992 7.14687ZM27.696 42.5685C30.0938 43.542 31.8452 45.7749 32.1307 48.4461C32.1424 48.5555 32.1309 48.6661 32.097 48.7708C32.0631 48.8755 32.0076 48.9718 31.9341 49.0537C31.8605 49.1355 31.7706 49.2009 31.6701 49.2457C31.5696 49.2905 31.4608 49.3137 31.3508 49.3137H18.6477C18.5376 49.3137 18.4288 49.2906 18.3283 49.2457C18.2278 49.2009 18.1378 49.1354 18.0643 49.0536C17.9907 48.9717 17.9352 48.8753 17.9014 48.7705C17.8675 48.6658 17.8561 48.5551 17.8679 48.4457C18.1547 45.7745 19.9067 43.5417 22.3039 42.5683C21.4952 41.8329 20.9863 40.7731 20.9863 39.5984C20.9863 37.3877 22.7886 35.5838 24.9992 35.5838C27.2119 35.5838 29.0139 37.3878 29.0139 39.5984C29.0139 40.7731 28.5049 41.8331 27.696 42.5685ZM24.9992 43.613C22.4142 43.613 20.2378 45.364 19.5908 47.7451H30.4081C29.7624 45.364 27.5856 43.613 24.9992 43.613ZM24.9992 42.0444C26.3474 42.0444 27.4452 40.9452 27.4452 39.5984C27.4452 38.2516 26.3474 37.1525 24.9992 37.1525C23.6525 37.1525 22.5549 38.2517 22.5549 39.5984C22.5549 40.9451 23.6525 42.0444 24.9992 42.0444ZM44.8739 25.1197C47.2717 26.0932 49.0231 28.3262 49.3086 30.9974C49.3202 31.1068 49.3087 31.2174 49.2749 31.3221C49.241 31.4267 49.1855 31.5231 49.1119 31.6049C49.0384 31.6868 48.9484 31.7522 48.8479 31.797C48.7475 31.8418 48.6387 31.865 48.5287 31.865H35.8255C35.7155 31.865 35.6066 31.8418 35.5061 31.797C35.4056 31.7522 35.3156 31.6867 35.2421 31.6048C35.1685 31.523 35.113 31.4265 35.0792 31.3218C35.0454 31.2171 35.034 31.1064 35.0457 30.997C35.3326 28.3258 37.0845 26.0929 39.4817 25.1196C38.6731 24.3842 38.1642 23.3243 38.1642 22.1496C38.1642 19.9389 39.9664 18.135 42.1771 18.135C44.3898 18.135 46.1917 19.939 46.1917 22.1496C46.1917 23.3244 45.6829 24.3843 44.8739 25.1197ZM42.1771 26.1642C39.5921 26.1642 37.4156 27.9153 36.7688 30.2964H47.586C46.9402 27.9153 44.7636 26.1642 42.1771 26.1642ZM42.1771 24.5956C43.5252 24.5956 44.6231 23.4965 44.6231 22.1496C44.6231 20.8028 43.5252 19.7036 42.1771 19.7036C40.8304 19.7036 39.7328 20.8029 39.7328 22.1496C39.7328 23.4964 40.8304 24.5956 42.1771 24.5956ZM10.5182 25.1197C12.9159 26.0932 14.6674 28.3262 14.9528 30.9974C14.9645 31.1068 14.9531 31.2174 14.9192 31.3221C14.8854 31.4268 14.8299 31.5232 14.7563 31.6051C14.6828 31.6869 14.5928 31.7523 14.4923 31.7971C14.3918 31.8419 14.283 31.865 14.173 31.865H1.46983C1.35977 31.865 1.25095 31.8418 1.15043 31.797C1.04992 31.7522 0.959957 31.6867 0.886407 31.6048C0.812856 31.523 0.75736 31.4265 0.723527 31.3218C0.689693 31.2171 0.67828 31.1064 0.690029 30.997C0.976891 28.3258 2.72885 26.0929 5.12601 25.1196C4.31738 24.3842 3.80846 23.3243 3.80846 22.1496C3.80846 19.9389 5.61072 18.135 7.8214 18.135C10.034 18.135 11.836 19.939 11.836 22.1496C11.836 23.3244 11.3271 24.3843 10.5182 25.1197ZM7.8214 26.1642C5.2363 26.1642 3.05993 27.9153 2.41297 30.2964H13.2302C12.5845 27.9153 10.4078 26.1642 7.8214 26.1642ZM7.8214 24.5956C9.16954 24.5956 10.2674 23.4965 10.2674 22.1496C10.2674 20.8028 9.16954 19.7036 7.8214 19.7036C6.47464 19.7036 5.37709 20.8029 5.37709 22.1496C5.37709 23.4964 6.47464 24.5956 7.8214 24.5956ZM27.2039 17.5793C27.719 17.7319 28.2166 17.9381 28.6887 18.1946L29.6409 17.7712C29.7858 17.7068 29.9468 17.6878 30.1027 17.7167C30.2586 17.7456 30.4021 17.8211 30.5142 17.9332L32.066 19.485C32.178 19.597 32.2534 19.7403 32.2824 19.896C32.3114 20.0516 32.2926 20.2125 32.2285 20.3573L31.8065 21.3099C32.0635 21.7829 32.27 22.2817 32.4226 22.7979L33.3935 23.1716C33.5414 23.2285 33.6686 23.3289 33.7584 23.4596C33.8481 23.5903 33.8961 23.7451 33.8961 23.9036V26.0986C33.8961 26.2571 33.8481 26.4119 33.7583 26.5426C33.6686 26.6733 33.5414 26.7737 33.3935 26.8306L32.4221 27.2044C32.2688 27.7194 32.0624 28.217 31.8062 28.6893L32.2285 29.6427C32.2926 29.7875 32.3114 29.9484 32.2824 30.1041C32.2534 30.2597 32.178 30.403 32.066 30.515L30.5142 32.0668C30.4023 32.1787 30.259 32.2542 30.1033 32.2832C29.9476 32.3122 29.7868 32.2934 29.642 32.2292L28.6898 31.8075C28.2174 32.0642 27.7193 32.2705 27.2037 32.423L26.8298 33.3942C26.7729 33.5422 26.6725 33.6694 26.5418 33.7591C26.4112 33.8488 26.2564 33.8969 26.0979 33.8969H23.9029C23.7443 33.8969 23.5895 33.8489 23.4589 33.7591C23.3282 33.6694 23.2277 33.5422 23.1708 33.3942L22.7972 32.4231C22.2813 32.2701 21.7829 32.0635 21.3099 31.807L20.3565 32.2292C20.2117 32.2934 20.0509 32.3122 19.8952 32.2832C19.7395 32.2542 19.5962 32.1787 19.4842 32.0668L17.9325 30.515C17.8204 30.4029 17.7449 30.2594 17.7159 30.1035C17.687 29.9476 17.706 29.7866 17.7704 29.6417L18.1937 28.6899C17.9371 28.2177 17.7305 27.7199 17.5773 27.2048L16.605 26.8306C16.4571 26.7737 16.3299 26.6733 16.2402 26.5426C16.1504 26.4119 16.1024 26.2571 16.1024 26.0986V23.9036C16.1024 23.7451 16.1504 23.5903 16.2401 23.4596C16.3299 23.3289 16.4571 23.2285 16.605 23.1716L17.577 22.7976C17.7303 22.2817 17.937 21.7834 18.1939 21.3105L17.7704 20.3583C17.706 20.2134 17.687 20.0524 17.7159 19.8965C17.7449 19.7406 17.8204 19.5971 17.9325 19.485L19.4842 17.9332C19.5964 17.8211 19.7399 17.7456 19.8958 17.7167C20.0517 17.6878 20.2127 17.7068 20.3576 17.7712L21.3097 18.1946C21.782 17.938 22.2799 17.7317 22.7952 17.5791L23.1711 16.6051C23.2281 16.4573 23.3286 16.3303 23.4592 16.2407C23.5898 16.1511 23.7445 16.1031 23.9029 16.1031H26.0979C26.4225 16.1031 26.7136 16.3031 26.83 16.6062L27.2039 17.5793ZM25.883 18.515L25.559 17.6718H24.4409L24.1151 18.516C24.0693 18.6348 23.9953 18.7406 23.8994 18.8244C23.8035 18.9081 23.6886 18.9673 23.5647 18.9967C22.9299 19.1476 22.3232 19.399 21.7678 19.7414C21.6592 19.8083 21.536 19.8477 21.4088 19.8562C21.2816 19.8647 21.1542 19.8421 21.0377 19.7903L20.2125 19.4234L19.4227 20.2132L19.7895 21.0384C19.8413 21.1549 19.864 21.2823 19.8554 21.4095C19.8469 21.5368 19.8075 21.66 19.7406 21.7685C19.3977 22.3255 19.1455 22.9333 18.9934 23.5694C18.9637 23.693 18.9044 23.8076 18.8206 23.9032C18.7368 23.9988 18.631 24.0727 18.5124 24.1183L17.671 24.4422V25.5601L18.5124 25.8839C18.631 25.9296 18.7367 26.0033 18.8204 26.0988C18.9042 26.1944 18.9635 26.3088 18.9933 26.4324C19.1461 27.0676 19.3968 27.6755 19.7399 28.2304C19.8071 28.339 19.8467 28.4624 19.8554 28.5898C19.864 28.7173 19.8414 28.8449 19.7895 28.9616L19.4227 29.7868L20.2131 30.5772L21.0387 30.2115C21.1548 30.16 21.2816 30.1376 21.4083 30.146C21.5351 30.1544 21.6578 30.1935 21.7661 30.2598C22.3231 30.6011 22.929 30.8543 23.5664 31.0054C23.6905 31.0348 23.8055 31.094 23.9016 31.1779C23.9976 31.2618 24.0718 31.3679 24.1176 31.4869L24.4414 32.3282H25.5593L25.8832 31.4869C25.9289 31.3679 26.003 31.262 26.0989 31.1781C26.1949 31.0942 26.3098 31.035 26.4338 31.0055C27.0683 30.8552 27.6747 30.604 28.2296 30.2615C28.3381 30.1944 28.4613 30.1548 28.5885 30.1461C28.7158 30.1374 28.8432 30.1598 28.9598 30.2115L29.7854 30.5772L30.5764 29.7862L30.2107 28.9606C30.1593 28.8445 30.1368 28.7176 30.1452 28.5909C30.1536 28.4642 30.1927 28.3414 30.2591 28.2331C30.6003 27.6761 30.8537 27.0701 31.0047 26.4345C31.0342 26.3105 31.0934 26.1956 31.1773 26.0997C31.2612 26.0037 31.3672 25.9297 31.4861 25.8839L32.3275 25.5601V24.4422L31.4861 24.1183C31.3671 24.0725 31.261 23.9984 31.1771 23.9024C31.0932 23.8063 31.034 23.6913 31.0046 23.5672C30.8542 22.9317 30.6028 22.3244 30.2601 21.7685C30.1933 21.6601 30.1539 21.5371 30.1453 21.4101C30.1367 21.2831 30.1592 21.1558 30.2107 21.0394L30.5764 20.2138L29.786 19.4234L28.9608 19.7903C28.8443 19.8421 28.7169 19.8647 28.5897 19.8562C28.4625 19.8477 28.3393 19.8083 28.2307 19.7414C27.6752 19.399 27.0686 19.1476 26.4338 18.9967C26.3097 18.9672 26.1947 18.9079 26.0987 18.824C26.0028 18.7401 25.9287 18.634 25.883 18.515ZM24.9992 20.3871C27.548 20.3871 29.6143 22.4513 29.6143 25C29.6143 27.5485 27.5478 29.6151 24.9992 29.6151C22.4505 29.6151 20.3863 27.5487 20.3863 25C20.3863 22.4512 22.4504 20.3871 24.9992 20.3871ZM24.9992 21.9557C23.3172 21.9557 21.9549 23.3179 21.9549 25C21.9549 26.6823 23.317 28.0465 24.9992 28.0465C26.6816 28.0465 28.0457 26.6824 28.0457 25C28.0457 23.3178 26.6815 21.9557 24.9992 21.9557ZM32.5052 33.0667C32.5392 32.9361 32.6073 32.8126 32.7095 32.7103C32.8118 32.608 32.9353 32.5399 33.0659 32.506C33.1975 32.4716 33.3357 32.472 33.4671 32.5073L36.9749 33.4472C37.3931 33.5592 37.6416 33.9896 37.5295 34.4078C37.4175 34.8259 36.9871 35.0744 36.569 34.9624L35.8885 34.78L42.9558 41.8474C43.2619 42.1534 43.2619 42.6505 42.9558 42.9566C42.6497 43.2627 42.1527 43.2627 41.8466 42.9566L34.7793 35.8892L34.9616 36.5697C35.0737 36.9878 34.8251 37.4182 34.407 37.5303C33.9889 37.6424 33.5585 37.3938 33.4464 36.9757L32.5065 33.4678C32.4713 33.3365 32.4708 33.1982 32.5052 33.0667ZM32.5251 16.5135L33.4651 13.0056C33.5191 12.8047 33.6505 12.6335 33.8306 12.5295C34.0108 12.4255 34.2248 12.3973 34.4257 12.451C34.6266 12.5049 34.7978 12.6364 34.9018 12.8165C35.0058 12.9966 35.0341 13.2107 34.9803 13.4116L34.798 14.0922L41.8653 7.02481C42.1714 6.71873 42.6684 6.71873 42.9744 7.02481C43.2805 7.33089 43.2805 7.82785 42.9744 8.13393L35.9071 15.2013L36.5877 15.0189C36.7886 14.9652 37.0026 14.9934 37.1828 15.0974C37.3629 15.2014 37.4943 15.3727 37.5483 15.5735C37.602 15.7745 37.5738 15.9885 37.4698 16.1686C37.3658 16.3487 37.1945 16.4802 36.9937 16.5341L33.4857 17.4741C33.3858 17.5008 33.2816 17.5076 33.1791 17.4939C33.0766 17.4802 32.9778 17.4464 32.8884 17.3944C32.7991 17.3424 32.7208 17.2732 32.6583 17.1909C32.5957 17.1086 32.55 17.0147 32.5239 16.9146C32.4895 16.7831 32.49 16.6449 32.5251 16.5135ZM15.2192 14.0734L15.0369 13.3929C14.9248 12.9748 15.1734 12.5444 15.5915 12.4324C16.0096 12.3203 16.44 12.5688 16.5521 12.987L17.492 16.4948C17.5277 16.6278 17.5277 16.7678 17.492 16.9008C17.4564 17.0338 17.3863 17.155 17.289 17.2524C17.1916 17.3498 17.0704 17.4198 16.9374 17.4554C16.8044 17.4911 16.6644 17.4911 16.5314 17.4554L13.0236 16.5155C12.6054 16.4034 12.3569 15.973 12.469 15.5549C12.581 15.1368 13.0114 14.8882 13.4295 15.0003L14.11 15.1827L7.04268 8.1153C6.7366 7.80922 6.7366 7.31216 7.04268 7.00608C7.34875 6.7 7.84581 6.7 8.15189 7.00608L15.2192 14.0734ZM14.0914 34.7614L13.4108 34.9437C13.2099 34.9975 12.9959 34.9692 12.8157 34.8652C12.6356 34.7612 12.5042 34.59 12.4502 34.3891C12.3965 34.1882 12.4247 33.9742 12.5287 33.794C12.6327 33.6139 12.804 33.4825 13.0048 33.4285L16.5128 32.4886C16.6457 32.4529 16.7858 32.4529 16.9188 32.4885C17.0518 32.5241 17.173 32.5942 17.2703 32.6916C17.3676 32.789 17.4376 32.9102 17.4733 33.0432C17.5089 33.1762 17.5089 33.3162 17.4734 33.4492L16.5334 36.9571C16.4213 37.3752 15.9909 37.6237 15.5728 37.5117C15.1546 37.3996 14.9062 36.9692 15.0182 36.5511L15.2005 35.8705L8.13317 42.9378C7.82709 43.2439 7.33013 43.2439 7.02405 42.9378C6.71797 42.6318 6.71797 42.1348 7.02405 41.8287L14.0914 34.7614ZM10.1349 17.5671C10.0416 17.7529 9.87831 17.8941 9.68093 17.9596C9.48355 18.0252 9.26822 18.0096 9.08228 17.9165C8.89643 17.8232 8.75522 17.6599 8.68968 17.4625C8.62415 17.2651 8.63965 17.0498 8.73277 16.8638C9.24295 15.847 9.84729 14.8802 10.5379 13.9762C10.8006 13.6321 11.2932 13.5661 11.6372 13.8288C11.9812 14.0916 12.0473 14.5841 11.7845 14.9282C11.1534 15.7544 10.6011 16.6378 10.1349 17.5671ZM11.7537 35.0313C12.0153 35.3762 11.9479 35.8685 11.6031 36.1302C11.4373 36.2559 11.2285 36.3106 11.0224 36.2823C10.8163 36.2541 10.6299 36.1452 10.5041 35.9795C9.88846 35.1684 9.3419 34.3072 8.87022 33.4047C8.77398 33.2203 8.75488 33.0053 8.81713 32.8068C8.87938 32.6083 9.01787 32.4427 9.20219 32.3463C9.38658 32.2501 9.6016 32.231 9.80004 32.2933C9.99848 32.3555 10.1641 32.494 10.2605 32.6782C10.6916 33.503 11.191 34.2901 11.7537 35.0313ZM39.738 32.6782C39.8344 32.494 40 32.3555 40.1985 32.2933C40.3969 32.231 40.6119 32.2501 40.7963 32.3463C40.9806 32.4427 41.1191 32.6083 41.1814 32.8068C41.2436 33.0053 41.2245 33.2203 41.1283 33.4047C40.6522 34.3154 40.1 35.1842 39.4775 36.0018C39.3514 36.1672 39.1649 36.2758 38.9588 36.3037C38.7527 36.3317 38.5439 36.2766 38.3784 36.1507C38.2129 36.0246 38.1043 35.8381 38.0764 35.632C38.0485 35.4259 38.1035 35.2171 38.2294 35.0516C38.7983 34.3044 39.3029 33.5105 39.738 32.6782ZM35.0508 38.2302C35.2163 38.1043 35.4251 38.0492 35.6312 38.0772C35.8373 38.1051 36.0239 38.2137 36.1499 38.3791C36.2759 38.5447 36.3309 38.7534 36.303 38.9595C36.2751 39.1656 36.1664 39.3522 36.001 39.4782C34.2094 40.8421 32.1576 41.8812 29.9337 42.5076C29.7334 42.5639 29.5191 42.5384 29.3376 42.4367C29.1562 42.335 29.0226 42.1655 28.9661 41.9653C28.9098 41.7651 28.9353 41.5507 29.0369 41.3693C29.1386 41.1878 29.3082 41.0542 29.5084 40.9977C31.5399 40.4255 33.4142 39.476 35.0508 38.2302ZM20.4921 40.9982C20.9088 41.1156 21.1518 41.5491 21.0344 41.9658C20.9171 42.3825 20.4836 42.6255 20.0669 42.5081C17.833 41.8792 15.7727 40.8339 13.9754 39.4614C13.6313 39.1986 13.5653 38.7061 13.8281 38.3621C14.0908 38.018 14.5834 37.952 14.9275 38.2147C16.5693 39.4685 18.4513 40.4237 20.4921 40.9982ZM38.2294 14.9484C38.1035 14.7829 38.0485 14.5742 38.0764 14.3681C38.1043 14.162 38.2129 13.9754 38.3784 13.8493C38.5439 13.7234 38.7527 13.6683 38.9588 13.6963C39.1649 13.7242 39.3514 13.8328 39.4775 13.9982C40.1611 14.896 40.7598 15.8555 41.2658 16.8641C41.4599 17.251 41.3033 17.7228 40.9164 17.9168C40.5294 18.1108 40.0577 17.9542 39.8637 17.5673C39.4013 16.6456 38.8542 15.7689 38.2294 14.9484ZM30.9307 9.47373C30.7365 9.39931 30.5798 9.25083 30.495 9.0609C30.4102 8.87098 30.4043 8.65516 30.4786 8.46089C30.553 8.26667 30.7015 8.10994 30.8914 8.02515C31.0813 7.94037 31.2971 7.93446 31.4914 8.00873C33.1066 8.62746 34.6251 9.47369 36.001 10.5218C36.1664 10.6478 36.2751 10.8344 36.303 11.0405C36.3309 11.2466 36.2759 11.4554 36.1499 11.6209C36.0239 11.7863 35.8373 11.8949 35.6312 11.9229C35.4251 11.9508 35.2163 11.8957 35.0508 11.7698C33.7937 10.8122 32.4064 10.0391 30.9307 9.47373ZM14.968 11.7544C14.6231 12.0161 14.1307 11.9486 13.869 11.6038C13.7434 11.4381 13.6887 11.2292 13.7169 11.0232C13.7452 10.8171 13.8541 10.6307 14.0197 10.5049C15.3904 9.46411 16.902 8.62338 18.5092 8.00795C18.7035 7.93368 18.9193 7.93961 19.1092 8.02441C19.2992 8.10922 19.4476 8.26597 19.522 8.4602C19.5963 8.65448 19.5903 8.87029 19.5055 9.0602C19.4207 9.25011 19.264 9.39857 19.0697 9.47295C17.6013 10.0353 16.2203 10.8035 14.968 11.7544Z"
                />
              </g>
              <defs>
                <clipPath id="clip0_354_773">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Orientation Programs"
          description="We design comprehensive orientation programs for new hires."
        />
        {/* card */}
        <SubServiceCard
          icon={
            <svg
              className="mx-auto fill-secondary group-hover:fill-white"
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.2822 11.7578C11.5508 12.0264 11.9063 12.1611 12.2607 12.1611C12.6094 12.1611 12.959 12.0312 13.2256 11.7705C16.3945 8.68262 20.5762 6.98145 25 6.98145C29.4229 6.98145 33.6025 8.68262 36.7734 11.7734C37.3135 12.2949 38.1846 12.2881 38.7148 11.7578L41.6963 8.77637C41.9619 8.51074 42.1025 8.17188 42.1025 7.79492C42.1025 7.41602 41.958 7.07422 41.6855 6.80762C37.1992 2.41797 31.2734 0 25 0C18.7246 0 12.7988 2.41797 8.30664 6.81445C8.04395 7.07715 7.90137 7.41211 7.89551 7.7832V7.7959C7.89551 8.16602 8.03418 8.50293 8.30176 8.77734L11.2822 11.7578ZM25 1.56152C30.8027 1.56152 36.2871 3.77539 40.4648 7.79981L37.7344 10.5303C34.2891 7.23438 29.7734 5.4209 25 5.4209C20.2246 5.4209 15.709 7.23438 12.2627 10.5312L9.53223 7.79981C13.709 3.77539 19.1953 1.56152 25 1.56152ZM48.8564 23.8564C48.8564 19.8047 47.8193 15.7988 45.8594 12.2754C45.6484 11.8916 45.2783 11.6357 44.8428 11.5732C44.4102 11.5117 43.9824 11.6543 43.6709 11.9658L40.54 15.0967C40.1221 15.5146 40.0146 16.1299 40.2676 16.666C41.333 18.9229 41.873 21.3418 41.873 23.8564C41.873 28.2207 40.248 32.29 37.2764 35.4297C35.5957 32.5107 32.4434 30.542 28.8398 30.542H21.1602C17.5557 30.542 14.4033 32.5117 12.7217 35.4297C9.75 32.2881 8.125 28.2188 8.125 23.8564C8.125 21.3418 8.66504 18.9229 9.73047 16.665C9.98438 16.126 9.875 15.5088 9.45703 15.0967L6.33203 11.9717C6.02246 11.6562 5.59375 11.5107 5.1543 11.5732C4.71875 11.6357 4.35937 11.8818 4.13965 12.2715C2.17871 15.7959 1.14258 19.8018 1.14258 23.8564C1.14258 31.708 4.98047 39.0127 11.4287 43.4805V47.8564C11.4287 49.0381 12.3916 49.999 13.5742 49.999H36.4229C37.6045 49.999 38.5654 49.0381 38.5654 47.8564V43.4805C45.0176 39.0117 48.8564 31.708 48.8564 23.8564ZM26.2705 39.6445L25 41.8994L23.7266 39.6445L24.4297 32.1035H25.5674L26.2705 39.6445ZM2.70508 23.8564C2.70508 20.1445 3.63379 16.4766 5.39062 13.2373L8.26562 16.1133C7.13672 18.5479 6.56348 21.1523 6.56348 23.8574C6.56348 26.4531 7.09277 28.9639 8.1377 31.3193C9.07324 33.4277 10.377 35.3174 12.0166 36.9434C11.6377 37.9814 11.4307 39.1025 11.4307 40.2705V41.5488C5.94141 37.333 2.70508 30.8262 2.70508 23.8564ZM36.4248 48.4385H32.0791V40.8838C32.0791 40.4521 31.7295 40.1035 31.2988 40.1035C30.8682 40.1035 30.5186 40.4531 30.5186 40.8838V48.4385H19.4805V40.8838C19.4805 40.4521 19.1309 40.1035 18.7002 40.1035C18.2695 40.1035 17.9199 40.4531 17.9199 40.8838V48.4385H13.5762C13.2598 48.4385 12.9922 48.1719 12.9922 47.8574V40.2695C12.9922 39.1543 13.2178 38.0918 13.624 37.1221C13.6465 37.082 13.6641 37.04 13.6787 36.998C14.9434 34.1201 17.8203 32.1035 21.1611 32.1035H22.8623L22.1504 39.7432C22.1357 39.9014 22.1699 40.0605 22.248 40.1992L24.3213 43.873C24.3894 43.9934 24.4881 44.0935 24.6076 44.1631C24.727 44.2328 24.8627 44.2695 25.001 44.2695C25.2822 44.2695 25.542 44.1172 25.6807 43.8721L27.751 40.1982C27.8291 40.0596 27.8633 39.9004 27.8486 39.7422L27.1367 32.1025H28.8408C32.1797 32.1025 35.0557 34.1182 36.3203 36.9951C36.335 37.0391 36.3535 37.0811 36.376 37.123C36.7822 38.0918 37.0068 39.1543 37.0068 40.2686V47.8564C37.0059 48.1719 36.7393 48.4385 36.4248 48.4385ZM38.5674 41.5479V40.2695C38.5674 39.1016 38.3604 37.9814 37.9814 36.9424C39.6221 35.3174 40.9258 33.4277 41.8613 31.3184C42.9053 28.9639 43.4346 26.4531 43.4346 23.8564C43.4346 21.1514 42.8623 18.5459 41.7324 16.1123L44.6074 13.2373C46.3672 16.4824 47.2959 20.1484 47.2959 23.8564C47.2949 30.8252 44.0576 37.332 38.5674 41.5479ZM33.6611 21.9297C34.165 21.7646 34.5029 21.2959 34.5029 20.7646V19.2588C34.5029 18.7285 34.165 18.2617 33.6582 18.0957L32.7109 17.7891C32.5448 17.213 32.3145 16.6575 32.0244 16.1328L32.4766 15.2441C32.5938 15.0139 32.635 14.7524 32.5943 14.4973C32.5536 14.2422 32.4331 14.0065 32.25 13.8242L31.1865 12.7578C31.0039 12.5749 30.7679 12.4546 30.5125 12.4144C30.2572 12.3742 29.9956 12.4162 29.7656 12.5342L28.8779 12.9863C28.3533 12.6963 27.7977 12.466 27.2217 12.2998L26.9141 11.3506C26.749 10.8467 26.2803 10.5088 25.749 10.5088H24.2461C23.7148 10.5088 23.2461 10.8467 23.0801 11.3535L22.7734 12.3008C22.1976 12.4665 21.6423 12.6968 21.1182 12.9873L20.2285 12.5342C19.9984 12.4163 19.7368 12.3746 19.4815 12.415C19.2261 12.4553 18.9902 12.5757 18.8076 12.7588L17.7451 13.8242C17.3691 14.2002 17.2773 14.7715 17.5186 15.2451L17.9707 16.1328C17.6806 16.6578 17.4504 17.2137 17.2842 17.79L16.3379 18.0967C15.833 18.2627 15.4932 18.7295 15.4932 19.2588V20.7646C15.4932 21.2959 15.832 21.7637 16.3398 21.9307L17.2842 22.2363C17.4531 22.8184 17.6836 23.376 17.9707 23.8926L17.5205 24.7773C17.2764 25.251 17.3662 25.8232 17.7451 26.2021L18.8086 27.2656C19.1846 27.6416 19.7559 27.7334 20.2295 27.4922L21.1182 27.0391C21.6367 27.3271 22.1904 27.5566 22.7734 27.7256L23.0801 28.6728C23.1603 28.9186 23.3162 29.1327 23.5254 29.2844C23.7347 29.4361 23.9866 29.5178 24.2451 29.5176H25.748C26.2793 29.5176 26.748 29.1777 26.9141 28.6709L27.2197 27.7266C27.7969 27.5596 28.3525 27.3301 28.877 27.04L29.7656 27.4922C29.996 27.6093 30.2575 27.6503 30.5126 27.6094C30.7677 27.5685 31.0033 27.4478 31.1855 27.2646L32.249 26.2012C32.6279 25.8223 32.7178 25.25 32.4756 24.7803L32.0234 23.8916C32.3115 23.373 32.541 22.8193 32.71 22.2373L33.6611 21.9297ZM31.252 21.6611C31.1028 22.2266 30.8771 22.7691 30.5811 23.2734C30.373 23.6387 30.3633 24.0771 30.5527 24.4414L30.9756 25.2715L30.2568 25.9902L29.4326 25.5703C29.0596 25.376 28.6201 25.3877 28.2549 25.5996C27.7529 25.8926 27.2119 26.1172 26.6504 26.2656C26.25 26.3691 25.9307 26.667 25.7969 27.0615L25.7939 27.0713L25.5068 27.957H24.4912L24.2051 27.0732C24.0762 26.6709 23.7539 26.3691 23.3516 26.2666C22.7861 26.1175 22.2436 25.8917 21.7393 25.5957C21.374 25.3877 20.9355 25.3779 20.5713 25.5674L19.7412 25.9902L19.0225 25.2715L19.4424 24.4473C19.6348 24.0771 19.625 23.6387 19.4121 23.2656C19.1196 22.7659 18.8962 22.2288 18.748 21.6689C18.6436 21.2588 18.3418 20.9365 17.9414 20.8086L17.0557 20.5215V19.5059L17.9414 19.2188L17.9512 19.2158C18.3457 19.082 18.6426 18.7627 18.7451 18.3662C18.8943 17.8026 19.1187 17.2616 19.4121 16.7578C19.625 16.3936 19.6357 15.9531 19.4443 15.5869L19.0215 14.7568L19.7383 14.0381L20.5752 14.4639C20.9502 14.6514 21.374 14.6406 21.7461 14.4277C22.2412 14.1367 22.7803 13.9131 23.3477 13.7627C23.7578 13.6562 24.0771 13.3525 24.2031 12.9551L24.4893 12.0723H25.5068L25.7949 12.9609C25.9277 13.3594 26.2471 13.6592 26.6465 13.7627C27.21 13.9113 27.7507 14.1357 28.2539 14.4297C28.6113 14.6387 29.0469 14.6514 29.4248 14.4619L30.2568 14.0381L30.9736 14.7568L30.5537 15.5811C30.3603 15.9541 30.3711 16.3936 30.583 16.7588C30.876 17.2607 31.1006 17.8018 31.249 18.3633C31.3535 18.7656 31.6533 19.085 32.0576 19.2197L32.9404 19.5059V20.5234L32.0635 20.8076C31.6592 20.9336 31.3545 21.2568 31.252 21.6611ZM25 15.4658C22.4922 15.4658 20.4521 17.5049 20.4521 20.0107C20.4521 22.5166 22.4922 24.5557 25 24.5557C27.5068 24.5557 29.5449 22.5166 29.5449 20.0107C29.5449 17.5049 27.5068 15.4658 25 15.4658ZM25 22.9961C23.3525 22.9961 22.0127 21.6572 22.0127 20.0117C22.0127 18.3662 23.3525 17.0273 25 17.0273C26.6455 17.0273 27.9844 18.3662 27.9844 20.0117C27.9844 21.6572 26.6455 22.9961 25 22.9961Z" />
            </svg>
          }
          title="Initial Performance Monitoring"
          description="We monitor the performance of new hires to ensure a smooth transition."
        />
      </div>
    </section>
  );
};

export default OnboardingSupport;
