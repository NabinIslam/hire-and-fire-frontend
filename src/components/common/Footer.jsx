import { IoMdArrowDropright } from "react-icons/io";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="mt-auto bg-[#004785] pb-[25px] pt-[50px] text-white">
      <div className="container space-y-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[50px] lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          <div className="basis-full space-y-4 md:basis-1/2 lg:basis-1/4">
            <Image
              src="/images/Hire-Fire.png"
              alt="Hire And Fire"
              height={71}
              width={90}
            />

            <p className="text-sm">{t("description")}</p>

            <div>
              <Link href="/contact-us">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-3 text-sm text-white duration-200 hover:border-white hover:bg-transparent">
                  {t("contact_button")}
                </button>
              </Link>
            </div>
          </div>
          <div className="basis-full space-y-5 md:basis-1/2 lg:basis-1/4 xl:pl-[80px]">
            <span className="border-b-[1px] pb-1 text-xl">
              {t("quick_links")}
            </span>
            <ul className="flex flex-col justify-between gap-6">
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link className="duration-200 hover:text-primary" href="/">
                  {t("Home")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/about-us"
                >
                  {t("About_Us")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/services"
                >
                  {t("Services")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/industry"
                >
                  {t("Industries_We_Serve")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/resources/blog"
                >
                  {t("Blogs_and_Newses")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/resources/faq"
                >
                  {t("FAQ")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/contact-us"
                >
                  {t("Contact_Us")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-full space-y-5 md:basis-1/2 lg:basis-1/4">
            <span className="border-b-[1px] pb-1 text-xl">
              {t("our_services")}
            </span>
            <ul className="flex flex-col justify-between gap-6">
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/service/work-permit-assistance"
                >
                  Work Permit Assistance
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/service/visa-application-flight-assistance"
                >
                  Visa Application Flight Assistance
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/service/permanent-recruitment"
                >
                  {t("Permanent_Recruitment")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/service/contract-staffing"
                >
                  {t("Contract_Staffing")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/service/workforce-planning"
                >
                  {t("Workforce_Planning")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/service/compliance-and-legal-support"
                >
                  {t("Compliance_and_Legal_Support")}
                </Link>
              </li>

              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/service/background-checks"
                >
                  {t("Background_Checks")}
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/service/skill-assessment-and-training"
                >
                  Skill Assessment & Training
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/service/onboarding-support"
                >
                  {t("Onboarding_Support")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-full space-y-5 md:basis-1/2 lg:basis-1/4">
            <span className="text-xl">{t("get_in_touch")}</span>
            <p>{t("subscribe_message")}</p>

            <form className="flex w-full rounded-md bg-white">
              <input
                className="rounded-md border-none bg-white text-sm text-black focus:ring-0"
                type="email"
                placeholder={t("placeholder_text")}
                required
              />
              <button
                type="submit"
                className="ml-auto basis-auto rounded-md border-2 border-primary bg-primary px-4 py-3 text-sm text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary"
              >
                {t("subscribe_button")}
              </button>
            </form>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <FaPhone className="rounded-full bg-[#F90945] p-2 text-3xl" />
                <Link href="tel:+40 123 456 789"> +40 123 456 789</Link>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaEnvelope className="rounded-full bg-[#F90945] p-2 text-3xl" />
                <Link href="mailto:Contact@hireandfire.agency">
                  contact@hireandfire.agency
                </Link>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <FaMapMarkerAlt className="rounded-full bg-[#F90945] p-2 text-3xl" />
                <Link
                  href="https://maps.app.goo.gl/qNxPC3VBa4J9Kobm6"
                  target="_blank"
                >
                  Strada ING. Zablovschi, Nr. 10,
                  <br /> Biroul 1, Sectorul 1, Bucuresti, Romania.
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm md:text-left xl:flex-row">
          <div className="basis-full lg:basis-1/3">{t("copyright")}</div>
          <div className="basis-full lg:basis-1/3">
            <ul className="flex items-center justify-center gap-8">
              <li>
                <Link
                  className="duration-200 hover:underline"
                  href="/privacy-policy"
                >
                  {t("Privacy_Policy")}
                </Link>
              </li>
              <li>
                <Link
                  className="duration-200 hover:underline"
                  href="/terms-of-conditions"
                >
                  {t("Terms_and_Conditions")}
                </Link>
              </li>
              <li>
                <Link className="duration-200 hover:underline" href="#">
                  {t("Cookie_Policy")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-full lg:basis-1/3">
            <div className="flex flex-col items-center justify-end gap-3 font-medium xl:flex-row xl:gap-10">
              {t("follow_us")}
              <span className="flex items-center gap-3">
                <Link
                  href="https://www.facebook.com/hireandfire.eu"
                  target="_blank"
                >
                  <FaFacebook className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/hireandfire.eu/"
                  target="_blank"
                >
                  <FaInstagram className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
                </Link>
                <Link href="https://twitter.com/hireandfireeu" target="_blank">
                  <FaTwitter className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
                </Link>
                <Link href="https://telegram.org/" target="_blank">
                  <FaTelegramPlane className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
