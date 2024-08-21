import Link from "next/link";
import Button from "./ui/Button";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaMapMarkerAlt, FaTwitter } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitch } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#004785] py-[50px] text-white">
      <div className="container space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
          <div className="space-y-4">
            <img src="/Logo.png" alt="" />
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

            <button className="bg-primary hover:bg-transparent hover:bg-white text-white hover:text-primary border-2 border-secondary hover:border-primary text-sm px-4 py-3 rounded-md duration-200">
              Contact Us
            </button>
          </div>
          <div className="space-y-5">
            <span className="text-xl border-b-[1px] pb-1">Quick Links</span>
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
            <span className="text-xl border-b-[1px] pb-1">Our Services</span>
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
            <div className="flex bg-white rounded-md items-center justify-between">
              <input
                className="h-full w-full basis-full px-3 border-none focus:ring-0 text-slate-500"
                type="text"
                placeholder="Your Email Here"
              />
              <button className="bg-primary hover:bg-transparent hover:bg-white text-white hover:text-primary border-2 border-primary hover:border-primary text-sm px-4 py-3 rounded-md duration-200">
                Contact Us
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <FaPhone className="bg-[#F90945] p-2 text-3xl rounded-full" />{" "}
                +40 123 456 789
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaEnvelope className="bg-[#F90945] p-2 text-3xl rounded-full" />{" "}
                Contact@hireandfire.agency
              </div>
              <div className="flex items-start gap-2 text-sm">
                <FaMapMarkerAlt className="bg-[#F90945] p-2 text-3xl rounded-full" />
                Strada ING. Zablovschi, Nr. 10,
                <br /> Biroul 1, Sectorul 1, Bucuresti, Romania.
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex flex-wrap flex-col gap-6 xl:flex-row items-center justify-between text-sm text-center md:text-left">
          <div>© Copyright 2024 “Hire & Fire” All Rights Reserved.</div>
          <div>
            <ul className="flex gap-8">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col xl:flex-row items-center gap-3 xl:gap-10">
            Follow Us
            <span className="flex items-center gap-3">
              <FaFacebook className="bg-white text-[#f90945] p-1 rounded-full text-2xl" />
              <FaInstagram className="bg-white text-[#f90945] p-1 rounded-full text-2xl" />
              <FaTwitter className="bg-white text-[#f90945] p-1 rounded-full text-2xl" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
