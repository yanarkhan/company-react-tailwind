// PricingCard.jsx
import React from "react";
import green from "../assets/greenRec.png";
import red from "../assets/redRec.png";

const PricingCard = ({ pkg, isYearly }) => {
  const price = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;

  return (
    <div className="border border-gray-300 py-8 px-4 md:py-12 md:px-6 rounded-lg shadow-lg transition-transform hover:shadow-xl md:hover:scale-105">
      <h3 className="text-xl md:text-2xl text-primary font-bold text-center mb-3 md:mb-4">
        {pkg.name}
      </h3>
      <p className="text-gray-500 text-sm md:text-base text-center mb-4 md:mb-6">
        {pkg.description}
      </p>
      <p className="text-center text-4xl md:text-5xl text-secondary font-bold mb-6 md:mb-8">
        ${price}
        <span className="text-sm md:text-base text-gray-400 font-medium">
          /{isYearly ? "year" : "month"}
        </span>
      </p>
      <ul className="mt-4 px-2 md:px-4 space-y-3 md:space-y-4">
        {pkg.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 md:gap-3">
            <img
              src={feature.included ? green : red}
              alt={feature.included ? "Green Icon" : "Red Icon"}
              className="w-4 h-4 md:w-5 md:h-5"
            />
            <span className="text-gray-600 text-sm md:text-base">{feature.text}</span>
          </li>
        ))}
      </ul>
      <div className="w-full mx-auto mt-8 md:mt-10 flex items-center justify-center">
        <button
          className={`${
            pkg.highlighted
              ? "btnPrimary"
              : "btnPrimaryOutline"
          } text-sm md:text-base rounded-xl font-bold w-full md:w-auto px-4 py-2 md:px-6 md:py-3`}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default PricingCard;