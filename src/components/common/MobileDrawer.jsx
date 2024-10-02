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
              src="/assets/logo.svg"
              alt="Hire and Fire"
              height={50}
              width={50}
            />
          </Link>
        </div>
        <div className="mt-10">
          <ul className="space-y-2">
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
