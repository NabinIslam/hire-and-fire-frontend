import Button from "../../ui/Button";
import Link from "next/link";
import TitleDescSection from "../../common/TitleDescSection";
import HomeBlogs from "./HomeBlogs";
import FadeInUpWithSlowBounce from "@/components/animations/FadeInUpWithSlowBounce";

const RecentNewsesNBlogs = () => {
  return (
    <TitleDescSection
      className="pb-[100px]"
      title="Recent Our News & Blog"
      description="Stay updated with the latest news articles and trending stories."
    >
      <HomeBlogs />

      <FadeInUpWithSlowBounce className="mt-10 flex justify-center">
        <Link href="/resources/blog">
          <Button>View All Blogs</Button>
        </Link>
      </FadeInUpWithSlowBounce>
    </TitleDescSection>
  );
};

export default RecentNewsesNBlogs;
