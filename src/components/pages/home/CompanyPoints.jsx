import FadeInLeftWithSlowBounce from "../../animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "../../animations/FadeInRightWithSlowBounce ";
import FadeInUpWithSlowBounce from "../../animations/FadeInUpWithSlowBounce";
import { useTranslations } from "next-intl";

const CompanyPoints = () => {
  const t = useTranslations("CompanyPoints");

  return (
    <section className="mt-[-90px]">
      <div className="container grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
        {/* card */}

        <FadeInLeftWithSlowBounce>
          <div className="group space-y-4 rounded-lg bg-white px-3 py-4 text-center shadow-lg duration-200 hover:scale-105 hover:bg-primary hover:text-white">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary p-2 group-hover:bg-white">
              <svg
                className="stroke-white stroke-2 group-hover:stroke-primary"
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.75 24.25H24.25M4.25 24.25V9.25L10.5 14.25V9.25L16.75 14.25H21.75M21.75 14.25V24.25M21.75 14.25L19.955 2.2825C19.9328 2.13431 19.8581 1.99902 19.7446 1.90128C19.631 1.80354 19.4861 1.74985 19.3363 1.75H17.905C17.7568 1.74977 17.6134 1.80218 17.5003 1.89788C17.3872 1.99358 17.3118 2.12635 17.2875 2.2725L15.5 13M9.25 19.25H10.5M15.5 19.25H16.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h5 className="text-xl font-medium">{t("point_1_title")}</h5>

            <div className="px-2">
              <p className="text-sm">{t("point_1_description")}</p>
            </div>
          </div>
        </FadeInLeftWithSlowBounce>

        {/* card */}
        <FadeInUpWithSlowBounce>
          <div className="group space-y-4 rounded-lg bg-white px-3 py-4 text-center shadow-lg duration-200 hover:scale-105 hover:bg-primary hover:text-white">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary p-2 group-hover:bg-white">
              <svg
                className="stroke-white stroke-2 group-hover:stroke-primary"
                width="20"
                height="20"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.5 9.25H23.5M2.5 16.75H23.5M12.375 1.75C10.2692 5.12451 9.15275 9.02233 9.15275 13C9.15275 16.9777 10.2692 20.8755 12.375 24.25M13.625 1.75C15.7308 5.12451 16.8472 9.02233 16.8472 13C16.8472 16.9777 15.7308 20.8755 13.625 24.25M1.75 13C1.75 14.4774 2.04099 15.9403 2.60636 17.3052C3.17172 18.6701 4.00039 19.9103 5.04505 20.955C6.08971 21.9996 7.3299 22.8283 8.69481 23.3936C10.0597 23.959 11.5226 24.25 13 24.25C14.4774 24.25 15.9403 23.959 17.3052 23.3936C18.6701 22.8283 19.9103 21.9996 20.955 20.955C21.9996 19.9103 22.8283 18.6701 23.3936 17.3052C23.959 15.9403 24.25 14.4774 24.25 13C24.25 10.0163 23.0647 7.15483 20.955 5.04505C18.8452 2.93526 15.9837 1.75 13 1.75C10.0163 1.75 7.15483 2.93526 5.04505 5.04505C2.93526 7.15483 1.75 10.0163 1.75 13Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h5 className="text-xl font-medium">{t("point_2_title")}</h5>
            <div className="px-2">
              <p className="text-sm">{t("point_2_description")}</p>
            </div>
          </div>
        </FadeInUpWithSlowBounce>

        {/* card */}

        <FadeInUpWithSlowBounce>
          <div className="group space-y-4 rounded-lg bg-white px-3 py-4 text-center shadow-lg duration-200 hover:scale-105 hover:bg-primary hover:text-white">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary p-2 group-hover:bg-white">
              <svg
                className="stroke-white stroke-2 group-hover:stroke-primary"
                width="20"
                height="24"
                viewBox="0 0 27 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 22.25C4.43375 17.225 5.47875 12.2163 5.5 7.25H13C13.0213 12.2163 14.0663 17.225 15.5 22.25M13.625 12.25H19.25C19.2813 15.515 20.3675 18.87 21.75 22.25M9.25 2.25005C9.53396 1.85443 9.90996 1.53389 10.3455 1.31611C10.7811 1.09833 11.2631 0.989849 11.75 1.00005C12.2369 0.989849 12.7189 1.09833 13.1545 1.31611C13.59 1.53389 13.966 1.85443 14.25 2.25005C14.534 2.64566 14.91 2.9662 15.3455 3.18399C15.7811 3.40177 16.2631 3.51025 16.75 3.50005C17.2369 3.51025 17.7189 3.40177 18.1545 3.18399C18.59 2.9662 18.966 2.64566 19.25 2.25005C19.534 1.85443 19.91 1.53389 20.3455 1.31611C20.7811 1.09833 21.2631 0.989849 21.75 1.00005C22.2369 0.989849 22.7189 1.09833 23.1545 1.31611C23.59 1.53389 23.966 1.85443 24.25 2.25005M1.75 22.25H25.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h5 className="text-xl font-medium">{t("point_3_title")}</h5>
            <div className="px-2">
              <p className="text-sm">{t("point_3_description")}</p>
            </div>
          </div>
        </FadeInUpWithSlowBounce>

        {/* card */}
        <FadeInRightWithSlowBounce>
          <div className="group space-y-4 rounded-lg bg-white px-3 py-4 text-center shadow-lg duration-200 hover:scale-105 hover:bg-primary hover:text-white">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary p-2 group-hover:bg-white">
              <svg
                className="stroke-white stroke-2 group-hover:stroke-primary"
                width="18"
                height="18"
                viewBox="0 0 22 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.5 1.75L1.78625 6.43625C1.5543 6.52892 1.35543 6.68895 1.21529 6.89571C1.07514 7.10247 1.00016 7.34647 1 7.59625V21.75C1 22.0815 1.1317 22.3995 1.36612 22.6339C1.60054 22.8683 1.91848 23 2.25 23H19.75C20.0815 23 20.3995 22.8683 20.6339 22.6339C20.8683 22.3995 21 22.0815 21 21.75V8C21 7.66848 20.8683 7.35054 20.6339 7.11612C20.3995 6.8817 20.0815 6.75 19.75 6.75H1.625M1 13H21M4.75 13V10.5M17.25 18V18.0125M12.25 18V18.0125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h5 className="text-xl font-medium">{t("point_4_title")}</h5>
            <div className="px-2">
              <p className="text-sm">{t("point_4_description")}</p>
            </div>
          </div>
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default CompanyPoints;
