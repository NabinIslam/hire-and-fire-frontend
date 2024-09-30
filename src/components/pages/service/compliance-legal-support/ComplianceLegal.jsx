import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import ServiceImage from "@/components/common/ServiceImage";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";

const ComplianceLegal = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row-reverse">
        <FadeInLeftWithSlowBounce className="z-50 basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Compliance & Legal Support
          </h2>
          <p className="text-sm font-medium">
            Compliance and legal support services assist businesses in adhering
            to laws and regulations, mitigating risks, and ensuring ethical
            practices. These services include advising on legal matters,
            conducting audits, drafting and reviewing contracts, and managing
            regulatory compliance. By providing expert guidance on legal
            requirements and industry standards, compliance and legal support
            helps organizations avoid legal pitfalls, maintain good standing
            with regulatory bodies, and operate efficiently within the legal
            framework. This support is crucial for minimizing liabilities and
            promoting sustainable business practices.
          </p>
          <div>
            <Link href="/service/compliance-and-legal-support">
              <Button>See More</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Compliance & Legal Support.png"
            title1="Risk Management"
            desc1="Managing risks to protect assets."
            title2="Regulatory Adherence"
            desc2="Following laws and regulations."
            title3="Contractual Compliance"
            desc3="Ensuring contract terms are met."
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default ComplianceLegal;
