"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./ui/Button";
import ReactFlagsSelect from "react-flags-select";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Header = () => {
  const [selected, setSelected] = useState("US");
  const pathname = usePathname();

  return (
    <header className="bg-white z-50 py-2">
      <nav className="container flex items-center justify-between">
        <div className="basis-1/4">
          <Link className="inline" href="/">
            <Image
              src="/images/Logo.png"
              width={52}
              height={39}
              alt="Hire and Fire"
            />
          </Link>
        </div>
        <div className="basis-1/2 ">
          <ul className="flex justify-center font-medium text-sm">
            <li className="px-4">
              <Link
                className="hover:text-primary duration-200"
                href="/about-us"
              >
                About Us
              </Link>
            </li>
            <li className="relative group px-4">
              <Link
                className="flex hover:text-primary duration-200"
                href="/employers"
              >
                Employers <MdKeyboardArrowDown className="text-xl" />
              </Link>

              {/* submenus */}

              <ul className="absolute bg-white p-4 rounded-lg shadow-2xl border space-y-4 top-5 w-56 hidden group-hover:block hover:block animate-fadeIn">
                <li>
                  <Link
                    className="flex hover:text-primary"
                    href="/employers/employment-service"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Employment Service
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex hover:text-primary"
                    href="/employers/additional-support"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Additional Support
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex hover:text-primary"
                    href="/employers/partnerships-programs"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Partnerships Programs
                  </Link>
                </li>
              </ul>
            </li>
            <li className="relative group px-4">
              <Link
                className="flex hover:text-primary duration-200"
                href="/hire-worker"
              >
                Hire Worker <MdKeyboardArrowDown className="text-xl" />
              </Link>

              {/* submenus */}
              <ul className="absolute bg-white p-4 rounded-lg shadow-2xl border space-y-4 top-5  hidden group-hover:block hover:block w-44 animate-fadeIn">
                <li>
                  <Link
                    className="flex hover:text-primary duration-200"
                    href="/hire-worker/our-process"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex hover:text-primary duration-200"
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
                className="hover:text-primary duration-200"
                href="/industry"
              >
                Industry
              </Link>
            </li>
            <li className="relative group px-4">
              <Link
                className="flex hover:text-primary duration-200"
                href="/hire-worker"
              >
                Resources <MdKeyboardArrowDown className="text-xl" />
              </Link>

              {/* submenus */}
              <ul className="absolute bg-white p-4 rounded-lg shadow-2xl border space-y-4 top-5 hidden group-hover:block hover:block animate-fadeIn">
                <li>
                  <Link
                    className="flex hover:text-primary duration-200"
                    href="/resources/faq"
                  >
                    <IoMdArrowDropright className="text-xl" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex hover:text-primary duration-200"
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
        <div className="basis-1/4 flex items-center justify-end gap-2">
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
      </nav>
    </header>
  );
};

export default Header;

{
  /* <header className="sticky top-0 bg-white z-[10000] shadow">
<nav>
  <MegaMenu>
    <div className="container flex flex-wrap items-center justify-between md:space-x-8">
      <Link className="hover:scale-105 duration-200" href="/">
        <Image src="/images/Logo.png" width={52} height={39} alt="" />
      </Link>
      <div className="order-2 hidden items-center md:flex gap-2">
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
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link
          className={`${pathname === "/about-us" ? "text-primary" : ""} hover:text-primary font-semibold`}
          href="/about-us"
        >
          About Us
        </Link>
        <Navbar.Link>
          <MegaMenu.Dropdown
            toggle={
              <p
                href="#"
                className={`${pathname === "about-us" ? "text-primary" : ""} hover:text-primary font-semibold`}
              >
                Employers
              </p>
            }
          >
            <ul className="grid grid-cols-1">
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="/employers/employment-service"
                    className={`${pathname === "/employers/employment-service" ? "text-primary" : ""} hover:text-primary font-semibold`}
                  >
                    Employment Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/additional-support"
                    className={`${pathname === "/employers/additional-support" ? "text-primary" : ""} hover:text-primary font-semibold`}
                  >
                    Additional Support
                  </Link>
                </li>
                <li>
                  <Link
                    href="/employers/partnerships-programs"
                    className={`${pathname === "/employers/partnerships-programs" ? "text-primary" : ""} hover:text-primary font-semibold`}
                  >
                    Partnerships Programs
                  </Link>
                </li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
        </Navbar.Link>
        <Navbar.Link>
          <MegaMenu.Dropdown
            toggle={
              <p
                className={`${pathname === "about-us" ? "text-primary" : ""} hover:text-primary font-semibold`}
              >
                Hire Worker
              </p>
            }
          >
            <ul className="grid grid-cols-1">
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="/hire-worker/our-process"
                    className={`${pathname === "/hire-worker/our-process" ? "text-primary" : ""} hover:text-primary font-semibold`}
                  >
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/hire-worker/request-talent"
                    className={`${pathname === "/hire-worker/request-talent" ? "text-primary" : ""} hover:text-primary font-semibold`}
                  >
                    Request Talent
                  </Link>
                </li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
        </Navbar.Link>
        <Link
          className={`${pathname === "/industry" ? "text-primary" : ""} hover:text-primary font-semibold`}
          href="/industry"
        >
          Industry
        </Link>
        <Navbar.Link>
          <MegaMenu.Dropdown
            toggle={
              <p
                className={`${pathname === "about-us" ? "text-primary" : ""} hover:text-primary font-semibold`}
              >
                Resources
              </p>
            }
          >
            <ul className="grid grid-cols-1">
              <div className="space-y-4 p-4">
                <li>
                  <Link
                    href="/resources/faq"
                    className={`${pathname === "/resources/faq" ? "text-primary" : ""} hover:text-primary font-semibold`}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/blog"
                    className={`${pathname === "/resources/blog" ? "text-primary" : ""} hover:text-primary font-semibold`}
                  >
                    Blog
                  </Link>
                </li>
              </div>
            </ul>
          </MegaMenu.Dropdown>
        </Navbar.Link>
      </Navbar.Collapse>
    </div>
  </MegaMenu>
</nav>
</header> */
}
