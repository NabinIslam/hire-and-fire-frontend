"use client";

import PageBanner from "@/components/PageBanner";
import { useState } from "react";
import "./request-talent.css";
import "rsuite/dist/rsuite-no-reset.min.css";
import { Slider } from "rsuite";

const RequestTalent = () => {
  const [value, setValue] = useState([20, 80]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <main>
      <PageBanner title="Request Talent" />
      <section className="py-[100px] px-4">
        <div className="container rounded-2xl bg-secondary py-6 lg:py-[100px] lg:px-[150px] text-white shadow-xl space-y-5">
          <h2 className="font-semibold text-3xl lg:text-5xl text-center">
            Find Skilled Workers for your business
          </h2>
          <p className="text-sm text-center">
            Fill out this form and Contact us and find out how to most
            efficiently involve foreign workers in your business.
          </p>
          <form className="space-y-5" action="">
            {/* field  */}
            <div className="space-y-2">
              <div>
                <label className="text-sm" htmlFor="name">
                  Company Name*
                </label>
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-[2px] border-gray-300 rounded-md"
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                />
              </div>
            </div>
            {/* field  */}
            <div className="space-y-2">
              <div>
                <label className="text-sm" htmlFor="name">
                  Name & Surname*
                </label>
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-[2px] border-gray-300 rounded-md"
                  type="text"
                  id="nameAndSurname"
                  name="nameAndSurname"
                  required
                />
              </div>
            </div>
            {/* field  */}
            <div className="space-y-2">
              <div>
                <label className="text-sm" htmlFor="name">
                  Company Tax ID*
                </label>
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-[2px] border-gray-300 rounded-md"
                  type="text"
                  id="companyTaxId"
                  name="companyTaxId"
                  required
                />
              </div>
            </div>
            {/* field  */}
            <div className="space-y-2">
              <div>
                <label className="text-sm" htmlFor="name">
                  Email*
                </label>
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-[2px] border-gray-300 rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
            {/* field  */}
            <div className="space-y-2">
              <div>
                <label className="text-sm" htmlFor="name">
                  Phone Number*
                </label>
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-[2px] border-gray-300 rounded-md"
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                />
              </div>
            </div>
            {/* field  */}
            <div className="space-y-2">
              <div>
                <label className="text-sm" htmlFor="name">
                  Do you have any foreign workers (If any please write number)*
                </label>
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-[2px] border-gray-300 rounded-md"
                  type="tel"
                  id="foreignWorkersNumber"
                  name="foreignWorkersNumber"
                  required
                />
              </div>
            </div>
            {/* field  */}
            <div className="space-y-2">
              <div>
                <label className="text-sm" htmlFor="name">
                  Position Requiring a Foreign Worker*
                </label>
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-[2px] border-gray-300 rounded-md"
                  type="text"
                  id="positionForeignWorker"
                  name="positionForeignWorker"
                  required
                />
              </div>
            </div>
            {/* field  */}
            <div className="space-y-10">
              <div>
                <label className="text-sm" htmlFor="name">
                  Number of Workers*
                </label>
              </div>
              <div className="relative">
                <div className="flex justify-between items-center text-sm">
                  <span>1</span>
                  <span>50</span>
                </div>

                <Slider
                  barClassName="bg-white"
                  progress
                  defaultValue={25}
                  min={1}
                  max={50}
                  onChange={(value) => {
                    console.log(value);
                  }}
                />
                <hr />

                {/* <input
                  className="range-thumb w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                  style={{
                    background: `linear-gradient(to right, #F90945 ${value}%, #d1d5db ${value}%)`,
                  }}
                /> */}
                {/* <input
                  className="range-slider w-full h-1 bg-primary rounded-lg appearance-none cursor-pointer"
                  type="range"
                  min="0"
                  max="100"
                  value={value}
                  onChange={handleChange}
                /> */}
                {/* <div
                  className="absolute top-[-35px] text-white text-sm px-3 py-1 rounded-full pointer-events-none transform -translate-x-1/2"
                  style={{ left: `${value}%` }}
                >
                  {value}
                </div> */}
              </div>
            </div>
            {/* field  */}
            <div className="space-y-2">
              <div>
                <label className="text-sm" htmlFor="name">
                  Location of Work*
                </label>
              </div>
              <div>
                <input
                  className="w-full bg-transparent border-[2px] border-gray-300 rounded-md"
                  type="text"
                  id="locationOfWork"
                  name="locationOfWork"
                  required
                />
              </div>
            </div>
            {/* field  */}
            <div className="space-y-2">
              <div>
                <label className="text-sm" htmlFor="name">
                  Comments (Optional)
                </label>
              </div>
              <div>
                <textarea
                  className="w-full bg-transparent border-[2px] border-gray-300 rounded-md"
                  type="text"
                  id="comments"
                  name="comments"
                  rows={5}
                  required
                />
              </div>
            </div>

            <ul className="list-disc text-sm space-y-3 px-4">
              <li>
                By submitting this form you are agreeing with our terms and
                polices
              </li>
              <li>We never share your information for marketing purpose</li>
              <li>
                You have the right to remove your information from our record
                anytime
              </li>
            </ul>

            <div className="space-x-2">
              <input type="checkbox" id="accept" name="accept" />
              <label for="accept">I accept</label>
            </div>
            <button className="bg-primary hover:bg-transparent hover:bg-white text-white hover:text-primary border-2 border-primary hover:border-primary text-sm px-4 py-3 rounded-md duration-200">
              Send
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default RequestTalent;
