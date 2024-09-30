import { VisaApplicationFlightAssistanceProcess } from "@/data/VisaApplicationFlightAssistanceProcess";
import VisaApplicationCard from "./VisaApplicationCard";
import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";

const FlightAssistanceProcess = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <FadeInDownWithSlowBounce className="container">
        <div className="flex items-center justify-center">
          <span className="rounded-full border-2 border-primary px-5 py-3 text-center text-2xl font-medium text-primary">
            Guided Visa & Flight Assistance
          </span>
        </div>
        <div className="mx-auto mb-16 mt-6 max-w-[840px]">
          <h2 className="text-center text-4xl font-semibold lg:text-5xl">
            Our Step-by-Step Visa Application Flight Assistance Process
          </h2>
        </div>
      </FadeInDownWithSlowBounce>
      <div className="container">
        <div className="grid grid-cols-1 gap-x-6 gap-y-28 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* card  */}
          <VisaApplicationCard
            icon={
              <svg
                className="fill-primary duration-200 group-hover:fill-secondary"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_3822)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_1_3822)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_1_3822)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_1_3822)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_1_3822)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_1_3822)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path d="M40.8412 54.7192C39.9477 55.5349 38.7816 55.987 37.5718 55.987C36.3619 55.987 35.1958 55.5349 34.3023 54.7192C32.8016 55.5866 30.4982 58.1246 31.7309 59.9588C31.9196 60.2225 32.1685 60.4375 32.4568 60.5859C32.7452 60.7344 33.0647 60.812 33.389 60.8125H41.7491C42.0733 60.8121 42.3928 60.7345 42.6811 60.5862C42.9694 60.4378 43.2183 60.223 43.4072 59.9594C44.6382 58.1274 42.3342 55.5866 40.8412 54.7192Z" />
                <path d="M41.3093 51.1694C41.1392 46.2076 33.9877 46.2191 33.8242 51.1694C33.9888 56.0979 41.1288 56.1416 41.3093 51.1694ZM49.6913 51.1694C49.8701 56.1389 57.0101 56.1012 57.1763 51.1694C57.0139 46.2213 49.8624 46.206 49.6913 51.1694Z" />
                <path d="M56.7038 54.7192C55.8111 55.5369 54.6445 55.9904 53.434 55.9904C52.2235 55.9904 51.0569 55.5369 50.1642 54.7192C48.6729 55.5866 46.3585 58.1257 47.5939 59.9588C47.7825 60.2223 48.0311 60.4371 48.3192 60.5855C48.6072 60.734 48.9264 60.8118 49.2504 60.8125H57.611C57.9353 60.8121 58.2548 60.7345 58.5431 60.5861C58.8314 60.4378 59.0803 60.2229 59.2691 59.9594C60.4996 58.1252 58.2005 55.5877 56.7038 54.7192ZM43.6958 40.0859H47.6694L51.1918 42.9073C51.272 42.9695 51.3679 43.0082 51.4689 43.0189C51.5698 43.0296 51.6718 43.012 51.7633 42.968C51.8547 42.9239 51.9321 42.8553 51.9867 42.7697C52.0413 42.6841 52.0709 42.5849 52.0723 42.4834V40.0859H53.4914C53.8947 40.0848 54.2811 39.9241 54.5663 39.6389C54.8515 39.3537 55.0122 38.9673 55.0134 38.564V31.7095C55.0131 31.3059 54.8526 30.9189 54.5673 30.6336C54.2819 30.3482 53.895 30.1878 53.4914 30.1875H43.6958C43.2922 30.1878 42.9053 30.3482 42.6199 30.6336C42.3346 30.9189 42.1741 31.3059 42.1738 31.7095V38.564C42.175 38.9673 42.3357 39.3537 42.6209 39.6389C42.906 39.9241 43.2925 40.0848 43.6958 40.0859Z" />
                <path d="M41.0854 38.564V35.134H37.3557C36.9926 35.1345 36.6444 35.279 36.3877 35.5358C36.131 35.7926 35.9866 36.1408 35.9863 36.504V42.2713C35.9866 42.6345 36.131 42.9828 36.3879 43.2397C36.6447 43.4965 36.993 43.6409 37.3563 43.6412H38.4598V45.5761C38.4619 45.6779 38.4923 45.7771 38.5474 45.8627C38.6026 45.9483 38.6804 46.0169 38.7722 46.0609C38.864 46.1049 38.9663 46.1225 39.0676 46.1119C39.1688 46.1012 39.2651 46.0626 39.3458 46.0004L42.2863 43.6412H45.602C45.9653 43.6409 46.3135 43.4965 46.5704 43.2397C46.8272 42.9828 46.9717 42.6345 46.972 42.2713V41.1732H43.694C43.0021 41.1729 42.3387 40.8979 41.8496 40.4086C41.3604 39.9194 41.0855 39.2559 41.0854 38.564Z" />
                <defs>
                  <filter
                    id="filter0_d_1_3822"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
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
                      result="effect1_dropShadow_1_3822"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3822"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1_3822"
                    x="15.4766"
                    y="0"
                    width="57"
                    height="26.2732"
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
                      result="effect1_dropShadow_1_3822"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3822"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_1_3822"
                    x="0"
                    y="17.3962"
                    width="26.2031"
                    height="57.0049"
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
                      result="effect1_dropShadow_1_3822"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3822"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_1_3822"
                    x="63.4531"
                    y="15.0156"
                    width="26.5469"
                    height="56.9724"
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
                      result="effect1_dropShadow_1_3822"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3822"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_1_3822"
                    x="16.6719"
                    y="64.1971"
                    width="57.0215"
                    height="25.8029"
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
                      result="effect1_dropShadow_1_3822"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3822"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_1_3822"
                    x="10"
                    y="10"
                    width="70"
                    height="70"
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
                      result="effect1_dropShadow_1_3822"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3822"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Initial Consultation"
            description="Schedule your initial consultation to discuss your visa needs with our experts, ensuring a personalized approach to your travel plans."
            stepNo="01"
          />

          {/* card  */}
          <VisaApplicationCard
            icon={
              <svg
                className="fill-primary duration-200 group-hover:fill-secondary"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_3845)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_1_3845)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_1_3845)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_1_3845)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_1_3845)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_1_3845)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path d="M57.5312 44.4062V47.6875H60.8125L57.5312 44.4062Z" />
                <path d="M57.5312 48.7812C57.2412 48.7812 56.963 48.666 56.7579 48.4609C56.5527 48.2558 56.4375 47.9776 56.4375 47.6875V44.4062H52.0625V50.9688H58.0781C58.2232 50.9688 58.3623 51.0264 58.4648 51.1289C58.5674 51.2315 58.625 51.3706 58.625 51.5156C58.625 51.6607 58.5674 51.7998 58.4648 51.9023C58.3623 52.0049 58.2232 52.0625 58.0781 52.0625H52.0625V53.1562H58.0781C58.2232 53.1562 58.3623 53.2139 58.4648 53.3164C58.5674 53.419 58.625 53.5581 58.625 53.7031C58.625 53.8482 58.5674 53.9873 58.4648 54.0898C58.3623 54.1924 58.2232 54.25 58.0781 54.25H52.0625V55.3438H58.0781C58.2232 55.3438 58.3623 55.4014 58.4648 55.5039C58.5674 55.6065 58.625 55.7456 58.625 55.8906C58.625 56.0357 58.5674 56.1748 58.4648 56.2773C58.3623 56.3799 58.2232 56.4375 58.0781 56.4375H52.0625V57.5312H58.0781C58.2232 57.5312 58.3623 57.5889 58.4648 57.6914C58.5674 57.794 58.625 57.9331 58.625 58.0781C58.625 58.2232 58.5674 58.3623 58.4648 58.4648C58.3623 58.5674 58.2232 58.625 58.0781 58.625H47.6875V59.7188C47.6875 60.0088 47.8027 60.287 48.0079 60.4921C48.213 60.6973 48.4912 60.8125 48.7812 60.8125H59.7188C60.0088 60.8125 60.287 60.6973 60.4921 60.4921C60.6973 60.287 60.8125 60.0088 60.8125 59.7188V48.7812H57.5312ZM33.4688 44.4062V47.6875H30.1875L33.4688 44.4062Z" />
                <path d="M33.4688 48.7812C33.7588 48.7812 34.037 48.666 34.2421 48.4609C34.4473 48.2558 34.5625 47.9776 34.5625 47.6875V44.4062H38.9375V50.9688H32.9219C32.7768 50.9688 32.6377 51.0264 32.5352 51.1289C32.4326 51.2315 32.375 51.3706 32.375 51.5156C32.375 51.6607 32.4326 51.7998 32.5352 51.9023C32.6377 52.0049 32.7768 52.0625 32.9219 52.0625H38.9375V53.1562H32.9219C32.7768 53.1562 32.6377 53.2139 32.5352 53.3164C32.4326 53.419 32.375 53.5581 32.375 53.7031C32.375 53.8482 32.4326 53.9873 32.5352 54.0898C32.6377 54.1924 32.7768 54.25 32.9219 54.25H38.9375V55.3438H32.9219C32.7768 55.3438 32.6377 55.4014 32.5352 55.5039C32.4326 55.6065 32.375 55.7456 32.375 55.8906C32.375 56.0357 32.4326 56.1748 32.5352 56.2773C32.6377 56.3799 32.7768 56.4375 32.9219 56.4375H38.9375V57.5312H32.9219C32.7768 57.5312 32.6377 57.5889 32.5352 57.6914C32.4326 57.794 32.375 57.9331 32.375 58.0781C32.375 58.2232 32.4326 58.3623 32.5352 58.4648C32.6377 58.5674 32.7768 58.625 32.9219 58.625H43.3125V59.7188C43.3125 60.0088 43.1973 60.287 42.9921 60.4921C42.787 60.6973 42.5088 60.8125 42.2188 60.8125H31.2812C30.9912 60.8125 30.713 60.6973 30.5079 60.4921C30.3027 60.287 30.1875 60.0088 30.1875 59.7188V48.7812H33.4688ZM47.6875 43.3125V46.5938H50.9688L47.6875 43.3125Z" />
                <path d="M46.5938 46.5938V43.3125H44.3264L45.3272 45.3141C45.4527 45.5641 45.5121 45.8422 45.4997 46.1217C45.4873 46.4012 45.4035 46.6729 45.2564 46.9108C45.1092 47.1488 44.9035 47.3451 44.659 47.4811C44.4145 47.617 44.1392 47.6881 43.8594 47.6875C43.3595 47.6875 42.8936 47.4644 42.5797 47.075L40.0312 43.8878V56.4375C40.0312 56.7276 40.1465 57.0058 40.3516 57.2109C40.5567 57.416 40.8349 57.5312 41.125 57.5312H49.875C50.1651 57.5312 50.4433 57.416 50.6484 57.2109C50.8535 57.0058 50.9688 56.7276 50.9688 56.4375V47.6875H47.6875C47.3974 47.6875 47.1192 47.5723 46.9141 47.3671C46.709 47.162 46.5938 46.8838 46.5938 46.5938ZM48.2344 55.3438H42.7656C42.6206 55.3438 42.4815 55.2861 42.3789 55.1836C42.2764 55.081 42.2188 54.9419 42.2188 54.7969C42.2188 54.6518 42.2764 54.5127 42.3789 54.4102C42.4815 54.3076 42.6206 54.25 42.7656 54.25H48.2344C48.3794 54.25 48.5185 54.3076 48.6211 54.4102C48.7236 54.5127 48.7812 54.6518 48.7812 54.7969C48.7812 54.9419 48.7236 55.081 48.6211 55.1836C48.5185 55.2861 48.3794 55.3438 48.2344 55.3438ZM48.2344 53.1562H42.7656C42.6206 53.1562 42.4815 53.0986 42.3789 52.9961C42.2764 52.8935 42.2188 52.7544 42.2188 52.6094C42.2188 52.4643 42.2764 52.3252 42.3789 52.2227C42.4815 52.1201 42.6206 52.0625 42.7656 52.0625H48.2344C48.3794 52.0625 48.5185 52.1201 48.6211 52.2227C48.7236 52.3252 48.7812 52.4643 48.7812 52.6094C48.7812 52.7544 48.7236 52.8935 48.6211 52.9961C48.5185 53.0986 48.3794 53.1562 48.2344 53.1562ZM48.7812 50.4219C48.7812 50.5669 48.7236 50.706 48.6211 50.8086C48.5185 50.9111 48.3794 50.9688 48.2344 50.9688H42.7656C42.6206 50.9688 42.4815 50.9111 42.3789 50.8086C42.2764 50.706 42.2188 50.5669 42.2188 50.4219C42.2188 50.2768 42.2764 50.1377 42.3789 50.0352C42.4815 49.9326 42.6206 49.875 42.7656 49.875H48.2344C48.3794 49.875 48.5185 49.9326 48.6211 50.0352C48.7236 50.1377 48.7812 50.2768 48.7812 50.4219Z" />
                <path d="M51.9012 40.1909L48.62 36.9097C48.5175 36.8075 48.3787 36.75 48.2339 36.75H46.5933V34.2584C47.244 33.8789 47.687 33.1811 47.687 32.375C47.687 31.1686 46.7059 30.1875 45.4995 30.1875C44.2931 30.1875 43.312 31.1686 43.312 32.375C43.312 33.1811 43.755 33.8789 44.4058 34.2584V36.75H42.7651C42.6204 36.75 42.4815 36.8075 42.379 36.9097L39.0978 40.1909C39.0026 40.2861 38.9458 40.413 38.9383 40.5474C38.9309 40.6818 38.9732 40.8143 39.0573 40.9194L43.4323 46.3881C43.517 46.4928 43.6372 46.5626 43.7701 46.5841C43.903 46.6056 44.0391 46.5774 44.1525 46.5048C44.2659 46.4322 44.3485 46.3204 44.3845 46.1907C44.4205 46.061 44.4075 45.9225 44.3478 45.8019L42.3112 41.7298L43.5855 40.0312H47.4136L48.6878 41.7298L48.3422 42.4211L49.6755 43.7544L51.9417 40.9205C52.0261 40.8153 52.0686 40.6826 52.0612 40.548C52.0537 40.4133 51.9967 40.2861 51.9012 40.1909Z" />
                <defs>
                  <filter
                    id="filter0_d_1_3845"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
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
                      result="effect1_dropShadow_1_3845"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3845"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1_3845"
                    x="15.4766"
                    y="0"
                    width="57"
                    height="26.2732"
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
                      result="effect1_dropShadow_1_3845"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3845"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_1_3845"
                    x="0"
                    y="17.3962"
                    width="26.2031"
                    height="57.0049"
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
                      result="effect1_dropShadow_1_3845"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3845"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_1_3845"
                    x="63.4531"
                    y="15.0156"
                    width="26.5469"
                    height="56.9724"
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
                      result="effect1_dropShadow_1_3845"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3845"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_1_3845"
                    x="16.6719"
                    y="64.1971"
                    width="57.0215"
                    height="25.8029"
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
                      result="effect1_dropShadow_1_3845"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3845"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_1_3845"
                    x="10"
                    y="10"
                    width="70"
                    height="70"
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
                      result="effect1_dropShadow_1_3845"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3845"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Document Collection"
            description="Our team assists you in gathering and organizing all necessary documents, ensuring a smooth and efficient visa application process."
            stepNo="02"
          />

          {/* card  */}
          <VisaApplicationCard
            icon={
              <svg
                className="fill-primary duration-200 group-hover:fill-secondary"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_3868)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_1_3868)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_1_3868)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_1_3868)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_1_3868)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_1_3868)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path d="M52.7684 50.9683C51.795 50.9685 50.8435 51.2573 50.0343 51.7983C49.225 52.3392 48.5944 53.108 48.222 54.0074C47.8496 54.9067 47.7523 55.8963 47.9424 56.851C48.1324 57.8057 48.6012 58.6826 49.2896 59.3708C49.978 60.059 50.855 60.5277 51.8097 60.7175C52.7644 60.9073 53.754 60.8098 54.6533 60.4373C55.5526 60.0647 56.3212 59.4338 56.862 58.6245C57.4028 57.8151 57.6914 56.8635 57.6914 55.8901C57.6902 54.585 57.1712 53.3337 56.2484 52.4109C55.3255 51.4881 54.0735 50.9693 52.7684 50.9683ZM55.0659 54.9987L52.5174 57.5526C52.4665 57.6036 52.4059 57.6438 52.3393 57.6711C52.2726 57.6983 52.2012 57.7119 52.1291 57.7112C51.9839 57.7117 51.8443 57.6546 51.7409 57.5526L50.4666 56.2784C50.3642 56.1752 50.3067 56.0356 50.3067 55.8901C50.3067 55.7447 50.3642 55.6051 50.4666 55.5019C50.5172 55.4512 50.5773 55.4109 50.6435 55.3835C50.7096 55.3561 50.7806 55.3419 50.8522 55.3419C50.9238 55.3419 50.9947 55.3561 51.0609 55.3835C51.127 55.4109 51.1871 55.4512 51.2377 55.5019L52.1291 56.3933L54.2948 54.2276C54.3454 54.1769 54.4055 54.1367 54.4716 54.1093C54.5378 54.0818 54.6087 54.0677 54.6803 54.0677C54.7519 54.0677 54.8229 54.0818 54.889 54.1093C54.9552 54.1367 55.0153 54.1769 55.0659 54.2276C55.1178 54.2775 55.1591 54.3374 55.1873 54.4037C55.2155 54.4699 55.23 54.5412 55.23 54.6132C55.23 54.6852 55.2155 54.7565 55.1873 54.8227C55.1591 54.889 55.1178 54.9488 55.0659 54.9987Z" />
                <path d="M46.8517 56.9843H36.8548C36.7098 56.9843 36.5707 56.9267 36.4681 56.8241C36.3656 56.7216 36.308 56.5825 36.308 56.4374C36.308 56.2924 36.3656 56.1533 36.4681 56.0507C36.5707 55.9482 36.7098 55.8906 36.8548 55.8906H46.7533C46.7527 55.5237 46.7857 55.1576 46.8517 54.7968H39.0423C38.8973 54.7968 38.7582 54.7392 38.6556 54.6366C38.5531 54.5341 38.4955 54.395 38.4955 54.2499C38.4955 54.1049 38.5531 53.9658 38.6556 53.8632C38.7582 53.7607 38.8973 53.7031 39.0423 53.7031H47.1634C47.6041 52.575 48.3748 51.6061 49.3749 50.923C50.3749 50.2399 51.5578 49.8745 52.7689 49.8744C53.0215 49.8741 53.2738 49.8905 53.5241 49.9236V35.0694C53.5228 34.6347 53.3496 34.2181 53.0422 33.9107C52.7348 33.6033 52.3182 33.4301 51.8835 33.4288H51.1288V31.9249C51.1292 31.6651 51.0708 31.4087 50.9581 31.1747C50.8454 30.9407 50.6813 30.7352 50.4781 30.5735C50.2736 30.4088 50.0347 30.2924 49.7791 30.2327C49.5235 30.1731 49.2577 30.1718 49.0015 30.229L34.7816 33.4446C34.7762 33.4446 34.7707 33.4446 34.7707 33.4501C34.3708 33.493 34.0008 33.6819 33.7314 33.9805C33.462 34.2792 33.3122 34.6667 33.3105 35.0688V59.1718C33.3118 59.6065 33.4851 60.0231 33.7925 60.3305C34.0999 60.6379 34.5165 60.8111 34.9512 60.8124H49.3127C48.0239 59.9067 47.1407 58.5328 46.8517 56.9843ZM49.2361 31.2954C49.333 31.2741 49.4334 31.2749 49.5299 31.2976C49.6265 31.3203 49.7167 31.3644 49.7939 31.4267C49.8689 31.4861 49.9296 31.5617 49.9712 31.6479C50.0129 31.7341 50.0345 31.8286 50.0345 31.9243V33.4282H39.797L49.2361 31.2954ZM43.4173 37.6944C44.7153 37.6945 45.984 38.0795 47.0631 38.8006C48.1423 39.5218 48.9833 40.5468 49.4799 41.7459C49.9765 42.9451 50.1064 44.2645 49.8531 45.5375C49.5999 46.8105 48.9748 47.9798 48.057 48.8975C47.1392 49.8152 45.9699 50.4402 44.6969 50.6933C43.4239 50.9465 42.1044 50.8165 40.9053 50.3198C39.7062 49.8231 38.6813 48.982 37.9602 47.9028C37.2392 46.8236 36.8543 45.5548 36.8543 44.2569C36.8568 42.5172 37.549 40.8494 38.7791 39.6192C40.0093 38.389 41.6771 37.6969 43.4168 37.6944H43.4173Z" />
                <path d="M40.7691 49.0366C40.0284 47.7464 39.624 46.2906 39.5934 44.8032H37.9746C38.063 45.6823 38.3635 46.5267 38.8503 47.264C39.3371 48.0013 39.9955 48.6099 40.7691 49.0366ZM40.7691 39.4756C39.9964 39.9036 39.3386 40.5122 38.852 41.2494C38.3654 41.9867 38.0644 42.8307 37.9746 43.7095H39.5934C39.6247 42.222 40.029 40.7662 40.7691 39.4756ZM42.8697 49.6108V44.8032H40.6871C40.8074 47.1603 41.7207 49.1296 42.8691 49.6108H42.8697ZM42.8697 43.7095V38.9014C41.7213 39.3881 40.8074 41.3568 40.6871 43.7095H42.8697ZM46.1455 44.8032H43.9634V49.6108C45.1119 49.1296 46.0252 47.1608 46.1455 44.8032ZM43.9634 38.9014V43.7095H46.1455C46.0252 41.3574 45.1119 39.3881 43.9634 38.9014ZM46.0634 49.0366C46.8372 48.6099 47.4958 48.0018 47.9827 47.2644C48.4696 46.527 48.7701 45.6824 48.8585 44.8032H47.2398C47.209 46.2905 46.8047 47.746 46.064 49.0361L46.0634 49.0366ZM48.8585 43.7095C48.7688 42.8307 48.4677 41.9867 47.9811 41.2494C47.4945 40.5122 46.8368 39.9036 46.064 39.4756C46.8041 40.7662 47.2084 42.222 47.2398 43.7095H48.8585Z" />
                <defs>
                  <filter
                    id="filter0_d_1_3868"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
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
                      result="effect1_dropShadow_1_3868"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3868"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1_3868"
                    x="15.4766"
                    y="0"
                    width="57"
                    height="26.2732"
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
                      result="effect1_dropShadow_1_3868"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3868"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_1_3868"
                    x="0"
                    y="17.3962"
                    width="26.2031"
                    height="57.0049"
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
                      result="effect1_dropShadow_1_3868"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3868"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_1_3868"
                    x="63.4531"
                    y="15.0156"
                    width="26.5469"
                    height="56.9724"
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
                      result="effect1_dropShadow_1_3868"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3868"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_1_3868"
                    x="16.6719"
                    y="64.1971"
                    width="57.0215"
                    height="25.8029"
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
                      result="effect1_dropShadow_1_3868"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3868"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_1_3868"
                    x="10"
                    y="10"
                    width="70"
                    height="70"
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
                      result="effect1_dropShadow_1_3868"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3868"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Visa Preparation"
            description="Our experts prepare your visa application with precision, ensuring all documentation is accurate and ready for submission."
            stepNo="03"
          />

          {/* card  */}
          <VisaApplicationCard
            icon={
              <svg
                className="fill-primary duration-200 group-hover:fill-secondary"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_3890)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_1_3890)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_1_3890)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_1_3890)">
                  <path d="M69.9347 76.2772C63.3296 81.5429 55.227 84.5824 46.7883 84.96C38.3495 85.3376 30.0078 83.0341 22.9588 78.3794L28.4509 70.0622C33.7435 73.557 40.0066 75.2866 46.3427 75.003C52.6787 74.7195 58.7623 72.4374 63.7216 68.4838L69.9347 76.2772Z" />
                </g>
                <g filter="url(#filter4_d_1_3890)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter5_d_1_3890)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path d="M42.1903 51.5894C38.7144 48.9141 33.6744 45.0198 30.1875 42.3253V58.8514C30.1858 59.1225 30.2462 59.3904 30.3642 59.6345C30.3631 59.6307 42.2007 51.5987 42.1903 51.59V51.5894ZM43.4624 51.0945C43.5145 51.1279 43.5638 51.1654 43.61 51.2066L45.494 52.6613L54.623 45.6235V31.4715C54.6217 31.1709 54.5013 30.8831 54.2882 30.6711C54.0751 30.4592 53.7866 30.3403 53.4861 30.3406H37.514C37.2134 30.3403 36.925 30.4592 36.7119 30.6711C36.4988 30.8831 36.3784 31.1709 36.3771 31.4715V45.6235L42.991 50.7237C43.003 50.7297 43.4624 51.0945 43.4624 51.0945ZM39.5632 33.6798H44.2105C44.3667 33.6798 44.5165 33.7418 44.627 33.8523C44.7374 33.9628 44.7995 34.1126 44.7995 34.2688C44.7995 34.425 44.7374 34.5748 44.627 34.6853C44.5165 34.7957 44.3667 34.8578 44.2105 34.8578H39.5637C39.4075 34.8578 39.2577 34.7957 39.1472 34.6853C39.0368 34.5748 38.9747 34.425 38.9747 34.2688C38.9747 34.1126 39.0368 33.9628 39.1472 33.8523C39.2577 33.7418 39.4075 33.6798 39.5637 33.6798H39.5632ZM39.5632 37.2957H51.4364C51.5926 37.2957 51.7424 37.3578 51.8528 37.4682C51.9633 37.5787 52.0253 37.7285 52.0253 37.8847C52.0253 38.0409 51.9633 38.1907 51.8528 38.3012C51.7424 38.4116 51.5926 38.4737 51.4364 38.4737H39.5637C39.4075 38.4737 39.2577 38.4116 39.1472 38.3012C39.0368 38.1907 38.9747 38.0409 38.9747 37.8847C38.9747 37.7285 39.0368 37.5787 39.1472 37.4682C39.2577 37.3578 39.4075 37.2957 39.5637 37.2957H39.5632ZM38.9747 41.5012C38.9744 41.4238 38.9895 41.3471 39.019 41.2755C39.0485 41.2039 39.0918 41.1388 39.1466 41.0841C39.2013 41.0293 39.2664 40.986 39.338 40.9565C39.4096 40.927 39.4863 40.9119 39.5637 40.9122H51.4364C51.5926 40.9122 51.7424 40.9743 51.8528 41.0847C51.9633 41.1952 52.0253 41.345 52.0253 41.5012C52.0253 41.6574 51.9633 41.8072 51.8528 41.9177C51.7424 42.0281 51.5926 42.0902 51.4364 42.0902H39.5637C39.4863 42.0905 39.4096 42.0754 39.338 42.0459C39.2664 42.0164 39.2013 41.9731 39.1466 41.9183C39.0918 41.8636 39.0485 41.7985 39.019 41.7269C38.9895 41.6553 38.9744 41.5786 38.9747 41.5012Z" />
                <path d="M45.4937 53.9929C45.3695 53.9929 43.1667 52.3495 43.1667 52.3495L31.2115 60.4767C31.4542 60.5992 31.7227 60.6618 31.9946 60.6593H59.0037C59.2444 60.6609 59.4829 60.6128 59.7042 60.5182L47.9612 52.2429C47.9612 52.2429 45.6227 53.9918 45.4931 53.9918L45.4937 53.9929ZM35.1988 39.0452L30.7051 41.242L35.1988 44.7108V39.0452ZM55.7995 39.0512V44.7048L60.2877 41.242L55.7995 39.0512ZM55.6409 46.3186L55.5994 46.3481C55.6759 46.3 55.5343 46.4028 55.5113 46.4187L48.9324 51.4893L60.594 59.705C60.7366 59.4431 60.8115 59.1496 60.8116 58.8513V42.3253L55.6409 46.3186Z" />
                <defs>
                  <filter
                    id="filter0_d_1_3890"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
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
                      result="effect1_dropShadow_1_3890"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3890"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1_3890"
                    x="15.4766"
                    y="0"
                    width="57"
                    height="26.2732"
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
                      result="effect1_dropShadow_1_3890"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3890"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_1_3890"
                    x="0"
                    y="17.3962"
                    width="26.2031"
                    height="57.0049"
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
                      result="effect1_dropShadow_1_3890"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3890"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_1_3890"
                    x="17.959"
                    y="63.4838"
                    width="56.9766"
                    height="26.5162"
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
                      result="effect1_dropShadow_1_3890"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3890"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_1_3890"
                    x="63.4531"
                    y="15.0156"
                    width="26.5469"
                    height="56.9724"
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
                      result="effect1_dropShadow_1_3890"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3890"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_1_3890"
                    x="10"
                    y="10"
                    width="70"
                    height="70"
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
                      result="effect1_dropShadow_1_3890"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3890"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Application Submission"
            description="We submit your visa application promptly, ensuring all guidelines are followed for a smooth approval process."
            stepNo="04"
          />

          {/* card  */}
          <VisaApplicationCard
            icon={
              <svg
                className="fill-primary duration-200 group-hover:fill-secondary"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_3913)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_1_3913)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_1_3913)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_1_3913)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_1_3913)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_1_3913)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M40.3047 39.4844C40.3047 36.464 42.753 34.0156 45.7734 34.0156C48.7938 34.0156 51.2422 36.464 51.2422 39.4844C51.2422 42.5048 48.7938 44.9531 45.7734 44.9531C42.753 44.9531 40.3047 42.5048 40.3047 39.4844ZM40.0887 36.2031C39.5119 37.2003 39.2091 38.3324 39.2109 39.4844C39.2109 43.1088 42.149 46.0469 45.7734 46.0469C49.3979 46.0469 52.3359 43.1088 52.3359 39.4844C52.3378 38.3324 52.035 37.2003 51.4582 36.2031H55.6172C56.0523 36.2031 56.4696 36.376 56.7773 36.6837C57.085 36.9913 57.2578 37.4086 57.2578 37.8438V48.5078H33.7422V37.8438C33.7422 37.4086 33.915 36.9913 34.2227 36.6837C34.5304 36.376 34.9477 36.2031 35.3828 36.2031H40.0887ZM48.9554 39.3127C49.0816 39.2445 49.1759 39.1295 49.2181 38.9924C49.2603 38.8554 49.247 38.7072 49.181 38.5799C49.115 38.4526 49.0017 38.3563 48.8654 38.3117C48.7291 38.2672 48.5807 38.2779 48.4523 38.3417L46.9139 39.1388L45.004 37.2832C44.8997 37.1838 44.7603 37.1296 44.6163 37.1324C44.4722 37.1352 44.3351 37.1947 44.2346 37.298C44.1342 37.4013 44.0786 37.5401 44.0799 37.6841C44.0812 37.8282 44.1393 37.966 44.2416 38.0674L45.8905 39.6692L44.167 40.562L43.3535 39.7718C43.2488 39.6743 43.1102 39.6217 42.9672 39.6253C42.8242 39.6288 42.6883 39.6883 42.5886 39.7908C42.4889 39.8934 42.4334 40.031 42.4339 40.174C42.4345 40.317 42.491 40.4541 42.5914 40.556L43.5463 41.4837C43.6698 41.6037 43.8278 41.6817 43.9981 41.7069C44.1684 41.732 44.3423 41.7029 44.4951 41.6238L48.9554 39.3127ZM47.9609 53.1562H43.0391V56.4375H40.3047C40.0146 56.4375 39.7364 56.5527 39.5313 56.7579C39.3262 56.963 39.2109 57.2412 39.2109 57.5312C39.2109 57.8213 39.3262 58.0995 39.5313 58.3046C39.7364 58.5098 40.0146 58.625 40.3047 58.625H50.6953C50.9854 58.625 51.2636 58.5098 51.4687 58.3046C51.6738 58.0995 51.7891 57.8213 51.7891 57.5312C51.7891 57.2412 51.6738 56.963 51.4687 56.7579C51.2636 56.5527 50.9854 56.4375 50.6953 56.4375H47.9609V53.1562ZM55.6172 52.0625C56.0523 52.0625 56.4696 51.8896 56.7773 51.582C57.085 51.2743 57.2578 50.857 57.2578 50.4219V49.6016H33.7422V50.4219C33.7422 50.857 33.915 51.2743 34.2227 51.582C34.5304 51.8896 34.9477 52.0625 35.3828 52.0625H55.6172Z"
                />
                <defs>
                  <filter
                    id="filter0_d_1_3913"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
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
                      result="effect1_dropShadow_1_3913"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3913"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1_3913"
                    x="15.4766"
                    y="0"
                    width="57"
                    height="26.2732"
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
                      result="effect1_dropShadow_1_3913"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3913"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_1_3913"
                    x="0"
                    y="17.3964"
                    width="26.2031"
                    height="57.0048"
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
                      result="effect1_dropShadow_1_3913"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3913"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_1_3913"
                    x="63.4531"
                    y="15.0155"
                    width="26.5469"
                    height="56.9725"
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
                      result="effect1_dropShadow_1_3913"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3913"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_1_3913"
                    x="16.6719"
                    y="64.1971"
                    width="57.0215"
                    height="25.8029"
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
                      result="effect1_dropShadow_1_3913"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3913"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_1_3913"
                    x="10"
                    y="10"
                    width="70"
                    height="70"
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
                      result="effect1_dropShadow_1_3913"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3913"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Flight Booking"
            description="Our team assists you in booking your flights, ensuring the best options that align with your travel schedule and budget."
            stepNo="05"
          />

          {/* card  */}
          <VisaApplicationCard
            icon={
              <svg
                className="fill-primary duration-200 group-hover:fill-secondary"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_3933)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_1_3933)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_1_3933)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_1_3933)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_1_3933)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_1_3933)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M52.7856 49.387L50.8114 54.6767C50.5396 55.405 50.1149 56.0749 49.5938 55.523C49.4388 55.3588 49.307 55.1385 49.3316 54.8965L49.7669 50.6037C49.768 50.5915 49.7724 50.5799 49.7796 50.5701C49.7867 50.5603 49.7965 50.5526 49.8077 50.5479L52.6947 49.3005C52.7069 49.2951 52.7205 49.2934 52.7337 49.2958C52.7469 49.2981 52.7591 49.3043 52.7687 49.3137C52.789 49.3329 52.7953 49.3608 52.7856 49.387ZM49.0419 60.2447V61.7152C49.0423 61.7503 49.0564 61.7839 49.0813 61.8088C49.1061 61.8336 49.1397 61.8477 49.1749 61.8481H50.8146C50.8497 61.8477 50.8833 61.8335 50.9081 61.8087C50.933 61.7839 50.9471 61.7503 50.9475 61.7152V60.2447C50.9475 60.2266 50.9403 60.2093 50.9275 60.1965C50.9148 60.1837 50.8974 60.1765 50.8794 60.1765H49.1102C49.0921 60.1765 49.0748 60.1837 49.062 60.1965C49.0492 60.2093 49.042 60.2266 49.0419 60.2447ZM40.0515 60.2447V61.7152C40.0515 61.7874 40.1123 61.8481 40.1845 61.8481H41.8242C41.8594 61.8477 41.8929 61.8335 41.9178 61.8087C41.9426 61.7839 41.9567 61.7503 41.9572 61.7152V60.2447C41.9571 60.2266 41.9499 60.2093 41.9371 60.1965C41.9244 60.1837 41.9071 60.1765 41.889 60.1765H40.1198C40.1017 60.1765 40.0844 60.1837 40.0716 60.1965C40.0588 60.2093 40.0516 60.2266 40.0515 60.2447ZM62.1851 38.3249C61.2666 36.1118 56.2042 36.8625 53.6914 37.3747C53.6777 37.3774 53.6652 37.3842 53.6556 37.3943C53.646 37.4044 53.6397 37.4172 53.6377 37.431C53.6354 37.4447 53.6374 37.4589 53.6435 37.4714C53.6496 37.484 53.6595 37.4943 53.6717 37.501C53.9463 37.6553 54.1895 37.8599 54.3886 38.104C54.3962 38.1137 54.4064 38.121 54.4179 38.1252C54.4295 38.1294 54.4419 38.1304 54.454 38.128C56.0692 37.8259 57.4876 37.6834 58.6321 37.7113C61.8017 37.7887 62.274 39.0103 60.0845 41.3009C59.4857 41.9273 58.7101 42.5947 57.7842 43.2831C57.7744 43.2901 57.7667 43.2997 57.762 43.3108C57.7572 43.3218 57.7555 43.334 57.7571 43.3459C57.7584 43.3579 57.7629 43.3693 57.7702 43.3789C57.7774 43.3886 57.7871 43.3961 57.7983 43.4006L58.5938 43.7367C58.617 43.7465 58.6419 43.7434 58.6619 43.728C59.477 43.1011 60.1712 42.4904 60.7254 41.9106C62.0311 40.5447 62.5887 39.2975 62.1851 38.3249ZM57.008 43.8376C56.6948 43.7437 56.3779 43.7013 56.0611 43.7104C55.3235 43.7315 54.849 44.0001 54.2292 44.3122C54.2189 44.3176 54.2073 44.3202 54.1956 44.3197C54.1839 44.3192 54.1726 44.3156 54.1628 44.3093C54.1528 44.3033 54.1445 44.2948 54.1388 44.2846C54.1331 44.2744 54.1302 44.2629 54.1304 44.2512V40.288C54.1304 38.9174 53.0107 37.7977 51.6401 37.7977H39.359C37.9885 37.7977 36.8688 38.9174 36.8688 40.288V52.254C36.8689 52.2699 36.8634 52.2853 36.8533 52.2975C36.8433 52.3098 36.8292 52.3181 36.8136 52.321C35.7414 52.5298 34.7501 52.6707 33.8614 52.7403C31.5257 52.9232 29.9661 52.641 29.6316 51.8352C29.3541 51.1667 29.9486 50.1352 31.1998 48.9103C32.3416 47.7923 34.0093 46.5602 36.0622 45.3203C36.0724 45.3144 36.0808 45.3059 36.0866 45.2956C36.0924 45.2853 36.0954 45.2737 36.0952 45.262V44.3912C36.0952 44.366 36.0827 44.3445 36.0608 44.332C36.039 44.3195 36.014 44.3198 35.9923 44.3326C33.7023 45.6859 31.8402 47.0456 30.5796 48.2798C29.0587 49.769 28.3815 51.1325 28.814 52.1747C29.3143 53.3802 31.1929 53.8379 33.9272 53.6237C36.0282 53.4592 38.9538 52.7174 41.6851 51.869C41.7403 51.8518 41.7966 51.838 41.8505 51.8174C42.723 51.4833 40.9074 49.1731 40.4524 48.4365C40.4404 48.417 40.4387 48.395 40.4477 48.374C40.4566 48.353 40.4736 48.3389 40.4959 48.334C40.5187 48.3291 40.5431 48.3312 40.5718 48.3462L43.2459 49.7449C43.8402 50.0557 44.452 50.2542 45.05 49.9518L55.1732 44.8314C55.767 44.531 56.39 44.5134 57.0103 44.7783L58.6125 45.4627C58.7532 45.5228 58.7524 45.7198 58.6131 45.7779C51.5871 48.8138 44.4932 52.5504 36.9242 53.9944C36.9085 53.9973 36.8944 54.0055 36.8843 54.0178C36.8741 54.03 36.8686 54.0454 36.8687 54.0613V57.0313C36.8687 58.4018 37.9884 59.5216 39.359 59.5216H51.6399C53.0104 59.5216 54.1302 58.4019 54.1302 57.0313V48.7251C54.1302 48.6973 54.1458 48.6735 54.1714 48.6625L58.963 46.5922C59.8135 46.2256 59.8117 45.013 58.9588 44.6487L57.9853 44.2329L57.9841 44.2324L57.0139 43.8398C57.012 43.839 57.01 43.8382 57.008 43.8376ZM48.35 36.9608V32.4865C48.35 32.4677 48.3568 32.4515 48.3701 32.4382C48.3764 32.4318 48.3839 32.4267 48.3923 32.4233C48.4006 32.4199 48.4095 32.4182 48.4185 32.4184C48.7355 32.4194 48.9995 32.4186 49.2689 32.1492C49.3541 32.0642 49.4218 31.9633 49.4679 31.8521C49.5141 31.7409 49.5378 31.6217 49.5378 31.5014V30.0686C49.5378 29.5634 49.1261 29.1517 48.621 29.1517H42.3782C41.873 29.1517 41.4613 29.5634 41.4613 30.0686V31.5014C41.4613 32.0065 41.873 32.4181 42.3782 32.4181H42.5809C42.6185 32.4181 42.6491 32.4488 42.6491 32.4863V36.9607C42.6491 36.9983 42.6798 37.0289 42.7173 37.0289H43.4678C43.4858 37.0289 43.5032 37.0217 43.5159 37.0089C43.5287 36.9961 43.5359 36.9788 43.5359 36.9607V32.4863C43.5359 32.4487 43.5666 32.4181 43.6041 32.4181H47.3948C47.4324 32.4181 47.463 32.4488 47.463 32.4863V36.9607C47.463 36.9983 47.4937 37.0289 47.5312 37.0289H48.2817C48.2906 37.0289 48.2995 37.0272 48.3078 37.0238C48.3161 37.0203 48.3236 37.0153 48.33 37.009C48.3363 37.0027 48.3414 36.9952 48.3448 36.9869C48.3482 36.9786 48.35 36.9698 48.35 36.9608ZM43.5918 45.3616C43.5908 45.3609 43.5899 45.3603 43.5889 45.3597C42.9582 44.9589 43.2275 44.4922 43.9705 44.7002L43.973 44.7008L50.1819 46.1891C50.2103 46.1959 50.2305 46.2187 50.2338 46.2478C50.237 46.2768 50.2226 46.3036 50.1963 46.3165L47.1379 47.8365C47.1269 47.8421 47.1145 47.8446 47.1022 47.8437C47.0898 47.8427 47.078 47.8383 47.068 47.831L43.5918 45.3616Z"
                />
                <defs>
                  <filter
                    id="filter0_d_1_3933"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
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
                      result="effect1_dropShadow_1_3933"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3933"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1_3933"
                    x="15.4766"
                    y="0"
                    width="57"
                    height="26.2732"
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
                      result="effect1_dropShadow_1_3933"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3933"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_1_3933"
                    x="0"
                    y="17.3964"
                    width="26.2031"
                    height="57.0048"
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
                      result="effect1_dropShadow_1_3933"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3933"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_1_3933"
                    x="63.4531"
                    y="15.0155"
                    width="26.5469"
                    height="56.9725"
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
                      result="effect1_dropShadow_1_3933"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3933"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_1_3933"
                    x="16.6719"
                    y="64.1971"
                    width="57.0215"
                    height="25.8029"
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
                      result="effect1_dropShadow_1_3933"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3933"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_1_3933"
                    x="10"
                    y="10"
                    width="70"
                    height="70"
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
                      result="effect1_dropShadow_1_3933"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3933"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Pre-Travel Preparation"
            description="We provide essential pre-travel preparation, including visa checks, itinerary confirmations, and travel tips to ensure a smooth journey."
            stepNo="06"
          />

          {/* card  */}
          <VisaApplicationCard
            icon={
              <svg
                className="fill-primary duration-200 group-hover:fill-secondary"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_3953)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_1_3953)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_1_3953)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_1_3953)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_1_3953)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_1_3953)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M55.419 52.5498V54.0854C55.419 55.1142 55.0182 56.0814 54.291 56.8088C53.5635 57.5362 52.5965 57.9368 51.5677 57.9368H49.4796C49.5002 57.844 49.511 57.7475 49.511 57.6486C49.511 57.5497 49.5002 57.4532 49.4796 57.3604H51.5677C53.3735 57.3604 54.8427 55.8913 54.8427 54.0854V52.5655H55.1307C55.227 52.5654 55.3233 52.5602 55.419 52.5498ZM48.9346 57.6486C48.9346 58.0695 48.592 58.4119 48.1711 58.4119H46.5703C46.1494 58.4119 45.807 58.0695 45.807 57.6486C45.807 57.2277 46.1494 56.8853 46.5703 56.8853H48.1711C48.592 56.8852 48.9346 57.2277 48.9346 57.6486ZM49.7478 41.0907H41.2898C41.2451 41.0907 41.2022 41.1085 41.1706 41.1402C41.1389 41.1718 41.1211 41.2147 41.1211 41.2594V47.1884C41.1211 47.2331 41.1389 47.276 41.1706 47.3077C41.2022 47.3393 41.2451 47.3571 41.2898 47.3571H42.5436C42.62 47.3571 42.6933 47.3875 42.7473 47.4415C42.8014 47.4956 42.8318 47.5689 42.8318 47.6453V48.8685L44.2586 47.4416C44.2853 47.4149 44.3171 47.3936 44.3521 47.3791C44.3871 47.3646 44.4246 47.3572 44.4625 47.3572H49.7477C49.7924 47.3571 49.8353 47.3393 49.8669 47.3077C49.8985 47.2761 49.9163 47.2332 49.9164 47.1885V41.2594C49.9164 41.2147 49.8987 41.1718 49.867 41.1402C49.8354 41.1085 49.7925 41.0907 49.7478 41.0907ZM47.9011 45.4838H43.1366C43.0602 45.4838 42.9869 45.4534 42.9328 45.3994C42.8788 45.3453 42.8484 45.272 42.8484 45.1956C42.8484 45.1192 42.8788 45.0459 42.9328 44.9918C42.9869 44.9378 43.0602 44.9074 43.1366 44.9074H47.9011C47.9775 44.9074 48.0508 44.9378 48.1048 44.9918C48.1589 45.0459 48.1892 45.1192 48.1892 45.1956C48.1892 45.272 48.1589 45.3453 48.1048 45.3994C48.0508 45.4534 47.9775 45.4838 47.9011 45.4838ZM47.9011 43.5348H43.1366C43.0602 43.5348 42.9869 43.5044 42.9328 43.4504C42.8788 43.3963 42.8484 43.323 42.8484 43.2466C42.8484 43.1702 42.8788 43.0969 42.9328 43.0428C42.9869 42.9888 43.0602 42.9584 43.1366 42.9584H47.9011C47.9775 42.9584 48.0508 42.9888 48.1048 43.0428C48.1589 43.0969 48.1892 43.1702 48.1892 43.2466C48.1892 43.323 48.1589 43.3963 48.1048 43.4504C48.0508 43.5044 47.9775 43.5348 47.9011 43.5348ZM57.1821 45.799V49.9426C57.1794 51.0714 56.2601 51.9889 55.1308 51.9891H53.5341C53.5127 51.989 53.4921 51.9805 53.4769 51.9653C53.4618 51.9501 53.4533 51.9295 53.4533 51.908V43.8334C53.4533 43.7888 53.4895 43.7525 53.5341 43.7525H55.1306C56.2601 43.7525 57.1794 44.6701 57.1821 45.799ZM58.6309 47.2479V48.4939C58.6309 49.0344 58.2595 49.4898 57.7585 49.6183V46.1234C58.2595 46.252 58.6309 46.7071 58.6309 47.2479Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M37.5844 43.8335V51.9081C37.5844 51.9527 37.5482 51.9891 37.5035 51.9891H35.907C34.7775 51.9891 33.8582 51.0714 33.8555 49.9427V45.7988C33.8584 44.6698 34.7776 43.7526 35.907 43.7526H37.5035C37.5482 43.7526 37.5844 43.7888 37.5844 43.8335ZM55.9713 43.146V43.3142C55.7006 43.2226 55.4166 43.176 55.1308 43.1763H54.4089V43.0086C54.4089 41.8085 54.1739 40.6443 53.7101 39.5481C53.2623 38.4894 52.6213 37.5388 51.8048 36.7225C50.9886 35.906 50.038 35.265 48.9792 34.8173C47.8831 34.3534 46.7188 34.1184 45.5187 34.1184C44.3186 34.1184 43.1544 34.3534 42.0582 34.8173C40.9997 35.265 40.0489 35.9059 39.2326 36.7223C38.4164 37.5386 37.7753 38.4894 37.3276 39.5482C36.864 40.6443 36.6289 41.8086 36.6289 43.0085V43.1764H35.907C35.6132 43.1764 35.3305 43.2248 35.0665 43.3143V43.1457C35.0665 37.3823 39.7553 32.6934 45.5187 32.6934C48.3108 32.6934 50.9358 33.7805 52.91 35.7547C54.8842 37.7289 55.9713 40.3539 55.9713 43.146Z"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33.2787 46.1233V49.6184C32.7776 49.4898 32.4063 49.0345 32.4063 48.494V47.2479C32.4062 46.7072 32.7776 46.2519 33.2787 46.1233Z"
                />
                <defs>
                  <filter
                    id="filter0_d_1_3953"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
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
                      result="effect1_dropShadow_1_3953"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3953"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1_3953"
                    x="15.4766"
                    y="0"
                    width="57"
                    height="26.2732"
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
                      result="effect1_dropShadow_1_3953"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3953"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_1_3953"
                    x="0"
                    y="17.3964"
                    width="26.2031"
                    height="57.0048"
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
                      result="effect1_dropShadow_1_3953"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3953"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_1_3953"
                    x="63.4531"
                    y="15.0155"
                    width="26.5469"
                    height="56.9725"
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
                      result="effect1_dropShadow_1_3953"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3953"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_1_3953"
                    x="16.6719"
                    y="64.1971"
                    width="57.0215"
                    height="25.8029"
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
                      result="effect1_dropShadow_1_3953"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3953"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_1_3953"
                    x="10"
                    y="10"
                    width="70"
                    height="70"
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
                      result="effect1_dropShadow_1_3953"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3953"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Travel Support"
            description="Our dedicated team offers ongoing travel support, assisting you with any issues or questions that arise during your journey."
            stepNo="07"
          />

          {/* card  */}
          <VisaApplicationCard
            icon={
              <svg
                className="fill-primary duration-200 group-hover:fill-secondary"
                width="90"
                height="90"
                viewBox="0 0 90 90"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_3976)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_1_3976)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_1_3976)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter3_d_1_3976)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter4_d_1_3976)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_1_3976)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path d="M60.4849 33.5782C60.4849 34.8415 58.6255 38.7407 58.2537 39.5063C58.1662 39.6977 57.9748 39.818 57.7615 39.818C57.5537 39.818 57.3623 39.6977 57.2693 39.5063C56.8974 38.7407 55.038 34.8415 55.038 33.5782C55.038 32.0743 56.263 30.8547 57.7615 30.8547C59.2599 30.8547 60.4849 32.0743 60.4849 33.5782ZM55.032 54.4622H46.4669C46.3218 54.4622 46.1827 54.4046 46.0802 54.3021C45.9776 54.1995 45.92 54.0604 45.92 53.9154C45.92 53.7703 45.9776 53.6312 46.0802 53.5287C46.1827 53.4261 46.3218 53.3685 46.4669 53.3685H55.032C56.6803 53.3685 57.9234 52.085 57.9234 50.3836C57.9234 48.7179 56.6535 47.413 55.032 47.413H41.5964C41.5752 47.4131 41.554 47.4118 41.533 47.4092C39.5773 47.18 38.1582 45.4722 38.1582 43.3481C38.1582 41.2136 39.7972 39.2695 41.597 39.2695H55.084C55.229 39.2695 55.3681 39.3271 55.4707 39.4297C55.5732 39.5322 55.6309 39.6713 55.6309 39.8164C55.6309 39.9614 55.5732 40.1005 55.4707 40.2031C55.3681 40.3056 55.229 40.3633 55.084 40.3633H41.597C40.5125 40.3633 39.252 41.667 39.252 43.3481C39.252 44.922 40.2281 46.1393 41.6303 46.3193H55.0326C57.2671 46.3193 59.0177 48.1048 59.0177 50.3836C59.0177 52.6625 57.2666 54.4622 55.032 54.4622Z" />
                <path d="M45.4461 53.8562V53.9766C45.4461 54.3522 45.2969 54.7125 45.0313 54.9781C44.7656 55.2437 44.4054 55.393 44.0297 55.393H42.1868C42.1813 55.393 42.1813 55.3984 42.1813 55.3984L38.6539 59.9375C38.55 60.0688 38.3914 60.1453 38.2219 60.1453H36.2039C36.0125 60.1453 35.8375 60.0469 35.7391 59.8828C35.6352 59.7188 35.6297 59.5164 35.7227 59.3469L37.7953 55.393H35.2633L32.9938 58.275C32.9429 58.3395 32.8781 58.3916 32.8042 58.4276C32.7304 58.4636 32.6494 58.4824 32.5672 58.4828H31.0633C30.8664 58.4828 30.6914 58.3844 30.593 58.2148C30.5443 58.1333 30.5177 58.0405 30.5158 57.9456C30.5139 57.8507 30.5367 57.7569 30.5821 57.6734L32.4032 54.3156V53.5227L30.5821 50.1594C30.4891 49.9898 30.4946 49.782 30.593 49.618C30.6914 49.4539 30.8664 49.35 31.0633 49.35H32.5672C32.6494 49.3504 32.7304 49.3693 32.8042 49.4052C32.8781 49.4412 32.9429 49.4934 32.9938 49.5578L35.2633 52.4398H37.7899L35.7227 48.4859C35.6768 48.4034 35.6542 48.3101 35.657 48.2157C35.6599 48.1214 35.6883 48.0295 35.7391 47.95C35.8375 47.7859 36.0125 47.6875 36.2039 47.6875H38.2219C38.3914 47.6875 38.55 47.7641 38.6539 47.9008L42.1813 52.4344C42.1813 52.4344 42.1813 52.4398 42.1868 52.4398H44.0297C44.4054 52.4398 44.7656 52.5891 45.0313 52.8547C45.2969 53.1203 45.4461 53.4806 45.4461 53.8562Z" />
                <defs>
                  <filter
                    id="filter0_d_1_3976"
                    x="0"
                    y="0"
                    width="90"
                    height="90"
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
                      result="effect1_dropShadow_1_3976"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3976"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_1_3976"
                    x="15.4766"
                    y="0"
                    width="57"
                    height="26.2732"
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
                      result="effect1_dropShadow_1_3976"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3976"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_1_3976"
                    x="63.4531"
                    y="15.0155"
                    width="26.5469"
                    height="56.9725"
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
                      result="effect1_dropShadow_1_3976"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3976"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_1_3976"
                    x="0"
                    y="17.3964"
                    width="26.2031"
                    height="57.0048"
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
                      result="effect1_dropShadow_1_3976"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3976"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_1_3976"
                    x="16.6719"
                    y="64.1971"
                    width="57.0215"
                    height="25.8029"
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
                      result="effect1_dropShadow_1_3976"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3976"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_1_3976"
                    x="10"
                    y="10"
                    width="70"
                    height="70"
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
                      result="effect1_dropShadow_1_3976"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_3976"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Post-Travel Follow-Up"
            description="We follow up after your trip to gather feedback and address any concerns about your travel experience."
            stepNo="08"
          />
        </div>
      </div>
    </section>
  );
};

export default FlightAssistanceProcess;
