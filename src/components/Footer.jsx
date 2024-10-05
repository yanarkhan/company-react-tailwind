import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import SubscribeForm from "../shared/SubscribeForm";
import FooterNavSection from "../shared/FooterNavSection";
import { FooterNavData, socialMediaIcons } from "../shared/FooterData";

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      className="bg-[#010851] max-w-screen-2xl mx-auto text-white p-4 md:px-14"
    >
      <div className="my-12 flex flex-col md:px-10 gap-x-16 md:flex-row">
        <div className="md:w-1/3 mt-3">
          <a
            href="/"
            className="text-2xl font-semibold text-primary flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-10 inline-block items-center "
            />
            <span className="text-white">ReactJS</span>
          </a>
          <p className="mt-10 text-white max-w-lg">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence.
          </p>

          <SubscribeForm />
        </div>

        <div className="flex flex-col flex-wrap justify-between items-start gap-5 md:w-2/3 md:flex-row">
          {FooterNavData.map((section, index) => (
            <FooterNavSection
              key={index}
              title={section.title}
              items={section.contacts || section.links}
              isContact={!!section.contacts}
            />
          ))}
        </div>
      </div>

      <div className="md:px-10">
        <hr />
      </div>

      <div className="flex flex-col justify-between gap-8 my-8 sm:flex-row sm:items-center md:px-10">
        <p className="text-lg">&#169; All Rights Reserved By Ryan Arkhan 🚀</p>
        <div className="flex items-center space-x-5">
          {socialMediaIcons.map((icon, index) => (
            <img
              key={index}
              src={icon.src}
              alt={icon.alt}
              className="w-8 cursor-pointer hover:-translate-y-3 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
