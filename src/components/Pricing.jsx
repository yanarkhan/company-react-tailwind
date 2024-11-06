import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import PricingCard from "../shared/PricingCard";
import PricingToggle from "../shared/PricingToggle";
import { packages } from "../shared/PricingData";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section
      className="max-w-screen-2xl mx-auto p-4 py-8 md:py-10 md:px-14"
      id="pricing"
    >
      <div className="text-center px-4">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold text-primary mb-2">
          Here are all our plans
        </h2>
        <p className="text-tertiary mx-auto text-sm md:text-base md:w-2/3 lg:w-1/3">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>

        <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="mx-auto grid gap-6 mt-12 md:mt-20 sm:grid-cols-2 lg:grid-cols-3 md:gap-8 lg:gap-10 md:w-11/12  "
      >
        {packages.map((pkg, index) => (
          <PricingCard key={index} pkg={pkg} isYearly={isYearly} />
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
