"use client";

import FadeInUpWithSlowBounce from "../animations/FadeInUpWithSlowBounce";

const TitleDescSection = ({ title, description, children, className }) => {
  return (
    <section className={`${className} space-y-8 py-[50px]`}>
      <FadeInUpWithSlowBounce className="container space-y-4">
        <h2 className="text-center text-4xl font-semibold lg:text-5xl">
          {title}
        </h2>
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-sm font-medium">{description}</p>
        </div>
      </FadeInUpWithSlowBounce>
      <div className="container">{children}</div>
    </section>
  );
};

export default TitleDescSection;
