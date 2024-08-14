import { roles } from '@/data/roleCardData';
import RoleCard from './RoleCard';

const RolesSection = () => {
  return (
    <section className="space-y-6 py-[50px]">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-4">Roles we Fill</h2>
        <p className="text-sm text-center">
          "We fill roles in construction, matching skilled professionals like
          engineers, supervisors,
          <br /> and laborers to projects requiring expertise and efficiency"
        </p>
      </div>
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
        {roles.map(role => (
          <RoleCard key={role.id} role={role} />
        ))}
      </div>
    </section>
  );
};

export default RolesSection;

// grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
