import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
import {
  FaMapMarkerAlt,
  FaTelegramPlane,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#004785] pb-[25px] pt-[50px] text-white">
      <div className="container space-y-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-[50px] lg:grid-cols-3 xl:grid-cols-4 xl:gap-6">
          <div className="basis-full space-y-4 md:basis-1/2 lg:basis-1/4">
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

            <div>
              <Link href="/contact-us">
                <button className="rounded-md border-2 border-primary bg-primary px-4 py-3 text-sm text-white duration-200 hover:border-white hover:bg-transparent">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div className="basis-full space-y-5 md:basis-1/2 lg:basis-1/4 xl:pl-[80px]">
            <span className="border-b-[1px] pb-1 text-xl">Quick Links</span>
            <ul className="flex flex-col justify-between gap-6">
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/home"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/services"
                >
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/industry"
                >
                  Industries We Serve
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/resources/blog"
                >
                  Blog & News
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/resources/faq"
                >
                  FAQ
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="duration-200 hover:text-primary"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-full space-y-5 md:basis-1/2 lg:basis-1/4">
            <span className="border-b-[1px] pb-1 text-xl">Our Services</span>
            <ul className="flex flex-col justify-between gap-6 font-medium">
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/home"
                >
                  Permanent Requitment
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/home"
                >
                  Contract Staffing
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/home"
                >
                  Housing & Accomodation Support
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/home"
                >
                  Compliance and Legal Support
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/home"
                >
                  Workforce Planning
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/home"
                >
                  Background Checks
                </Link>
              </li>
              <li className="flex items-center">
                <IoMdArrowDropright className="text-2xl" />
                <Link
                  className="font-medium duration-200 hover:text-primary"
                  href="/home"
                >
                  Onboarding Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="basis-full space-y-5 md:basis-1/2 lg:basis-1/4">
            <span className="text-xl">Get In Touch</span>
            <p>Subscribe Our Newsletter to Get Latest Update & News</p>

            <form className="flex w-full rounded-md bg-white">
              <input
                className="rounded-md border-none bg-white text-sm text-black focus:ring-0"
                type="email"
                placeholder="Your Email Here"
                required
              />
              <button
                type="submit"
                className="ml-auto basis-auto rounded-md border-2 border-primary bg-primary px-4 py-3 text-sm text-white duration-200 hover:border-primary hover:bg-transparent hover:text-primary"
              >
                Subscribe
              </button>
            </form>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <FaPhone className="rounded-full bg-[#F90945] p-2 text-3xl" />
                <Link href="tel:+40 123 456 789"> +40 123 456 789</Link>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <FaEnvelope className="rounded-full bg-[#F90945] p-2 text-3xl" />
                <Link href="mailto:Contact@hireandfire.agency">
                  contact@hireandfire.agency
                </Link>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <FaMapMarkerAlt className="rounded-full bg-[#F90945] p-2 text-3xl" />
                <Link
                  href="https://maps.app.goo.gl/qNxPC3VBa4J9Kobm6"
                  target="_blank"
                >
                  Strada ING. Zablovschi, Nr. 10,
                  <br /> Biroul 1, Sectorul 1, Bucuresti, Romania.
                </Link>
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
                <Link
                  href="https://www.facebook.com/hireandfire.eu"
                  target="_blank"
                >
                  <FaFacebook className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
                </Link>
                <Link
                  href="https://www.instagram.com/hireandfire.eu/"
                  target="_blank"
                >
                  <FaInstagram className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
                </Link>
                <Link href="https://twitter.com/hireandfireeu" target="_blank">
                  <FaTwitter className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
                </Link>
                <Link href="https://telegram.org/" target="_blank">
                  <FaTelegramPlane className="rounded-full bg-white p-1 text-2xl text-[#f90945] duration-200 hover:bg-primary hover:text-white" />
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

// grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
