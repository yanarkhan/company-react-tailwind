import React from "react";
import featuredImg from "../assets/feature.png";

const Features = () => {
  const cardClasses =
    "flex justify-center items-center bg-[rgba(255, 255, 255, 0.04)] rounded-[35px] h-96 shadow-3xl p-8 hover:translate-y-4 transition-all duration-300 cursor-pointer";

  const featuresData = [
    { title: "Convenient study schedule" },
    { title: "Convenient study schedule", offset: "md:mt-16" },
    { title: "Convenient study schedule" },
  ];

  return (
    <section className="max-w-screen-2xl mx-auto my-24 px-4 md:px-14">
      <div className="flex flex-col justify-between items-start gap-10 lg:flex-row">
        {/* Left Side */}
        <div className="lg:w-1/4">
          <h3 className="text-3xl text-primary font-bold mb-3 lg:w-1/2">
            Why we are better than others
          </h3>
          <p className="text-base text-tertiary max-w">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            “topic sentence.”
          </p>
        </div>
        {/* Right Side | Cards */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12">
            {featuresData.map((feature, index) => (
              <div
                key={index}
                className={`${cardClasses} ${feature.offset || ""}`}
              >
                <div>
                  <img src={featuredImg} alt="Featured Image" />
                  <h5 className="text-2xl text-primary font-semibold text-center px-5 mt-5">
                    {feature.title}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
