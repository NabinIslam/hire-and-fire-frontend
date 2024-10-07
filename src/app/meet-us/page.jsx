import PageBanner from "@/components/common/PageBanner";
import ContactFormSection from "@/components/pages/meet-us/ContactFormSection";
import AddressInfoSection from "@/components/pages/meet-us/AddressInfoSection";

export const metadata = {
  title: "Hire&Fire | Meet Us",
};

const MeetUsPage = () => {
  return (
    <main>
      <PageBanner title="Meet Us" />
      <section className="py-[100px]">
        <div className="container">
          <AddressInfoSection />
        </div>
      </section>
      <ContactFormSection />
    </main>
  );
};

export default MeetUsPage;
