import Image from "next/image";

const KeyBenefits = () => {
  return (
    <section className="py-[50px]">
      {/* container row */}
      <div className="container flex min-h-[600px] flex-col items-center justify-between gap-20 lg:flex-row">
        {/* column */}
        <div className="flex w-full basis-full justify-between gap-5 lg:basis-1/2">
          <div className="basis-1/2">
            <div className="relative min-h-[235px] w-full lg:min-h-[400px]">
              <Image
                className="h-full w-full"
                src="/images/work-permit.png"
                fill
              />
            </div>
            <button className="text-md mt-6 flex w-full items-center justify-start rounded-lg border-2 border-primary px-4 font-medium md:justify-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1134_2759)">
                  <circle cx="60" cy="60" r="30" fill="#F90945" />
                  <circle
                    cx="60"
                    cy="60"
                    r="27.5"
                    stroke="#FDFDFD"
                    stroke-width="5"
                  />
                </g>
                <path d="M72 60L54 70.3923L54 49.6077L72 60Z" fill="#FDFDFD" />
                <defs>
                  <filter
                    id="filter0_d_1134_2759"
                    x="0"
                    y="0"
                    width="120"
                    height="120"
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
                    <feGaussianBlur stdDeviation="15" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1134_2759"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1134_2759"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              Watch Video
            </button>
          </div>
          <div className="basis-1/2">
            <div className="relative min-h-full w-full">
              <Image
                className="h-full w-full"
                src="/images/work-permit-2.png"
                fill
              />
            </div>
          </div>
        </div>
        {/* column */}
        <div className="basis-full space-y-6 lg:basis-1/2">
          <div className="flex items-center justify-center lg:justify-start">
            <span className="rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-center text-4xl font-semibold lg:text-left lg:text-5xl">
            Key Benefits of Our  Work Permit Assistance
          </h2>
          <p className="text-center text-sm font-medium lg:text-left">
            Expert guidance, personalized support, and efficient processing
            ensure timely approval, reducing stress and delays while navigating
            complex regulations to secure work permits smoothly and
            successfully.
          </p>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2">
            <div className="flex items-center gap-2">
              <svg
                className="basis-[70px]"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1141_2559)">
                  <rect
                    x="5"
                    y="5"
                    width="45"
                    height="45"
                    rx="4"
                    fill="#F90945"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M22.8866 23.6907H25.3349V30.5288H22.8866V23.6907ZM27.7749 30.5288H30.2232V20.8527H27.7749V30.5288ZM32.6633 30.5288H35.1117V18.0856H32.6633V30.5288ZM37.5517 30.5288H40V15.3895H37.5517V30.5288ZM34.1149 35.2998L33.2871 32.8852C33.2757 32.8519 33.271 32.816 33.2733 32.7803C33.2757 32.7445 33.285 32.7099 33.3006 32.679C33.3395 32.602 33.3775 32.5244 33.4145 32.4461H30.9018C29.624 34.2581 27.7448 35.2948 25.7303 35.2948C22.0406 35.2948 19.0388 31.798 19.0388 27.5C19.0388 25.4374 19.7237 23.4931 20.9674 22.0253C22.1954 20.576 23.8287 19.7548 25.5728 19.7079L28.1184 17.6564C28.0585 17.6366 27.9988 17.6177 27.9395 17.5997C27.9097 17.5907 27.8821 17.5739 27.8588 17.5505C27.8355 17.5272 27.8171 17.498 27.805 17.4651L26.925 15.0775C26.5283 15.0262 26.1296 15.0003 25.7305 15C25.3361 15 24.9348 15.0261 24.5358 15.0775L23.6557 17.4651C23.6436 17.498 23.6252 17.5272 23.6019 17.5505C23.5786 17.5739 23.551 17.5907 23.5212 17.5997C22.7363 17.8378 21.9835 18.2017 21.2845 18.6809C21.258 18.6991 21.2283 18.7099 21.1976 18.7126C21.1669 18.7153 21.1361 18.7098 21.1076 18.6966L19.0345 17.7325C18.4107 18.3135 17.8441 18.9735 17.3453 19.7002L18.1729 22.1146C18.1844 22.1479 18.1891 22.1838 18.1867 22.2195C18.1844 22.2553 18.1751 22.2899 18.1595 22.3208C17.7482 23.1352 17.436 24.0122 17.2319 24.9266C17.2242 24.9613 17.2097 24.9935 17.1897 25.0207C17.1697 25.0478 17.1445 25.0693 17.1163 25.0834L15.0664 26.1085C15.0223 26.5707 15.0001 27.0353 15 27.5004C15 27.9618 15.0223 28.4292 15.0664 28.8915L17.1161 29.9165C17.1444 29.9307 17.1695 29.9522 17.1895 29.9793C17.2096 30.0065 17.224 30.0387 17.2317 30.0734C17.4359 30.9878 17.7481 31.8648 18.1594 32.6792C18.175 32.7101 18.1843 32.7447 18.1866 32.7804C18.1889 32.8161 18.1842 32.852 18.1728 32.8853L17.3452 35.2998C17.844 36.0266 18.4105 36.6866 19.0344 37.2676L21.1074 36.3035C21.136 36.2902 21.1668 36.2847 21.1974 36.2874C21.2281 36.2901 21.2578 36.3009 21.2844 36.3191C21.9832 36.7984 22.7359 37.162 23.5209 37.3993C23.5507 37.4083 23.5783 37.4251 23.6016 37.4484C23.625 37.4718 23.6434 37.501 23.6556 37.534L24.5356 39.9225C24.9324 39.9738 25.3312 39.9997 25.7304 40C26.1241 40 26.5254 39.9739 26.9248 39.9225L27.8049 37.534C27.817 37.501 27.8355 37.4718 27.8588 37.4484C27.8821 37.4251 27.9098 37.4083 27.9396 37.3993C28.7245 37.1619 29.4773 36.7983 30.1761 36.3191C30.2027 36.3009 30.2324 36.2901 30.2631 36.2874C30.2937 36.2847 30.3245 36.2902 30.3531 36.3035L32.4256 37.2676C33.0496 36.6866 33.6162 36.0267 34.1149 35.2998Z"
                    fill="#FBFBFB"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1141_2559"
                    x="0"
                    y="0"
                    width="55"
                    height="55"
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
                      result="effect1_dropShadow_1141_2559"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1141_2559"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Streamlined Process</h6>
                <p className="text-sm font-medium">
                  Optimized workflow designed to minimize delays, reduce
                  complexity, and ensure fast, efficient outcomes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="basis-[70px]"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1141_2559)">
                  <rect
                    x="5"
                    y="5"
                    width="45"
                    height="45"
                    rx="4"
                    fill="#F90945"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M22.8866 23.6907H25.3349V30.5288H22.8866V23.6907ZM27.7749 30.5288H30.2232V20.8527H27.7749V30.5288ZM32.6633 30.5288H35.1117V18.0856H32.6633V30.5288ZM37.5517 30.5288H40V15.3895H37.5517V30.5288ZM34.1149 35.2998L33.2871 32.8852C33.2757 32.8519 33.271 32.816 33.2733 32.7803C33.2757 32.7445 33.285 32.7099 33.3006 32.679C33.3395 32.602 33.3775 32.5244 33.4145 32.4461H30.9018C29.624 34.2581 27.7448 35.2948 25.7303 35.2948C22.0406 35.2948 19.0388 31.798 19.0388 27.5C19.0388 25.4374 19.7237 23.4931 20.9674 22.0253C22.1954 20.576 23.8287 19.7548 25.5728 19.7079L28.1184 17.6564C28.0585 17.6366 27.9988 17.6177 27.9395 17.5997C27.9097 17.5907 27.8821 17.5739 27.8588 17.5505C27.8355 17.5272 27.8171 17.498 27.805 17.4651L26.925 15.0775C26.5283 15.0262 26.1296 15.0003 25.7305 15C25.3361 15 24.9348 15.0261 24.5358 15.0775L23.6557 17.4651C23.6436 17.498 23.6252 17.5272 23.6019 17.5505C23.5786 17.5739 23.551 17.5907 23.5212 17.5997C22.7363 17.8378 21.9835 18.2017 21.2845 18.6809C21.258 18.6991 21.2283 18.7099 21.1976 18.7126C21.1669 18.7153 21.1361 18.7098 21.1076 18.6966L19.0345 17.7325C18.4107 18.3135 17.8441 18.9735 17.3453 19.7002L18.1729 22.1146C18.1844 22.1479 18.1891 22.1838 18.1867 22.2195C18.1844 22.2553 18.1751 22.2899 18.1595 22.3208C17.7482 23.1352 17.436 24.0122 17.2319 24.9266C17.2242 24.9613 17.2097 24.9935 17.1897 25.0207C17.1697 25.0478 17.1445 25.0693 17.1163 25.0834L15.0664 26.1085C15.0223 26.5707 15.0001 27.0353 15 27.5004C15 27.9618 15.0223 28.4292 15.0664 28.8915L17.1161 29.9165C17.1444 29.9307 17.1695 29.9522 17.1895 29.9793C17.2096 30.0065 17.224 30.0387 17.2317 30.0734C17.4359 30.9878 17.7481 31.8648 18.1594 32.6792C18.175 32.7101 18.1843 32.7447 18.1866 32.7804C18.1889 32.8161 18.1842 32.852 18.1728 32.8853L17.3452 35.2998C17.844 36.0266 18.4105 36.6866 19.0344 37.2676L21.1074 36.3035C21.136 36.2902 21.1668 36.2847 21.1974 36.2874C21.2281 36.2901 21.2578 36.3009 21.2844 36.3191C21.9832 36.7984 22.7359 37.162 23.5209 37.3993C23.5507 37.4083 23.5783 37.4251 23.6016 37.4484C23.625 37.4718 23.6434 37.501 23.6556 37.534L24.5356 39.9225C24.9324 39.9738 25.3312 39.9997 25.7304 40C26.1241 40 26.5254 39.9739 26.9248 39.9225L27.8049 37.534C27.817 37.501 27.8355 37.4718 27.8588 37.4484C27.8821 37.4251 27.9098 37.4083 27.9396 37.3993C28.7245 37.1619 29.4773 36.7983 30.1761 36.3191C30.2027 36.3009 30.2324 36.2901 30.2631 36.2874C30.2937 36.2847 30.3245 36.2902 30.3531 36.3035L32.4256 37.2676C33.0496 36.6866 33.6162 36.0267 34.1149 35.2998Z"
                    fill="#FBFBFB"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1141_2559"
                    x="0"
                    y="0"
                    width="55"
                    height="55"
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
                      result="effect1_dropShadow_1141_2559"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1141_2559"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Streamlined Process</h6>
                <p className="text-sm font-medium">
                  Optimized workflow designed to minimize delays, reduce
                  complexity, and ensure fast, efficient outcomes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="basis-[70px]"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1141_2559)">
                  <rect
                    x="5"
                    y="5"
                    width="45"
                    height="45"
                    rx="4"
                    fill="#F90945"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M22.8866 23.6907H25.3349V30.5288H22.8866V23.6907ZM27.7749 30.5288H30.2232V20.8527H27.7749V30.5288ZM32.6633 30.5288H35.1117V18.0856H32.6633V30.5288ZM37.5517 30.5288H40V15.3895H37.5517V30.5288ZM34.1149 35.2998L33.2871 32.8852C33.2757 32.8519 33.271 32.816 33.2733 32.7803C33.2757 32.7445 33.285 32.7099 33.3006 32.679C33.3395 32.602 33.3775 32.5244 33.4145 32.4461H30.9018C29.624 34.2581 27.7448 35.2948 25.7303 35.2948C22.0406 35.2948 19.0388 31.798 19.0388 27.5C19.0388 25.4374 19.7237 23.4931 20.9674 22.0253C22.1954 20.576 23.8287 19.7548 25.5728 19.7079L28.1184 17.6564C28.0585 17.6366 27.9988 17.6177 27.9395 17.5997C27.9097 17.5907 27.8821 17.5739 27.8588 17.5505C27.8355 17.5272 27.8171 17.498 27.805 17.4651L26.925 15.0775C26.5283 15.0262 26.1296 15.0003 25.7305 15C25.3361 15 24.9348 15.0261 24.5358 15.0775L23.6557 17.4651C23.6436 17.498 23.6252 17.5272 23.6019 17.5505C23.5786 17.5739 23.551 17.5907 23.5212 17.5997C22.7363 17.8378 21.9835 18.2017 21.2845 18.6809C21.258 18.6991 21.2283 18.7099 21.1976 18.7126C21.1669 18.7153 21.1361 18.7098 21.1076 18.6966L19.0345 17.7325C18.4107 18.3135 17.8441 18.9735 17.3453 19.7002L18.1729 22.1146C18.1844 22.1479 18.1891 22.1838 18.1867 22.2195C18.1844 22.2553 18.1751 22.2899 18.1595 22.3208C17.7482 23.1352 17.436 24.0122 17.2319 24.9266C17.2242 24.9613 17.2097 24.9935 17.1897 25.0207C17.1697 25.0478 17.1445 25.0693 17.1163 25.0834L15.0664 26.1085C15.0223 26.5707 15.0001 27.0353 15 27.5004C15 27.9618 15.0223 28.4292 15.0664 28.8915L17.1161 29.9165C17.1444 29.9307 17.1695 29.9522 17.1895 29.9793C17.2096 30.0065 17.224 30.0387 17.2317 30.0734C17.4359 30.9878 17.7481 31.8648 18.1594 32.6792C18.175 32.7101 18.1843 32.7447 18.1866 32.7804C18.1889 32.8161 18.1842 32.852 18.1728 32.8853L17.3452 35.2998C17.844 36.0266 18.4105 36.6866 19.0344 37.2676L21.1074 36.3035C21.136 36.2902 21.1668 36.2847 21.1974 36.2874C21.2281 36.2901 21.2578 36.3009 21.2844 36.3191C21.9832 36.7984 22.7359 37.162 23.5209 37.3993C23.5507 37.4083 23.5783 37.4251 23.6016 37.4484C23.625 37.4718 23.6434 37.501 23.6556 37.534L24.5356 39.9225C24.9324 39.9738 25.3312 39.9997 25.7304 40C26.1241 40 26.5254 39.9739 26.9248 39.9225L27.8049 37.534C27.817 37.501 27.8355 37.4718 27.8588 37.4484C27.8821 37.4251 27.9098 37.4083 27.9396 37.3993C28.7245 37.1619 29.4773 36.7983 30.1761 36.3191C30.2027 36.3009 30.2324 36.2901 30.2631 36.2874C30.2937 36.2847 30.3245 36.2902 30.3531 36.3035L32.4256 37.2676C33.0496 36.6866 33.6162 36.0267 34.1149 35.2998Z"
                    fill="#FBFBFB"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1141_2559"
                    x="0"
                    y="0"
                    width="55"
                    height="55"
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
                      result="effect1_dropShadow_1141_2559"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1141_2559"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Streamlined Process</h6>
                <p className="text-sm font-medium">
                  Optimized workflow designed to minimize delays, reduce
                  complexity, and ensure fast, efficient outcomes.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="basis-[70px]"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1141_2559)">
                  <rect
                    x="5"
                    y="5"
                    width="45"
                    height="45"
                    rx="4"
                    fill="#F90945"
                    shape-rendering="crispEdges"
                  />
                  <path
                    d="M22.8866 23.6907H25.3349V30.5288H22.8866V23.6907ZM27.7749 30.5288H30.2232V20.8527H27.7749V30.5288ZM32.6633 30.5288H35.1117V18.0856H32.6633V30.5288ZM37.5517 30.5288H40V15.3895H37.5517V30.5288ZM34.1149 35.2998L33.2871 32.8852C33.2757 32.8519 33.271 32.816 33.2733 32.7803C33.2757 32.7445 33.285 32.7099 33.3006 32.679C33.3395 32.602 33.3775 32.5244 33.4145 32.4461H30.9018C29.624 34.2581 27.7448 35.2948 25.7303 35.2948C22.0406 35.2948 19.0388 31.798 19.0388 27.5C19.0388 25.4374 19.7237 23.4931 20.9674 22.0253C22.1954 20.576 23.8287 19.7548 25.5728 19.7079L28.1184 17.6564C28.0585 17.6366 27.9988 17.6177 27.9395 17.5997C27.9097 17.5907 27.8821 17.5739 27.8588 17.5505C27.8355 17.5272 27.8171 17.498 27.805 17.4651L26.925 15.0775C26.5283 15.0262 26.1296 15.0003 25.7305 15C25.3361 15 24.9348 15.0261 24.5358 15.0775L23.6557 17.4651C23.6436 17.498 23.6252 17.5272 23.6019 17.5505C23.5786 17.5739 23.551 17.5907 23.5212 17.5997C22.7363 17.8378 21.9835 18.2017 21.2845 18.6809C21.258 18.6991 21.2283 18.7099 21.1976 18.7126C21.1669 18.7153 21.1361 18.7098 21.1076 18.6966L19.0345 17.7325C18.4107 18.3135 17.8441 18.9735 17.3453 19.7002L18.1729 22.1146C18.1844 22.1479 18.1891 22.1838 18.1867 22.2195C18.1844 22.2553 18.1751 22.2899 18.1595 22.3208C17.7482 23.1352 17.436 24.0122 17.2319 24.9266C17.2242 24.9613 17.2097 24.9935 17.1897 25.0207C17.1697 25.0478 17.1445 25.0693 17.1163 25.0834L15.0664 26.1085C15.0223 26.5707 15.0001 27.0353 15 27.5004C15 27.9618 15.0223 28.4292 15.0664 28.8915L17.1161 29.9165C17.1444 29.9307 17.1695 29.9522 17.1895 29.9793C17.2096 30.0065 17.224 30.0387 17.2317 30.0734C17.4359 30.9878 17.7481 31.8648 18.1594 32.6792C18.175 32.7101 18.1843 32.7447 18.1866 32.7804C18.1889 32.8161 18.1842 32.852 18.1728 32.8853L17.3452 35.2998C17.844 36.0266 18.4105 36.6866 19.0344 37.2676L21.1074 36.3035C21.136 36.2902 21.1668 36.2847 21.1974 36.2874C21.2281 36.2901 21.2578 36.3009 21.2844 36.3191C21.9832 36.7984 22.7359 37.162 23.5209 37.3993C23.5507 37.4083 23.5783 37.4251 23.6016 37.4484C23.625 37.4718 23.6434 37.501 23.6556 37.534L24.5356 39.9225C24.9324 39.9738 25.3312 39.9997 25.7304 40C26.1241 40 26.5254 39.9739 26.9248 39.9225L27.8049 37.534C27.817 37.501 27.8355 37.4718 27.8588 37.4484C27.8821 37.4251 27.9098 37.4083 27.9396 37.3993C28.7245 37.1619 29.4773 36.7983 30.1761 36.3191C30.2027 36.3009 30.2324 36.2901 30.2631 36.2874C30.2937 36.2847 30.3245 36.2902 30.3531 36.3035L32.4256 37.2676C33.0496 36.6866 33.6162 36.0267 34.1149 35.2998Z"
                    fill="#FBFBFB"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1141_2559"
                    x="0"
                    y="0"
                    width="55"
                    height="55"
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
                      result="effect1_dropShadow_1141_2559"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1141_2559"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              <div className="basis-full space-y-2">
                <h6 className="text-xl font-medium">Streamlined Process</h6>
                <p className="text-sm font-medium">
                  Optimized workflow designed to minimize delays, reduce
                  complexity, and ensure fast, efficient outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
