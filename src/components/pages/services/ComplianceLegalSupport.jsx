import Button from "../../ui/Button";
import SubServiceCard from "../../common/SubServiceCard";
import { Link } from "@/i18n/routing";
import ServiceImage from "@/components/common/ServiceImage";
import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";

const ComplianceLegalSupport = () => {
  return (
    <section className="pb-[50px] pt-[50px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row-reverse">
        <FadeInLeftWithSlowBounce className="z-50 basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold lg:text-4xl">
            Compliance & Legal Support
          </h2>
          <p className="text-sm font-medium">
            Compliance and legal support services assist businesses in adhering
            to laws and regulations, mitigating risks, and ensuring ethical
            practices. These services include advising on legal matters,
            conducting audits, drafting and reviewing contracts, and managing
            regulatory compliance. By providing expert guidance on legal
            requirements and industry standards, compliance and legal support
            helps organizations avoid legal pitfalls, maintain good standing
            with regulatory bodies, and operate efficiently within the legal
            framework. This support is crucial for minimizing liabilities and
            promoting sustainable business practices.
          </p>
          <div>
            <Link href="/service/compliance-and-legal-support">
              <Button>See More</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Compliance & Legal Support.png"
            title1="Risk Management"
            desc1="Managing risks to protect assets."
            title2="Regulatory Adherence"
            desc2="Following laws and regulations."
            title3="Contractual Compliance"
            desc3="Ensuring contract terms are met."
          />
        </FadeInRightWithSlowBounce>
      </div>
      <div className="container mt-[50px] grid grid-cols-1 gap-6 lg:grid-cols-3">
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
              <path d="M49.9988 30.055C50.0089 29.7926 49.9658 29.5308 49.8721 29.2855L43.7304 13.1504C45.6507 12.1874 46.9726 10.2007 46.9726 7.91027C46.9726 6.83156 46.0982 5.95714 45.0195 5.95714C43.9408 5.95714 43.0663 6.83156 43.0663 7.91027C43.0663 8.98468 42.1943 9.85929 41.1207 9.86339C39.4244 9.85929 38.1417 8.99581 36.3683 7.80197C34.8258 6.76359 33.1042 5.60675 30.7653 4.81984C30.273 2.08351 27.8761 0.000305176 25.0002 0.000305176C22.1234 0.000305176 19.7259 2.08497 19.2347 4.82257C16.8768 5.62091 15.102 6.81241 13.6321 7.80206C11.8586 8.99601 10.5758 9.85939 8.87972 9.86349C7.80618 9.85939 6.93411 8.98478 6.93411 7.91036C6.93411 6.83165 6.0597 5.95724 4.98099 5.95724C3.90227 5.95724 3.02786 6.83165 3.02786 7.91036C3.02786 10.201 4.34974 12.1876 6.27005 13.1506L0.128348 29.2854C0.0346602 29.5307 -0.0084241 29.7925 0.00168804 30.0549C0.00159039 30.0626 0.000516167 30.07 0.000516167 30.0778C0.000516167 34.9779 3.98704 38.9645 8.88714 38.9645C13.7872 38.9645 17.7738 34.9779 17.7738 30.0778C17.7738 29.8007 17.7153 29.5375 17.6112 29.2987C17.6095 29.2943 17.6085 29.2899 17.6069 29.2855L11.5413 13.3506C13.1439 12.8387 14.4937 11.9307 15.8135 11.0423C17.0515 10.2089 18.3216 9.35441 19.8981 8.73478C20.5896 9.95695 21.7066 10.9072 23.0473 11.3827V46.0933H15.2349V49.9995H34.7659V46.0933H26.9534V11.3828C28.2937 10.9074 29.4105 9.95753 30.102 8.73575C31.6781 9.35529 32.9495 10.2092 34.187 11.0423C35.5069 11.9308 36.8567 12.8388 38.4592 13.3506L32.3937 29.2855C32.392 29.2899 32.391 29.2943 32.3894 29.2987C32.282 29.5445 32.2267 29.8097 32.2268 30.0778C32.2268 34.9779 36.2133 38.9645 41.1134 38.9645C46.0135 38.9645 50 34.9779 50 30.0778C49.9999 30.0701 49.9989 30.0627 49.9988 30.055ZM8.88714 35.0583C6.83392 35.0583 5.06663 33.8091 4.30579 32.031H13.4686C12.7075 33.8091 10.9405 35.0583 8.88714 35.0583ZM12.9855 28.1249H4.74964L8.86751 17.3066L12.9855 28.1249ZM25.0002 7.81251C23.9233 7.81251 23.0471 6.93634 23.0471 5.85939C23.0471 4.78243 23.9233 3.90626 25.0002 3.90626C26.0772 3.90626 26.9534 4.78243 26.9534 5.85939C26.9534 6.93634 26.0773 7.81251 25.0002 7.81251ZM41.1328 17.3065L45.2508 28.1248H37.0149L41.1328 17.3065ZM41.1133 35.0583C39.0601 35.0583 37.2928 33.8091 36.532 32.031H45.6948C44.9338 33.8091 43.1666 35.0583 41.1133 35.0583Z" />
            </svg>
          }
          title="Employment Law Guidance"
          description="We offer expert advice on employment law to keep you compliant."
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
              <g clipPath="url(#clip0_35_2228)">
                <path d="M11.5016 17.0259C11.1207 16.6451 10.5016 16.6451 10.1208 17.0259C9.73897 17.4078 9.73897 18.0259 10.1208 18.4068C10.5017 18.7886 11.1208 18.7886 11.5016 18.4068C11.8833 18.0259 11.8833 17.4078 11.5016 17.0259ZM24.7265 43.7225C25.157 43.1393 25.3897 42.4367 25.3897 41.6979C25.3897 39.8133 23.8565 38.28 21.9719 38.28H5.3709C4.45752 38.28 3.59922 38.6355 2.954 39.2809C2.3085 39.9262 1.95303 40.7845 1.95303 41.6979C1.95237 42.4263 2.18567 43.1356 2.61855 43.7213C1.06357 44.5389 0 46.1698 0 48.0453V49.0218C0 49.5612 0.437305 49.9984 0.976562 49.9984H26.3662C26.9055 49.9984 27.3428 49.5612 27.3428 49.0218V48.0453C27.3428 46.1707 26.2803 44.5405 24.7265 43.7225ZM4.33496 40.6618C4.4707 40.5253 4.63215 40.4172 4.80997 40.3436C4.98779 40.27 5.17845 40.2324 5.3709 40.233H21.9719C22.7796 40.233 23.4366 40.8901 23.4366 41.6977C23.4366 42.0893 23.2843 42.4572 23.0077 42.7337C22.872 42.8702 22.7105 42.9783 22.5327 43.0519C22.3549 43.1255 22.1642 43.1631 21.9718 43.1626H5.3709C4.56318 43.1626 3.90615 42.5054 3.90615 41.6978C3.90615 41.3063 4.0584 40.9383 4.33496 40.6618ZM1.95303 48.0453C1.95303 46.4299 3.26729 45.1157 4.88262 45.1157H22.4602C24.0755 45.1157 25.3897 46.4299 25.3897 48.0453H1.95303Z" />
                <path d="M49.091 41.0278C48.7594 40.5138 48.3637 40.0593 47.9147 39.6769L43.3518 35.6971C43.3156 35.6426 43.2741 35.5919 43.2278 35.5456C43.1507 35.4688 43.0612 35.4055 42.9632 35.3583L40.2037 32.9516L27.4313 21.8099C27.9541 21.2633 28.242 20.5486 28.242 19.7885C28.242 19.0055 27.9372 18.2697 27.3832 17.7157C27.148 17.4807 26.8741 17.2879 26.5735 17.1457L27.7552 15.9641C28.0844 16.0519 28.4237 16.0965 28.7645 16.0968C29.7646 16.0967 30.7647 15.716 31.5261 14.9547C32.2642 14.2167 32.6706 13.2358 32.6706 12.1925C32.6706 11.1492 32.2642 10.1683 31.5262 9.4303L23.2402 1.14456C22.5022 0.406567 21.5212 0.00012207 20.4776 0.00012207C19.4346 0.00012207 18.4538 0.406567 17.7159 1.14456C16.696 2.16448 16.3603 3.61262 16.7065 4.91555L4.91699 16.705C4.58716 16.6172 4.24728 16.5727 3.90596 16.5727C2.86221 16.5727 1.88164 16.9788 1.14424 17.7161C-0.378809 19.2392 -0.378809 21.7174 1.14424 23.2406L9.43008 31.5265C10.1917 32.288 11.192 32.6688 12.1923 32.6688C13.1927 32.6688 14.193 32.288 14.9546 31.5265C15.9745 30.5065 16.3103 29.0584 15.964 27.7555L17.1432 26.5762C17.2869 26.876 17.4806 27.1491 17.716 27.3839C18.2693 27.9372 19.005 28.242 19.7878 28.242C20.5471 28.242 21.2615 27.9546 21.8089 27.4324L35.413 43.0626C35.4505 43.1212 35.4942 43.177 35.5454 43.2281C35.5629 43.2456 35.5814 43.2615 35.5999 43.2774L39.6537 47.935C39.7557 48.0552 39.8625 48.1713 39.974 48.2827C41.0874 49.3957 42.558 49.9997 44.102 49.9997C44.3741 49.9997 44.6488 49.981 44.9239 49.9429C46.7627 49.6884 48.3519 48.5884 49.2837 46.9245C50.3045 45.101 50.2285 42.7859 49.091 41.0278ZM19.0971 2.52561C19.2779 2.34367 19.4931 2.1994 19.7301 2.10115C19.9671 2.00291 20.2212 1.95263 20.4777 1.95325C20.7344 1.95256 20.9887 2.00279 21.2258 2.10103C21.463 2.19928 21.6783 2.34359 21.8593 2.52561L30.1452 10.8115C30.3272 10.9924 30.4715 11.2076 30.5697 11.4447C30.6679 11.6818 30.7181 11.936 30.7175 12.1926C30.7182 12.4492 30.6679 12.7034 30.5697 12.9405C30.4714 13.1776 30.3271 13.3928 30.1451 13.5738C29.3839 14.3352 28.145 14.3352 27.3838 13.5738L19.0976 5.28752L19.0971 5.28704C18.3356 4.52571 18.3356 3.28694 19.0971 2.52561ZM13.5735 30.1454C12.812 30.907 11.5727 30.9071 10.8111 30.1454L2.52529 21.8596C1.76367 21.098 1.76367 19.8589 2.52529 19.0972C2.89365 18.7287 3.38408 18.5258 3.90596 18.5258C4.42773 18.5258 4.91787 18.7286 5.28613 19.0968L13.5734 27.3841C14.335 28.1453 14.335 29.3842 13.5735 30.1454ZM17.6851 23.2724L14.9545 26.003L6.66777 17.7163L17.7159 6.66799L26.0025 14.9547L23.267 17.6904C23.2581 17.6988 23.2494 17.707 23.24 17.7162L17.7188 23.2376C17.7073 23.2489 17.6963 23.2606 17.6851 23.2724ZM21.172 25.3096L21.1662 25.3154L20.4785 26.003C20.388 26.094 20.2803 26.1661 20.1617 26.2152C20.0432 26.2643 19.916 26.2894 19.7877 26.289C19.6594 26.2894 19.5322 26.2643 19.4137 26.2152C19.2951 26.1661 19.1875 26.094 19.097 26.003C19.0059 25.9124 18.9337 25.8047 18.8845 25.686C18.8354 25.5673 18.8103 25.4401 18.8106 25.3116C18.8106 25.056 18.9082 24.8155 19.0853 24.634L24.6322 19.087C25.0124 18.7173 25.6271 18.7219 26.0027 19.0972C26.0938 19.1878 26.166 19.2955 26.2151 19.4142C26.2642 19.5328 26.2893 19.6601 26.289 19.7885C26.2894 19.9168 26.2643 20.0439 26.2151 20.1624C26.166 20.2809 26.0938 20.3885 26.0026 20.4788L25.3189 21.1625C25.3142 21.1671 25.3096 21.1718 25.305 21.1765L21.172 25.3096ZM23.1942 26.0493L26.0483 23.1952L38.1325 33.7358L33.7229 38.1454L23.1942 26.0493ZM35.0082 39.6222L39.6077 35.0226L41.083 36.3094L36.2935 41.099L35.0082 39.6222ZM47.5797 45.9704C46.9494 47.0957 45.8839 47.8384 44.6562 48.0083C43.4314 48.1779 42.228 47.7744 41.3548 46.9016C41.2802 46.8271 41.2088 46.7495 41.1408 46.6691L41.1313 46.658L37.5786 42.5758L42.5582 37.5961L46.6354 41.1525L46.6447 41.1606C46.9499 41.42 47.2207 41.7317 47.4505 42.0877C48.189 43.2288 48.2407 44.7894 47.5797 45.9704Z" />
                <path d="M18.4061 10.1207C18.0247 9.73938 17.4065 9.73938 17.0251 10.1207L12.8817 14.2641C12.5004 14.6454 12.5004 15.2638 12.8817 15.645C12.9723 15.7359 13.0799 15.8079 13.1984 15.857C13.3169 15.9061 13.444 15.9312 13.5722 15.9311C13.7005 15.9312 13.8275 15.906 13.946 15.8569C14.0645 15.8079 14.1722 15.7358 14.2628 15.645L18.4061 11.5017C18.7875 11.1204 18.7875 10.5022 18.4061 10.1207Z" />
              </g>
              <defs>
                <clipPath id="clip0_35_2228">
                  <rect width="50" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Regulatory Adherence"
          description="We ensure your staffing practices comply with all relevant regulations."
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
              <path d="M9.48633 23.814H23.5614C24.3704 23.814 25.0263 23.1581 25.0263 22.3491C25.0263 21.5401 24.3704 20.8843 23.5614 20.8843H9.48633C8.67734 20.8843 8.02148 21.5401 8.02148 22.3491C8.02148 23.1581 8.67734 23.814 9.48633 23.814ZM9.48633 17.9542H23.5614C24.3704 17.9542 25.0263 17.2984 25.0263 16.4894C25.0263 15.6804 24.3704 15.0245 23.5614 15.0245H9.48633C8.67734 15.0245 8.02148 15.6804 8.02148 16.4894C8.02148 17.2984 8.67734 17.9542 9.48633 17.9542ZM9.48633 12.0945H29.4212C30.2302 12.0945 30.886 11.4387 30.886 10.6297C30.886 9.82072 30.2302 9.16486 29.4212 9.16486H9.48633C8.67734 9.16486 8.02148 9.82072 8.02148 10.6297C8.02148 11.4387 8.67734 12.0945 9.48633 12.0945ZM9.48633 29.634H23.5614C24.3704 29.634 25.0263 28.9781 25.0263 28.1692C25.0263 27.3602 24.3704 26.7043 23.5614 26.7043H9.48633C8.67734 26.7043 8.02148 27.3602 8.02148 28.1692C8.02148 28.9781 8.67734 29.634 9.48633 29.634ZM9.48633 34.5171H23.5614C24.3704 34.5171 25.0263 33.8612 25.0263 33.0523C25.0263 32.2433 24.3704 31.5874 23.5614 31.5874H9.48633C8.67734 31.5874 8.02148 32.2433 8.02148 33.0523C8.02148 33.8612 8.67734 34.5171 9.48633 34.5171ZM29.4212 37.4471H9.48633C8.67734 37.4471 8.02148 38.1029 8.02148 38.9119C8.02148 39.7209 8.67734 40.3768 9.48633 40.3768H29.4212C30.2302 40.3768 30.886 39.7209 30.886 38.9119C30.886 38.1029 30.2302 37.4471 29.4212 37.4471Z" />
              <path d="M48.7294 17.3401C48.7265 16.9536 48.5709 16.5838 48.2965 16.3115C48.0221 16.0391 47.6511 15.8863 47.2645 15.8863L47.229 15.8864C45.9541 15.8864 44.7822 15.1429 44.2387 13.9868C44.1204 13.7352 43.9329 13.5225 43.6982 13.3735C43.4635 13.2245 43.1912 13.1453 42.9132 13.1453H42.9021L39.8704 13.168V2.44141C39.8704 1.09521 38.7752 0 37.429 0H3.67188C2.32568 0 1.23047 1.09521 1.23047 2.44141V47.5586C1.23047 48.9048 2.32568 50 3.67188 50H37.4289C38.7751 50 39.8703 48.9048 39.8703 47.5586V36.2658L41.8365 35.086C46.1508 32.4974 48.8073 27.7639 48.7697 22.7326L48.7294 17.3401ZM4.16016 47.0703V2.92969H36.9406V13.1899L33.7316 13.214C33.4518 13.2161 33.1783 13.2983 32.9437 13.4509C32.7091 13.6036 32.5231 13.8202 32.4078 14.0753C31.8781 15.2469 30.706 16.0101 29.4216 16.0197C28.6126 16.0258 27.9617 16.6865 27.9677 17.4955L28.008 22.888C28.0458 27.9191 30.773 32.6124 35.1255 35.1361L36.9406 36.1887V47.0703H4.16016ZM40.3291 32.5738L38.4703 33.6892L36.5951 32.6019C33.1354 30.5958 30.9677 26.8652 30.9377 22.8661L30.907 18.7626C32.4164 18.383 33.7447 17.4461 34.6064 16.1372L42.0711 16.0813C42.9524 17.3773 44.2943 18.2942 45.8095 18.651L45.84 22.7546C45.87 26.7537 43.7583 30.5162 40.3291 32.5738Z" />
              <path d="M40.8499 21.2358L37.8201 24.3114L36.8307 23.3368C36.2543 22.7689 35.3269 22.7761 34.7592 23.3523C34.1914 23.9286 34.1984 24.8562 34.7747 25.4238L36.8076 27.4265C37.0813 27.6969 37.4507 27.8483 37.8354 27.8478C38.214 27.8478 38.5923 27.7019 38.879 27.4109L42.937 23.2918C43.5047 22.7155 43.4978 21.788 42.9215 21.2203C42.345 20.6523 41.4176 20.6596 40.8499 21.2358Z" />
            </svg>
          }
          title="Legal Documentation Assistance"
          description="We assist with the preparation and review of legal documents."
        />
      </div>
    </section>
  );
};

export default ComplianceLegalSupport;
