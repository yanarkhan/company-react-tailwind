import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import React from "react";

const Banner = ({ banner, heading, subHeading, btnOne, btnTwo }) => {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] px-4 py-9 md:p-9">
      <div className="flex flex-col justify-between items-center gap-10 md:flex-row-reverse">
        {/* Banner Img */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={banner} alt="Banner Logo" />
        </motion.div>

        {/* Banner Content */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-3/5"
        >
          <h2 className="text-white font-bold text-4xl mb-6 leading-relaxed md:text-7xl md:leading-normal">
            {heading}
          </h2>
          <p className="text-[#EBEBEB] text-2xl mb-8">{subHeading}</p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="btnPrimary w-fit">{btnOne}</button>
            <button className="btnPrimary w-fit">{btnTwo}</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
