import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";
import VisaApplicationCard from "../visa-application-flight-assistance/VisaApplicationCard";

const ContractStaffingProcess = () => {
  return (
    <section className="pb-[100px] pt-[50px]">
      <div className="container">
        <FadeInDownWithSlowBounce className="flex items-center justify-center">
          <span className="rounded-full border-2 border-primary px-5 py-3 text-center text-2xl font-medium text-primary">
            Contract Staffing Process
          </span>
        </FadeInDownWithSlowBounce>
        <FadeInDownWithSlowBounce className="mx-auto mb-16 mt-6 max-w-[840px]">
          <h2 className="text-center text-4xl font-semibold lg:text-5xl">
            Our Step-by-Step Contract Staffing Process
          </h2>
        </FadeInDownWithSlowBounce>
      </div>

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
                <g filter="url(#filter0_d_295_2832)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_295_2832)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_295_2832)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_295_2832)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_295_2832)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_295_2832)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.4852 49.5358C55.3126 50.7157 55.7981 52.1529 55.7981 53.7036C55.7981 57.7173 52.545 60.9705 48.5312 60.9705C44.5175 60.9705 41.2643 57.7173 41.2643 53.7036C41.2643 49.6898 44.5175 46.4367 48.5312 46.4367C50.3331 46.4367 51.9817 47.0923 53.2514 48.178L55.4822 46.0052L55.4054 45.9262C55.1512 45.6657 55.1574 45.2441 55.4199 44.9919L59.4089 41.1187C59.6713 40.8666 60.0909 40.8728 60.343 41.1332L61.7836 42.6172C62.0379 42.8797 62.0316 43.2992 61.7712 43.5514L57.7802 47.4246C57.5198 47.6767 57.0981 47.6705 56.846 47.4101L56.7589 47.3204L54.4852 49.5358ZM48.5312 59.2757C51.6087 59.2757 54.1034 56.781 54.1034 53.7036C54.1034 50.6261 51.6087 48.1314 48.5312 48.1314C45.4538 48.1314 42.9591 50.6261 42.9591 53.7036C42.9591 56.781 45.4538 59.2757 48.5312 59.2757ZM45.6033 54.0918C45.3891 53.8776 45.3891 53.5296 45.6033 53.3154C45.8176 53.1011 46.1655 53.1011 46.3798 53.3154L47.7258 54.6614L50.8062 51.5811C51.0205 51.3668 51.3684 51.3668 51.5826 51.5811C51.7969 51.7953 51.7969 52.1432 51.5826 52.3575L48.114 55.8261C48.0631 55.8771 48.0025 55.9175 47.9359 55.9451C47.8693 55.9727 47.7979 55.9869 47.7258 55.9869C47.6537 55.9869 47.5823 55.9727 47.5157 55.9451C47.4491 55.9175 47.3886 55.8771 47.3376 55.8261L45.6033 54.0918ZM40.4963 56.0382H30.2863C29.5947 56.0382 29.0293 55.4727 29.0293 54.7812V31.6761C29.0293 30.9845 29.5947 30.421 30.2863 30.421H34.0213V31.6199H30.7772C30.6316 31.6199 30.492 31.6777 30.389 31.7807C30.2861 31.8837 30.2282 32.0233 30.2282 32.1689V54.2903C30.2282 54.4359 30.2861 54.5755 30.389 54.6785C30.492 54.7815 30.6316 54.8393 30.7772 54.8393H40.2427C40.2977 55.2446 40.3825 55.6453 40.4963 56.0382ZM40.1664 53.7413H31.3263V32.7179H34.0275C34.0608 33.0755 34.2264 33.4077 34.4918 33.6495C34.7573 33.8913 35.1034 34.0254 35.4625 34.0253H44.4462C44.8053 34.0254 45.1514 33.8914 45.4169 33.6496C45.6823 33.4077 45.8479 33.0755 45.8811 32.7179H48.5824V45.3388C48.5653 45.3386 48.5483 45.3386 48.5312 45.3386C43.911 45.3386 40.1663 49.0833 40.1663 53.7036L40.1664 53.7413ZM39.6983 36.1928H46.7168C47.0198 36.1928 47.2658 35.9468 47.2658 35.6438C47.2658 35.3408 47.0198 35.0948 46.7168 35.0948H39.6983C39.3953 35.0948 39.1493 35.3408 39.1493 35.6438C39.1493 35.9468 39.3953 36.1928 39.6983 36.1928ZM39.6983 45.0643H46.7168C47.0198 45.0643 47.2658 44.8182 47.2658 44.5153C47.2658 44.2122 47.0198 43.9662 46.7168 43.9662H39.6983C39.3953 43.9662 39.1493 44.2122 39.1493 44.5153C39.1493 44.8182 39.3953 45.0643 39.6983 45.0643ZM39.6983 42.7891H46.7168C47.0198 42.7891 47.2658 42.543 47.2658 42.2401C47.2658 41.9371 47.0198 41.691 46.7168 41.691H39.6983C39.3953 41.691 39.1493 41.9371 39.1493 42.2401C39.1493 42.543 39.3953 42.7891 39.6983 42.7891ZM39.6983 38.4679H46.7168C47.0198 38.4679 47.2658 38.222 47.2658 37.9189C47.2658 37.6159 47.0198 37.3699 46.7168 37.3699H39.6983C39.3953 37.3699 39.1493 37.6159 39.1493 37.9189C39.1493 38.222 39.3953 38.4679 39.6983 38.4679ZM33.6045 47.7819C33.4951 47.782 33.3902 47.8256 33.3129 47.9029C33.2355 47.9803 33.192 48.0851 33.1918 48.1945V51.356C33.1918 51.5833 33.3771 51.7686 33.6045 51.7686H36.766C36.9934 51.7686 37.1787 51.5833 37.1787 51.356V48.1945C37.1787 47.9672 36.9934 47.7819 36.766 47.7819H33.6045ZM33.9561 50.0828C33.853 49.9799 33.795 49.8404 33.7949 49.6948C33.7947 49.5492 33.8523 49.4095 33.955 49.3064C34.0579 49.2034 34.1974 49.1453 34.343 49.1451C34.4886 49.1449 34.6283 49.2026 34.7314 49.3053L34.9936 49.5668L35.6 48.8176C35.7906 48.5821 36.1366 48.5456 36.3722 48.7363C36.6077 48.9269 36.6441 49.2729 36.4535 49.5084L35.4639 50.731C35.4156 50.7908 35.3552 50.8397 35.2867 50.8747C35.2182 50.9097 35.1432 50.9298 35.0664 50.9339C34.9896 50.938 34.9128 50.9259 34.841 50.8984C34.7692 50.8709 34.704 50.8287 34.6495 50.7744L33.9561 50.0828ZM33.6045 41.3843C33.4951 41.3844 33.3903 41.428 33.3129 41.5053C33.2356 41.5826 33.192 41.6875 33.1918 41.7969V44.9585C33.1918 45.1857 33.3771 45.373 33.6045 45.373H36.766C36.9934 45.373 37.1787 45.1857 37.1787 44.9585V41.7969C37.1787 41.5696 36.9934 41.3843 36.766 41.3843H33.6045ZM35.1852 42.6022L35.5031 42.2844C35.606 42.1815 35.7457 42.1237 35.8913 42.1237C36.0368 42.1237 36.1765 42.1815 36.2794 42.2844C36.3824 42.3874 36.4402 42.527 36.4402 42.6726C36.4402 42.8182 36.3824 42.9578 36.2794 43.0608L35.9617 43.3786L36.2794 43.6964C36.3824 43.7994 36.4402 43.939 36.4402 44.0846C36.4402 44.2302 36.3824 44.3699 36.2794 44.4728C36.1765 44.5757 36.0368 44.6335 35.8913 44.6335C35.7457 44.6335 35.606 44.5757 35.5031 44.4728L35.1852 44.155L34.8675 44.4728C34.7645 44.5757 34.6249 44.6335 34.4793 44.6335C34.3337 44.6335 34.194 44.5757 34.0911 44.4728C33.9882 44.3699 33.9304 44.2302 33.9304 44.0846C33.9304 43.939 33.9882 43.7994 34.0911 43.6964L34.4088 43.3786L34.0911 43.0608C33.8768 42.8466 33.8768 42.4986 34.0911 42.2844C34.3053 42.0701 34.6532 42.0701 34.8675 42.2844L35.1852 42.6022ZM33.6045 34.7879C33.4951 34.7881 33.3902 34.8317 33.3129 34.909C33.2355 34.9863 33.192 35.0912 33.1918 35.2006V38.3621C33.1918 38.5895 33.3771 38.7748 33.6045 38.7748H36.766C36.9934 38.7748 37.1787 38.5895 37.1787 38.3621V35.2006C37.1787 34.9732 36.9934 34.7879 36.766 34.7879H33.6045ZM33.9556 37.0884C33.8527 36.9854 33.7949 36.8458 33.7949 36.7002C33.7949 36.5546 33.8527 36.4149 33.9556 36.3119C34.0586 36.209 34.1982 36.1512 34.3438 36.1512C34.4894 36.1512 34.629 36.209 34.732 36.3119L34.9942 36.5741L35.6 35.8256C35.7906 35.5901 36.1366 35.5536 36.3722 35.7443C36.6077 35.9349 36.6441 36.2809 36.4535 36.5165L35.4639 37.7391C35.4155 37.7989 35.3551 37.8479 35.2865 37.8828C35.218 37.9178 35.1428 37.9379 35.066 37.942C34.9891 37.946 34.9123 37.9338 34.8405 37.9062C34.7686 37.8786 34.7034 37.8362 34.649 37.7818L33.9556 37.0884ZM49.6805 45.4169V32.1689C49.6805 32.0233 49.6226 31.8837 49.5197 31.7807C49.4167 31.6777 49.2771 31.6199 49.1314 31.6199H45.8874V30.421H49.6224C50.3139 30.421 50.8794 30.9845 50.8794 31.6761V45.6726C50.4866 45.558 50.0858 45.4725 49.6805 45.4169ZM35.1194 30.0058C35.1194 29.9148 35.1555 29.8275 35.2199 29.7631C35.2842 29.6988 35.3715 29.6626 35.4625 29.6626H37.8798C38.1051 28.7266 38.9476 28.0293 39.9543 28.0293C40.9611 28.0293 41.8035 28.7266 42.0289 29.6626H44.4462C44.5372 29.6626 44.6245 29.6988 44.6888 29.7631C44.7532 29.8275 44.7893 29.9148 44.7893 30.0058V32.5842C44.7893 32.6752 44.7532 32.7625 44.6888 32.8268C44.6245 32.8912 44.5372 32.9273 44.4462 32.9273H35.4625C35.3715 32.9273 35.2842 32.8912 35.2198 32.8268C35.1555 32.7625 35.1194 32.6752 35.1194 32.5842V30.0058ZM39.9543 30.3446C40.2657 30.3446 40.5198 30.0905 40.5198 29.7792C40.5198 29.4696 40.2657 29.2156 39.9543 29.2156C39.6429 29.2156 39.3889 29.4696 39.3889 29.7792C39.3889 30.0905 39.6429 30.3446 39.9543 30.3446Z"
                />
                <defs>
                  <filter
                    id="filter0_d_295_2832"
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
                      result="effect1_dropShadow_295_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_295_2832"
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
                      result="effect1_dropShadow_295_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_295_2832"
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
                      result="effect1_dropShadow_295_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_295_2832"
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
                      result="effect1_dropShadow_295_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_295_2832"
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
                      result="effect1_dropShadow_295_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_295_2832"
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
                      result="effect1_dropShadow_295_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2832"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Requirement Analysis"
            description="We begin by thoroughly understanding your project goals and staffing needs to align our search with your exact requirements."
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
                <g filter="url(#filter0_d_295_2839)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_295_2839)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_295_2839)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_295_2839)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_295_2839)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_295_2839)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path d="M37.7748 45.9093C37.7748 44.1126 36.3131 42.6508 34.5163 42.6508C32.7196 42.6508 31.2578 44.1126 31.2578 45.9093C31.2578 47.706 32.7195 49.1677 34.5163 49.1677C36.3131 49.1677 37.7748 47.706 37.7748 45.9093ZM59.7409 45.9093C59.7409 44.1126 58.2792 42.6508 56.4824 42.6508C54.6857 42.6508 53.2239 44.1126 53.2239 45.9093C53.2239 47.706 54.6857 49.1677 56.4824 49.1677C58.2792 49.1677 59.7409 47.706 59.7409 45.9093ZM48.7579 43.1635C48.7579 41.3668 47.2962 39.905 45.4994 39.905C43.7027 39.905 42.2409 41.3668 42.2409 43.1635C42.2409 44.9602 43.7026 46.4219 45.4994 46.4219C47.2961 46.4219 48.7579 44.9602 48.7579 43.1635Z" />
                <path d="M28 55.6847V57.9541C28 58.5204 28.4591 58.9795 29.0254 58.9795H37.1087C36.9918 58.6503 36.9322 58.3035 36.9323 57.9541V52.9258C36.9392 51.8587 37.1416 50.8368 37.5045 49.894C36.609 49.4301 35.5931 49.1676 34.5169 49.1676C30.9464 49.1677 28.0229 52.0883 28 55.6847ZM56.4831 49.1677C55.4475 49.1669 54.427 49.4162 53.5083 49.8944C53.8694 50.8409 54.0678 51.8671 54.0678 52.939V57.9542C54.0679 58.3036 54.0082 58.6504 53.8914 58.9796H61.9746C62.5409 58.9796 63 58.5205 63 57.9542V55.6847C63 52.0912 60.0765 49.1677 56.4831 49.1677ZM45.5 46.4219C41.9295 46.4219 39.006 49.3425 38.9831 52.9389V57.9541C38.9831 58.5204 39.4422 58.9795 40.0085 58.9795H50.9916C51.5579 58.9795 52.017 58.5204 52.017 57.9541V52.9389C52.0169 49.3454 49.0934 46.4219 45.5 46.4219ZM44.7749 36.1639C44.9672 36.3562 45.228 36.4642 45.5 36.4642C45.7719 36.4642 46.0327 36.3562 46.225 36.1639L50.6183 31.7707C51.0187 31.3703 51.0187 30.721 50.6183 30.3205C50.2179 29.9202 49.5686 29.9202 49.1682 30.3205L45.5 33.9888L44.0285 32.5172C43.628 32.1167 42.9788 32.1168 42.5784 32.5172C42.1779 32.9176 42.1779 33.5669 42.5784 33.9673L44.7749 36.1639ZM32.1444 38.9097C32.5448 39.3101 33.1941 39.3101 33.5945 38.9097L34.517 37.9873L35.4394 38.9097C35.8398 39.3101 36.4891 39.3101 36.8895 38.9097C37.29 38.5093 37.29 37.86 36.8895 37.4596L35.9671 36.5372L36.8895 35.6147C37.29 35.2143 37.29 34.5651 36.8895 34.1646C36.4891 33.7642 35.8399 33.7642 35.4394 34.1646L34.517 35.087L33.5945 34.1647C33.1941 33.7643 32.5449 33.7643 32.1444 34.1647C31.744 34.5651 31.744 35.2143 32.1444 35.6148L33.0669 36.5372L32.1444 37.4596C31.744 37.86 31.744 38.5093 32.1444 38.9097ZM54.0813 38.9097C54.4817 39.3101 55.1309 39.3101 55.5314 38.9097L56.4538 37.9873L57.3763 38.9097C57.7767 39.3101 58.4259 39.3101 58.8264 38.9097C59.2268 38.5093 59.2268 37.86 58.8264 37.4596L57.9039 36.5372L58.8264 35.6147C59.2268 35.2143 59.2268 34.5651 58.8264 34.1646C58.426 33.7642 57.7767 33.7642 57.3763 34.1646L56.4538 35.087L55.5314 34.1646C55.131 33.7642 54.4817 33.7642 54.0813 34.1646C53.6808 34.565 53.6808 35.2143 54.0813 35.6147L55.0037 36.5372L54.0813 37.4596C53.6808 37.86 53.6808 38.5093 54.0813 38.9097Z" />
                <defs>
                  <filter
                    id="filter0_d_295_2839"
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
                      result="effect1_dropShadow_295_2839"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2839"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_295_2839"
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
                      result="effect1_dropShadow_295_2839"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2839"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_295_2839"
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
                      result="effect1_dropShadow_295_2839"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2839"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_295_2839"
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
                      result="effect1_dropShadow_295_2839"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2839"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_295_2839"
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
                      result="effect1_dropShadow_295_2839"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2839"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_295_2839"
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
                      result="effect1_dropShadow_295_2839"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_295_2839"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Candidate Sourcing"
            description="We access our extensive, pre-vetted talent pool to quickly find candidates that align with your specifications."
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
                <g filter="url(#filter0_d_299_2829)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter1_d_299_2829)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter2_d_299_2829)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter3_d_299_2829)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter4_d_299_2829)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M45.5003 28.7319C46.8027 28.7319 47.8586 29.7877 47.8586 31.0902C47.8586 32.3927 46.8027 33.4486 45.5003 33.4486C44.1978 33.4486 43.142 32.3928 43.142 31.0902C43.142 29.7877 44.1978 28.7319 45.5003 28.7319ZM50.759 58.6604H43.9206C43.9032 58.6605 43.8866 58.6674 43.8743 58.6797C43.862 58.6919 43.8551 58.7086 43.855 58.726V60.2027C43.855 60.2388 43.8844 60.2682 43.9206 60.2682H50.759C50.7951 60.2682 50.8245 60.2388 50.8245 60.2027V58.726C50.8245 58.7086 50.8176 58.6919 50.8053 58.6797C50.793 58.6674 50.7764 58.6605 50.759 58.6604ZM56.2742 42.2993C54.0076 42.3035 52.1546 44.159 52.1546 46.4265V47.3272C52.1546 47.3529 52.1683 47.3749 52.1914 47.3861C52.8213 47.6929 53.2298 48.3345 53.2298 49.0429C53.2298 49.5532 53.2256 50.0639 53.2101 50.574C53.2095 50.5924 53.2157 50.6085 53.2285 50.6217C53.2413 50.6349 53.2572 50.6416 53.2756 50.6416H60.3433C60.3794 50.6416 60.4088 50.6122 60.4088 50.5761V46.4265C60.4088 44.1562 58.5514 42.2993 56.2817 42.2993C56.2792 42.2994 56.2767 42.2994 56.2742 42.2993ZM41.3732 38.261V42.4106C41.3732 42.4468 41.4026 42.4762 41.4387 42.4762H42.4041C42.4214 42.4761 42.4381 42.4692 42.4503 42.457C42.4626 42.4447 42.4696 42.4281 42.4696 42.4108L42.4724 41.0013C42.4744 39.9877 43.3003 39.1605 44.3145 39.1605C45.329 39.1605 46.1566 39.9881 46.1566 41.0027V42.4107C46.1566 42.4468 46.186 42.4762 46.2222 42.4762H49.5618C49.5979 42.4762 49.6273 42.4468 49.6273 42.4107V38.2611C49.6273 35.9934 47.7834 34.1403 45.4927 34.134C43.2262 34.138 41.3732 35.9935 41.3732 38.261ZM38.4671 49.1763C36.673 47.9282 37.1555 46.1226 38.7275 45.7513C38.7439 45.7475 38.7582 45.7375 38.7674 45.7234C38.7766 45.7093 38.78 45.6922 38.777 45.6756C38.421 43.7578 36.7401 42.305 34.7113 42.2993C32.4448 42.3035 30.5918 44.159 30.5918 46.4265V50.5761C30.5918 50.6122 30.6212 50.6416 30.6573 50.6416H38.7804C38.8165 50.6416 38.8459 50.6122 38.8459 50.5761V49.4512C38.8461 49.4396 38.8431 49.4282 38.8373 49.4182C38.8315 49.4082 38.8231 49.3999 38.8129 49.3943C38.6945 49.3268 38.5791 49.2541 38.4671 49.1763ZM44.3625 57.4861C44.3467 57.4862 44.3315 57.4806 44.3196 57.4703C44.3076 57.46 44.2999 57.4457 44.2977 57.4301C44.2715 57.2487 44.2329 57.0692 44.182 56.8931C44.0169 56.3269 43.0484 54.9485 42.6769 54.3815C42.3647 53.9048 42.094 53.5299 42.0115 52.9482L41.8208 51.603C41.8206 51.602 41.8205 51.601 41.8203 51.6001L41.8193 51.5948C41.5686 50.2477 40.8415 49.2937 39.6136 48.7104C39.4098 48.6135 39.2104 48.5031 39.0251 48.3741C38.6792 48.1336 38.1439 47.6329 38.337 47.1512C38.4335 46.9103 38.6844 46.7708 38.9241 46.7091C39.397 46.5873 39.9331 46.7136 40.3687 46.9094L40.3715 46.9107L42.9992 48.2435C43.2003 48.3456 43.4369 48.2004 43.4371 47.9748L43.4495 41.0031C43.4505 40.5281 43.8389 40.1375 44.3145 40.1375C44.7896 40.1375 45.1795 40.5274 45.1795 41.0025V46.9807C45.1795 47.3813 45.8073 47.3813 45.8073 46.9807C45.8073 46.4892 46.1958 46.1033 46.6723 46.1033C47.1474 46.1033 47.5373 46.4932 47.5373 46.9683V48.0179C47.5373 48.4186 48.165 48.4186 48.165 48.0179C48.165 47.5264 48.5535 47.1406 49.03 47.1406C49.5052 47.1406 49.895 47.5304 49.895 48.0056V49.0552C49.895 49.4559 50.5228 49.4559 50.5228 49.0552C50.5228 48.5638 50.9113 48.1779 51.3878 48.1779C51.8625 48.1779 52.2528 48.5672 52.2528 49.0429C52.2528 51.943 52.135 54.4078 50.6074 56.9964C50.5239 57.1381 50.4542 57.2875 50.3993 57.4425C50.3949 57.4553 50.3866 57.4665 50.3755 57.4743C50.3644 57.4821 50.3512 57.4862 50.3376 57.4861H44.3625ZM34.7188 36.8974C36.0213 36.8974 37.0771 37.9532 37.0771 39.2557C37.0771 40.5582 36.0212 41.6141 34.7188 41.6141C33.4164 41.6141 32.3605 40.5582 32.3605 39.2557C32.3605 37.9532 33.4163 36.8974 34.7188 36.8974ZM56.2817 36.8974C57.5842 36.8974 58.64 37.9532 58.64 39.2557C58.64 40.5582 57.5842 41.6141 56.2817 41.6141C54.9793 41.6141 53.9234 40.5582 53.9234 39.2557C53.9234 37.9532 54.9792 36.8974 56.2817 36.8974Z"
                />
                <defs>
                  <filter
                    id="filter0_d_299_2829"
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
                      result="effect1_dropShadow_299_2829"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_299_2829"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_299_2829"
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
                      result="effect1_dropShadow_299_2829"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_299_2829"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_299_2829"
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
                      result="effect1_dropShadow_299_2829"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_299_2829"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_299_2829"
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
                      result="effect1_dropShadow_299_2829"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_299_2829"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_299_2829"
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
                      result="effect1_dropShadow_299_2829"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_299_2829"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Screening & Shortlisting"
            description="All candidates undergo detailed background checks, skill assessments, and interviews to ensure only the best are shortlisted."
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
                <g filter="url(#filter0_d_329_4496)">
                  <path d="M69.9347 76.2772C63.3296 81.5429 55.227 84.5824 46.7883 84.96C38.3495 85.3376 30.0078 83.0341 22.9588 78.3794L28.4509 70.0622C33.7435 73.557 40.0066 75.2866 46.3427 75.003C52.6787 74.7195 58.7623 72.4374 63.7216 68.4838L69.9347 76.2772Z" />
                </g>
                <g filter="url(#filter1_d_329_4496)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_329_4496)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_329_4496)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_329_4496)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M44.5624 58.7723V39.1426H51.484C52.7876 39.1426 53.8475 38.0828 53.8475 36.7793V35.8541H39.2385C35.8154 35.8541 33.0234 38.6547 33.0234 42.0777V47.8978C33.0234 49.0751 33.8979 50.0679 35.0332 50.236V40.8582C35.0332 40.6227 35.2268 40.4294 35.4623 40.4294C35.6978 40.4294 35.8914 40.6227 35.8914 40.8582V58.7724H37.3461C37.5818 58.7724 37.7753 58.9574 37.7753 59.2015C37.7753 59.4367 37.5817 59.6219 37.3461 59.6219H35.8914C35.2267 59.6219 34.6971 60.1602 34.6971 60.8163V61.2365C34.6971 61.4302 34.8566 61.5899 35.0502 61.5899H39.7937V52.1533C39.7937 51.9178 39.9872 51.7245 40.2224 51.7245C40.4581 51.7245 40.6513 51.9178 40.6513 52.1533V61.5899H45.3951C45.5966 61.5899 45.7567 61.4302 45.7567 61.2365V60.8163C45.7567 60.1602 45.2184 59.6219 44.5624 59.6219H43.0991C42.8634 59.6219 42.67 59.4367 42.67 59.2015C42.67 58.9574 42.8634 58.7724 43.0991 58.7724H44.5624V58.7723ZM52.0561 41.1443C53.4269 41.1443 54.6799 41.6069 55.6809 42.389L56.9507 40.8161C56.985 40.7718 57.0279 40.7348 57.0767 40.7074C57.1256 40.6799 57.1795 40.6626 57.2352 40.6563C57.2909 40.65 57.3472 40.655 57.401 40.6709C57.4547 40.6868 57.5047 40.7134 57.548 40.7489C57.7329 40.8917 57.758 41.1611 57.6152 41.3461L51.6773 48.7386L49.0452 46.1063C48.8854 45.9381 48.6078 45.9381 48.4478 46.1063C48.4078 46.146 48.3761 46.1932 48.3545 46.2451C48.3329 46.2971 48.3217 46.3528 48.3217 46.4091C48.3217 46.4654 48.3329 46.5212 48.3545 46.5731C48.3761 46.6251 48.4078 46.6723 48.4478 46.7119L51.4169 49.6806C51.5764 49.8491 51.8541 49.8491 52.0139 49.6806C52.0392 49.6638 52.0561 49.6469 52.0644 49.6219L56.8751 43.6252C57.5649 44.5924 57.9769 45.7784 57.9769 47.0651C57.9769 50.3281 55.3275 52.9775 52.0561 52.9775C48.7926 52.9775 46.1434 50.3281 46.1434 47.0651C46.1434 43.7936 48.7926 41.1443 52.0561 41.1443ZM40.2224 27.4099C42.1569 27.4099 43.7295 28.9827 43.7295 30.9172C43.7295 32.8517 42.1569 34.4244 40.2224 34.4244C38.2881 34.4244 36.7237 32.8517 36.7237 30.9172C36.7237 28.9827 38.2882 27.4099 40.2224 27.4099Z"
                />
                <defs>
                  <filter
                    id="filter0_d_329_4496"
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
                      result="effect1_dropShadow_329_4496"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_329_4496"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_329_4496"
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
                      result="effect1_dropShadow_329_4496"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_329_4496"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_329_4496"
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
                      result="effect1_dropShadow_329_4496"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_329_4496"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_329_4496"
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
                      result="effect1_dropShadow_329_4496"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_329_4496"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_329_4496"
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
                      result="effect1_dropShadow_329_4496"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_329_4496"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Client Approval"
            description="You have full control to review and approve from a pre-vetted selection of candidates, guaranteeing the perfect match for your needs."
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
                <g filter="url(#filter0_d_303_2832)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_303_2832)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_303_2832)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_303_2832)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_303_2832)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_303_2832)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <g clip-path="url(#clip0_303_2832)">
                  <path d="M58.2487 61.0746C58.3309 61.2318 58.556 61.2318 58.6421 61.0746L59.4712 59.5052H57.416L58.2487 61.0746ZM33.3675 29.477H51.7719C51.7024 29.0129 51.4686 28.5891 51.1131 28.2828C50.7576 27.9764 50.304 27.8078 49.8347 27.8075H30.6617C30.1413 27.8078 29.6423 28.0146 29.2743 28.3826C28.9063 28.7506 28.6995 29.2496 28.6992 29.7699V56.6923C28.6995 57.2127 28.9063 57.7117 29.2743 58.0797C29.6423 58.4476 30.1413 58.6545 30.6617 58.6547H30.69V32.1541C30.69 30.6778 31.8912 29.4766 33.3675 29.4766V29.477Z" />
                  <path d="M52.5383 30.192H33.366C33.1084 30.192 32.8533 30.2428 32.6152 30.3414C32.3772 30.44 32.1609 30.5845 31.9788 30.7667C31.7966 30.9489 31.6521 31.1652 31.5535 31.4033C31.455 31.6413 31.4043 31.8965 31.4043 32.1541V59.0761C31.4043 59.5964 31.611 60.0954 31.9789 60.4633C32.3468 60.8312 32.8458 61.0379 33.366 61.0379H52.5383C53.0586 61.0379 53.5576 60.8312 53.9255 60.4633C54.2934 60.0954 54.5001 59.5964 54.5001 59.0761V32.1541C54.5001 31.6338 54.2934 31.1348 53.9255 30.7669C53.5576 30.3991 53.0586 30.1924 52.5383 30.1924V30.192ZM42.9518 32.8548C46.0938 32.8548 48.6498 35.4109 48.6498 38.5528C48.6498 41.6948 46.0938 44.2508 42.9518 44.2508C39.8102 44.2508 37.2538 41.6948 37.2538 38.5528C37.2538 35.4109 39.8102 32.8548 42.9518 32.8548ZM34.597 46.5895H37.88C37.9748 46.5895 38.0658 46.6272 38.1328 46.6942C38.1999 46.7613 38.2375 46.8522 38.2375 46.947C38.2375 47.0419 38.1999 47.1328 38.1328 47.1999C38.0658 47.2669 37.9748 47.3046 37.88 47.3046H34.597C34.5022 47.3046 34.4112 47.2669 34.3442 47.1999C34.2771 47.1328 34.2395 47.0419 34.2395 46.947C34.2395 46.8522 34.2771 46.7613 34.3442 46.6942C34.4112 46.6272 34.5022 46.5895 34.597 46.5895ZM40.324 57.8501H34.5966C34.5019 57.8501 34.411 57.8124 34.344 57.7454C34.2769 57.6784 34.2393 57.5875 34.2393 57.4927C34.2393 57.3979 34.2769 57.307 34.344 57.24C34.411 57.173 34.5019 57.1354 34.5966 57.1354H40.3237C40.4185 57.1354 40.5094 57.173 40.5764 57.24C40.6434 57.307 40.681 57.3979 40.681 57.4927C40.681 57.5875 40.6434 57.6784 40.5764 57.7454C40.5094 57.8124 40.4188 57.8501 40.324 57.8501ZM51.3074 55.315H34.5966C34.5018 55.315 34.4109 55.2773 34.3438 55.2103C34.2768 55.1432 34.2391 55.0523 34.2391 54.9575C34.2391 54.8627 34.2768 54.7717 34.3438 54.7047C34.4109 54.6376 34.5018 54.6 34.5966 54.6H51.3074C51.4022 54.6 51.4932 54.6376 51.5602 54.7047C51.6273 54.7717 51.6649 54.8627 51.6649 54.9575C51.6649 55.0523 51.6273 55.1432 51.5602 55.2103C51.4932 55.2773 51.4022 55.315 51.3074 55.315ZM51.3074 52.7793H34.5966C34.5019 52.7793 34.411 52.7416 34.344 52.6746C34.2769 52.6076 34.2393 52.5167 34.2393 52.4219C34.2393 52.3271 34.2769 52.2362 34.344 52.1692C34.411 52.1022 34.5019 52.0646 34.5966 52.0646H51.3074C51.4022 52.0646 51.4931 52.1022 51.5601 52.1692C51.6271 52.2362 51.6647 52.3271 51.6647 52.4219C51.6647 52.5167 51.6271 52.6076 51.5601 52.6746C51.4931 52.7416 51.4022 52.7793 51.3074 52.7793ZM51.3074 50.2439H34.5966C34.5018 50.2439 34.4109 50.2062 34.3438 50.1392C34.2768 50.0721 34.2391 49.9812 34.2391 49.8863C34.2391 49.7915 34.2768 49.7006 34.3438 49.6335C34.4109 49.5665 34.5018 49.5288 34.5966 49.5288H51.3074C51.4022 49.5288 51.4932 49.5665 51.5602 49.6335C51.6273 49.7006 51.6649 49.7915 51.6649 49.8863C51.6649 49.9812 51.6273 50.0721 51.5602 50.1392C51.4932 50.2062 51.4022 50.2439 51.3074 50.2439ZM51.3074 47.3049H48.0254C47.9306 47.3049 47.8397 47.2672 47.7726 47.2002C47.7056 47.1332 47.6679 47.0422 47.6679 46.9474C47.6679 46.8526 47.7056 46.7616 47.7726 46.6946C47.8397 46.6275 47.9306 46.5899 48.0254 46.5899H51.3077C51.4026 46.5899 51.4935 46.6275 51.5606 46.6946C51.6276 46.7616 51.6653 46.8526 51.6653 46.9474C51.6653 47.0422 51.6276 47.1332 51.5606 47.2002C51.4935 47.2672 51.4022 47.3049 51.3074 47.3049Z" />
                  <path d="M42.9537 43.5351C45.6987 43.5351 47.9363 41.3011 47.9363 38.5522C47.9363 35.8033 45.6987 33.5696 42.9537 33.5696C40.2048 33.5696 37.9707 35.8036 37.9707 38.5522C37.9707 41.3007 40.2048 43.5351 42.9537 43.5351ZM41.1984 37.6551L42.253 37.505L42.7213 36.5505C42.7422 36.5072 42.7749 36.4706 42.8156 36.445C42.8564 36.4194 42.9036 36.4058 42.9517 36.4058C42.9999 36.4058 43.047 36.4194 43.0878 36.445C43.1286 36.4706 43.1613 36.5072 43.1822 36.5505L43.654 37.505L44.7051 37.6551C44.9158 37.6873 45.0019 37.9481 44.8479 38.0947L44.0901 38.8381L44.269 39.8857C44.277 39.9332 44.2716 39.982 44.2534 40.0266C44.2351 40.0712 44.2048 40.1098 44.1657 40.1381C44.1267 40.1663 44.0806 40.1831 44.0325 40.1865C43.9844 40.1899 43.9364 40.1798 43.8938 40.1573L42.9537 39.6638L42.0136 40.1573C41.9709 40.1799 41.9228 40.1901 41.8747 40.1867C41.8266 40.1834 41.7804 40.1666 41.7413 40.1383C41.7022 40.1101 41.6718 40.0714 41.6535 40.0268C41.6353 39.9821 41.6299 39.9332 41.638 39.8857L41.8169 38.8381L41.0556 38.0947C40.9016 37.9481 40.9877 37.6873 41.1984 37.6551ZM56.7115 58.1756L57.037 58.7906H59.8496L60.1751 58.1756C60.3946 57.7562 60.5202 57.294 60.5433 56.8211H56.3398C56.3657 57.294 56.4924 57.7558 56.7115 58.1756ZM61.1817 42.349H60.5552V42.0413C60.5552 41.4811 60.3326 40.9439 59.9365 40.5477C59.5404 40.1516 59.0031 39.9291 58.4429 39.9291C57.8827 39.9291 57.3454 40.1516 56.9493 40.5477C56.5532 40.9439 56.3307 41.4811 56.3307 42.0413V44.0654H60.5552V43.064H61.1817C61.4036 43.064 61.5842 43.2446 61.5842 43.4665V49.9678C61.5842 50.0626 61.6218 50.1534 61.6888 50.2205C61.7558 50.2875 61.8467 50.3251 61.9415 50.3251C62.0363 50.3251 62.1272 50.2875 62.1942 50.2205C62.2612 50.1534 62.2989 50.0626 62.2989 49.9678V43.4662C62.2985 43.17 62.1807 42.886 61.9712 42.6766C61.7618 42.4672 61.4778 42.3493 61.1817 42.349Z" />
                  <path d="M56.332 56.1061H60.5534V44.7791H56.3324L56.332 56.1061ZM57.3768 47.6305C57.3768 47.5357 57.4144 47.4448 57.4814 47.3778C57.5485 47.3108 57.6394 47.2732 57.7341 47.2732C57.8289 47.2732 57.9198 47.3108 57.9868 47.3778C58.0538 47.4448 58.0915 47.5357 58.0915 47.6305V48.0015C58.0915 48.0963 58.0538 48.1872 57.9868 48.2542C57.9198 48.3212 57.8289 48.3589 57.7341 48.3589C57.6394 48.3589 57.5485 48.3212 57.4814 48.2542C57.4144 48.1872 57.3768 48.0963 57.3768 48.0015V47.6305ZM57.3768 49.3116C57.3768 49.2168 57.4144 49.1259 57.4814 49.0589C57.5485 48.9919 57.6394 48.9542 57.7341 48.9542C57.8289 48.9542 57.9198 48.9919 57.9868 49.0589C58.0538 49.1259 58.0915 49.2168 58.0915 49.3116V51.4207C58.0915 51.5154 58.0538 51.6063 57.9868 51.6733C57.9198 51.7404 57.8289 51.778 57.7341 51.778C57.6394 51.778 57.5485 51.7404 57.4814 51.6733C57.4144 51.6063 57.3768 51.5154 57.3768 51.4207V49.3116Z" />
                </g>
                <defs>
                  <filter
                    id="filter0_d_303_2832"
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
                      result="effect1_dropShadow_303_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_303_2832"
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
                      result="effect1_dropShadow_303_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_303_2832"
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
                      result="effect1_dropShadow_303_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_303_2832"
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
                      result="effect1_dropShadow_303_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_303_2832"
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
                      result="effect1_dropShadow_303_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2832"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_303_2832"
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
                      result="effect1_dropShadow_303_2832"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2832"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_303_2832">
                    <rect
                      width="35"
                      height="35"
                      fill="white"
                      transform="translate(28 27)"
                    />
                  </clipPath>
                </defs>
              </svg>
            }
            title="Contract & Onboarding"
            description="We handle all contractual details and ensure a seamless onboarding process, so your new team members can start immediately."
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
                <g filter="url(#filter0_d_303_2841)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_303_2841)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_303_2841)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_303_2841)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_303_2841)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_303_2841)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path d="M58.625 29.1875H42.7656C42.1943 29.1792 41.643 29.3979 41.2328 29.7958C40.8227 30.1936 40.5872 30.738 40.5781 31.3094V36.8437H42.1641C42.8744 36.8449 43.5553 37.1276 44.0576 37.6299C44.5599 38.1322 44.8426 38.8131 44.8437 39.5234V39.6383C44.9039 39.6601 44.9641 39.6875 45.0242 39.7094C45.2707 39.4458 45.5674 39.2342 45.897 39.087C46.2265 38.9399 46.5821 38.8601 46.9429 38.8525C47.3037 38.8448 47.6623 38.9094 47.9978 39.0425C48.3332 39.1756 48.6387 39.3744 48.8961 39.6273C49.7148 40.5237 51.1585 41.5009 51.1438 42.8758H55.6719L58.0234 45.1289C58.9772 46.1258 60.8595 45.3914 60.8125 43.9969V31.3094C60.8034 30.738 60.568 30.1936 60.1578 29.7958C59.7476 29.3979 59.1964 29.1792 58.625 29.1875ZM50.6953 39.5781C50.5677 39.5781 50.4453 39.5274 50.355 39.4372C50.2648 39.3469 50.2141 39.2245 50.2141 39.0969C50.2141 38.9692 50.2648 38.8468 50.355 38.7566C50.4453 38.6663 50.5677 38.6156 50.6953 38.6156C50.8229 38.6156 50.9454 38.6663 51.0356 38.7566C51.1259 38.8468 51.1766 38.9692 51.1766 39.0969C51.1766 39.2245 51.1259 39.3469 51.0356 39.4372C50.9454 39.5274 50.8229 39.5781 50.6953 39.5781ZM51.9531 35.4328C51.7396 35.5563 51.5619 35.7331 51.4373 35.9459C51.3126 36.1587 51.2454 36.4003 51.2422 36.6469V37.1664C51.2422 37.3114 51.1846 37.4505 51.082 37.5531C50.9795 37.6557 50.8404 37.7133 50.6953 37.7133C50.5503 37.7133 50.4112 37.6557 50.3086 37.5531C50.2061 37.4505 50.1484 37.3114 50.1484 37.1664V36.6469C50.1501 36.2115 50.2655 35.7841 50.4833 35.4071C50.701 35.0301 51.0135 34.7166 51.3898 34.4976C51.645 34.3402 51.8425 34.1046 51.9529 33.8259C52.0633 33.5472 52.0808 33.2403 52.0028 32.9508C51.9247 32.6614 51.7553 32.4049 51.5197 32.2195C51.2842 32.0341 50.995 31.9297 50.6953 31.9219C50.5147 31.9229 50.336 31.9595 50.1695 32.0295C50.003 32.0996 49.852 32.2018 49.725 32.3303C49.598 32.4588 49.4976 32.6111 49.4295 32.7784C49.3614 32.9457 49.327 33.1248 49.3281 33.3055C49.3281 33.4505 49.2705 33.5896 49.1679 33.6922C49.0654 33.7947 48.9263 33.8523 48.7812 33.8523C48.6362 33.8523 48.4971 33.7947 48.3946 33.6922C48.292 33.5896 48.2344 33.4505 48.2344 33.3055C48.2333 32.872 48.3463 32.4458 48.562 32.0698C48.7777 31.6938 49.0884 31.3811 49.4632 31.1631C49.8379 30.9452 50.2633 30.8296 50.6968 30.8281C51.1303 30.8265 51.5566 30.939 51.9328 31.1543C52.3091 31.3695 52.6221 31.68 52.8405 32.0544C53.0589 32.4289 53.1749 32.8542 53.177 33.2877C53.1791 33.7212 53.067 34.1476 52.8522 34.5241C52.6374 34.9006 52.3273 35.214 51.9531 35.4328Z" />
                <path d="M50.4766 46.25C50.1375 46.2402 49.6109 46.3441 49.4812 45.9219C49.4309 45.5303 48.8212 44.9134 49.2188 44.5L49.5961 44.1227C49.7484 43.9653 49.8672 43.7787 49.9453 43.5741C50.0235 43.3696 50.0593 43.1513 50.0506 42.9324C50.0419 42.7136 49.9889 42.4989 49.8948 42.3011C49.8007 42.1034 49.6674 41.9268 49.5031 41.782L48.125 40.4039C47.8263 40.107 47.4223 39.9404 47.0012 39.9404C46.58 39.9404 46.176 40.107 45.8773 40.4039L45.5 40.7813C45.0877 41.1712 44.4719 40.5762 44.0727 40.5133C43.6559 40.393 43.7598 39.8483 43.75 39.5234C43.7497 39.1029 43.5825 38.6997 43.2852 38.4023C42.9878 38.105 42.5846 37.9378 42.1641 37.9375H40.0859C39.6654 37.9378 39.2622 38.105 38.9648 38.4023C38.6675 38.6997 38.5003 39.1029 38.5 39.5234C38.4907 39.8625 38.5941 40.3891 38.1719 40.5187C37.7847 40.568 37.1547 41.1805 36.75 40.7813L36.3727 40.4039C36.074 40.107 35.67 39.9404 35.2488 39.9404C34.8277 39.9404 34.4237 40.107 34.125 40.4039L32.6539 41.875C32.357 42.1737 32.1904 42.5777 32.1904 42.9988C32.1904 43.42 32.357 43.824 32.6539 44.1227L33.0312 44.5C33.1042 44.5721 33.1521 44.6658 33.1679 44.7672C33.1836 44.8686 33.1664 44.9724 33.1187 45.0633C32.8322 45.5101 32.8934 46.2019 32.3094 46.25H31.7734C31.3529 46.2503 30.9497 46.4175 30.6523 46.7148C30.355 47.0122 30.1878 47.4154 30.1875 47.8359V49.9141C30.1878 50.3346 30.355 50.7378 30.6523 51.0352C30.9497 51.3325 31.3529 51.4997 31.7734 51.5H32.3094C32.4105 51.5004 32.509 51.5322 32.5913 51.591C32.6736 51.6497 32.7356 51.7326 32.7688 51.8281C32.8185 52.2197 33.4294 52.836 33.0312 53.25L32.6539 53.6273C32.357 53.926 32.1904 54.33 32.1904 54.7512C32.1904 55.1723 32.357 55.5763 32.6539 55.875L34.125 57.3461C34.4237 57.643 34.8277 57.8096 35.2488 57.8096C35.67 57.8096 36.074 57.643 36.3727 57.3461L36.75 56.9688C37.1623 56.5783 37.7781 57.1738 38.1773 57.2367C38.5946 57.3565 38.4902 57.9012 38.5 58.2266C38.5003 58.6471 38.6675 59.0503 38.9648 59.3477C39.2622 59.645 39.6654 59.8122 40.0859 59.8125H42.1641C42.5846 59.8122 42.9878 59.645 43.2852 59.3477C43.5825 59.0503 43.7497 58.6471 43.75 58.2266C43.7598 57.8864 43.6559 57.3609 44.0781 57.2312C44.467 57.182 45.0915 56.569 45.5 56.9688L45.8773 57.3461C46.176 57.643 46.58 57.8096 47.0012 57.8096C47.4223 57.8096 47.8263 57.643 48.125 57.3461L49.5961 55.875C49.893 55.5763 50.0596 55.1723 50.0596 54.7512C50.0596 54.33 49.893 53.926 49.5961 53.6273L49.2188 53.25C49.1458 53.1779 49.0979 53.0842 49.0821 52.9828C49.0664 52.8814 49.0836 52.7776 49.1313 52.6867C49.4178 52.2399 49.3577 51.5476 49.9406 51.5H50.4766C50.8971 51.4997 51.3003 51.3325 51.5977 51.0352C51.895 50.7378 52.0622 50.3346 52.0625 49.9141V47.8359C52.0622 47.4154 51.895 47.0122 51.5977 46.7148C51.3003 46.4175 50.8971 46.2503 50.4766 46.25ZM41.125 54.8906C39.5298 54.8898 38.0002 54.2557 36.8723 53.1277C35.7443 51.9998 35.1102 50.4702 35.1094 48.875C35.4364 40.8939 46.8152 40.8961 47.1406 48.875C47.1398 50.4702 46.5057 51.9998 45.3777 53.1277C44.2498 54.2557 42.7202 54.8898 41.125 54.8906Z" />
                <path d="M41.125 43.9531C39.8202 43.955 38.5694 44.4742 37.6468 45.3968C36.7242 46.3194 36.205 47.5702 36.2031 48.875C36.4793 55.4047 45.7723 55.403 46.0469 48.875C46.045 47.5702 45.5258 46.3194 44.6032 45.3968C43.6806 44.4742 42.4298 43.955 41.125 43.9531ZM41.125 52.1562C40.255 52.1555 39.4208 51.8096 38.8056 51.1944C38.1904 50.5792 37.8445 49.745 37.8438 48.875C37.9969 44.5317 44.2542 44.5328 44.4062 48.875C44.4055 49.745 44.0596 50.5792 43.4444 51.1944C42.8292 51.8096 41.995 52.1555 41.125 52.1562Z" />
                <path d="M41.125 46.6875C40.5448 46.6875 39.9884 46.918 39.5782 47.3282C39.168 47.7384 38.9375 48.2948 38.9375 48.875C38.9375 49.4552 39.168 50.0116 39.5782 50.4218C39.9884 50.832 40.5448 51.0625 41.125 51.0625C41.7052 51.0625 42.2616 50.832 42.6718 50.4218C43.082 50.0116 43.3125 49.4552 43.3125 48.875C43.3125 48.2948 43.082 47.7384 42.6718 47.3282C42.2616 46.918 41.7052 46.6875 41.125 46.6875Z" />
                <defs>
                  <filter
                    id="filter0_d_303_2841"
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
                      result="effect1_dropShadow_303_2841"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2841"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_303_2841"
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
                      result="effect1_dropShadow_303_2841"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2841"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_303_2841"
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
                      result="effect1_dropShadow_303_2841"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2841"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_303_2841"
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
                      result="effect1_dropShadow_303_2841"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2841"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_303_2841"
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
                      result="effect1_dropShadow_303_2841"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2841"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_303_2841"
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
                      result="effect1_dropShadow_303_2841"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2841"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Ongoing Support"
            description="We provide continuous management of payroll, legal compliance, and performance tracking to ensure smooth contract staffing operations."
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
                <g filter="url(#filter0_d_303_2847)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_303_2847)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_303_2847)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter3_d_303_2847)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter4_d_303_2847)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_303_2847)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32.7083 45.049C32.4732 45.8193 31.7563 46.3803 30.9096 46.3803C29.8718 46.3803 29.0293 45.5378 29.0293 44.5C29.0293 43.4622 29.8718 42.6198 30.9096 42.6198C31.7563 42.6198 32.4732 43.1807 32.7083 43.951H35.2174C35.4935 38.7046 39.7044 34.4936 44.9509 34.2175V31.7085C44.1806 31.4733 43.6196 30.7565 43.6196 29.9097C43.6196 28.872 44.4621 28.0294 45.4999 28.0294C46.5377 28.0294 47.3801 28.872 47.3801 29.9097C47.3801 30.7565 46.8192 31.4733 46.0489 31.7085V34.2175C51.2953 34.4936 55.5062 38.7046 55.7824 43.951H58.2914C58.5266 43.1807 59.2434 42.6198 60.0902 42.6198C61.1279 42.6198 61.9705 43.4622 61.9705 44.5C61.9705 45.5378 61.1279 46.3803 60.0902 46.3803C59.2434 46.3803 58.5266 45.8193 58.2914 45.049H55.7824C55.5062 50.2955 51.2953 54.5064 46.0489 54.7825V57.2915C46.8192 57.5267 47.3801 58.2435 47.3801 59.0903C47.3801 60.1281 46.5377 60.9706 45.4999 60.9706C44.4621 60.9706 43.6196 60.1281 43.6196 59.0903C43.6196 58.2435 44.1806 57.5267 44.9509 57.2915V54.7825C39.7044 54.5064 35.4935 50.2955 35.2174 45.049H32.7083ZM42.3513 50.0325C42.3397 50.0823 42.3395 50.1342 42.3508 50.1842C42.362 50.2341 42.3844 50.2809 42.4162 50.321C42.4481 50.3611 42.4886 50.3935 42.5347 50.4157C42.5808 50.438 42.6313 50.4495 42.6825 50.4495C43.8406 50.4526 47.1596 50.4526 48.3175 50.4526C48.3692 50.4526 48.4202 50.4409 48.4667 50.4185C48.5132 50.396 48.554 50.3634 48.5862 50.3229C48.6183 50.2825 48.6409 50.2353 48.6523 50.1849C48.6636 50.1345 48.6635 50.0822 48.6518 50.0319C48.3038 48.614 47.0251 47.5608 45.4999 47.5608C43.9755 47.5608 42.6969 48.6139 42.3513 50.0325ZM40.8239 44.4002C41.727 44.4002 42.4625 43.6639 42.4625 42.7615C42.4625 41.8592 41.727 41.1229 40.8239 41.1229C39.9216 41.1229 39.1861 41.8592 39.1861 42.7615C39.1861 43.6639 39.9216 44.4002 40.8239 44.4002ZM47.8146 41.382C47.2265 40.7819 46.4068 40.4095 45.4999 40.4095C44.5935 40.4095 43.7741 40.7818 43.186 41.3819C43.4317 41.8001 43.561 42.2765 43.5605 42.7615C43.5606 42.9428 43.5427 43.1236 43.5069 43.3014H47.4937C47.458 43.1236 47.4401 42.9428 47.4401 42.7615C47.4401 42.2591 47.5767 41.7875 47.8146 41.382ZM45.4999 39.7233C46.403 39.7233 47.1385 38.9869 47.1385 38.0846C47.1385 37.1823 46.403 36.446 45.4999 36.446C44.5976 36.446 43.8621 37.1823 43.8621 38.0846C43.8621 38.9869 44.5976 39.7233 45.4999 39.7233ZM47.2917 46.8489C47.8688 47.1114 48.3816 47.4968 48.7942 47.9783H52.9935C53.0452 47.9782 53.0961 47.9665 53.1426 47.9441C53.1891 47.9216 53.23 47.8889 53.2621 47.8485C53.2942 47.8081 53.3168 47.7609 53.3282 47.7105C53.3396 47.6602 53.3394 47.6079 53.3278 47.5576C52.9799 46.1397 51.7012 45.0864 50.1759 45.0864C48.919 45.0864 47.8292 45.8024 47.2917 46.8489ZM42.2062 47.9783C42.6188 47.4969 43.1315 47.1115 43.7086 46.8489C43.1714 45.8025 42.0815 45.0864 40.8239 45.0864C39.2995 45.0864 38.0209 46.1396 37.6753 47.5581C37.6637 47.608 37.6635 47.6598 37.6747 47.7098C37.6859 47.7597 37.7083 47.8065 37.7401 47.8466C37.772 47.8867 37.8125 47.9191 37.8586 47.9414C37.9047 47.9636 37.9553 47.9752 38.0065 47.9752C39.13 47.9783 42.2062 47.9783 42.2062 47.9783ZM50.1759 44.4002C51.079 44.4002 51.8146 43.6639 51.8146 42.7615C51.8146 41.8592 51.079 41.1229 50.1759 41.1229C49.2736 41.1229 48.5382 41.8592 48.5382 42.7615C48.5382 43.6639 49.2736 44.4002 50.1759 44.4002ZM45.4999 46.8745C46.403 46.8745 47.1385 46.1382 47.1385 45.2359C47.1385 44.3337 46.403 43.5973 45.4999 43.5973C44.5976 43.5973 43.8621 44.3337 43.8621 45.2359C43.8621 46.1382 44.5976 46.8745 45.4999 46.8745ZM33.2633 57.5129C33.478 57.868 33.5911 58.2751 33.5906 58.69C33.5906 59.9487 32.5686 60.9706 31.3099 60.9706C30.0512 60.9706 29.0293 59.9487 29.0293 58.69C29.0293 57.4313 30.0512 56.4093 31.3099 56.4093C31.7248 56.4087 32.1319 56.5219 32.487 56.7366L35.66 53.5634C35.8743 53.3492 36.2222 53.3492 36.4365 53.5634C36.6507 53.7777 36.6507 54.1256 36.4365 54.3399L33.2633 57.5129ZM58.5128 32.2635L55.3398 35.4366C55.1255 35.6508 54.7776 35.6508 54.5633 35.4366C54.3491 35.2223 54.3491 34.8744 54.5633 34.6601L57.7364 31.4871C57.5218 31.132 57.4086 30.7249 57.4092 30.31C57.4092 29.0514 58.4312 28.0294 59.6898 28.0294C60.9485 28.0294 61.9705 29.0514 61.9705 30.31C61.9705 31.5687 60.9485 32.5907 59.6898 32.5907C59.275 32.5913 58.8679 32.4781 58.5128 32.2635ZM57.7364 57.5129L54.5633 54.3399C54.3491 54.1256 54.3491 53.7777 54.5633 53.5634C54.7776 53.3492 55.1255 53.3492 55.3398 53.5634L58.5128 56.7366C58.8679 56.5219 59.275 56.4087 59.6898 56.4093C60.9485 56.4093 61.9705 57.4313 61.9705 58.69C61.9705 59.9487 60.9485 60.9706 59.6898 60.9706C58.4312 60.9706 57.4092 59.9487 57.4092 58.69C57.4086 58.2751 57.5218 57.868 57.7364 57.5129ZM32.487 32.2635C32.1319 32.4781 31.7248 32.5913 31.3099 32.5907C30.0512 32.5907 29.0293 31.5687 29.0293 30.31C29.0293 29.0514 30.0512 28.0294 31.3099 28.0294C32.5686 28.0294 33.5906 29.0514 33.5906 30.31C33.5911 30.7249 33.478 31.132 33.2633 31.4871L36.4365 34.6601C36.6507 34.8744 36.6507 35.2223 36.4365 35.4366C36.2222 35.6508 35.8743 35.6508 35.66 35.4366L32.487 32.2635Z"
                />
                <defs>
                  <filter
                    id="filter0_d_303_2847"
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
                      result="effect1_dropShadow_303_2847"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2847"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_303_2847"
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
                      result="effect1_dropShadow_303_2847"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2847"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_303_2847"
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
                      result="effect1_dropShadow_303_2847"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2847"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_303_2847"
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
                      result="effect1_dropShadow_303_2847"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2847"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_303_2847"
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
                      result="effect1_dropShadow_303_2847"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2847"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_303_2847"
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
                      result="effect1_dropShadow_303_2847"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2847"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Talent Pool Access"
            description="Gain instant access to a vast network of pre-vetted, skilled professionals tailored to meet your project and industry needs."
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
                <g filter="url(#filter0_d_303_2853)">
                  <circle cx="45" cy="45" r="40" fill="#FBFBFB" />
                </g>
                <g filter="url(#filter1_d_303_2853)">
                  <path d="M20.477 13.399C27.1504 8.22027 35.2921 5.28714 43.7351 5.02001C52.178 4.75288 60.4888 7.16547 67.4763 11.912L61.8758 20.1566C56.6294 16.5928 50.3894 14.7814 44.0502 14.9819C37.7111 15.1825 31.5981 17.3848 26.5875 21.2731L20.477 13.399Z" />
                </g>
                <g filter="url(#filter2_d_303_2853)">
                  <path d="M76.2374 20.0155C81.5136 26.6122 84.566 34.7099 84.9571 43.1481C85.3482 51.5862 83.0579 59.9315 78.4145 66.988L70.0885 61.5092C73.5749 56.211 75.2945 49.9451 75.0009 43.6095C74.7072 37.274 72.4154 31.194 68.4539 26.241L76.2374 20.0155Z" />
                </g>
                <g filter="url(#filter3_d_303_2853)">
                  <path d="M13.3048 69.4011C8.15177 62.7077 5.25002 54.5548 5.01543 46.1109C4.78083 37.667 7.22543 29.3655 11.9989 22.3964L20.2219 28.0286C16.6378 33.2612 14.8024 39.4942 14.9785 45.8341C15.1546 52.174 17.3334 58.2954 21.2024 63.321L13.3048 69.4011Z" />
                </g>
                <g filter="url(#filter4_d_303_2853)">
                  <path d="M68.694 77.2273C61.8882 82.2309 53.6731 84.9516 45.2261 84.9994C36.779 85.0471 28.5337 82.4195 21.6718 77.493L27.4846 69.3966C32.6367 73.0955 38.8275 75.0684 45.1697 75.0326C51.512 74.9967 57.6801 72.954 62.7901 69.1971L68.694 77.2273Z" />
                </g>
                <g filter="url(#filter5_d_303_2853)">
                  <circle cx="45" cy="45" r="30" fill="#FBFBFB" />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M60.9412 34.5278C61.2762 34.0643 61.1729 33.4135 60.7095 33.0772L59.319 32.0696C59.0955 31.9075 58.8221 31.8426 58.5486 31.8864C58.2725 31.9301 58.0318 32.0771 57.8705 32.3006L57.2621 33.1407L60.3301 35.3679L60.9412 34.5278ZM48.078 48.4751L48.5627 43.8308C48.5702 43.7576 48.5969 43.69 48.6386 43.6325L55.0076 34.8504C54.419 33.9221 53.4032 33.354 52.2992 33.354H33.0362C31.2671 33.354 29.8281 34.793 29.8281 36.5614V48.6631C29.8281 50.4322 31.2671 51.8712 33.0362 51.8712H36.2013C36.4275 51.8712 36.6114 52.0551 36.6114 52.2814V56.9155L41.614 51.9895C41.6906 51.9138 41.7941 51.8715 41.9018 51.8719H52.2992C54.0684 51.8719 55.5073 50.4329 55.5073 48.6638V43.2169L52.8912 46.7244L52.8905 46.7238C52.8528 46.7752 52.8033 46.8169 52.7463 46.8454L48.67 48.8846C48.6119 48.9133 48.549 48.9283 48.4861 48.9283C48.4041 48.9283 48.3228 48.9037 48.253 48.8552C48.1926 48.8132 48.1445 48.7558 48.1137 48.689C48.083 48.6222 48.0706 48.5483 48.078 48.4751ZM34.2592 45.8877H45.5016C45.7278 45.8877 45.9117 46.0716 45.9117 46.2979C45.9117 46.5248 45.7278 46.708 45.5016 46.708H34.2592C34.0322 46.708 33.849 46.5248 33.849 46.2979C33.849 46.0709 34.0322 45.8877 34.2592 45.8877ZM46.5522 42.5989H34.2592C34.0322 42.5989 33.849 42.4151 33.849 42.1888C33.849 41.9618 34.0322 41.7786 34.2592 41.7786H46.5522C46.7785 41.7786 46.9624 41.9618 46.9624 42.1888C46.9624 42.4157 46.7785 42.5989 46.5522 42.5989ZM49.8123 38.4892H34.2592C34.0322 38.4892 33.849 38.306 33.849 38.079C33.849 37.8528 34.0322 37.6689 34.2592 37.6689H49.8123C50.0393 37.6689 50.2225 37.8528 50.2225 38.079C50.2225 38.306 50.0393 38.4892 49.8123 38.4892ZM51.7749 46.4141L48.9715 47.8161L49.3051 44.6224L51.7749 46.4141ZM59.844 36.0289L52.4756 45.9089L49.5437 43.7822L56.7788 33.8052L59.844 36.0289ZM57.4631 36.0932C57.6477 36.2258 57.6866 36.4822 57.5526 36.666L53.0361 42.8949C52.9981 42.9475 52.9482 42.9903 52.8904 43.0197C52.8327 43.0492 52.7688 43.0645 52.7039 43.0645C52.6205 43.0645 52.5357 43.0392 52.4633 42.9865C52.2801 42.8532 52.2391 42.5969 52.3724 42.4137L56.8902 36.1848C57.0222 36.0009 57.2785 35.9599 57.4631 36.0932Z"
                />
                <defs>
                  <filter
                    id="filter0_d_303_2853"
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
                      result="effect1_dropShadow_303_2853"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2853"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_d_303_2853"
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
                      result="effect1_dropShadow_303_2853"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2853"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_303_2853"
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
                      result="effect1_dropShadow_303_2853"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2853"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_303_2853"
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
                      result="effect1_dropShadow_303_2853"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2853"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter4_d_303_2853"
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
                      result="effect1_dropShadow_303_2853"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2853"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter5_d_303_2853"
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
                      result="effect1_dropShadow_303_2853"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_303_2853"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Feedback & Adjustment"
            description="We gather client and candidate feedback regularly to make necessary adjustments, ensuring satisfaction on both sides."
            stepNo="08"
          />
        </div>
      </div>
    </section>
  );
};

export default ContractStaffingProcess;
