const TitleDescSection = ({ title, description, children, className }) => {
  return (
    <section className={`space-y-8 py-[50px] ${children}`}>
      <div className="container space-y-4">
        <h2 className="text-center text-4xl font-semibold lg:text-5xl">
          {title}
        </h2>
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-sm font-medium">{description}</p>
        </div>
      </div>
      <div className="container">{children}</div>
    </section>
  );
};

export default TitleDescSection;
