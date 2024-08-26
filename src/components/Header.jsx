"use client";

import { MegaMenu, Navbar } from "flowbite-react";
import Button from "./ui/Button";
import ReactFlagsSelect from "react-flags-select";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [selected, setSelected] = useState("US");
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-white z-[10000] shadow">
      <nav>
        <MegaMenu>
          <div className="container flex flex-wrap items-center justify-between md:space-x-8">
            <Link href="/">
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
    </header>
  );
};

export default Header;
