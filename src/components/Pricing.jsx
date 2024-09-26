import React from "react";
import { useState } from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      yearlyPrice: 199,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/greenRec.png",
    },

    {
      name: "Advance",
      monthlyPrice: 39,
      yearlyPrice: 399,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/greenRec.png",
    },

    {
      name: "Premium",
      monthlyPrice: 59,
      yearlyPrice: 599,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/greenRec.png",
    },
  ];

  return (
    <section
      className="max-w-screen-2xl mx-auto p-4 py-10 md:px-14"
      id="pricing"
    >
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-primary mb-2 md:text-5xl">
          Here are all our plans
        </h2>
        <p className="text-tertiary mx-auto px-4 md:w-1/3">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>

        {/* Toggle Pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="text-2xl font-semibold mr-8">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? "bg-primary" : "bg-gray-500"
                }`}
              ></div>
            </div>
            <span className="text-2xl font-semibold ml-8">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            checked={isYearly}
            onClick={() => setIsYearly(!isYearly)}
            className="hidden"
          />
        </div>
      </div>

      {/* Pricing Cards */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="grid mx-auto gap-10 mt-20 sm:grid-cols-2 md:grid-cols-3 md:w-11/12"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border py-10 px-4 rounded-lg shadow-3xl md:px-6 "
          >
            <h3 className="text-3xl text-primary font-bold text-center">
              {pkg.name}
            </h3>
            <p className="text-tertiary text-center my-5">{pkg.description}</p>
            <p className="text-center text-4xl text-secondary font-bold mt-10 ">
              {isYearly ? `$${pkg.yearlyPrice}` : `$${pkg.monthlyPrice}`}
              <span className="text-base text-tertiary font-medium">
                /{isYearly ? "year" : "month"}
              </span>
            </p>
            <ul className="mt-4 px-4 space-y-2">
              <li className="flex items-center gap-3 ">
                <img
                  src={pkg.green}
                  alt="Green Rectangle"
                  className="w-4 h-4"
                />{" "}
                Video of Lessons
              </li>
              <li className="flex items-center gap-3 ">
                <img
                  src={pkg.green}
                  alt="Green Rectangle"
                  className="w-4 h-4"
                />{" "}
                Homework check
              </li>
              <li className="flex items-center gap-3 ">
                <img
                  src={pkg.green}
                  alt="Green Rectangle"
                  className="w-4 h-4"
                />{" "}
                Additional practical task
              </li>
              <li className="flex items-center gap-3 ">
                <img
                  src={pkg.green}
                  alt="Green Rectangle"
                  className="w-4 h-4"
                />{" "}
                Monthly conferences
              </li>
              <li className="flex items-center gap-3 ">
                <img
                  src={pkg.green}
                  alt="Green Rectangle"
                  className="w-4 h-4"
                />{" "}
                Personal advice from teachers
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary">Get started</button>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
