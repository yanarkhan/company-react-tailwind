import React from "react";
import aboutImgLeft from "../assets/aboutImgLeft.png";
import aboutImgRight from "../assets/aboutImgRight.png";
import AboutContent from "../shared/AboutContent";

const About = () => {
  return (
    <section className="max-w-screen-2xl mx-auto p-4 space-y-10 md:px-14">
      <AboutContent
        imageSrc={aboutImgLeft}
        title="We have been improving our product"
        highlight="for many years."
        text="A good example of a paragraph contains a topic conclusion. 'There are many different kinds of animals that live in China."
        useMaxWidth={true}
      />

      <AboutContent
        imageSrc={aboutImgRight}
        title="You can Practice at any"
        highlight="time convenient for you."
        text="A good example of a paragraph contains a topic conclusion. 'There are many different kinds of animals that live in China."
        reverse
        useMaxWidth={false}
      />
    </section>
  );
};

export default About;