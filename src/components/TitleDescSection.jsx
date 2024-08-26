const TitleDescSection = ({ title, description, children, className }) => {
  return (
    <section className={`py-[50px] space-y-8 ${children}`}>
      <div className="container space-y-4">
        <h2 className="text-center text-4xl lg:text-5xl font-semibold">
          {title}
        </h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-sm font-medium">{description}</p>
        </div>
      </div>
      <div className="container">{children}</div>
    </section>
  );
};

export default TitleDescSection;
