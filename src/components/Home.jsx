import React from "react";
import bannerLogo from "../assets/bannerLogo.svg";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <main className="p-4 max-w-screen-2xl mx-auto mt-24 md:px-14">
      <Banner
        banner={bannerLogo}
        heading="Develop your skills without diligence"
        subHeading="A good example of a paragraph contains a topic sentence, details and a conclusion. 'There are many different kinds of animals that live in China."
        btnOne="Get Started"
        btnTwo="Discount"
      />
    </main>
  );
};

export default Home;
