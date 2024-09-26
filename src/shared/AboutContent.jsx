import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const AboutContent = ({
  imageSrc,
  title,
  highlight,
  text,
  reverse,
  useMaxWidth,
}) => {
  return (
    <div
      className={`flex flex-col justify-between items-center gap-8 ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } lg:px-14`}
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-1/2"
      >
        <img src={imageSrc} alt="About Image" />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="md:w-2/5"
      >
        <h2
          className={`text-3xl font-bold text-primary mb-5 md:leading-normal md:text-5xl  ${
            useMaxWidth ? "max-w-lg" : "max-w-xl"
          }
          }`}
        >
          {title} <span className="text-secondary">{highlight}</span>
        </h2>
        <p className="text-lg text-tertiary mb-7 max-w-lg">{text}</p>
        <button className="btnPrimary">Get Started</button>
      </motion.div>
    </div>
  );
};

export default AboutContent;
