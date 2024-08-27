import { roles } from "@/data/roleCardData";
import RoleCard from "./RoleCard";

const RolesSection = () => {
  return (
    <section className="space-y-6 py-[50px]">
      <div className="container">
        <h2 className="mb-4 text-center text-4xl font-bold">Roles we Fill</h2>
        <p className="text-center text-sm">
          "We fill roles in construction, matching skilled professionals like
          engineers, supervisors,
          <br /> and laborers to projects requiring expertise and efficiency"
        </p>
      </div>
      <div className="container grid grid-cols-1 justify-center gap-5 md:grid-cols-2 lg:grid-cols-4">
        {roles.map((role) => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </section>
  );
};

export default RolesSection;

// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
