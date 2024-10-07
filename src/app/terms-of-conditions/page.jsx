import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";
import PageBanner from "@/components/common/PageBanner";

const TermsOfConditionsPage = () => {
  return (
    <main>
      <PageBanner title="Terms of Conditions" />
      <div className="container py-[100px]">
        <div className="mx-auto max-w-4xl">
          <FadeInUpWithSlowBounce>
            <h2 className="mb-10 text-4xl font-bold">Terms and Conditions</h2>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5 space-y-3">
            <h6 className="text-xl font-semibold">Acceptance of Terms</h6>
            <p className="text-sm font-medium">
              Welcome to Hire and Fire. By accessing and using our services, you
              agree to comply with and be bound by these Terms and Conditions.
              If you do not agree with any part of these terms, you must not use
              our services.
            </p>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5 space-y-3">
            <h6 className="text-xl font-semibold">Changes to Terms</h6>
            <p className="text-sm font-medium">
              Hire and Fire reserves the right to update or modify these Terms
              and Conditions at any time without prior notice. Your continued
              use of our services following any changes indicates your
              acceptance of the new terms.
            </p>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5">
            <h6 className="mb-2 text-xl font-semibold">
              User Responsibilities
            </h6>

            <p className="mb-1 text-sm font-medium">
              Users of our services agree to:
            </p>
            <ul className="ml-4 list-disc text-sm font-medium">
              <li>
                Provide accurate and complete information when filling out the
                contact form.
              </li>
              <li>
                Use our services only for lawful purposes and in a manner that
                does not infringe the rights of, restrict, or inhibit anyone
                else's use and enjoyment of the services.
              </li>
              <li>
                Not impersonate any person or entity or falsely state or
                otherwise misrepresent your affiliation with a person or entity.
              </li>
              <li>
                Comply with all applicable labor laws and regulations when using
                our worker supply services.
              </li>
            </ul>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5">
            <h6 className="mb-2 text-xl font-semibold">
              Worker Supply Services
            </h6>

            <p className="mb-1 text-sm font-medium">
              Users of our services agree to:
            </p>
            <ul className="ml-4 list-disc text-sm font-medium">
              <li>
                Hire and Fire will supply workers as per the requirements
                specified by the client.
              </li>
              <li>
                All workers supplied will have the necessary qualifications,
                skills, and experience as requested.
              </li>
              <li>
                The client agrees to provide a safe working environment for the
                supplied workers and comply with all relevant health and safety
                regulations.
              </li>
              <li>
                The client will notify Hire and Fire immediately of any issues
                or concerns regarding the supplied workers.
              </li>
            </ul>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5 space-y-3">
            <h6 className="text-xl font-semibold">Intellectual Property</h6>
            <p className="text-sm font-medium">
              All content, trademarks, and data on this website, including but
              not limited to software, databases, text, graphics, icons,
              hyperlinks, private information, designs, and agreements, are the
              property of or licensed to Hire and Fire and as such are protected
              from infringement by local and international legislation and
              treaties.
            </p>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5">
            <h6 className="mb-2 text-xl font-semibold">
              Limitation of Liability
            </h6>

            <p className="mb-1 text-sm font-medium">
              Hire and Fire shall not be liable for any direct, indirect,
              incidental, special, or consequential damages that result from:
            </p>
            <ul className="ml-4 list-disc text-sm font-medium">
              <li>The use or inability to use our services.</li>
              <li>
                Unauthorized access to or alteration of your transmissions or
                data.
              </li>
              <li>Any other matter relating to our services.</li>
            </ul>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5 space-y-3">
            <h6 className="text-xl font-semibold">Governing Law</h6>
            <p className="text-sm font-medium">
              These Terms and Conditions are governed by and construed in
              accordance with the laws of Romania. Any disputes arising out of
              or related to the use of our services will be handled in the
              competent courts of Romania.
            </p>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5 space-y-3">
            <h6 className="text-xl font-semibold">Termination</h6>
            <p className="text-sm font-medium">
              Hire and Fire reserves the right to terminate or suspend access to
              our services immediately, without prior notice or liability, for
              any reason whatsoever, including without limitation if you breach
              the Terms.
            </p>
          </FadeInUpWithSlowBounce>

          <FadeInUpWithSlowBounce className="my-5">
            <h6 className="mb-2 text-xl font-semibold">Contact Information</h6>

            <p className="mb-1 text-sm font-medium">
              For any questions or concerns regarding these Terms and
              Conditions, please contact us at:
            </p>
            <ul className="ml-4 list-disc text-sm font-medium">
              <li>
                Address: Strada Inginer Zablovschi 10, București 077190, Romania
              </li>
              <li>Email: contact@hireandfire.eu</li>
            </ul>
            <p className="my-4 text-sm font-medium">Last updated: 8/7/2024</p>
            <p className="my-4 text-sm font-medium">
              Thank you for using Hire and Fire. We are committed to providing
              you with the best possible service while ensuring that your rights
              and responsibilities are clear.
            </p>
          </FadeInUpWithSlowBounce>
        </div>
      </div>
    </main>
  );
};

export default TermsOfConditionsPage;
