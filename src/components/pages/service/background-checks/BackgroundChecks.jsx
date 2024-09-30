import FadeInLeftWithSlowBounce from "@/components/animations/FadeInLeftWithSlowBounce";
import FadeInRightWithSlowBounce from "@/components/animations/FadeInRightWithSlowBounce ";
import ServiceImage from "@/components/common/ServiceImage";
import Button from "@/components/ui/Button";
import { Link } from "@/i18n/routing";

const BackgroundChecks = () => {
  return (
    <section className="pb-[50px] pt-[100px]">
      <div className="container flex flex-col items-center justify-between gap-16 lg:gap-24 xl:flex-row">
        <FadeInLeftWithSlowBounce className="z-50 basis-full space-y-5 text-center lg:basis-1/2 xl:text-left">
          <h2 className="text-4xl font-semibold lg:text-5xl">
            Background Checks
          </h2>
          <p className="text-sm font-medium">
            Background checks are a process used by employers to verify the
            credentials, history, and suitability of potential employees. This
            includes examining criminal records, employment history, education
            verification, credit reports, and other relevant information. The
            purpose is to ensure that candidates have the integrity,
            qualifications, and experience they claim to possess, and to
            mitigate risks associated with hiring. Background checks help
            employers make informed hiring decisions, promote workplace safety,
            and protect the organization's reputation and assets.
          </p>
          <div>
            <Link href="/hire-worker/request-worker">
              <Button>Request Worker</Button>
            </Link>
          </div>
        </FadeInLeftWithSlowBounce>

        <FadeInRightWithSlowBounce className="w-full basis-full lg:basis-1/2">
          <ServiceImage
            imageLink="/images/services/Background Checks.png"
            title1="Reference Checks"
            desc1="Verifying candidate references."
            title2="Employment History Validation"
            desc2="Verifying past job experiences."
            title3="Criminal Record Verification"
            desc3="Checking for criminal history."
          />
        </FadeInRightWithSlowBounce>
      </div>
    </section>
  );
};

export default BackgroundChecks;
