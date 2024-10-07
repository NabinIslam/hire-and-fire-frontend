import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import PageBanner from "@/components/common/PageBanner";

const PrivacyPolicyPage = () => {
  return (
    <main>
      <PageBanner title="Privacy Policy" />
      <div className="container py-[100px]">
        <div className="mx-auto max-w-4xl">
          <FadeInUpWithSlowBounce>
            <h2 className="mb-10 text-4xl font-bold">Privacy Policy</h2>
            <p className="text-sm font-medium">
              Welcome to Hire and Fire. We are committed to protecting your
              privacy and ensuring that your personal information is handled in
              a safe and responsible manner.
            </p>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5">
            <h6 className="mb-2 text-xl font-semibold">
              Information We Collect
            </h6>

            <p className="mb-1 text-sm font-medium">
              We collect the following types of information:
            </p>
            <ul className="ml-4 list-disc text-sm font-medium">
              <li>
                Contact Information: This includes your name, email address, and
                any other details you provide via our contact form.
              </li>
              <li>
                Cookies: We use cookies to enhance your experience on our
                website. Cookies are small data files stored on your device that
                help us understand your preferences and improve our services.
              </li>
            </ul>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5">
            <h6 className="mb-2 text-xl font-semibold">Use of Information</h6>

            <p className="mb-1 text-sm font-medium">
              The information we collect is used for the following purposes:
            </p>
            <ul className="ml-4 list-disc text-sm font-medium">
              <li>
                Communication: To respond to your inquiries and provide customer
                support.
              </li>
              <li>
                Website Improvement: To analyze user behavior and improve our
                website functionality.
              </li>
              <li>
                Service Provision: To match workers with appropriate job
                opportunities and manage our workforce supply services.
              </li>
            </ul>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5 space-y-3">
            <h6 className="text-xl font-semibold">Data Storage and Security</h6>
            <p className="text-sm font-medium">
              We take appropriate security measures to protect your information
              from unauthorized access, alteration, disclosure, or destruction.
              Your data is stored on secure servers, and we implement technical
              and organizational measures to safeguard your information.
            </p>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5 space-y-3">
            <h6 className="text-xl font-semibold">Cookies</h6>
            <p className="text-sm font-medium">
              Our website uses cookies to collect information about your
              browsing behavior. These cookies help us understand how you use
              our site and enable us to provide you with a more personalized
              experience. You can manage your cookie preferences through your
              browser settings.
            </p>
          </FadeInUpWithSlowBounce>
          <FadeInUpWithSlowBounce className="my-5 space-y-3">
            <h6 className="text-xl font-semibold">Third-Party Disclosure</h6>
            <p className="text-sm font-medium">
              We do not sell, trade, or otherwise transfer your personal
              information to third parties without your consent, except as
              required by law or to trusted third parties who assist us in
              operating our website and conducting our business.
            </p>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5 space-y-3">
            <h6 className="text-xl font-semibold">Your Rights</h6>
            <p className="text-sm font-medium">
              You have the right to access, correct, or delete your personal
              information. If you wish to exercise these rights, including the
              removal of your data, please contact us at
              Contact@hireandfire.euc.com.
            </p>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5">
            <h6 className="mb-2 text-xl font-semibold">Contact Information</h6>

            <p className="mb-1 text-sm font-medium">
              If you have any questions or concerns about our Privacy Policy,
              please contact us at:
            </p>
            <ul className="ml-4 list-disc text-sm font-medium">
              <li>
                Address: Strada Inginer Zablovschi 10, București 077190, Romania
              </li>
              <li>Email: Contact@hireandfire.euc.com</li>
            </ul>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5">
            <h6 className="mb-2 text-xl font-semibold">
              Changes to This Privacy Policy
            </h6>

            <p className="mb-1 text-sm font-medium">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and we encourage you to review our
              policy periodically to stay informed about how we are protecting
              your information.
            </p>

            <p className="my-4 text-sm font-medium">Last updated: 8/7/2024</p>
            <p className="my-4 text-sm font-medium">
              Thank you for choosing Hire and Fire. We value your trust and are
              committed to ensuring your privacy.
            </p>
          </FadeInUpWithSlowBounce>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
