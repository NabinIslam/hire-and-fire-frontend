import Image from "next/image";
import BenefitBoxLeft from "./BenefitBoxLeft";
import BenefitBoxRight from "./BenefitBoxRight";

const benefitsData = [
  {
    title: "Long-term Stability",
    description:
      "Discover dedicated professionals who align with your company's vision, ensuring long-term growth and mutual success.",
    icon: "/icons/stability-icon.svg", // Update with your actual icon path
  },
  {
    title: "Reduced Turnover",
    description:
      "Build strong, loyal teams committed to your company's goals, fostering long-term retention and lasting organizational success.",
    icon: "/icons/turnover-icon.svg",
  },
  {
    title: "Cultural Fit",
    description:
      "Ensure candidates align with your company's core values, fostering a harmonious work culture and driving long-term success.",
    icon: "/icons/cultural-fit-icon.svg",
  },
  {
    title: "Enhanced Productivity",
    description:
      "Hiring the right individuals improves workplace performance, boosts efficiency, and drives higher productivity and success.",
    icon: "/icons/productivity-icon.svg",
  },
  {
    title: "Improved Employee Morale",
    description:
      "Building a team with aligned values creates a supportive, positive work environment that boosts collaboration.",
    icon: "/icons/morale-icon.svg",
  },
  {
    title: "Cost Efficiency",
    description:
      "Reducing turnover and improving cultural fit lowers recruitment and training costs, saving your company resources in the long run.",
    icon: "/icons/cost-efficiency-icon.svg",
  },
];

