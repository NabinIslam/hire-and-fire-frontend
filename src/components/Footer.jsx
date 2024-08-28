import Link from "next/link";
import Button from "./ui/Button";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#004785] pb-[25px] pt-[50px] text-white">
      <div className="container space-y-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="space-y-4">
            <Image
              src="/images/Hire-Fire.png"
              alt="Hire And Fire"
              height={71}
              width={90}
            />

            <p className="text-sm">
              Hire & Fire is a cutting-edge job website designed to connect
              employers with top-tier talent across various industries.
              Utilizing advanced matching algorithms, it streamlines the hiring
              process, ensuring quick and effective placements. Employers
              benefit from efficient tools for posting jobs, screening
              candidates, and managing applications. Ideal for businesses aiming
              for growth, Hire & Fire is your go-to resource for all recruitment
              needs. Please note that it operates on an employer basis and does
              not provide jobs directly to workers.
            </p>

            <button className="rounded-md border-2 border-secondary bg-primary px-4 py-3 text-sm text-white duration-200 hover:border-primary hover:bg-transparent hover:bg-white hover:text-primary">
              Contact Us
            </button>
          </div>
          <div className="space-y-5">
            <span className="border-b-[1px] pb-1 text-xl">Quick Links</span>
            <ul className="flex flex-col justify-between gap-6">
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Home</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">About Us</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Services</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Industries We Serve</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Blog & News</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">FAQ</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <span className="border-b-[1px] pb-1 text-xl">Our Services</span>
            <ul className="flex flex-col justify-between gap-6">
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Permanent Requitment</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Contract Staffing</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Housing & Accomodation Support</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Compliance and Legal Support</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Workforce Planning</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Background Checks</Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link href="">Onboarding Support</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <span className="text-xl">Get In Touch</span>
            <p>Subscribe Our Newsletter to Get Latest Update & News</p>
            <div className="flex h-12 items-center justify-between rounded-md bg-white">
              <input
                className="placeholder:text-slate-500 text-slate-500 basis-full border-none px-3 text-sm focus:ring-0"
                type="text"
                placeholder="Your Email Here"
              />
              <button className="h-full w-[150px] basis-auto rounded-md border-2 border-primary bg-primary px-2 text-sm text-white duration-200 hover:border-primary hover:bg-transparent hover:bg-white hover:text-primary">
                Subscribe
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <FaPhone className="rounded-full bg-[#F90945] p-2 text-3xl" />{" "}
                +40 123 456 789
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaEnvelope className="rounded-full bg-[#F90945] p-2 text-3xl" />{" "}
                Contact@hireandfire.agency
              </div>
              <div className="flex items-start gap-2 text-sm">
                <FaMapMarkerAlt className="rounded-full bg-[#F90945] p-2 text-3xl" />
                Strada ING. Zablovschi, Nr. 10,
                <br /> Biroul 1, Sectorul 1, Bucuresti, Romania.
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm md:text-left xl:flex-row">
          <div className="basis-full lg:basis-1/3">
            © Copyright 2024 “Hire & Fire” All Rights Reserved.
          </div>
          <div className="basis-full lg:basis-1/3">
            <ul className="flex items-center justify-center gap-8">
              <li>
                <Link className="duration-200 hover:underline" href="#">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="duration-200 hover:underline" href="#">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="duration-200 hover:underline" href="#">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-full lg:basis-1/3">
            <div className="flex flex-col items-center justify-end gap-3 font-medium xl:flex-row xl:gap-10">
              Follow Us
              <span className="flex items-center gap-3">
                <Link href="#">
                  <FaFacebook className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
                </Link>
                <Link href="#">
                  <FaInstagram className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
                </Link>
                <Link href="#">
                  <FaTwitter className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
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
