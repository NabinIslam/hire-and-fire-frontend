import Button from "../../ui/Button";
import Link from "next/link";
import TitleDescSection from "../../common/TitleDescSection";
import { getTeams } from "@/services/getTeams";
import TeamCard from "../about/TeamCard";

const TeamSection = async () => {
  const teams = await getTeams();

  return (
    <TitleDescSection
      title="Team of recruitment expert"
      description="A team of recruitment experts specializes in sourcing, assessing, and hiring top talent to meet organizational needs efficiently and effectively."
    >
      <div className="container grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teams.slice(0, 4).map((team) => (
          <TeamCard team={team} key={team.id} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/about-us">
          <Button>View All Team</Button>
        </Link>
      </div>
    </TitleDescSection>
  );
};

export default TeamSection;