const KeyBenefits = () => {
  return (
    <section className="py-[50px]">
      <div className="container min-h-[550px]">
        <div className="mx-auto flex h-[56px] w-[195px] items-center justify-center rounded-full border-2 border-primary text-2xl font-medium text-primary">
          Key Benefits
        </div>
        <div className="mx-auto mb-16 mt-5 max-w-[607px]">
          <h2 className="text-center text-5xl font-semibold">
            Key Benefits of Our  Permanent Recruitment
          </h2>
        </div>
        <div className="flex min-h-[600px] grid-cols-3 flex-col items-center justify-between gap-8 xl:flex-row">
          <div className="flex basis-full flex-col justify-between gap-6 xl:basis-[30%]">
            <BenefitBoxLeft
              icon="/images/benefit/1.png"
              title="Long-term Stability"
              description="Discover dedicated professionals who align with your company's vision, ensuring long-term growth and mutual success."
            />
            <BenefitBoxLeft
              icon="/images/benefit/2.png"
              title="Reduced Turnover"
              description="Build strong, loyal teams committed to your company's goals, fostering long-term retention and lasting organizational success."
            />
            <BenefitBoxLeft
              icon="/images/benefit/1.png"
              title="Cultural Fit"
              description="Ensure candidates align with your company’s core values, fostering a harmonious work culture and driving long-term success."
            />
          </div>
          <svg
            width="616"
            height="408"
            viewBox="0 0 616 408"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_867_2715)">
              <circle cx="308" cy="204" r="150" fill="#FBFBFB" />
              <circle
                cx="308"
                cy="204"
                r="149"
                stroke="#004785"
                stroke-width="2"
              />
            </g>
            <g filter="url(#filter1_d_867_2715)">
              <path
                d="M434.111 281.46C447.721 259.302 455.252 233.95 455.947 207.955C456.642 181.961 450.476 156.242 438.07 133.389L417.378 144.622C427.811 163.84 432.996 185.467 432.412 207.326C431.827 229.185 425.494 250.504 414.049 269.137L434.111 281.46Z"
                fill="#004785"
              />
            </g>
            <g filter="url(#filter2_d_867_2715)">
              <path
                d="M233.764 332.035C256.259 345.078 281.795 351.964 307.798 352C333.802 352.035 359.356 345.219 381.887 332.237L370.133 311.837C351.186 322.754 329.697 328.486 307.83 328.456C285.963 328.426 264.49 322.635 245.573 311.667L233.764 332.035Z"
                fill="#004785"
              />
            </g>
            <g filter="url(#filter3_d_867_2715)">
              <path
                d="M383.555 76.7385C361.195 63.4635 335.732 56.3141 309.73 56.0101C283.728 55.7061 258.105 62.2583 235.441 75.0069L246.984 95.5272C266.043 84.8067 287.589 79.2968 309.455 79.5525C331.32 79.8081 352.732 85.8202 371.535 96.9833L383.555 76.7385Z"
                fill="#004785"
              />
            </g>
            <g filter="url(#filter4_d_867_2715)">
              <path
                d="M180.291 129.205C167.149 151.643 160.152 177.148 160.002 203.152C159.853 229.155 166.558 254.738 179.441 277.326L199.893 265.661C189.059 246.667 183.421 225.153 183.546 203.287C183.671 181.42 189.556 159.972 200.607 141.103L180.291 129.205Z"
                fill="#004785"
              />
            </g>
            <g filter="url(#filter5_d_867_2715)">
              <circle cx="308" cy="204" r="125" fill="#FBFBFB" />
            </g>
            <path
              d="M211.814 209.72L211.59 204.792L223.334 192.6H228.006L218.246 202.968L215.942 205.496L211.814 209.72ZM208.102 215V192.6H212.262V215H208.102ZM223.718 215L215.142 204.792L217.894 201.752L228.582 215H223.718ZM238.312 215.224C236.414 215.224 234.75 214.851 233.32 214.104C231.912 213.336 230.814 212.291 230.024 210.968C229.256 209.645 228.872 208.141 228.872 206.456C228.872 204.749 229.246 203.245 229.992 201.944C230.76 200.621 231.806 199.587 233.128 198.84C234.472 198.093 235.998 197.72 237.704 197.72C239.368 197.72 240.851 198.083 242.152 198.808C243.454 199.533 244.478 200.557 245.224 201.88C245.971 203.203 246.344 204.76 246.344 206.552C246.344 206.723 246.334 206.915 246.312 207.128C246.312 207.341 246.302 207.544 246.28 207.736H232.04V205.08H244.168L242.6 205.912C242.622 204.931 242.419 204.067 241.992 203.32C241.566 202.573 240.979 201.987 240.232 201.56C239.507 201.133 238.664 200.92 237.704 200.92C236.723 200.92 235.859 201.133 235.112 201.56C234.387 201.987 233.811 202.584 233.384 203.352C232.979 204.099 232.776 204.984 232.776 206.008V206.648C232.776 207.672 233.011 208.579 233.48 209.368C233.95 210.157 234.611 210.765 235.464 211.192C236.318 211.619 237.299 211.832 238.408 211.832C239.368 211.832 240.232 211.683 241 211.384C241.768 211.085 242.451 210.616 243.048 209.976L245.192 212.44C244.424 213.336 243.454 214.029 242.28 214.52C241.128 214.989 239.806 215.224 238.312 215.224ZM251.282 221.432C250.45 221.432 249.618 221.293 248.786 221.016C247.954 220.739 247.261 220.355 246.706 219.864L248.306 216.92C248.711 217.283 249.17 217.571 249.682 217.784C250.194 217.997 250.717 218.104 251.25 218.104C251.975 218.104 252.562 217.923 253.01 217.56C253.458 217.197 253.874 216.589 254.258 215.736L255.25 213.496L255.57 213.016L262.034 197.912H265.874L257.874 216.376C257.341 217.656 256.743 218.669 256.082 219.416C255.442 220.163 254.717 220.685 253.906 220.984C253.117 221.283 252.242 221.432 251.282 221.432ZM254.802 215.608L247.09 197.912H251.25L257.522 212.664L254.802 215.608ZM277.602 215V192.6H288.098C290.786 192.6 292.834 193.133 294.242 194.2C295.65 195.245 296.354 196.653 296.354 198.424C296.354 199.619 296.076 200.643 295.522 201.496C294.967 202.328 294.22 202.979 293.282 203.448C292.364 203.896 291.362 204.12 290.274 204.12L290.85 202.968C292.108 202.968 293.239 203.203 294.242 203.672C295.244 204.12 296.034 204.781 296.61 205.656C297.207 206.531 297.506 207.619 297.506 208.92C297.506 210.84 296.77 212.333 295.298 213.4C293.826 214.467 291.639 215 288.738 215H277.602ZM281.762 211.736H288.482C290.039 211.736 291.234 211.48 292.066 210.968C292.898 210.456 293.314 209.635 293.314 208.504C293.314 207.395 292.898 206.584 292.066 206.072C291.234 205.539 290.039 205.272 288.482 205.272H281.442V202.04H287.65C289.1 202.04 290.21 201.784 290.978 201.272C291.767 200.76 292.162 199.992 292.162 198.968C292.162 197.923 291.767 197.144 290.978 196.632C290.21 196.12 289.1 195.864 287.65 195.864H281.762V211.736ZM309.594 215.224C307.695 215.224 306.031 214.851 304.602 214.104C303.194 213.336 302.095 212.291 301.306 210.968C300.538 209.645 300.154 208.141 300.154 206.456C300.154 204.749 300.527 203.245 301.274 201.944C302.042 200.621 303.087 199.587 304.41 198.84C305.754 198.093 307.279 197.72 308.986 197.72C310.65 197.72 312.132 198.083 313.434 198.808C314.735 199.533 315.759 200.557 316.506 201.88C317.252 203.203 317.626 204.76 317.626 206.552C317.626 206.723 317.615 206.915 317.594 207.128C317.594 207.341 317.583 207.544 317.562 207.736H303.322V205.08H315.45L313.882 205.912C313.903 204.931 313.7 204.067 313.274 203.32C312.847 202.573 312.26 201.987 311.514 201.56C310.788 201.133 309.946 200.92 308.986 200.92C308.004 200.92 307.14 201.133 306.394 201.56C305.668 201.987 305.092 202.584 304.666 203.352C304.26 204.099 304.058 204.984 304.058 206.008V206.648C304.058 207.672 304.292 208.579 304.762 209.368C305.231 210.157 305.892 210.765 306.746 211.192C307.599 211.619 308.58 211.832 309.69 211.832C310.65 211.832 311.514 211.683 312.282 211.384C313.05 211.085 313.732 210.616 314.33 209.976L316.474 212.44C315.706 213.336 314.735 214.029 313.562 214.52C312.41 214.989 311.087 215.224 309.594 215.224ZM331.164 197.72C332.529 197.72 333.745 197.987 334.812 198.52C335.9 199.053 336.753 199.875 337.372 200.984C337.99 202.072 338.3 203.48 338.3 205.208V215H334.3V205.72C334.3 204.205 333.937 203.075 333.212 202.328C332.508 201.581 331.516 201.208 330.236 201.208C329.297 201.208 328.465 201.4 327.74 201.784C327.014 202.168 326.449 202.744 326.044 203.512C325.66 204.259 325.468 205.208 325.468 206.36V215H321.468V197.912H325.276V202.52L324.604 201.112C325.201 200.024 326.065 199.192 327.196 198.616C328.348 198.019 329.67 197.72 331.164 197.72ZM351.437 215.224C349.539 215.224 347.875 214.851 346.445 214.104C345.037 213.336 343.939 212.291 343.149 210.968C342.381 209.645 341.997 208.141 341.997 206.456C341.997 204.749 342.371 203.245 343.117 201.944C343.885 200.621 344.931 199.587 346.253 198.84C347.597 198.093 349.123 197.72 350.829 197.72C352.493 197.72 353.976 198.083 355.277 198.808C356.579 199.533 357.603 200.557 358.349 201.88C359.096 203.203 359.469 204.76 359.469 206.552C359.469 206.723 359.459 206.915 359.437 207.128C359.437 207.341 359.427 207.544 359.405 207.736H345.165V205.08H357.293L355.725 205.912C355.747 204.931 355.544 204.067 355.117 203.32C354.691 202.573 354.104 201.987 353.357 201.56C352.632 201.133 351.789 200.92 350.829 200.92C349.848 200.92 348.984 201.133 348.237 201.56C347.512 201.987 346.936 202.584 346.509 203.352C346.104 204.099 345.901 204.984 345.901 206.008V206.648C345.901 207.672 346.136 208.579 346.605 209.368C347.075 210.157 347.736 210.765 348.589 211.192C349.443 211.619 350.424 211.832 351.533 211.832C352.493 211.832 353.357 211.683 354.125 211.384C354.893 211.085 355.576 210.616 356.173 209.976L358.317 212.44C357.549 213.336 356.579 214.029 355.405 214.52C354.253 214.989 352.931 215.224 351.437 215.224ZM363.856 215V196.952C363.856 195.16 364.378 193.731 365.424 192.664C366.49 191.576 368.005 191.032 369.968 191.032C370.672 191.032 371.333 191.107 371.952 191.256C372.592 191.405 373.125 191.64 373.552 191.96L372.464 194.968C372.165 194.733 371.824 194.563 371.44 194.456C371.056 194.328 370.661 194.264 370.256 194.264C369.424 194.264 368.794 194.499 368.368 194.968C367.941 195.416 367.728 196.099 367.728 197.016V198.936L367.856 200.728V215H363.856ZM361.04 201.24V198.04H372.432V201.24H361.04ZM375.248 215V197.912H379.248V215H375.248ZM377.264 195.096C376.517 195.096 375.898 194.861 375.408 194.392C374.938 193.923 374.704 193.357 374.704 192.696C374.704 192.013 374.938 191.448 375.408 191C375.898 190.531 376.517 190.296 377.264 190.296C378.01 190.296 378.618 190.52 379.088 190.968C379.578 191.395 379.824 191.939 379.824 192.6C379.824 193.304 379.589 193.901 379.12 194.392C378.65 194.861 378.032 195.096 377.264 195.096ZM390.931 215.224C389.054 215.224 387.603 214.744 386.579 213.784C385.555 212.803 385.043 211.363 385.043 209.464V194.136H389.043V209.368C389.043 210.179 389.246 210.808 389.651 211.256C390.078 211.704 390.664 211.928 391.411 211.928C392.307 211.928 393.054 211.693 393.651 211.224L394.771 214.072C394.302 214.456 393.726 214.744 393.043 214.936C392.36 215.128 391.656 215.224 390.931 215.224ZM382.227 201.24V198.04H393.619V201.24H382.227ZM403.342 215.224C401.912 215.224 400.536 215.043 399.214 214.68C397.912 214.296 396.878 213.837 396.11 213.304L397.646 210.264C398.414 210.755 399.331 211.16 400.398 211.48C401.464 211.8 402.531 211.96 403.598 211.96C404.856 211.96 405.763 211.789 406.318 211.448C406.894 211.107 407.182 210.648 407.182 210.072C407.182 209.603 406.99 209.251 406.606 209.016C406.222 208.76 405.72 208.568 405.102 208.44C404.483 208.312 403.79 208.195 403.022 208.088C402.275 207.981 401.518 207.843 400.75 207.672C400.003 207.48 399.32 207.213 398.702 206.872C398.083 206.509 397.582 206.029 397.198 205.432C396.814 204.835 396.622 204.045 396.622 203.064C396.622 201.976 396.931 201.037 397.549 200.248C398.168 199.437 399.032 198.819 400.141 198.392C401.272 197.944 402.606 197.72 404.142 197.72C405.294 197.72 406.456 197.848 407.63 198.104C408.803 198.36 409.774 198.723 410.542 199.192L409.006 202.232C408.195 201.741 407.374 201.411 406.542 201.24C405.731 201.048 404.92 200.952 404.11 200.952C402.894 200.952 401.987 201.133 401.39 201.496C400.814 201.859 400.526 202.317 400.526 202.872C400.526 203.384 400.718 203.768 401.102 204.024C401.486 204.28 401.987 204.483 402.606 204.632C403.224 204.781 403.907 204.909 404.654 205.016C405.422 205.101 406.179 205.24 406.926 205.432C407.672 205.624 408.355 205.891 408.974 206.232C409.614 206.552 410.126 207.011 410.51 207.608C410.894 208.205 411.086 208.984 411.086 209.944C411.086 211.011 410.766 211.939 410.126 212.728C409.507 213.517 408.622 214.136 407.47 214.584C406.318 215.011 404.942 215.224 403.342 215.224Z"
              fill="#004785"
            />
            <path
              d="M508 9V399"
              stroke="#004785"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M108 9L108 399"
              stroke="#004785"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M499 202.5C499 206.918 502.582 210.5 507 210.5C511.418 210.5 515 206.918 515 202.5C515 198.082 511.418 194.5 507 194.5C502.582 194.5 499 198.082 499 202.5ZM458 204H507V201H458V204Z"
              fill="#004785"
            />
            <path
              d="M101 204C101 208.418 104.582 212 109 212C113.418 212 117 208.418 117 204C117 199.582 113.418 196 109 196C104.582 196 101 199.582 101 204ZM109 205.5H158V202.5H109V205.5Z"
              fill="#004785"
            />
            <path
              d="M600.001 10C600.001 14.4183 603.582 18 608.001 18C612.419 18 616.001 14.4183 616.001 10C616.001 5.58172 612.419 2 608.001 2C603.582 2 600.001 5.58172 600.001 10ZM507.985 10.4999L607.986 11.4999L608.016 8.50007L508.015 7.50007L507.985 10.4999Z"
              fill="#004785"
            />
            <path
              d="M600.001 204C600.001 208.418 603.582 212 608.001 212C612.419 212 616.001 208.418 616.001 204C616.001 199.582 612.419 196 608.001 196C603.582 196 600.001 199.582 600.001 204ZM507.985 204.5L607.986 205.5L608.016 202.5L508.015 201.5L507.985 204.5Z"
              fill="#004785"
            />
            <path
              d="M15.9993 203C15.9993 198.582 12.4176 195 7.99929 195C3.58101 195 -0.000710007 198.582 -0.000709621 203C-0.000709235 207.418 3.58101 211 7.99929 211C12.4176 211 15.9993 207.418 15.9993 203ZM108.015 202.5L8.01429 201.5L7.98429 204.5L107.985 205.5L108.015 202.5Z"
              fill="#004785"
            />
            <path
              d="M15.9993 8.49999C15.9993 4.08171 12.4176 0.499992 7.99929 0.499991C3.58101 0.499991 -0.000709104 4.08171 -0.00070949 8.49999C-0.000709876 12.9183 3.58101 16.5 7.99929 16.5C12.4176 16.5 15.9993 12.9183 15.9993 8.49999ZM108.007 7.50002L8.00679 7.00001L7.99179 9.99997L107.993 10.5L108.007 7.50002Z"
              fill="#004785"
            />
            <path
              d="M15.9993 398C15.9993 393.582 12.4176 390 7.99929 390C3.58101 390 -0.00070906 393.582 -0.000709446 398C-0.000709833 402.418 3.58101 406 7.99929 406C12.4176 406 15.9993 402.418 15.9993 398ZM108.015 397.5L8.01429 396.5L7.98429 399.5L107.985 400.5L108.015 397.5Z"
              fill="#004785"
            />
            <path
              d="M600.001 399.5C600.001 403.918 603.582 407.5 608.001 407.5C612.419 407.5 616.001 403.918 616.001 399.5C616.001 395.082 612.419 391.5 608.001 391.5C603.582 391.5 600.001 395.082 600.001 399.5ZM507.993 400.5L607.993 401L608.008 398L508.007 397.5L507.993 400.5Z"
              fill="#004785"
            />
            <defs>
              <filter
                id="filter0_d_867_2715"
                x="153"
                y="49"
                width="310"
                height="310"
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
                  result="effect1_dropShadow_867_2715"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_867_2715"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_d_867_2715"
                x="409.049"
                y="128.389"
                width="51.9512"
                height="158.071"
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
                  result="effect1_dropShadow_867_2715"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_867_2715"
                  result="shape"
                />
              </filter>
              <filter
                id="filter2_d_867_2715"
                x="228.764"
                y="306.667"
                width="158.123"
                height="50.3329"
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
                  result="effect1_dropShadow_867_2715"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_867_2715"
                  result="shape"
                />
              </filter>
              <filter
                id="filter3_d_867_2715"
                x="230.441"
                y="51"
                width="158.113"
                height="50.9833"
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
                  result="effect1_dropShadow_867_2715"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_867_2715"
                  result="shape"
                />
              </filter>
              <filter
                id="filter4_d_867_2715"
                x="155"
                y="124.205"
                width="50.6074"
                height="158.121"
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
                  result="effect1_dropShadow_867_2715"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_867_2715"
                  result="shape"
                />
              </filter>
              <filter
                id="filter5_d_867_2715"
                x="178"
                y="74"
                width="260"
                height="260"
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
                  result="effect1_dropShadow_867_2715"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_867_2715"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>

          {/* <div className="relative hidden min-h-[500px] basis-full xl:block xl:basis-[40%]">
            <Image
              className="object-contain"
              src="/images/key-benefits.png"
              fill
            />
          </div> */}
          <div className="flex basis-full flex-col justify-between gap-6 xl:basis-[30%]">
            <BenefitBoxRight
              icon="/images/benefit/4.png"
              title="Enhanced Productivity"
              description="Hiring the right individuals improves workplace performance, boosts efficiency, and drives higher productivity and success."
            />
            <BenefitBoxRight
              icon="/images/benefit/5.png"
              title="Improved Employee Morale"
              description="Building a team with aligned values creates a supportive, positive work environment that boosts collaboration."
            />
            <BenefitBoxRight
              icon="/images/benefit/6.png"
              title="Cost Efficiency"
              description="Reducing turnover and improving cultural fit lowers recruitment and training costs, saving your company resources in the long run."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
