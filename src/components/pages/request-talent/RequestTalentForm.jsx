"use client";

import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";
import { apiBaseUrl } from "@/secrets";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import {
  Checkbox,
  Label,
  RangeSlider,
  Spinner,
  Textarea,
  TextInput,
} from "flowbite-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const RequestTalentForm = () => {
  const [value, setValue] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { register, handleSubmit, reset } = useForm();
  const mutation = useMutation({
    mutationFn: async (data) =>
      await axios
        .post(`${apiBaseUrl}/requesttalents/`, data)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          toast.error(`Something went wrong!, please try again`);
        }),
  });

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const sliderBackground = () => {
    return {
      background: `linear-gradient(to right, red ${value ? value * 2 : 50}%, #d1d5db ${value ? value * 2 : 50}%)`,
    };
  };

  const onSubmit = (data) => {
    try {
      const submitData = {
        company_name: data.company_name,
        name_surename: data.full_name,
        company_tax_id: data.company_tax_id,
        email_address: data.email,
        phone_number: data.phone_number,
        foregin_worker: data.foreign_workers,
        job_position: data.position,
        number_of_workers: data.number_of_workers,
        location_of_work: data.location,
        comments: data.comment,
      };

      mutation.mutate(submitData);

      if (mutation.isSuccess) {
        reset();
        toast("Thanks for submitting");
      }
    } catch (error) {
      toast.error("Failed to submit. Something went wrong!");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-2">
        {/* column  */}

        <FadeInDownWithSlowBounce>
          <div className="mb-2 block">
            <Label value="Full Name*" />
          </div>
          <TextInput
            {...register("full_name")}
            className="bg-[#F7F8F8]"
            type="text"
            required
            shadow
          />
        </FadeInDownWithSlowBounce>

        <FadeInDownWithSlowBounce>
          <div className="mb-2 block">
            <Label value="Email*" />
          </div>
          <TextInput
            {...register("email")}
            className="bg-[#F7F8F8]"
            type="email"
            required
            shadow
          />
        </FadeInDownWithSlowBounce>

        <FadeInDownWithSlowBounce>
          <div className="mb-2 block">
            <Label value="Phone Number*" />
          </div>
          <TextInput
            {...register("phone_number")}
            className="bg-[#F7F8F8]"
            type="tel"
            required
            shadow
          />
        </FadeInDownWithSlowBounce>

        <FadeInDownWithSlowBounce>
          <div className="mb-2 block">
            <Label value="Company Name*" />
          </div>
          <TextInput
            {...register("company_name")}
            className="bg-[#F7F8F8]"
            type="text"
            required
            shadow
          />
        </FadeInDownWithSlowBounce>

        <FadeInDownWithSlowBounce>
          <div className="mb-2 block">
            <Label value="Company Tax ID*" />
          </div>
          <TextInput
            {...register("company_tax_id")}
            className="bg-[#F7F8F8]"
            type="text"
            required
            shadow
          />
        </FadeInDownWithSlowBounce>

        <FadeInDownWithSlowBounce className="space-y-2">
          <div className="mb-2 block">
            <Label value="Number of Workers*" />
          </div>
          <div className="relative">
            <div className="flex items-center justify-between text-sm font-medium">
              <span>1</span>
              <span>50</span>
            </div>

            <div className="relative w-full">
              <RangeSlider
                {...register("number_of_workers")}
                onChange={handleInputChange}
                className="range-thumb w-full"
                min={0}
                max={50}
                defaultValue={25}
                id="numberOfWorkers"
                style={sliderBackground()}
                required
              />
              <div
                className="absolute -translate-y-16 transform text-sm font-medium text-white"
                style={{ left: `calc(${value}% - 8px)` }}
              >
                {value}
              </div>
            </div>
          </div>
        </FadeInDownWithSlowBounce>

        <FadeInDownWithSlowBounce>
          <div className="mb-2 block">
            <Label value="Position Requiring a Foreign Worker*" />
          </div>
          <TextInput
            {...register("position")}
            className="bg-[#F7F8F8]"
            type="text"
            required
            shadow
          />
        </FadeInDownWithSlowBounce>

        <FadeInDownWithSlowBounce>
          <div className="mb-2 block">
            <Label value="Location of Work*" />
          </div>
          <TextInput
            {...register("location")}
            className="bg-[#F7F8F8]"
            type="text"
            required
            shadow
          />
        </FadeInDownWithSlowBounce>

        {/* column  */}

        <FadeInDownWithSlowBounce>
          <div className="mb-2 block">
            <Label value="Do you have any foreign workers (If any please write number)*" />
          </div>
          <TextInput
            {...register("foreign_workers")}
            className="bg-[#F7F8F8]"
            type="text"
            required
            shadow
          />
        </FadeInDownWithSlowBounce>
      </div>

      <div className="grid grid-cols-1 gap-x-10 gap-y-5 lg:grid-cols-2">
        <FadeInDownWithSlowBounce>
          <div className="mb-2 block">
            <Label value="Comments (Optional)" />
          </div>
          <Textarea {...register("comment")} rows={5} />
        </FadeInDownWithSlowBounce>
      </div>
      <FadeInDownWithSlowBounce className="space-y-6">
        <ul className="list-disc space-y-3 px-4 text-sm">
          <li>
            By submitting this form you are agreeing with our terms and polices
          </li>
          <li>We never share your information for marketing purpose</li>
          <li>
            You have the right to remove your information from our record
            anytime
          </li>
        </ul>
        <div className="flex items-center gap-2">
          <Checkbox
            id="accept"
            onClick={() => setButtonDisabled((prev) => !prev)}
          />
          <Label htmlFor="accept">I accept</Label>
        </div>

        <div>
          <button
            disabled={buttonDisabled || mutation.isPending}
            className={`rounded-md border-2 px-4 py-3 text-sm text-white duration-200 ${
              buttonDisabled
                ? "cursor-not-allowed border-gray-400 bg-gray-400"
                : "cursor-pointer border-primary bg-primary hover:border-secondary hover:bg-transparent hover:text-secondary"
            }`}
            type="submit"
          >
            {mutation.isPending ? (
              <>
                <Spinner aria-label="Small spinner example" size="sm" />{" "}
                Submitting
              </>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </FadeInDownWithSlowBounce>
    </form>
  );
};

export default RequestTalentForm;
