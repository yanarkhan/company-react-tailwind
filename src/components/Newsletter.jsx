import React from "react";
import bannerNLetter from "../assets/bannerNewsletter.svg";
import Banner from "../shared/Banner";

const Newsletter = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-12 p-4 md:px-14">
      <Banner
        banner={bannerNLetter}
        heading="Each student an share their discount code for friends"
        subHeading="A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”"
        btnOne="I have a code"
      />
    </div>
  );
};

export default Newsletter;
