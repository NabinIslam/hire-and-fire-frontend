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
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Employer 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Employer 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Employer 3
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Employer 4
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
                      Find Worker
                    </p>
                  }
                >
                  <ul className="grid grid-cols-1">
                    <div className="space-y-4 p-4">
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Worker 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Worker 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Worker 3
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Worker 4
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
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Resource 1
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Resource 2
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Resource 3
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="#"
                          className="hover:text-primary dark:hover:text-primary-500 font-medium text-sm"
                        >
                          Resource 4
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
