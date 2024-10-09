import FadeInDownWithSlowBounce from "@/components/animations/FadeInDownWithSlowBounce";
import Button from "../../ui/Button";

const ContactFormSection = () => {
  return (
    <FadeInDownWithSlowBounce>
      <section className="px-4 pb-[100px] xl:px-0">
        <div className="container">
          <div className="flex min-h-[600px] flex-col justify-between bg-[#FBFBFB] shadow-md lg:flex-row">
            <div className="relative min-h-[500px] w-full basis-full md:h-auto lg:basis-1/2">
              <iframe
                className="absolute left-0 top-0 h-full w-full focus:border-0 focus:ring-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d711.9127450971082!2d26.072229846739514!3d44.46082750811414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2021ea90a1293%3A0xa8abd61622410077!2sStrada%20Inginer%20Zablovschi%2010%2C%20Bucure%C8%99ti%20077190%2C%20Romania!5e0!3m2!1sen!2sbd!4v1724827903741!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowfullscreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="basis-full px-4 py-[50px] lg:basis-1/2 lg:p-[50px]">
              <h5 className="mb-5 text-center text-2xl font-medium">
                Get in Touch
              </h5>
              <form className="space-y-5" action="">
                <div>
                  <input
                    className="w-full rounded-lg border-gray-300 py-3 text-sm focus:border-secondary focus:ring-0"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-lg border-gray-300 py-3 text-sm focus:border-secondary focus:ring-0"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <input
                    className="w-full rounded-lg border-gray-300 py-3 text-sm focus:border-secondary focus:ring-0"
                    type="tel"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div>
                  <textarea
                    className="w-full rounded-lg border-gray-300 py-3 text-sm focus:border-secondary focus:ring-0"
                    name=""
                    id=""
                    placeholder="Write your message"
                    rows={6}
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <Button type="submit" className="mx-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </FadeInDownWithSlowBounce>
  );
};

export default ContactFormSection;
