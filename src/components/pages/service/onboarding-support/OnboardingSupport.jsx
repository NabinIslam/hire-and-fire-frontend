import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import ServiceImage from "@/components/common/ServiceImage";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";

const OnboardingSupport = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row">
        <FadeInLeftWithSlowBounce className="basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold leading-[62px] lg:text-4xl">
            Onboarding Support
          </h2>
          <p className="text-sm font-medium">
            Onboarding support involves assisting new employees in adapting to
            their roles and integrating into the organization. This process
            includes orientation to company policies, introducing them to team
            members, and providing necessary training and resources. Effective
            onboarding ensures that new hires feel welcomed, understand their
            responsibilities, and can contribute to the organization's success
            quickly. It also fosters employee engagement and retention by
            setting clear expectations and helping new employees feel valued and
            prepared for their new roles.
          </p>
          <div>
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Onboarding Support.png"
            title1="Role-Specific Training"
            desc1="Customized training tailored to roles."
            title2="Orientation Programs"
            desc2="Introducing new hires to company."
            title3="Cultural Assimilation"
            desc3="Adapting to company culture"
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default OnboardingSupport;
