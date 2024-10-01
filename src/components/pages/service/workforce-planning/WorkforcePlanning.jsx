import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import ServiceImage from "@/components/common/ServiceImage";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";

const WorkforcePlanning = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row">
        <FadeInLeftWithSlowBounce className="z-50 basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold lg:text-4xl">
            Workforce Planning
          </h2>
          <p className="text-sm font-medium">
            Workforce planning involves strategically forecasting and managing
            an organization's current and future workforce needs. It includes
            analyzing workforce trends, identifying skill gaps, and aligning
            staffing levels with business goals. By anticipating changes in
            demand and supply of talent, workforce planning helps optimize
            resource allocation, ensure workforce diversity, and support
            organizational growth. This proactive approach enables companies to
            adapt to market fluctuations, enhance productivity, and maintain
            competitive advantage through effective recruitment, training, and
            retention strategies.
          </p>
          <div>
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Workforce Planning.png"
            title1="Succession Planning"
            desc1="Strategic talent succession planning."
            title2="Future Workforce Trends"
            desc2="Future workforce insights."
            title3="Talent Gap Identification"
            desc3="Identifying critical talent gaps ."
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default WorkforcePlanning;
