import React from "react";
import aboutImgLeft from "../assets/aboutImgLeft.png";
import aboutImgRight from "../assets/aboutImgRight.png";

const About = () => {
  return (
    <section className="max-w-screen-2xl mx-auto p-4 space-y-10 md:px-14">
      <div className="flex flex-col justify-between items-center gap-8 md:flex-row lg:px-12">
        <div className="md:w-1/2">
          <img src={aboutImgLeft} alt="About Image" />
        </div>

        {/* Right Content */}
        <div className="md:w-2/5">
          <h2 className="max-w-lg text-3xl font-bold text-primary mb-5 md:leading-normal md:text-5xl">
            We have been improving our product{" "}
            <span className="text-secondary">for many years.</span>
          </h2>
          <p className="text-lg text-tertiary mb-7 max-w-lg">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>

      <div className="flex flex-col justify-between items-center gap-8 md:flex-row-reverse lg:px-12">
        <div className="md:w-1/2">
          <img src={aboutImgRight} alt="About Image" />
        </div>

        {/* Left Content */}
        <div className="md:w-2/5">
          <h2 className="text-3xl font-bold text-primary mb-5 md:leading-normal md:text-5xl">
            You can Practice at any{" "}
            <span className="text-secondary">time convinent for you.</span>
          </h2>
          <p className="text-lg text-tertiary mb-7 max-w-lg">
            A good example of a paragraph contains a topic conclusion. 'There
            are many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default About;
