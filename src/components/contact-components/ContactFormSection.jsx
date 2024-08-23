import Image from "next/image";
import Button from "../ui/Button";

const ContactFormSection = () => {
  return (
    <section className="px-4 xl:px-0 py-[50px]">
      <div className="container min-h-[600px] shadow-lg bg-[#FBFBFB] flex flex-col lg:flex-row justify-between">
        <div className="relative basis-full lg:basis-1/2">
          <Image
            className="w-full h-full"
            src="/images/map-img.png"
            alt="Map"
            fill
          />
        </div>
        <div className="basis-full lg:basis-1/2 py-[50px] lg:p-[50px]">
          <h5 className="text-2xl text-center font-medium mb-5">
            Get in Touch
          </h5>
          <form className="space-y-5" action="">
            <div>
              <input
                className="w-full border-gray-300 text-sm rounded-lg py-3"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="w-full border-gray-300 text-sm rounded-lg py-3"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="w-full border-gray-300 text-sm rounded-lg py-3"
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <textarea
                className="w-full border-gray-300 text-sm rounded-lg py-3"
                name=""
                id=""
                placeholder="Write your message"
                rows={6}
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <Button className="mx-auto">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
