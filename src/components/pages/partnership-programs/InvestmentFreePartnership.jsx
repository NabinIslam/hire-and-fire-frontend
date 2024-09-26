import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";

const InvestmentFreePartnership = () => {
  return (
    <section className="pt-[100px]">
      <div className="container">
        <div className="flex items-center justify-center">
          <span className="rounded-full border-2 border-primary px-5 py-3 text-2xl font-medium text-primary">
            Investment-Free Partnership
          </span>
        </div>
        <div className="mx-auto max-w-[700px]">
          <h2 className="mb-10 mt-5 text-center text-4xl font-semibold lg:text-5xl">
            Become a Business Partner Without Investment Money
          </h2>
        </div>
      </div>

      <div className="bg-partnership-bg bg-cover bg-center bg-no-repeat py-[70px] text-white">
        <FadeInUpWithSlowBounce>
          <div className="container">
            {/* column */}

            <div className="grid basis-full grid-cols-1 gap-10 lg:basis-2/3 lg:grid-cols-2 lg:gap-x-14 xl:grid-cols-3">
              <div className="flex gap-2">
                <div className="basis-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1374 24.505C21.5275 26.0546 22.5681 27.4042 23.2591 28.6173C25.8516 33.1694 22.1635 37.7929 17.2242 37.7097C12.2849 37.7929 8.59687 33.1694 11.1894 28.6173C11.8803 27.4042 12.9209 26.0546 14.311 24.505C14.5191 24.5785 14.7383 24.6161 14.959 24.6159H19.4894C19.7164 24.6159 19.9345 24.5767 20.1374 24.505ZM14.9591 23.6784H19.4895C20.048 23.6784 20.5049 23.2214 20.5049 22.663C20.5049 22.1044 20.048 21.6475 19.4895 21.6475H14.9591C14.4005 21.6475 13.9436 22.1044 13.9436 22.6629C13.9436 23.2215 14.4005 23.6784 14.9591 23.6784ZM22.6996 22.6613C22.4178 22.6613 22.1879 22.8912 22.1879 23.1731V25.455C22.8851 26.3146 23.541 27.2181 24.0737 28.1534C25.1556 30.0531 25.3924 32.2567 24.4955 34.2778C24.4287 34.4279 24.3566 34.5755 24.2793 34.7203H25.5508V23.1731C25.5508 22.8912 25.3209 22.6613 25.039 22.6613H22.6996ZM33.998 22.9736L33.902 24.4C33.8979 24.4608 33.9271 24.5149 33.98 24.5449C34.033 24.5749 34.0945 24.572 34.1444 24.5373L37.8216 21.9805C37.8409 21.9674 37.857 21.9501 37.8684 21.9298C37.8799 21.9094 37.8864 21.8867 37.8876 21.8634C37.8894 21.8401 37.8858 21.8168 37.877 21.7952C37.8682 21.7735 37.8545 21.7543 37.8369 21.7389L34.5323 18.7557C34.4873 18.715 34.427 18.7044 34.3708 18.7272C34.3146 18.75 34.2787 18.7995 34.2746 18.8601L34.1752 20.3385C31.4991 20.2658 27.8326 19.1743 25.4892 17.7749C22.9051 16.2318 21.2096 14.3955 20.0167 12.2893C20.8112 15.4893 23.1712 18.6558 26.6956 20.7604C29.0677 22.1769 31.6132 22.901 33.998 22.9736ZM39.1514 35.6578H23.6769C23.3131 36.1339 22.8918 36.5577 22.4263 36.9256H39.1514C39.4328 36.9256 39.6623 36.6961 39.6623 36.4147V36.1687C39.6623 35.8873 39.4328 35.6578 39.1514 35.6578ZM37.5282 29.5713H35.1887C34.9069 29.5713 34.677 29.8012 34.677 30.0831V34.7203H38.0399V30.0831C38.0399 29.8012 37.81 29.5713 37.5282 29.5713ZM28.9441 26.191H31.2837C31.5656 26.191 31.7954 26.4209 31.7954 26.7028V34.7203H28.4324V26.7028C28.4324 26.4209 28.6622 26.191 28.9441 26.191ZM17.1721 32.9343C16.867 32.9264 16.5707 32.8437 16.3345 32.6864C16.1208 32.5441 15.9575 32.3358 15.8893 32.0623C15.8589 31.9451 15.7835 31.8446 15.6796 31.7825C15.5756 31.7205 15.4513 31.7019 15.3337 31.7308C15.2161 31.7598 15.1146 31.8338 15.0513 31.937C14.9879 32.0402 14.9678 32.1642 14.9952 32.2822C15.124 32.7988 15.4286 33.1895 15.8262 33.4543C16.0978 33.6352 16.4132 33.7548 16.7435 33.813V34.1713C16.7435 34.2319 16.7555 34.2919 16.7787 34.3479C16.8018 34.4038 16.8358 34.4547 16.8787 34.4976C16.9216 34.5404 16.9724 34.5744 17.0284 34.5976C17.0844 34.6208 17.1444 34.6327 17.205 34.6327C17.2656 34.6327 17.3256 34.6208 17.3816 34.5976C17.4376 34.5744 17.4885 34.5404 17.5313 34.4975C17.5742 34.4547 17.6082 34.4038 17.6314 34.3478C17.6546 34.2918 17.6665 34.2318 17.6665 34.1712V33.8217C18.0679 33.7606 18.4768 33.6141 18.7979 33.3705C19.1837 33.0777 19.4404 32.6584 19.427 32.0959C19.426 32.0392 19.4223 31.9827 19.4159 31.9264C19.3411 31.3099 19.0075 30.9086 18.5653 30.6416C18.1768 30.407 17.711 30.2902 17.2839 30.2201C16.9759 30.1695 16.6514 30.0839 16.4138 29.9288C16.2297 29.8086 16.0976 29.6346 16.0853 29.3801C16.0719 29.1048 16.1921 28.8826 16.3815 28.7287C16.5298 28.6081 16.7191 28.5243 16.9242 28.483C17.0077 28.4663 17.0924 28.4567 17.1775 28.4545C17.1977 28.4557 17.2179 28.4556 17.238 28.4542C17.3514 28.4558 17.4657 28.4704 17.5772 28.4986C17.9203 28.5856 18.2327 28.8117 18.3971 29.2034C18.4206 29.2593 18.4548 29.31 18.4978 29.3527C18.5409 29.3953 18.5919 29.4291 18.648 29.452C18.704 29.4749 18.7641 29.4866 18.8247 29.4863C18.8853 29.4861 18.9452 29.4739 19.0011 29.4504C19.0569 29.427 19.1077 29.3928 19.1503 29.3497C19.1929 29.3067 19.2267 29.2557 19.2496 29.1996C19.2726 29.1435 19.2842 29.0835 19.284 29.0229C19.2837 28.9623 19.2715 28.9024 19.248 28.8465C18.9584 28.1567 18.407 27.7581 17.8008 27.6044C17.7563 27.5931 17.7115 27.5832 17.6665 27.5747V27.2171C17.6665 26.9622 17.4599 26.7556 17.205 26.7556C16.9501 26.7556 16.7435 26.9622 16.7435 27.2171V27.5816C16.3939 27.6521 16.0655 27.7997 15.801 28.0148C15.3946 28.3452 15.1368 28.825 15.1659 29.4233C15.1951 30.0245 15.495 30.4277 15.9126 30.7003C16.2766 30.9379 16.7238 31.0609 17.1361 31.1286C17.4673 31.183 17.8208 31.2689 18.0894 31.4311C18.3043 31.5608 18.4656 31.7503 18.5001 32.0344C18.5047 32.0723 18.5071 32.0998 18.5076 32.1174C18.5129 32.3432 18.4049 32.5153 18.2426 32.6384C18.0395 32.7926 17.7543 32.8834 17.469 32.9181C17.4016 32.9267 17.3338 32.932 17.2659 32.9342L17.244 32.9346C17.231 32.9335 17.218 32.933 17.2049 32.9329C17.1939 32.9331 17.183 32.9335 17.1721 32.9343ZM14.8183 20.7151L14.088 19.985C13.6822 19.5791 13.6822 18.915 14.088 18.5092C14.4332 18.164 14.9797 18.1057 15.3904 18.3693C15.543 18.4673 15.7182 18.4829 15.8856 18.4136C16.053 18.3442 16.1659 18.2093 16.2046 18.0322C16.3068 17.5637 16.7262 17.2102 17.2243 17.2101C17.7133 17.2101 18.1398 17.5548 18.244 18.0322C18.2827 18.2093 18.3955 18.3442 18.5629 18.4136C18.7304 18.483 18.9056 18.4673 19.0581 18.3693C19.4616 18.1104 20.0082 18.1571 20.3604 18.5092V18.5092C20.7662 18.915 20.7662 19.5791 20.3604 19.985L19.6301 20.7151C19.5833 20.7117 19.5363 20.71 19.4893 20.71H14.9591C14.9118 20.71 14.8648 20.7118 14.8183 20.7151Z"
                      fill="#FBFBFB"
                    />
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      stroke="#FBFBFB"
                      strokeDasharray="2 2"
                    />
                  </svg>
                </div>
                <div className="basis-full space-y-3">
                  <h6 className="mt-1 text-2xl font-medium">Zero-Cost Entry</h6>
                  <p className="text-sm">
                    Join our partnership program without any initial investment,
                    and start benefiting from collaborative opportunities and
                    shared resources immediately.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="basis-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      stroke="#FBFBFB"
                      strokeDasharray="2 2"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.4415 16.1008C21.4415 18.2455 19.7029 19.9841 17.5583 19.9841C15.4137 19.9841 13.675 18.2455 13.675 16.1009C13.675 13.9562 15.4136 12.2177 17.5583 12.2177V16.1009L21.4415 16.1008ZM35.1691 31.2067C37.3194 31.2067 39.0625 32.9498 39.0625 35.1001C39.0625 37.2504 37.3194 38.9935 35.1691 38.9935C33.0188 38.9935 31.2757 37.2503 31.2757 35.1001C31.2757 32.9499 33.0188 31.2067 35.1691 31.2067ZM16.393 25.8916L22.1533 21.4063L27.8757 23.261C27.9577 23.2873 28.0454 23.2905 28.1291 23.2701C28.2128 23.2498 28.2892 23.2067 28.35 23.1456L33.3606 18.0922L33.2935 18.6919C33.2812 18.8146 33.3178 18.9373 33.3954 19.0331C33.4729 19.129 33.5852 19.1904 33.7078 19.2039C33.8304 19.2174 33.9534 19.182 34.05 19.1053C34.1466 19.0287 34.209 18.917 34.2237 18.7945L34.4368 16.8886C34.4882 16.5899 34.2404 16.3156 33.9346 16.342L31.9956 16.512C31.9343 16.5173 31.8746 16.5346 31.82 16.563C31.7654 16.5913 31.7169 16.6301 31.6773 16.6772C31.6377 16.7243 31.6077 16.7788 31.5891 16.8374C31.5706 16.8961 31.5637 16.9579 31.569 17.0192C31.5743 17.0805 31.5916 17.1402 31.6199 17.1948C31.6483 17.2494 31.6871 17.2979 31.7342 17.3376C31.7813 17.3772 31.8358 17.4071 31.8944 17.4257C31.9531 17.4443 32.0149 17.4511 32.0762 17.4458L32.743 17.3873L27.889 22.2828L22.2048 20.4408C22.1323 20.4175 22.0552 20.4123 21.9802 20.4257C21.9052 20.439 21.8346 20.4705 21.7746 20.5175L15.8181 25.1555C15.7205 25.2318 15.6572 25.3436 15.6421 25.4666C15.627 25.5895 15.6613 25.7134 15.7375 25.811C15.8138 25.9086 15.9257 25.972 16.0486 25.9871C16.1715 26.0022 16.2954 25.9679 16.393 25.8916ZM24.6563 14.2499C24.7806 14.2499 24.8998 14.2993 24.9877 14.3872C25.0757 14.4751 25.125 14.5944 25.125 14.7187C25.125 14.843 25.0757 14.9622 24.9877 15.0501C24.8998 15.138 24.7806 15.1874 24.6563 15.1874H23.7184C23.5941 15.1874 23.4749 15.138 23.387 15.0501C23.2991 14.9622 23.2497 14.843 23.2497 14.7187C23.2497 14.5944 23.2991 14.4751 23.387 14.3872C23.4749 14.2993 23.5941 14.2499 23.7184 14.2499H24.6563ZM33.9048 11.6467C34.0292 11.6467 34.1484 11.6961 34.2363 11.784C34.3242 11.8719 34.3736 11.9912 34.3736 12.1155C34.3736 12.2398 34.3242 12.359 34.2363 12.4469C34.1484 12.5348 34.0292 12.5842 33.9048 12.5842H26.6068C26.4824 12.5842 26.3632 12.5348 26.2753 12.4469C26.1874 12.359 26.138 12.2398 26.138 12.1155C26.138 11.9912 26.1874 11.8719 26.2753 11.784C26.3632 11.6961 26.4824 11.6467 26.6068 11.6467H33.9048ZM24.6563 11.6467C24.7806 11.6467 24.8998 11.6961 24.9877 11.784C25.0757 11.8719 25.125 11.9912 25.125 12.1155C25.125 12.2398 25.0757 12.359 24.9877 12.4469C24.8998 12.5348 24.7806 12.5842 24.6563 12.5842H23.7184C23.5941 12.5842 23.4749 12.5348 23.387 12.4469C23.2991 12.359 23.2497 12.2398 23.2497 12.1155C23.2497 11.9912 23.2991 11.8719 23.387 11.784C23.4749 11.6961 23.5941 11.6467 23.7184 11.6467H24.6563ZM33.9048 14.2499C34.0292 14.2499 34.1484 14.2993 34.2363 14.3872C34.3242 14.4751 34.3736 14.5944 34.3736 14.7187C34.3736 14.843 34.3242 14.9622 34.2363 15.0501C34.1484 15.138 34.0292 15.1874 33.9048 15.1874H26.6068C26.4824 15.1874 26.3632 15.138 26.2753 15.0501C26.1874 14.9622 26.138 14.843 26.138 14.7187C26.138 14.5944 26.1874 14.4751 26.2753 14.3872C26.3632 14.2993 26.4824 14.2499 26.6068 14.2499H33.9048ZM22.6527 14.8897C22.6527 12.7451 20.9141 11.0065 18.7694 11.0065V14.8897H22.6527ZM12.372 37.2156V12.9748H10.9375V38.6501H31.8931C31.4512 38.2424 31.089 37.7559 30.8251 37.2156H12.372ZM14.9704 28.847H17.2407C17.4989 28.847 17.7095 29.0576 17.7095 29.3158V34.6455C17.7095 34.9036 17.4989 35.1142 17.2407 35.1142H14.9704C14.7122 35.1142 14.5016 34.9036 14.5016 34.6455V29.3158C14.5017 29.0576 14.7122 28.847 14.9704 28.847ZM32.8397 20.6675H35.1101C35.3682 20.6675 35.5788 20.8781 35.5788 21.1362V30.2867C35.4426 30.2751 35.3059 30.2693 35.1691 30.2692C34.1262 30.2692 33.1605 30.5997 32.371 31.1617V21.1362C32.371 20.8781 32.5815 20.6675 32.8397 20.6675ZM26.8833 26.2124H29.1537C29.4119 26.2124 29.6225 26.423 29.6225 26.6812V34.6454C29.6225 34.9036 29.4119 35.1143 29.1537 35.1143H26.8833C26.6251 35.1143 26.4145 34.9036 26.4146 34.6454V26.6812C26.4146 26.423 26.6251 26.2124 26.8833 26.2124ZM20.9269 24.8754H23.1972C23.4554 24.8754 23.6659 25.086 23.6659 25.3441V34.6455C23.6659 34.9036 23.4554 35.1142 23.1972 35.1142H20.9269C20.6687 35.1142 20.4581 34.9036 20.4581 34.6455V25.3441C20.4582 25.086 20.6687 24.8754 20.9269 24.8754ZM36.7475 33.7361C36.525 33.2062 36.1029 32.898 35.6379 32.7767V32.6364C35.6379 32.512 35.5885 32.3928 35.5006 32.3049C35.4127 32.217 35.2934 32.1676 35.1691 32.1676C35.0448 32.1676 34.9256 32.217 34.8377 32.3049C34.7498 32.3928 34.7004 32.512 34.7004 32.6364V32.7831C34.0403 32.9609 33.5484 33.4932 33.583 34.2063C33.6245 35.0617 34.3479 35.4244 35.0976 35.5475C35.397 35.5967 35.9015 35.6975 35.9463 36.0665C35.948 36.0803 35.951 36.0981 35.951 36.112C35.9579 36.3998 35.5644 36.5081 35.3396 36.5354C35.2862 36.5419 35.2426 36.5455 35.209 36.5463C34.8607 36.5546 34.4665 36.4059 34.3742 36.0358C34.343 35.9171 34.2663 35.8155 34.1608 35.7528C34.0553 35.6901 33.9294 35.6714 33.8103 35.7007C33.6911 35.73 33.5882 35.805 33.5238 35.9095C33.4594 36.0139 33.4387 36.1395 33.466 36.2591C33.619 36.8729 34.0998 37.282 34.7004 37.4249V37.5639C34.7004 37.6882 34.7498 37.8074 34.8377 37.8953C34.9256 37.9832 35.0448 38.0326 35.1691 38.0326C35.2934 38.0326 35.4127 37.9832 35.5006 37.8953C35.5885 37.8074 35.6379 37.6882 35.6379 37.5639V37.4344C36.3139 37.2927 36.9027 36.84 36.8847 36.09C36.8841 36.0454 36.8813 36.0009 36.8764 35.9566C36.7704 35.0825 36.0205 34.7515 35.2478 34.6247C34.9932 34.5829 34.5327 34.488 34.5169 34.1624C34.5033 33.8811 34.7512 33.7214 34.9979 33.6718C35.3601 33.5988 35.7341 33.7434 35.8833 34.0987C35.9065 34.1562 35.9409 34.2086 35.9846 34.2528C36.0282 34.2969 36.0802 34.332 36.1375 34.3558C36.1948 34.3797 36.2563 34.392 36.3184 34.3919C36.3804 34.3918 36.4419 34.3794 36.4991 34.3554C36.5564 34.3314 36.6083 34.2963 36.6518 34.252C36.6954 34.2078 36.7297 34.1553 36.7528 34.0977C36.7759 34.0401 36.7873 33.9784 36.7864 33.9164C36.7855 33.8543 36.7723 33.793 36.7475 33.7361Z"
                      fill="#FBFBFB"
                    />
                  </svg>
                </div>
                <div className="basis-full space-y-3">
                  <h6 className="mt-1 text-2xl font-medium">
                    Profit Sharing Opportunities
                  </h6>
                  <p className="text-sm">
                    Partner with us to share in the profits, leveraging mutual
                    success to enhance revenue and drive growth together.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="basis-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      stroke="#FBFBFB"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M15.7678 30.6543C15.7678 30.199 15.3991 29.8303 14.9438 29.8303H10.824C10.3687 29.8303 10 30.199 10 30.6543V37.301C10 37.7563 10.3687 38.125 10.824 38.125H14.9438C15.3991 38.125 15.7678 37.7563 15.7678 37.301V30.6543ZM22.4145 24.8865H18.2947C17.8394 24.8865 17.4707 25.2552 17.4707 25.7104V37.301C17.4707 37.7563 17.8394 38.125 18.2947 38.125H22.4145C22.8698 38.125 23.2385 37.7563 23.2385 37.301V25.7104C23.2385 25.2552 22.8698 24.8865 22.4145 24.8865ZM29.8303 23.2385H25.7104C25.2552 23.2385 24.8865 23.6072 24.8865 24.0625V37.301C24.8865 37.7563 25.2552 38.125 25.7104 38.125H29.8303C30.2856 38.125 30.6543 37.7563 30.6543 37.301V24.0625C30.6543 23.6072 30.2856 23.2385 29.8303 23.2385ZM37.301 16.6467H33.1811C32.7259 16.6467 32.3572 17.0154 32.3572 17.4707V37.301C32.3572 37.7563 32.7259 38.125 33.1811 38.125H37.301C37.7563 38.125 38.125 37.7563 38.125 37.301V17.4707C38.125 17.0154 37.7563 16.6467 37.301 16.6467Z"
                      fill="#FBFBFB"
                    />
                    <path
                      d="M12.9387 28.1274C14.3017 28.1274 15.4106 27.0185 15.4106 25.6555C15.4106 25.4239 15.3685 25.2044 15.3087 24.9918L18.5191 22.7256C18.9221 23.0118 19.4117 23.1836 19.9425 23.1836C21.1931 23.1836 22.2186 22.247 22.3811 21.0402L25.6684 20.3481C26.1036 21.0574 26.8791 21.5356 27.7703 21.5356C29.1333 21.5356 30.2422 20.4267 30.2422 19.0637C30.2422 18.7341 30.1745 18.4207 30.0572 18.133L34.0007 14.6277C34.3543 14.8228 34.7543 14.9438 35.186 14.9438C36.549 14.9438 37.6579 13.8349 37.6579 12.4719C37.6579 11.1089 36.549 10 35.186 10C33.823 10 32.7141 11.1089 32.7141 12.4719C32.7141 12.8015 32.7818 13.115 32.8991 13.4027L28.9556 16.908C28.6019 16.7128 28.202 16.5918 27.7703 16.5918C26.5197 16.5918 25.4942 17.5284 25.3316 18.7351L22.0443 19.4273C21.6092 18.718 20.8336 18.2397 19.9425 18.2397C18.5795 18.2397 17.4706 19.3487 17.4706 20.7117C17.4706 20.9433 17.5128 21.1628 17.5725 21.3753L14.3622 23.6416C13.9591 23.3554 13.4695 23.1836 12.9387 23.1836C11.5757 23.1836 10.4668 24.2925 10.4668 25.6555C10.4668 27.0185 11.5757 28.1274 12.9387 28.1274Z"
                      fill="#FBFBFB"
                    />
                  </svg>
                </div>
                <div className="basis-full space-y-3">
                  <h6 className="mt-1 text-2xl font-medium">
                    Growth Through Expertise
                  </h6>
                  <p className="text-sm">
                    Utilize our expertise to accelerate business growth, improve
                    performance, and achieve your strategic goals effectively.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="basis-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      stroke="#FBFBFB"
                      strokeDasharray="2 2"
                    />
                    <path
                      d="M18.334 20.4798H20.2728V26.7921H18.334V20.4798ZM22.5513 17.9274H24.4901V26.7921H22.5513V17.9274Z"
                      fill="#FBFBFB"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M26.7694 26.7921H27.7597C27.4082 25.9605 27.3107 25.0434 27.4796 24.1565C27.6486 23.2695 28.0763 22.4525 28.7089 21.8083V19.2168H26.7694V26.7921ZM32.9258 20.5429V16.0469H30.987V20.5469C31.6256 20.4079 32.2865 20.4064 32.9258 20.5425V20.5429ZM13.6406 32.1977L17.9845 39.0625L20.299 37.5977C18.8511 35.3093 17.4031 33.021 15.9551 30.7328L13.6406 32.1977ZM17.5335 31.7961L20.5218 36.5182L20.898 36.2988C20.9747 36.2504 21.066 36.2309 21.1558 36.2437L26.7906 37.0577C27.3431 37.1463 27.9088 37.0228 28.3741 36.712C28.3741 36.712 35.2725 32.7294 35.9007 32.3667C36.1194 32.2248 36.2551 32.0925 36.3272 31.8321C36.3581 31.7243 36.3674 31.6115 36.3546 31.5001C36.3417 31.3887 36.3069 31.281 36.2522 31.1831C36.1975 31.0852 36.124 30.9992 36.0358 30.9298C35.9477 30.8605 35.8467 30.8093 35.7387 30.7792C35.5093 30.7175 35.265 30.7447 35.0548 30.8554L30.5109 33.2097C30.5602 33.8894 30.1564 34.4836 29.5441 34.7887C29.3634 34.8809 29.1661 34.9358 28.9637 34.9502C28.7614 34.9646 28.5582 34.9382 28.3663 34.8725L23.8325 33.3541C23.7363 33.3219 23.6568 33.2527 23.6116 33.1619C23.5663 33.0711 23.559 32.9661 23.5912 32.8698C23.6234 32.7736 23.6925 32.6941 23.7833 32.6489C23.8741 32.6036 23.9792 32.5963 24.0754 32.6285L28.6093 34.1468C28.7061 34.1795 28.8085 34.1924 28.9104 34.1847C29.0123 34.177 29.1117 34.1489 29.2025 34.102C29.4227 33.9845 29.6008 33.8015 29.7122 33.5782C29.7763 33.3625 29.7545 33.1304 29.6514 32.9304C29.5483 32.7305 29.3719 32.5781 29.1591 32.5051L22.9526 30.4265C22.4703 30.2567 21.9441 30.2594 21.4635 30.4341L17.5335 31.7961Z"
                      fill="#FBFBFB"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M34.6545 22.3225C34.0328 21.7008 33.2146 21.3139 32.3396 21.2278C31.4645 21.1416 30.5867 21.3616 29.8556 21.8501C29.1245 22.3386 28.5855 23.0656 28.3303 23.907C28.0751 24.7484 28.1195 25.6523 28.4561 26.4647C28.7926 27.277 29.4004 27.9475 30.1759 28.3619C30.9513 28.7764 31.8465 28.9091 32.7089 28.7375C33.5713 28.566 34.3475 28.1007 34.9053 27.4209C35.463 26.7412 35.7679 25.8891 35.7678 25.0098C35.7684 24.5106 35.6704 24.0162 35.4794 23.5551C35.2883 23.0939 35.008 22.675 34.6545 22.3225ZM33.4123 24.0338C33.4123 24.1356 33.3719 24.2332 33.2999 24.3052C33.228 24.3772 33.1303 24.4176 33.0286 24.4176C32.9268 24.4176 32.8291 24.3772 32.7572 24.3052C32.6852 24.2332 32.6448 24.1356 32.6448 24.0338C32.6476 23.9169 32.6126 23.8021 32.5451 23.7066C32.4775 23.6111 32.381 23.5399 32.2698 23.5036C32.0743 23.4346 31.861 23.4346 31.6655 23.5036C31.5543 23.5399 31.4578 23.6111 31.3902 23.7066C31.3227 23.8021 31.2877 23.9169 31.2905 24.0338C31.2905 24.467 31.6686 24.5494 32.047 24.6321C32.7295 24.781 33.4128 24.9301 33.4128 25.9856C33.4128 26.637 33.0273 27.0535 32.5339 27.2354C32.4743 27.2573 32.4135 27.2756 32.3517 27.2903V27.5536C32.3517 27.6554 32.3113 27.753 32.2393 27.825C32.1674 27.8969 32.0697 27.9374 31.9679 27.9374C31.8662 27.9374 31.7685 27.8969 31.6966 27.825C31.6246 27.753 31.5842 27.6554 31.5842 27.5536V27.2903C31.5224 27.2757 31.4616 27.2573 31.402 27.2354C30.9086 27.0537 30.5231 26.637 30.5231 25.9856C30.5231 25.8838 30.5635 25.7862 30.6355 25.7142C30.7075 25.6422 30.8051 25.6018 30.9069 25.6018C31.0087 25.6018 31.1063 25.6422 31.1783 25.7142C31.2502 25.7862 31.2907 25.8838 31.2907 25.9856C31.2878 26.1025 31.3228 26.2173 31.3904 26.3128C31.4579 26.4083 31.5545 26.4795 31.6657 26.5158C31.8612 26.5848 32.0744 26.5848 32.2699 26.5158C32.3811 26.4795 32.4776 26.4083 32.5452 26.3128C32.6127 26.2173 32.6477 26.1025 32.6449 25.9856C32.6449 25.5473 32.2645 25.4641 31.8847 25.3815C31.2033 25.2328 30.5226 25.0842 30.5226 24.0338C30.5226 23.3825 30.9082 22.9659 31.4015 22.784C31.4611 22.7621 31.5219 22.7438 31.5837 22.7291V22.4658C31.5837 22.364 31.6241 22.2664 31.6961 22.1944C31.7681 22.1224 31.8657 22.082 31.9675 22.082C32.0693 22.082 32.1669 22.1224 32.2389 22.1944C32.3108 22.2664 32.3513 22.364 32.3513 22.4658V22.7291C32.413 22.7438 32.4739 22.7621 32.5334 22.784C33.0266 22.9659 33.4122 23.3828 33.4122 24.0338H33.4123ZM31.3062 11.7009C31.2562 11.696 31.2077 11.6813 31.1634 11.6576C31.119 11.6339 31.0798 11.6017 31.0479 11.5629C31.016 11.524 30.9921 11.4793 30.9775 11.4312C30.9629 11.3831 30.958 11.3326 30.9629 11.2826C30.9678 11.2326 30.9825 11.184 31.0062 11.1397C31.0299 11.0954 31.0621 11.0561 31.101 11.0243C31.1398 10.9924 31.1846 10.9685 31.2326 10.9539C31.2807 10.9393 31.3312 10.9343 31.3812 10.9392L33.3962 11.137C33.4487 11.1403 33.5 11.1543 33.5468 11.1783C33.5936 11.2023 33.635 11.2357 33.6684 11.2763C33.7018 11.317 33.7264 11.3641 33.7407 11.4148C33.7551 11.4654 33.7588 11.5184 33.7518 11.5706L33.554 13.5851C33.5491 13.6352 33.5344 13.6837 33.5107 13.728C33.487 13.7724 33.4548 13.8116 33.416 13.8435C33.3771 13.8754 33.3324 13.8993 33.2843 13.9139C33.2362 13.9285 33.1857 13.9334 33.1357 13.9285C33.0857 13.9236 33.0371 13.9089 32.9928 13.8852C32.9485 13.8615 32.9092 13.8293 32.8774 13.7905C32.8455 13.7516 32.8215 13.7069 32.807 13.6588C32.7924 13.6107 32.7874 13.5602 32.7923 13.5102L32.9052 12.36L29.0035 15.3537C29.0786 15.5488 29.1076 15.7587 29.088 15.9669C29.0685 16.1751 29.001 16.3759 28.8909 16.5537C28.7807 16.7314 28.6309 16.8812 28.4532 16.9914C28.2755 17.1016 28.0746 17.169 27.8664 17.1886C27.6582 17.2081 27.4484 17.1792 27.2532 17.1041C27.0581 17.0289 26.883 16.9096 26.7417 16.7554C26.6004 16.6013 26.4967 16.4165 26.4388 16.2156C26.3808 16.0147 26.3702 15.8031 26.4078 15.5974L24.5093 14.6398C24.2952 14.8678 24.0088 15.0147 23.6987 15.0555C23.3886 15.0962 23.0739 15.0284 22.8082 14.8635L20.4789 16.9441C20.6409 17.2261 20.6958 17.5571 20.6337 17.8763C20.5715 18.1956 20.3965 18.4817 20.1405 18.6824C19.8846 18.8831 19.5649 18.9849 19.24 18.9691C18.9152 18.9533 18.6069 18.821 18.3716 18.5964C18.1364 18.3718 17.9899 18.07 17.959 17.7462C17.9281 17.4224 18.0149 17.0984 18.2035 16.8334C18.3921 16.5684 18.6698 16.3802 18.9858 16.3033C19.3018 16.2264 19.635 16.2659 19.9242 16.4146L22.2989 14.2935C22.2075 14.1007 22.1629 13.889 22.1688 13.6757C22.1748 13.4624 22.2311 13.2535 22.3331 13.0661C22.4351 12.8787 22.5799 12.718 22.7558 12.5972C22.9317 12.4764 23.1337 12.3989 23.3453 12.371C23.5568 12.3431 23.772 12.3656 23.9732 12.4366C24.1744 12.5076 24.356 12.6252 24.5031 12.7798C24.6502 12.9343 24.7587 13.1215 24.8198 13.3259C24.8808 13.5304 24.8927 13.7464 24.8544 13.9563L26.7529 14.9139C26.9787 14.6733 27.2847 14.5234 27.6132 14.4925C27.9418 14.4616 28.2703 14.5518 28.5371 14.7461L32.3704 11.8052L31.3062 11.7009ZM27.7398 15.2542C27.6238 15.2543 27.5105 15.2886 27.4141 15.3531C27.3176 15.4175 27.2425 15.5091 27.1981 15.6162C27.1538 15.7233 27.1422 15.8412 27.1648 15.9549C27.1874 16.0687 27.2433 16.1731 27.3253 16.2551C27.4073 16.3371 27.5117 16.3929 27.6255 16.4156C27.7392 16.4382 27.8571 16.4266 27.9642 16.3822C28.0713 16.3378 28.1629 16.2627 28.2273 16.1662C28.2917 16.0698 28.3261 15.9565 28.3261 15.8405C28.3262 15.7635 28.311 15.6873 28.2816 15.6161C28.2521 15.5449 28.2089 15.4803 28.1545 15.4258C28.1 15.3714 28.0354 15.3282 27.9642 15.2988C27.893 15.2693 27.8168 15.2542 27.7398 15.2542ZM23.5224 13.1269C23.4065 13.1269 23.2931 13.1613 23.1967 13.2257C23.1003 13.2901 23.0252 13.3817 22.9808 13.4888C22.9364 13.596 22.9248 13.7139 22.9475 13.8276C22.9701 13.9413 23.0259 14.0458 23.1079 14.1278C23.1899 14.2097 23.2944 14.2656 23.4081 14.2882C23.5218 14.3108 23.6397 14.2992 23.7469 14.2548C23.854 14.2104 23.9455 14.1353 24.01 14.0389C24.0744 13.9425 24.1088 13.8291 24.1088 13.7132C24.1088 13.6362 24.0937 13.5599 24.0642 13.4887C24.0348 13.4176 23.9916 13.3529 23.9371 13.2985C23.8827 13.244 23.818 13.2008 23.7469 13.1714C23.6757 13.1419 23.5994 13.1268 23.5224 13.1269ZM19.3051 17.0326C19.1891 17.0325 19.0758 17.0669 18.9793 17.1313C18.8829 17.1958 18.8078 17.2873 18.7634 17.3944C18.719 17.5016 18.7074 17.6195 18.73 17.7332C18.7526 17.8469 18.8084 17.9514 18.8904 18.0334C18.9724 18.1154 19.0769 18.1712 19.1906 18.1939C19.3043 18.2165 19.4222 18.2049 19.5294 18.1605C19.6365 18.1161 19.7281 18.041 19.7925 17.9446C19.8569 17.8482 19.8913 17.7348 19.8913 17.6188C19.8914 17.5418 19.8762 17.4656 19.8468 17.3944C19.8173 17.3233 19.7742 17.2586 19.7197 17.2042C19.6653 17.1497 19.6006 17.1066 19.5295 17.0771C19.4583 17.0477 19.3821 17.0325 19.3051 17.0326ZM15.4792 27.6128C15.4198 27.6163 15.3603 27.6077 15.3044 27.5875C15.2484 27.5672 15.1972 27.5358 15.1538 27.4951C15.1104 27.4543 15.0758 27.4052 15.052 27.3506C15.0282 27.2961 15.0159 27.2373 15.0156 27.1778C15.0154 27.1183 15.0273 27.0593 15.0506 27.0046C15.0739 26.9498 15.1081 26.9004 15.1512 26.8593C15.1942 26.8183 15.2452 26.7864 15.301 26.7657C15.3568 26.745 15.4162 26.7359 15.4756 26.739L27.7041 26.6523C27.8218 26.9578 27.9721 27.2497 28.1524 27.5229L15.4792 27.6128Z"
                      fill="#FBFBFB"
                    />
                  </svg>
                </div>
                <div className="basis-full space-y-3">
                  <h6 className="mt-1 text-2xl font-medium">
                    No Financial Risk
                  </h6>
                  <p className="text-sm">
                    Partner without any financial commitment, eliminating risk
                    while exploring new business growth opportunities.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="basis-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      stroke="#FBFBFB"
                      strokeDasharray="2 2"
                    />
                    <g clipPath="url(#clip0_1_2491)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.4858 29.3775C16.8286 29.7058 16.0872 29.8905 15.3025 29.8905C12.6013 29.8905 10.4121 27.7013 10.4121 25.0001C10.4121 22.2989 12.6013 20.1097 15.3025 20.1097C16.0872 20.1097 16.8286 20.2944 17.4858 20.6227L20.623 17.4855C20.2946 16.8284 20.1099 16.0869 20.1099 15.3023C20.1099 12.6011 22.2992 10.4119 25.0003 10.4119C27.7015 10.4119 29.8908 12.6011 29.8908 15.3023C29.8908 16.0869 29.7061 16.8284 29.3777 17.4855L32.5149 20.6227C33.1721 20.2944 33.9135 20.1097 34.6982 20.1097C37.3993 20.1097 39.5886 22.2989 39.5886 25.0001C39.5886 27.7013 37.3993 29.8905 34.6982 29.8905C33.9135 29.8905 33.1721 29.7058 32.5149 29.3775L29.3777 32.5147C29.7061 33.1718 29.8908 33.9133 29.8908 34.6979C29.8908 37.3991 27.7015 39.5883 25.0003 39.5883C22.2992 39.5883 20.1099 37.3991 20.1099 34.6979C20.1099 33.9133 20.2946 33.1718 20.623 32.5147L17.4858 29.3775ZM37.5892 27.6907C38.2458 26.9856 38.6474 26.0398 38.6474 25.0001C38.6474 22.8187 36.8795 21.0509 34.6982 21.0509C32.5168 21.0509 30.7489 22.8187 30.7489 25.0001C30.7489 26.0398 31.1506 26.9856 31.8072 27.6907C32.2451 26.5192 33.3745 25.6847 34.6982 25.6847C36.0218 25.6847 37.1512 26.5192 37.5892 27.6907ZM34.6982 25.4268C33.8394 25.4268 33.1373 24.7246 33.1373 23.8659C33.1373 23.0072 33.8394 22.305 34.6982 22.305C35.5569 22.305 36.2591 23.0072 36.2591 23.8659C36.2591 24.7246 35.5569 25.4268 34.6982 25.4268ZM18.3022 21.1373C19.4528 22.032 20.1929 23.4295 20.1929 25.0001C20.1929 26.5707 19.4528 27.9682 18.3022 28.8629L21.1375 31.6982C22.0323 30.5476 23.4298 29.8075 25.0003 29.8075C26.5709 29.8075 27.9684 30.5476 28.8632 31.6982L31.6985 28.8629C30.5479 27.9682 29.8078 26.5707 29.8078 25.0001C29.8078 23.4295 30.5479 22.032 31.6985 21.1373L28.8632 18.302C27.9684 19.4526 26.5709 20.1927 25.0003 20.1927C23.4298 20.1927 22.0323 19.4526 21.1375 18.302L18.3022 21.1373ZM25.0003 28.4263C23.1145 28.4263 21.5741 26.8882 21.5741 25.0001C21.5741 23.1143 23.1145 21.5739 25.0003 21.5739C26.8885 21.5739 28.4266 23.1143 28.4266 25.0001C28.4266 26.8882 26.8885 28.4263 25.0003 28.4263ZM23.0581 25.4296L23.9975 26.369C24.083 26.4544 24.198 26.5038 24.3188 26.5067C24.4396 26.5096 24.557 26.466 24.6465 26.3848L26.9283 24.3148C27.0207 24.2309 27.076 24.1138 27.0821 23.9891C27.0882 23.8645 27.0445 23.7425 26.9607 23.65C26.8768 23.5577 26.7597 23.5024 26.635 23.4963C26.5104 23.4902 26.3884 23.5339 26.2959 23.6177L24.3461 25.3866L23.7236 24.764C23.5399 24.5804 23.2418 24.5804 23.0581 24.764C22.8745 24.9477 22.8745 25.2459 23.0581 25.4296ZM27.8913 37.3886C28.5479 36.6834 28.9496 35.7376 28.9496 34.6979C28.9496 32.5166 27.1817 30.7487 25.0003 30.7487C22.819 30.7487 21.0511 32.5166 21.0511 34.6979C21.0511 35.7376 21.4528 36.6834 22.1093 37.3886C22.5473 36.217 23.6767 35.3826 25.0003 35.3826C26.324 35.3826 27.4534 36.217 27.8913 37.3886ZM25.0003 35.1246C24.1416 35.1246 23.4395 34.4225 23.4395 33.5637C23.4395 32.705 24.1416 32.0028 25.0003 32.0028C25.8591 32.0028 26.5612 32.705 26.5612 33.5637C26.5612 34.4225 25.8591 35.1246 25.0003 35.1246ZM18.1935 27.6907C18.8501 26.9856 19.2518 26.0398 19.2518 25.0001C19.2518 22.8187 17.4839 21.0509 15.3025 21.0509C13.1212 21.0509 11.3533 22.8187 11.3533 25.0001C11.3533 26.0398 11.7549 26.9856 12.4115 27.6907C12.8495 26.5192 13.9789 25.6847 15.3025 25.6847C16.6262 25.6847 17.7556 26.5192 18.1935 27.6907ZM15.3025 25.4268C14.4438 25.4268 13.7416 24.7246 13.7416 23.8659C13.7416 23.0072 14.4438 22.305 15.3025 22.305C16.1613 22.305 16.8634 23.0072 16.8634 23.8659C16.8634 24.7246 16.1613 25.4268 15.3025 25.4268ZM27.8913 17.9929C28.5479 17.2877 28.9496 16.342 28.9496 15.3023C28.9496 13.1209 27.1817 11.353 25.0003 11.353C22.819 11.353 21.0511 13.1209 21.0511 15.3023C21.0511 16.342 21.4528 17.2877 22.1093 17.9929C22.5473 16.8213 23.6767 15.9869 25.0003 15.9869C26.324 15.9869 27.4534 16.8213 27.8913 17.9929ZM25.0003 15.729C24.1416 15.729 23.4395 15.0268 23.4395 14.168C23.4395 13.3093 24.1416 12.6072 25.0003 12.6072C25.8591 12.6072 26.5612 13.3093 26.5612 14.168C26.5612 15.0268 25.8591 15.729 25.0003 15.729Z"
                        fill="#FBFBFB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2491">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(10 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="basis-full space-y-3">
                  <h6 className="mt-1 text-2xl font-medium">
                    Shared Resources
                  </h6>
                  <p className="text-sm">
                    Benefit from access to joint tools, technologies, and
                    expertise to enhance your operations and achieve mutual
                    success.
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <div className="basis-8">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="25"
                      cy="25"
                      r="24.5"
                      stroke="#FBFBFB"
                      strokeDasharray="2 2"
                    />
                    <g clipPath="url(#clip0_1_2511)">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20.6403 23.4298C19.6137 21.116 17.457 19.4202 14.9163 19.0184L15.003 19.8609C15.0162 19.9891 14.9586 20.1059 14.8491 20.1738C14.7396 20.2416 14.6094 20.2409 14.5005 20.1721C13.3449 19.4404 12.1908 18.7097 11.0358 17.9784C10.9479 17.9226 10.8954 17.838 10.8847 17.7344C10.8741 17.6309 10.9082 17.5373 10.9829 17.4648L13.9285 14.6118C14.0211 14.5221 14.1483 14.4949 14.2695 14.5391C14.3905 14.5832 14.4706 14.6859 14.4838 14.8141L14.6064 16.0059C18.1905 16.2986 21.3457 18.4361 23.0049 21.5322C22.0454 21.9239 21.2247 22.589 20.6403 23.4298ZM23.4574 21.3711V14.7036H22.1122C21.9333 14.7036 21.8363 14.4946 21.9522 14.3581L24.8405 10.9562C24.8602 10.9331 24.8847 10.9145 24.9124 10.9017C24.94 10.8889 24.97 10.8823 25.0004 10.8823C25.0309 10.8823 25.0609 10.8889 25.0885 10.9017C25.1161 10.9145 25.1406 10.9331 25.1603 10.9562L28.0487 14.3581C28.1646 14.4946 28.0676 14.7036 27.8888 14.7036H26.5436V21.3708C26.0434 21.2185 25.5233 21.1413 25.0005 21.1417C24.4776 21.1413 23.9576 21.2186 23.4574 21.3711ZM26.9962 21.5317C28.6555 18.4358 31.8106 16.2986 35.3945 16.0059L35.5172 14.8141C35.5303 14.6859 35.6104 14.5832 35.7315 14.5391C35.8526 14.4949 35.9799 14.5221 36.0725 14.6118L39.018 17.4648C39.0928 17.5373 39.1269 17.6309 39.1162 17.7344C39.1055 17.838 39.0531 17.9226 38.9652 17.9784L35.5005 20.1721C35.3916 20.2409 35.2614 20.2416 35.1518 20.1738C35.0423 20.1059 34.9848 19.9891 34.998 19.8609L35.0846 19.0184C32.5446 19.4201 30.3885 21.1151 29.3615 23.4279C28.7769 22.5876 27.956 21.9231 26.9962 21.5317ZM15.5449 39.1174C13.6288 39.1172 11.9182 39.1169 11.2183 39.1166C11.1761 39.1166 11.1343 39.1074 11.0959 39.0898C11.0575 39.0721 11.0234 39.0464 10.9959 39.0143C10.9683 38.9822 10.9481 38.9445 10.9365 38.9039C10.9249 38.8632 10.9222 38.8205 10.9286 38.7788C11.41 35.8368 13.9628 33.5915 17.0398 33.5915C17.3224 33.5915 17.6006 33.6104 17.8732 33.6471C16.6439 35.0154 15.8026 36.7395 15.5222 38.6459L15.5213 38.6526C15.4996 38.8076 15.5077 38.9653 15.5449 39.1174ZM32.1295 33.6469C32.4015 33.6104 32.6791 33.5915 32.9611 33.5915C36.0398 33.5915 38.5926 35.8369 39.0735 38.7788C39.0799 38.8207 39.0772 38.8635 39.0656 38.9043C39.0539 38.945 39.0336 38.9828 39.006 39.015C38.9784 39.0472 38.9441 39.073 38.9056 39.0907C38.8671 39.1084 38.8252 39.1176 38.7828 39.1176L34.4568 39.1175C34.4936 38.9673 34.5024 38.8098 34.4805 38.6531L34.4796 38.6464C34.1999 36.7397 33.3588 35.0153 32.1295 33.6469ZM32.9611 33.0032C31.2369 33.0032 29.8314 31.5961 29.8314 29.8719C29.8314 28.1477 31.2369 26.7405 32.9611 26.7405C34.687 26.7405 36.0925 28.1477 36.0925 29.8719C36.0925 31.5961 34.687 33.0032 32.9611 33.0032ZM17.0398 33.0032C15.3156 33.0032 13.9101 31.5961 13.9101 29.8719C13.9101 28.1477 15.3156 26.7405 17.0398 26.7405C18.7657 26.7405 20.1712 28.1477 20.1712 29.8719C20.1712 31.5961 18.7657 33.0032 17.0398 33.0032ZM16.4534 38.7828C17.0668 34.6111 20.6598 31.4082 25.0005 31.4082C29.3434 31.4082 32.9365 34.6111 33.5484 38.7829C33.5542 38.8245 33.551 38.867 33.539 38.9073C33.5271 38.9476 33.5066 38.9849 33.479 39.0166C33.4513 39.0483 33.4172 39.0738 33.379 39.0912C33.3407 39.1086 33.2991 39.1176 33.2571 39.1176C31.0819 39.1176 18.9197 39.1176 16.744 39.1169C16.702 39.1169 16.6605 39.1079 16.6223 39.0905C16.5842 39.0731 16.5501 39.0477 16.5226 39.0161C16.495 38.9844 16.4746 38.9472 16.4627 38.907C16.4507 38.8667 16.4476 38.8244 16.4534 38.7828ZM25.0005 30.8199C22.595 30.8199 20.6342 28.8568 20.6342 26.4514C20.6342 24.0459 22.595 22.0829 25.0005 22.0829C27.4082 22.0829 29.369 24.0459 29.369 26.4514C29.369 28.8568 27.4082 30.8199 25.0005 30.8199Z"
                        fill="#FBFBFB"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_2511">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(10 10)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="basis-full space-y-3">
                  <h6 className="mt-1 text-2xl font-medium">
                    Flexible Partnership Models
                  </h6>
                  <p className="text-sm">
                    Choose from various adaptable partnership structures to
                    align with your business goals and optimize collaborative
                    success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUpWithSlowBounce>
      </div>
    </section>
  );
};

export default InvestmentFreePartnership;