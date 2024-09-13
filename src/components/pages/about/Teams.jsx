import TeamCard from "./TeamCard";
import FadeInLeftWithSlowBounce from "../../animations/FadeInLeftWithSlowBounce";
import { apiBaseUrl } from "@/secrets";

const Teams = async () => {
  const data = await fetch(`${apiBaseUrl}/teams`);

  const teams = await data.json();

  console.log(teams);

  return (
    <div>
      <FadeInLeftWithSlowBounce>
        <h5 className="mb-5 text-center text-3xl font-semibold lg:text-left">
          The Founders
        </h5>
      </FadeInLeftWithSlowBounce>

      <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teams
          ?.filter((element) => element.teamName === "The Founders")
          .map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
      </div>

      <FadeInLeftWithSlowBounce>
        <h5 className="mb-5 text-center text-3xl font-semibold lg:text-left">
          Recruitment Specialists
        </h5>
      </FadeInLeftWithSlowBounce>

      <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teams
          ?.filter((element) => element.teamName === "Recruitment Specialists")
          .map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
      </div>

      <FadeInLeftWithSlowBounce>
        <h5 className="mb-5 text-center text-3xl font-semibold lg:text-left">
          Sales & Marketing Team
        </h5>
      </FadeInLeftWithSlowBounce>

      <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teams
          ?.filter((element) => element.teamName === "Sales & Marketing Team")
          .map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
      </div>

      <FadeInLeftWithSlowBounce>
        <h5 className="mb-5 text-center text-3xl font-semibold lg:text-left">
          Accounting Team
        </h5>
      </FadeInLeftWithSlowBounce>

      <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teams
          ?.filter((element) => element.teamName === "Accounting Team")
          .map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
      </div>
    </div>
  );
};

export default Teams;
