import linkedInImg from "../assets/LinkedIn.png";
import twitterImg from "../assets/Twitter.png";
import igImg from "../assets/IG.png";
import fbImg from "../assets/FB.png";
import logo from "../assets/logo.png";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#010851] max-w-screen-2xl mx-auto text-white p-4 md:px-14">
      <div className="my-12 flex flex-col gap-8 md:flex-row">
        <div className="md:w-1/2 space-y-8">
          <a
            href="/"
            className="text-2xl font-semibold text-primary flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 inline-block items-center"
            />
            <span className="text-white">ReactJS</span>
          </a>
          <p className="text-white md:w-1/2">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence.
          </p>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />

            <input
              type="submit"
              value="Subscribe"
              className="py-2 px-4 bg-secondary rounded-md -ml-2 cursor-pointer hover:bg-white hover:text-primary transition-all duration-300"
            />
          </div>
        </div>

        {/* Footer Nav */}
        <div className="flex flex-col flex-wrap justify-between items-start gap-8 md:w-1/2 md:flex-row">
          <div className="space-y-5 mt-4">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-5 mt-4">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                How does it works?
              </a>
              <a href="/" className="block hover:text-gray-300">
                Where to ask question?
              </a>
              <a href="/" className="block hover:text-gray-300">
                How to play?
              </a>
              <a href="/" className="block hover:text-gray-300">
                What is needed for this?
              </a>
            </ul>
          </div>
          <div className="space-y-5 mt-4">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <p className="hover:text-gray-300">(012) 1234-567-890</p>
              <p className="hover:text-gray-300">123 xyz xyz</p>
              <p className="hover:text-gray-300">
                qwuerybaihefv, qiwu - hrebcl
              </p>
              <p className="hover:text-gray-300">095467</p>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="flex flex-col justify-between gap-8 my-8 sm:flex-row sm:items-center">
        <p>@ XYZ 20XX --- 20XX. All rights reserved.</p>

        <div className="flex items-center space-x-5">
          <img
            src={fbImg}
            alt="Sosmed Image"
            className="w-8 cursor-pointer hover:-translate-y-3 transition-all duration-300"
          />
          <img
            src={igImg}
            alt="Sosmed Image"
            className="w-8 cursor-pointer hover:-translate-y-3 transition-all duration-300"
          />
          <img
            src={twitterImg}
            alt="Sosmed Image"
            className="w-8 cursor-pointer hover:-translate-y-3 transition-all duration-300"
          />
          <img
            src={linkedInImg}
            alt="Sosmed Image"
            className="w-8 cursor-pointer hover:-translate-y-3 transition-all duration-300"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
