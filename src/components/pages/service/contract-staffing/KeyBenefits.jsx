import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const KeyBenefits = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container flex flex-col justify-between gap-[100px] lg:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-6 lg:basis-1/2">
          <div className="flex items-center">
            <span className="rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
              Key Benefits
            </span>
          </div>
          <h2 className="text-left text-4xl font-semibold lg:text-5xl">
            Key Benefits of Our Contract Staffing
          </h2>
          <p className="text-left text-sm font-medium">
            Experience flexibility and speed with our contract staffing
            services. Benefit from specialized talent, reduced hiring costs, and
            streamlined workforce management, ensuring your projects are
            completed efficiently and effectively.
          </p>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_283_2976)">
                  <rect
                    x="5"
                    y="5"
                    width="42"
                    height="42"
                    rx="4"
                    fill="#FBFBFB"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M26 29.125C27.7259 29.125 29.125 27.7259 29.125 26C29.125 24.2741 27.7259 22.875 26 22.875C24.2741 22.875 22.875 24.2741 22.875 26C22.875 27.7259 24.2741 29.125 26 29.125Z"
                    fill="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M31.625 32.25V38.5C31.6252 38.5821 31.6092 38.6635 31.5779 38.7395C31.5466 38.8154 31.5006 38.8844 31.4425 38.9425C31.3844 39.0006 31.3154 39.0466 31.2395 39.0779C31.1635 39.1092 31.0821 39.1252 31 39.125H21C20.9179 39.1252 20.8365 39.1092 20.7605 39.0779C20.6846 39.0466 20.6156 39.0006 20.5575 38.9425C20.4994 38.8844 20.4534 38.8154 20.4221 38.7395C20.3908 38.6635 20.3748 38.5821 20.375 38.5V32.25C20.375 31.7525 20.5725 31.2756 20.9244 30.9244C21.0984 30.7501 21.305 30.6119 21.5325 30.5177C21.7599 30.4234 22.0038 30.3749 22.25 30.375H29.75C30.2475 30.375 30.7244 30.5725 31.0756 30.9244C31.4275 31.2756 31.625 31.7525 31.625 32.25ZM19.125 35.375V38.5C19.125 38.6658 19.0592 38.8247 18.9419 38.9419C18.8247 39.0592 18.6658 39.125 18.5 39.125H13.5C13.3342 39.125 13.1753 39.0592 13.0581 38.9419C12.9408 38.8247 12.875 38.6658 12.875 38.5V35.375C12.875 34.8775 13.0725 34.4006 13.4244 34.0494C13.5984 33.8751 13.805 33.7369 14.0325 33.6427C14.2599 33.5484 14.5038 33.4999 14.75 33.5H17.25C17.7475 33.5 18.2244 33.6975 18.5756 34.0494C18.9275 34.4006 19.125 34.8775 19.125 35.375ZM32.875 38.5V35.375C32.875 34.8775 33.0725 34.4006 33.4244 34.0494C33.5984 33.8751 33.805 33.7369 34.0325 33.6427C34.2599 33.5484 34.5038 33.4999 34.75 33.5H37.25C37.7475 33.5 38.2244 33.6975 38.5756 34.0494C38.9275 34.4006 39.125 34.8775 39.125 35.375V38.5C39.125 38.6658 39.0592 38.8247 38.9419 38.9419C38.8247 39.0592 38.6658 39.125 38.5 39.125H33.5C33.3342 39.125 33.1753 39.0592 33.0581 38.9419C32.9408 38.8247 32.875 38.6658 32.875 38.5Z"
                    fill="#F90945"
                  />
                  <path
                    d="M16 32.25C17.3807 32.25 18.5 31.1307 18.5 29.75C18.5 28.3693 17.3807 27.25 16 27.25C14.6193 27.25 13.5 28.3693 13.5 29.75C13.5 31.1307 14.6193 32.25 16 32.25Z"
                    fill="#F90945"
                  />
                  <path
                    d="M36 32.25C37.3807 32.25 38.5 31.1307 38.5 29.75C38.5 28.3693 37.3807 27.25 36 27.25C34.6193 27.25 33.5 28.3693 33.5 29.75C33.5 31.1307 34.6193 32.25 36 32.25Z"
                    fill="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15.3319 26.0594C15.3307 25.8244 15.3382 25.5882 15.3538 25.3526C15.3781 24.992 15.2977 24.6322 15.1223 24.3163C14.9469 24.0004 14.6839 23.7419 14.3651 23.5719C14.1432 23.4538 13.8969 23.3225 13.6694 23.1982L13.6638 23.1944C13.5394 23.1282 13.4411 23.0218 13.3851 22.8924C13.3292 22.7631 13.3188 22.6186 13.3557 22.4825C13.4563 22.1207 13.5726 21.7632 13.7007 21.4101C13.7513 21.2782 13.8451 21.1674 13.9668 21.0956C14.0884 21.0239 14.2308 20.9955 14.3707 21.015H14.3713C14.6319 21.0513 14.9126 21.0907 15.1663 21.1225C15.5227 21.1712 15.8855 21.1161 16.2113 20.9639C16.5372 20.8117 16.8123 20.5689 17.0038 20.2644C17.2351 19.9019 17.4901 19.5507 17.7676 19.2182H17.7682C17.9996 18.9407 18.146 18.6023 18.1897 18.2436C18.2334 17.8849 18.1725 17.5212 18.0144 17.1963C17.9044 16.97 17.7826 16.7194 17.6719 16.485C17.6083 16.358 17.5901 16.213 17.6203 16.0741C17.6506 15.9353 17.7275 15.811 17.8382 15.7219C18.1326 15.4882 18.4363 15.2675 18.7476 15.0569C18.9913 14.8988 19.3126 14.9294 19.5219 15.1313C19.7113 15.3144 19.9157 15.5107 20.1019 15.6857C20.3617 15.9345 20.6876 16.1033 21.0407 16.1718C21.3939 16.2403 21.7592 16.2056 22.0932 16.0719C22.4932 15.9144 22.9057 15.78 23.3263 15.6744C23.6767 15.5861 23.9942 15.3985 24.2404 15.134C24.4867 14.8696 24.6513 14.5396 24.7144 14.1838C24.7582 13.9357 24.8069 13.6613 24.8551 13.4069L24.8563 13.4C24.8809 13.2612 24.952 13.1348 25.0578 13.0416C25.1636 12.9483 25.2979 12.8938 25.4388 12.8869C25.8141 12.8718 26.1897 12.8708 26.5651 12.8838C26.7063 12.891 26.8409 12.946 26.9468 13.0396C27.0527 13.1333 27.1237 13.2601 27.1482 13.3994C27.1938 13.6588 27.2432 13.9376 27.2913 14.1888C27.3551 14.5428 27.5197 14.871 27.7652 15.1339C28.0107 15.3968 28.3268 15.5834 28.6757 15.6713C29.0942 15.7789 29.5052 15.9136 29.9063 16.0744H29.9069C30.2423 16.2089 30.6093 16.2436 30.9639 16.1744C31.3185 16.1052 31.6455 15.9351 31.9057 15.6844C32.0869 15.51 32.2876 15.3163 32.4763 15.1382L32.4813 15.1338C32.5827 15.0358 32.7145 14.9753 32.8548 14.9621C32.9952 14.9489 33.1359 14.9839 33.2538 15.0613C33.5663 15.2688 33.8707 15.4894 34.1669 15.7207C34.2768 15.8095 34.3534 15.9329 34.384 16.0709C34.4147 16.2088 34.3976 16.3531 34.3357 16.4801C34.2207 16.7169 34.0963 16.9719 33.9869 17.2032C33.8307 17.5272 33.771 17.8893 33.8151 18.2463C33.8592 18.6033 34.0052 18.9401 34.2357 19.2163C34.5088 19.5475 34.7644 19.8988 34.9944 20.2657H34.9951C35.1872 20.5716 35.4637 20.8155 35.7913 20.968C36.1188 21.1204 36.4835 21.175 36.8413 21.125C37.0907 21.0907 37.3663 21.0519 37.6238 21.0188L37.6307 21.0182C37.7702 20.9987 37.9123 21.0271 38.0336 21.0989C38.1548 21.1706 38.2481 21.2814 38.2982 21.4132C38.4294 21.765 38.5457 22.1225 38.6494 22.4838C38.6862 22.6202 38.6755 22.765 38.6192 22.8946C38.5628 23.0241 38.4642 23.1307 38.3394 23.1969V23.1976C38.103 23.3226 37.8673 23.4493 37.6326 23.5775C37.3157 23.7477 37.0547 24.0056 36.8805 24.3203C36.7064 24.6349 36.6266 24.9931 36.6507 25.3519C36.6651 25.5869 36.6713 25.8232 36.6694 26.0594C36.4487 26.0199 36.2249 26.0001 36.0007 26C35.0069 26 34.1032 26.3876 33.4319 27.0188C33.4776 26.6857 33.5007 26.3457 33.5007 26C33.5007 21.8607 30.1401 18.5 26.0007 18.5C21.8613 18.5 18.5007 21.8607 18.5007 26C18.5007 26.3457 18.5238 26.6857 18.5694 27.0188C17.8747 26.3636 16.9556 25.9991 16.0007 26C15.7726 26 15.5488 26.0207 15.3319 26.0594Z"
                    fill="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M21.52 28.2219C21.1426 27.4594 20.9658 26.6133 21.0065 25.7635C21.0471 24.9138 21.3038 24.0884 21.7522 23.3654C22.2007 22.6425 22.8261 22.0459 23.5694 21.632C24.3127 21.2181 25.1493 21.0005 26 21C26.8508 21.0005 27.6873 21.2181 28.4306 21.632C29.1739 22.0459 29.7993 22.6425 30.2478 23.3654C30.6962 24.0884 30.9529 24.9138 30.9936 25.7635C31.0342 26.6133 30.8574 27.4594 30.48 28.2219C30.4122 28.3695 30.4045 28.5377 30.4586 28.6908C30.5127 28.844 30.6243 28.9701 30.7697 29.0424C30.9151 29.1147 31.083 29.1276 31.2378 29.0782C31.3925 29.0289 31.522 28.9213 31.5988 28.7781C32.0284 27.9152 32.2514 26.964 32.25 26C32.25 22.5506 29.4494 19.75 26 19.75C22.5506 19.75 19.75 22.5506 19.75 26C19.7486 26.964 19.9716 27.9152 20.4013 28.7781C20.4378 28.8516 20.4884 28.9171 20.5503 28.971C20.6121 29.0249 20.684 29.0661 20.7618 29.0922C20.8395 29.1183 20.9217 29.1289 21.0035 29.1232C21.0854 29.1176 21.1653 29.0959 21.2388 29.0594C21.3122 29.0229 21.3778 28.9722 21.4316 28.9104C21.4855 28.8485 21.5267 28.7766 21.5528 28.6989C21.5789 28.6211 21.5895 28.539 21.5839 28.4571C21.5782 28.3753 21.5565 28.2953 21.52 28.2219Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_283_2976"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
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
                      result="effect1_dropShadow_283_2976"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_283_2976"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-2 text-xl font-medium">Scalable Workforce</h6>
                <p className="text-sm font-medium">
                  Easily adjust your workforce size with our scalable staffing
                  solutions to meet project demands.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_283_2995)">
                  <rect
                    x="5"
                    y="5"
                    width="42"
                    height="42"
                    rx="4"
                    fill="#FBFBFB"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M34.865 36.4599C34.8021 36.5131 34.7599 36.5867 34.7458 36.6679C34.7317 36.749 34.7465 36.8326 34.7877 36.9039L35.5117 38.1572L33.0389 37.8647C33.0221 37.8615 33.0051 37.8595 32.988 37.8587L30.4419 37.5574L32.4604 32.868L33.1417 34.0486C33.1682 34.0945 33.2048 34.1338 33.2487 34.1636C33.2925 34.1934 33.3426 34.2128 33.3951 34.2205C33.4476 34.2282 33.5011 34.2239 33.5517 34.2079C33.6023 34.192 33.6486 34.1648 33.6871 34.1284C35.4074 32.5033 36.5869 30.3185 37.0085 27.9764C37.3862 25.8774 37.1657 23.7651 36.3721 21.8132L37.7119 22.3898C37.7621 22.4114 37.8167 22.421 37.8713 22.4178C37.9259 22.4146 37.979 22.3987 38.0263 22.3713C38.0737 22.344 38.114 22.306 38.1441 22.2603C38.1742 22.2146 38.1932 22.1626 38.1996 22.1083L38.4239 20.2043C41.0229 25.7645 39.6145 32.4436 34.8651 36.4599H34.865ZM22.3694 13.9739C22.3967 14.0212 22.4126 14.0743 22.4158 14.1289C22.419 14.1835 22.4095 14.2381 22.3879 14.2883L21.8112 15.6283C23.7638 14.8346 25.8765 14.614 27.9757 14.9918C30.3178 15.4132 32.5022 16.5928 34.1265 18.3131C34.1629 18.3517 34.1901 18.398 34.2061 18.4485C34.222 18.4991 34.2263 18.5526 34.2187 18.6051C34.211 18.6576 34.1916 18.7076 34.1618 18.7515C34.132 18.7954 34.0927 18.832 34.0468 18.8585L32.8673 19.5398L37.5569 21.5583L38.1553 16.4885L36.9019 17.2125C36.8306 17.2536 36.747 17.2685 36.6659 17.2543C36.5847 17.2402 36.5111 17.198 36.4579 17.1351C32.4425 12.385 25.7635 10.9768 20.2034 13.5765L22.1063 13.8007C22.1606 13.8071 22.2127 13.8261 22.2584 13.8561C22.3041 13.8862 22.3421 13.9266 22.3695 13.9739L22.3694 13.9739ZM13.9737 29.6306C14.0211 29.6033 14.0742 29.5874 14.1288 29.5843C14.1834 29.5811 14.238 29.5907 14.2882 29.6123L15.6266 30.1886C14.8336 28.2361 14.6134 26.1233 14.9913 24.0244C15.413 21.6822 16.5927 19.4978 18.3129 17.8737C18.3515 17.8373 18.3978 17.81 18.4484 17.7941C18.4989 17.7781 18.5525 17.7738 18.605 17.7815C18.6575 17.7892 18.7075 17.8087 18.7514 17.8385C18.7953 17.8683 18.8318 17.9077 18.8583 17.9536L19.5381 19.1323L21.5564 14.4433L16.4876 13.8449L17.2107 15.0985C17.2518 15.1698 17.2666 15.2533 17.2524 15.3344C17.2383 15.4155 17.1961 15.4891 17.1332 15.5422C12.384 19.5569 10.976 26.2347 13.5754 31.795L13.8004 29.8937C13.8068 29.8394 13.8258 29.7873 13.8559 29.7416C13.886 29.696 13.9264 29.658 13.9737 29.6306ZM29.6288 38.0264C29.6014 37.979 29.5855 37.926 29.5824 37.8714C29.5792 37.8168 29.5888 37.7622 29.6104 37.712L30.1866 36.3737C28.2349 37.1666 26.1226 37.3869 24.0237 37.0089C21.6816 36.5872 19.4968 35.4075 17.8718 33.6873C17.8354 33.6488 17.8082 33.6024 17.7922 33.5519C17.7763 33.5013 17.772 33.4478 17.7797 33.3953C17.7873 33.3428 17.8068 33.2927 17.8366 33.2489C17.8664 33.205 17.9057 33.1684 17.9516 33.1419L19.1318 32.4607L16.8923 31.4984L14.4428 30.4437L14.1414 32.9906C14.1405 33.0061 14.1387 33.0215 14.1359 33.0367L13.8429 35.5125L15.0965 34.7894C15.1678 34.7482 15.2513 34.7334 15.3325 34.7476C15.4136 34.7618 15.4872 34.804 15.5403 34.8669C19.5555 39.6151 26.2341 41.0228 31.7943 38.4249L29.8918 38.1997C29.8375 38.1933 29.7854 38.1743 29.7398 38.1442C29.6941 38.1141 29.6561 38.0738 29.6288 38.0264ZM26.064 25.6549C25.9015 25.6244 25.7709 25.5962 25.6656 25.5665C25.3746 25.4824 25.3082 25.3866 25.3082 25.178C25.3082 24.9219 25.625 24.7055 26 24.7055C26.256 24.7055 26.4908 24.8047 26.6128 24.9644C26.6482 25.0108 26.6947 25.0476 26.7479 25.0716C26.8012 25.0955 26.8595 25.1058 26.9177 25.1015C26.9759 25.0972 27.0322 25.0784 27.0813 25.0469C27.1305 25.0154 27.171 24.9722 27.1992 24.9211C27.252 24.86 27.2822 24.7825 27.2846 24.7017C27.2869 24.6209 27.2614 24.5418 27.2122 24.4776C27.0115 24.2158 26.7032 24.0339 26.3513 23.9608V23.6134C26.3513 23.5202 26.3143 23.4308 26.2484 23.365C26.1825 23.2991 26.0932 23.2621 26 23.2621C25.9069 23.2621 25.8175 23.2991 25.7517 23.365C25.6858 23.4308 25.6488 23.5202 25.6488 23.6134V23.9613C25.0217 24.0935 24.5559 24.5709 24.5559 25.1381C24.5559 25.886 25.0717 26.1409 25.5591 26.2658C25.6899 26.3001 25.819 26.3244 25.9351 26.3462C26.5716 26.4658 26.6918 26.5416 26.6918 26.8239C26.6918 27.0801 26.375 27.2964 26 27.2964C25.7691 27.2964 25.5522 27.2139 25.4198 27.0758C25.3554 27.0085 25.2668 26.9696 25.1737 26.9676C25.0805 26.9657 24.9904 27.0008 24.9231 27.0652C24.8947 27.0931 24.8713 27.1255 24.8538 27.1613C24.7451 27.2964 24.7491 27.4936 24.872 27.6226C25.0717 27.8323 25.3443 27.9764 25.6487 28.0394V28.3885C25.6487 28.4817 25.6857 28.571 25.7516 28.6369C25.8175 28.7028 25.9068 28.7398 26 28.7398C26.0931 28.7398 26.1825 28.7028 26.2484 28.6369C26.3142 28.571 26.3513 28.4817 26.3513 28.3885V28.0389C26.9774 27.9066 27.4425 27.4293 27.4425 26.8621C27.4425 25.9138 26.6129 25.758 26.064 25.6549V25.6549ZM32.4003 27.7689C32.2557 28.2954 32.046 28.8018 31.776 29.2763L32.3489 29.9746C32.3973 30.0336 32.4252 30.1068 32.4283 30.1831C32.4314 30.2594 32.4096 30.3346 32.3661 30.3973C31.8337 31.1676 31.1659 31.8348 30.3951 32.3666C30.3323 32.4099 30.2571 32.4317 30.1808 32.4285C30.1045 32.4253 30.0314 32.3973 29.9724 32.3489L29.2757 31.7761C28.8006 32.0459 28.294 32.2559 27.7675 32.4015L27.68 33.3008C27.6726 33.3769 27.6406 33.4485 27.5888 33.5047C27.537 33.561 27.4683 33.5988 27.3931 33.6124C26.9332 33.6961 26.4668 33.7382 25.9993 33.7384C25.5338 33.7384 25.0686 33.6963 24.6067 33.6124C24.5316 33.5987 24.463 33.561 24.4113 33.5048C24.3595 33.4487 24.3275 33.3772 24.32 33.3012L24.2312 32.4016C23.7049 32.2562 23.1985 32.0461 22.7239 31.7761L22.0257 32.349C21.9667 32.3975 21.8935 32.4254 21.8172 32.4285C21.7409 32.4316 21.6656 32.4097 21.6029 32.3663C20.8331 31.8341 20.166 31.167 19.6338 30.3973C19.5904 30.3345 19.5685 30.2593 19.5716 30.183C19.5748 30.1067 19.6026 30.0335 19.6511 29.9745L20.224 29.2763C19.954 28.8016 19.7439 28.2953 19.5985 27.7689L18.6988 27.6801C18.6229 27.6726 18.5514 27.6406 18.4953 27.5888C18.4391 27.5371 18.4014 27.4685 18.3877 27.3934C18.2198 26.4722 18.2198 25.5282 18.3877 24.607C18.4014 24.5318 18.4392 24.463 18.4954 24.4113C18.5517 24.3595 18.6233 24.3275 18.6994 24.3201L19.5986 24.2326C19.7438 23.7059 19.9539 23.1992 20.2239 22.7242L19.6512 22.0276C19.6027 21.9687 19.5748 21.8955 19.5716 21.8192C19.5684 21.743 19.5902 21.6677 19.6336 21.6049C20.1653 20.8342 20.8326 20.1664 21.6028 19.6339C21.6656 19.5904 21.7408 19.5686 21.8171 19.5717C21.8934 19.5748 21.9666 19.6027 22.0256 19.6511L22.7238 20.2241C23.1983 19.954 23.7047 19.7443 24.2312 19.5997L24.3199 18.7006C24.3274 18.6246 24.3595 18.5532 24.4112 18.497C24.4629 18.4409 24.5316 18.4032 24.6067 18.3895C25.5279 18.2216 26.4718 18.2216 27.393 18.3895C27.4683 18.4031 27.537 18.441 27.5888 18.4972C27.6406 18.5535 27.6726 18.6251 27.68 18.7012L27.7674 19.5998C28.2941 19.7446 28.8007 19.9543 29.2756 20.2241L29.9723 19.6513C30.0313 19.6028 30.1045 19.5749 30.1807 19.5717C30.257 19.5685 30.3322 19.5903 30.395 19.6337C31.1663 20.1657 31.8343 20.8336 32.3663 21.6049C32.4097 21.6677 32.4314 21.7429 32.4282 21.8192C32.425 21.8955 32.3971 21.9686 32.3486 22.0276L31.776 22.7241C32.046 23.199 32.2557 23.7057 32.4002 24.2326L33.2988 24.3199C33.3749 24.3274 33.4465 24.3594 33.5028 24.4112C33.559 24.4629 33.5968 24.5317 33.6105 24.6069C33.7784 25.5281 33.7784 26.472 33.6105 27.3932C33.5968 27.4684 33.5591 27.537 33.5029 27.5887C33.4468 27.6404 33.3753 27.6725 33.2994 27.68L32.4003 27.7688V27.7689ZM26 22.5081C24.0744 22.5081 22.5079 24.0747 22.5079 26.0002C22.5079 27.9258 24.0744 29.4924 26 29.4924C27.9255 29.4924 29.4921 27.9258 29.4921 26.0002C29.4921 24.0747 27.9255 22.5081 26 22.5081Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_283_2995"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
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
                      result="effect1_dropShadow_283_2995"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_283_2995"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-2 text-xl font-medium">Cost Efficiency</h6>
                <p className="text-sm font-medium">
                  Reduce overhead costs with contract staffing, paying only for
                  the skills and time you need.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_283_2984)">
                  <rect
                    x="5"
                    y="5"
                    width="42"
                    height="42"
                    rx="4"
                    fill="#FBFBFB"
                    shape-rendering="crispEdges"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.6896 23.9041C18.9533 23.9041 19.1678 23.6896 19.1678 23.426V22.0742C19.1678 21.0652 18.3469 20.2443 17.3379 20.2443H14.7205C13.7115 20.2443 12.8906 21.0652 12.8906 22.0742V23.426C12.8906 23.6896 13.1051 23.9041 13.3687 23.9041H18.6896ZM36.5877 19.4715C37.4654 19.4715 38.1797 18.7572 38.1797 17.8795C38.1797 17.0018 37.4654 16.2875 36.5877 16.2875C35.71 16.2875 34.9957 17.0018 34.9957 17.8795C34.9957 18.7572 35.71 19.4715 36.5877 19.4715ZM27.1957 15.783L27.5051 17.0439L26.4012 16.3602C26.3443 16.325 26.2729 16.325 26.216 16.3602L25.1121 17.0439L25.4209 15.783C25.4367 15.718 25.4145 15.65 25.3635 15.6066L24.3721 14.7682L25.667 14.6727C25.7338 14.668 25.7918 14.6252 25.817 14.5637L26.308 13.3613L26.799 14.5637C26.8115 14.5939 26.8321 14.6201 26.8586 14.6394C26.8851 14.6586 26.9164 14.6701 26.949 14.6727L28.2439 14.7682L27.2525 15.6066C27.2021 15.65 27.1799 15.718 27.1957 15.783ZM33.927 23.9041H39.2484C39.5121 23.9041 39.7266 23.6896 39.7266 23.426V22.0742C39.7266 21.0652 38.9057 20.2443 37.8967 20.2443H35.2787C34.2697 20.2443 33.4488 21.0652 33.4488 22.0742V23.426C33.4488 23.6896 33.6633 23.9041 33.927 23.9041ZM29.9555 32.1031L30.7963 31.618L29.8465 29.9727C29.7135 30.0635 29.5764 30.1502 29.4357 30.2316C29.2945 30.3131 29.151 30.3881 29.0057 30.4578L29.9555 32.1031ZM31.4051 32.0779C31.5791 31.9771 31.773 31.9262 31.9705 31.9262C32.0701 31.9262 32.1709 31.9391 32.2699 31.966C32.5652 32.0451 32.8113 32.2332 32.9631 32.4957L34.6371 35.3955C34.9518 35.9398 34.7643 36.6389 34.2199 36.9535L32.8641 37.7363C32.6016 37.8875 32.2945 37.9279 31.9992 37.8488C31.7039 37.7697 31.4578 37.5816 31.3061 37.3191L29.632 34.4193C29.4803 34.1568 29.4404 33.8498 29.5195 33.5545C29.5986 33.2592 29.7867 33.0131 30.0492 32.8613L31.4051 32.0779ZM27.965 25.5588C29.4252 25.6543 30.5842 26.8725 30.5842 28.3561V28.3572C31.0863 27.7514 31.4572 27.0395 31.667 26.2561C32.0502 24.8258 31.8539 23.3316 31.1133 22.049C29.5846 19.4018 26.1873 18.4912 23.54 20.0199C22.2574 20.7605 21.3404 21.9559 20.9566 23.3861C20.5734 24.8164 20.7697 26.3105 21.5104 27.5932C21.665 27.8609 21.8402 28.1117 22.0324 28.3461C22.0377 26.8666 23.1943 25.6543 24.651 25.5588C24.1125 25.093 23.7709 24.4062 23.7709 23.6404C23.7709 22.2418 24.9088 21.1039 26.3074 21.1039C27.7061 21.1039 28.8439 22.2418 28.8439 23.6404C28.8451 24.4062 28.5035 25.093 27.965 25.5588ZM27.7799 26.2549C28.9383 26.2549 29.8811 27.1977 29.8811 28.3561V29.0633C29.632 29.2724 29.3654 29.4596 29.0842 29.6229C27.8016 30.3635 26.3074 30.5598 24.8771 30.1766C24.0768 29.9621 23.3508 29.5801 22.7361 29.0609V28.3561C22.7361 27.1977 23.6789 26.2549 24.8373 26.2549H27.7799ZM26.3086 21.807C27.3193 21.807 28.142 22.6297 28.142 23.6404C28.142 24.6518 27.3193 25.4738 26.3086 25.4738C25.2979 25.4738 24.4752 24.6512 24.4752 23.6404C24.4752 22.6297 25.2973 21.807 26.3086 21.807ZM16.0289 19.4715C16.9066 19.4715 17.6209 18.7572 17.6209 17.8795C17.6209 17.0018 16.9066 16.2875 16.0289 16.2875C15.1512 16.2875 14.4369 17.0018 14.4369 17.8795C14.4375 18.7572 15.1512 19.4715 16.0289 19.4715Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_283_2984"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
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
                      result="effect1_dropShadow_283_2984"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_283_2984"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-2 text-xl font-medium">
                  Quick Talent Acquisition
                </h6>
                <p className="text-sm font-medium">
                  Rapidly access specialized talent with our streamlined
                  recruitment process to meet urgent project needs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_283_3003)">
                  <rect
                    x="5"
                    y="5"
                    width="42"
                    height="42"
                    rx="4"
                    fill="#FBFBFB"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M21.4045 15.36C21.345 15.2988 21.3033 15.2226 21.284 15.1394C21.2646 15.0563 21.2683 14.9695 21.2946 14.8884C21.321 14.8072 21.369 14.7348 21.4335 14.6789C21.498 14.623 21.5765 14.5858 21.6605 14.5712L24.3249 14.11L25.5846 11.719C25.6244 11.6435 25.684 11.5803 25.7571 11.5362C25.8302 11.4921 25.9139 11.4688 25.9992 11.4688C26.0846 11.4687 26.1683 11.492 26.2413 11.5361C26.3144 11.5801 26.374 11.6433 26.4138 11.7188L27.6753 14.11L30.3399 14.5712C30.4239 14.5858 30.5024 14.623 30.5669 14.6789C30.6314 14.7348 30.6794 14.8072 30.7057 14.8884C30.7321 14.9695 30.7358 15.0563 30.7164 15.1394C30.6971 15.2225 30.6554 15.2987 30.5959 15.3599L28.711 17.2978L29.0966 19.9733C29.1088 20.0577 29.0977 20.1439 29.0645 20.2225C29.0313 20.3011 28.9772 20.3692 28.9082 20.4193C28.8391 20.4695 28.7577 20.4999 28.6727 20.5072C28.5877 20.5145 28.5023 20.4984 28.4257 20.4607L25.9993 19.2668L23.5746 20.4607C23.4981 20.4984 23.4127 20.5144 23.3276 20.5072C23.2426 20.4999 23.1611 20.4695 23.0921 20.4194C23.023 20.3692 22.969 20.3012 22.9358 20.2226C22.9026 20.1439 22.8914 20.0578 22.9036 19.9733L23.2892 17.2978L21.4045 15.36ZM13.8889 19.9734C13.8767 20.0579 13.8879 20.1441 13.9211 20.2227C13.9543 20.3013 14.0084 20.3694 14.0775 20.4195C14.1465 20.4696 14.228 20.5 14.313 20.5072C14.3981 20.5145 14.4835 20.4984 14.56 20.4607L16.2327 19.6367L17.9037 20.4606C17.9803 20.4983 18.0657 20.5145 18.1508 20.5072C18.2358 20.5 18.3173 20.4697 18.3863 20.4195C18.4554 20.3694 18.5095 20.3014 18.5427 20.2228C18.576 20.1441 18.5871 20.0579 18.575 19.9735L18.3096 18.1282L19.6104 16.7919C19.6699 16.7308 19.7116 16.6545 19.731 16.5714C19.7504 16.4883 19.7467 16.4015 19.7204 16.3203C19.6941 16.2391 19.6461 16.1667 19.5816 16.1108C19.5171 16.0549 19.4386 16.0176 19.3545 16.0031L17.5167 15.6849L16.6476 14.0366C16.6078 13.9612 16.5481 13.898 16.4751 13.854C16.4021 13.8099 16.3184 13.7866 16.2331 13.7865C16.1478 13.7865 16.0642 13.8098 15.9911 13.8538C15.9181 13.8978 15.8585 13.9609 15.8186 14.0363L14.9476 15.6849L13.1114 16.0031C13.0273 16.0177 12.9488 16.0549 12.8844 16.1107C12.8199 16.1666 12.7719 16.239 12.7456 16.3202C12.7192 16.4013 12.7155 16.4881 12.7348 16.5711C12.7542 16.6542 12.7958 16.7305 12.8553 16.7916L14.1543 18.1279L13.8889 19.9734ZM39.255 16.3203C39.2286 16.2391 39.1806 16.1667 39.1161 16.1108C39.0517 16.0549 38.9731 16.0176 38.889 16.0031L37.0513 15.6849L36.1822 14.0367C36.1424 13.9612 36.0828 13.8981 36.0097 13.854C35.9367 13.8099 35.853 13.7866 35.7677 13.7866C35.6824 13.7866 35.5988 13.8099 35.5258 13.8539C35.4527 13.8979 35.3931 13.961 35.3533 14.0364L34.4822 15.6849L32.6459 16.0031C32.5619 16.0177 32.4834 16.0549 32.419 16.1108C32.3545 16.1666 32.3065 16.239 32.2802 16.3202C32.2538 16.4013 32.2501 16.4881 32.2695 16.5712C32.2888 16.6542 32.3304 16.7305 32.3899 16.7916L33.689 18.1279L33.4235 19.9736C33.4114 20.0581 33.4225 20.1443 33.4557 20.2229C33.489 20.3015 33.543 20.3696 33.6121 20.4197C33.6812 20.4699 33.7626 20.5002 33.8477 20.5075C33.9327 20.5147 34.0181 20.4986 34.0947 20.4609L35.7678 19.6367L37.4407 20.4608C37.5173 20.4985 37.6027 20.5145 37.6878 20.5072C37.7728 20.4999 37.8543 20.4695 37.9233 20.4193C37.9923 20.3691 38.0464 20.301 38.0795 20.2224C38.1127 20.1437 38.1238 20.0575 38.1116 19.973L37.8447 18.1279L39.145 16.792C39.2046 16.7308 39.2463 16.6546 39.2656 16.5714C39.285 16.4883 39.2813 16.4015 39.255 16.3203ZM20.7335 31.4459C20.4608 31.3558 20.1756 31.3099 19.8884 31.3099H15.5701C14.1861 31.3099 13.0601 32.3405 13.0601 33.6072V36.916H18.0347V35.4907C18.0349 33.7168 19.1367 32.18 20.7334 31.4459L20.7335 31.4459ZM17.7293 24.8379C17.1167 24.8388 16.5296 25.0827 16.0966 25.516C15.6637 25.9492 15.4203 26.5366 15.4198 27.1491C15.4198 28.3953 16.0468 30.3724 17.7293 30.3724C19.4117 30.3724 20.0387 28.3953 20.0387 27.1491C20.0383 26.5366 19.7948 25.9492 19.3619 25.516C18.9289 25.0827 18.3418 24.8388 17.7293 24.8379ZM29.149 31.9238H22.8497C20.7117 31.9238 18.9724 33.5239 18.9724 35.4907V40.5312H21.5159V37.4736C21.5159 37.3493 21.5653 37.23 21.6532 37.1421C21.7411 37.0542 21.8603 37.0048 21.9846 37.0048C22.1089 37.0048 22.2282 37.0542 22.3161 37.1421C22.404 37.23 22.4534 37.3493 22.4534 37.4736V40.5312H29.547V37.4736C29.547 37.3493 29.5964 37.23 29.6843 37.1421C29.7722 37.0542 29.8915 37.0048 30.0158 37.0048C30.1401 37.0048 30.2593 37.0542 30.3472 37.1421C30.4351 37.23 30.4845 37.3493 30.4845 37.4736V40.5312H33.0263V35.4907C33.0263 33.5239 31.287 31.9238 29.149 31.9238ZM22.4777 26.9566C22.5983 27.8269 22.8883 28.6818 23.3033 29.3555C23.9698 30.4377 24.8769 30.9863 25.9994 30.9863C27.3704 30.9863 28.2075 30.1241 28.6679 29.4007C29.0755 28.7605 29.3657 27.9476 29.5004 27.1068C28.0637 26.9469 26.7524 26.6354 25.0723 25.3856L22.4777 26.9566ZM36.4285 31.3101H32.1102C31.823 31.3101 31.5377 31.356 31.2651 31.4461C32.8618 32.1802 33.9636 33.7172 33.9636 35.4909V36.916H38.9401V33.6072C38.9403 32.3404 37.8135 31.3099 36.4285 31.3099V31.3101ZM29.5855 26.0696C29.586 25.1334 29.2204 24.2341 28.5667 23.564C27.913 22.8939 27.0231 22.506 26.0872 22.4834C25.1514 22.4607 24.2437 22.805 23.5583 23.4427C22.873 24.0804 22.4642 24.9608 22.4194 25.8959L24.8602 24.418C24.9416 24.3687 25.0361 24.3453 25.1311 24.3511C25.2261 24.3568 25.3172 24.3913 25.3921 24.45C27.0056 25.7148 28.1973 26.0168 29.5836 26.1727C29.5842 26.1384 29.5855 26.1039 29.5855 26.0696ZM34.2694 30.3724C35.9532 30.3724 36.5806 28.3953 36.5806 27.1491C36.5822 26.8447 36.5235 26.543 36.4081 26.2614C36.2927 25.9797 36.1228 25.7237 35.9081 25.5079C35.6934 25.2921 35.4382 25.1209 35.1571 25.0041C34.8761 24.8872 34.5747 24.8271 34.2703 24.8271C33.9659 24.8271 33.6645 24.8872 33.3835 25.0041C33.1024 25.1209 32.8472 25.2921 32.6325 25.5079C32.4178 25.7237 32.2479 25.9797 32.1325 26.2614C32.0171 26.543 31.9584 26.8447 31.96 27.1491C31.96 28.3953 32.587 30.3724 34.2694 30.3724Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_283_3003"
                    x="0"
                    y="0"
                    width="52"
                    height="52"
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
                      result="effect1_dropShadow_283_3003"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_283_3003"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-2 text-xl font-medium">
                  Specialized Expertise
                </h6>
                <p className="text-sm font-medium">
                  Access specialized professionals tailored to your industry
                  needs for efficient project execution.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link href="/hire-worker/request-talent">
              <Button>Request Worker</Button>
            </Link>
            <button className="flex items-center rounded-lg border-2 border-primary py-1 pr-3 text-sm font-medium text-primary">
              <svg
                width="36"
                height="36"
                viewBox="0 0 72 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1197_3779)">
                  <circle cx="36" cy="36" r="18" fill="#F90945" />
                  <circle
                    cx="36"
                    cy="36"
                    r="16.5"
                    stroke="#FDFDFD"
                    strokeWidth="3"
                  />
                </g>
                <path
                  d="M43.2012 35.9999L32.4012 42.2353L32.4012 29.7645L43.2012 35.9999Z"
                  fill="#FDFDFD"
                />
                <defs>
                  <filter
                    id="filter0_d_1197_3779"
                    x="0"
                    y="0"
                    width="72"
                    height="72"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="9" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1197_3779"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1197_3779"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              Watch Video
            </button>
          </div>
        </FadeInLeftWithSlowBounce>
        <FadeInRightWithSlowBounce className="relative min-h-[330px] w-full basis-full lg:min-h-[584px] lg:basis-1/2">
          <Image
            className="object-contain object-right"
            src="/images/contract-key-benefits.png"
            fill
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default KeyBenefits;
