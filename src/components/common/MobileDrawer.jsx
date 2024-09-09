import { Link, usePathname } from "@/i18n/routing";
import { Sidebar } from "flowbite-react";
import Button from "../ui/Button";
import Drawer from "react-modern-drawer";
import Image from "next/image";

const MobileDrawer = ({ isOpen, toggleDrawer }) => {
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
        </div>
      </div>
    </Drawer>
  );
};

export default MobileDrawer;
