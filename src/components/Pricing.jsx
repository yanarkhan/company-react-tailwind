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

        {/* Pricing Toggle */}
        <PricingToggle isYearly={isYearly} setIsYearly={setIsYearly} />
      </div>

      {/* Pricing Cards */}
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.5 }}
        className="grid mx-auto gap-10 mt-20 sm:grid-cols-2 md:grid-cols-3 md:w-11/12"
      >
        {packages.map((pkg, index) => (
          <PricingCard key={index} pkg={pkg} isYearly={isYearly} />
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
