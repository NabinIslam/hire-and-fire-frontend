"use client";

import { useState } from "react";
import { Slider } from "rsuite";

const RequestTalentForm = () => {
  const [value, setValue] = useState([20, 80]);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
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
            className="w-full rounded-md border-[2px] border-gray-300 bg-transparent"
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
            className="w-full rounded-md border-[2px] border-gray-300 bg-transparent"
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
            className="w-full rounded-md border-[2px] border-gray-300 bg-transparent"
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
            className="w-full rounded-md border-[2px] border-gray-300 bg-transparent"
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
            className="w-full rounded-md border-[2px] border-gray-300 bg-transparent"
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
            className="w-full rounded-md border-[2px] border-gray-300 bg-transparent"
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
            className="w-full rounded-md border-[2px] border-gray-300 bg-transparent"
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
          <div className="flex items-center justify-between text-sm">
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
            className="w-full rounded-md border-[2px] border-gray-300 bg-transparent"
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
            className="w-full rounded-md border-[2px] border-gray-300 bg-transparent"
            type="text"
            id="comments"
            name="comments"
            rows={5}
            required
          />
        </div>
      </div>

      <ul className="list-disc space-y-3 px-4 text-sm">
        <li>
          By submitting this form you are agreeing with our terms and polices
        </li>
        <li>We never share your information for marketing purpose</li>
        <li>
          You have the right to remove your information from our record anytime
        </li>
      </ul>

      <div className="space-x-2">
        <input type="checkbox" id="accept" name="accept" required />
        <label for="accept">I accept</label>
      </div>
      <button className="rounded-md border-2 border-primary bg-primary px-4 py-3 text-sm text-white duration-200 hover:border-white hover:bg-transparent hover:text-white">
        Send
      </button>
    </form>
  );
};

export default RequestTalentForm;
