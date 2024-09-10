import PageBanner from "@/components/common/PageBanner";
import ContactFormSection from "@/components/pages/contact-us/ContactFormSection";
import AddressInfoSection from "@/components/pages/contact-us/AddressInfoSection";

export const metadata = {
  title: "Hire&Fire | Contact Us",
};

const ContactUsPage = () => {
  return (
    <main>
      <PageBanner title="Contact Us" />
      <section className="py-[100px]">
        <div className="container">
          <AddressInfoSection />
        </div>
      </section>
      <ContactFormSection />
    </main>
  );
};

export default ContactUsPage;
