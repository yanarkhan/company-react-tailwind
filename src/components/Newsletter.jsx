import React from "react";
import bannerNLetter from "../assets/bannerNewsletter.svg";
import Banner from "../shared/Banner";

const Newsletter = () => {
  return (
    <div className="max-w-screen-2xl mx-auto my-10 p-4 md:px-14">
      <Banner
        banner={bannerNLetter}
        heading="Each student an share their discount code for friends"
        subHeading={`A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”`}
        styles={"md:w-3/4"}
        btnOne="I have a code"
        btnClass="rounded-2 xl"
      />
    </div>
  );
};

export default Newsletter;
