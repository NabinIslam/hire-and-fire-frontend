"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ReactFlagsSelect from "react-flags-select";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Dropdown, Sidebar } from "flowbite-react";
import Button from "../ui/Button";
import { languages } from "@/data/languages";
import Select from "react-dropdown-select";

const Header = () => {
  const [selected, setSelected] = useState("US");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState({
    value: "English",
    label: "English",
  });

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleLanguageChange = (event) => {
    localStorage.setItem("site-language", event.target.value);

    // console.log(event.target.value);
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
            onChange={handleLanguageChange}
            className="cursor-pointer rounded-md border-none bg-white px-4 py-2 text-sm text-gray-700 ring-2 focus:ring-2 focus:ring-blue-500"
          >
            {languages.map((language) => (
              <option
                selected={
                  language.code === localStorage.getItem("site-language")
                }
                value={language.code}
                key={language.value}
              >
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

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="max-w-96"
      >
        <div className="flex h-screen flex-col bg-[#F9FAFB] p-4">
          <div>
            <Image
              className="h-[50px] w-auto"
              src="/images/Logo.png"
              alt="Hire and Fire"
              height={50}
              width={50}
            />
          </div>
          <div>
            <Sidebar className="m-0 w-full p-0">
              <Sidebar.Items className="m-0 p-0">
                <Sidebar.ItemGroup>
                  <Link
                    className={`${pathname === "/about-us" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                    href="/about-us"
                  >
                    About us
                  </Link>
                  <Sidebar.Collapse
                    className="px-0 text-sm font-medium"
                    label="Employers"
                  >
                    <Link
                      className={`${pathname === "/employers/employment-service" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                      href="/employers/employment-service"
                    >
                      Employment Service
                    </Link>
                    <Link
                      className={`${pathname === "/employers/additional-support" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                      href="/employers/additional-support"
                    >
                      Additional Support
                    </Link>
                    <Link
                      className={`${pathname === "/employers/partnerships-programs" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                      href="/employers/partnerships-programs"
                    >
                      Partnerships Programs
                    </Link>
                  </Sidebar.Collapse>
                  <Sidebar.Collapse
                    className="px-0 text-sm font-medium"
                    label="Hire Worker"
                  >
                    <Link
                      className={`${pathname === "/hire-worker/our-process" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                      href="/hire-worker/our-process"
                    >
                      Our Process
                    </Link>
                    <Link
                      className={`${pathname === "/hire-worker/request-talent" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                      href="/hire-worker/request-talent"
                    >
                      Additional Support
                    </Link>
                  </Sidebar.Collapse>
                  <Link
                    className={`${pathname === "/industry" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                    href="/industry"
                  >
                    Industry
                  </Link>
                  <Sidebar.Collapse
                    className="px-0 text-sm font-medium"
                    label="Resources"
                  >
                    <Link
                      className={`${pathname === "/resources/faq" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                      href="/resources/faq"
                    >
                      FAQ
                    </Link>
                    <Link
                      className={`${pathname === "/resources/blog" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                      href="/resources/blog"
                    >
                      Blog
                    </Link>
                  </Sidebar.Collapse>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </Sidebar>
          </div>
          <div className="mt-auto flex items-center justify-between">
            <Link href="/contact-us">
              <Button>Contact Us</Button>
            </Link>
            <ReactFlagsSelect
              className="mb-[-5px]"
              showSelectedLabel={false}
              showOptionLabel={false}
              selected={selected}
              onSelect={(code) => setSelected(code)}
            />
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
