import Button from "../ui/Button";
import Drawer from "react-modern-drawer";
import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import EmployerNavDropdown from "./EmployerNavDropdown";
import HireWorkerNavDropdown from "./HireWorkerNavDropdown";
import ResourcesNavDropdown from "./ResourcesNavDropdown";

const MobileDrawer = ({ isOpen, toggleDrawer, setIsOpen }) => {
  const pathname = usePathname();

  return (
    <Drawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="left"
      className="max-w-96"
    >
      <div className="flex h-screen flex-col bg-[#F9FAFB] p-4">
        <div>
          <Link href="/">
            <Image
              className="h-[50px] w-auto"
              src="/images/Logo.png"
              alt="Hire and Fire"
              height={50}
              width={50}
            />
          </Link>
        </div>
        <div className="mt-10">
          <ul className="space-y-3">
            <li>
              <Link
                onClick={toggleDrawer}
                className={`block w-full rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/about-us" ? "bg-primary text-white" : ""}`}
                href="/about-us"
              >
                About Us
              </Link>
            </li>
            <li>
              <EmployerNavDropdown title="Employer" pathname={pathname}>
                <ul>
                  <li>
                    <Link
                      onClick={toggleDrawer}
                      className={`block w-full rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/employers/employment-service" ? "bg-primary text-white" : ""}`}
                      href="/employers/employment-service"
                    >
                      Employment Service
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDrawer}
                      className={`block w-full rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/employers/additional-support" ? "bg-primary text-white" : ""}`}
                      href="/employers/additional-support"
                    >
                      Additional Support
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDrawer}
                      className={`block w-full rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/employers/partnerships-programs" ? "bg-primary text-white" : ""}`}
                      href="/employers/partnerships-programs"
                    >
                      Partnerships Programs
                    </Link>
                  </li>
                </ul>
              </EmployerNavDropdown>
            </li>
            <li>
              <HireWorkerNavDropdown title="Hire Worker" pathname={pathname}>
                <ul>
                  <li>
                    <Link
                      onClick={toggleDrawer}
                      className={`block w-full rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/hire-worker/our-process" ? "bg-primary text-white" : ""}`}
                      href="/hire-worker/our-process"
                    >
                      Our Process
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDrawer}
                      className={`block w-full rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/hire-worker/request-worker" ? "bg-primary text-white" : ""}`}
                      href="/hire-worker/request-worker"
                    >
                      Request Worker
                    </Link>
                  </li>
                </ul>
              </HireWorkerNavDropdown>
            </li>
            <li>
              <Link
                onClick={toggleDrawer}
                className={`block w-full rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/industry" ? "bg-primary text-white" : ""}`}
                href="/industry"
              >
                Industry
              </Link>
            </li>
            <li>
              <ResourcesNavDropdown title="Resources">
                <ul>
                  <li>
                    <Link
                      onClick={toggleDrawer}
                      className={`block w-full rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/resources/faq" ? "bg-primary text-white" : ""}`}
                      href="/resources/faq"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={toggleDrawer}
                      className={`block w-full rounded-lg px-3 py-2 text-sm font-medium text-secondary ${pathname === "/resources/blog" ? "bg-primary text-white" : ""}`}
                      href="/resources/blog"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </ResourcesNavDropdown>
            </li>
          </ul>
        </div>
        <div className="mt-auto flex items-center justify-between">
          <Link onClick={() => setIsOpen(false)} href="/contact-us">
            <Button>Meet Us</Button>
          </Link>
        </div>
      </div>
    </Drawer>
  );
};

export default MobileDrawer;

{
  /* <Sidebar className="m-0 w-full p-0">
            <Sidebar.Items className="m-0 p-0">
              <Sidebar.ItemGroup>
                <Link
                  onClick={() => setIsOpen(false)}
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
                    onClick={() => setIsOpen(false)}
                    className={`${pathname === "/employers/employment-service" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                    href="/employers/employment-service"
                  >
                    Employment Service
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className={`${pathname === "/employers/additional-support" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                    href="/employers/additional-support"
                  >
                    Additional Support
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className={`${pathname === "/employers/partnerships-programs" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#06080a]`}
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
                    onClick={() => setIsOpen(false)}
                    className={`${pathname === "/hire-worker/our-process" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                    href="/hire-worker/our-process"
                  >
                    Our Process
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className={`${pathname === "/hire-worker/request-talent" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                    href="/hire-worker/request-talent"
                  >
                    Additional Support
                  </Link>
                </Sidebar.Collapse>
                <Link
                  onClick={() => setIsOpen(false)}
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
                    onClick={() => setIsOpen(false)}
                    className={`${pathname === "/resources/faq" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                    href="/resources/faq"
                  >
                    FAQ
                  </Link>
                  <Link
                    onClick={() => setIsOpen(false)}
                    className={`${pathname === "/resources/blog" ? "bg-[#F3F4F6]" : ""} block rounded-lg px-4 py-[10px] text-sm font-medium hover:bg-[#F3F4F6]`}
                    href="/resources/blog"
                  >
                    Blog
                  </Link>
                </Sidebar.Collapse>
              </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar> */
}
