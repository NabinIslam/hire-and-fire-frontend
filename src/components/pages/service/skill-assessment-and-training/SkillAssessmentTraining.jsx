import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import ServiceImage from "@/components/common/ServiceImage";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";

const SkillAssessmentTraining = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row-reverse">
        <FadeInLeftWithSlowBounce className="z-50 basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold lg:text-4xl">
            Skill Assessment & Training
          </h2>
          <p className="text-sm font-medium">
            Skill assessment and training involve evaluating employees'
            capabilities and providing development opportunities to enhance
            their proficiency. This process includes identifying strengths and
            areas needing improvement through tests, simulations, or performance
            evaluations. Subsequently, tailored training programs are
            implemented to foster skill development and career advancement. By
            regularly assessing and improving employee skills, organizations
            ensure workforce competence and adaptability to evolving business
            needs. This approach not only enhances productivity but also boosts
            employee satisfaction and retention, contributing to overall
            organizational success.
          </p>
          <div>
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Skill Assessment & Training.png"
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

export default SkillAssessmentTraining;
