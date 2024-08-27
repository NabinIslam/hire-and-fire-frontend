import Image from "next/image";
import Button from "../ui/Button";

const ContactFormSection = () => {
  return (
    <section className="px-4 py-[50px] xl:px-0">
      <div className="container flex min-h-[600px] flex-col justify-between bg-[#FBFBFB] shadow-lg lg:flex-row">
        <div className="relative basis-full lg:basis-1/2">
          <Image
            className="h-full w-full"
            src="/images/map-img.png"
            alt="Map"
            fill
          />
        </div>
        <div className="basis-full py-[50px] lg:basis-1/2 lg:p-[50px]">
          <h5 className="mb-5 text-center text-2xl font-medium">
            Get in Touch
          </h5>
          <form className="space-y-5" action="">
            <div>
              <input
                className="w-full rounded-lg border-gray-300 py-3 text-sm"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="w-full rounded-lg border-gray-300 py-3 text-sm"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="w-full rounded-lg border-gray-300 py-3 text-sm"
                type="tel"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <textarea
                className="w-full rounded-lg border-gray-300 py-3 text-sm"
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
