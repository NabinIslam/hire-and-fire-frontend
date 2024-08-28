"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";
import ReactFlagsSelect from "react-flags-select";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Header = () => {
  const [selected, setSelected] = useState("US");
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="sticky top-0 z-50 bg-white py-2 shadow">
      <nav className="container flex items-center justify-between">
        <div className="basis-1/4">
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
                className={` ${pathname === "/about-us" ? "text-primary" : ""} duration-200 hover:text-primary`}
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

              <ul className="absolute top-5 hidden w-56 animate-fadeIn space-y-4 rounded-lg border bg-white p-4 shadow-2xl hover:block group-hover:block">
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
              <ul className="absolute top-5 hidden w-44 animate-fadeIn space-y-4 rounded-lg border bg-white p-4 shadow-2xl hover:block group-hover:block">
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
              <ul className="absolute top-5 hidden animate-fadeIn space-y-4 rounded-lg border bg-white p-4 shadow-2xl hover:block group-hover:block">
                <li>
                  <Link
                    className={`${pathname === "/resources/faq" ? "text-primary" : ""} flex duration-200 hover:text-primary`}
                    href="/resources/faq"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${pathname === "/resources/blog" ? "text-primary" : ""} flex duration-200 hover:text-primary`}
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
          <ReactFlagsSelect
            className="mb-[-5px]"
            showSelectedLabel={false}
            showOptionLabel={false}
            selected={selected}
            onSelect={(code) => setSelected(code)}
          />
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
        className="bla bla bla"
      >
        <div className="flex h-screen flex-col p-4">
          <div>
            <Image
              className="h-[50px] w-auto"
              src="/images/Logo.png"
              alt="Hire and Fire"
              height={50}
              width={50}
            />
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
