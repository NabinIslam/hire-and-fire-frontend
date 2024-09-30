import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import ServiceImage from "@/components/common/ServiceImage";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";

const ContractStaffing = () => {
  return (
    <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row-reverse">
      <FadeInRightWithSlowBounce className="z-50 basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
        <h2 className="text-4xl font-semibold lg:text-5xl">
          Contract Staffing
        </h2>
        <p className="text-sm font-medium">
          Contract staffing involves hiring workers for specific projects or
          periods, often through agencies, to meet short-term needs without
          permanent employment commitments. Employers benefit from flexibility
          in scaling their workforce as required, while workers gain experience
          in diverse roles. Contracts specify terms like duration, tasks, and
          compensation, offering clarity for both parties. This arrangement
          allows businesses to manage costs effectively and access specialized
          skills, while contractors enjoy varied opportunities and potential for
          long-term engagements based on performance and project demands.
        </p>
        <div>
          <Link href="/service/contract-staffing">
            <Button>See More</Button>
          </Link>
        </div>
      </FadeInRightWithSlowBounce>

      <FadeInLeftWithSlowBounce className="w-full basis-full lg:basis-1/2">
        <ServiceImage
          imageLink="/images/services/Contract Staffing.png"
          title1="Cost-Effective Hiring"
          desc1="Cost-effective global hiring."
          title2="Flexible Workforce Solutions"
          desc2="Flexible workforce management."
          title3="Rapid Deployment of Talent"
          desc3="Quick deployment of skilled talent."
        />
      </FadeInLeftWithSlowBounce>
    </div>
  );
};

export default ContractStaffing;
