import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import Button from "./ui/Button";

const ContactUs = () => {
  return (
    <section className="py-[50px]">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col shadow-2xl lg:flex-row">
          <div className="flex basis-[40%] flex-col justify-between gap-5 bg-contact-bg bg-cover bg-center bg-no-repeat px-[30px] py-[30px] text-white lg:px-[50px] lg:py-[100px]">
            <h4 className="text-3xl">Contact Us</h4>
            <p className="text-sm">Say Something to start a live chat</p>
            <div className="flex gap-5">
              <div className="">
                <span className="flex size-[50px] items-center justify-center bg-[#004785] p-2">
                  <FaMapMarkerAlt className="text-xl" />
                </span>
              </div>
              <div>
                <h6 className="text-xl">Company Location</h6>
                <p className="text-sm">
                  Bucureşti Sectorul 1, Strada ING. ZABLOVSCHI, Nr. 10, BIROUL 1
                </p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="">
                <span className="flex size-[50px] items-center justify-center bg-[#004785] p-2">
                  <FaPhoneVolume className="text-xl" />
                </span>
              </div>
              <div>
                <h6 className="text-xl">Phone Number</h6>
                <p className="text-sm">+(40) 7372 28622</p>
              </div>
            </div>

            <div className="flex gap-5">
              <div className="">
                <span className="flex size-[50px] items-center justify-center bg-[#004785] p-2">
                  <FaRegEnvelope className="text-xl" />
                </span>
              </div>
              <div>
                <h6 className="text-xl">Email Address</h6>
                <p className="text-sm">career@hireandfire.eu</p>
              </div>
            </div>
          </div>

          <div className="basis-[60%] p-[50px]">
            <form className="space-y-5" action="">
              <div>
                <input
                  className="border-slate-500 w-full rounded-lg border-2 px-5 py-3 text-sm"
                  type="text"
                  name=""
                  placeholder="First name"
                  id=""
                />
              </div>
              <div>
                <input
                  className="border-slate-500 w-full rounded-lg border-2 px-5 py-3 text-sm"
                  type="email"
                  name=""
                  placeholder="Email"
                  id=""
                />
              </div>
              <div>
                <input
                  className="border-slate-500 w-full rounded-lg border-2 px-5 py-3 text-sm"
                  type="tel"
                  name=""
                  placeholder="Phone Number"
                  id=""
                />
              </div>
              <div>
                <textarea
                  className="border-slate-500 w-full rounded-lg border-2 px-5 py-3 text-sm"
                  name=""
                  placeholder="Write Your message"
                  rows={6}
                  id=""
                ></textarea>
              </div>

              <div className="flex justify-center">
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
