import { apiBaseUrl } from "@/secrets";
import TeamCard from "./TeamCard";

const Teams = async () => {
  const data = await fetch(`${apiBaseUrl}/teams`);
  const teams = await data.json();

  return (
    <div>
      <h5 className="mb-5 text-3xl font-semibold">The Founders</h5>
      <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teams
          .filter((element) => element.teamName === "The Founders")
          .map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
      </div>

      <h5 className="mb-5 text-3xl font-semibold">Recruitment Specialists</h5>
      <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teams
          .filter((element) => element.teamName === "Recruitment Specialists")
          .map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
      </div>

      <h5 className="mb-5 text-3xl font-semibold">Sales & Marketing Team</h5>
      <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teams
          .filter((element) => element.teamName === "Sales & Marketing Team")
          .map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
      </div>

      <h5 className="mb-5 text-3xl font-semibold">Accounting Team</h5>
      <div className="mb-20 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {teams
          .filter((element) => element.teamName === "Accounting Team")
          .map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
      </div>
    </div>
  );
};

export default Teams;
