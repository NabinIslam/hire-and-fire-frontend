import Banner from '@/components/Banner';
import BenefitsSection from '@/components/BenefitsSection';
import ContactUs from '@/components/ContactUs';
import Partner from '@/components/Partner';
import RolesSection from '@/components/RolesSection';

const Home = () => {
  return (
    <main>
      <Banner />
      <Partner />
      <RolesSection />
      <BenefitsSection />
      <ContactUs />
    </main>
  );
};

export default Home;
