"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import "react-modern-drawer/dist/index.css";
import Button from "../ui/Button";
import { languages } from "@/data/languages";
import { useLocale } from "next-intl";
import MobileDrawer from "./MobileDrawer";

const Header = () => {
  const [isPending, startTransition] = useTransition();
  const localActive = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  // const handleLanguageChange = (event) => {
  //   localStorage.setItem("site-language", event.target.value);

  //   // console.log(event.target.value);
  // };

  // const changeLanguage = async (locale) => {
  //   setSelectedLocale(locale);
  //   localStorage.setItem("locale", locale);

  //   // Set cookie for locale
  //   document.cookie = `locale=${locale}; path=/`;

  //   // Optionally, refresh the page or route

  //   // router.refresh(`?locale=${locale}`);
  //    router.push(pathname, { locale });
  // };
  const changeLanguage = async (locale) => {
    // router.push(`/${locale}`);

    startTransition(() => router.replace(`/${locale}`));
  };

  return (
    <header className="sticky top-0 z-[1000] bg-white py-[10px] shadow">
      <nav className="container flex items-center justify-between">
        <div className="flex basis-1/4 items-center justify-start">
          <Link href="/">
            <Image
              src="/images/Logo.png"
              width={52}
              height={39}
              alt="Hire and Fire"
            />
          </Link>
        </div>
        <div className="hidden basis-1/2 lg:block">
          <ul className="flex justify-center text-sm font-medium">
            <li className="px-4">
              <Link
                className={`${pathname === "/about-us" ? "text-primary" : ""} duration-200 hover:text-primary`}
                href="/about-us"
              >
                About Us
              </Link>
            </li>
            <li className="group relative px-4">
              <p
                className="flex cursor-pointer duration-200 hover:text-primary"
                href="/employers"
              >
                Employers <MdKeyboardArrowDown className="text-xl" />
              </p>

              {/* submenus */}

              <ul className="animate-fadeIn absolute top-5 hidden w-56 space-y-4 rounded-lg border bg-white p-4 shadow-2xl hover:block group-hover:block">
                <li>
                  <Link
                    className={`${pathname === "/employers/employment-service" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/employers/employment-service"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Employment Service
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname === "/employers/additional-support" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/employers/additional-support"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Additional Support
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname === "/employers/partnerships-programs" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/employers/partnerships-programs"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Partnerships Programs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="group relative px-4">
              <p
                className="flex cursor-pointer duration-200 hover:text-primary"
                href="/hire-worker"
              >
                Hire Worker <MdKeyboardArrowDown className="text-xl" />
              </p>

              {/* submenus */}
              <ul className="animate-fadeIn absolute top-5 hidden w-44 space-y-4 rounded-lg border bg-white p-4 shadow-2xl hover:block group-hover:block">
                <li>
                  <Link
                    className={`${pathname === "/hire-worker/our-process" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/hire-worker/our-process"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname === "/hire-worker/request-talent" ? "text-primary" : ""} flex hover:text-primary`}
                    href="/hire-worker/request-talent"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Request Talent
                  </Link>
                </li>
              </ul>
            </li>
            <li className="px-4">
              <Link
                className={`${pathname === "/industry" ? "text-primary" : ""} duration-200 hover:text-primary`}
                href="/industry"
              >
                Industry
              </Link>
            </li>
            <li className="group relative px-4">
              <p
                className="flex cursor-pointer duration-200 hover:text-primary"
                href="/hire-worker"
              >
                Resources <MdKeyboardArrowDown className="text-xl" />
              </p>

              {/* submenus */}
              <ul className="animate-fadeIn absolute top-5 hidden space-y-4 rounded-lg border bg-white p-4 shadow-2xl hover:block group-hover:block">
                <li>
                  <Link
                    className={`${pathname === "/resources/faq" ? "text-primary" : ""} duration-20 0 flex hover:text-primary`}
                    href="/resources/faq"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname === "/resources/blog" ? "text-primary" : ""} duration-20 0 flex hover:text-primary`}
                    href="/resources/blog"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Blog
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="hidden basis-1/4 items-center justify-end gap-2 lg:flex">
          <Link href="/contact-us">
            <Button>Contact Us</Button>
          </Link>

          <select
            value={localActive}
            onChange={(e) => changeLanguage(e.target.value)}
            className="cursor-pointer rounded-md border-none bg-white px-4 py-2 text-sm text-gray-700 ring-2 focus:ring-2 focus:ring-blue-500"
            disabled={isPending}
          >
            {languages.map((language) => (
              <option value={language.code} key={language.value}>
                {language.label}
              </option>
            ))}
          </select>

          {/* <Select
            className="w-[150px] rounded-full px-4 text-sm"
            searchable={false}
            options={languages}
            onChange={(value) => console.log(value)}
          /> */}

          {/* <Dropdown className="border" label="Dropdown button">
            {languages.map((language) => (
              <Dropdown.Item>{language}</Dropdown.Item>
            ))}
          </Dropdown> */}

          {/* <select className="rounded-full border" name="selectCountries" id="">
            {languages.map((language) => (
              <option value={language}>{language}</option>
            ))}
          </select> */}

          {/* <ReactFlagsSelect
            className="mb-[-5px]"
            showSelectedLabel={false}
            showOptionLabel={false}
            selected={selected}
            onSelect={(code) => setSelected(code)}
          /> */}
        </div>
        <div className="flex basis-1/4 items-center justify-end lg:hidden">
          <button
            className="ml-auto rounded-md border-2 p-1"
            onClick={toggleDrawer}
          >
            <FaBars className="text-xl text-secondary duration-200 hover:text-primary" />
          </button>
        </div>
      </nav>

      <MobileDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </header>
  );
};

export default Header;
