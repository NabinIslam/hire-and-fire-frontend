import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between gap-10 lg:flex-row">
        <FadeInLeftWithSlowBounce className="relative min-h-[600px] w-full basis-full lg:basis-1/2">
          <Image
            className="h-auto w-full object-contain object-center lg:object-left"
            src="/images/Whychooseus-bgchecks.png"
            fill
          />
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="basis-full space-y-6 lg:basis-1/2">
          <div className="flex items-center">
            <span className="rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-left text-4xl font-semibold lg:text-4xl">
            Why Choose Us for Background Checks
          </h2>
          <p className="text-left text-sm font-medium">
            Choose us for background checks due to our reliable process,
            industry expertise, swift turnaround times, comprehensive reporting,
            and commitment to confidentiality, ensuring you make informed hiring
            decisions with confidence.
          </p>
          <div className="grid grid-cols-1 gap-x-5 gap-y-8 md:grid-cols-2">
            <div className="flex items-start gap-2">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_332_3153)">
                  <rect
                    x="5"
                    y="5"
                    width="44"
                    height="44"
                    rx="4"
                    fill="white"
                  />
                  <rect
                    x="5.5"
                    y="5.5"
                    width="43"
                    height="43"
                    rx="3.5"
                    stroke="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M27.7867 32.4067L27.3785 32.815L26.2021 32.2938C25.6435 32.6393 25.0316 32.8919 24.392 33.0439L23.9302 34.244H21.9701L21.5082 33.0439C20.8667 32.8919 20.2568 32.6373 19.6962 32.2938L18.5198 32.815L17.1342 31.4293L17.6572 30.2529C17.3118 29.6942 17.0591 29.0823 16.9052 28.4428L15.7051 27.9809V26.0209L16.9052 25.559C17.0583 24.919 17.3122 24.3074 17.6572 23.747L17.1342 22.5706L18.5198 21.1849L19.6962 21.708C20.2557 21.3631 20.8668 21.1099 21.5063 20.958L21.9701 19.7559H23.9302L24.392 20.958C25.0315 21.1099 25.6426 21.3631 26.2021 21.708L27.3785 21.1849L27.7867 21.5932L29.8841 18.5757C29.9188 18.5258 29.965 18.485 30.0188 18.4569C30.0726 18.4288 30.1325 18.4141 30.1932 18.4141H35.2225C35.3911 17.7356 36.0047 17.2322 36.735 17.2322C37.5951 17.2322 38.2933 17.9305 38.2933 18.7905C38.2933 19.6506 37.5951 20.3488 36.735 20.3488C36.0047 20.3488 35.3911 19.8454 35.2225 19.167H30.39L28.3276 22.1341L28.7641 22.5706L28.2431 23.747C28.5883 24.307 28.8416 24.9188 28.9931 25.559L30.1932 26.0209V26.6235H35.2225C35.3911 25.945 36.0047 25.4416 36.735 25.4416C37.5951 25.4416 38.2933 26.1399 38.2933 26.9999C38.2933 27.86 37.5951 28.5583 36.735 28.5583C36.0047 28.5583 35.3911 28.0549 35.2225 27.3764H30.1932V27.9809L28.9931 28.4428C28.8411 29.0823 28.5865 29.6923 28.2431 30.2529L28.7641 31.4293L28.3276 31.8658L30.39 34.8329H35.2225C35.3911 34.1544 36.0047 33.651 36.735 33.651C37.5951 33.651 38.2933 34.3493 38.2933 35.2094C38.2933 36.0694 37.5951 36.7677 36.735 36.7677C36.0047 36.7677 35.3911 36.2643 35.2225 35.5858H30.1932C30.1325 35.5858 30.0726 35.5711 30.0188 35.543C29.965 35.5148 29.9188 35.4741 29.8841 35.4242L27.7867 32.4067ZM22.9488 22.4556C20.4381 22.4556 18.4048 24.4889 18.4048 26.9996C18.4048 29.5104 20.4381 31.5463 22.9488 31.5463C25.4596 31.5463 27.4955 29.5104 27.4955 26.9996C27.4955 24.4889 25.4596 22.4556 22.9488 22.4556ZM22.8571 23.5553C22.8864 23.5427 22.9179 23.5362 22.9498 23.5362C22.9817 23.5362 23.0132 23.5427 23.0425 23.5552L25.7255 24.7054C25.7678 24.7235 25.8038 24.7537 25.8292 24.7921C25.8545 24.8306 25.868 24.8756 25.868 24.9216V27.1253C25.868 28.7674 24.6729 30.186 23.0559 30.4675L22.9498 30.4863L22.8436 30.4675C21.2273 30.186 20.0322 28.7674 20.0322 27.1253V24.9216C20.0322 24.8756 20.0457 24.8305 20.0711 24.7921C20.0964 24.7537 20.1325 24.7235 20.1748 24.7054L22.8571 23.5553ZM21.5095 27.3358L22.1945 28.0208C22.2628 28.0892 22.3549 28.1287 22.4515 28.131C22.5482 28.1334 22.642 28.0985 22.7136 28.0335L24.3775 26.5241C24.5314 26.3845 24.5431 26.1462 24.4034 25.9923C24.2638 25.8384 24.0255 25.8268 23.8717 25.9664L22.4734 27.2349L22.0419 26.8034C21.895 26.6565 21.6564 26.6565 21.5095 26.8034C21.3625 26.9503 21.3625 27.1889 21.5095 27.3358Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_332_3153"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
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
                      result="effect1_dropShadow_332_3153"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_332_3153"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">
                  Thorough and Reliable Process
                </h6>
                <p className="text-sm font-medium">
                  Our background checks provide accurate, up-to-date information
                  on candidates.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_332_3170)">
                  <rect
                    x="5"
                    y="5"
                    width="44"
                    height="44"
                    rx="4"
                    fill="white"
                  />
                  <rect
                    x="5.5"
                    y="5.5"
                    width="43"
                    height="43"
                    rx="3.5"
                    stroke="#F90945"
                  />
                  <path
                    d="M27.75 16.875C24.0562 16.875 20.8237 18.855 19.0575 21.81L20.5125 23.895C21.7125 21.09 24.5025 19.125 27.75 19.125C32.1 19.125 35.625 22.65 35.625 27C35.625 31.35 32.1 34.875 27.75 34.875C23.4 34.875 19.875 31.35 19.875 27C19.875 26.8725 19.8787 26.7488 19.8862 26.625H21.375L20.145 24.8737V24.8662L18.75 22.875L16.125 26.625H17.6325C17.6287 26.7488 17.625 26.8762 17.625 27C17.625 32.5912 22.1588 37.125 27.75 37.125C33.3412 37.125 37.875 32.5912 37.875 27C37.875 21.4088 33.3412 16.875 27.75 16.875Z"
                    fill="#F90945"
                  />
                  <path
                    d="M27.75 33C31.0575 33 33.75 30.3075 33.75 27C33.75 23.6925 31.0575 21 27.75 21C24.4425 21 21.75 23.6925 21.75 27C21.75 30.3075 24.4425 33 27.75 33ZM32.25 26.625H32.9813C32.9888 26.7488 33 26.8725 33 27C33 27.1275 32.9888 27.2512 32.9813 27.375H32.25V26.625ZM28.125 32.2313C28.0012 32.2388 27.8775 32.25 27.75 32.25C27.6225 32.25 27.4988 32.2388 27.375 32.2313V31.5H28.125V32.2313ZM31.1813 23.0363C31.3688 23.2013 31.5488 23.3775 31.71 23.565L31.1925 24.0825L30.6638 23.5537L31.1813 23.0363ZM31.1962 29.9175L31.7137 30.435C31.5487 30.6225 31.3725 30.8025 31.185 30.9637L30.6675 30.4462L31.1962 29.9175ZM27.375 21.7687C27.4988 21.7612 27.6225 21.75 27.75 21.75C27.8775 21.75 28.0012 21.7612 28.125 21.7687V22.5H27.375V21.7687ZM27.375 25.9425V23.25H28.125V25.9425C28.56 26.0963 28.875 26.5088 28.875 27C28.875 27.6187 28.3687 28.125 27.75 28.125C27.2625 28.125 26.85 27.81 26.6925 27.375H24.75V26.625H26.6925C26.805 26.3062 27.0562 26.0588 27.375 25.9425ZM24.3188 23.0363L24.8362 23.5537L24.3075 24.0825L23.79 23.565C23.955 23.3775 24.1313 23.1975 24.3188 23.0363ZM24.3037 29.9175L24.8325 30.4462L24.315 30.9637C24.1275 30.7987 23.9475 30.6225 23.7863 30.435L24.3037 29.9175ZM23.25 27.375H22.5187C22.5112 27.2512 22.5 27.1275 22.5 27C22.5 26.8725 22.5112 26.7488 22.5187 26.625H23.25V27.375Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_332_3170"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
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
                      result="effect1_dropShadow_332_3170"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_332_3170"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">
                  Swift Turnaround Times
                </h6>
                <p className="text-sm font-medium">
                  We deliver background check results quickly without
                  sacrificing quality.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_332_3162)">
                  <rect
                    x="5"
                    y="5"
                    width="44"
                    height="44"
                    rx="4"
                    fill="white"
                  />
                  <rect
                    x="5.5"
                    y="5.5"
                    width="43"
                    height="43"
                    rx="3.5"
                    stroke="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M33.2138 34.8075V15.9778C33.2131 15.7187 33.1099 15.4704 32.9267 15.2871C32.7434 15.1039 32.4951 15.0007 32.236 15H18.55C18.2909 15.0007 18.0426 15.1039 17.8594 15.2871C17.6761 15.4703 17.5729 15.7186 17.5723 15.9778V34.8075C17.5729 35.0666 17.6762 35.3149 17.8594 35.4981C18.0426 35.6813 18.2909 35.7845 18.55 35.7852H32.236C32.4951 35.7845 32.7434 35.6813 32.9266 35.4981C33.1099 35.3148 33.2131 35.0666 33.2138 34.8075ZM34.0138 18.2148H35.4508C35.7099 18.2155 35.9582 18.3187 36.1414 18.5019C36.3246 18.6852 36.4279 18.9334 36.4286 19.1925V38.0222C36.4279 38.2813 36.3246 38.5296 36.1414 38.7128C35.9582 38.8961 35.7099 38.9993 35.4508 39H21.7648C21.5057 38.9993 21.2574 38.8961 21.0742 38.7128C20.891 38.5296 20.7878 38.2813 20.787 38.0222V36.5852H32.236C32.7073 36.5845 33.159 36.3969 33.4923 36.0637C33.8255 35.7305 34.013 35.2787 34.0138 34.8075V18.2148ZM26.4567 21.0378V18.2191C27.1732 18.3083 27.8394 18.6339 28.35 19.1445C28.8605 19.655 29.1862 20.3213 29.2754 21.0378H26.4567ZM27.0223 25.068C26.6571 25.4332 26.21 25.7058 25.7183 25.8633C25.2265 26.0208 24.7042 26.0586 24.1949 25.9736C23.6855 25.8885 23.2039 25.6831 22.7899 25.3743C22.376 25.0656 22.0418 24.6624 21.8151 24.1985C21.5884 23.7345 21.4758 23.2231 21.4866 22.7068C21.4974 22.1906 21.6313 21.6843 21.8772 21.2302C22.1231 20.7762 22.4739 20.3874 22.9004 20.0962C23.3269 19.805 23.8167 19.6199 24.3292 19.5562V22.7749C24.3292 22.8275 24.3395 22.8795 24.3596 22.928C24.3797 22.9765 24.4092 23.0206 24.4463 23.0578C24.4835 23.0949 24.5276 23.1244 24.5761 23.1445C24.6246 23.1646 24.6767 23.1749 24.7292 23.1749H27.9478C27.8594 23.8916 27.5337 24.5581 27.0225 25.0682L27.0223 25.068ZM20.2035 28.8503H30.5823C30.6349 28.8503 30.6869 28.8607 30.7354 28.8808C30.7839 28.9009 30.828 28.9304 30.8652 28.9675C30.9023 29.0046 30.9318 29.0487 30.9519 29.0973C30.972 29.1458 30.9823 29.1978 30.9823 29.2503C30.9823 29.3029 30.972 29.3549 30.9519 29.4034C30.9318 29.4519 30.9023 29.496 30.8652 29.5332C30.828 29.5703 30.7839 29.5998 30.7354 29.6199C30.6869 29.64 30.6349 29.6503 30.5823 29.6503H20.2035C20.151 29.6503 20.099 29.64 20.0505 29.6199C20.002 29.5998 19.9579 29.5703 19.9207 29.5332C19.8836 29.496 19.8541 29.4519 19.834 29.4034C19.8139 29.3549 19.8036 29.3029 19.8036 29.2503C19.8036 29.1978 19.8139 29.1458 19.834 29.0973C19.8541 29.0487 19.8836 29.0046 19.9207 28.9675C19.9579 28.9304 20.002 28.9009 20.0505 28.8808C20.099 28.8607 20.151 28.8503 20.2035 28.8503ZM20.2035 30.5725H30.5823C30.6352 30.572 30.6877 30.5819 30.7367 30.6017C30.7858 30.6216 30.8304 30.6509 30.868 30.6881C30.9056 30.7253 30.9354 30.7696 30.9558 30.8185C30.9762 30.8673 30.9867 30.9196 30.9867 30.9725C30.9867 31.0254 30.9762 31.0778 30.9558 31.1266C30.9354 31.1754 30.9056 31.2197 30.868 31.2569C30.8304 31.2941 30.7858 31.3235 30.7367 31.3434C30.6877 31.3632 30.6352 31.3731 30.5823 31.3725H20.2035C20.0982 31.3714 19.9976 31.3288 19.9235 31.2539C19.8494 31.179 19.8078 31.0779 19.8078 30.9725C19.8078 30.8672 19.8494 30.7661 19.9235 30.6912C19.9976 30.6163 20.0982 30.5737 20.2035 30.5725ZM20.2035 32.2948H30.5823C30.6352 32.2942 30.6877 32.3041 30.7367 32.324C30.7858 32.3438 30.8304 32.3732 30.868 32.4104C30.9056 32.4476 30.9354 32.4919 30.9558 32.5407C30.9762 32.5895 30.9867 32.6419 30.9867 32.6948C30.9867 32.7477 30.9762 32.8 30.9558 32.8489C30.9354 32.8977 30.9056 32.942 30.868 32.9792C30.8304 33.0164 30.7858 33.0457 30.7367 33.0656C30.6877 33.0854 30.6352 33.0954 30.5823 33.0948H20.2035C20.0982 33.0936 19.9976 33.051 19.9235 32.9761C19.8494 32.9012 19.8078 32.8001 19.8078 32.6948C19.8078 32.5894 19.8494 32.4883 19.9235 32.4134C19.9976 32.3386 20.0982 32.2959 20.2035 32.2948ZM28.7723 22.7748C28.7723 23.5744 28.5351 24.3561 28.0909 25.021C27.6466 25.6858 27.0152 26.204 26.2764 26.51C25.5376 26.816 24.7247 26.8961 23.9404 26.7401C23.1562 26.584 22.4358 26.199 21.8703 25.6335C21.3049 25.0681 20.9199 24.3477 20.7639 23.5634C20.6079 22.7792 20.6879 21.9663 20.9939 21.2275C21.2999 20.4887 21.8181 19.8573 22.483 19.413C23.1479 18.9688 23.9296 18.7316 24.7292 18.7316C24.8353 18.7316 24.937 18.7738 25.012 18.8488C25.087 18.9238 25.1292 19.0255 25.1292 19.1316V22.3748H28.3723C28.4784 22.3748 28.5801 22.4169 28.6551 22.4919C28.7302 22.567 28.7723 22.6687 28.7723 22.7748ZM29.7 21.8377H26.0569C26.0043 21.8378 25.9523 21.8274 25.9038 21.8073C25.8553 21.7872 25.8112 21.7578 25.774 21.7206C25.7369 21.6835 25.7074 21.6394 25.6873 21.5908C25.6672 21.5423 25.6568 21.4903 25.6568 21.4378V17.7946C25.6568 17.7421 25.6672 17.69 25.6873 17.6415C25.7074 17.593 25.7369 17.5489 25.774 17.5117C25.8112 17.4746 25.8553 17.4451 25.9038 17.425C25.9523 17.4049 26.0043 17.3946 26.0569 17.3946C27.1292 17.3946 28.1575 17.8206 28.9158 18.5789C29.674 19.3371 30.1 20.3655 30.1 21.4378C30.1 21.5438 30.0579 21.6456 29.9829 21.7206C29.9079 21.7956 29.8061 21.8377 29.7 21.8377Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_332_3162"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
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
                      result="effect1_dropShadow_332_3162"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_332_3162"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">
                  Comprehensive Reporting
                </h6>
                <p className="text-sm font-medium">
                  Our reports include detailed insights into candidates’
                  backgrounds and qualifications.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <svg
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_332_3180)">
                  <rect
                    x="5"
                    y="5"
                    width="44"
                    height="44"
                    rx="4"
                    fill="white"
                  />
                  <rect
                    x="5.5"
                    y="5.5"
                    width="43"
                    height="43"
                    rx="3.5"
                    stroke="#F90945"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.5336 25.9977H26.1299V23.8055H25.5336V25.9977ZM28.084 28.4553V27.859H23.5796V28.4553H28.084ZM24.4022 27.2265H27.2614V26.6302H24.4022V27.2265ZM21.5884 22.8245H20.479C20.5479 23.0655 20.6934 23.2776 20.8936 23.4286C21.0937 23.5796 21.3376 23.6613 21.5884 23.6613C21.8391 23.6613 22.083 23.5796 22.2832 23.4286C22.4834 23.2776 22.6289 23.0655 22.6977 22.8245H21.5884ZM30.0752 22.8245H28.9658C29.0347 23.0655 29.1802 23.2776 29.3804 23.4286C29.5806 23.5796 29.8245 23.6613 30.0752 23.6613C30.3259 23.6613 30.5698 23.5796 30.77 23.4286C30.9702 23.2776 31.1157 23.0655 31.1846 22.8245H30.0752ZM22.4883 22.1919L21.5883 20.7503L20.6883 22.1919H22.4883ZM30.9751 22.1919L30.0751 20.7503L29.1751 22.1919H30.9751ZM21.3102 20.0036C21.3373 19.9535 21.3775 19.9116 21.4264 19.8824C21.4754 19.8532 21.5314 19.8378 21.5884 19.8379H25.5155V19.4078C25.5155 19.3239 25.5489 19.2435 25.6082 19.1842C25.6675 19.1248 25.7479 19.0915 25.8318 19.0915C25.9157 19.0915 25.9961 19.1248 26.0554 19.1842C26.1148 19.2435 26.1481 19.3239 26.1481 19.4078V19.8379H30.0752C30.1322 19.8378 30.1881 19.8532 30.2371 19.8824C30.2861 19.9116 30.3263 19.9535 30.3534 20.0036L31.8025 22.3249C31.8406 22.3784 31.8611 22.4425 31.861 22.5082C31.8551 22.9779 31.6643 23.4264 31.3301 23.7565C30.9958 24.0866 30.5449 24.2717 30.0752 24.2717C29.6054 24.2717 29.1545 24.0866 28.8203 23.7565C28.486 23.4264 28.2953 22.9779 28.2894 22.5082C28.2893 22.4425 28.3097 22.3784 28.3479 22.3249L29.5057 20.4704H26.1481V23.173H26.4462C26.4877 23.173 26.5288 23.1811 26.5672 23.197C26.6056 23.2129 26.6404 23.2362 26.6698 23.2656C26.6992 23.2949 26.7225 23.3298 26.7383 23.3682C26.7542 23.4065 26.7624 23.4477 26.7624 23.4892V25.9977H27.5776C27.6615 25.9977 27.7419 26.031 27.8013 26.0903C27.8606 26.1496 27.8939 26.2301 27.8939 26.314V27.2265H28.4001C28.4417 27.2265 28.4828 27.2347 28.5212 27.2506C28.5595 27.2665 28.5944 27.2898 28.6238 27.3191C28.6531 27.3485 28.6764 27.3834 28.6923 27.4217C28.7082 27.4601 28.7164 27.5012 28.7164 27.5428V28.7715C28.7164 28.8131 28.7082 28.8542 28.6923 28.8926C28.6764 28.9309 28.6531 28.9658 28.6238 28.9952C28.5944 29.0245 28.5595 29.0478 28.5212 29.0637C28.4828 29.0796 28.4417 29.0878 28.4001 29.0878H23.2633C23.1794 29.0878 23.099 29.0545 23.0397 28.9952C22.9804 28.9359 22.947 28.8554 22.947 28.7715V27.5428C22.947 27.4589 22.9804 27.3784 23.0397 27.3191C23.099 27.2598 23.1794 27.2265 23.2633 27.2265H23.7695V26.314C23.7695 26.2301 23.8029 26.1496 23.8622 26.0903C23.9215 26.031 24.0019 25.9977 24.0858 25.9977H24.901V23.4891C24.901 23.4476 24.9091 23.4064 24.925 23.3681C24.9409 23.3297 24.9642 23.2948 24.9936 23.2655C25.023 23.2361 25.0578 23.2128 25.0962 23.1969C25.1346 23.181 25.1757 23.1729 25.2172 23.1729H25.5154V20.4703H22.158L23.3158 22.3249C23.3539 22.3784 23.3744 22.4424 23.3743 22.5081C23.3684 22.9779 23.1777 23.4264 22.8434 23.7565C22.5091 24.0866 22.0583 24.2717 21.5885 24.2717C21.1187 24.2717 20.6679 24.0866 20.3336 23.7565C19.9993 23.4264 19.8086 22.9779 19.8027 22.5081C19.8026 22.4424 19.8231 22.3783 19.8612 22.3249L21.3103 20.0036L21.3102 20.0036ZM34.3018 30.2742C34.0126 29.9849 33.6319 29.8048 33.2248 29.7647C32.8176 29.7245 32.4092 29.8268 32.069 30.0541C31.7288 30.2814 31.4779 30.6196 31.3591 31.0111C31.2403 31.4026 31.261 31.8232 31.4175 32.2012C31.5741 32.5792 31.8569 32.8912 32.2177 33.084C32.5785 33.2769 32.995 33.3387 33.3963 33.2589C33.7975 33.1791 34.1587 32.9626 34.4183 32.6464C34.6778 32.3301 34.8197 31.9336 34.8197 31.5245C34.82 31.2923 34.7744 31.0622 34.6855 30.8477C34.5967 30.6331 34.4663 30.4382 34.3018 30.2742ZM33.0515 29.1238C33.6069 29.1238 34.1452 29.3164 34.5745 29.6687C35.0039 30.0211 35.2978 30.5114 35.4062 31.0562C35.5145 31.601 35.4306 32.1665 35.1688 32.6563C34.907 33.1462 34.4834 33.5301 33.9702 33.7427C33.4571 33.9552 32.8861 33.9833 32.3545 33.822C31.823 33.6608 31.3639 33.3202 31.0553 32.8584C30.7467 32.3965 30.6078 31.842 30.6623 31.2892C30.7167 30.7365 30.9612 30.2197 31.3539 29.8269C31.5766 29.6037 31.8412 29.4266 32.1325 29.306C32.4238 29.1853 32.7361 29.1234 33.0515 29.1238ZM31.7431 31.8193C31.6772 31.7676 31.6346 31.6918 31.6246 31.6086C31.6146 31.5254 31.6381 31.4416 31.6899 31.3757C31.7416 31.3098 31.8175 31.2672 31.9007 31.2572C31.9839 31.2472 32.0676 31.2707 32.1335 31.3225L32.8057 31.8511L33.926 30.557C33.9811 30.4949 34.0584 30.457 34.1411 30.4515C34.2239 30.446 34.3055 30.4734 34.3683 30.5276C34.431 30.5819 34.4698 30.6587 34.4763 30.7414C34.4828 30.8241 34.4564 30.9061 34.4029 30.9695L33.0972 32.4777L33.0951 32.4803C33.0434 32.5462 32.9676 32.5888 32.8844 32.5988C32.8012 32.6087 32.7175 32.5852 32.6516 32.5335L31.743 31.819L31.7431 31.8193ZM34.5228 28.3188C34.5132 28.3197 34.5035 28.3202 34.4937 28.3202H34.4864C34.4341 28.3231 34.3733 28.3307 34.3123 28.3383C34.147 28.3589 33.9809 28.3796 33.8031 28.3379C33.6307 28.2974 33.4922 28.2081 33.3523 28.1181C33.2398 28.0455 33.1259 27.9721 33.0517 27.9721C32.9774 27.9721 32.8634 28.0455 32.751 28.1181C32.6112 28.2081 32.4727 28.2974 32.3002 28.3379C32.1224 28.3796 31.9564 28.3589 31.791 28.3383C31.665 28.3226 31.5396 28.307 31.4885 28.332C31.4375 28.3571 31.3739 28.4647 31.3114 28.5716C31.2274 28.7151 31.1435 28.8583 31.0046 28.97C30.8649 29.0821 30.7056 29.133 30.5463 29.1839C30.4305 29.2209 30.3147 29.258 30.2787 29.3027C30.2427 29.3474 30.2318 29.4685 30.2207 29.5903C30.2053 29.7561 30.1899 29.9223 30.1102 30.0849C30.0309 30.2465 29.912 30.3591 29.7925 30.4723C29.7001 30.5598 29.6071 30.6479 29.5927 30.7095C29.5881 30.7696 29.5974 30.83 29.6198 30.886C29.6244 30.8976 29.6282 30.9095 29.6313 30.9216C29.6417 30.9531 29.6533 30.9858 29.6648 31.0186C29.7216 31.1792 29.7788 31.3413 29.7788 31.5248C29.7788 31.7083 29.7216 31.8704 29.6649 32.0311C29.6217 32.153 29.5791 32.2738 29.5921 32.3375C29.594 32.3432 29.5958 32.3491 29.5975 32.355C29.6217 32.4155 29.7073 32.4967 29.7925 32.5773C29.912 32.6906 30.031 32.8032 30.1102 32.9648C30.1899 33.1273 30.2053 33.2935 30.2207 33.4594C30.232 33.5813 30.2433 33.7028 30.2787 33.747C30.3141 33.7911 30.4305 33.8288 30.5463 33.8658C30.7057 33.9167 30.8651 33.9676 31.0046 34.0797C31.0887 34.1497 31.1611 34.2327 31.2188 34.3256C31.2299 34.3401 31.2397 34.3556 31.2482 34.3718C31.2698 34.4068 31.2904 34.4421 31.3114 34.4779C31.374 34.5847 31.4368 34.692 31.4885 34.7174C31.5403 34.7428 31.665 34.7268 31.791 34.7112C31.9564 34.6905 32.1224 34.6699 32.3002 34.7116C32.4727 34.752 32.6112 34.8413 32.751 34.9314C32.8635 35.0039 32.9774 35.0773 33.0517 35.0773C33.126 35.0773 33.2398 35.0039 33.3523 34.9314C33.4922 34.8413 33.6307 34.752 33.8031 34.7116C33.9809 34.6699 34.147 34.6905 34.3123 34.7112C34.4383 34.7269 34.5637 34.7425 34.6148 34.7174C34.6659 34.6924 34.7294 34.5847 34.792 34.4779C34.8127 34.4424 34.8335 34.4069 34.8551 34.3719C34.8636 34.3556 34.8734 34.3401 34.8845 34.3255C34.9423 34.2326 35.0146 34.1496 35.0988 34.0797C35.2385 33.9676 35.3977 33.9167 35.557 33.8658C35.6728 33.8288 35.7887 33.7918 35.8246 33.747C35.8606 33.7022 35.8715 33.5812 35.8826 33.4594C35.898 33.2936 35.9134 33.1273 35.9931 32.9648C36.0724 32.8032 36.1913 32.6906 36.3109 32.5773C36.4032 32.4899 36.4962 32.4018 36.5106 32.3401C36.5254 32.2772 36.4822 32.1548 36.4385 32.0311C36.3817 31.8705 36.3245 31.7084 36.3245 31.5248C36.3245 31.3413 36.3817 31.1792 36.4385 31.0186C36.4822 30.8949 36.5254 30.7725 36.5106 30.7095C36.4962 30.6478 36.4032 30.5598 36.3109 30.4723C36.1913 30.3591 36.0724 30.2465 35.9931 30.0849C35.9135 29.9223 35.898 29.7561 35.8826 29.5903C35.8714 29.4684 35.8601 29.3469 35.8246 29.3027C35.7892 29.2585 35.6728 29.2209 35.557 29.1839C35.3976 29.133 35.2383 29.0821 35.0988 28.97C34.9599 28.8585 34.876 28.7153 34.792 28.5716C34.7294 28.4647 34.6665 28.3574 34.6148 28.332C34.5854 28.3212 34.5541 28.3167 34.5228 28.3189V28.3188ZM32.7354 27.4042C32.6216 27.4549 32.5126 27.516 32.41 27.5867C32.3324 27.6437 32.2472 27.6895 32.1569 27.7227C32.0898 27.7384 31.9784 27.7245 31.8676 27.7107C31.6506 27.6837 31.4349 27.6568 31.2118 27.7662C30.9887 27.8756 30.878 28.0646 30.7677 28.2529C30.7136 28.3454 30.6595 28.4377 30.6092 28.4779C30.559 28.518 30.4575 28.5506 30.3561 28.5831C30.1483 28.6495 29.9404 28.7159 29.7871 28.9069C29.6338 29.0979 29.6133 29.3154 29.5932 29.533C29.5832 29.6408 29.5731 29.7492 29.5445 29.8077C29.5168 29.8639 29.4374 29.9392 29.3577 30.0148C29.197 30.167 29.0351 30.3203 28.9775 30.5658C28.9684 30.6045 28.9624 30.644 28.9595 30.6837H21.0763C20.9925 30.6837 20.912 30.717 20.8527 30.7763C20.7934 30.8357 20.7601 30.9161 20.7601 31C20.7601 31.0839 20.7934 31.1643 20.8527 31.2236C20.912 31.2829 20.9925 31.3162 21.0763 31.3162H29.0999C29.1255 31.383 29.1411 31.4531 29.1462 31.5244C29.1462 31.6028 29.1076 31.7122 29.0693 31.8206C29.0321 31.9189 29.0015 32.0197 28.9777 32.1222H21.0763C20.9925 32.1222 20.912 32.1555 20.8527 32.2148C20.7934 32.2741 20.7601 32.3545 20.7601 32.4384C20.7601 32.5223 20.7934 32.6027 20.8527 32.6621C20.912 32.7214 20.9925 32.7547 21.0763 32.7547H29.1004C29.1763 32.8563 29.2625 32.9499 29.3575 33.0339C29.4372 33.1094 29.5166 33.1846 29.5443 33.241C29.5729 33.2995 29.583 33.4077 29.593 33.5157C29.6131 33.7333 29.6333 33.9504 29.7869 34.1418C29.9405 34.3333 30.1481 34.3993 30.3559 34.4656C30.4573 34.4981 30.5588 34.5305 30.609 34.5709C30.6244 34.5838 30.6384 34.5983 30.6507 34.6142V35.7057H19.8537C19.7961 35.4828 19.6799 35.2795 19.5172 35.1167C19.3545 34.954 19.1511 34.8378 18.9283 34.7803V18.2324C19.1511 18.1749 19.3545 18.0587 19.5172 17.896C19.6799 17.7332 19.7961 17.5299 19.8537 17.3071H31.8099C31.8675 17.5299 31.9836 17.7333 32.1464 17.896C32.3091 18.0587 32.5125 18.1749 32.7353 18.2324V27.4042H32.7354ZM30.6508 36.3383V37.1478H18.0006C17.8644 37.1472 17.734 37.0928 17.6376 36.9965C17.5413 36.9001 17.4869 36.7697 17.4863 36.6335V16.3794C17.4869 16.2432 17.5413 16.1127 17.6376 16.0164C17.734 15.9201 17.8644 15.8657 18.0006 15.8651H33.6629C33.7991 15.8657 33.9296 15.9201 34.0259 16.0164C34.1222 16.1127 34.1766 16.2432 34.1772 16.3794V27.7177C34.1009 27.7309 34.023 27.7325 33.9462 27.7224C33.8559 27.6892 33.7707 27.6435 33.6931 27.5865C33.5905 27.5158 33.4816 27.4547 33.3678 27.404V17.9559C33.3678 17.872 33.3344 17.7916 33.2751 17.7322C33.2158 17.6729 33.1354 17.6396 33.0515 17.6396C32.8797 17.6389 32.7151 17.5703 32.5936 17.4488C32.4721 17.3272 32.4035 17.1627 32.4027 16.9908C32.4027 16.9069 32.3694 16.8265 32.3101 16.7672C32.2508 16.7079 32.1704 16.6745 32.0865 16.6745H19.5771C19.4932 16.6745 19.4128 16.7079 19.3535 16.7672C19.2941 16.8265 19.2608 16.9069 19.2608 16.9908C19.2601 17.1627 19.1915 17.3273 19.07 17.4488C18.9485 17.5703 18.7839 17.6389 18.612 17.6396C18.5282 17.6396 18.4477 17.6729 18.3884 17.7322C18.3291 17.7916 18.2958 17.872 18.2958 17.9559V35.057C18.2958 35.1409 18.3291 35.2213 18.3884 35.2807C18.4477 35.34 18.5281 35.3733 18.612 35.3733C18.7839 35.374 18.9485 35.4426 19.07 35.5641C19.1915 35.6856 19.2601 35.8502 19.2608 36.0221C19.2608 36.0636 19.269 36.1047 19.2849 36.1431C19.3008 36.1815 19.3241 36.2163 19.3535 36.2457C19.3828 36.2751 19.4177 36.2984 19.4561 36.3143C19.4944 36.3302 19.5356 36.3383 19.5771 36.3383H30.6508ZM31.2834 36.021V38.1351L32.8903 37.2081C32.9384 37.1795 32.9932 37.1642 33.0491 37.1638C33.105 37.1634 33.16 37.1778 33.2084 37.2057L34.8197 38.1351V35.3136C34.6219 35.3865 34.4292 35.3625 34.2356 35.3383C34.1247 35.3246 34.0133 35.3107 33.9462 35.3264C33.8559 35.3596 33.7707 35.4054 33.6931 35.4624C33.5025 35.5852 33.3095 35.7096 33.0515 35.7096C32.7935 35.7096 32.6004 35.5852 32.4098 35.4624C32.3323 35.4054 32.2471 35.3596 32.1567 35.3264C32.0896 35.3107 31.9782 35.3246 31.8674 35.3383C31.6737 35.3625 31.4811 35.3865 31.2833 35.3136L31.2834 36.021Z"
                    fill="#F90945"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_332_3180"
                    x="0"
                    y="0"
                    width="54"
                    height="54"
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
                      result="effect1_dropShadow_332_3180"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_332_3180"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <div className="basis-full space-y-2">
                <h6 className="mt-1 text-xl font-medium">
                  Regulatory Compliance
                </h6>
                <p className="text-sm font-medium">
                  Our checks adhere to all relevant laws and regulations
                  consistently.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-start gap-5">
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WhyChooseUs;
